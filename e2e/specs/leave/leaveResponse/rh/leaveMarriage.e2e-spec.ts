import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../../../pages/login.po';
import { Home } from '../../../../pages/home.po';
import {Leave} from '../../../../pages/leave.po';
import { LeaveRequest } from '../../../../pages/leaveRequest.po';
import { Users } from '../../../../users/users';
import { LeaveResponse } from '../../../../pages/leaveResponse.po';
import { Url } from '../../../../pages/url';

describe('LeaveMarriage ', () => {
  let loginPg: LoginPage;
  let home:Home;
  let leave:Leave;
  let leaveRequest: LeaveRequest;
  let leaveResponse: LeaveResponse;
  let users: Users;
  let array :any;
  let url:Url;
beforeEach(() => {
  browser.waitForAngularEnabled(true);
  loginPg = new LoginPage();
  home=new Home();  
  leave=new Leave();
  leaveRequest=new LeaveRequest();
  leaveResponse=new LeaveResponse();
  users= new Users();
  array=users.getUsersList();
  url=new Url();
});

afterEach(() => {

});


it('the manager should receive a notification of the diseaseLeave request', (done) => {
   url.navigateTo('/login');
   loginPg.login(array[6].email,array[6].password)
   browser.sleep(5000);
   browser.refresh();
   browser.sleep(5000);
   expect( leaveResponse.notificationIsDisplayed.isPresent()).toBeTruthy();
   done();
})             
 
it('should a leave request be accepted by the srh', (done) => {
  browser.sleep(5000);
  leaveResponse.reqttNotificationBtn.click();
  leaveResponse.reqtNotificationManager.click();
  browser.sleep(5000);
  leaveRequest.leaveRegisterBtn.click();
  leaveRequest.validatedLeaveRegisterBtn.click();
  leaveRequest.validationRHBtn.click();
  leaveRequest.acceptedRequestRHOption.click();
  browser.executeScript("arguments[0].scrollIntoView();",  leaveRequest.saveBtn.getWebElement());
  leaveRequest.saveBtn.click();
  browser.sleep(5000);
  expect(browser.getCurrentUrl()).toEqual(url.getUrl()+'pages/leave/validation-leave-request/list');
  done();
   });
  


it ('should display the login page if they logOut ', (done) => {
    home.LogOutButton1.click();
    browser.sleep(5000);
    home.LogOutButton2.click();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toEqual(url.getUrl()+'login');
    done();
    });

})