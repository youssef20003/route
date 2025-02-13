import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../layouts/navbar/navbar.component";
import { FooterComponent } from "../layouts/footer/footer.component";
import { PortfolioComponent } from "../pages/portfolio/portfolio.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng1';
}