import { Routes } from '@angular/router';
import { UsersComponent } from './components/entities/users/users.component';
import { HotelsComponent } from './components/entities/hotels/hotels.component';
import { RoomsComponent } from './components/entities/rooms/rooms.component';
import { ReservationsComponent } from './components/entities/reservations/reservations.component';
import { SignupComponent } from './components/auth/signup/signup.component';

export const routes: Routes = [

    {path: "signup", component: SignupComponent},

    {path: "users", component: UsersComponent},
    {path: "hotels", component: HotelsComponent},
    {path: "rooms", component: RoomsComponent},
    {path: "reservations", component: ReservationsComponent}

];
