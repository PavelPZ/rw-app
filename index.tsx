import { about as loginAbout } from 'rw-login/index';
import loginTest from 'rw-login/test/index';
import { about as libTest } from 'rw-lib/index';
import React from 'react';
import ReactDOM from 'react-dom';

//import rx from 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
const example = Observable.from([1, 2, 3, 4, 5]).map(val => val + 10);
const subscribe = example.subscribe(val => console.log(val));

export function about(): string {
  return `lib: ${libTest()}, login: ${loginAbout()}, app: about rw-app`;
}

ReactDOM.render(<div>{about()}{loginTest()}</div>, document.getElementById('content'));
