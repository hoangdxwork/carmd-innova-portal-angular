import { Component, Input } from '@angular/core';
import { SpinnerAlign, SpinnerColor, SpinnerType } from '../../../commons/consts/spinner.const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html'
})
export class LoadingSpinnerComponent {
  @Input() public type = SpinnerType.BorderMedium;
  @Input() public color = SpinnerColor.Black;
  @Input() public align = SpinnerAlign.Center;
}
