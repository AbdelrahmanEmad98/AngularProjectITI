import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styles: [
  ]
})
export class UserPhotosComponent {
  albumID=0;
  userID=0;
Photos:any;
user:any;

  constructor(myRoute:ActivatedRoute ,private myService:UsersService){
    this.userID=myRoute.snapshot.params["id1"];
    this.albumID=myRoute.snapshot.params["id1"];
    
  }
  
  ngOnInit(): void {
    this.myService.GetAllPhotos(this.albumID).subscribe({
      next:(data)=>
      {
        this.Photos = data;
      },
      error:(err)=>{console.log(err)}
    })
    this.myService.GetUserById(this.userID).subscribe({
      next:(data2)=>
      {
        this.user = data2;
      },
      error:(err)=>{console.log(err)}
    })
  

  }}
