import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcpieComponent } from './entcpie.component';

describe('EntcpieComponent', () => {
  let component: EntcpieComponent;
  let fixture: ComponentFixture<EntcpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntcpieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntcpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
