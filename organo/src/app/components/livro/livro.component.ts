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

  chanceFavorite(){
    this.livro().favorito = !this.livro().favorito;
  }
}
