import { Component , ViewChild , ElementRef , HostListener } from '@angular/core';
import { services , Iservices } from 'src/constants/services';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  items : services[] = Iservices;
  private scrollContainer: any;

  constructor(private scrollService : ScrollService){ }

  @ViewChild('navv', { read: DragScrollComponent }) ds!: DragScrollComponent;
  @ViewChild('frameAbout', {static: false}) frameAbout: ElementRef | undefined;

  ngAfterViewInit() {
    if (this.frameAbout)
    this.scrollContainer = this.frameAbout.nativeElement;
    this.scrollService.scrollHeightAbout = this.scrollContainer.scrollHeight
  }

  moveTo(index : number){
    this.ds.moveTo(index)
  }
}
