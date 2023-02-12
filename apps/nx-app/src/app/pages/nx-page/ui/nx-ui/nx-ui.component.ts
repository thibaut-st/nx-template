import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'nx-template-nx-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-ui.component.html',
  styleUrls: ['./nx-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxUiComponent {
  @Input() number!: number
  @Output() updateNumber = new EventEmitter<number>()

  increase(number: number): void {
    this.updateNumber.emit(number + 1)
  }

  decrease(number: number): void {
    console.log("number - 1", number - 1)
    this.updateNumber.emit(number - 1)
  }
}
