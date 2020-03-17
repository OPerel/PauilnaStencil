import { Component, h } from '@stencil/core';

import { PrivateRoute } from '../private-route/private-route';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  constructor() {}

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
              <PrivateRoute url='/' component='app-home' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
