import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningMcSingleAnswerComponent } from './listening-mc-single-answer.component';

describe('ListeningMcSingleAnswerComponent', () => {
  let component: ListeningMcSingleAnswerComponent;
  let fixture: ComponentFixture<ListeningMcSingleAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningMcSingleAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningMcSingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
