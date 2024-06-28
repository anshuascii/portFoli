import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  scrollToDetails(): void {
    const detailsSection = document.getElementById('details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
