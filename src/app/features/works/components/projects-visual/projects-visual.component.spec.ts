import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsVisualComponent } from './projects-visual.component';

describe('ProjectsVisualComponent', () => {
  let component: ProjectsVisualComponent;
  let fixture: ComponentFixture<ProjectsVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
