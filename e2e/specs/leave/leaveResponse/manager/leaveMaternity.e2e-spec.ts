import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../../../pages/login.po';
import { Home } from '../../../../pages/home.po';
import { LeaveRequest } from '../../../../pages/leaveRequest.po';
import { Users } from '../../../../users/users';
import { LeaveResponse } from '../../../../pages/leaveResponse.po';
import { Url } from '../../../../pages/url';

describe('LeaveMaternity ', () => {
  let loginPg: LoginPage;
  let home:Home;
  let leaveRequest: LeaveRequest;
  let leaveResponse: LeaveResponse;
  let users: Users;
  let array :any;
  let url:Url
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


it('the manager should receive a notification of the leaveMaternity request', (done) => {
   url.navigateTo('/login');
   loginPg.login(array[0].email,array[0].password)
   browser.sleep(5000);
   browser.refresh();
   browser.sleep(5000);
   expect( leaveResponse.notificationIsDisplayed.isPresent()).toBeTruthy();
   browser.sleep(5000);
   done();
                  
   })

  
it ('should display the login page if they logOut ', (done) => {
    home.LogOutButton1.click();
    browser.sleep(5000);
    home.LogOutButton2.click();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toEqual(url.getUrl()+'login');
    done();
    });

})