import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@NgModule({
  declarations:[HeaderComponentComponent,
    FooterComponentComponent],
  imports: [AppComponent, 
    CommonModule], 
exports:[HeaderComponentComponent,
  FooterComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleModule { }
