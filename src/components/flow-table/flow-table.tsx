import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'flow-table',
  styleUrl: 'flow-table.css',
  shadow: true
})
export class Table {
  @Prop() title: string;
  @Prop() flow: any;

  render() {
    return (
      <div>
        <h4>{this.title}</h4>
        {this.flow.map((obj: any) => <p>{JSON.stringify(obj)}</p>)}
      </div>
    );
  }

}
