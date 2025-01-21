import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import Validators
import { CommonModule } from '@angular/common';
import { SearchmovieService } from '../services/searchmovie/searchmovie.component';

@Component({
  selector: 'app-searchform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: any = null;

  constructor(private SearchmovieService: SearchmovieService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      title: ['', Validators.required], // Add Validators
      year: [2016, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]], // Add Validators
    });
  }

  startSearch() {
    if (this.searchForm.invalid) {
      return;
    }
    let action = (data: Object) => {
      this.searchResults = data;
      console.log(this.searchForm.value);
    }
    this.SearchmovieService.search(action, this.searchForm.value.title, this.searchForm.value.year);
  }

  ngOnInit() { }
}
