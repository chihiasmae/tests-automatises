import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../pages/login.po';
import { Home } from '../../pages/home.po';
import {Password} from '../../pages/password.po';
import {Leave} from '../../pages/leave.po';
import { LeaveRequest } from '../../pages/leaveRequest.po';
import { Users } from '../../users/users';
import { Url } from '../../pages/url';
describe('Authentication /', () => {
  const EC = protractor.ExpectedConditions;
  let loginPg: LoginPage;
  let home:Home;
  let password:Password;
  let leave:Leave;
  let leaveRequest: LeaveRequest;
  let url:Url;
  let array:any;
  let users:Users;
  beforeEach(() => {
    browser.waitForAngularEnabled(true);
    loginPg = new LoginPage();
    home=new Home();  
    password=new Password();
    leave=new Leave();
    leaveRequest=new LeaveRequest();
    users=new Users();
    array=users.getUsersList();
    url=new Url();
});

afterEach(() => {

});



it ('should display the password-resset page ', (done) => {
  url.navigateTo('/login') 
  browser.sleep(5000)
  loginPg.PasswordRessetButton.click();
  browser.sleep(5000);
  expect(browser.getCurrentUrl()).toEqual(url.getUrl()+'password-reset-request');
  password.enterEmail(array[0].email);
  password.resetPasswordButton.click();
  browser.sleep(5000);
  done();
  });

})