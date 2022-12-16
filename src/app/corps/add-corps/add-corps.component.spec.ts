import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorpsComponent } from './add-corps.component';

describe('AddCorpsComponent', () => {
  let component: AddCorpsComponent;
  let fixture: ComponentFixture<AddCorpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCorpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
