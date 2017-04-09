import { FronterdfamPage } from './app.po';

describe('fronterdfam App', () => {
  let page: FronterdfamPage;

  beforeEach(() => {
    page = new FronterdfamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
