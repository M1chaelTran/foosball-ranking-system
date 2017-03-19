import {LeaderBoardComponent} from './leaderboard/leaderboard.component';
import {GameComponent} from './game/game.component';
import {MatchComponent} from './match/match.component';

export const Components = [
    LeaderBoardComponent,
    GameComponent,
    MatchComponent
];

export const Routes = [
    {
        path: '',
        redirectTo: '/leaderboard',
        pathMatch: 'full'
    },
    {
        path: 'leaderboard',
        component: LeaderBoardComponent
    }, {
        path: 'games',
        component: GameComponent
    },
    {
        path: 'match',
        component: MatchComponent
    }
];
