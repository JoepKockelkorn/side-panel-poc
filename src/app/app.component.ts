import { Component, ViewChild } from '@angular/core';
import { SidePanelService } from '../side-panel/side-panel.service';
import { SidePanelContentComponent } from '../side-panel/side-panel-content.component';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { OtherSidePanelComponent } from './other-side-panel-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomInt: number;
  @ViewChild('myTemplate', { static: true }) myTemplate: TemplatePortal<SidePanelContentComponent>;

  canClose = () => (this.randomInt > 1 ? true : confirm('Are you sure you want to close?'));

  constructor(private sidePanelService: SidePanelService) {}

  openTemplate() {
    this.randomInt = this.randomIntFromInterval(1, 2);
    this.sidePanelService.open(this.myTemplate, this.canClose.bind(this));
  }

  openComponent() {
    this.randomInt = this.randomIntFromInterval(1, 2);
    this.sidePanelService.open(OtherSidePanelComponent, this.canClose.bind(this));
  }

  onClose() {
    if (this.canClose()) {
      this.sidePanelService.close();
    }
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
