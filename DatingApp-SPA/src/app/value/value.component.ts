import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any; // property values dengan tipe any(flexible)

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // panggil method getValues()
    this.getValues();
  }

  // Create method
   /* parameter 1 : taeks a call back atau sebuah function yang akan memberitahu WebKitCSSMatrix
                     apa yang akan kita lakukan ketika Result(hasil) kembali.
       parameter 2 : apa yg akan kita lakukan pada event error.
       parameter 3 : apa yg akan kita lakukan ketika subscription complete. ketika kita
                     menerima semua data itulah yang akan kita lakukan, kita akan
                     mengatakan response.
      jadi yang akan kita lakukan adalah melakukan passing response ke property : values
      dan ketika data dikembalikan(returned) kita akan pny response pada property
      ctrl + P => find something
      alt + o => to html
      alt + u => ts
   */
  getValues() {
    this.http.get('https://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
