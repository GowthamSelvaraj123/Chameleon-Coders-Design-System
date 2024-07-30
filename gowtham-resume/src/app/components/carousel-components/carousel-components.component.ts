import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-components',
  templateUrl: './carousel-components.component.html',
  styleUrl: './carousel-components.component.scss'
})

export class CarouselComponentsComponent {
    heroContents = [
      {title:"I am Front End Developer", content:"I have versatile skills in angular, react js, html ,css", button:"Contact Us"}, 
      {title:"I am PHP Developer", content:"I have versatile skills in php and mysql projects", button:"Contact us"}, 
      {title:"I am Full Stack Developer", content:"I have well at wordpress, html, css, js, jquery, php, mysql", button:"Contact us"}, 
    ];
    activeIndex = 0; 
    totalSlides:number = this.heroContents.length;
    setActiveIndex(index: number) {
      this.activeIndex = index;
    }
    onNext()
    {
      if(this.activeIndex < this.totalSlides - 1){
      this.activeIndex++;
      }
      else
      {
        this.activeIndex = 0;
      }
      console.log(this.activeIndex);
    }
    onPrev()
    {
      if (this.activeIndex > 0) {
      this.activeIndex--;
      }
      else {
        this.activeIndex = this.totalSlides - 1;
      }
      console.log(this.activeIndex);
    }
}