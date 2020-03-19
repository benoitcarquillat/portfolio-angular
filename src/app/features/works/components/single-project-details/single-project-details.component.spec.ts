import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectDetailsComponent } from './single-project-details.component';

describe('SingleProjectDetailsComponent', () => {
  let component: SingleProjectDetailsComponent;
  let fixture: ComponentFixture<SingleProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
