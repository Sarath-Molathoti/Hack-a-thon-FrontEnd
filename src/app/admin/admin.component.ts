import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import { Student } from '../test-objects';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  students : Student[] ;
  filterName: string ="";
  types = ['Show All','Aptitude Score(Highest to Lowest)','Coding Score(Highest to Lowest)', 'Cgpa(Highest to Lowest)']


  
  constructor(
    private userService : UserService
  ) {
    this.userService.get_all_students().subscribe(
      response =>{
        this.students=response;
        this.students.sort(function(a, b){
          return ((b.aptitudeScore+b.codingScore) - (a.aptitudeScore+a.codingScore)) ;
      })
      }
    )
   }

  ngOnInit(): void {
    // this.dataSource.data = [{name: 'aaaa', percentage: '50'}, {name: 'bbbb', percentage: '60'}, {name: 'aaaa', percentage: '55'}, {name: 'aaaa', percentage: '90'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'caaa', percentage: '50'}, {name: 'abcd', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}, {name: 'aaaa', percentage: '50'}];
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  filter_students(){
    if(this.filterName == "Aptitude Score(Highest to Lowest)"){
      this.userService.get_students_by_aptitude_score().subscribe(
        data=>{
          this.students = data;
        }
      )
    }else if(this.filterName == "Coding Score(Highest to Lowest)"){
      this.userService.get_students_by_coding_score().subscribe(
        data=>{
          this.students = data;
        }
      )
    }else if(this.filterName == "Cgpa(Highest to Lowest)"){
      this.userService.get_students_by_cgpa().subscribe(
        data=>{
          this.students = data;
        }
      )
    }else{
      this.userService.get_all_students().subscribe(
        response =>{
          //console.log(response);
          this.students=response;
          this.students.sort(function(a, b){
            return ((b.aptitudeScore+b.codingScore) - (a.aptitudeScore+a.codingScore)) ;
        })
        }
      )
    }
  }

}
