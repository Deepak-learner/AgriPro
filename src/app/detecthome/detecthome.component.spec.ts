import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetecthomeComponent } from './detecthome.component';

describe('DetecthomeComponent', () => {
  let component: DetecthomeComponent;
  let fixture: ComponentFixture<DetecthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetecthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
