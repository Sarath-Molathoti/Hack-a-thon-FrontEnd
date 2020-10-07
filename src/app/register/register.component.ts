import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Student } from '../test-objects';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  student : Student = {}
  hide= true;
  registrationForm: FormGroup;
  imageUrl: any;
  type = 'associate';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      email: [null, [Validators.required, Validators.email]],
      age: [null],
      collegeName: [null],
      cgpa: [null],
      mobile: [null],
      address: [null],
      image: [null],
    });
  }

  onSubmit(){
    const mentorData =  new FormData();
    mentorData.append('name', this.registrationForm.value.name);
    mentorData.append('email', this.registrationForm.value.email);
    mentorData.append('password', this.registrationForm.value.password);
    mentorData.append('age', this.registrationForm.value.age);
    mentorData.append('collegeName', this.registrationForm.value.collegeName);
    mentorData.append('cgpa', this.registrationForm.value.cgpa);
    mentorData.append('mobile', this.registrationForm.value.mobile);
    mentorData.append('address', this.registrationForm.value.address);
    //mentorData.append('uploadImg', null);
    this.userService.studentRegistration(this.student).subscribe(data => {
      this.snackBar.open('Registration Successfull !!', '', {duration: 3000});
      this.router.navigate(['login']);
    }, error => {
      this.snackBar.open('Email exists !!', '', {duration: 3000});
    });
  }

  imageUpload($event) {
    if ($event.target.files && $event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL($event.target.files[0]);

      reader.onload = (event) => {
        this.imageUrl = reader.result;
        console.log('hi',this.imageUrl)
      }
    }
  }

}
