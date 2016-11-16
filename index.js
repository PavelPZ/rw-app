System.register(['rw-login/index', 'rw-lib/index', "react-toolbox/lib/button/index", 'react', 'react-dom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, react_1, react_dom_1;
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
    function about() {
        return "lib: " + index_2.about() + ", login: " + index_1.about() + ", app: about rw-app";
    }
    exports_1("about", about);
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
    function init() {
        react_dom_1.default.render(react_1.default.createElement(index_3.Button, {primary: true, raised: true}, "Text"), document.getElementById('content'));
    }
    exports_1("init", init);
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            }],
        execute: function() {
        }
    }
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQWFBLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNENBQTRDO0lBRTVDLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFFNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1QixtQ0FBbUM7SUFDbkMsNERBQTREO0lBQzVELG9DQUFvQztJQUNwQyxrQkFBa0I7SUFHbEIsK0NBQStDO0lBQy9DLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsd0VBQXdFO0lBQ3hFLCtEQUErRDtJQUUvRDtRQUNFLE1BQU0sQ0FBQyxVQUFRLGFBQU8sRUFBRSxpQkFBWSxhQUFVLEVBQUUsd0JBQXFCLENBQUM7SUFDeEUsQ0FBQztJQUZELHlCQUVDLENBQUE7SUFFRCwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixrREFBa0Q7SUFDbEQsOEJBQThCO0lBQzlCLDRFQUE0RTtJQUM1RSxxRkFBcUY7SUFDckYscUZBQXFGO0lBQ3JGLFNBQVM7SUFDVCxPQUFPO0lBQ1AsR0FBRztJQUVIO1FBQ0UsbUJBQVEsQ0FBQyxNQUFNLENBQUMsOEJBQUMsY0FBTSxHQUFDLE9BQU8sUUFBQyxNQUFNLFNBQUMsTUFBSSxDQUFTLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFGRCx1QkFFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsWUFBWTtBQUNaLHNCQUFzQjtBQUN0Qiw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0Qiw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHNCQUFzQjtBQUN0Qiw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsb0NBQW9DO0FBRXBDLCtFQUErRTtBQUMvRSwrRUFBK0U7QUFJL0UseUZBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWJvdXQgYXMgbG9naW5BYm91dCB9IGZyb20gJ3J3LWxvZ2luL2luZGV4JztcclxuaW1wb3J0IGxvZ2luVGVzdCBmcm9tICdydy1sb2dpbi90ZXN0L2luZGV4JztcclxuaW1wb3J0IHsgYWJvdXQgYXMgbGliVGVzdCB9IGZyb20gJ3J3LWxpYi9pbmRleCc7XHJcbmltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llLCByZW1vdmUgfSBmcm9tICdydy1saWIvbGliL2Nvb2tpZSc7XHJcbmltcG9ydCBhbGxMb2NzIGZyb20gJ3J3LWxpYi9nbG9iL2FsbC1sb2NzJztcclxuaW1wb3J0IHsgZ2xvYmFsaXplLCBnbG9iYWxpemVJbml0IH0gZnJvbSAncnctbGliL2dsb2IvZ2xvYmFsaXplJzsgICBcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LXRvb2xib3gvbGliL2J1dHRvbi9pbmRleFwiO1xyXG5cclxuLy9pbXBvcnQgKiBhcyByb3V0ZXIgZnJvbSAnLi4vcnctbGliL25hdmlnL3JvdXRlci1tb2RlbCc7XHJcbi8vaW1wb3J0ICdydy1saWIvbmF2aWcvcm91dGVyLW1vZGVsJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG4vL2ltcG9ydCAnLi9nbG9iL2NzLmpzJztcclxuLy9pbXBvcnQgJ2dsb2JhbGl6ZSc7XHJcbi8vaW1wb3J0IGdsb2JhbGl6ZSBmcm9tIFwiZ2xvYmFsaXplLXJ1bnRpbWVcIjtcclxuXHJcbi8vZGVjbGFyZSBsZXQgR2xvYmFsaXplOiBHbG9iYWxpemVTdGF0aWM7XHJcbi8vdmFyIGdsb2JhbGl6ZSA9IEdsb2JhbGl6ZTtcclxuXHJcbi8vaW1wb3J0IHJ4IGZyb20gJ3J4anMvUngnO1xyXG4vL1N5c3RlbS5pbXBvcnQoJ2luZGV4LmpzJyk7XHJcblxyXG4vL2xldCBnbG9iRW4gPSBuZXcgZ2xvYmFsaXplKFwiZW5cIik7XHJcbi8vbGV0IGRhdGVGb3JtYXRlciA9IGdsb2JFbi5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSk7XHJcbi8vbGV0IGR0ID0gZGF0ZUZvcm1hdGVyKG5ldyBEYXRlKCkpO1xyXG4vL2NvbnNvbGUubG9nKGR0KTtcclxuXHJcblxyXG4vL2ltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vL2ltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy9pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbSc7XHJcbi8vY29uc3QgZXhhbXBsZSA9IE9ic2VydmFibGUuZnJvbShbMSwgMiwgMywgNCwgNV0pLm1hcCh2YWwgPT4gdmFsICsgMTApO1xyXG4vL2NvbnN0IHN1YnNjcmliZSA9IGV4YW1wbGUuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZyh2YWwpKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhYm91dCgpOiBzdHJpbmcge1xyXG4gIHJldHVybiBgbGliOiAke2xpYlRlc3QoKX0sIGxvZ2luOiAke2xvZ2luQWJvdXQoKX0sIGFwcDogYWJvdXQgcnctYXBwYDtcclxufVxyXG5cclxuLy9kZWNsYXJlIHZhciBTeXN0ZW06IGFueTtcclxuLy9leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuLy8gIGNvbnN0IGxhbmdzID0gWydlbicsICdjcyddO1xyXG4vLyAgU3lzdGVtLmltcG9ydCgnZ2xvYmFsaXplLXJ1bnRpbWUnKS50aGVuKG0gPT4ge1xyXG4vLyAgICB3aW5kb3dbJ0dsb2JhbGl6ZSddID0gbTtcclxuLy8gICAgUHJvbWlzZS5hbGwobGFuZ3MubWFwKGwgPT4gU3lzdGVtLmltcG9ydChgZ2xvYi8ke2x9LmpzYCkpKS50aGVuKHIgPT4ge1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKG5ldyBHbG9iYWxpemUoXCJjc1wiKS5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSkobmV3IERhdGUoKSkpO1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKG5ldyBHbG9iYWxpemUoXCJlblwiKS5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSkobmV3IERhdGUoKSkpO1xyXG4vLyAgICB9KTtcclxuLy8gIH0pO1xyXG4vL31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gIFJlYWN0RE9NLnJlbmRlcig8QnV0dG9uIHByaW1hcnkgcmFpc2VkPlRleHQ8L0J1dHRvbj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xyXG59XHJcblxyXG4vL2FsbExvY3MoKTtcclxuLy9nbG9iYWxpemVJbml0KCdjcycpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5kYXRlRnVsbChuZXcgRGF0ZSgpKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnBlcmNlbnQxXzEoMTAgLyAzKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbERheSgxKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFllYXIoLTEpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsV2VlaygyKSk7XHJcbi8vZ2xvYmFsaXplSW5pdCgnZGUnKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUuZGF0ZUZ1bGwobmV3IERhdGUoKSkpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5wZXJjZW50MV8xKDEwIC8gMykpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxEYXkoMSkpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxZZWFyKC0xKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFdlZWsoMikpO1xyXG4vL2dsb2JhbGl6ZUluaXQoJ2VuJyk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLmRhdGVGdWxsKG5ldyBEYXRlKCkpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucGVyY2VudDFfMSgxMCAvIDMpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsRGF5KDEpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsWWVhcigtMSkpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxXZWVrKDIpKTtcclxuXHJcbi8vY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImNzXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcbi8vY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImVuXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcblxyXG5cclxuXHJcbi8vUmVhY3RET00ucmVuZGVyKDxkaXY+e2Fib3V0KCl9e2xvZ2luVGVzdCgpfTwvZGl2PiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSk7XHJcbiJdfQ==