import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSituationFamilleComponent } from './add-situation-famille.component';

describe('AddSituationFamilleComponent', () => {
  let component: AddSituationFamilleComponent;
  let fixture: ComponentFixture<AddSituationFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSituationFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSituationFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
