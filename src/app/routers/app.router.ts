import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app.component';
import { HeaderComponent }  from '../header/header.component';
import { AboutComponent }  from '../about/about.component';
import { ContactComponent }  from '../contact/contact.component';
import { PortfolioComponent }  from '../portfolio/portfolio.component';


export const router: Routes = [

	{ path: '', redirectTo: 'header', pathMatch: 'full'},
	{ path: 'header', component: HeaderComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'portfolio', component: PortfolioComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);