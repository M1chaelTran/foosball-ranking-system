import {Component} from '@angular/core';
import {MatchService} from './match.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    providers: [MatchService]
})
export class MatchComponent {
    team1: any[] = [];
    team2: any[] = [];

    constructor(private matchService: MatchService,
                private router: Router) {
    }

    addPlayer(player: any, team: number) {
        if (player.value) {
            if (team === 1) {
                if (!this.team1.find(p => p.Name === player.value)) {
                    this.team1.push({Name: player.value});
                }
            } else {
                if (!this.team2.find(p => p.Name === player.value)) {
                    this.team2.push({Name: player.value});
                }
            }

            player.value = null;
            player.focus();
        }
    }

    async saveMatch(winner) {
        if (this.team1.length === 0 || this.team2.length === 0) {
            return;
        }

        const team = [...this.team1.map(player => {
            return {
                Name: player.Name,
                Team: 1
            };
        }), ...this.team2.map(player => {
            return {
                Name: player.Name,
                Team: 2
            };
        })];

        await this.matchService.save(team, winner);
        this.router.navigate(['/']);
    }

    deletePlayer(playerName, team) {
        if (team === 1) {
            this.team1 = this.team1.filter(p => p.Name !== playerName);
        } else {
            this.team2 = this.team2.filter(p => p.Name !== playerName);
        }
    }
}
