import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateData, MentorData, Task } from '../model/dashboard';
import { User } from '../model/user';
import { Questions, Student } from '../test-objects';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  associateRegistration(data: FormData){
    return this.httpClient.post<any>(this.baseUrl+'associate', data)
  }

  studentRegistration(data){
    return this.httpClient.post<any>(this.baseUrl+'register-student', data)
  }

  login(email_id, password){
    return this.httpClient.get<boolean>(`http://localhost:8080/${email_id}/${password}`);
  }

  // getAssociate(id: number){
  //   return this.httpClient.get<AssociateData>(this.baseUrl+`associate/${id}`)
  // }

  // getMentor(id: number){
  //   return this.httpClient.get<MentorData>(this.baseUrl+`mentor/${id}`)
  // }

  // getAllTask() {
  //   return this.httpClient.get<Task[]>(this.baseUrl+`plans`)
  // }

  // logout(data: User){
  //   return this.httpClient.post<any>(this.baseUrl+'logout', data)
  // }

  // updatePercentage(data: Task){
  //   return this.httpClient.post<any>(this.baseUrl+'updatePlan', data);
  // }

  // assignTask(data){
  //   return this.httpClient.post<any>(this.baseUrl+'changePlan', data)
  // }

  get_student_details(email_id){
    return this.httpClient.get<Student>(`http://localhost:8080/${email_id}/get_details_by_email`);
  }
  get_student_detailsById(student_id){
    return this.httpClient.get<Student>(`http://localhost:8080/${student_id}`);
  }
  get_aptitude_question(){
    return this.httpClient.get<Questions[]>(`http://localhost:8080/get_aptitude_questions`);
  }
  get_coding_question(){
    return this.httpClient.get<Questions[]>(`http://localhost:8080/get_coding_questions`);
  }
  get_aptitude_score(email_id){
    return this.httpClient.get<number>(`http://localhost:8080/${email_id}/get_aptitude_score`);
  }
  get_coding_score(email_id){
    return this.httpClient.get<number>(`http://localhost:8080/${email_id}/get_coding_score`);
  }

  update_aptitude_score(email_id,score,student){
    return this.httpClient.put<any>(`http://localhost:8080/${email_id}/${score}/update_aptitude_score`,student);
  }
  update_coding_score(email_id,score,student){
    return this.httpClient.put<any>(`http://localhost:8080/${email_id}/${score}/update_coding_score`,student);
  }

  get_all_students(){
    return this.httpClient.get<Student[]>(`http://localhost:8080/get_all_student_scores`);
  }

  add_question(question){
    return this.httpClient.put<any>(this.baseUrl+'add_question', question)
  }

  get_students_by_aptitude_score(){
    return this.httpClient.get<Student[]>(`http://localhost:8080/get_students_by_aptitude_score`);
  }

  get_students_by_coding_score(){
    return this.httpClient.get<Student[]>(`http://localhost:8080/get_students_by_coding_score`);
  }

  get_students_by_cgpa(){
    return this.httpClient.get<Student[]>(`http://localhost:8080/get_students_by_cgpa`);
  }

  get_email_count(email_id){
    return this.httpClient.get<boolean>(`http://localhost:8080/${email_id}/get_email_count`);

  }

}
