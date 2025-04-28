import { livros } from './../../mock-livros';
import { Component, OnInit } from '@angular/core';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';
import { Livro } from '../livro/livro';
import { GeneroLiterario } from '../livro/genero-literario';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit(): void {
    livros.forEach(livro => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }
      this.livrosPorGenero.get(generoId)?.push(livro)
    });

    this.generos = Array.from(this.livrosPorGenero.entries()).map(([id, livros]) => ({
      id: id,
      value: id, // aqui você pode mudar para o nome bonito se quiser
      livros: livros
    }));

    
  }
}
