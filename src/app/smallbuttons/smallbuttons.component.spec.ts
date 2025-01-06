import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallbuttonsComponent } from './smallbuttons.component';

describe('SmallbuttonsComponent', () => {
  let component: SmallbuttonsComponent;
  let fixture: ComponentFixture<SmallbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallbuttonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
