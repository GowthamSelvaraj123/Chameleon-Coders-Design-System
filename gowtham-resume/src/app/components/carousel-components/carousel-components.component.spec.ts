import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponentsComponent } from './carousel-components.component';

describe('CarouselComponentsComponent', () => {
  let component: CarouselComponentsComponent;
  let fixture: ComponentFixture<CarouselComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
