import { Component , ViewChild , HostBinding , HostListener, OnInit  } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isScrollbarHidden: boolean = true;

  i : number = 1

  @ViewChild('navv', { read: DragScrollComponent }) ds!: DragScrollComponent;

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

    @HostListener('window:resize')
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
