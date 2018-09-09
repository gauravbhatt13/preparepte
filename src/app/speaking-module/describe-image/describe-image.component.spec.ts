import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeImageComponent } from './describe-image.component';

describe('DescribeImageComponent', () => {
  let component: DescribeImageComponent;
  let fixture: ComponentFixture<DescribeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescribeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
