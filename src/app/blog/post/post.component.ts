import { Component, OnInit, HostListener } from '@angular/core';
import { GeneralService } from "../../shared/services/general.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public state: string;
  public media_xs: boolean = false;

  constructor( public data: GeneralService ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.checkWindowSize();
  }

  checkWindowSize () {
      const mw = window.matchMedia("(max-width: 767px)");
      mw.matches ? (this.media_xs = true) : (this.media_xs = false);
  }

  ngOnInit() {
    this.checkWindowSize();
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);
  }

}
