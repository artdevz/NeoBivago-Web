import { Component, inject } from '@angular/core';
import { UsersComponent } from '../../entities/users/users.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/User';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, UsersComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  user = new User();
  userList: User[] = [];
  userService = inject(UserService);

  signup() {    
    
    // this.userService.create(this.user).subscribe({

    //   next: msg => {
    //     alert(msg);  
    //   },      
    //   error: err => {
    //     alert("Error at creating user");
    //   }
          
    // });

  }

}
