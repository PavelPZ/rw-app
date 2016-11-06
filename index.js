System.register(['rw-login/index', 'rw-login/test/index', 'rw-lib/index', 'rw-lib/glob/all-locs', 'rw-lib/glob/globalize', 'react', 'react-dom', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/observable/from'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, all_locs_1, globalize_1, react_1, react_dom_1, Observable_1;
    var example, subscribe;
    function about() {
        return "lib: " + index_3.about() + ", login: " + index_1.about() + ", app: about rw-app";
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
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (all_locs_1_1) {
                all_locs_1 = all_locs_1_1;
            },
            function (globalize_1_1) {
                globalize_1 = globalize_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            example = Observable_1.Observable.from([1, 2, 3, 4, 5]).map(function (val) { return val + 10; });
            subscribe = example.subscribe(function (val) { return console.log(val); });
            all_locs_1.default();
            globalize_1.globalizeInit('cs');
            console.log(globalize_1.globalize.dateFull(new Date()));
            console.log(globalize_1.globalize.percent1_1(10 / 3));
            globalize_1.globalizeInit('de');
            console.log(globalize_1.globalize.dateFull(new Date()));
            console.log(globalize_1.globalize.percent1_1(10 / 3));
            //console.log(new Globalize("cs").dateFormatter({ date: "full" })(new Date()));
            //console.log(new Globalize("en").dateFormatter({ date: "full" })(new Date()));
            react_dom_1.default.render(react_1.default.createElement("div", null, 
                about(), 
                index_2.default()), document.getElementById('content'));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQTRCTSxPQUFPLEVBQ1AsU0FBUztJQUVmO1FBQ0UsTUFBTSxDQUFDLFVBQVEsYUFBTyxFQUFFLGlCQUFZLGFBQVUsRUFBRSx3QkFBcUIsQ0FBQztJQUN4RSxDQUFDO0lBRkQseUJBRUMsQ0FBQTtJQUVELDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGtEQUFrRDtJQUNsRCw4QkFBOEI7SUFDOUIsNEVBQTRFO0lBQzVFLHFGQUFxRjtJQUNyRixxRkFBcUY7SUFDckYsU0FBUztJQUNULE9BQU87SUFDUCxHQUFHO0lBRUgsa0JBQXlCLENBQUM7SUFBMUIsdUJBQTBCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW5CcEIsT0FBTyxHQUFHLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxHQUFHLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztZQUNoRSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQW9CN0Qsa0JBQU8sRUFBRSxDQUFDO1lBQ1YseUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMseUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUMsK0VBQStFO1lBQy9FLCtFQUErRTtZQUkvRSxtQkFBUSxDQUFDLE1BQU0sQ0FBQywrQkFBQyxHQUFHO2dCQUFFLEtBQUssRUFBRztnQkFBQyxlQUFTLEVBQUcsQ0FBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFib3V0IGFzIGxvZ2luQWJvdXQgfSBmcm9tICdydy1sb2dpbi9pbmRleCc7XHJcbmltcG9ydCBsb2dpblRlc3QgZnJvbSAncnctbG9naW4vdGVzdC9pbmRleCc7XHJcbmltcG9ydCB7IGFib3V0IGFzIGxpYlRlc3QgfSBmcm9tICdydy1saWIvaW5kZXgnO1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSwgcmVtb3ZlIH0gZnJvbSAncnctbGliL2xpYi9jb29raWUnO1xyXG5pbXBvcnQgYWxsTG9jcyBmcm9tICdydy1saWIvZ2xvYi9hbGwtbG9jcyc7XHJcbmltcG9ydCB7IGdsb2JhbGl6ZSwgZ2xvYmFsaXplSW5pdCB9IGZyb20gJ3J3LWxpYi9nbG9iL2dsb2JhbGl6ZSc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuLy9pbXBvcnQgJy4vZ2xvYi9jcy5qcyc7XHJcbi8vaW1wb3J0ICdnbG9iYWxpemUnO1xyXG4vL2ltcG9ydCBnbG9iYWxpemUgZnJvbSBcImdsb2JhbGl6ZS1ydW50aW1lXCI7XHJcblxyXG4vL2RlY2xhcmUgbGV0IEdsb2JhbGl6ZTogR2xvYmFsaXplU3RhdGljO1xyXG4vL3ZhciBnbG9iYWxpemUgPSBHbG9iYWxpemU7XHJcblxyXG4vL2ltcG9ydCByeCBmcm9tICdyeGpzL1J4JztcclxuLy9TeXN0ZW0uaW1wb3J0KCdpbmRleC5qcycpO1xyXG5cclxuLy9sZXQgZ2xvYkVuID0gbmV3IGdsb2JhbGl6ZShcImVuXCIpO1xyXG4vL2xldCBkYXRlRm9ybWF0ZXIgPSBnbG9iRW4uZGF0ZUZvcm1hdHRlcih7IGRhdGU6IFwiZnVsbFwiIH0pO1xyXG4vL2xldCBkdCA9IGRhdGVGb3JtYXRlcihuZXcgRGF0ZSgpKTtcclxuLy9jb25zb2xlLmxvZyhkdCk7XHJcblxyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5jb25zdCBleGFtcGxlID0gT2JzZXJ2YWJsZS5mcm9tKFsxLCAyLCAzLCA0LCA1XSkubWFwKHZhbCA9PiB2YWwgKyAxMCk7XHJcbmNvbnN0IHN1YnNjcmliZSA9IGV4YW1wbGUuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZyh2YWwpKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhYm91dCgpOiBzdHJpbmcge1xyXG4gIHJldHVybiBgbGliOiAke2xpYlRlc3QoKX0sIGxvZ2luOiAke2xvZ2luQWJvdXQoKX0sIGFwcDogYWJvdXQgcnctYXBwYDtcclxufVxyXG5cclxuLy9kZWNsYXJlIHZhciBTeXN0ZW06IGFueTtcclxuLy9leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuLy8gIGNvbnN0IGxhbmdzID0gWydlbicsICdjcyddO1xyXG4vLyAgU3lzdGVtLmltcG9ydCgnZ2xvYmFsaXplLXJ1bnRpbWUnKS50aGVuKG0gPT4ge1xyXG4vLyAgICB3aW5kb3dbJ0dsb2JhbGl6ZSddID0gbTtcclxuLy8gICAgUHJvbWlzZS5hbGwobGFuZ3MubWFwKGwgPT4gU3lzdGVtLmltcG9ydChgZ2xvYi8ke2x9LmpzYCkpKS50aGVuKHIgPT4ge1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKG5ldyBHbG9iYWxpemUoXCJjc1wiKS5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSkobmV3IERhdGUoKSkpO1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKG5ldyBHbG9iYWxpemUoXCJlblwiKS5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSkobmV3IERhdGUoKSkpO1xyXG4vLyAgICB9KTtcclxuLy8gIH0pO1xyXG4vL31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkgeyB9XHJcblxyXG5hbGxMb2NzKCk7XHJcbmdsb2JhbGl6ZUluaXQoJ2NzJyk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5kYXRlRnVsbChuZXcgRGF0ZSgpKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5wZXJjZW50MV8xKDEwIC8gMykpO1xyXG5nbG9iYWxpemVJbml0KCdkZScpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUuZGF0ZUZ1bGwobmV3IERhdGUoKSkpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucGVyY2VudDFfMSgxMCAvIDMpKTtcclxuXHJcbi8vY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImNzXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcbi8vY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImVuXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcblxyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8ZGl2PnthYm91dCgpfXtsb2dpblRlc3QoKX08L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xyXG4iXX0=