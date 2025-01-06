import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentalanalysisComponent } from './departmentalanalysis.component';

describe('DepartmentalanalysisComponent', () => {
  let component: DepartmentalanalysisComponent;
  let fixture: ComponentFixture<DepartmentalanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentalanalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentalanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
