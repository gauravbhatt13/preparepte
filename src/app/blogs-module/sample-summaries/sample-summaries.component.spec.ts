import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSummariesComponent } from './sample-summaries.component';

describe('SampleSummariesComponent', () => {
  let component: SampleSummariesComponent;
  let fixture: ComponentFixture<SampleSummariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSummariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
