import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqpoPresionComponent } from './eqpo-presion.component';

describe('EqpoPresionComponent', () => {
  let component: EqpoPresionComponent;
  let fixture: ComponentFixture<EqpoPresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EqpoPresionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EqpoPresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
