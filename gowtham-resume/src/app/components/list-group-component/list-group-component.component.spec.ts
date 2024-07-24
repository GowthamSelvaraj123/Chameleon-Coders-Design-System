import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupComponentComponent } from './list-group-component.component';

describe('ListGroupComponentComponent', () => {
  let component: ListGroupComponentComponent;
  let fixture: ComponentFixture<ListGroupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGroupComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
