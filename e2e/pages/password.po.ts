
import {browser, element, by} from 'protractor';

export class Password {
get inputPassword() {
    return element(by.css('#username'));
}

get resetPasswordButton() {
    return element(by.className('mat-raised-button mat-primary'));
}
enterEmail(email){
    this.inputPassword.sendKeys(email);
    browser.sleep(5000);
}


}