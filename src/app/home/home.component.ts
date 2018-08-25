import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../shared/services/general.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

  public state: string;

  constructor(public data: GeneralService, private router: Router) {}

  ngOnInit() {
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);
  }

}
