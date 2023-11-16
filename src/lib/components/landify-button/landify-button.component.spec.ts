/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandifyButtonComponent } from './landify-button.component';

describe('LandifyButtonComponent', () => {
  let component: LandifyButtonComponent;
  let fixture: ComponentFixture<LandifyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandifyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandifyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
