import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeContratComponent } from './list-type-contrat.component';

describe('ListTypeContratComponent', () => {
  let component: ListTypeContratComponent;
  let fixture: ComponentFixture<ListTypeContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypeContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
