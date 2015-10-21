/// <reference path="../../../typings/react/react.d.ts"/>
/// <reference path="../../../typings/react-dom/react-dom.d.ts"/>
/// <reference path="../../../typings/material-ui/material-ui.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppBar, RaisedButton } from 'material-ui';

interface IApp {
  text: string;
}

interface IAppState {}

interface IAppProps {
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AppBar></AppBar>
      </div>
      );
  }
}
