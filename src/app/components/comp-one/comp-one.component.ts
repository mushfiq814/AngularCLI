import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {
  name:string;
  age:number;
  birthday;

  constructor() { }

  ngOnInit() {
    this.name =  'Mushfiq';
    this.age = 24;
    this.birthday = 'January 8';
  }

}
