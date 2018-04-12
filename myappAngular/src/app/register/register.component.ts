import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
// import { setTimeout } from 'timers';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userExists: Boolean = false;

  constructor(
    private userService : UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register({value , valid}) {
    if(valid) {
      this.userService.register(value).subscribe(res => {
        if( res == 'userExists' ) {
          this.userExists = true;
          // setTimeout(function(){
            this.userExists = false;
          // }.bind(this), 2000);
        } else {
          this.router.navigateByUrl('login');
        }
      });
    } else {
      console.log('Form is not valid');
    }
    }

}
