import { about as loginAbout } from 'rw-login/index';
import test from 'rw-login/test/index';
import React from 'react';
import ReactDOM from 'react-dom';

export function about(): string {
  return `login: ${loginAbout()}, app: about rw-app`;
}

ReactDOM.render(<div>{about()}{test()}</div>, document.getElementById('content'));
