import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldNgifComponent } from './hello-world-ngif.component';

describe('HelloWorldNgifComponent', () => {
  let component: HelloWorldNgifComponent;
  let fixture: ComponentFixture<HelloWorldNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
