import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatutComponent } from './add-statut.component';

describe('AddStatutComponent', () => {
  let component: AddStatutComponent;
  let fixture: ComponentFixture<AddStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStatutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
