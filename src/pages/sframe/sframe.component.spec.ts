import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SframeComponent } from './sframe.component';

describe('SframeComponent', () => {
  let component: SframeComponent;
  let fixture: ComponentFixture<SframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
