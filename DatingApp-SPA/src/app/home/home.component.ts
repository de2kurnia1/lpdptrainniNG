import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues(); // sesaat setelah object tercipta saya panggil ini.
  }

  registerToggle(){
    this.registerMode = true;//!this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }

  getValues() {
    this.http.get('https://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
