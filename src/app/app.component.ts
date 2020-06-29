import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dairy-data';
  urlPath = 'url(../assets/standard_background.webp)';

  constructor(location: Location, private router: Router) {
    router.events.subscribe((val) => {
      // see also
      if (location.path() === '/about') {
        this.urlPath = 'url(../assets/about_background.webp)';
      }
    });
  }
}
