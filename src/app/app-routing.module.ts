import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { CodingComponent } from './coding/coding.component';
import { ResultComponent } from './result/result.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminComponent },
      {path: '', component: LoginComponent},
      {path: 'aptitude-test/:id', component: AptitudeComponent},
      {path: 'coding-test/:id', component: CodingComponent},
      {path: 'result/:id', component: ResultComponent},
      {path: 'add-question', component: AddQuestionsComponent},
      {path: 'admin-results', component: AdminComponent}

      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
