import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foosball Ranking System';
  navLinks = [
      {path: '/leaderboard', label: 'Leaderboard'},
      {path: '/games', label: 'Games'},
      {path: '/statistics', label: 'Statistics'},
  ];
}
