import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../home/home.component.css'] /* About and home using same styling */
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
