import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../pages/login.po';
import { Home } from '../../pages/home.po';
import {Password} from '../../pages/password.po';
import {Leave} from '../../pages/leave.po';
import { LeaveRequest } from '../../pages/leaveRequest.po';
import { Users } from '../../users/users';
import { Url } from '../../pages/url';
describe('Authentication /', () => {
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



it ('should display an error message to the user if they provided less than 6 character ', (done) => {
  url.navigateTo('/login') 
  loginPg.login(array[0].email,'123')
  expect(loginPg.errorMessage2.getText()).toEqual("Veuillez saisir plus de 6 caractères.");
  done();
 

 });

 it ('should display an error message to the user if the format of the email is incorect ', (done) => {
  url.navigateTo('/login') 
  loginPg.login('chihi@akka','123')
  expect(loginPg.errorMessage3.getText()).toEqual("L'e-mail doit respecter le formail aaa.bbb@ccc.ddd.");
  done();
 

 });
it ('should display an error message to the user if they provided incorrect data', (done) => {
  url.navigateTo('/login');
  loginPg.login(array[0].email,'123and');
  expect(loginPg.errorMessage1.getText()).toEqual("Le compte n'est pas encore confirmé.");
  done();

  });
     
    
it('should able to login with valid data', (done) => {
  url.navigateTo('/login');
  loginPg.login(array[0].email,array[0].password)
  browser.sleep(5000);
  browser.refresh();
  browser.sleep(5000);
  expect(browser.getCurrentUrl()).toContain('pages');
 
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