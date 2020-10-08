import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Questions } from '../test-objects';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss']
})
export class ExamPageComponent implements OnInit {

  studentId : number;
  disableAptBtn : boolean ; 
  disableCodBtn : boolean ;
  constructor(
    private testData : UserService,
    private route : Router, private router : ActivatedRoute, private globals : GlobalConstants
  ) { 

    this.disableAptBtn = globals.aptBtn;
    this.disableCodBtn = globals.codBtn;
    this.studentId=this.router.snapshot.params['id'];

    
  }

  

  ngOnInit(): void {
  }

  goToAptitude(){
    this.globals.aptBtn = true;
      this.route.navigate(['aptitude-test',this.studentId]);
  }

  goToCoding(){
    this.globals.codBtn = true;
    this.route.navigate(['coding-test',this.studentId]);
  }

  
}
