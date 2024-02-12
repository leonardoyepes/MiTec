import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent {
  persona = {
    nombre: '',
    edad: '',
  };
  procesarDatos(dato: any) {
    if (dato.edad > 23) {
      console.log('hola señor ' + dato.nombre + ' su edad supera la permitida');
    } else {
      console.log(this.persona);
    }
  }
  ngOnInit(): void {}
}
