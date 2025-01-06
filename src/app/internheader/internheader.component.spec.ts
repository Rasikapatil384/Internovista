import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternheaderComponent } from './internheader.component';

describe('InternheaderComponent', () => {
  let component: InternheaderComponent;
  let fixture: ComponentFixture<InternheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
