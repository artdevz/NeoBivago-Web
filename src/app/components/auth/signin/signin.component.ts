import { Component, inject } from '@angular/core';
import { Login } from '../../../services/auth/Login';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  login = new Login();
  authService = inject(AuthService);

  constructor(private router: Router) {}

  signIn() {

    this.authService.signIn(this.login).subscribe({

      next: jwt => {
        localStorage.setItem('jwt', jwt);
        this.router.navigate(["/"]);
      },

      error: err => {
        alert("Error :(");
      }

    });

  }

}
