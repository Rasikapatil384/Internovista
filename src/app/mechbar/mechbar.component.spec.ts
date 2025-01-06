import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechbarComponent } from './mechbar.component';

describe('MechbarComponent', () => {
  let component: MechbarComponent;
  let fixture: ComponentFixture<MechbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MechbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
