import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffanalysisbarComponent } from './diffanalysisbar.component';

describe('DiffanalysisbarComponent', () => {
  let component: DiffanalysisbarComponent;
  let fixture: ComponentFixture<DiffanalysisbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiffanalysisbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffanalysisbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
