import { Component, OnInit, HostListener } from '@angular/core';
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-side-panel',
  template: `
    <div class="side-panel" [class.opened]="opened">
      <em class="material-icons side-panel__close-button" (click)="onClose()">clear</em>
      <div class="side-panel__content">
        <ng-container [cdkPortalHost]="contentPortal"></ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
        height: 100vh;
        width: 30rem;
      }

      .opened {
        right: 0 !important;
      }

      .side-panel {
        padding: 2rem 0;
        background: white;
        transition: right 300ms ease-out;
        position: absolute;
        right: -30rem;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        flex-flow: column nowrap;
      }

      .side-panel__close-button {
        margin-right: 2rem;
        flex: 0 0;
        align-self: flex-end;
        cursor: pointer;
      }

      .side-panel__content {
        flex: 1;
        display: block;
      }
    `
  ]
})
export class SidePanelComponent implements OnInit {
  opened = false;
  onCloseFunc: () => void | null = null;
  canCloseFunc: () => boolean | null = null;

  contentPortal: Portal<any>;

  ngOnInit(): void {
    this.opened = true;
  }

  onClose() {
    if (!this.onCloseFunc) {
      return;
    }

    if (this.canCloseFunc && !this.canCloseFunc()) {
      return;
    }
    this.onCloseFunc();
  }

  animateAway() {
    this.opened = false;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander() {
    return this.canCloseFunc ? this.canCloseFunc() : true;
  }
}
