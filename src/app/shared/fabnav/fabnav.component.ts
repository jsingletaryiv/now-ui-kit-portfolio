import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-fabnav',
  templateUrl: './fabnav.component.html',
  styleUrls: ['./fabnav.component.scss']
})
export class FabnavComponent implements OnInit {

  constructor(public location: Location, private element: ElementRef) { }

  ngOnInit() {
  }

}
