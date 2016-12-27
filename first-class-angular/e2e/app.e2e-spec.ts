import { FirstClassAngularPage } from './app.po';

describe('first-class-angular App', function() {
  let page: FirstClassAngularPage;

  beforeEach(() => {
    page = new FirstClassAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
