import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../model/user.model";

@Injectable({providedIn:"root"})
export class UsersService{
    constructor( private http:HttpClient ){}

    getAllUsers():Observable<User[]>{
        let host = environment.host;
        return this.http.get<User[]>(host+"/users");
    }
    searchUsers(keyword: string):Observable<User[]>{
        let host = environment.host;
        return this.http.get<User[]>(host+"/users?nom_like="+keyword);
    }
    deleteUser(user: User):Observable<void>{
        let host = environment.host;
        return this.http.delete<void>(host+"/users/"+user.id);
    }
    save(user: User):Observable<User>{
        let host = environment.host;
        return this.http.post<User>(host+"/users",user);
    }
    getUser(id: number):Observable<User>{
        let host = environment.host;
        return this.http.get<User>(host+"/users/"+id);
    }
    updateUser(user: User):Observable<User>{
        let host = environment.host;
        return this.http.put<User>(host+"/users/"+user.id,user);
    }
}