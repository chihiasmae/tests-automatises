import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../../pages/login.po';
import { Home } from '../../../pages/home.po';
import {Leave} from '../../../pages/leave.po';
import { LeaveRequest } from '../../../pages/leaveRequest.po';
import { Users } from '../../../users/users';
import { Url } from '../../../pages/url';
describe('LeavePaid ', () => {
  let loginPg: LoginPage;
  let home:Home;
  let leave:Leave;
  let leaveRequest: LeaveRequest;
  let users:Users;
  let array:any;
  let url:Url;
beforeEach(() => {
  browser.waitForAngularEnabled(true);
  loginPg = new LoginPage();
  home=new Home();  
  leave=new Leave();
  leaveRequest=new LeaveRequest();
  users=new Users();
  array=users.getUsersList();
  url=new Url();
});

afterEach(() => {

});


it ('should  log In successfully ', (done) => {
  url.navigateTo('/login');
  loginPg.login(array[5].email,array[5].password)
  browser.sleep(5000);
  browser.refresh();
  browser.sleep(5000);
  expect(browser.getCurrentUrl()).toContain('pages');
  done();
  });

it ('should make a leavePaid request successfully', (done) => {

  leave.absenceBtn.click();
  browser.sleep(5000);
  leave.leaveDemand.click();
  leave.addDemandBtn.click();
  leaveRequest.buttonCalendar1.click();
  leaveRequest.dayButton1.click();
  leaveRequest.buttonCalendar2.click();
  leaveRequest.dayButton1.click();
  leaveRequest.motifButton.click();
  leaveRequest.PaidOption.click();
  browser.executeScript("arguments[0].scrollIntoView();",  leaveRequest.saveDemandBtn.getWebElement());
  leaveRequest.saveDemandBtn.click();
  browser.sleep(5000);
  expect(browser.getCurrentUrl()).toEqual(url.getUrl()+'pages/leave/leave-request/list');
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