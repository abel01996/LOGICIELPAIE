import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichePaieComponent } from './list-fiche-paie.component';

describe('ListFichePaieComponent', () => {
  let component: ListFichePaieComponent;
  let fixture: ComponentFixture<ListFichePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFichePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
