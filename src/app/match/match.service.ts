import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';
import * as uuid from 'uuid';

@Injectable()
export class MatchService {
    database: any;

    constructor(af: AngularFire) {
        this.database = af.database;
    }

    save(team: any[], winner: string) {
        const time = new Date();
        const id = uuid.v4();

        team.map(player => {
            this.database.list('/matches')
                .push({
                    id,
                    time,
                    team: player.team,
                    player: player.name,
                    win: winner === player.team
                });
        });
    }
}
