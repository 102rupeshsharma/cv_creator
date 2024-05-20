import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { EducationComponent } from './education/education.component';
import { IntershipComponent } from './intership/intership.component';
import { IntershipOptionComponent } from './intership-option/intership-option.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'signup', component:SingupComponent},
  { path:'login', component:LoginComponent},
  { path:'forgotPassword', component:ForgotPasswordComponent},
  { path:'home', component:HomeComponent},
  { path:'main', component:MainComponent},
  { path:'internshipOption', component:IntershipOptionComponent},
  { path:'internship', component:IntershipComponent},
  { path:'projects', component:ProjectInfoComponent},
  { path:'education', component:EducationComponent},
  { path:'resumepage', component:ResumePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
