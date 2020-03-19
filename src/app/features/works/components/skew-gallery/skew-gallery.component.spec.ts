import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkewGalleryComponent } from './skew-gallery.component';

describe('SkewGalleryComponent', () => {
  let component: SkewGalleryComponent;
  let fixture: ComponentFixture<SkewGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkewGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkewGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
