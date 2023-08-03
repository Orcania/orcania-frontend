import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss'],
})
export class MainTopComponent {
  private scrollContainer: any;
  link : string = 'portfolio';

  constructor(private scrollService: ScrollService) {}

  @ViewChild('frameHome', { static: false }) frameHome: ElementRef | undefined;

  @HostListener('window:resize')
  ngAfterViewInit() {
    if (this.frameHome) this.scrollContainer = this.frameHome.nativeElement;
    this.scrollService.scrollHeightHome = this.scrollContainer.scrollHeight;
  }

  scrollTo(elementId: string): void {
    if (elementId === 'portfolio') {
      this.link = 'portfolio';
      this.scrollService.scrollPortfolio();
    }
  }
}
