import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  public loaded = false;

  public dataProfessional = [
    { title: 'UI/UX', percent: 70},
    { title: 'Angular', percent: 50},
    { title: 'React', percent: 60},
    { title: 'JavaScript', percent: 70}
  ];

  public dataPersonal = [
    { title: 'Punctual', percent: 95},
    { title: 'Leadership', percent: 50},
    { title: 'Communicative', percent: 70},
    { title: 'Analytical Skill', percent: 55}
  ];

  public dataLanguage = [
    { title: 'Ukrainian', percent: 95},
    { title: 'Russian', percent: 90},
    { title: 'English', percent: 70}
    ];

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
