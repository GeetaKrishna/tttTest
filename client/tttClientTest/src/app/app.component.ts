import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){

  }
  title = 'tttClientTest';
  frequency;
  dataFromAPI;
  apiCall(){
    console.log('in API Call')
//    this.http.post('https://pure-sierra-13501.herokuapp.com/api', {'frequency': this.frequency},{responseType: 'json'}).subscribe((data) => {
      this.http.post('http://localhost:3000/api', {'frequency': this.frequency},{responseType: 'json'}).subscribe((data) => {

    console.log(data)
      this.dataFromAPI = data;
    })
}
}