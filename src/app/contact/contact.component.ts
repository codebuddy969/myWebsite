import { Component, OnInit, ViewChild } from "@angular/core";
import { GeneralService } from "../shared/services/general.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  @ViewChild("contactForm")
  public submitForm: any;
  public state: string;

  constructor(public data: GeneralService, private http: HttpClient) {}

  ngOnInit() {
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);
  }

  model: any = {};

  onSubmit() {
    
    this.http.post("http://laravel/store", this.model).subscribe(
      res => {
        this.submitForm.reset();
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
}
