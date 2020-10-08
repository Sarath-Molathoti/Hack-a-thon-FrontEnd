import { Component, OnInit } from '@angular/core';
import { Questions } from '../test-objects';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {

  q : Questions = {};

  constructor(
    private userService : UserService, private router : Router
  ) { }

  ngOnInit(): void {
  }

  addQuestion(){
    this.userService.add_question(this.q).subscribe(
      data=>{
        window.location.reload();

        // this.router.navigate(['admin-results']);
      }
    )
  }

}
