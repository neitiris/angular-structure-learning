import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  public loaded = false;

  constructor() { }

  public ngOnInit() {
  }

  public ngAfterViewInit () {
    setTimeout(() => {
      this.loaded = true;
      console.log('ngAfterViewInit', this.loaded);
    }, 100);
  }

}
