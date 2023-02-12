import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-template-nx-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-lib.component.html',
  styleUrls: ['./nx-lib.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxLibComponent {}
