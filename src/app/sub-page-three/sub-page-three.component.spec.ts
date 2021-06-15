import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageThreeComponent } from './sub-page-three.component';

describe('SubPageThreeComponent', () => {
  let component: SubPageThreeComponent;
  let fixture: ComponentFixture<SubPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
