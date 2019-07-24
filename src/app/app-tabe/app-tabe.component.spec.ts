import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTabeComponent } from './app-tabe.component';

describe('AppTabeComponent', () => {
  let component: AppTabeComponent;
  let fixture: ComponentFixture<AppTabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
