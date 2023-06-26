import { Component , ElementRef ,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) {}

  open : boolean = false;

  scrollTo(elementId: string): void {
    if (elementId === 'home'){
      scroll({ top: 0,
        left: 0,
        behavior: 'smooth'});
    }
    if (elementId === 'about'){
      scroll({ top: 1230,
        left: 0,
        behavior: 'smooth'});
    }
    if (elementId === 'portfolio'){
      scroll({ top: 2650,
        left: 0,
        behavior: 'smooth'});
    }
    if (elementId === 'contact'){
      scroll({ top: 3400,
        left: 0,
        behavior: 'smooth'});
    }
      this.open = false
  }

  toggleMenu() :void {
    this.open = !this.open
  }
}
