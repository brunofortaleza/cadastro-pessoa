import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoa = null;
  lista_pessoas = []
  total = null;

  adicionar(){
    this.lista_pessoas.push(this.pessoa)
    this.pessoa = null;

    this.totalizador();
  }

  excluir(){
    this.lista_pessoas.pop();

    this.totalizador();
  }

  totalizador(){
    this.total = this.lista_pessoas.length;
  }

}
