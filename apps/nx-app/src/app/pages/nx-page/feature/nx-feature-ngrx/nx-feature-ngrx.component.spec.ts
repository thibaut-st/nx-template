import {ComponentFixture, TestBed} from '@angular/core/testing'

import {NxFeatureNgrxComponent} from './nx-feature-ngrx.component'

describe('NxFeatureNgrxComponent', () => {
  let component: NxFeatureNgrxComponent
  let fixture: ComponentFixture<NxFeatureNgrxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxFeatureNgrxComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NxFeatureNgrxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
