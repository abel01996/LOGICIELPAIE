import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHierarTypeComponent } from './add-hierar-type.component';

describe('AddHierarTypeComponent', () => {
  let component: AddHierarTypeComponent;
  let fixture: ComponentFixture<AddHierarTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHierarTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHierarTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
