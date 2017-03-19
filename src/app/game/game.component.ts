import {Component, OnInit} from '@angular/core';
import {GameService} from './game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    providers: [GameService]
})
export class GameComponent implements OnInit {
    games: any[];

    constructor(private gameService: GameService) {
    }

    ngOnInit() {
        this.gameService.getGames().subscribe(games => this.games = games.reverse());
    }
}
