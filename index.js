System.register(['rw-login/index', 'rw-login/test/index', 'react', 'react-dom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, react_1, react_dom_1;
    function about() {
        return "login: " + index_1.about() + ", app: about rw-app";
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            }],
        execute: function() {
            react_dom_1.default.render(react_1.default.createElement("div", null, 
                about(), 
                index_2.default()), document.getElementById('content'));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUtBO1FBQ0UsTUFBTSxDQUFDLFlBQVUsYUFBVSxFQUFFLHdCQUFxQixDQUFDO0lBQ3JELENBQUM7SUFGRCx5QkFFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O1lBRUQsbUJBQVEsQ0FBQyxNQUFNLENBQUMsK0JBQUMsR0FBRztnQkFBRSxLQUFLLEVBQUc7Z0JBQUMsZUFBSSxFQUFHLENBQU0sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhYm91dCBhcyBsb2dpbkFib3V0IH0gZnJvbSAncnctbG9naW4vaW5kZXgnO1xyXG5pbXBvcnQgdGVzdCBmcm9tICdydy1sb2dpbi90ZXN0L2luZGV4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWJvdXQoKTogc3RyaW5nIHtcclxuICByZXR1cm4gYGxvZ2luOiAke2xvZ2luQWJvdXQoKX0sIGFwcDogYWJvdXQgcnctYXBwYDtcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxkaXY+e2Fib3V0KCl9e3Rlc3QoKX08L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xyXG4iXX0=