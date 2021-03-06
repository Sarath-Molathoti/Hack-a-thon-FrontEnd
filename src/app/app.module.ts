import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { CountdownModule } from 'ngx-countdown';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { CodingComponent } from './coding/coding.component';
import { ResultComponent } from './result/result.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { GlobalConstants } from './global-constants';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ExamPageComponent,
    AptitudeComponent,
    CodingComponent,
    ResultComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule
    ],
  providers: [GlobalConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
