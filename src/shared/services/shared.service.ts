import { Injectable, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class SharedService implements OnInit {
  public burger_state: string;
  public nav_location: boolean;
  public nav_scroll_state: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  toggleBurgerState() {
    this.burger_state === "active"
      ? (this.burger_state = "")
      : (this.burger_state = "active");
  }

  resizeMenuLocation() {
    let resizeTimeout;
    const rootScope = this;

    window.addEventListener("resize", resizeThrottler, false);

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          move_menu();
        }, 200);
      }
    }

    function move_menu() {
      const mw = window.matchMedia("(max-width: 575px)");
      mw.matches
        ? (rootScope.nav_location = true)
        : (rootScope.nav_location = false);
    }

    move_menu();
  }

  navigationStateOnScroll() {
    const rootScope = this;

    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        rootScope.nav_scroll_state = "active";
      } else if (window.scrollY <= 50) {
        rootScope.nav_scroll_state = "";
      }
    });
  }

  routeDelay() {
    var rootScope = this;
    setTimeout(function(){
      rootScope.router.navigateByUrl('/contact');
    }, 1500);
  }

}
