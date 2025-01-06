import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrupieComponent } from './instrupie.component';

describe('InstrupieComponent', () => {
  let component: InstrupieComponent;
  let fixture: ComponentFixture<InstrupieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrupieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrupieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
