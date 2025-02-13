import { Component, Output, EventEmitter } from '@angular/core';
import { dir } from 'console';
declare var bootstrap: any;
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

  selectedImage: string = '';
  openModal(img: string) {
    this.selectedImage = img;
    let modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }

}
