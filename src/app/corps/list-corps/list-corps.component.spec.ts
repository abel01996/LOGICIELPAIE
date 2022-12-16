import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCorpsComponent } from './list-corps.component';

describe('ListCorpsComponent', () => {
  let component: ListCorpsComponent;
  let fixture: ComponentFixture<ListCorpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCorpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCorpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
