import { KendoGridAngularPage } from './app.po';

describe('kendo-grid-angular App', () => {
  let page: KendoGridAngularPage;

  beforeEach(() => {
    page = new KendoGridAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
