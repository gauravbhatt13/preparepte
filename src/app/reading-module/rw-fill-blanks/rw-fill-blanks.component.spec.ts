import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwFillBlanksComponent } from './rw-fill-blanks.component';

describe('RwFillBlanksComponent', () => {
  let component: RwFillBlanksComponent;
  let fixture: ComponentFixture<RwFillBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwFillBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwFillBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
