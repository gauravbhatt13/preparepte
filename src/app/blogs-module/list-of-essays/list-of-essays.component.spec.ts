import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEssaysComponent } from './list-of-essays.component';

describe('ListOfEssaysComponent', () => {
  let component: ListOfEssaysComponent;
  let fixture: ComponentFixture<ListOfEssaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfEssaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEssaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
