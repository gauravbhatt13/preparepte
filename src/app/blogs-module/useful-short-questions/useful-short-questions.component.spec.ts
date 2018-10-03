import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulShortQuestionsComponent } from './useful-short-questions.component';

describe('UsefulShortQuestionsComponent', () => {
  let component: UsefulShortQuestionsComponent;
  let fixture: ComponentFixture<UsefulShortQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulShortQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulShortQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
