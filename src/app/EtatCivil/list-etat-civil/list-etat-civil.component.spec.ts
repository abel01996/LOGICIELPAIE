import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtatCivilComponent } from './list-etat-civil.component';

describe('ListEtatCivilComponent', () => {
  let component: ListEtatCivilComponent;
  let fixture: ComponentFixture<ListEtatCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtatCivilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEtatCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
