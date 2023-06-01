import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  
  reg="[0-9]";
  regEmail = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
  users:any

  
  constructor(public myService:UsersService,private dialogRef: MatDialogRef<UsersComponent> ,private fb : FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any){
 }

  myForm =new FormGroup({
  name:new FormControl( this.data.name,Validators.required),
  email:new FormControl( this.data.email,[Validators.required,Validators.email]),
  street:new FormControl( this.data.address.street),
  suite:new FormControl( this.data.address.suite),
  city:new FormControl( this.data.address.city),
  phone:new FormControl( this.data.phone,[Validators.pattern(/^\d{11}$/),Validators.maxLength(12),Validators.minLength(9)]),
  });

  
  onSubmit() {
    if(this.myForm.valid){
    this.myService.UpdateUser({
      id:this.data.id,
      name:this.myForm.value.name,
      email:this.myForm.value.email,
      address:{
        street:this.myForm.value.street,
        suite:this.myForm.value.suite,
        city:this.myForm.value.city
      },
      phone:this.myForm.value.phone
    },this.data.id).subscribe();
   
    this.onClose({id:this.data.id,
      name:this.myForm.value.name,
      email:this.myForm.value.email,
      address:{street:this.myForm.value.street,suite:this.myForm.value.suite,city:this.myForm.value.city},
      phone:this.myForm.value.phone});        
    
    } 
  }
  onClose(e:any) {
    this.dialogRef.close(e);
  }
}
