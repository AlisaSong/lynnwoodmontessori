import { Component, OnInit } from '@angular/core';
import { BrowserUtil } from 'src/app/utils/browser-util';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  url: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19502.16684984935!2d-122.35095995244247!3d47.84594984131133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549004e69011cc33%3A0xebae3ea955ac2eb7!2s6009%20168th%20St%20SW%2C%20Lynnwood%2C%20WA%2098037!5e0!3m2!1sen!2sus!4v1575671759733!5m2!1sen!2sus";
  safeSrc: SafeResourceUrl;

  constructor(private browserUtil: BrowserUtil, public sanitizer: DomSanitizer) {
   }

  ngOnInit() {
    this.browserUtil.resetScroll();
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }
}
