import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NxDataFacade} from '../../data-access/facades/nx-data.facade'
import {LetModule} from '@ngrx/component'
import {NxUiDataComponent} from '../../ui/nx-ui-data/nx-ui-data.component'
import {NxDataEntity} from '../../data-access/models/nx-data.models'

@Component({
  selector: 'nx-template-nx-feature-ngrx',
  standalone: true,
  imports: [CommonModule, LetModule, NxUiDataComponent],
  templateUrl: './nx-feature-ngrx.component.html',
  styleUrls: ['./nx-feature-ngrx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxFeatureNgrxComponent {
  constructor(protected nxDataFacade: NxDataFacade) {
  }

  loadNxData(): void {
    this.nxDataFacade.init()
  }

  addNxData() {
    const newNxData: NxDataEntity = {id: 15, name: 'test 15'}
    this.nxDataFacade.addNxData(newNxData)
  }
}
