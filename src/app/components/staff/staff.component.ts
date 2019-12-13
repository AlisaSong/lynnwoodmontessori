import { Component, OnInit } from '@angular/core';
import { BrowserUtil } from 'src/app/utils/browser-util';
import { faSquare, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  faSquare = faSquare;
  faCircle = faCircle;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private browserUtil: BrowserUtil) { }

  ngOnInit() {
    this.browserUtil.resetScroll();
  }

}
