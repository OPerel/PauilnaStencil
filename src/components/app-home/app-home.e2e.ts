import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('app-home', () => {

  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<app-home></app-home>');
    await page.waitForChanges();
  });

  it('renders', async () => {
    const element = await page.find('app-home');
    expect(element).toHaveClass('hydrated');
  });

  it('should have "Welcome to FlowBiz!" title', async () => {
    const element = await page.find('app-home >>> h1');
    expect(element.textContent).toEqual('Welcome to FlowBiz!');
  });

  it('should redirect to Login page when navigating to protected route without login', async () => {
    await page.goto('/flow-management');
    await page.waitForChanges();
    const elem = await page.find('app-root >>> okta-login');
    expect(elem.isVisible()).toBeTruthy();
  })
});
