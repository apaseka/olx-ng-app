import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olx-ng-app';

  constructor(
    private location: Location
  ) {
  }

  goBack(): void {
    this.location.back();
  }
}
