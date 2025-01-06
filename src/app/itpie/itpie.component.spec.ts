import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItpieComponent } from './itpie.component';

describe('ItpieComponent', () => {
  let component: ItpieComponent;
  let fixture: ComponentFixture<ItpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItpieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
