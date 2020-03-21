import { newE2EPage } from '@stencil/core/testing';

describe('flow-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flow-table></flow-table>');

    const element = await page.find('flow-table');
    expect(element).toHaveClass('hydrated');
  });
});
