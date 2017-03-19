import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Injectable()
export class GameService {
    database: any;

    constructor(af: AngularFire) {
        this.database = af.database;
    }

    getGames() {
        return this.database.list('/matches', {
            query: {
                limitToLast: 20,
                orderByChild: 'Time',
            }
        });
    }
}
