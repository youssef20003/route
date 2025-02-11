import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('nav', { static: false })
  nav!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      this.nav.nativeElement.classList.add("py-4");
    } else {
      this.nav.nativeElement.classList.remove("py-4");
    }
  }
}
