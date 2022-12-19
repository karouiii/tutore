import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$:Observable<User[]> | null=null;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onGetAllUsers(){
    this.users$ = this.userService.getAllUsers();
  }

  onSearch(dataForm: any){
    this.users$ = this.userService.searchUsers(dataForm.keyword);
  }
  onDelete(u: User){
    let v = confirm("Are you sure you want to DELETE this user ?");
    if(v == true)
    this.userService.deleteUser(u).subscribe(data =>{
      this.onGetAllUsers();
    })
  }
  onNewUser(){
    this.router.navigateByUrl("/newUser");
  }
  onUpdate(u: User){
    this.router.navigateByUrl("/updateUser/"+u.id);
  }
}
