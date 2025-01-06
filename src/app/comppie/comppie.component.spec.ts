import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComppieComponent } from './comppie.component';

describe('ComppieComponent', () => {
  let component: ComppieComponent;
  let fixture: ComponentFixture<ComppieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComppieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComppieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
