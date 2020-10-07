import { Component, OnInit } from '@angular/core';
import { Questions } from '../test-objects';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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


   onTimerFinished(e:Event){
    if (e["action"] == "done"){
      alert(this.message);
       this.route.navigate(['coding-test']);
     }
   }

  move(){
    this.check = true;
  }

}
