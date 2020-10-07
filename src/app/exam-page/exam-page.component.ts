import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Questions } from '../test-objects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss']
})
export class ExamPageComponent implements OnInit {

  result : string = "";
  check : boolean = false;
  ans : string[] = [] ;
  aptQuestions : Questions[];

  message : string = "time up";
  constructor(
    private testData : UserService,
    private route : Router
  ) { 
    this.testData.get_aptitude_question().subscribe(
      data=>{
        this.aptQuestions = data;
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
