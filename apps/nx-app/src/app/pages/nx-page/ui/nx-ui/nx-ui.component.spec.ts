import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxUiComponent } from './nx-ui.component';

describe('NxUiComponent', () => {
  let component: NxUiComponent;
  let fixture: ComponentFixture<NxUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
