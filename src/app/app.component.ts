import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dairy-data';
  urlPath: string;

  constructor(location: Location, private router: Router, public auth: AuthService) {
    router.events.subscribe((val) => {
      // see also
      if (location.path() === '/about' && window.innerWidth > 496) {
        this.urlPath = 'url(../assets/about_background.webp)';
      }
    });
  }
}
