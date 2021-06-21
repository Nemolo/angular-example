import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarElemComponent } from './navbar-elem.component';

describe('NavbarElemComponent', () => {
  let component: NavbarElemComponent;
  let fixture: ComponentFixture<NavbarElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
