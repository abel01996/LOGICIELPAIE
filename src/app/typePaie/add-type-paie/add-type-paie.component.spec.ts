import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypePaieComponent } from './add-type-paie.component';

describe('AddTypePaieComponent', () => {
  let component: AddTypePaieComponent;
  let fixture: ComponentFixture<AddTypePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
