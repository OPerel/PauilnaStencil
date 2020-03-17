import { newE2EPage } from '@stencil/core/testing';

describe('okta-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<okta-login></okta-login>');

    const element = await page.find('okta-login');
    expect(element).toHaveClass('hydrated');
  });
});
