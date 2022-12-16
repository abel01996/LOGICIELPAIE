import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtatCivilComponent } from './add-etat-civil.component';

describe('AddEtatCivilComponent', () => {
  let component: AddEtatCivilComponent;
  let fixture: ComponentFixture<AddEtatCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtatCivilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEtatCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
