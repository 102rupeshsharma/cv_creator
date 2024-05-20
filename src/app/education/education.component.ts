import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  nameValue: string = '';
  branchValue: string = '';

  signupForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private formdataservice: FormdataService
  ) {
    this.signupForm = formbuilder.group({
      'college': ['', Validators.required],
      'branch': ['', Validators.required],
      'graduationYear': ['', Validators.required],
    })
  }

  onNameChange() {
    this.nameValue = this.toPascalCase(this.nameValue);
  }

  onInputChange() {
    this.branchValue = this.toPascalCase(this.branchValue);
  }

  toPascalCase(input: string): string {
    return input.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  storeData(signupForm: FormGroup) {
    this.formdataservice.collegeName = signupForm.controls['college'].value
    this.formdataservice.branch = signupForm.controls['branch'].value
    this.formdataservice.passOutYear = signupForm.controls['graduationYear'].value
    console.log(signupForm.controls)
    console.log('submitted')
    this.router.navigate(['/resumepage']);
  }
}
