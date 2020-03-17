import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <h1>Welcome to FlowBiz!</h1>
        <p>This will be our Landing Page</p>
      </div>
    );
  }
}
