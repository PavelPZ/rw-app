import { about as loginAbout } from 'rw-login/index';
import loginTest from 'rw-login/test/index';
import { about as libTest } from 'rw-lib/index';
import { setCookie, getCookie, remove } from 'rw-lib/lib/cookie';
//import allLocs from 'rw-lib/glob/all-locs';
import { globalizeInit } from 'rw-lib/glob/globalize';   
import { Button } from "react-toolbox/lib/button/index";

//import * as router from '../rw-lib/navig/router-model';
//import 'rw-lib/navig/router-model';

import React from 'react';
import ReactDOM from 'react-dom';
//import './glob/cs.js';
//import 'globalize';
//import globalize from "globalize-runtime";

//declare let Globalize: GlobalizeStatic;
//var globalize = Globalize;

//import rx from 'rxjs/Rx';
//System.import('index.js');

//let globEn = new globalize("en");
//let dateFormater = globEn.dateFormatter({ date: "full" });
//let dt = dateFormater(new Date());
//console.log(dt);


//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/from';
//const example = Observable.from([1, 2, 3, 4, 5]).map(val => val + 10);
//const subscribe = example.subscribe(val => console.log(val));

export function about(): string {
  return `lib: ${libTest()}, login: ${loginAbout()}, app: about rw-app}`;
}

//declare var System: any;
//export function init() {
//  const langs = ['en', 'cs'];
//  System.import('globalize-runtime').then(m => {
//    window['Globalize'] = m;
//    Promise.all(langs.map(l => System.import(`glob/${l}.js`))).then(r => {
//      console.log(new Globalize("cs").dateFormatter({ date: "full" })(new Date()));
//      console.log(new Globalize("en").dateFormatter({ date: "full" })(new Date()));
//    });
//  });
//}

export function init() {
  globalizeInit().then(glob => ReactDOM.render(<Button primary raised>{glob.locale}: {glob.dateFull(new Date())}</Button>, document.getElementById('content')));
}

//allLocs();
//globalizeInit('cs');
//console.log(globalize.dateFull(new Date()));
//console.log(globalize.percent1_1(10 / 3));
//console.log(globalize.relDay(1));
//console.log(globalize.relYear(-1));
//console.log(globalize.relWeek(2));
//globalizeInit('de');
//console.log(globalize.dateFull(new Date()));
//console.log(globalize.percent1_1(10 / 3));
//console.log(globalize.relDay(1));
//console.log(globalize.relYear(-1));
//console.log(globalize.relWeek(2));
//globalizeInit('en');
//console.log(globalize.dateFull(new Date()));
//console.log(globalize.percent1_1(10 / 3));
//console.log(globalize.relDay(1));
//console.log(globalize.relYear(-1));
//console.log(globalize.relWeek(2));

//console.log(new Globalize("cs").dateFormatter({ date: "full" })(new Date()));
//console.log(new Globalize("en").dateFormatter({ date: "full" })(new Date()));



//ReactDOM.render(<div>{about()}{loginTest()}</div>, document.getElementById('content'));
