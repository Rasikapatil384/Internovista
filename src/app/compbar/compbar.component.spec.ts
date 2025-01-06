import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompbarComponent } from './compbar.component';

describe('CompbarComponent', () => {
  let component: CompbarComponent;
  let fixture: ComponentFixture<CompbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
