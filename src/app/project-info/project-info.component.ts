import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent {

  projectDetails: any[] = [];

  signupForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private formdataservice: FormdataService) {
    this.signupForm = this.formbuilder.group({
      ProjectTitle0: ['', Validators.required],
      projectUrl0: ['', Validators.required],
      projectDescription0: ['', Validators.required]
    });

    // Add the first empty input row when the component is created
    this.addMore();
  }

  addMore() {
    const newDetail = {
      ProjectTitle: '',
      projectUrl: '',
      projectDescription: ''
    };
    this.projectDetails.push(newDetail);

    // Add form controls dynamically
    const index = this.projectDetails.length - 1;
    this.signupForm.addControl('ProjectTitle' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('projectUrl' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('projectDescription' + index, new FormControl('', Validators.required));
  }

  remove(index: number) {
    this.projectDetails.splice(index, 1);

    // Remove form controls
    this.signupForm.removeControl('ProjectTitle' + index);
    this.signupForm.removeControl('projectUrl' + index);
    this.signupForm.removeControl('projectDescription' + index);
  }

  storeData() {
    this.formdataservice.projectDetails = this.projectDetails;
    console.log(this.projectDetails);
    this.router.navigate(['education']);
  }
}
