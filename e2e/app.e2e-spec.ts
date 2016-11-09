import { BysinesscontactsPage } from './app.po';

describe('bysinesscontacts App', function() {
  let page: BysinesscontactsPage;

  beforeEach(() => {
    page = new BysinesscontactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
