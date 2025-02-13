import { Directive, ElementRef, HostListener, input, Input,  } from '@angular/core';
import { log } from 'console';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {
  @Input() imgsrc!:string;

  constructor(private _ElementRef: ElementRef) { }

  @HostListener('click', ['$event']) myfunc(e: PointerEvent): void {

    console.log(this.imgsrc);



  }

}
