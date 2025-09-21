import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsModalComponent } from './analytics-modal.component';

describe('AnalyticsModalComponent', () => {
  let component: AnalyticsModalComponent;
  let fixture: ComponentFixture<AnalyticsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
