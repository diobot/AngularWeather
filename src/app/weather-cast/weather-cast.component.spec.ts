import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCastComponent } from './weather-cast.component';

describe('WeatherCastComponent', () => {
  let component: WeatherCastComponent;
  let fixture: ComponentFixture<WeatherCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
