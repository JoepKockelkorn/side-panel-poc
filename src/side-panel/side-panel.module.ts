import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material';

import { SidePanelComponent } from './side-panel.component';
import { SidePanelContentComponent } from './side-panel-content.component';
import { SidePanelService } from './side-panel.service';

@NgModule({
  declarations: [SidePanelComponent, SidePanelContentComponent],
  entryComponents: [SidePanelComponent],
  exports: [SidePanelContentComponent, SidePanelComponent],
  imports: [CommonModule, MatButtonModule, OverlayModule, PortalModule],
  providers: [SidePanelService]
})
export class SidePanelModule {}
