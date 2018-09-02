import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {
  trigger,
  animate,
  transition,
  style,
  query
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("routeAnimation", [
      transition("* => *", [
        query(":enter", [style({ opacity: 0, zIndex: "4" })], {
          optional: true
        }),
        query(":leave", [style({}), animate("0.5s", style({}))], {
          optional: true
        }),
        query(
          ":enter",
          [
            style({ backgroundColor: "#fff" }),
            animate("1.0s", style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  public isIE: boolean = false;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit() {
      this.detectIE();
  }

  animationStarted() {
      var interval = setInterval(function(){ 
        window.pageYOffset <= 40 ? clearInterval(interval) : window.scrollBy(0,-40);
       }, 1);
  }
    
  detectIE() {
      let ua = window.navigator.userAgent;

      let msie = ua.indexOf('MSIE ');
      let trident = ua.indexOf('Trident/');
      let edge = ua.indexOf('Edge/');
      
      if (msie > 0 || trident > 0 || edge > 0) {
          this.isIE = true;
      }
      
      return false; // other browsers
  }

}