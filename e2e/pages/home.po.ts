import {by, element, browser} from 'protractor';
export class Home {
  
  constructor(){

  }

 get title() {
   return element(by.css('.mat-raised-button mat-primary mat-button'));
 }

 get LogOutButton1(){
  return element(by.className('toolbar-user-btn mat-stroked-button'));
}
get LogOutButton2(){
  return element.all(by.className('mat-icon-button')).get(5);
}

}