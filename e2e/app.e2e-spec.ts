import { OpentakDemoPage } from './app.po';

describe('opentak-demo App', () => {
  let page: OpentakDemoPage;

  beforeEach(() => {
    page = new OpentakDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
