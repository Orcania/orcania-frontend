import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
  }
}
