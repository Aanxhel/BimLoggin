import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggViewComponent } from './logg-view.component';

describe('LoggViewComponent', () => {
  let component: LoggViewComponent;
  let fixture: ComponentFixture<LoggViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
