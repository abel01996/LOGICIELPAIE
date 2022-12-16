import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypePaieReferenceComponent } from './add-type-paie-reference.component';

describe('AddTypePaieReferenceComponent', () => {
  let component: AddTypePaieReferenceComponent;
  let fixture: ComponentFixture<AddTypePaieReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypePaieReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypePaieReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
