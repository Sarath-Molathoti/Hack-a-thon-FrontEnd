import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: true;
  loginForm: FormGroup;
  forgotFlag = false;
  recoveryEmail = '';
  emailId : string = "";
  password : string = "";
  id: number;

  constructor(private formBuilder: FormBuilder,
              private userservice: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit(){
    this.userservice.login(this.emailId,this.password).subscribe( data => {
      if(data == true){
        sessionStorage.setItem('login', JSON.stringify(data));
        this.userservice.get_student_details(this.emailId).subscribe(
          data=>{
            this.id = data.studentId;
            this.router.navigate(['exam-page',this.id]);
          }
        )
        //this.router.navigate(['aptitude-test']);
      }
      
    })
  }

}
