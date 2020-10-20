import {browser} from 'protractor';

export class Url {
 
 constructor(){}  

navigateTo(relativeUrl: string) {
  browser.get(relativeUrl);
}

getUrl(){
  return  "http://localhost:4200/";
}

}