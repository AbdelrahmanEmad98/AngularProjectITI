import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styles: [ 
  ]
})
export class UserAlbumsComponent {
  ID=0;
  albums:any;
  user:any;
  
  constructor(myRoute:ActivatedRoute ,private myService:UsersService){
    this.ID=myRoute.snapshot.params["id"];
    console.log(this.ID)
  
    
  }
  
  ngOnInit(): void {
    this.myService.GetAllAlbums(this.ID).subscribe({
      next:(data)=>
      {
        this.albums = data;
      },
      error:(err)=>{console.log(err)}
    })

    this.myService.GetUserById(this.ID).subscribe({
      next:(data2)=>
      {
        
        
        this.user = data2;
      },
      error:(err)=>{console.log(err)}
    })
  

  }

}
