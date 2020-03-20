import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('okta-login', () => {

  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({ url: '/login' });
    page.setContent('<okta-login></okta-login>');
    await page.waitForChanges();
  });

  it('renders', async () => {
    const element = await page.find('okta-login');
    expect(element).toHaveClass('hydrated');
  });

  it('title should read "Login"', async () => {
    const title = await page.find('okta-login >>> h2');
    expect(title).toEqualText('Login');
  });

  it('should type in the input field', async () => {
    const userInput = await page.find('okta-login >>> #username-input');
    let userInputValue = await userInput.getProperty('value');
    expect(userInputValue).toEqual('');
    await userInput.press('KeyT');
    await page.waitForChanges();
    userInputValue = await userInput.getProperty('value');
    expect(userInputValue).toBe('t');
  });

  describe('Failed login', () => {

    beforeEach(async () => {
      await page.waitForChanges();
    });

    it('should display error on incorrect login attempt', async () => {
      const userInput = await page.find('okta-login >>> #username-input');
      const passwordInput = await page.find('okta-login >>> #password-input');
      const submitInput = await page.find('okta-login >>> #submit-input');
      await userInput.press('KeyT');
      await passwordInput.press('KeyP');
      await submitInput.click();
      await page.waitForChanges();
      const warnMsg = await page.find('okta-login >>> .login-form .login-failed');
      expect(warnMsg).toEqualText('Incorrect login. Please try again.');
    });
  });
});
