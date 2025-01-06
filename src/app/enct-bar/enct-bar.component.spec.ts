import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnctBarComponent } from './enct-bar.component';

describe('EnctBarComponent', () => {
  let component: EnctBarComponent;
  let fixture: ComponentFixture<EnctBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnctBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnctBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
