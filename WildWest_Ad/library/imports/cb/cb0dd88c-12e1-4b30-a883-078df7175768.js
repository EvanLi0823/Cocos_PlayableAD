"use strict";
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