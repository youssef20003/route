import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';
import { SframeComponent } from '../pages/sframe/sframe.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: SframeComponent, title: 'home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: '**', component: NotfoundComponent, title: 'Not Found' },

];
