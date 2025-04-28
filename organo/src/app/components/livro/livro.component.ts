import { Component, input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  livro = input.required<Livro>();

  mapaCores: Record<string, string> = {
    "romance": 'bg-success',
    "misterio": 'bg-primary',
    "tecnicos": 'bg-danger',
    "fantasia": 'bg-warning',
    "ficcao-cientifica": 'bg-dark',
    " ": 'bg-info',
  };

  get corBorda() {
    return this.mapaCores[this.livro().genero.id] || 'bg-secondary'; // fallback se não achar
  }

  chanceFavorite(){
    this.livro().favorito = !this.livro().favorito;
  }
}
