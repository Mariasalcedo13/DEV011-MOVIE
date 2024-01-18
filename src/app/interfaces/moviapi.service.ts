import { peliculas } from './peliculas.service';

export interface MoviApi {
  results: peliculas[];
  total_results: number;
}