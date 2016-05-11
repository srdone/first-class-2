import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FirstClassWebAppComponent } from '../app/first-class-web.component';

beforeEachProviders(() => [FirstClassWebAppComponent]);

describe('App: FirstClassWeb', () => {
  it('should create the app',
      inject([FirstClassWebAppComponent], (app: FirstClassWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'first-class-web works!\'',
      inject([FirstClassWebAppComponent], (app: FirstClassWebAppComponent) => {
    expect(app.title).toEqual('first-class-web works!');
  }));
});
