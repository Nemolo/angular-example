import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageTwoComponent } from './sub-page-two.component';

describe('SubPageTwoComponent', () => {
  let component: SubPageTwoComponent;
  let fixture: ComponentFixture<SubPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
