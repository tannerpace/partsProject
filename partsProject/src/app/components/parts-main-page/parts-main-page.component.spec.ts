import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsMainPageComponent } from './parts-main-page.component';

describe('PartsMainPageComponent', () => {
  let component: PartsMainPageComponent;
  let fixture: ComponentFixture<PartsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
