import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { item } from '../firebase/items';

@Injectable()
export class FirebaseService{
    items: FirebaseListObservable<item[]>;
    
    constructor(private _af: AngularFire){
    
    }
    
    getItems(){
        this.items = this._af.database.list('/items') as 
        FirebaseListObservable<item[]>
        return this.items;
    }

    addResponse(newResponse){

    	return this.items.push(newResponse);

    }

}