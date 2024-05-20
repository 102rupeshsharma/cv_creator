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

  internshipDetails:string[] = [];

  collegeName:string = '';
  branch:string = '';
  passOutYear:string = '';

//  site key: 6LcjDtcpAAAAAFJ-HtnbWBxn23jj9N6ilKFTgEwm
    // secerty key :6LcjDtcpAAAAAK0B81x-yD4q2KXZkld9u-5X0Gk2
}
