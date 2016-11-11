﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IRouteNode, RouteComponent, TRouteHandler, initRouteDispatcher, RouteHook } from 'rw-lib/navig/dispatcher';
import { navigate } from 'rw-lib/navig/router';
//import 'rw-lib/navig/url-parser';

interface ITestNode extends IRouteNode {
  state: number;
}

class Test extends RouteComponent<ITestNode> {
  render(): JSX.Element {
    console.log(this.props.state);
    switch (this.props.state) {
      case 0:
      case 1:
        return <div>
          <h1>{this.props.state}</h1>
          Hook1: <RouteHook hookId='child' key={cnt++} /><br />
          Hook2: <RouteHook hookId='child1' key={cnt++} />
        </div>;
      default:
        return <h3>Child {this.props.state}</h3>;
    }
  }
}
let cnt = 0;
class TestHandler extends TRouteHandler {
  eq(node1: ITestNode, node2: ITestNode): boolean { return node1.state == node2.state; }
  getComponentClass(node: IRouteNode): React.ComponentClass<ITestNode> { return Test; }
  normalizeStringProps(node: ITestNode) {
    if (node.state && typeof node.state == 'string') node.state = parseInt(node.state as any);
  }
}
TRouteHandler.register(new TestHandler('test'));

let initUrl: () => ITestNode = () => {
  return {
    handlerId: 'test',
    state: 0,
    child: { handlerId: 'test', state: 10 },
    childs: { child1: { handlerId: 'test', state: 11 } },
  };
};

let url1: ITestNode = {
  handlerId: 'test',
  state: 0,
  child: { handlerId: 'test', state: 12 },
  childs: { child1: { handlerId: 'test', state: 11 } },
};

let url2: ITestNode = {
  handlerId: 'test',
  state: 1,
  child: { handlerId: 'test', state: 22 },
  childs: { child1: { handlerId: 'test', state: 21 } },
};

initRouteDispatcher<ITestNode>(initUrl);

setTimeout(() => {
  navigate<ITestNode>(url1);
  setTimeout(() => {
    navigate<ITestNode>(url2);
  }, 1000);
}, 1000);