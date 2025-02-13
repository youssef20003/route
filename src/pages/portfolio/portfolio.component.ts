import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() imgsrc: EventEmitter<string> = new EventEmitter()


  sendsrc(src: string): void {
    console.log(src + 'from port comp');

    this.imgsrc.emit(src)
  }

}
