import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}; // create object model

  constructor(private authService: AuthService, private alertify: AlertifyService,private router: Router) { }

  ngOnInit() {
  }

  // create method login
  login() {
    /* this.authService.login(this.model).subscribe(next => {
      //console.log('Logged in successfully');
this.alertify.success('Logged in successfully');
    }, error => {
      //console.log('Failed to login');
      this.alertify.error(error);
    }); */
    this.authService.login(this.model).subscribe(next => {
		  this.alertify.success('Logged in successfully');
		}, error => {
		  this.alertify.error(error);
		}, () => {
		  this.router.navigate(['/members']);
		});
    // console.log(this.model);
  }

  // loggedIn
  loggedIn(){
    //const token = localStorage.getItem('token');
    /**
     * var name='Feri';
     * var bool = !!name;
     */
    //return !!token;
    return this.authService.loggedIn();
  } 

  // loggout
  logout(){
    localStorage.removeItem('token');
    //console.log('logged out');
    this.alertify.message('Logged out');

    this.router.navigate(['/home']);
  }

}
