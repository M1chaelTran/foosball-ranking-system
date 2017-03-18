import { LeaderBoardComponent } from './leaderboard/leaderboard.component';
import { MatchComponent } from './match/match.component';

export const Components = [
  LeaderBoardComponent,
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
  },
  {
    path: 'match',
    component: MatchComponent
  }
];
