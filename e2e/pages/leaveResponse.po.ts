
import {by, element, browser} from 'protractor';

export class LeaveResponse {
    
get notificationIsDisplayed(){
    return element(by.className('badge ng-star-inserted'));
}
get reqttNotificationBtn(){
    return element(by.className('mat-icon-button toolbar-notification-btn'));
}
get reqtNotificationManager(){
    return element.all(by.className('notification')).get(0);
}
}