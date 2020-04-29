import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFooterComponent } from './work-footer.component';

describe('WorkFooterComponent', () => {
  let component: WorkFooterComponent;
  let fixture: ComponentFixture<WorkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
