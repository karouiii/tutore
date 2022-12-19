import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: "users", component: UsersComponent},
  {path: "newUser", component: UserAddComponent},
  {path: "updateUser/:id", component: UserUpdateComponent},
  {path: "", component: HomeComponent},
  {path: "reservations", component: ReservationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
