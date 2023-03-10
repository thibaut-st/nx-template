import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NxDataEntity} from '../../data-access/models/nx-data.models'

@Component({
  selector: 'nx-template-nx-ui-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-ui-data.component.html',
  styleUrls: ['./nx-ui-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxUiDataComponent {
  @Input() allNxData!: NxDataEntity[]
  @Input() selectedNxData?: NxDataEntity

  @Output() selectedNxId: EventEmitter<string | number> = new EventEmitter<string | number>()
  @Output() deletedNxId: EventEmitter<string | number> = new EventEmitter<string | number>()

  selectNxData(id: string | number) {
    this.selectedNxId.emit(id)
  }

  deleteNxData(id: string | number) {
    this.deletedNxId.emit(id)
  }
}
