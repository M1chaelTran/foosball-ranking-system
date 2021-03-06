import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Injectable()
export class LeaderBoardService {
    database: any;

    constructor(af: AngularFire) {
        this.database = af.database;
    }

    getRanking() {
        return this.database.list('/players', {
            query: {
                limitToLast: 10,
                orderByChild: 'Ranking',
            }
        });
    }
}
