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
            //console.log(new Globalize("cs").dateFormatter({ date: "full" })(new Date()));
            //console.log(new Globalize("en").dateFormatter({ date: "full" })(new Date()));
            react_dom_1.default.render(react_1.default.createElement("div", null, 
                about(), 
                index_2.default()), document.getElementById('content'));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQTRCTSxPQUFPLEVBQ1AsU0FBUztJQUVmO1FBQ0UsTUFBTSxDQUFDLFVBQVEsYUFBTyxFQUFFLGlCQUFZLGFBQVUsRUFBRSx3QkFBcUIsQ0FBQztJQUN4RSxDQUFDO0lBRkQseUJBRUMsQ0FBQTtJQUVELDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGtEQUFrRDtJQUNsRCw4QkFBOEI7SUFDOUIsNEVBQTRFO0lBQzVFLHFGQUFxRjtJQUNyRixxRkFBcUY7SUFDckYsU0FBUztJQUNULE9BQU87SUFDUCxHQUFHO0lBRUgsa0JBQXlCLENBQUM7SUFBMUIsdUJBQTBCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW5CcEIsT0FBTyxHQUFHLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxHQUFHLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztZQUNoRSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQW9CN0Qsa0JBQU8sRUFBRSxDQUFDO1lBQ1YseUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyx5QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLHlCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEMsK0VBQStFO1lBQy9FLCtFQUErRTtZQUkvRSxtQkFBUSxDQUFDLE1BQU0sQ0FBQywrQkFBQyxHQUFHO2dCQUFFLEtBQUssRUFBRztnQkFBQyxlQUFTLEVBQUcsQ0FBTSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFib3V0IGFzIGxvZ2luQWJvdXQgfSBmcm9tICdydy1sb2dpbi9pbmRleCc7XHJcbmltcG9ydCBsb2dpblRlc3QgZnJvbSAncnctbG9naW4vdGVzdC9pbmRleCc7XHJcbmltcG9ydCB7IGFib3V0IGFzIGxpYlRlc3QgfSBmcm9tICdydy1saWIvaW5kZXgnO1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSwgcmVtb3ZlIH0gZnJvbSAncnctbGliL2xpYi9jb29raWUnO1xyXG5pbXBvcnQgYWxsTG9jcyBmcm9tICdydy1saWIvZ2xvYi9hbGwtbG9jcyc7XHJcbmltcG9ydCB7IGdsb2JhbGl6ZSwgZ2xvYmFsaXplSW5pdCB9IGZyb20gJ3J3LWxpYi9nbG9iL2dsb2JhbGl6ZSc7ICBcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG4vL2ltcG9ydCAnLi9nbG9iL2NzLmpzJztcclxuLy9pbXBvcnQgJ2dsb2JhbGl6ZSc7XHJcbi8vaW1wb3J0IGdsb2JhbGl6ZSBmcm9tIFwiZ2xvYmFsaXplLXJ1bnRpbWVcIjtcclxuXHJcbi8vZGVjbGFyZSBsZXQgR2xvYmFsaXplOiBHbG9iYWxpemVTdGF0aWM7XHJcbi8vdmFyIGdsb2JhbGl6ZSA9IEdsb2JhbGl6ZTtcclxuXHJcbi8vaW1wb3J0IHJ4IGZyb20gJ3J4anMvUngnO1xyXG4vL1N5c3RlbS5pbXBvcnQoJ2luZGV4LmpzJyk7XHJcblxyXG4vL2xldCBnbG9iRW4gPSBuZXcgZ2xvYmFsaXplKFwiZW5cIik7XHJcbi8vbGV0IGRhdGVGb3JtYXRlciA9IGdsb2JFbi5kYXRlRm9ybWF0dGVyKHsgZGF0ZTogXCJmdWxsXCIgfSk7XHJcbi8vbGV0IGR0ID0gZGF0ZUZvcm1hdGVyKG5ldyBEYXRlKCkpO1xyXG4vL2NvbnNvbGUubG9nKGR0KTtcclxuXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbSc7XHJcbmNvbnN0IGV4YW1wbGUgPSBPYnNlcnZhYmxlLmZyb20oWzEsIDIsIDMsIDQsIDVdKS5tYXAodmFsID0+IHZhbCArIDEwKTtcclxuY29uc3Qgc3Vic2NyaWJlID0gZXhhbXBsZS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFib3V0KCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGBsaWI6ICR7bGliVGVzdCgpfSwgbG9naW46ICR7bG9naW5BYm91dCgpfSwgYXBwOiBhYm91dCBydy1hcHBgO1xyXG59XHJcblxyXG4vL2RlY2xhcmUgdmFyIFN5c3RlbTogYW55O1xyXG4vL2V4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4vLyAgY29uc3QgbGFuZ3MgPSBbJ2VuJywgJ2NzJ107XHJcbi8vICBTeXN0ZW0uaW1wb3J0KCdnbG9iYWxpemUtcnVudGltZScpLnRoZW4obSA9PiB7XHJcbi8vICAgIHdpbmRvd1snR2xvYmFsaXplJ10gPSBtO1xyXG4vLyAgICBQcm9taXNlLmFsbChsYW5ncy5tYXAobCA9PiBTeXN0ZW0uaW1wb3J0KGBnbG9iLyR7bH0uanNgKSkpLnRoZW4ociA9PiB7XHJcbi8vICAgICAgY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImNzXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcbi8vICAgICAgY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImVuXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcbi8vICAgIH0pO1xyXG4vLyAgfSk7XHJcbi8vfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7IH1cclxuXHJcbmFsbExvY3MoKTtcclxuZ2xvYmFsaXplSW5pdCgnY3MnKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLmRhdGVGdWxsKG5ldyBEYXRlKCkpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnBlcmNlbnQxXzEoMTAgLyAzKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxEYXkoMSkpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsWWVhcigtMSkpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsV2VlaygyKSk7XHJcbmdsb2JhbGl6ZUluaXQoJ2RlJyk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5kYXRlRnVsbChuZXcgRGF0ZSgpKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5wZXJjZW50MV8xKDEwIC8gMykpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucmVsRGF5KDEpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFllYXIoLTEpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbFdlZWsoMikpO1xyXG5nbG9iYWxpemVJbml0KCdlbicpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUuZGF0ZUZ1bGwobmV3IERhdGUoKSkpO1xyXG5jb25zb2xlLmxvZyhnbG9iYWxpemUucGVyY2VudDFfMSgxMCAvIDMpKTtcclxuY29uc29sZS5sb2coZ2xvYmFsaXplLnJlbERheSgxKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxZZWFyKC0xKSk7XHJcbmNvbnNvbGUubG9nKGdsb2JhbGl6ZS5yZWxXZWVrKDIpKTtcclxuXHJcbi8vY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImNzXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcbi8vY29uc29sZS5sb2cobmV3IEdsb2JhbGl6ZShcImVuXCIpLmRhdGVGb3JtYXR0ZXIoeyBkYXRlOiBcImZ1bGxcIiB9KShuZXcgRGF0ZSgpKSk7XHJcblxyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8ZGl2PnthYm91dCgpfXtsb2dpblRlc3QoKX08L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xyXG4iXX0=