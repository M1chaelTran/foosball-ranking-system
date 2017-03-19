import {Component, OnInit} from '@angular/core';
import {LeaderBoardService} from './leaderboard.service';

@Component({
    selector: 'app-leader-board',
    templateUrl: './leaderboard.component.html',
    providers: [LeaderBoardService]
})
export class LeaderBoardComponent implements OnInit {
    title = 'Top 10 players';
    ranking: any[];

    constructor(private leaderBoardService: LeaderBoardService) {
    }

    ngOnInit() {
        this.leaderBoardService.getRanking().subscribe(players => this.ranking = players.reverse());
    }
}
