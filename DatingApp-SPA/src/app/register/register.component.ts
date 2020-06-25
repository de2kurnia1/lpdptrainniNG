import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFromHome: any; // biar var ini dikenal pd home.component.html
  @Output() cancelRegister = new EventEmitter(); // berhub dng cancelRegister
  
  constructor(private authService:AuthService,private alertify: AlertifyService) { }

  ngOnInit() {
  }

  // register
  register() {
    this.authService.register(this.model).subscribe(() => {
      //console.log('registration successful.By Feri Lauw');
      this.alertify.success('Registration Succesful');
    }, error => {
      //console.log(error);
      this.alertify.error(error);
    });
  }

  // cancel
  cancel() {
    this.cancelRegister.emit(false); // berhub dng cancelRegister
    console.log('cancelled');
    this.alertify.message("Register Cancelled");
  }

}
