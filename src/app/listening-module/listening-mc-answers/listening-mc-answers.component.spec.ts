import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningMcAnswersComponent } from './listening-mc-answers.component';

describe('ListeningMcAnswersComponent', () => {
  let component: ListeningMcAnswersComponent;
  let fixture: ComponentFixture<ListeningMcAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningMcAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningMcAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
