import {ComponentFixture, TestBed} from '@angular/core/testing'

import {NxUiDataComponent} from './nx-ui-data.component'

describe('NxUiDataComponent', () => {
  let component: NxUiDataComponent
  let fixture: ComponentFixture<NxUiDataComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxUiDataComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NxUiDataComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
