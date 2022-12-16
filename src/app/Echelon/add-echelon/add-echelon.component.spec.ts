import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEchelonComponent } from './add-echelon.component';

describe('AddEchelonComponent', () => {
  let component: AddEchelonComponent;
  let fixture: ComponentFixture<AddEchelonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEchelonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEchelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
