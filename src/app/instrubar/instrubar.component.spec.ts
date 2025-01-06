import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrubarComponent } from './instrubar.component';

describe('InstrubarComponent', () => {
  let component: InstrubarComponent;
  let fixture: ComponentFixture<InstrubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrubarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
