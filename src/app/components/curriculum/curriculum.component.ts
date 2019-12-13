import { Component, OnInit } from '@angular/core';
import { BrowserUtil } from 'src/app/utils/browser-util';
import { Router } from '@angular/router';
import { faSquare, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  faSquare = faSquare;
  faCircle = faCircle;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  constructor(private browserUtil: BrowserUtil, private router: Router) { }

  ngOnInit() {
    this.browserUtil.resetScroll();
  }

}
