import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('app-root', () => {

  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage({ url: '/' });
  });

  it('renders', async () => {
    const element = await page.find('app-root');
    expect(element).toHaveClass('hydrated');
  });

  describe('app-header', () => {

    beforeEach(async () => {
      page.setContent(`<app-header></app-header>`);
      await page.waitForChanges()
    });

    it('renders app-header', async () => {
      const element = await page.find('app-header');
      expect(element).toHaveClass('hydrated');
    })
  
    it('app-header title should read "FlowBiz"', async () => {
      const title = await page.find('app-header >>> h1');
      expect(title.textContent).toEqual('FlowBiz');
    });
  });
});
