import { Injectable } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public SITE_PATH = 'http://askcoder.tech';

  public nav_location: boolean;
  public nav_scroll_state: string;

  private postsData$: any;

  burger_state = new BehaviorSubject<string>('false');
  current_state = this.burger_state.asObservable();

  post_state = new BehaviorSubject([]);
  current_post = this.post_state.asObservable();

  comments_state = new BehaviorSubject([]);
  current_comments = this.comments_state.asObservable();

  sidebar_posts_state = new BehaviorSubject([]);
  current_sidebar_posts = this.sidebar_posts_state.asObservable();

  constructor(
    private router: Router, 
    private http: HttpClient,
    private route: ActivatedRoute 
  ) {}

  changeBurgerState(state: string) {
    this.burger_state.next(state);
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
      const mw = window.matchMedia("(max-width: 767px)");
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

  getUniquePost($index, $title, $category) {
    
    $index = $index + 1;
    $title = $title.toLowerCase().replace(/[^A-Za-z0-9]/gi,'_');

    this.postsData$ = this.http.post(`${this.SITE_PATH}/external/unique-post`, {'post_id': $index, 'category': $category});
    this.postsData$.subscribe(response => {
      this.post_state.next(response.post);
      this.comments_state.next(response.comments); 
      this.sidebar_posts_state.next(response.sidebarPosts);

      this.router.navigateByUrl(`blog/${$title}/?post=${$index}&cat=${$category}`);
    }); 
  }
}
