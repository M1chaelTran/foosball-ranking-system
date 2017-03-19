import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Injectable()
export class StatisticService {
    database: any;

    constructor(af: AngularFire) {
        this.database = af.database;
    }
}
