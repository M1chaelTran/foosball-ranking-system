import {Component} from '@angular/core';
import {LeaderBoardService} from './leaderboard.service';

@Component({
    selector: 'app-leader-board',
    templateUrl: './leaderboard.component.html',
    providers: [LeaderBoardService]
})
export class LeaderBoardComponent {
    title = 'Leader Board';
    ranking: any[];

    constructor(private leaderBoardService: LeaderBoardService) {
        this.ranking = leaderBoardService.getRanking();
    }
}
