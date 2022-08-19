import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movie-service/movies.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss'],
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies: any = [];
  page: number = 1;
  count: number = 0;
  loader: boolean = false;
  search = new FormControl('', Validators.required);
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies() {
    this.loader = true;
    this.moviesService.trendingMovies(this.page).subscribe({
      next: (res: any) => {
        this.trendingMovies = res.results;
        this.count = res.total_results;
        this.loader = false;
      },
      error: (err: any) => {
        this.loader = false;
      },
    });
  }

  onPageChange(event: any): void {
    this.page = event;
    if (this.search.value == '') {
      this.fetchTrendingMovies();
    } else {
      this.searchMovie();
    }
  }

  searchMovie() {
    this.loader = true;
    this.moviesService.searchMovie(this.search.value, this.page).subscribe({
      next: (res: any) => {
        this.trendingMovies = res.results;
        this.count = res.total_results;
        this.loader = false;
      },
      error: (err: any) => {
        this.loader = false;
      },
    });
  }

  seletedMovie(movie_id: number) {
    this.router.navigate(['/movies/movie'], { queryParams: { id: movie_id } });
  }
}
