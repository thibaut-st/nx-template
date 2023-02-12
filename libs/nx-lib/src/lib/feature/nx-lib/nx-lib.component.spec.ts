import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxLibComponent } from './nx-lib.component';

describe('NxLibComponent', () => {
  let component: NxLibComponent;
  let fixture: ComponentFixture<NxLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
