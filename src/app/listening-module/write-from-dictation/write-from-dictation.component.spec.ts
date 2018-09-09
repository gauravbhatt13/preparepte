import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteFromDictationComponent } from './write-from-dictation.component';

describe('WriteFromDictationComponent', () => {
  let component: WriteFromDictationComponent;
  let fixture: ComponentFixture<WriteFromDictationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteFromDictationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteFromDictationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
