import { Component, Output, EventEmitter, Directive } from '@angular/core';
import { dir } from 'console';
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images: string[] = [
    './imgs/poert1.png',
    './imgs/port2.png',
    './imgs/port3.png',
    './imgs/poert1.png',
    './imgs/port2.png',
    './imgs/port3.png'
  ];

}
