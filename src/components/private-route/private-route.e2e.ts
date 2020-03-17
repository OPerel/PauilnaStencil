import { newE2EPage } from '@stencil/core/testing';

describe('private-route', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<private-route></private-route>');

    const element = await page.find('private-route');
    expect(element).toHaveClass('hydrated');
  });
});
