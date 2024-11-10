import { Component, Input } from '@angular/core';
import { ContentHeader } from '../../models/interfaces/common';

@Component({
  selector: 'app-content-header',
  standalone: true,
  imports: [],
  templateUrl: './content-header.component.html',
  styleUrl: './content-header.component.scss',
})
export class ContentHeaderComponent {
  @Input() content?: ContentHeader;
}
