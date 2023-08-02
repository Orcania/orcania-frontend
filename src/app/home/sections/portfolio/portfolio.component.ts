import { Component , ViewChild , ElementRef  , HostListener  } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {


  projects = [
    {
      title: 'The Red Ape Family',
      subtitle: 'Company Name',
      description: 'The Red Ape Family (TRAF) is a ground-breaking new comedy, and the first animated series built around, and starring, famous NFTs. It is also the first show of its kind where episodes are sold as individual NFTs.',
      imgSrc: '/assets/ape-logo.svg',
      websiteUrl: 'https://example.com'
    },
    {
      title: 'The Red Ape Family',
      subtitle: 'Company Name',
      description: 'The Red Ape Family (TRAF) is a ground-breaking new comedy, and the first animated series built around, and starring, famous NFTs. It is also the first show of its kind where episodes are sold as individual NFTs.',
      imgSrc: '/assets/ape-logo.svg',
      websiteUrl: 'https://example.com'
    },
    {
      title: 'The Red Ape Family',
      subtitle: 'Company Name',
      description: 'The Red Ape Family (TRAF) is a ground-breaking new comedy, and the first animated series built around, and starring, famous NFTs. It is also the first show of its kind where episodes are sold as individual NFTs.',
      imgSrc: '/assets/ape-logo.svg',
      websiteUrl: 'https://example.com'
    },
    // Add more projects as needed...
  ];

  openUrl(url: string) {
    window.open(url, '_blank');
  }
  constructor(private scrollService : ScrollService ) {}

  isScrollbarHidden: boolean = true;
  private scrollContainer: any;
  i : number = 1

  @ViewChild('navv', { read: DragScrollComponent }) ds!: DragScrollComponent;
  @ViewChild('framePortfolio', {static: false}) framePortfolio: ElementRef | undefined;
  @ViewChild('portfolioContainer') containerRef !: ElementRef;

  @HostListener('window:resize')
  ngAfterViewInit() {
    if (this.framePortfolio)
    this.scrollContainer = this.framePortfolio.nativeElement;
    this.scrollService.scrollHeightPortfolio = this.scrollContainer.scrollHeight

    /* const panelWidth = this.containerRef.nativeElement.offsetWidth;
    console.log(panelWidth)
    const scrollLeft = this.containerRef.nativeElement.scrollLeft;
    console.log(scrollLeft)
    const panelNumber = Math.round(scrollLeft / panelWidth);

    // Update the currentPanel variable
    this.i = panelNumber;

    // Update the navigation status */
    
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

      /*ngOnInit() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
          this.isScrollbarHidden = true
        }
        else if (windowWidth < 768){
          this.isScrollbarHidden = false;
        }*/
      
    
}
