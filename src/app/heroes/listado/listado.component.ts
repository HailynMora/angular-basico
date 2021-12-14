import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[] = ['Spiderman','Supermann','thor','Iroman','Hulk', ];
  heroeBorrado: string = ''
  borrarHeroe(){
    //arreglo vacio borra todo
    //this.heroes = []
    //borra el ultimo dato dell arreglo
    //this.heroes.pop();
    //borra el primer elemento y lo retorna
    this.heroeBorrado = this.heroes.shift() || '';
  }

}