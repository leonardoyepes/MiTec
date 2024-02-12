import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personas-group',
  templateUrl: './personas-group.component.html',
  styleUrl: './personas-group.component.css',
})
export class PersonasGroupComponent {
  public get proNombre(): any {
    return this.formPersonaG.get('nombre') as FormControl;
  }

  public get proCorreo(): any {
    return this.formPersonaG.get('correo') as FormControl;
  }

  formPersonaG = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit(): void {}
}
