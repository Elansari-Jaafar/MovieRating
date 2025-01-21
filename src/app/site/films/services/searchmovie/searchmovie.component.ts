import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchmovieService {
  constructor(private http: HttpClient) { }

  search(action: (data: Object) => void, title: string, year: number = 0): void {
    const yearQuery = year ? `&y=${year}` : '';
    this.http.get(`http://www.omdbapi.com/?apikey=a8a09f5e&t=${title}${yearQuery}`).subscribe(response => {
      action(response);
      console.log(response);
    });
  }
}
