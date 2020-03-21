import { Component, h, State } from '@stencil/core';

import { Api } from '../../helpers/apiService';

@Component({
  tag: 'flow-management',
  styleUrl: 'flow-management.css',
  shadow: true
})
export class FlowManagement {
  @State() userFlows: any;

  componentWillLoad() {
    Api.getUserFlows()
      .then(res => res.json())
      .then(flows => {
        console.log('got user flows: ', flows);
        this.userFlows = flows;
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div class="container">
        <h2>Flow Management</h2>
        {
          Object.keys(this.userFlows).map((flow: any) => {
            return this.userFlows[flow].length && this.userFlows[flow] instanceof Array ?
              <flow-table title={flow} flow={this.userFlows[flow]} /> :
              null;
          })
        }
      </div>
    );
  }

}
