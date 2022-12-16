import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypePaieComponent } from './list-type-paie.component';

describe('ListTypePaieComponent', () => {
  let component: ListTypePaieComponent;
  let fixture: ComponentFixture<ListTypePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
