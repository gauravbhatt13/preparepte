import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McMultipleAnswerComponent } from './mc-multiple-answer.component';

describe('McMultipleAnswerComponent', () => {
  let component: McMultipleAnswerComponent;
  let fixture: ComponentFixture<McMultipleAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McMultipleAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McMultipleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
