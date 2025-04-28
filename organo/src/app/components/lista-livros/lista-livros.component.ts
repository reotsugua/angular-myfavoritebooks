import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-lista-livros',
  imports: [LivroComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent {
  livros = livros;
}
