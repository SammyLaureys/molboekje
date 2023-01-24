import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolboekjeComponent } from './molboekje.component';

describe('MolboekjeComponent', () => {
  let component: MolboekjeComponent;
  let fixture: ComponentFixture<MolboekjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolboekjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolboekjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
