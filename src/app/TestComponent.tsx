/// <reference path="../../typings/react/react.d.ts"/>
import * as React from 'react';

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
    this.test = this.test.bind(this);
  }

  test() {
    this.props.onTest(this.props.item);
  }

  render() {
    return (<div> test </div>);
  }
}
