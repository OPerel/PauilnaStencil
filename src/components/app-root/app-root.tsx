import { Component, h, State, Prop } from '@stencil/core';
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

  constructor() {}

  async componentWillLoad() {
    this.isAuth = await Auth.isAuthenticated();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/login' component='okta-login' />
              <PrivateRoute isAuth={this.isAuth} url='/' component='app-home' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
