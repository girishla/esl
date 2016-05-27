import { EslPage } from './app.po';

describe('esl App', function() {
  let page: EslPage;

  beforeEach(() => {
    page = new EslPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('esl works!');
  });
});
