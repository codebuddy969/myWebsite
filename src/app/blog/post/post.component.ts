import { Component, OnInit, HostListener, AfterViewChecked, ViewChild } from '@angular/core';
import { GeneralService } from "../../shared/services/general.service";
import { HighlightService } from '../../shared/services/highlight.service';
import { PopupService } from "../../shared/services/popup.service";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewChecked {

  @ViewChild("commentsForm")
  public commentsForm: any;

  public state: string;
  public media_xs: boolean = false;
  public highlighted: boolean = false;
  public send_comment: Object = {};

  public action: boolean = false;

  public current_post: Array<Object> = [];
  public post_comments: Array<Object> = [];
  public sidebar_posts: Array<Object> = [];

  public postsData$: any;


  constructor( 
    public data: GeneralService, 
    private http: HttpClient,
    public popup: PopupService,
    private highlightService: HighlightService ) { }

  ngOnInit() {
    this.data.current_post.subscribe(state => this.current_post = state);
    this.data.current_comments.subscribe(state => this.post_comments = state);
    this.data.current_sidebar_posts.subscribe(state => this.sidebar_posts = state);
    this.postsData$ = this.current_post;

    this.checkWindowSize();
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);

  }

  ngAfterViewChecked() {
    this.highlightSyntax();
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

  checkModal($event) {
    $event === false ? this.action = false : this.action = true;
  }

  onSubmit() {

    const new_comment = Object.assign({ approved: 0, post_id: this.postsData$[0].id}, this.send_comment);

    this.http.post(`${this.data.SITE_PATH}/external/store-comments`, new_comment).subscribe(
      response => {
        if(Object.keys(response)[0] === 'errors') {
          this.action = true;
          let message = Object.values(response)[0].toString().split(",").join("\n");
          this.popup.popupMessage(message);
        } else {
          this.action = true;
          let message = Object.values(response)[0].toString().split(",").join("\n");
          this.popup.popupMessage(message);
          this.commentsForm.reset();
        }
      }
    );
  }

}
