import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instaCar';
  oneWayUrl: string = 'https://localhost:3000/ap_index/oneWay';
  oneWayData: {};
  oneWayForm: any;
  roundTripForm: any;
  roundTripUrl: string = 'https://localhost:3000/ap_index/roundTrip';
  roundTripData: {};


  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.oneWayForm = this.formBuilder.group({
      originOne: [''],
      destinationOne: [''],
      startDateOne: ['']
    });

    this.roundTripForm = this.formBuilder.group({
      originRound: [''],
      destinationRound: [''],
      startDateRound: [''],
      returnDateRound: ['']
    });

  }

  bookOneWay = () => {
    this.oneWayData = this.oneWayForm.value;
    this.http.post(this.oneWayUrl, this.oneWayData).subscribe(res => {
      console.log(res);
    })


  }
  bookRoundTrip = () => {
    this.roundTripData =this.roundTripForm.value;
    this.http.post(this.roundTripUrl, this.oneWayData).subscribe(res => {
      console.log(res);
    })

  }
}

