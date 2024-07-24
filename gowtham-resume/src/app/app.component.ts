import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModuleModule } from './app.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, AppModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gowtham-resume';
}
