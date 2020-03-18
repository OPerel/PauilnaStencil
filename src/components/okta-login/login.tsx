import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

import { Auth } from '../../helpers/oktaAuth';

@Component({
  tag: 'okta-login',
  styleUrl: 'login.css',
  shadow: true
})
export class Login {
  @State() userName: string;
  @State() password: string;
  @Prop() history: RouterHistory;
  @Event({ eventName: 'authChange' }) authChange: EventEmitter;

  handleLoginSubmit = (e: UIEvent): void => {
    e.preventDefault();

    const user = {
      username: this.userName,
      password: this.password
    };

    Auth.login(user).then(res => {
      if (res) {
        console.log('login success: ', res)
        this.authChange.emit(res)
        this.history.push('/flow-management');
      }
    })
    .catch(err => console.log('login err: ', err));
  }

  handleUserNameChange = (e: UIEvent): void => {
    this.userName = (e.target as HTMLInputElement).value;
  }

  handlePasswordChange = (e: UIEvent): void => {
    this.password = (e.target as HTMLInputElement).value;
  }

  componentWillLoad() {
    Auth.isAuthenticated().then(res => {
      if (res) this.history.push('/flow-management');
    });
  }

  render() {
    return (
      <div class="okta-login">
        <h2>Login</h2>
        <form class="login-form" onSubmit={(e: UIEvent) => this.handleLoginSubmit(e)}>
          <h4>Please Login</h4>
          <label>
            User Name:
            <input type="text" value={this.userName} onInput={(e: UIEvent) => this.handleUserNameChange(e)} />
          </label>

          <label>
            Password:
            <input type="password" onInput={(e: UIEvent) => this.handlePasswordChange(e)} />
          </label>

          <input type="submit" value="Login" />

        </form>
      </div>
    );
  }

}
