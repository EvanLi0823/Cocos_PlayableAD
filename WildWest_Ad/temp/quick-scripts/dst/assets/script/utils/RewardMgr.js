
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/RewardMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvUmV3YXJkTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFHQSxDQUFDO0lBRmlCLGdCQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQ3RELGlCQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7SUFDdEUsZ0JBQUM7Q0FIRCxBQUdDLElBQUE7QUFIWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXdhcmRNZ3J7XG4gICAgcHVibGljIHN0YXRpYyByYWRpdXMgPSBbMjksNDAsNDgsNDgsNjIsNzMsODMsOTEsMTAyLDEyNiwxMzZdOyAvL+WchuW9ouWNiuW+hFxuICAgIHB1YmxpYyBzdGF0aWMgb2Zmc2V0WSA9IFstNSwwLCAwLC0yLCAwLC0yLDAsMCwtNSwwLDRdOyAvL+eisOaSnue7hOS7tnnovbTlgY/np7vph49cbn1cbiJdfQ==