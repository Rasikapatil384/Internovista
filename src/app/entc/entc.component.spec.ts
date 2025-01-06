import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcComponent } from './entc.component';

describe('EntcComponent', () => {
  let component: EntcComponent;
  let fixture: ComponentFixture<EntcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
