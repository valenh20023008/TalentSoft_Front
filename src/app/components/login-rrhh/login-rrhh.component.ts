import { Component } from '@angular/core';

@Component({
  selector: 'app-login-rrhh',
  templateUrl: './login-rrhh.component.html',
  styleUrls: ['./login-rrhh.component.css']
})
export class LoginRRHHComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
    // Aquí implementarías la lógica de autenticación
  }
}
