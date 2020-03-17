import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'okta-login',
  styleUrl: 'login.css',
  shadow: true
})
export class Login {
  @State() userName: string;
  @State() password: string;

  handleLoginSubmit = (e: UIEvent): void => {
    e.preventDefault();
    console.log('user: ', this.userName);
    console.log('password: ', this.password);
  }

  handleUserNameChange = (e: UIEvent): void => {
    this.userName = (e.target as HTMLInputElement).value;
  }

  handlePasswordChange = (e: UIEvent): void => {
    this.password = (e.target as HTMLInputElement).value;
  }

  render() {
    return (
      <div class="okta-login">
        <h2>Login</h2>
        <form class="login-form" onSubmit={(e: UIEvent) => this.handleLoginSubmit(e)}>
          <h4>Please Login</h4>
          <label>
            User Name:
            <input type="text" onInput={(e: UIEvent) => this.handleUserNameChange(e)} />
          </label>

          <label>
            Password:
            <input type="text" onInput={(e: UIEvent) => this.handlePasswordChange(e)} />
          </label>

          <input type="submit" value="Login" />

        </form>
      </div>
    );
  }

}
