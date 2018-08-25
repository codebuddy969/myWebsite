import {
  Directive,
  ElementRef,
  HostListener
} from "@angular/core";
import { GeneralService } from "../services/general.service";

@Directive({
  selector: "[appDrawer]"
})
export class DrawerDirective {

  public state: string;
  public media_xs: boolean = false;

  constructor(private el: ElementRef, private data: GeneralService) {
    this.data.current_state.subscribe(state => (this.state = state));
  }

  checkWindowSize() {
    const wmatch = window.matchMedia("(max-width: 575px)").matches;
    if (wmatch) {
      this.media_xs = true;
    } else {
      this.media_xs = false;
      this.data.changeBurgerState("false");
    }
  }

  @HostListener("window:resize") 
  public onResize() {
    this.checkWindowSize();
  }

  @HostListener("document:click", ["$event", "$event.target"])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    
    if (!targetElement) { return }

    this.checkWindowSize();

    if (this.media_xs) {
      const clickedInside = this.el.nativeElement.contains(targetElement);
      const burger_element = targetElement.classList.contains("burger");
      const sidebar_element = targetElement.classList.contains("sidebar");
  
      if (burger_element || sidebar_element || clickedInside) {
        if (burger_element && this.state === "active") {
          this.data.changeBurgerState("false");
        } else {
          this.data.changeBurgerState("active");
        }
        if (sidebar_element) {
          this.data.changeBurgerState("active");
        }
      } else {
        this.data.changeBurgerState("false");
      }

    }


  }
}
