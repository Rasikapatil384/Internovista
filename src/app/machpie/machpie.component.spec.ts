import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachpieComponent } from './machpie.component';

describe('MachpieComponent', () => {
  let component: MachpieComponent;
  let fixture: ComponentFixture<MachpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachpieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
