import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from '../../../../../environments/api-key';

@Injectable()
export class SearchmovieService {
  constructor(private http: HttpClient) { }

  search(action: (data: Object) => void, title: string, year: number = 0): void {
    const yearQuery = year ? `&y=${year}` : '';
    this.http.get(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}${yearQuery}`).subscribe(response => {
      action(response);
      console.log(response);
    });
  }
}
