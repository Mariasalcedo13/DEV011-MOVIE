import { Component,Input} from '@angular/core';
import { peliculas } from 'src/app/interfaces/peliculas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  @Input() peliculas: peliculas| undefined;

  ngOnChanges() {
    console.log('Peliculas:', this.peliculas);
  }

}
