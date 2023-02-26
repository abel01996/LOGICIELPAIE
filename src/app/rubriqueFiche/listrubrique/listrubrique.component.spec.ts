import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrubriqueComponent } from './listrubrique.component';

describe('ListrubriqueComponent', () => {
  let component: ListrubriqueComponent;
  let fixture: ComponentFixture<ListrubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrubriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
