import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningFillBlanksComponent } from './listening-fill-blanks.component';

describe('ListeningFillBlanksComponent', () => {
  let component: ListeningFillBlanksComponent;
  let fixture: ComponentFixture<ListeningFillBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningFillBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningFillBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
