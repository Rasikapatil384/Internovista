import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyAnalysisComponent } from './difficulty-analysis.component';

describe('DifficultyAnalysisComponent', () => {
  let component: DifficultyAnalysisComponent;
  let fixture: ComponentFixture<DifficultyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifficultyAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
