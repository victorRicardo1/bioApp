import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioHeaderComponent } from './bio-header.component';

describe('BioHeaderComponent', () => {
  let component: BioHeaderComponent;
  let fixture: ComponentFixture<BioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
