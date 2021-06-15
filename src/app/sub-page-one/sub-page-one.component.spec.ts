import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageOneComponent } from './sub-page-one.component';

describe('SubPageOneComponent', () => {
  let component: SubPageOneComponent;
  let fixture: ComponentFixture<SubPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
