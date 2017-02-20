import { ProyectoAngularCliPage } from './app.po';

describe('proyecto-angular-cli App', () => {
  let page: ProyectoAngularCliPage;

  beforeEach(() => {
    page = new ProyectoAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
