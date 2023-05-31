import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent {

  constructor(private dialogRef: MatDialogRef<AddUserComponent>) {
      

  }
      
  myForm =new FormGroup({
    name:new FormControl( '',[Validators.required,Validators.min(3)]),
    email:new FormControl( '',[Validators.required,Validators.email]),
    street:new FormControl( ''),
    suite:new FormControl( ''),
    city:new FormControl( ''),
    phone:new FormControl( '',[Validators.pattern(/^\d{11}$/),Validators.maxLength(12),Validators.minLength(9)])
  });
  onSubmit() {
    if(this.myForm.valid){
      console.log(this.myForm.value);
      this.onClose({id:"",
                    name:this.myForm.value.name,
                    email:this.myForm.value.email,
                    address:{street:this.myForm.value.street,suite:this.myForm.value.suite,city:this.myForm.value.city},
                    phone:this.myForm.value.phone});
    }
   console.log("noooooooo")
  }
  onClose(e:any) {
    this.dialogRef.close(e);
  }
}
