import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isDropdownVisible = false;
  isMobileView = window.innerWidth <= 640;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
    console.log('Dropdown toggled. Current state:', this.isDropdownVisible); // Debug log
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = window.innerWidth <= 640;
    if (!this.isMobileView) {
      this.isDropdownVisible = false;
    }
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.dropdown-content');
    const toggleButton = document.querySelector('.dropdown-menu button');

    if (dropdown && toggleButton && !dropdown.contains(target) && !toggleButton.contains(target)) {
      this.isDropdownVisible = false;
      console.log('Clicked outside. Dropdown closed.'); // Debug log
    }
  }

}


