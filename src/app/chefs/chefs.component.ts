import { Component, OnInit } from '@angular/core';
import chefs  from "../mocks/chefs";

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
  ourChefs = chefs;

  constructor() { }

  ngOnInit() {
  }

}
