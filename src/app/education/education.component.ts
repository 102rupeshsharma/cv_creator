import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent  {
  educationDetails: any[] = [];

  signupForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private router: Router, private formDataService: FormdataService ) {
    this.signupForm = this.formBuilder.group({ });
    this.addMore();
  }

  addMore() {
    const newDetail = {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      city: '',
      description: '',
    };
    this.educationDetails.push(newDetail);

    const index = this.educationDetails.length - 1;
    this.signupForm.addControl('school' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('degree' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('startDate' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('endDate' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('city' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('description' + index, new FormControl('', Validators.required));
  }

  remove(index: number) {
    this.educationDetails.splice(index, 1);

    // Removing form controls
    this.signupForm.removeControl('school' + index);
    this.signupForm.removeControl('degree' + index);
    this.signupForm.removeControl('startDate' + index);
    this.signupForm.removeControl('endDate' + index);
    this.signupForm.removeControl('city' + index);
    this.signupForm.removeControl('description' + index);

    for (let i = index; i < this.educationDetails.length; i++) {
      this.signupForm.setControl('school' + i, this.signupForm.get('school' + (i + 1)));
      this.signupForm.setControl('degree' + i, this.signupForm.get('degree' + (i + 1)));
      this.signupForm.setControl('startDate' + i, this.signupForm.get('startDate' + (i + 1)));
      this.signupForm.setControl('endDate' + i, this.signupForm.get('endDate' + (i + 1)));
      this.signupForm.setControl('city' + i, this.signupForm.get('city' + (i + 1)));
      this.signupForm.setControl('description' + i, this.signupForm.get('description' + (i + 1)));
    }

    // Removing the last duplicate set of controls
    this.signupForm.removeControl('school' + this.educationDetails.length);
    this.signupForm.removeControl('degree' + this.educationDetails.length);
    this.signupForm.removeControl('startDate' + this.educationDetails.length);
    this.signupForm.removeControl('endDate' + this.educationDetails.length);
    this.signupForm.removeControl('city' + this.educationDetails.length);
    this.signupForm.removeControl('description' + this.educationDetails.length);
  }

  storeData() {
    this.educationDetails = this.educationDetails.map((detail, index) => ({
      school: this.signupForm.get('school' + index)?.value,
      degree: this.signupForm.get('degree' + index)?.value,
      startDate: this.signupForm.get('startDate' + index)?.value,
      endDate: this.signupForm.get('endDate' + index)?.value,
      city: this.signupForm.get('city' + index)?.value,
      description: this.signupForm.get('description' + index)?.value,
    }));

    this.formDataService.EducationDetails = this.educationDetails;
    console.log(this.educationDetails);
    this.router.navigate(['/resumepage']);
  }
}
