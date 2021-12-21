import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViwerComponent } from './component-viwer.component';

describe('ComponentViwerComponent', () => {
  let component: ComponentViwerComponent;
  let fixture: ComponentFixture<ComponentViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentViwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
