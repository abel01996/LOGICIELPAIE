import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNumCompteComponent } from './list-num-compte.component';

describe('ListNumCompteComponent', () => {
  let component: ListNumCompteComponent;
  let fixture: ComponentFixture<ListNumCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNumCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNumCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
