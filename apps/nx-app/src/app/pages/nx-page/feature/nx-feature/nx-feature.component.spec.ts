import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxFeatureComponent } from './nx-feature.component';

describe('NxFeatureComponent', () => {
  let component: NxFeatureComponent;
  let fixture: ComponentFixture<NxFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
