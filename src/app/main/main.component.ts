import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  
  value:string = '';
  nameValue: string = '';
  cityValue:string = '';
  stateValue:string = '';
   reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  onFullNameChange() {
    this.nameValue = this.toPascalCase(this.nameValue);
  }
  
  onCityValueChange() {
    this.cityValue = this.toPascalCase(this.cityValue);
  }
  
  onStateValueChange() {
    this.stateValue = this.toPascalCase(this.stateValue);
  }

  toPascalCase(input: string): string {
    return input.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  signupForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router, public formdataservice:FormdataService) {
    this.signupForm = formbuilder.group({
      'fullname': ['',[ Validators.required ,Validators.minLength(1)]],
      'linkdinprofileurl': ['',Validators.pattern(this.reg)],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'city' : ['', Validators.required],
      'state': ['', Validators.required],
      'description': ['', Validators.required],
      
    })

  }
  ngOnInit() { }

  storeData(signupForm: FormGroup) {
    this.formdataservice.fullName = signupForm.controls['fullname'].value
    this.formdataservice.linkdinProfileUrl = signupForm.controls['linkdinprofileurl'].value
    this.formdataservice.email = signupForm.controls['email'].value
    this.formdataservice.phone = signupForm.controls['phone'].value
    this.formdataservice.city = signupForm.controls['city'].value
    this.formdataservice.state = signupForm.controls['state'].value
    this.formdataservice.Description = signupForm.controls['description'].value
    console.log(signupForm.controls)
    console.log('submitted')
    this.router.navigate(['/experience']);
  }

  @ViewChild('fullName') fullname!: ElementRef;
  @ViewChild('linkdinurl') linkdinUrl!: ElementRef;
  @ViewChild('Gmail') gmail!: ElementRef;
  @ViewChild('Phone') phone!: ElementRef;
  @ViewChild('Description') description!: ElementRef;
  @ViewChild('City') city!: ElementRef;
  @ViewChild('state') State!: ElementRef;

  getFormData() {
    this.fullname.nativeElement.value = this.formdataservice.fullName;
    this.linkdinUrl.nativeElement.value = this.formdataservice.linkdinProfileUrl;
    this.gmail.nativeElement.value = this.formdataservice.email;
    this.phone.nativeElement.value = this.formdataservice.phone;
    this.description.nativeElement.value = this.formdataservice.Description;
    this.city.nativeElement.city = this.formdataservice.city;
    this.State.nativeElement.state = this.formdataservice.state;
  }
}
