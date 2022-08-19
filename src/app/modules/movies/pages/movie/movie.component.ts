import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movie-service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie_id!: number;
  movie!: any;
  loader: boolean = false;
  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService
  ) {
    this.movie_id = this.router.snapshot.queryParams['id'];
  }

  ngOnInit(): void {
    this.selectedMovie();
  }

  selectedMovie() {
    this.loader = true;
    this.movieService.individualMovie(this.movie_id).subscribe({
      next: (res: any) => {
        this.movie = res;
        this.loader = false;
      },
      error: (err: any) => {},
    });
  }
}
