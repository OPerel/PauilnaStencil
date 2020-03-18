import { Component, h, State, Prop, Listen } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

import { PrivateRoute } from '../private-route/private-route';
import { Auth } from '../../helpers/oktaAuth';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @Prop() history: RouterHistory;
  @State() isAuth: boolean;
  @Listen('authChange')
  handleLogin(e: CustomEvent) {
    this.isAuth = e.detail;
  }

  constructor() {}

  async componentWillLoad() {
    this.isAuth = await Auth.isAuthenticated();
  }

  render() {
    return (
      <div>
        <app-header isAuth={this.isAuth} />

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/login' component='okta-login' exact={true} />
              <PrivateRoute isAuth={this.isAuth} url='/flow-management' component='flow-management' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
