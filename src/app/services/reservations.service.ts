import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Reservation } from "../model/reservation.model";

@Injectable({providedIn:"root"})
export class ReservationsService{
    constructor( private http:HttpClient ){}

    getAllReservations():Observable<Reservation[]>{
        let host = environment.host;
        return this.http.get<Reservation[]>(host+"/reservations");
    }
    deleteReservation(reservation: Reservation):Observable<void>{
        let host = environment.host;
        return this.http.delete<void>(host+"/reservations/"+reservation.id);
    }
    
}