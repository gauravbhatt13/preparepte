import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderParagraphsComponent } from './reorder-paragraphs.component';

describe('ReorderParagraphsComponent', () => {
  let component: ReorderParagraphsComponent;
  let fixture: ComponentFixture<ReorderParagraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderParagraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderParagraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
