import {Component, OnInit} from '@angular/core';
import {StatisticService} from './statistic.service';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    providers: [StatisticService]
})
export class StatisticComponent implements OnInit {
    title = 'Statistic';

    constructor(private statisticService: StatisticService) {
    }

    ngOnInit() {
    }
}
