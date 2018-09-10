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
  sidebarData$: any;

  public p: number = 1;
  public state: string;
  public model: any = {};
  public search_model: any = {};
  public action: boolean = false;
  public posts_exist: boolean = false;

  constructor( 
    public data: GeneralService, 
    public popup: PopupService,  
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);

    this.getPosts();
    this.getCategories();
  }

  checkModal($event: any): void {
    $event === false ? this.action = false : this.action = true;
  }

  getPosts(): void {
    this.postsData$ = this.http.get(`${this.data.SITE_PATH}/external/posts`);
  }

  getCategories(): void {
    this.sidebarData$ = this.http.get(`${this.data.SITE_PATH}/external/sidebar-posts`);
  }

  onSearch(): void {
    this.postsData$ = this.http.post(`${this.data.SITE_PATH}/external/search-posts`, this.search_model);
  }

  filterByCategory($category): void {
    let category = {search: $category};
    this.postsData$ = this.http.post(`${this.data.SITE_PATH}/external/search-posts`, category);
  }

  onSubmit(): void {
    this.http.post(`${this.data.SITE_PATH}/external/subscribe`, this.model).subscribe(
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
