import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  current_year: number = new Date().getFullYear()

  go_up = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
