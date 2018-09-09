import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetellLectureComponent } from './retell-lecture.component';

describe('RetellLectureComponent', () => {
  let component: RetellLectureComponent;
  let fixture: ComponentFixture<RetellLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetellLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetellLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
