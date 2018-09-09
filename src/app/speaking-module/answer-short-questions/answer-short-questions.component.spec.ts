import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerShortQuestionsComponent } from './answer-short-questions.component';

describe('AnswerShortQuestionsComponent', () => {
  let component: AnswerShortQuestionsComponent;
  let fixture: ComponentFixture<AnswerShortQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerShortQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerShortQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
