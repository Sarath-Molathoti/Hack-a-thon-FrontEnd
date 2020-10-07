import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateData, MentorData, Task } from '../model/dashboard';
import { User } from '../model/user';
import { Questions } from '../test-objects';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  associateRegistration(data: FormData){
    return this.httpClient.post<any>(this.baseUrl+'associate', data)
  }

  mentorRegistration(data){
    return this.httpClient.post<any>(this.baseUrl+'register-student', data)
  }

  login(email_id, password){
    return this.httpClient.get<boolean>(`http://localhost:8080/${email_id}/${password}`);
  }

  getAssociate(id: number){
    return this.httpClient.get<AssociateData>(this.baseUrl+`associate/${id}`)
  }

  getMentor(id: number){
    return this.httpClient.get<MentorData>(this.baseUrl+`mentor/${id}`)
  }

  getAllTask() {
    return this.httpClient.get<Task[]>(this.baseUrl+`plans`)
  }

  logout(data: User){
    return this.httpClient.post<any>(this.baseUrl+'logout', data)
  }

  updatePercentage(data: Task){
    return this.httpClient.post<any>(this.baseUrl+'updatePlan', data);
  }

  assignTask(data){
    return this.httpClient.post<any>(this.baseUrl+'changePlan', data)
  }

  get_aptitude_question(){
    return this.httpClient.get<Questions[]>(`http://localhost:8080/get_aptitude_questions`);
  }
  get_coding_question(){
    return this.httpClient.get<Questions[]>(`http://localhost:8080/get_coding_questions`);
  }
}
