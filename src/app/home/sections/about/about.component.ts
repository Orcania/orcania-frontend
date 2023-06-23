import { Component } from '@angular/core';
import { services , Iservices } from 'src/constants/services';
import { DragScrollComponent } from 'ngx-drag-scroll/public-api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  items : services[] = Iservices;
}
