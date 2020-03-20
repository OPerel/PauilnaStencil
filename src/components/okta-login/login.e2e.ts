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
    const element = await page.find('okta-login >>> h2');
    expect(element.textContent).toEqual('Login');
  });
});
