import { Component, OnInit } from '@angular/core';
import { BrowserUtil } from 'src/app/utils/browser-util';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private browserUtil: BrowserUtil) { }

  ngOnInit() {
    this.browserUtil.resetScroll();
  }

}
