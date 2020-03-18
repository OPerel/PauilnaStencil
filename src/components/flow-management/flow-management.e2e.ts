import { newE2EPage } from '@stencil/core/testing';

describe('flow-management', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flow-management></flow-management>');

    const element = await page.find('flow-management');
    expect(element).toHaveClass('hydrated');
  });
});
