import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoterDetailsComponent } from './noter-details.component';

describe('NoterDetailsComponent', () => {
  let component: NoterDetailsComponent;
  let fixture: ComponentFixture<NoterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
