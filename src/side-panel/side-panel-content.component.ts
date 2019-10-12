import { Component } from '@angular/core';

@Component({
  selector: 'app-side-panel-content',
  template: `
    <div class="side-panel__header">
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="side-panel__body">
      <ng-content select="[body]"></ng-content>
    </div>
    <div class="side-panel__footer">
      <ng-content select="[footer]"></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
      }

      .side-panel__header {
        padding: 0 2rem;
        padding-bottom: 2rem;
        flex: 0 0 auto;
        display: block;
        width: 100%;
        max-width: 100%;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.06), 0 3px 5px 0 rgba(0, 0, 0, 0.06);
      }

      .side-panel__body {
        padding: 2rem;
        display: block;
        flex: 1 1 0;
        width: 100%;
        max-width: 100%;
        overflow: auto;
      }

      .side-panel__footer {
        box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.1), 0 -4px 5px 0 rgba(0, 0, 0, 0.06), 0 -3px 5px 0 rgba(0, 0, 0, 0.06);
        padding: 0 2rem;
        padding-top: 2rem;
        flex: 0 0 auto;
        display: block;
        width: 100%;
        max-width: 100%;
      }
    `
  ]
})
export class SidePanelContentComponent {}
