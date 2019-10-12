import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, Portal, TemplatePortal, ComponentType } from '@angular/cdk/portal';
import { SidePanelComponent } from './side-panel.component';

@Injectable()
export class SidePanelService {
  private ref: OverlayRef;
  private sidePanelRef: ComponentRef<SidePanelComponent>;

  constructor(private overlay: Overlay) {}

  open(templateOrComponent: TemplatePortal<any> | ComponentType<any>, canClose?: () => boolean) {
    if (this.ref && this.ref.hasAttached()) {
      this.cleanup();
    }

    this.ref = this.overlay.create({
      disposeOnNavigation: true,
      hasBackdrop: true,
      height: '100vh',
      width: '100vw',
      backdropClass: 'side-panel-backdrop',
      panelClass: 'side-panel-container',
      positionStrategy: this.overlay.position().global(),
      scrollStrategy: this.overlay.scrollStrategies.block()
    });
    const sidePanelPortal = new ComponentPortal(SidePanelComponent);
    this.sidePanelRef = this.ref.attach(sidePanelPortal);
    const sidePanelContentPortal =
      templateOrComponent instanceof TemplatePortal ? templateOrComponent : new ComponentPortal(templateOrComponent);
    this.sidePanelRef.instance.contentPortal = sidePanelContentPortal;

    // pass through function to close and canClose
    this.sidePanelRef.instance.onCloseFunc = this.close.bind(this);
    this.sidePanelRef.instance.canCloseFunc = canClose || null;
  }

  close() {
    this.cleanup();
  }

  private async cleanup() {
    await this.sidePanelRef.instance.animateAway();
    this.ref.detach();
    this.ref.dispose();
  }
}
