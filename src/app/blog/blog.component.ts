import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from "../shared/services/general.service";
import { PopupService } from "../shared/services/popup.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @ViewChild("subscribeForm")
  public submitForm: any;

  @ViewChild("searchForm")
  public searchForm: any;

  postsData$: any;

  public state: string;
  public model: Object = {};
  public search_model: Object = {};
  public action: boolean = false;

  constructor( 
    public data: GeneralService, 
    public popup: PopupService,  
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);

    this.getPosts();
  }

  checkModal($event) {
    $event === false ? this.action = false : this.action = true;
  }

  getPosts() {
    this.postsData$ = this.http.get('http://laravel/external/posts');
  }

  onSearch() {
    this.postsData$ = this.http.post("http://laravel/external/search-posts", this.search_model);
  }

  onSubmit() {
    this.http.post("http://laravel/external/subscribe", this.model).subscribe(
      response => {
        if(Object.keys(response)[0] === 'errors') {
          this.action = true;
          let message = Object.values(response)[0].toString().split(",").join("\n");
          this.popup.popupMessage(message);
        } else {
          this.action = true;
          let message = Object.values(response)[0].toString().split(",").join("\n");
          this.popup.popupMessage(message);
          this.submitForm.reset();
        }
      }
    );
  }

}
