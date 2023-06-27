import { Component , ViewChild , ElementRef  , HostListener  } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private scrollService : ScrollService ) {}

  isScrollbarHidden: boolean = true;
  private scrollContainer: any;
  i : number = 1

  @ViewChild('navv', { read: DragScrollComponent }) ds!: DragScrollComponent;
  @ViewChild('framePortfolio', {static: false}) framePortfolio: ElementRef | undefined;

  ngAfterViewInit() {
    if (this.framePortfolio)
    this.scrollContainer = this.framePortfolio.nativeElement;
    this.scrollService.scrollHeightPortfolio = this.scrollContainer.scrollHeight
  }

    moveLeft() {
        this.ds.moveLeft();
        if (this.i > 1) {
          this.i--
        }
    }

    moveRight() {
        this.ds.moveRight();
        if (this.i >= 1 && this.i < 2){
          this.i++
        }
    }

      ngOnInit() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
          this.isScrollbarHidden = true
        }
        else if (windowWidth < 768){
          this.isScrollbarHidden = false;
        }
      }
    
}
