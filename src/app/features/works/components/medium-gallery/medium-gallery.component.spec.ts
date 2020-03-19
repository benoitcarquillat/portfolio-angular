import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumGalleryComponent } from './medium-gallery.component';

describe('MediumGalleryComponent', () => {
  let component: MediumGalleryComponent;
  let fixture: ComponentFixture<MediumGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
