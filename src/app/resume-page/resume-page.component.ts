import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormdataService } from '../formdata.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ExperienceDetails } from '../models/experienceDetails';
import { EducationDetails } from '../models/educationDetails';
import { ProjectDetail } from '../models/projectDetails';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  constructor(private formdataservice: FormdataService) {}

  FullName: string = this.formdataservice.fullName;
  LinkdInProfile: string = this.formdataservice.linkdinProfileUrl;
  Email: string = this.formdataservice.email;
  Phone: string = this.formdataservice.phone;
  City: string = this.formdataservice.city;
  State: string = this.formdataservice.state;
  Description: string = this.formdataservice.Description;
  Skills: string[] = this.formdataservice.skills;

  ngOnInit(): void {
    console.log(this.workExperienceDetails)
  }

  workExperienceDetails: ExperienceDetails[] = this.formdataservice.workExperienceDetails.map((detail: any) => {
    return {
      CompanyName: detail.company,
      Position: detail.position,
      StartDate: detail.startDate,
      EndDate: detail.endDate,
      City: detail.city,
      Summary: detail.description
    };
  });

  projectDetails: ProjectDetail[] = this.formdataservice.projectDetails.map((detail: any) => {
    return {
      ProjectTitle: detail.projectTitle,
      projectUrl: detail.projectUrl,
      projectDescription: detail.projectDescription
    };
  });

  educationDetails: EducationDetails[] = this.formdataservice.EducationDetails.map((detail: any) => {
    return {
      School: detail.school,
      Degree: detail.degree,
      StartDate: detail.startDate,
      EndDate: detail.endDate,
      City: detail.city,
      Description: detail.description
    };
  })



  @ViewChild('content', { static: false }) content!: ElementRef;

  downloadresume() {
    
    const contentEl = this.content.nativeElement;
    console.log(contentEl);
    html2canvas(contentEl, {
      scale: 2, 
      useCORS: true, 
      logging: true
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('resume.pdf');
    }).catch(err => {
      console.error('Error generating PDF:', err);
    });
  }
}
