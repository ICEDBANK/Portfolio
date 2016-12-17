import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';

// Routes

import { routes } from './routers/app.router';
import { AboutComponent } from './about/about.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "blah",
  authDomain: "blah",
  databaseURL: "blah",
  storageBucket: "blah"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    RouterModule,
    routes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    ContactComponent,
    PortfolioComponent,
    HeaderComponent,
    AboutComponent
    ],

    'providers': [{

    'provide': Window,

    'useValue': window

  }],

  bootstrap: [ AppComponent ]
})
export class AppModule {}