import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('flow-management', () => {

  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({ url: '/flow-management'});
    await page.setContent('<flow-management></flow-management>');
    await page.waitForChanges();
  });

  it('renders', async () => {
    const element = await page.find('flow-management');
    expect(element).toHaveClass('hydrated');
  });

  it('title should read "Flow Management"', async () => {
    const title = await page.find('flow-management >>> .container h2');
    expect(title.textContent).toEqual('Flow Management');
  });
});
