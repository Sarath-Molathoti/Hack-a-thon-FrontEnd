import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Student } from '../test-objects';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  studentId: number;
  student : Student = {};
  total : number;
  constructor(
    private userService : UserService,
    private route : ActivatedRoute,
    private router : Router
  ) { 
    this.studentId=this.route.snapshot.params['id'];
    this.userService.get_student_detailsById(this.studentId).subscribe(
      data=>{
        this.student = data;
        this.total = this.student.aptitudeScore + this.student.codingScore;
      }
    )

  }

  ngOnInit(): void {
  }

}
