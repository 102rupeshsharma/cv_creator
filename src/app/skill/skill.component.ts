import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from '../formdata.service';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @ViewChild(TagsComponent) skillsTagComponent : TagsComponent | undefined;
  skillValue:string = '';
  emptySkill: string = '';

  onSkillValueChange() {
    this.skillValue = this.toPascalCase(this.skillValue);
  }
  toPascalCase(input: string): string {
    return input.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  signupForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router, public formdataservice:FormdataService) {
    this.signupForm = formbuilder.group({
      
      'skills': ['',Validators.required],
    })
  }

  storeData(signupForm: FormGroup) {
    this.router.navigate(['/education']);
  }
  addSkill(skillinput:HTMLInputElement) {
    skillinput.value = '';
    skillinput.placeholder = 'Enter another skill'
    var skillvalue = this.signupForm.controls['skills'].value
    this.formdataservice.skills.push(skillvalue);
    this.skillsTagComponent!.skills = this.formdataservice.skills;
    // console.log(this.formdataservice.skills);
  }

}
