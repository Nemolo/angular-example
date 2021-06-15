import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleWayComponent } from './double-way.component';

describe('DoubleWayComponent', () => {
  let component: DoubleWayComponent;
  let fixture: ComponentFixture<DoubleWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
