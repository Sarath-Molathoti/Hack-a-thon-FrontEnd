import { Component, OnInit } from '@angular/core';
import { Questions, Student } from '../test-objects';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent implements OnInit {

  result : string = "";
  check : boolean = false;
  ans : string[] = [] ;
  codQuestions : Questions[];
  student : Student = {};
  score : number = 0;
  studentId : number ;

  message : string = "time up";
  constructor(
    private testData : UserService,
    private route : Router,
    private router : ActivatedRoute
  ) { 
    this.studentId=this.router.snapshot.params['id'];
    this.testData.get_coding_question().subscribe(
      data=>{
        this.codQuestions = data;
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
      //  this.route.navigate(['login']);
      this.move();
     }
   }

  move(){
    for (let i = 0; i < 10; i++) {
      if(this.ans[i] == this.codQuestions[i].answer){
        this.score = this.score + 1;
      }

      this.testData.update_coding_score(this.student.emailId, this.score,this.student).subscribe(
        data=>{
          this.route.navigate(['result',this.student.studentId]);

        }
      )
      //console.log ("Block statement execution no." + i);
    }
  }


}
