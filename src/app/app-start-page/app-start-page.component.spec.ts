import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStartPageComponent } from './app-start-page.component';

describe('AppStartPageComponent', () => {
  let component: AppStartPageComponent;
  let fixture: ComponentFixture<AppStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
