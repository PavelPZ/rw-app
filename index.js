System.register(['rw-login/index', 'rw-lib/index', 'rw-lib/glob/all-locs', 'rw-lib/glob/globalize', 'rw-lib/navig/router-model', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/observable/from'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, all_locs_1, globalize_1, Observable_1;
    var example, subscribe;
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
    function init() { }
    exports_1("init", init);
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (all_locs_1_1) {
                all_locs_1 = all_locs_1_1;
            },
            function (globalize_1_1) {
                globalize_1 = globalize_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_2) {},
            function (_3) {}],
        execute: function() {
            example = Observable_1.Observable.from([1, 2, 3, 4, 5]).map(function (val) { return val + 10; });
            subscribe = example.subscribe(function (val) { return console.log(val); });
            all_locs_1.default();
            globalize_1.globalizeInit('cs');
            console.log(globalize_1.globalize.dateFull(new Date()));
            console.log(globalize_1.globalize.percent1_1(10 / 3));
            console.log(globalize_1.globalize.relDay(1));
            console.log(globalize_1.globalize.relYear(-1));
            console.log(globalize_1.globalize.relWeek(2));
            globalize_1.globalizeInit('de');
            console.log(globalize_1.globalize.dateFull(new Date()));
            console.log(globalize_1.globalize.percent1_1(10 / 3));
            console.log(globalize_1.globalize.relDay(1));
            console.log(globalize_1.globalize.relYear(-1));
            console.log(globalize_1.globalize.relWeek(2));
            globalize_1.globalizeInit('en');
            console.log(globalize_1.globalize.dateFull(new Date()));
            console.log(globalize_1.globalize.percent1_1(10 / 3));
            console.log(globalize_1.globalize.relDay(1));
            console.log(globalize_1.globalize.relYear(-1));
            console.log(globalize_1.globalize.relWeek(2));
        }
    }
});
//console.log(new Globalize("cs").dateFormatter({ date: "full" })(new Date()));
//console.log(new Globalize("en").dateFormatter({ date: "full" })(new Date()));
//ReactDOM.render(<div>{about()}{loginTest()}</div>, document.getElementById('content'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQStCTSxPQUFPLEVBQ1AsU0FBUztJQUVmO1FBQ0UsTUFBTSxDQUFDLFVBQVEsYUFBTyxFQUFFLGlCQUFZLGFBQVUsRUFBRSx3QkFBcUIsQ0FBQztJQUN4RSxDQUFDO0lBRkQseUJBRUMsQ0FBQTtJQUVELDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGtEQUFrRDtJQUNsRCw4QkFBOEI7SUFDOUIsNEVBQTRFO0lBQzVFLHFGQUFxRjtJQUNyRixxRkFBcUY7SUFDckYsU0FBUztJQUNULE9BQU87SUFDUCxHQUFHO0lBRUgsa0JBQXlCLENBQUM7SUFBMUIsdUJBQTBCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFuQnBCLE9BQU8sR0FBRyx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsR0FBRyxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUM7WUFDaEUsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFvQjdELGtCQUFPLEVBQUUsQ0FBQztZQUNWLHlCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMseUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyx5QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0FBRWxDLCtFQUErRTtBQUMvRSwrRUFBK0U7QUFJL0UseUZBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWJvdXQgYXMgbG9naW5BYm91dCB9IGZyb20gJ3J3LWxvZ2luL2luZGV4JztcclxuaW1wb3J0IGxvZ2luVGVzdCBmcm9tICdydy1sb2dpbi90ZXN0L2luZGV4JztcclxuaW1wb3J0IHsgYWJvdXQgYXMgbGliVGVzdCB9IGZyb20gJ3J3LWxpYi9pbmRleCc7XHJcbmltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llLCByZW1vdmUgfSBmcm9tICdydy1saWIvbGliL2Nvb2tpZSc7XHJcbmltcG9ydCBhbGxMb2NzIGZyb20gJ3J3LWxpYi9nbG9iL2FsbC1sb2NzJztcclxuaW1wb3J0IHsgZ2xvYmFsaXplLCBnbG9iYWxpemVJbml0IH0gZnJvbSAncnctbGliL2dsb2IvZ2xvYmFsaXplJzsgICBcclxuXHJcbi8vaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJy4uL3J3LWxpYi9uYXZpZy9yb3V0ZXItbW9kZWwnO1xyXG5pbXBvcnQgJ3J3LWxpYi9uYXZpZy9yb3V0ZXItbW9kZWwnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbi8vaW1wb3J0ICcuL2dsb2IvY3MuanMnO1xyXG4vL2ltcG9ydCAnZ2xvYmFsaXplJztcclxuLy9pbXBvcnQgZ2xvYmFsaXplIGZyb20gXCJnbG9iYWxpemUtcnVudGltZVwiO1xyXG5cclxuLy9kZWNsYXJlIGxldCBHbG9iYWxpemU6IEdsb2JhbGl6ZVN0YXRpYztcclxuLy92YXIgZ2xvYmFsaXplID0gR2xvYmFsaXplO1xyXG5cclxuLy9pbXBvcnQgcnggZnJvbSAncnhqcy9SeCc7XHJcbi8vU3lzdGVtLmltcG9ydCgnaW5kZXguanMnKTtcclxuXHJcbi8vbGV0IGdsb2JFbiA9IG5ldyBnbG9iYWxpemUoXCJlblwiKTtcclxuLy9sZXQgZGF0ZUZvcm1hdGVyID0gZ2xvYkVuLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KTtcclxuLy9sZXQgZHQgPSBkYXRlRm9ybWF0ZXIobmV3IERhdGUoKSk7XHJcbi8vY29uc29sZS5sb2coZHQpO1xyXG5cclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tJztcclxuY29uc3QgZXhhbXBsZSA9IE9ic2VydmFibGUuZnJvbShbMSwgMiwgMywgNCwgNV0pLm1hcCh2YWwgPT4gdmFsICsgMTApO1xyXG5jb25zdCBzdWJzY3JpYmUgPSBleGFtcGxlLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2codmFsKSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWJvdXQoKTogc3RyaW5nIHtcclxuICByZXR1cm4gYGxpYjogJHtsaWJUZXN0KCl9LCBsb2dpbjogJHtsb2dpbkFib3V0KCl9LCBhcHA6IGFib3V0IHJ3LWFwcGA7XHJcbn1cclxuXHJcbi8vZGVjbGFyZSB2YXIgU3lzdGVtOiBhbnk7XHJcbi8vZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbi8vICBjb25zdCBsYW5ncyA9IFsnZW4nLCAnY3MnXTtcclxuLy8gIFN5c3RlbS5pbXBvcnQoJ2dsb2JhbGl6ZS1ydW50aW1lJykudGhlbihtID0+IHtcclxuLy8gICAgd2luZG93WydHbG9iYWxpemUnXSA9IG07XHJcbi8vICAgIFByb21pc2UuYWxsKGxhbmdzLm1hcChsID0+IFN5c3RlbS5pbXBvcnQoYGdsb2IvJHtsfS5qc2ApKSkudGhlbihyID0+IHtcclxuLy8gICAgICBjb25zb2xlLmxvZyhuZXcgR2xvYmFsaXplKFwiY3NcIikuZGF0ZUZvcm1hdHRlcih7IGRhdGU6IFwiZnVsbFwiIH0pKG5ldyBEYXRlKCkpKTtcclxuLy8gICAgICBjb25zb2xlLmxvZyhuZXcgR2xvYmFsaXplKFwiZW5cIikuZGF0ZUZvcm1hdHRlcih7IGRhdGU6IFwiZnVsbFwiIH0pKG5ldyBEYXRlKCkpKTtcclxuLy8gICAgfSk7XHJcbi8vICB9KTtcclxuLy99XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHsgfVxyXG5cclxuYWxsTG9jcygpO1xyXG5nbG9iYWxpemVJbml0KCdjcycpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUuZGF0ZUZ1bGwobmV3IERhdGUoKSkpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucGVyY2VudDFfMSgxMCAvIDMpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbERheSgxKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxZZWFyKC0xKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxXZWVrKDIpKTtcclxuZ2xvYmFsaXplSW5pdCgnZGUnKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLmRhdGVGdWxsKG5ldyBEYXRlKCkpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnBlcmNlbnQxXzEoMTAgLyAzKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxEYXkoMSkpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsWWVhcigtMSkpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsV2VlaygyKSk7XHJcbmdsb2JhbGl6ZUluaXQoJ2VuJyk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5kYXRlRnVsbChuZXcgRGF0ZSgpKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5wZXJjZW50MV8xKDEwIC8gMykpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsRGF5KDEpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFllYXIoLTEpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFdlZWsoMikpO1xyXG5cclxuLy9jb25zb2xlLmxvZyhuZXcgR2xvYmFsaXplKFwiY3NcIikuZGF0ZUZvcm1hdHRlcih7IGRhdGU6IFwiZnVsbFwiIH0pKG5ldyBEYXRlKCkpKTtcclxuLy9jb25zb2xlLmxvZyhuZXcgR2xvYmFsaXplKFwiZW5cIikuZGF0ZUZvcm1hdHRlcih7IGRhdGU6IFwiZnVsbFwiIH0pKG5ldyBEYXRlKCkpKTtcclxuXHJcblxyXG5cclxuLy9SZWFjdERPTS5yZW5kZXIoPGRpdj57YWJvdXQoKX17bG9naW5UZXN0KCl9PC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcclxuIl19