import { Login } from './login';

describe('okta-login', () => {
  it('builds', () => {
    expect(new Login()).toBeTruthy();
  });
});
