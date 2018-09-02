import { Component, OnInit, ViewChild } from "@angular/core";
import { GeneralService } from "../shared/services/general.service";
import { PopupService } from "../shared/services/popup.service";
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
  public model: Object = {};
  public action: boolean = false;

  constructor(
    public data: GeneralService, 
    public popup: PopupService, 
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.data.resizeMenuLocation();
    this.data.navigationStateOnScroll();
    this.data.current_state.subscribe(state => this.state = state);
  }

  checkModal($event) {
    $event === false ? this.action = false : this.action = true;
  }

  onSubmit() {
   
    this.http.post("http://askcoder.tech/external/store", this.model).subscribe(
      response => {
        if(Object.keys(response)[0] === 'errors') {
          this.action = true;
          let message = Object.values(response)[0].toString().split(",").join("\n");
          this.popup.popupMessage(message);
        } else {
          this.submitForm.reset();
          this.action = true;
          let message = Object.values(response)[0].toString().split(",").join("\n");
          this.popup.popupMessage(message);
        }
      }
    );
  }
}
