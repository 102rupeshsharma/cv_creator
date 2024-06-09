import { Component } from '@angular/core';
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
    this.signupForm = this.formbuilder.group({});
    this.addMore();
  }

  addMore() {
    const newDetail = {
      projectTitle: '',
      projectUrl: '',
      projectDescription: '',
    };
    this.projectDetails.push(newDetail);

    const index = this.projectDetails.length - 1;
    this.signupForm.addControl('projectTitle' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('projectUrl' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('projectDescription' + index, new FormControl('', Validators.required));
  }

  remove(index: number) {
    this.projectDetails.splice(index, 1);

    this.signupForm.removeControl('projectTitle' + index);
    this.signupForm.removeControl('projectUrl' + index);
    this.signupForm.removeControl('projectDescription' + index);

    for (let i = index; i < this.projectDetails.length; i++) {
      this.signupForm.setControl('projectTitle' + i, this.signupForm.get('projectTitle' + (i + 1)));
      this.signupForm.setControl('projectUrl' + i, this.signupForm.get('projectUrl' + (i + 1)));
      this.signupForm.setControl('projectDescription' + i, this.signupForm.get('projectDescription' + (i + 1)));
    }

    this.signupForm.removeControl('projectTitle' + this.projectDetails.length);
    this.signupForm.removeControl('projectUrl' + this.projectDetails.length);
    this.signupForm.removeControl('projectDescription' + this.projectDetails.length);
  }

  storeData() {
    this.projectDetails = this.projectDetails.map((detail, index) => ({
      projectTitle: this.signupForm.get('projectTitle' + index)?.value,
      projectUrl: this.signupForm.get('projectUrl' + index)?.value,
      projectDescription: this.signupForm.get('projectDescription' + index)?.value,
    }));

    this.formdataservice.projectDetails = this.projectDetails;
    console.log("Project Details submitted");
    this.router.navigate(['skills']);
  }
}
