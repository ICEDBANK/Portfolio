import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { item } from '../firebase/items';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [FirebaseService]
})
export class ContactComponent implements OnInit {

  items: item[];
  appState: string;
  activeKey: string;

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit() {

      this._firebaseService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);

    });

  }

    addResponse(
      firstName:string,
      lastName:string,
      email:string,
      message:string){

    var newResponse = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      message: message
    }

    console.log(newResponse);
    this._firebaseService.addResponse(newResponse);

    }

}
