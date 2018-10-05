import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleEssaysComponent } from './sample-essays.component';

describe('SampleEssaysComponent', () => {
  let component: SampleEssaysComponent;
  let fixture: ComponentFixture<SampleEssaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleEssaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleEssaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
