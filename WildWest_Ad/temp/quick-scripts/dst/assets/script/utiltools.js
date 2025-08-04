
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utiltools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb0ddiMEuFLMKiDB433F1do', 'utiltools');
// script/utiltools.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utiltools = /** @class */ (function () {
    function utiltools() {
    }
    utiltools.getRandom = function (m1, m2) {
        var min = Math.min(m1, m2);
        var max = Math.max(m1, m2);
        return min + Math.floor((Math.random() * (max - min)));
    };
    return utiltools;
}());
exports.default = utiltools;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVlBLENBQUM7SUFWVSxtQkFBUyxHQUFoQixVQUFpQixFQUFFLEVBQUcsRUFBRTtRQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRyxFQUFFLENBQUMsQ0FBQztRQUM3QixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBTUosZ0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIHV0aWx0b29scyAge1xuXG4gICAgc3RhdGljIGdldFJhbmRvbShtMSAsIG0yKSB7IFxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4obTEgLCBtMik7XG4gICAgICAgIGxldCBtYXggPSBNYXRoLm1heChtMSAsIG0yKTtcbiAgICAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoobWF4IC0gbWluKSkpXG4gICB9XG5cblxuXG4gICBcbiAgIFxufSJdfQ==