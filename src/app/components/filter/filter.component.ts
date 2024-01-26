import { Component,Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
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
  public selectedOrder: string | null = null;
  showFilters: boolean = true;
  filteredItems: any = [];
  @Output() genreSelected = new EventEmitter<string | null>(); 
  
  ngOnInit(): void {
    this.loadGenres();
    this.getAllItems();
  }
  getData(): void {
    if (this.selectedGenre) {
    // this.getMoviesByGenre();
    } else {
      //this.getAllMovies();
    }
  }
  
  DataService: any;
  constructor(private dataService: DataService) {}
  
  onGenreChange(): void {
    console.log('Género seleccionado:', this.selectedGenre);
    this.genreSelected.emit(this.selectedGenre);
    this.getMoviesByGenre();
  }
  onOrderChange(): void {
    console.log('Orden seleccionado:', this.selectedOrder);
    
  }

loadGenres(): void {
  this.dataService.getGenres().subscribe((genresData: string[]) => {
    console.log('Genres:', genresData);
    this.genresService = genresData;
  });}

  getAllItems(): void {
    this.dataService.getAllMovies().subscribe((allItemsData: any[]) => {
      console.log('All Items:', allItemsData);
      this.filteredItems = allItemsData;
    });
  }
  
  getMoviesByGenre(): void {
    if (this.selectedGenre) {
      this.dataService.getMovies(1, this.selectedGenre).subscribe((moviesData: any) => {
        console.log(`Movies Data for ${this.selectedGenre}:`, moviesData);
        this.filteredItems = Array.isArray(moviesData.results) ? moviesData.results : [];
      });
    }
  }
 
}
