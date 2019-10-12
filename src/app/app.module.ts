import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { SidePanelModule } from '../side-panel/side-panel.module';
import { AppComponent } from './app.component';
import { PortalModule } from '@angular/cdk/portal';
import { OtherSidePanelComponent } from './other-side-panel-content.component';

@NgModule({
  declarations: [AppComponent, OtherSidePanelComponent],
  entryComponents: [OtherSidePanelComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SidePanelModule, MatButtonModule, PortalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
