import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  router = inject(Router);

  buttons: boolean = true;

  relocateSignUp() {
    this.router.navigate(["signup"]);
  }

  relocateSignIn() {
    this.router.navigate(["signin"]);
  }

  ngOnInit() {
    if (localStorage.getItem('jwt') != null) {      
      this.buttons = false;
    } 
  }

}
