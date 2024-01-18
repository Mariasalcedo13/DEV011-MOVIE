import { Component } from '@angular/core';
import { peliculas } from 'src/app/interfaces/peliculas.service';
import { DataService } from 'src/app/servicios/data.service';
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: peliculas[] = [];
  public page!: number;
  public selectedGenre: string | null = null;
  public genres: string[] = [];

  constructor(private dataService: DataService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getData();
    //this.loadGenres();
  }

  getData(): void {
    if (this.selectedGenre) {
     // this.getMoviesByGenre();
    } else {
      this.getAllMovies();
    }
  }

  getAllMovies(): void {
    this.dataService.getAllMovies().subscribe((moviesData: peliculas[]) => {
      console.log('All Movies Data:', moviesData);
      this.movieList = moviesData;
    });
  }

  getMoviesByGenre(): void {
    if (this.selectedGenre) {
      this.dataService.getMoviesByGenre(this.page, this.selectedGenre).subscribe((moviesData: peliculas[]) => {
        console.log(`Movies Data for ${this.selectedGenre}:`, moviesData);
       this.movieList = moviesData;
     });
 }
  }

  // loadGenres(): void {
  // this.dataService.getGenres().subscribe((genresData: string[]) => {
  //   console.log('Genres:', genresData);
  //   this.genres = genresData;
  // });
//}


  //onGenreChange(selectedGenre: string): void {
   // this.selectedGenre = selectedGenre;
   // this.getData();
  //}
 

}