import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';

import { Auth } from '../../helpers/oktaAuth';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true
})
export class AppHeader {
  @Prop() isAuth: boolean;
  @Prop() userName: string;
  @Prop() history: RouterHistory;
  @Event({ eventName: 'authChange' }) authChange: EventEmitter;

  handleLogout = (): void => {
    Auth.logout();
    this.isAuth = false;
    this.userName = '';
    this.history.push('/login');
    this.authChange.emit(false);
  }
 
  render() {
    return (
      <header>
        <div class="left">
          <h1>FlowBiz</h1>
          <span>{this.userName}</span>
        </div>
        <div class="right">
          <stencil-route-link url='/' exact={true} activeClass="active-link">Home</stencil-route-link>
          {
            this.isAuth ? (
              <div>
                <stencil-route-link url='/flow-management' exact={true} activeClass="active-link">
                  Flow Management
                </stencil-route-link>
                <a onClick={this.handleLogout}>Log Out</a>
              </div>
            ) : 
            <stencil-route-link url='/login' activeClass="active-link">Log In</stencil-route-link>  
          }
        </div>
      </header>
    );
  }

}

injectHistory(AppHeader);