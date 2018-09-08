import { Component, OnInit, HostListener, AfterViewChecked } from '@angular/core';
import { GeneralService } from "../../shared/services/general.service";
import { HighlightService } from '../../shared/services/highlight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewChecked {

  public state: string;
  public media_xs: boolean = false;
  public highlighted: boolean = false;
  public current_post: Array<Object> = [];
  public post_comments: Array<Object> = [];

  public postsData$: any;
  public commentsData$: any;

  constructor( 
    public data: GeneralService, 
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private highlightService: HighlightService ) { }

  ngOnInit() {
    this.data.current_post.subscribe(state => this.current_post = state);
    this.data.current_comments.subscribe(state => this.post_comments = state);
    this.getActivePost();

    this.checkWindowSize();
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);
  }

  ngAfterViewChecked() {
    this.highlightSyntax();
  }

  getActivePost() {
    this.postsData$ = this.current_post;
    this.commentsData$ = this.post_comments;
  }

  highlightSyntax() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  @HostListener('window:resize')
  onResize() {
      this.checkWindowSize();
  }

  checkWindowSize () {
      const mw = window.matchMedia("(max-width: 767px)");
      mw.matches ? (this.media_xs = true) : (this.media_xs = false);
  }

}
