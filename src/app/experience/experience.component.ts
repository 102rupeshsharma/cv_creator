import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  workExperience: any[] = [];

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private formDataService: FormdataService) {
    this.signupForm = this.formBuilder.group({});
    this.addMore();
  }

  addMore() {
    const newDetail = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      city: '',
      description: '',
    };
    this.workExperience.push(newDetail);

    const index = this.workExperience.length - 1;
    this.signupForm.addControl('company' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('position' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('startDate' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('endDate' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('city' + index, new FormControl('', Validators.required));
    this.signupForm.addControl('description' + index, new FormControl('', Validators.required));
  }

  remove(index: number) {
    this.workExperience.splice(index, 1);

    // Removing form controls
    this.signupForm.removeControl('company' + index);
    this.signupForm.removeControl('position' + index);
    this.signupForm.removeControl('startDate' + index);
    this.signupForm.removeControl('endDate' + index);
    this.signupForm.removeControl('city' + index);
    this.signupForm.removeControl('description' + index);

    // Adjusting indices for remaining controls
    for (let i = index; i < this.workExperience.length; i++) {
      this.signupForm.setControl('company' + i, this.signupForm.get('company' + (i + 1)));
      this.signupForm.setControl('position' + i, this.signupForm.get('position' + (i + 1)));
      this.signupForm.setControl('startDate' + i, this.signupForm.get('startDate' + (i + 1)));
      this.signupForm.setControl('endDate' + i, this.signupForm.get('endDate' + (i + 1)));
      this.signupForm.setControl('city' + i, this.signupForm.get('city' + (i + 1)));
      this.signupForm.setControl('description' + i, this.signupForm.get('description' + (i + 1)));
    }

    // Removing the last duplicate set of controls
    this.signupForm.removeControl('company' + this.workExperience.length);
    this.signupForm.removeControl('position' + this.workExperience.length);
    this.signupForm.removeControl('startDate' + this.workExperience.length);
    this.signupForm.removeControl('endDate' + this.workExperience.length);
    this.signupForm.removeControl('city' + this.workExperience.length);
    this.signupForm.removeControl('description' + this.workExperience.length);
  }

  storeData() {
    this.workExperience = this.workExperience.map((detail, index) => ({
      company: this.signupForm.get('company' + index)?.value,
      position: this.signupForm.get('position' + index)?.value,
      startDate: this.signupForm.get('startDate' + index)?.value,
      endDate: this.signupForm.get('endDate' + index)?.value,
      city: this.signupForm.get('city' + index)?.value,
      description: this.signupForm.get('description' + index)?.value,
    }));

    this.formDataService.workExperienceDetails = this.workExperience;
    console.log('work experience submitted');
    this.router.navigate(['/projects']);
  }
}
