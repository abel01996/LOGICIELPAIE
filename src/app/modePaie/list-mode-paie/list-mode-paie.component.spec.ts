import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModePaieComponent } from './list-mode-paie.component';

describe('ListModePaieComponent', () => {
  let component: ListModePaieComponent;
  let fixture: ComponentFixture<ListModePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListModePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListModePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
