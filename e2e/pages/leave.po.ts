import {browser, element, by, protractor, WebDriver} from 'protractor';

export class Leave {
    constructor(){
 
    }
get absenceBtn(){
    return element(by.xpath('/html/body/app-root/app-auth/mat-sidenav-container/mat-sidenav/div/cdk-sidemenu/div/perfect-scrollbar/div/div[1]/cdk-sidemenu-item[4]/mat-nav-list/div/mat-list-item/div/div[2]/h3'));
}
get leaveDemand(){
    return element(by.xpath('/html/body/app-root/app-auth/mat-sidenav-container/mat-sidenav/div/cdk-sidemenu/div/perfect-scrollbar/div/div[1]/cdk-sidemenu-item[4]/mat-nav-list/div/cdk-sidemenu-item[1]/mat-nav-list/div/mat-list-item/div/div[2]/h3'));
}
get addDemandBtn(){
    return element(by.className('mat-raised-button mat-primary sifa-content-add mat-button'));
}

get searshByRHBtn(){
    return element.all(by.className('mat-form-field-wrapper')).get(1);
}
get searchByManager(){
    return element.all(by.className('mat-form-field-wrapper')).get(0);
}
get searchByManager1(){
    return element.all(by.className('mat-form-field-wrapper')).get(1);
}
get searshByRHBtn1(){
    return element.all(by.className('mat-form-field-wrapper')).get(2);
}
get searchOptionsByAll(){
    return element.all(by.className('mat-option')).get(0);
}
get searchBtn(){
    return element(by.className('mat-raised-button mat-primary mat-button'));
}
get notificationOfBirthLeave(){
    return element(by.css('body > app-root > app-auth > mat-sidenav-container > mat-sidenav-content > mat-drawer-container > mat-drawer-content > cdk-toolbar > mat-toolbar > cdk-toolbar-notification > div > div > div > perfect-scrollbar > div > div.ps-content > div:nth-child(1) > div.notification > div > div.name'))
}
get exportBtn(){
    return element(by.className('mat-raised-button mat-primary sifa-content-add mat-button'));
}
get validatedleavesbtn(){
    return element(by.xpath('/html/body/app-root/app-auth/mat-sidenav-container/mat-sidenav/div/cdk-sidemenu/div/perfect-scrollbar/div/div[1]/cdk-sidemenu-item[4]/mat-nav-list/div/cdk-sidemenu-item[2]/mat-nav-list'));
}
}