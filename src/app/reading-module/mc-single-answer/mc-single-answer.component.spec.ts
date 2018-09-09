import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McSingleAnswerComponent } from './mc-single-answer.component';

describe('McSingleAnswerComponent', () => {
  let component: McSingleAnswerComponent;
  let fixture: ComponentFixture<McSingleAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McSingleAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McSingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
