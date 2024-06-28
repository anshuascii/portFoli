import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isMenuHidden = true;

  toggleMenu(): void {
    this.isMenuHidden = !this.isMenuHidden;
  }
}

