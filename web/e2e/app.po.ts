export class FirstClassWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('first-class-web-app h1')).getText();
  }
}
