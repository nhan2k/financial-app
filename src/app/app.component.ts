import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroAcademicCap } from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideIcons({ heroAcademicCap })]
})
export class AppComponent {
  title = 'financial-app';
}
