import { Component , ViewChild , ElementRef , HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.scss']
})
export class MainTopComponent {
  private scrollContainer: any;

  constructor(private scrollService : ScrollService){ }

  @ViewChild('frameHome', {static: false}) frameHome: ElementRef | undefined;

  @HostListener('window:resize')
  ngAfterViewInit() {
    if (this.frameHome)
    this.scrollContainer = this.frameHome.nativeElement;
    this.scrollService.scrollHeightHome = this.scrollContainer.scrollHeight
    console.log('home height' , this.scrollContainer.scrollHeight)
  }
}
