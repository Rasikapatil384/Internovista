import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinternshipreviewpageComponent } from './postinternshipreviewpage.component';

describe('PostinternshipreviewpageComponent', () => {
  let component: PostinternshipreviewpageComponent;
  let fixture: ComponentFixture<PostinternshipreviewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostinternshipreviewpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostinternshipreviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
