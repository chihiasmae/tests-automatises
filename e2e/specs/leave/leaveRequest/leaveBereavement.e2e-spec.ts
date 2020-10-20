import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../../pages/login.po';
import { Home } from '../../../pages/home.po';
import {Leave} from '../../../pages/leave.po';
import { LeaveRequest } from '../../../pages/leaveRequest.po';
import {Users} from '../../../users/users';
import { Url } from '../../../pages/url';

describe('LeaveBeareavement ', () => {
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
  loginPg.login(array[2].email,array[2].password);
  browser.sleep(5000);
  browser.refresh();
  browser.sleep(5000);
  expect(browser.getCurrentUrl()).toContain('pages');
  done();
  });

it ('should get an error when making a leaveDisease with more than 3 days ', (done) => {
  leave.absenceBtn.click();
  browser.sleep(5000);
  leave.leaveDemand.click();
  leave.addDemandBtn.click();
  leaveRequest.buttonCalendar1.click();
  leaveRequest.dayButton1.click();
    leaveRequest.buttonCalendar2.click();
    leaveRequest.dayButton2.click();
    leaveRequest.motifButton.click();
    leaveRequest.bereavementOption.click();
    browser.sleep(5000);
    leaveRequest.prchPerduBtn.click();
    leaveRequest.conjointOption.click();
    browser.executeScript("arguments[0].scrollIntoView();",  leaveRequest.saveDemandBtn.getWebElement());
    leaveRequest.saveDemandBtn.click();
    browser.sleep(5000);
    expect(leaveRequest.btnERR.isPresent()).toBeTruthy();
    leaveRequest.btnERR.click();
   // leaveRequest.cancelBtn.click();
    done();
  });
  

it ('should make a leaveDisease successfully with 3 days request ', (done) => {
  leaveRequest.buttonCalendar1.click();
  leaveRequest.dayButton3.click();
  leaveRequest.buttonCalendar2.click();
  leaveRequest.dayButton4.click();
  leaveRequest.motifButton.click();
  leaveRequest.bereavementOption.click();
  browser.sleep(5000);
  leaveRequest.prchPerduBtn.click();
  leaveRequest.conjointOption.click();
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