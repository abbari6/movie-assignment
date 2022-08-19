import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  trendingMovies(page:number){
   return this.http.get(`${environment.base_url}/movie/popular?api_key=${environment.api_key}&language=en-US&page=${page}`)
  }

  searchMovie(query:string, page:number){
    return this.http.get(`${environment.base_url}/search/movie?api_key=${environment.api_key}&language=en-US&page=${page}&include_adult=false&query=${query} `)
  }

  individualMovie(movie_id:number){
    return this.http.get(`${environment.base_url}/movie/${movie_id}?api_key=${environment.api_key}&language=en-US`)
  }
}
