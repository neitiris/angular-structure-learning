import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unknownpage',
  template: `
    <div>
      <h1>404: page missing</h1>
    </div>
  `
})
export class UnknownpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
