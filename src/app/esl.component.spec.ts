import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EslAppComponent } from '../app/esl.component';

beforeEachProviders(() => [EslAppComponent]);

describe('App: Esl', () => {
  it('should create the app',
      inject([EslAppComponent], (app: EslAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'esl works!\'',
      inject([EslAppComponent], (app: EslAppComponent) => {
    expect(app.title).toEqual('esl works!');
  }));
});
