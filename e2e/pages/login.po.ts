import {browser, element, by, protractor, WebDriver} from 'protractor';

export class LoginPage {
 
 EC = protractor.ExpectedConditions;

constructor(){
 
}

get loginPageHeader() {
      return element(by.xpath('.//*[@id="header"]/h1'));
}

get username() {
       return element(by.id('username'));
}

get password() {
        return element(by.id('password'));
}
get errorMessage1() {
        return element.all(by.className('ng-star-inserted')).get(2);
}

get errorMessage2() {
        return element(by.className('material-hint-error mat-error ng-star-inserted'));
}
get errorMessage3(){
  return element(by.id('mat-error-1'));
}
get loginButton() {
        return element.all(by.className('mat-raised-button mat-primary')).get(0);
}

get PasswordRessetButton(){
        return element.all(by.className('mat-raised-button mat-primary')).get(1)
}
login(username,password){
  
this.username.sendKeys(username);
this.password.sendKeys(password);
browser.sleep(5000);
this.loginButton.click();
}
     
   



}