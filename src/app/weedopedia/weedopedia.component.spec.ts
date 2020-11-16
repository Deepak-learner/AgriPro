import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedopediaComponent } from './weedopedia.component';

describe('WeedopediaComponent', () => {
  let component: WeedopediaComponent;
  let fixture: ComponentFixture<WeedopediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeedopediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeedopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
