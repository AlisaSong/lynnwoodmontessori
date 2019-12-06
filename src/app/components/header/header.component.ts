import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  faBars = faBars;
  faWindowClose = faWindowClose;
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.menuOpen = false;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log("navigationend");
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
   }

  ngOnInit() {
  }

  onClickMenu(): boolean {
    this.menuOpen = !this.menuOpen;
    console.log("hamburger menu clicked and is " + this.menuOpen);
    return this.menuOpen;
  }

  onClickCloseMenu(): void {
    this.menuOpen = false;
  }
}
