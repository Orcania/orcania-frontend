import { Component , ViewChild , OnInit } from '@angular/core';
import { services , Iservices } from 'src/constants/services';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  items : services[] = Iservices;

  @ViewChild('navv', { read: DragScrollComponent }) ds!: DragScrollComponent;
  moveTo(index : number){
    this.ds.moveTo(index)
  }
}
