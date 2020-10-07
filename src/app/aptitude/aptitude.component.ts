import { Component, OnInit } from '@angular/core';
import { Questions, Student } from '../test-objects';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {

  result : string = "";
  check : boolean = false;
  ans : string[] = [] ;
  aptQuestions : Questions[];
  student : Student = {};
  studentId : number;

  message : string = "time up";
  constructor(
    private testData : UserService,
    private route : Router,
    private router : ActivatedRoute
  ) { 
    this.studentId=this.router.snapshot.params['id'];
    this.testData.get_aptitude_question().subscribe(
      data=>{
        this.aptQuestions = data;
      }
    )
    this.testData.get_student_detailsById(this.studentId).subscribe(
      data=>{
        this.student = data;
      }
    )
  }

  

  ngOnInit(): void {
  }

   handleEvent(event : Event){
     //this.route.navigate(['login']);
   }

   onTimerFinished(e:Event){
    if (e["action"] == "done"){
      alert(this.message);
       this.route.navigate(['login']);
     }
   }

  move(){
    this.check = true;
  }

}
