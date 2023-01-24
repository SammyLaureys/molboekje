import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotitiesComponent } from './notities.component';

describe('NotitiesComponent', () => {
  let component: NotitiesComponent;
  let fixture: ComponentFixture<NotitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
