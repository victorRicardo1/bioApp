import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBioComponent } from './main-bio.component';

describe('MainBioComponent', () => {
  let component: MainBioComponent;
  let fixture: ComponentFixture<MainBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
