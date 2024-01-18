import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiKey = 'a46633e219c148c1537e43116e6e8b9e'; 
  private apiUrl = 'https://api.themoviedb.org/3';
  private discoverEndpoint = '/discover/movie';
  private language = 'en-US';
  private genresEndpoint = '/genre/movie/list';

  constructor(private http: HttpClient) {}

  public getMovies(page: number, genreId?: string): Observable<any> {
    let url = `${this.apiUrl}${this.discoverEndpoint}`;
    const params: Record<string, string> = {
      include_adult: 'false',
      include_video: 'false',
      language: this.language,
      page: page.toString(),
      sort_by: 'popularity.desc',
      api_key: this.apiKey,
      
    };

    if (genreId) {
      params['with_genres'] = genreId;
    }

    return this.http.get<any>(url, { params });
  }

  public getAllMovies(): Observable<any[]> {
    const initialPage = 1;

    return this.getMovies(initialPage).pipe(
      map((moviesData) => {
        return Array.isArray(moviesData.results) ? moviesData.results : [];
      })
    );
  }

  public getMoviesByGenre(page: number, genreId: string): Observable<any[]> {
    return this.getMovies(page, genreId).pipe(
      map((moviesData) => {
        return Array.isArray(moviesData.results) ? moviesData.results : [];
      })
    );
  }
  public getGenres(): Observable<string[]> {
    const url = `${this.apiUrl}${this.genresEndpoint}`;
    const params: Record<string, string> = {
      language: this.language,
      api_key: this.apiKey,
    };

    return this.http.get<any>(url, { params }).pipe(
      map((response) => {
        return Array.isArray(response.genres) ? response.genres.map((genre: any) => genre.name) : [];
      })
    );
  }
}
