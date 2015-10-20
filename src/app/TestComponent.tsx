/// <reference path="../../typings/react/react.d.ts"/>
/// <reference path="../../typings/react-dom/react-dom.d.ts"/>
/// <reference path="../../typings/material-ui/material-ui.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RaisedButton } from 'material-ui';

interface ITest {
  text: string;
}

interface ITestState {

}

interface ITestProps {
  item: ITest;
  onTest?: (item: ITest) => any;
}

export class TestComponent extends React.Component<ITestProps, ITestState> {
  constructor() {
    super();
    console.log('init');
    this.test = this.test.bind(this);
  }

  test() {
    this.props.onTest(this.props.item);
  }

  render() {
    return (
      <div>
        <RaisedButton label="test button" primary={true} />
      </div>
    );
  }
}
