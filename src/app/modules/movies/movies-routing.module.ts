import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TrendingMoviesComponent } from './pages/trending-movies/trending-movies.component';

const routes: Routes = [
  {path:'', component:MoviesComponent, children:[
    {path:'trending', component:TrendingMoviesComponent},
    {path:'', redirectTo:'trending', pathMatch:'full'},
    {path:'movie',component:MovieComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
