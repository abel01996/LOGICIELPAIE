import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumeroCompteComponent } from './add-numero-compte.component';

describe('AddNumeroCompteComponent', () => {
  let component: AddNumeroCompteComponent;
  let fixture: ComponentFixture<AddNumeroCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNumeroCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNumeroCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
