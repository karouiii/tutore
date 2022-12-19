import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userFormGroup!: FormGroup;
  submitted: boolean = false;
  

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      nom: ["", Validators.required],
      dob: ["", Validators.required],
      prenom: ["", Validators.required],
      role:  ["", Validators.required],
      gsm: [0, Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    })
  }
  onSaveUser(){
    this.submitted = true;
    if(this.userFormGroup.invalid) 
    return;
    this.userService.save(this.userFormGroup.value).subscribe(data=>{
      alert("Utilisateur ajouté!");
    });
  }

}
