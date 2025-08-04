"use strict";
cc._RF.push(module, '0bfd5ENcClO45EknaolfCDQ', 'RewardMgr');
// script/utils/RewardMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardMgr = void 0;
var RewardMgr = /** @class */ (function () {
    function RewardMgr() {
    }
    RewardMgr.radius = [29, 40, 48, 48, 62, 73, 83, 91, 102, 126, 136]; //圆形半径
    RewardMgr.offsetY = [-5, 0, 0, -2, 0, -2, 0, 0, -5, 0, 4]; //碰撞组件y轴偏移量
    return RewardMgr;
}());
exports.RewardMgr = RewardMgr;

cc._RF.pop();