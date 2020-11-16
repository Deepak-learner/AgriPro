import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddweedComponent } from './addweed.component';

describe('AddweedComponent', () => {
  let component: AddweedComponent;
  let fixture: ComponentFixture<AddweedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddweedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddweedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
