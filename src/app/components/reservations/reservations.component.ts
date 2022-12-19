import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/model/reservation.model';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations$:Observable<Reservation[]> | null=null;

  constructor(private reservationService: ReservationsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onGetAllReservations(){
    this.reservations$ = this.reservationService.getAllReservations();
  }
  
  onDelete(r: Reservation){
    let v = confirm("Are you sure you want to DELETE this reservation ?");
    if(v == true)
    this.reservationService.deleteReservation(r).subscribe(data =>{
      this.onGetAllReservations();
    })
  }
}
