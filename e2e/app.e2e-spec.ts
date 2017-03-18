import { L4dPage } from './app.po';

describe('l4d App', () => {
  let page: L4dPage;

  beforeEach(() => {
    page = new L4dPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
