System.register(['rw-login/src/index', 'rw-login/src/test/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2;
    function about() {
        return "login: " + index_1.about() + ", app: about rw-app, loginTest: " + index_2.default();
    }
    exports_1("about", about);
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            alert(about());
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR0E7UUFDRSxNQUFNLENBQUMsWUFBVSxhQUFVLEVBQUUsd0NBQW1DLGVBQUksRUFBSSxDQUFDO0lBQzNFLENBQUM7SUFGRCx5QkFFQyxDQUFBOzs7Ozs7Ozs7O1lBRUQsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhYm91dCBhcyBsb2dpbkFib3V0IH0gZnJvbSAncnctbG9naW4vc3JjL2luZGV4JztcclxuaW1wb3J0IHRlc3QgZnJvbSAncnctbG9naW4vc3JjL3Rlc3QvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFib3V0KCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGBsb2dpbjogJHtsb2dpbkFib3V0KCl9LCBhcHA6IGFib3V0IHJ3LWFwcCwgbG9naW5UZXN0OiAke3Rlc3QoKX1gO1xyXG59XHJcblxyXG5hbGVydChhYm91dCgpKTsiXX0=