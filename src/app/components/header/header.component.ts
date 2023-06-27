import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private scrollService : ScrollService) {}

  open : boolean = false;
  link : string = 'home';

  /*scrollTo(elementId: string): void {
    if (elementId === 'home'){
      this.link = 'home';
      scroll({ top: 0,
        left: 0,
        behavior: 'smooth'});
    }

    else if (elementId === 'about'){
      this.link = 'about';
      scroll({ top: 1230,
        left: 0,
        behavior: 'smooth'});
    }

    else if (elementId === 'portfolio'){
      this.link = 'portfolio';
      scroll({ top: 2650,
        left: 0,
        behavior: 'smooth'});
    }

    else if (elementId === 'contact'){
      this.link = 'contact';
      scroll({ top: 3400,
        left: 0,
        behavior: 'smooth'});
    }
      this.open = false
  } */

   scrollTo(elementId: string): void {
    if (elementId === 'home'){
      this.link = 'home';
      this.scrollService.scrollHome()
    }

    if (elementId === 'about'){
      this.link = 'about';
      this.scrollService.scrollAbout()
    }

    if (elementId === 'portfolio'){
      this.link = 'portfolio';
      this.scrollService.scrollPortfolio()
    }
    
    if (elementId === 'contact'){
      this.link = 'contact';
      this.scrollService.scrollContact()
    }
      this.open = false
  } 

  toggleMenu() :void {
    this.open = !this.open
  }
}
