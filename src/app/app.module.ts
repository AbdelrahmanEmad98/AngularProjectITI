import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPhotosComponent } from './Conponents/user-photos/user-photos.component';
import { UsersComponent } from './Conponents/users/users.component';
import { UserAlbumsComponent } from './Conponents/user-albums/user-albums.component';
import { ErrorComponent } from './Conponents/error/error.component';
import { HeaderComponent } from './Conponents/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './Conponents/add-user/add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './Conponents/update-user/update-user.component';
import { DeleteUserComponent } from './Conponents/delete-user/delete-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPhotosComponent,
    UsersComponent,
    UserAlbumsComponent,
    ErrorComponent,
    HeaderComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
