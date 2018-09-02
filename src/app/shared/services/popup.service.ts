import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PopupService {

    private messageSource = new BehaviorSubject<string>('default message');
    currentMessage = this.messageSource.asObservable();
    
    constructor() {}

    popupMessage(message: string) {
        this.messageSource.next(message);
    }
}