import { Component, OnInit } from '@angular/core';
import { BrowserUtil } from 'src/app/utils/browser-util';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  faSquare = faSquare;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private browserUtil: BrowserUtil) { }

  ngOnInit() {
    this.browserUtil.resetScroll();
    console.log(window.innerWidth);
  }

}
