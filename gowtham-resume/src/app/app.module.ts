import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselComponentsComponent } from './components/carousel-components/carousel-components.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations:[CarouselComponentsComponent],
  imports: [CommonModule], 
  exports:[CarouselComponentsComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleModule { }
