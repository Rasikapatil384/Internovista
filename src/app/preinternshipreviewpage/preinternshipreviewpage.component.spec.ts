import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinternshipreviewpageComponent } from './preinternshipreviewpage.component';

describe('PreinternshipreviewpageComponent', () => {
  let component: PreinternshipreviewpageComponent;
  let fixture: ComponentFixture<PreinternshipreviewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreinternshipreviewpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreinternshipreviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
