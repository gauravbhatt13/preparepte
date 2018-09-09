import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMissingWordComponent } from './select-missing-word.component';

describe('SelectMissingWordComponent', () => {
  let component: SelectMissingWordComponent;
  let fixture: ComponentFixture<SelectMissingWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMissingWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMissingWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
