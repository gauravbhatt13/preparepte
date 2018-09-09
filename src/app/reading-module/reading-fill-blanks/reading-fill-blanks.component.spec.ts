import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingFillBlanksComponent } from './reading-fill-blanks.component';

describe('ReadingFillBlanksComponent', () => {
  let component: ReadingFillBlanksComponent;
  let fixture: ComponentFixture<ReadingFillBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingFillBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingFillBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
