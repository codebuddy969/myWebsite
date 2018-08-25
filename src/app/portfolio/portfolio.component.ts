import { Component, OnInit, Renderer2 } from '@angular/core';
import { GeneralService } from "../shared/services/general.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioData$: any;
  public preloader: boolean = true;
  public state: string;

  constructor( public data: GeneralService, private renderer: Renderer2, private http: HttpClient ) {}

  ngOnInit() {
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.renderer.addClass(document.body, 'body-portfolio');

    this.portfolioData$ = this.http.get('http://askcoder.tech/external/portfolio');
    this.portfolioData$.subscribe(() => {
      this.preloader = false;
    });

    this.data.current_state.subscribe(state => this.state = state);
  }

  ngOnDestroy() {
    this.preloader = true;
    this.renderer.removeClass(document.body, 'body-portfolio');
  }

}
