import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHierartypeComponent } from './list-hierartype.component';

describe('ListHierartypeComponent', () => {
  let component: ListHierartypeComponent;
  let fixture: ComponentFixture<ListHierartypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHierartypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHierartypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
