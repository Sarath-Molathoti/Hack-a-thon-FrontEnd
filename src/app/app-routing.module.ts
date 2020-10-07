import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { CodingComponent } from './coding/coding.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminComponent },
      {path: '', component: RegisterComponent},
      {path: 'aptitude-test/:id', component: AptitudeComponent},
      {path: 'coding-test', component: CodingComponent}
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
