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

    addPlayer(player: any, team: string) {
        if (team === '1') {
            this.team1.push({name: player.value});
        } else {
            this.team2.push({name: player.value});
        }
        player.value = null;
        player.focus();
    }

    saveMatch(winner) {
        const team = [...this.team1.map(player => {
            return {
                name: player.name,
                team: '1'
            };
        }), ...this.team2.map(player => {
            return {
                name: player.name,
                team: '2'
            };
        })];

        this.matchService.save(team, winner);
        this.router.navigate(['/']);
    }
}
