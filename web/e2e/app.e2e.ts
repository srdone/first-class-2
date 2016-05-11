import { FirstClassWebPage } from './app.po';

describe('first-class-web App', function() {
  let page: FirstClassWebPage;

  beforeEach(() => {
    page = new FirstClassWebPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('first-class-web works!');
  });
});
