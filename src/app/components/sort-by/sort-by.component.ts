import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviApi } from 'src/app/interfaces/movieapi';
import { peliculas } from 'src/app/interfaces/peliculas.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  selectedOptionOrder: string = '';
  orderMovies: peliculas[] = [];

    @Output() selectedOrder = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  applyOrder(): void {
    console.log('Tipo de ordenado seleccionado:', this.selectedOptionOrder);

    this.selectedOrder.emit(this.selectedOptionOrder)
  }

}
