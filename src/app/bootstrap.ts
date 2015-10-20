/// <reference path="../../typings/react/react.d.ts"/>

import * as React from 'react';
import { DOM } from 'react/addons';
import { TestComponent } from './TestComponent';

React.render(React.createElement(TestComponent), document.getElementById('main'));
