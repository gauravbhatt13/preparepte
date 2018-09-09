import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightIncorrectWordsComponent } from './highlight-incorrect-words.component';

describe('HighlightIncorrectWordsComponent', () => {
  let component: HighlightIncorrectWordsComponent;
  let fixture: ComponentFixture<HighlightIncorrectWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightIncorrectWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightIncorrectWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
