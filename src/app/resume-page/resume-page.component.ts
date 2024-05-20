import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { FormdataService } from '../formdata.service';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

interface InternshipDetail {
  companyName: string;
  position: string;
  certificate: string;
  projectInfo: string;
}

interface ProjectDetail {
  ProjectTitle: string;
  projectUrl: string;
  projectDescription: string;
}

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent {


  constructor(private formdataservice: FormdataService) { }

  FullName: string = this.formdataservice.fullName;
  LinkdInProfile: string = this.formdataservice.linkdinProfileUrl;
  Email: string = this.formdataservice.email;
  Phone: string = this.formdataservice.phone;
  City: string = this.formdataservice.city;
  State: string = this.formdataservice.state;
  Description: string = this.formdataservice.Description;
  Skills: string[] = this.formdataservice.skills;

  College: string = this.formdataservice.collegeName;
  branch: string = this.formdataservice.branch;
  GraduationYear: string = this.formdataservice.passOutYear;

  internshipDetails: InternshipDetail[] = this.formdataservice.internshipDetails.map((detail: any) => {
    return {
      companyName: detail.companyName,
      position: detail.position,
      certificate: detail.certificate,
      projectInfo: detail.projectInfo
    };
  });

  projectDetails: ProjectDetail[] = this.formdataservice.projectDetails.map((detail: any) => {
    return {
      ProjectTitle: detail.ProjectTitle,
      projectUrl: detail.projectUrl,
      projectDescription: detail.projectDescription
    };
  });

  @ViewChild('content', { static: false }) content!: ElementRef;

  downloadresume() {
    if (this.content.nativeElement) {
      html2canvas(this.content.nativeElement, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jspdf.default();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = canvas.height * pdfWidth / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
      });
    }
}


}
