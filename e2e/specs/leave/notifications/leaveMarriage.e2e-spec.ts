import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../../pages/login.po';
import { Home } from '../../../pages/home.po';
import {Leave} from '../../../pages/leave.po';
import { LeaveRequest } from '../../../pages/leaveRequest.po';
import { Users } from '../../../users/users';
import { LeaveResponse } from '../../../pages/leaveResponse.po';
import { Url } from '../../../pages/url';
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


it ('should  log In successfully ', (done) => {
  url.navigateTo('/login');
  loginPg.login(array[4].email,array[4].password)
  browser.sleep(5000);
  browser.refresh();
  browser.sleep(5000);
  expect(browser.getCurrentUrl()).toContain('pages');
  done();
  });


  

  it ('should display a notification to the user to get a justification ', (done) => {
    browser.refresh();
    browser.sleep(5000);
    expect( leaveResponse.notificationIsDisplayed.isPresent()).toBeTruthy();
    leaveResponse.notificationIsDisplayed.click();
    browser.sleep(5000);
    expect(leave.notificationOfBirthLeave.getText()).toContain('Veuillez déposer les justificatis de votre demande Congé de mariage effectué')
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