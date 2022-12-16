import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaieServiceAppComponent } from './list-paie-service-app.component';

describe('ListPaieServiceAppComponent', () => {
  let component: ListPaieServiceAppComponent;
  let fixture: ComponentFixture<ListPaieServiceAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaieServiceAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaieServiceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
