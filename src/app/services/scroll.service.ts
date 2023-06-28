import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }
  scrollHeightHome : any;
  sctollHeightAbout: any;
  scrollHeightPortfolio: any;
  scrollHeightContact: any;
  scrollHeightAbout: any;

  public scrollHome(): void {
    scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public scrollPortfolio(): void {
    scroll({
      top:  this.scrollHeightAbout + this.scrollHeightHome + 140,
      left: 0,
      behavior: 'smooth'
    });
  }

  public scrollContact(): void {
    scroll({
      top: this.scrollHeightAbout + this.scrollHeightHome + this.scrollHeightPortfolio -70 ,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  public scrollAbout(): void {
    scroll({
      top: this.scrollHeightHome + 70,
      left: 0,
      behavior: 'smooth'
    });
  }

}

