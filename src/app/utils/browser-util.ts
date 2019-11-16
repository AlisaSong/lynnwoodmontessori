import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserUtil {
  public resetScroll() {
    window.scrollTo(0, 0);
  }
}
