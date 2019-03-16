import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoreComponent } from './app-core.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import {RouterTestingModule} from '@angular/router/testing';


describe('AppCoreComponent', () => {
  let component: AppCoreComponent;
  let fixture: ComponentFixture<AppCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCoreComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
