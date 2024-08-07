import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './components/common/header-component/header-component.component';
import { FooterComponentComponent } from './components/common/footer-component/footer-component.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  standalone:true,
  imports:[HeaderComponentComponent, RouterOutlet, FooterComponentComponent],
})
export class AppComponent {
  title = 'gowtham-resume';
}
