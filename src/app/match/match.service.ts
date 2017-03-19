import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';
import * as uuid from 'uuid';
import * as moment from 'moment';
const glicko2: any = require('glicko2');

@Injectable()
export class MatchService {
    database: any;
    players: any[] = [];

    settings = {
        // tau : "Reasonable choices are between 0.3 and 1.2, though the system should
        //      be tested to decide which value results in greatest predictive accuracy."
        tau: 0.5,
        // rating : default rating
        rating: 1500,
        //rd : Default rating deviation
        //     small number = good confidence on the rating accuracy
        rd: 200,
        //vol : Default volatility (expected fluctation on the player rating)
        vol: 0.06
    };

    ranking = new glicko2.Glicko2(this.settings);

    constructor(af: AngularFire) {
        this.database = af.database;
    }

    async save(players: any[], teamWon: number) {
        await this.getExistingPlayers(players);

        this.updatePlayersRanking(teamWon);

        return Promise.all([this.savePlayers(), this.saveMatch(teamWon)]);
    }

    private getExistingPlayers(players) {
        return new Promise((resolve) => {
            const subscription = this.database.list('/players')
                .subscribe(existingPlayers => {
                    players.forEach(player => {
                        const existingPlayer = existingPlayers.find(ep => ep.Name === player.Name);
                        if (existingPlayer) {
                            Object.assign(existingPlayer, {
                                Ranking: this.ranking.makePlayer(existingPlayer.Ranking),
                                Team: player.Team,
                            });
                            this.players.push(existingPlayer);
                        } else {
                            this.players.push({
                                Name: player.Name,
                                Team: player.Team,
                                Ranking: this.ranking.makePlayer(),
                            });
                        }
                    });
                    resolve();
                    subscription.unsubscribe();
                });
        });
    }

    private updatePlayersRanking(teamWon) {
        const team1 = this.players.filter(player => player.Team === 1);
        const team2 = this.players.filter(player => player.Team === 2);
        const outcome = teamWon === 0 ? 0.5 : teamWon === 1 ? 1 : 0;
        const matches = [];

        team1.forEach(team1Player =>
            team2.forEach(team2Player =>
                matches.push([team1Player.Ranking, team2Player.Ranking, outcome])));

        this.ranking.updateRatings(matches);

        this.players.forEach(player => {
            Object.assign(player, {Ranking: player.Ranking.getRating()});
        });
    }

    private saveMatch(teamWon) {
        const time = moment().toISOString();
        const id = uuid.v4();

        return Promise.resolve(this.database.list('/matches')
            .push({
                MatchId: id,
                Time: time,
                Players: this.players,
                TeamWon: teamWon
            }));
    }

    private savePlayers() {
        const promises = [];
        this.players.map(player => {
            if (player.$key) {
                promises.push(this.database.list('/players').update(player.$key, player));
            }
            else {
                promises.push(this.database.list('/players').push(player));
            }
        });
        return Promise.all(promises);
    }
}
