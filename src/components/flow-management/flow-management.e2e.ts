import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('flow-management', () => {

  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({ url: '/flow-management'});
    await page.setContent('<flow-management></flow-management>');
    await page.waitForChanges();
  })
  it('renders', async () => {
    const element = await page.find('flow-management');
    expect(element).toHaveClass('hydrated');
  });

  it('title should read "Flow Management"', async () => {
    const el = await page.find('flow-management >>> h2');
    expect(el.textContent).toEqual('Flow Management');
  })
});
