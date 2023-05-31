import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Conponents/users/users.component';
import { UserAlbumsComponent } from './Conponents/user-albums/user-albums.component';
import { UserPhotosComponent } from './Conponents/user-photos/user-photos.component';
import { ErrorComponent } from './Conponents/error/error.component';
import { UpdateUserComponent } from './Conponents/update-user/update-user.component';

const routes: Routes = [
  {path:"",redirectTo:"users",pathMatch:"full"},
  {path:"users",component:UsersComponent},
  {path:"albums/:id",component:UserAlbumsComponent},
  {path:"photos/:id1/:id2",component:UserPhotosComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
