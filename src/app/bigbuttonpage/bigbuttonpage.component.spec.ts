import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigbuttonpageComponent } from './bigbuttonpage.component';

describe('BigbuttonpageComponent', () => {
  let component: BigbuttonpageComponent;
  let fixture: ComponentFixture<BigbuttonpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigbuttonpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigbuttonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
