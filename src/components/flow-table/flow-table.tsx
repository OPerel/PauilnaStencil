import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'flow-table',
  styleUrl: 'flow-table.css',
  shadow: true
})
export class Table {
  @Prop() flowTitle: string;
  @Prop() flow: any;

  render() {
    return (
      <div>
        <h4>{this.flowTitle}</h4>
        {this.flow.map((obj: any, idx: number) => [
          <li>Object #<b>{idx + 1}</b>:</li>,
          <p>{JSON.stringify(obj)}</p>
        ])}
      </div>
    );
  }

}
