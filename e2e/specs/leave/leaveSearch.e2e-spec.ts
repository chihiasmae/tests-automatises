import {browser, protractor, element, by} from 'protractor';
import {LoginPage} from '../../pages/login.po';
import { Home } from '../../pages/home.po';
import {Leave} from '../../pages/leave.po';
import { Users } from '../../users/users';
import { Url } from '../../pages/url';

describe('LeaveSearch ', () => {
    let loginPg: LoginPage;
    let home:Home;
    let leave:Leave;
    let users:Users;
    let array:any;
    let url:Url;
  beforeEach(() => {
    browser.waitForAngularEnabled(true);
    loginPg = new LoginPage();
    home=new Home();  
    leave=new Leave();
    users=new Users();
    array=users.getUsersList();
    url=new Url();
});

afterEach(() => {

});

it ('should  log In successfully ', (done) => {
    browser.sleep(5000)
    url.navigateTo('/login');
    loginPg.login(array[1].email,array[1].password)
    browser.sleep(5000);
    browser.refresh();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toContain('pages');
    done();
});

it('should searching for all leaves', (done) => {
    leave.searshByRHBtn.click();
    leave.searchOptionsByAll.click();
    browser.sleep(5000);
    leave.searchByManager.click();
    leave.searchOptionsByAll.click();
    leave.searchBtn.click();
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
});
