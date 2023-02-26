import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFichePaieComponent } from './detail-fiche-paie.component';

describe('DetailFichePaieComponent', () => {
  let component: DetailFichePaieComponent;
  let fixture: ComponentFixture<DetailFichePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFichePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
