import { Component,Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { Genres } from 'src/app/interfaces/peliculas.service';
import { peliculas } from 'src/app/interfaces/peliculas.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  
  public genresService: string[] = [];
  public page!: number;
  public selectedGenre: string | null = null;
 // @Input() genres: Genres[] = [];
  @Output() genreSelected = new EventEmitter<string | null>(); 
  
  ngOnInit(): void {
    this.loadGenres();
  }
  getData(): void {
    if (this.selectedGenre) {
    // this.getMoviesByGenre();
    } else {
      //this.getAllMovies();
    }
  }
  
  DataService: any;
  constructor(private dataService: DataService, private cdRef: ChangeDetectorRef) {}

  onGenreChange(event: any): void {
  console.log('Género seleccionado:', this.selectedGenre);
  this.genreSelected.emit(this.selectedGenre);
}

loadGenres(): void {
  this.dataService.getGenres().subscribe((genresData: string[]) => {
    console.log('Genres:', genresData);
    this.genresService = genresData;
  });}
  
  //getMoviesByGenre(): void {
    //if (this.selectedGenre) {
    //  this.dataService.getMoviesByGenre(this.page, this.selectedGenre).subscribe((genresData: string[]) => {
     //   console.log(`Movies Data for ${this.selectedGenre}:`, genresData);
     //   this.genresService = genresData;
    //  });
   // }
 // }
 
}
