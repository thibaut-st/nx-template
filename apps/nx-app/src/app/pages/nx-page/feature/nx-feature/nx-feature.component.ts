import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NxServiceService } from '../../data-access/nx-service.service'
import { NxUiComponent } from '../../ui/nx-ui/nx-ui.component';
import { StoreModule } from '@ngrx/store';
import * as fromNumbers from '../../data-access/reducers/numbers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NumbersEffects } from '../../data-access/effects/numbers.effects'

@Component({
  selector: 'nx-template-nx-feature',
  standalone: true,
  imports: [CommonModule, NxUiComponent],
  templateUrl: './nx-feature.component.html',
  styleUrls: ['./nx-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxFeatureComponent {
  constructor(protected nxServiceService: NxServiceService) {
  }

  updateNumber(newNumber: number) {
    console.log("newNumber", newNumber)
    this.nxServiceService.subjectNumber.next(newNumber)
  }
}
