import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyimageComponent } from './lazyimage.component';

describe('LazyimageComponent', () => {
  let component: LazyimageComponent;
  let fixture: ComponentFixture<LazyimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyimageComponent]
    });
    fixture = TestBed.createComponent(LazyimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
