import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../shared/services/general.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  public state: string;

  constructor( public data: GeneralService ) { }

  ngOnInit() {
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);
  }
}
