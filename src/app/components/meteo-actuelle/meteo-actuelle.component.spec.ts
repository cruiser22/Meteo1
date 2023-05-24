import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoActuelleComponent } from './meteo-actuelle.component';

describe('MeteoActuelleComponent', () => {
  let component: MeteoActuelleComponent;
  let fixture: ComponentFixture<MeteoActuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoActuelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoActuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
