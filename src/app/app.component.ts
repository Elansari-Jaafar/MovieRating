import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { FilmsComponent } from './site/films/films.component';
import { AboutComponent } from './site/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NavmenuComponent } from './site/shared/navmenu/navmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,FilmsComponent,AboutComponent,HttpClientModule,NavmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Moviesapp';
}
