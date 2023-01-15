import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFichePaieComponent } from './add-fiche-paie.component';

describe('AddFichePaieComponent', () => {
  let component: AddFichePaieComponent;
  let fixture: ComponentFixture<AddFichePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFichePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
