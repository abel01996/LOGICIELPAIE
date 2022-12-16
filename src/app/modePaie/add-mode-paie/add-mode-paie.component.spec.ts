import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModePaieComponent } from './add-mode-paie.component';

describe('AddModePaieComponent', () => {
  let component: AddModePaieComponent;
  let fixture: ComponentFixture<AddModePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
