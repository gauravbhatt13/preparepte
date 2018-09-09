import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatSentenceComponent } from './repeat-sentence.component';

describe('RepeatSentenceComponent', () => {
  let component: RepeatSentenceComponent;
  let fixture: ComponentFixture<RepeatSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatSentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
