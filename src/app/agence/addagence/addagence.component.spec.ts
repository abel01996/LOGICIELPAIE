import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddagenceComponent } from './addagence.component';

describe('AddagenceComponent', () => {
  let component: AddagenceComponent;
  let fixture: ComponentFixture<AddagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
