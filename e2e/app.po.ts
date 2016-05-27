export class EslPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('esl-app h1')).getText();
  }
}
