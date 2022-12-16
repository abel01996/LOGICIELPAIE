import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypePaieResComponent } from './list-type-paie-res.component';

describe('ListTypePaieResComponent', () => {
  let component: ListTypePaieResComponent;
  let fixture: ComponentFixture<ListTypePaieResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypePaieResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypePaieResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
