import {Component} from '@angular/core'
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong> </h3>
        <button (click)="acumular(base)"> + {{base}}</button>  
        <samp> {{numero}}</samp>
        <button (click)="acumular(-base)">- {{base}}</button>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador Apps';
    numero: number = 10;
 
    //metodo
    /*sumar(){
      this.numero += 1;
    }
 
    restar(){
      this.numero -=1;
    }*/
    base: number = 5;
 
    acumular( valor: number ){
      this.numero += valor; 
    }
}