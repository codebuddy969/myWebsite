import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';
import { PopupService } from "../services/popup.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent implements OnInit {

  @Input() action_value: boolean = false;
  @Output() returnEvent = new EventEmitter<boolean>(true);

  public popup_message: string;

  constructor(public popup: PopupService) { }

  ngOnInit() {
    this.popup.currentMessage.subscribe(message => this.popup_message = message);
  }

  closeModal($event) {
    let modalElem = $event.target.classList.contains('modal');
    let crossElem = $event.target.classList.contains('modal__cross');
    if(modalElem || crossElem) {
      this.returnEvent.emit(this.action_value = false);
    }
  }

}
