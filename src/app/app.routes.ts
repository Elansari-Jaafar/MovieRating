import { Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { AboutComponent } from './site/about/about.component';
import { FilmsComponent } from './site/films/films.component';
import { ErrorsComponent } from './error.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "movies", component: FilmsComponent},
    {path: "404", component: ErrorsComponent},
    {path: "**", redirectTo: "/404"}
];
