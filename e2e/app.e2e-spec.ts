import { OeffentlicheNetzePage } from './app.po';

describe('oeffentliche-netze App', function() {
  let page: OeffentlicheNetzePage;

  beforeEach(() => {
    page = new OeffentlicheNetzePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
