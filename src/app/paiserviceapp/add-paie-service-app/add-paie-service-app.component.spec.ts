import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaieServiceAppComponent } from './add-paie-service-app.component';

describe('AddPaieServiceAppComponent', () => {
  let component: AddPaieServiceAppComponent;
  let fixture: ComponentFixture<AddPaieServiceAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaieServiceAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaieServiceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
