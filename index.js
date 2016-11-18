System.register(['rw-login/index', 'rw-lib/index', 'rw-lib/glob/globalize', "react-toolbox/lib/button/index", 'react', 'react-dom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, globalize_1, index_3, react_1, react_dom_1;
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
        return "lib: " + index_2.about() + ", login: " + index_1.about() + ", app: about rw-app}";
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
        globalize_1.globalizeInit().then(function (glob) { return react_dom_1.default.render(react_1.default.createElement(index_3.Button, {primary: true, raised: true}, 
            glob.locale, 
            ": ", 
            glob.dateFull(new Date())), document.getElementById('content')); });
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
            function (globalize_1_1) {
                globalize_1 = globalize_1_1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQWFBLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNENBQTRDO0lBRTVDLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFFNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1QixtQ0FBbUM7SUFDbkMsNERBQTREO0lBQzVELG9DQUFvQztJQUNwQyxrQkFBa0I7SUFHbEIsK0NBQStDO0lBQy9DLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsd0VBQXdFO0lBQ3hFLCtEQUErRDtJQUUvRDtRQUNFLE1BQU0sQ0FBQyxVQUFRLGFBQU8sRUFBRSxpQkFBWSxhQUFVLEVBQUUseUJBQXNCLENBQUM7SUFDekUsQ0FBQztJQUZELHlCQUVDLENBQUE7SUFFRCwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixrREFBa0Q7SUFDbEQsOEJBQThCO0lBQzlCLDRFQUE0RTtJQUM1RSxxRkFBcUY7SUFDckYscUZBQXFGO0lBQ3JGLFNBQVM7SUFDVCxPQUFPO0lBQ1AsR0FBRztJQUVIO1FBQ0UseUJBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLG1CQUFRLENBQUMsTUFBTSxDQUFDLDhCQUFDLGNBQU0sR0FBQyxPQUFPLFFBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFPO1lBQUEsSUFBRTtZQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBRSxDQUFTLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUEvSCxDQUErSCxDQUFDLENBQUM7SUFDaEssQ0FBQztJQUZELHVCQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFFcEMsK0VBQStFO0FBQy9FLCtFQUErRTtBQUkvRSx5RkFBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhYm91dCBhcyBsb2dpbkFib3V0IH0gZnJvbSAncnctbG9naW4vaW5kZXgnO1xyXG5pbXBvcnQgbG9naW5UZXN0IGZyb20gJ3J3LWxvZ2luL3Rlc3QvaW5kZXgnO1xyXG5pbXBvcnQgeyBhYm91dCBhcyBsaWJUZXN0IH0gZnJvbSAncnctbGliL2luZGV4JztcclxuaW1wb3J0IHsgc2V0Q29va2llLCBnZXRDb29raWUsIHJlbW92ZSB9IGZyb20gJ3J3LWxpYi9saWIvY29va2llJztcclxuLy9pbXBvcnQgYWxsTG9jcyBmcm9tICdydy1saWIvZ2xvYi9hbGwtbG9jcyc7XHJcbmltcG9ydCB7IGdsb2JhbGl6ZUluaXQgfSBmcm9tICdydy1saWIvZ2xvYi9nbG9iYWxpemUnOyAgIFxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3QtdG9vbGJveC9saWIvYnV0dG9uL2luZGV4XCI7XHJcblxyXG4vL2ltcG9ydCAqIGFzIHJvdXRlciBmcm9tICcuLi9ydy1saWIvbmF2aWcvcm91dGVyLW1vZGVsJztcclxuLy9pbXBvcnQgJ3J3LWxpYi9uYXZpZy9yb3V0ZXItbW9kZWwnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbi8vaW1wb3J0ICcuL2dsb2IvY3MuanMnO1xyXG4vL2ltcG9ydCAnZ2xvYmFsaXplJztcclxuLy9pbXBvcnQgZ2xvYmFsaXplIGZyb20gXCJnbG9iYWxpemUtcnVudGltZVwiO1xyXG5cclxuLy9kZWNsYXJlIGxldCBHbG9iYWxpemU6IEdsb2JhbGl6ZVN0YXRpYztcclxuLy92YXIgZ2xvYmFsaXplID0gR2xvYmFsaXplO1xyXG5cclxuLy9pbXBvcnQgcnggZnJvbSAncnhqcy9SeCc7XHJcbi8vU3lzdGVtLmltcG9ydCgnaW5kZXguanMnKTtcclxuXHJcbi8vbGV0IGdsb2JFbiA9IG5ldyBnbG9iYWxpemUoXCJlblwiKTtcclxuLy9sZXQgZGF0ZUZvcm1hdGVyID0gZ2xvYkVuLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KTtcclxuLy9sZXQgZHQgPSBkYXRlRm9ybWF0ZXIobmV3IERhdGUoKSk7XHJcbi8vY29uc29sZS5sb2coZHQpO1xyXG5cclxuXHJcbi8vaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG4vL2ltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tJztcclxuLy9jb25zdCBleGFtcGxlID0gT2JzZXJ2YWJsZS5mcm9tKFsxLCAyLCAzLCA0LCA1XSkubWFwKHZhbCA9PiB2YWwgKyAxMCk7XHJcbi8vY29uc3Qgc3Vic2NyaWJlID0gZXhhbXBsZS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFib3V0KCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGBsaWI6ICR7bGliVGVzdCgpfSwgbG9naW46ICR7bG9naW5BYm91dCgpfSwgYXBwOiBhYm91dCBydy1hcHB9YDtcclxufVxyXG5cclxuLy9kZWNsYXJlIHZhciBTeXN0ZW06IGFueTtcclxuLy9leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuLy8gIGNvbnN0IGxhbmdzID0gWydlbicsICdjcyddO1xyXG4vLyAgU3lzdGVtLmltcG9ydCgnZ2xvYmFsaXplLXJ1bnRpbWUnKS50aGVuKG0gPT4ge1xyXG4vLyAgICB3aW5kb3dbJ0dsb2JhbGl6ZSddID0gbTtcclxuLy8gICAgUHJvbWlzZS5hbGwobGFuZ3MubWFwKGwgPT4gU3lzdGVtLmltcG9ydChgZ2xvYi8ke2x9LmpzYCkpKS50aGVuKHIgPT4ge1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKG5ldyBHbG9iYWxpemUoXCJjc1wiKS5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSkobmV3IERhdGUoKSkpO1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKG5ldyBHbG9iYWxpemUoXCJlblwiKS5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSkobmV3IERhdGUoKSkpO1xyXG4vLyAgICB9KTtcclxuLy8gIH0pO1xyXG4vL31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gIGdsb2JhbGl6ZUluaXQoKS50aGVuKGdsb2IgPT4gUmVhY3RET00ucmVuZGVyKDxCdXR0b24gcHJpbWFyeSByYWlzZWQ+e2dsb2IubG9jYWxlfToge2dsb2IuZGF0ZUZ1bGwobmV3IERhdGUoKSl9PC9CdXR0b24+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKSk7XHJcbn1cclxuXHJcbi8vYWxsTG9jcygpO1xyXG4vL2dsb2JhbGl6ZUluaXQoJ2NzJyk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLmRhdGVGdWxsKG5ldyBEYXRlKCkpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucGVyY2VudDFfMSgxMCAvIDMpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsRGF5KDEpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsWWVhcigtMSkpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxXZWVrKDIpKTtcclxuLy9nbG9iYWxpemVJbml0KCdkZScpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5kYXRlRnVsbChuZXcgRGF0ZSgpKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnBlcmNlbnQxXzEoMTAgLyAzKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbERheSgxKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFllYXIoLTEpKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsV2VlaygyKSk7XHJcbi8vZ2xvYmFsaXplSW5pdCgnZW4nKTtcclxuLy9jb25zb2xlLmxvZyhnbG9iYWxpemUuZGF0ZUZ1bGwobmV3IERhdGUoKSkpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5wZXJjZW50MV8xKDEwIC8gMykpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxEYXkoMSkpO1xyXG4vL2NvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxZZWFyKC0xKSk7XHJcbi8vY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFdlZWsoMikpO1xyXG5cclxuLy9jb25zb2xlLmxvZyhuZXcgR2xvYmFsaXplKFwiY3NcIikuZGF0ZUZvcm1hdHRlcih7IGRhdGU6IFwiZnVsbFwiIH0pKG5ldyBEYXRlKCkpKTtcclxuLy9jb25zb2xlLmxvZyhuZXcgR2xvYmFsaXplKFwiZW5cIikuZGF0ZUZvcm1hdHRlcih7IGRhdGU6IFwiZnVsbFwiIH0pKG5ldyBEYXRlKCkpKTtcclxuXHJcblxyXG5cclxuLy9SZWFjdERPTS5yZW5kZXIoPGRpdj57YWJvdXQoKX17bG9naW5UZXN0KCl9PC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcclxuIl19