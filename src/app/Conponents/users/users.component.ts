import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css'
  ]
})
export class UsersComponent implements OnInit {
  userID:any;
  user:any;
  constructor(public dialog:MatDialog ,private myService:UsersService ,public myRouter:Router){ }
  res=[''];
  users:any;
  
  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe({
      next:(data)=>
      {
        this.users = data;
      },
      error:(err)=>{console.log(err)}
    })
    

  }


  
openDialog() {
  const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      result.id = (this.users[this.users.length-1].id)+1;
    // this.users.push(result);
    this.myService.AddUser(result).subscribe();
    
      console.log(`Dialog result: ${this.res}`);
    });

    dialogRef.afterClosed().subscribe(()=>{this.ngOnInit();})

  }


  openDialog2(e:any) {
    console.log(e)
    
    const dialogRef = this.dialog.open(UpdateUserComponent,{data:e});
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        
        console.log(`Dialog result: ${this.res}`);
      });

      dialogRef.afterClosed().subscribe(()=>{this.ngOnInit();})
    }



    openDialog3(e:any) {
      const dialogRef = this.dialog.open(DeleteUserComponent,{data:e});
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });

        dialogRef.afterClosed().subscribe(()=>{this.ngOnInit();})

      }

  updateUser(id:any){
    this.myService.UpdateUser(this.user,this.user.id).subscribe();

  }
  DeleteUser(id:any){
    console.log("delete")
    this.myService.DeleteUser(id).subscribe({
      next:(data)=>{this.myRouter.navigate([''])},
      error:(err)=>{}
    })
  }
}
