import { Component, Input } from '@angular/core';
import { PortfolioComponent } from "../portfolio/portfolio.component";

@Component({
  selector: 'app-modal',
  imports: [PortfolioComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  imgsrc:string =''

  


}


