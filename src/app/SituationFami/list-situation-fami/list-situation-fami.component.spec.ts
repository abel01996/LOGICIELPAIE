import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSituationFamiComponent } from './list-situation-fami.component';

describe('ListSituationFamiComponent', () => {
  let component: ListSituationFamiComponent;
  let fixture: ComponentFixture<ListSituationFamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSituationFamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSituationFamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
