import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userId: number;
  userFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, 
              private usersService: UsersService,
              private fb: FormBuilder) { 
    this.userId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.usersService.getUser(this.userId).subscribe(user=>{
        this.userFormGroup = this.fb.group({
          nom: [user.nom, Validators.required],
          dob: [user.dob, Validators.required],
          prenom: [user.prenom, Validators.required],
          email: [user.email, Validators.required],
          role:  [user.role, Validators.required],
          gsm: [user.gsm, Validators.required],
          password: ["", Validators.required],
          confirmpassword: ["", Validators.required]
        })
    });
  }
  onUpdateUser(){
    this.usersService.updateUser(this.userFormGroup?.value).subscribe(data=>{
      alert("Les données sont mises à jour!");
    });
  }

}
