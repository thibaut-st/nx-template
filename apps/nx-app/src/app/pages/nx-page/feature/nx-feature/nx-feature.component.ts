import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NxServiceService} from '../../data-access/services/nx-service.service'
import {NxUiComponent} from '../../ui/nx-ui/nx-ui.component'
import {NxLibComponent} from 'nx-lib-import-path'
import {NxUiDataComponent} from '../../ui/nx-ui-data/nx-ui-data.component'
import {LetModule} from '@ngrx/component'

@Component({
  selector: 'nx-template-nx-feature',
  standalone: true,
  imports: [CommonModule, NxUiComponent, NxLibComponent, NxUiDataComponent, LetModule],
  templateUrl: './nx-feature.component.html',
  styleUrls: ['./nx-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxFeatureComponent {
  constructor(protected nxServiceService: NxServiceService) {
  }

  updateNumber(newNumber: number) {
    this.nxServiceService.subjectNumber.next(newNumber)
  }
}
