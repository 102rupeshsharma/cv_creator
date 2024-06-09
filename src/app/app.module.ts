import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TagsComponent } from './tags/tags.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { EducationComponent } from './education/education.component';
import { CalendarModule } from 'primeng/calendar';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MainComponent,
    TagsComponent,
    ResumePageComponent,
    EducationComponent,
    ProjectInfoComponent,
    SingupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ExperienceComponent,
    SkillComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    KeyFilterModule,
    CalendarModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
