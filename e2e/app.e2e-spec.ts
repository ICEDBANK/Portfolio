import { JricePage } from './app.po';

describe('jrice App', function() {
  let page: JricePage;

  beforeEach(() => {
    page = new JricePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
