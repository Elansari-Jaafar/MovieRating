import { Component } from '@angular/core';
import { SearchformComponent } from './searchform/searchform.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchmovieService } from './services/searchmovie/searchmovie.component';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [SearchformComponent, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [FormBuilder,SearchmovieService],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent { }
