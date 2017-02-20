import { QuickAppPage } from './app.po';

describe('quick-app App', () => {
  let page: QuickAppPage;

  beforeEach(() => {
    page = new QuickAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
