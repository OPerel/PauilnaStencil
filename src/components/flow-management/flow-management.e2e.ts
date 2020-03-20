import { newE2EPage } from '@stencil/core/testing';

describe('flow-management', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flow-management></flow-management>');

    const element = await page.find('flow-management');
    expect(element).toHaveClass('hydrated');
  });

  it('title should read "Flow Management"', async () => {
    const page = await newE2EPage();
    await page.setContent('<flow-management></flow-management>');

    const el = await page.find('flow-management >>> h2');
    expect(el.textContent).toEqual('Flow Management');
  })
});
