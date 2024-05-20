import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-intership',
  templateUrl: './intership.component.html',
  styleUrls: ['./intership.component.css']
})
export class IntershipComponent {

  internshipDetails: any[] = [];

  signupForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private formdataservice: FormdataService) {
    this.signupForm = this.formbuilder.group({
      companyName0: ['', Validators.required],
      position0: ['', Validators.required],
      certificate0: ['', Validators.required],
      projectInfo0: ['', Validators.required]
    });

    // Add the first empty input row when the component is created
    this.addMore();
  }

  addMore() {
    const newDetail = {
      companyName: '',
      position: '',
      certificate: '',
      projectInfo: ''
    };
    this.internshipDetails.push(newDetail);

    // Add form controls dynamically
    const index = this.internshipDetails.length - 1;
    this.signupForm.addControl('companyName' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('position' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('certificate' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('projectInfo' + index, new FormControl('', Validators.required));
  }

  remove(index: number) {
    this.internshipDetails.splice(index, 1);

    // Remove form controls
    this.signupForm.removeControl('companyName' + index);
    this.signupForm.removeControl('position' + index);
    this.signupForm.removeControl('certificate' + index);
    this.signupForm.removeControl('projectInfo' + index);
  }

  storeData() {
    this.formdataservice.internshipDetails = this.internshipDetails;
    console.log(this.internshipDetails);
    this.router.navigate(['projects']);
  }
}
