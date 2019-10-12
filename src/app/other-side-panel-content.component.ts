import { Component } from '@angular/core';
import { SidePanelService } from '../side-panel/side-panel.service';

@Component({
  selector: 'app-other-side-panel-content',
  template: `
    <app-side-panel-content>
      <ng-container header>
        <h1>Test!!</h1>
      </ng-container>

      <ng-container body>
        <div style="height: 1000px;">As a component!</div>
      </ng-container>

      <ng-container footer>
        <div class="buttons">
          <button mat-button (click)="onClose()">Close</button>
          <button mat-raised-button color="primary">Save</button>
        </div>
      </ng-container>
    </app-side-panel-content>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class OtherSidePanelComponent {
  constructor(private sidePanelService: SidePanelService) {}

  onClose() {
    this.sidePanelService.close();
  }
}
