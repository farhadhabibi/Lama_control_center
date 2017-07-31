import { ArrayPage } from './app.po';

describe('array App', () => {
  let page: ArrayPage;

  beforeEach(() => {
    page = new ArrayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
