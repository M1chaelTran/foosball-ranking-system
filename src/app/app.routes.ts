import {LeaderBoardComponent} from './leaderboard/leaderboard.component';
import {GameComponent} from './game/game.component';
import {MatchComponent} from './match/match.component';
import {StatisticComponent} from './statistic/statistic.component'

export const Components = [
    LeaderBoardComponent,
    GameComponent,
    MatchComponent,
    StatisticComponent
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
    }, {
        path: 'statistics',
        component: StatisticComponent
    }, {
        path: 'statistics/player/:playerName',
        component: StatisticComponent
    },
];
