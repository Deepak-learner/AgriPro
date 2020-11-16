import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivepredictComponent } from './livepredict.component';

describe('LivepredictComponent', () => {
  let component: LivepredictComponent;
  let fixture: ComponentFixture<LivepredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivepredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivepredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
