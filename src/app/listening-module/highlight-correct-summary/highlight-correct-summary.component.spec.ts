import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCorrectSummaryComponent } from './highlight-correct-summary.component';

describe('HighlightCorrectSummaryComponent', () => {
  let component: HighlightCorrectSummaryComponent;
  let fixture: ComponentFixture<HighlightCorrectSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightCorrectSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightCorrectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
