import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  hideInternship: boolean = true;
  constructor() { }

  fullName:string = '';
  linkdinProfileUrl:string = '';
  email:string = '';
  phone:string = '';
  Description:string = '';
  city:string = '';
  state:string = '';

  skills:string[] = [];

  projectDetails:string[] = [];

  workExperienceDetails:string[] = [];

  EducationDetails:string[] = [];
  

}
