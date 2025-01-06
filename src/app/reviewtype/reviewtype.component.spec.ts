import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewtypeComponent } from './reviewtype.component';

describe('ReviewtypeComponent', () => {
  let component: ReviewtypeComponent;
  let fixture: ComponentFixture<ReviewtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewtypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
