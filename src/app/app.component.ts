import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoa = null;
  lista_pessoas = []

  adicionar(){
    this.lista_pessoas.push(this.pessoa)
    this.pessoa = null;
  }

  excluir(){
    this.lista_pessoas.pop();
  }

}
