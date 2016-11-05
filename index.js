System.register(['rw-login/index', 'rw-login/test/index', 'rw-lib/index', 'react', 'react-dom', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/observable/from'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, react_1, react_dom_1, Observable_1;
    var example, subscribe;
    function about() {
        return "lib: " + index_3.about() + ", login: " + index_1.about() + ", app: about rw-app";
    }
    exports_1("about", about);
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
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            example = Observable_1.Observable.from([1, 2, 3, 4, 5]).map(function (val) { return val + 10; });
            subscribe = example.subscribe(function (val) { return console.log(val); });
            react_dom_1.default.render(react_1.default.createElement("div", null, 
                about(), 
                index_2.default()), document.getElementById('content'));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVdNLE9BQU8sRUFDUCxTQUFTO0lBRWY7UUFDRSxNQUFNLENBQUMsVUFBUSxhQUFPLEVBQUUsaUJBQVksYUFBVSxFQUFFLHdCQUFxQixDQUFDO0lBQ3hFLENBQUM7SUFGRCx5QkFFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFMSyxPQUFPLEdBQUcsdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEdBQUcsRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO1lBQ2hFLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBTTdELG1CQUFRLENBQUMsTUFBTSxDQUFDLCtCQUFDLEdBQUc7Z0JBQUUsS0FBSyxFQUFHO2dCQUFDLGVBQVMsRUFBRyxDQUFNLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWJvdXQgYXMgbG9naW5BYm91dCB9IGZyb20gJ3J3LWxvZ2luL2luZGV4JztcclxuaW1wb3J0IGxvZ2luVGVzdCBmcm9tICdydy1sb2dpbi90ZXN0L2luZGV4JztcclxuaW1wb3J0IHsgYWJvdXQgYXMgbGliVGVzdCB9IGZyb20gJ3J3LWxpYi9pbmRleCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuLy9pbXBvcnQgcnggZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbSc7XHJcbmNvbnN0IGV4YW1wbGUgPSBPYnNlcnZhYmxlLmZyb20oWzEsIDIsIDMsIDQsIDVdKS5tYXAodmFsID0+IHZhbCArIDEwKTtcclxuY29uc3Qgc3Vic2NyaWJlID0gZXhhbXBsZS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFib3V0KCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGBsaWI6ICR7bGliVGVzdCgpfSwgbG9naW46ICR7bG9naW5BYm91dCgpfSwgYXBwOiBhYm91dCBydy1hcHBgO1xyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPGRpdj57YWJvdXQoKX17bG9naW5UZXN0KCl9PC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcclxuIl19