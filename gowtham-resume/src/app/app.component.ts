import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { AppModuleModule } from './app.module';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, HeaderComponentComponent, AppModuleModule, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gowtham-resume';
}
