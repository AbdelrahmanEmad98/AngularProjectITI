import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/Services/users.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  constructor(public myService:UsersService,private dialogRef: MatDialogRef<UsersComponent> ,private fb : FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any){

  }
  Delete(flag:any){
    console.log(flag)
    if(flag=='y'){
      
      this.myService.DeleteUser(this.data.id).subscribe();
      
    }
    this.onClose();
  }


  onClose() {
    this.dialogRef.close();
  }
}
