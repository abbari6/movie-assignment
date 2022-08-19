import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { TrendingMoviesComponent } from './pages/trending-movies/trending-movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SharedModule } from 'src/app/shared-module/shared/shared.module';


@NgModule({
  declarations: [
    MoviesComponent,
    TrendingMoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
