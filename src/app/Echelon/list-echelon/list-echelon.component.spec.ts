import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEchelonComponent } from './list-echelon.component';

describe('ListEchelonComponent', () => {
  let component: ListEchelonComponent;
  let fixture: ComponentFixture<ListEchelonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEchelonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEchelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
