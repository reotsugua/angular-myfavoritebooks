import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { GeneroLiterario } from '../livro/genero-literario';
import { UpperCasePipe } from '@angular/common';
import { mapaCoresText } from '../../shared/mapa-cores';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent, UpperCasePipe],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();


  get corDoGenero() {
    return mapaCoresText[this.genero().id]; 
  }


}
