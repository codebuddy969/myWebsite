import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../shared/services/general.service";
import { Router, ActivatedRoute  } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

  public state: string;
  public post_data$: any;
  public comments_data$: any;
  public post_exist: boolean = false;

  constructor(
    public data: GeneralService, 
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.redirectToPost();
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);
  }

  redirectToPost() {
    this.route.queryParams.subscribe(params => {
      if( params['post'] ) {

        this.post_exist = true;
        let $index = params['post'];

        this.post_data$ = this.http.post("http://laravel/external/unique-post", {'post_id': $index});
        this.post_data$.subscribe(response => {
          this.data.post_state.next(response.post);
          this.data.comments_state.next(response.comments);   
          
          let $title =  response.post[0].title.toLowerCase().replace(/[^A-Za-z0-9]/gi,'_');
          this.router.navigateByUrl(`blog/${$title}/?post=${$index}`);
        });
      }
    });
  }

}
