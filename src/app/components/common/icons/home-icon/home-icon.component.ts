import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-icon',
  standalone: true,
  imports: [NgIf],
  template: `
    <ng-container *ngIf="isActive; else isNotActive">
      <svg
        aria-label="Home"
        class="text-black-dark dark:text-white fill-current"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24">
        <path
          d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
        ></path>
      </svg>
    </ng-container>
    <ng-template #isNotActive>
      <svg
        aria-label="Home"
        class="text-black-dark dark:text-white fill-current"
        width="24"
        height="24"
        role="img"
        viewBox="0 0 24 24">
        <path
          d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    </ng-template>
  `,
})
export class HomeIconComponent {
  @Input() isActive: boolean = false;
}
