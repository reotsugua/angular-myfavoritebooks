import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ListaLivrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
