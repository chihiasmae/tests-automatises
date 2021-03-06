import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../../../pages/login.po';
import { Home } from '../../../../pages/home.po';
import { LeaveRequest } from '../../../../pages/leaveRequest.po';
import { Users } from '../../../../users/users';
import { LeaveResponse } from '../../../../pages/leaveResponse.po';
import { Url } from '../../../../pages/url';


describe('LeaveMaternity', () => {
  let loginPg: LoginPage;
  let home:Home;
  let leaveRequest: LeaveRequest;
  let leaveResponse: LeaveResponse;
  let users: Users;
  let array :any;
  let url:Url;
beforeEach(() => {
  browser.waitForAngularEnabled(true);
  loginPg = new LoginPage();
  home=new Home();  
  leaveRequest=new LeaveRequest();
  leaveResponse=new LeaveResponse();
  users= new Users();
  array=users.getUsersList();
  url=new Url();
});

afterEach(() => {

});

it ('SRH should receive a notification of the leaveMaternity request  ', (done) => {
    url.navigateTo('/login');
    loginPg.login(array[6].email,array[6].password)
    browser.sleep(5000);
    browser.refresh();
    browser.sleep(5000);
    expect( leaveResponse.notificationIsDisplayed.isPresent()).toBeTruthy();
    done();
    });


  it(' should a leaveMaternity request to be accepted by the SRH ', (done) => {
    leaveResponse.reqttNotificationBtn.click();
    leaveRequest.reqstNotiRH.click();
    leaveRequest.leaveRegisterBtn.click();
    leaveRequest.validatedLeaveRegisterBtn.click();
    leaveRequest.validationRHBtn.click();
    leaveRequest.acceptedRequestRHOption.click();
    browser.sleep(5000);
    browser.executeScript("arguments[0].scrollIntoView();",  leaveRequest.saveBtn.getWebElement());
    browser.sleep(5000);
    leaveRequest.saveBtn.click();
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