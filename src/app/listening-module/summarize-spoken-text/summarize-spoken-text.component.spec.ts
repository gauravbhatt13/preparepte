import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizeSpokenTextComponent } from './summarize-spoken-text.component';

describe('SummarizeSpokenTextComponent', () => {
  let component: SummarizeSpokenTextComponent;
  let fixture: ComponentFixture<SummarizeSpokenTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizeSpokenTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizeSpokenTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
