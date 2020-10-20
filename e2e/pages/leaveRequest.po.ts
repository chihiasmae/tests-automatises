import {by, element, browser} from 'protractor';
export class LeaveRequest {


constructor(){}

  get buttonCalendar1() {
    return element.all(by.className('mat-icon-button')).get(7);
  }
 get buttonCalendar2() {
   return element.all(by.className('mat-icon-button')).get(8);
 }

 get dayButton1(){
     return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(24);
 }
 get dayButton2(){
    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(29);
}
get dayButton3(){
    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(26);
}
get dayButton4(){
    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(29);
}
 get motifButton(){
     return element.all(by.className('mat-select-trigger')).get(2);
 }
 get withoutPayOption(){
    return element(by.xpath('//*[@id="mat-option-25"]'));
 }
 get marriageOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(6);
 }
 get PaidOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(0);
 }
 get maternityOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(1);
 }

 get diseaseOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(2);
 }
 get bereavementOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(5);
 }
 get birthOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(4);
 }
 
 get saveDemandBtn(){
    return element(by.css('#create-dosier > form > mat-card > div.temp-margin > button.mat-raised-button.mat-primary.mat-button'));
 }
 get soldeConge(){
     return element(by.id('mat-input-27'));
 }
 
get ValidationManagerBtn(){
    return element.all(by.className('mat-select-arrow-wrapper')).get(0);
}
get acceptedRequestOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(0);
}
get saveBtn(){
    return element(by.className('mat-raised-button mat-primary mat-button'));
}
get reqstNotiRH(){
    return element.all(by.className('notification')).get(0);
}
get validationRHBtn(){
    return element.all(by.className('mat-select-arrow')).get(1);
}
get acceptedRequestRHOption(){
    return element.all(by.className('mat-option ng-star-inserted')).get(0);
}
get leaveRegisterBtn(){
    return element.all(by.className('mat-select-arrow-wrapper')).get(2);
}
get validatedLeaveRegisterBtn(){
    return element.all(by.className('mat-option ng-star-inserted')).get(0);
}

get responseMaladie(){
    return element.all(by.className('name')).get(10);
}
get validationMaladie(){
    return element(by.className('ng-tns-c24-13 ng-star-inserted'));
}
get  error(){
    return element.all(by.className('swal2-content')).get(2);
}
get btnERR(){
    return element(by.className('swal2-confirm swal2-styled'));
}
get cancelBtn(){
    return element.all(by.className('mat-raised-button')).get(1);
}
get prchPerduBtn(){
    return element.all(by.className('mat-select-trigger')).get(3);
}
get conjointOption(){
    return element(by.className('mat-option ng-star-inserted mat-active'));
}
get dayBirth1(){
   
    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(12);
}

get dayBirth2(){

    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(17);
}

get dayMarriage1(){
   
    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(12);
}

get dayMarriage2(){

    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(18);
}

get dayMarriage3(){
   
    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(12);
}

get dayMarriage4(){

    return element.all(by.className('mat-calendar-body-cell ng-star-inserted')).get(30);
}

get maxDayError(){
    return element(by.className('toast-error toast ng-trigger ng-trigger-flyInOut'));
}

get notPaidLeave(){
    return element(by.xpath('/html/body/app-root/app-auth/mat-sidenav-container/mat-sidenav-content/mat-drawer-container/mat-drawer-content/cdk-toolbar/mat-toolbar/cdk-toolbar-notification/div/div/div/perfect-scrollbar/div/div[1]/div[1]/div[1]/div/div[1]'))
}
}
