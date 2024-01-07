import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDesktopComponent } from './cv-desktop.component';

describe('CvDesktopComponent', () => {
  let component: CvDesktopComponent;
  let fixture: ComponentFixture<CvDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
