import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItbarComponent } from './itbar.component';

describe('ItbarComponent', () => {
  let component: ItbarComponent;
  let fixture: ComponentFixture<ItbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
