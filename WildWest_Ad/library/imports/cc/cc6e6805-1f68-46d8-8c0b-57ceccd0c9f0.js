"use strict";
cc._RF.push(module, 'cc6e6gFH2hG2IwLV87M0Mnw', 'MoneyAnimation');
// script/MoneyAnimation.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
function randomMinus1To1() {
    return Math.random() * 2 - 1;
}
var MoneyAnimation = /** @class */ (function (_super) {
    __extends(MoneyAnimation, _super);
    function MoneyAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moneyPrefab = null;
        _this.emitCount = 8; // 发射数量
        _this.speed = 300; // 速度（像素/秒）
        _this.rotateSpeed = 360; // 旋转速度（度/秒）
        return _this;
    }
    MoneyAnimation.prototype.onLoad = function () {
        // 确保moneyPrefab已设置
        if (!this.moneyPrefab) {
            cc.error("Money prefab is not set!");
            return;
        }
        this.emitMoney();
    };
    /**
     * 调用该函数触发飞钱动画
     */
    MoneyAnimation.prototype.emitMoney = function () {
        var center = cc.v2(0, 0); // 本节点为中心（相对当前节点坐标）
        var radius = 200; // 飞行半径
        var _loop_1 = function (i) {
            // 每个物体的发射角
            var angle = (2 * Math.PI / this_1.emitCount) * i + randomMinus1To1() * 0.1;
            var direction = cc.v2(Math.cos(angle), Math.sin(angle));
            var dest = center.add(direction.mul(radius));
            // 实例化money对象
            var moneyNode = cc.instantiate(this_1.moneyPrefab);
            moneyNode.parent = this_1.node;
            moneyNode.setPosition(center);
            moneyNode.setScale(0.7);
            var distance = center.sub(dest).mag();
            var duration = distance / this_1.speed;
            // 旋转目标
            var finalAngle = this_1.rotateSpeed * duration;
            // 用 cc.tween 添加飞行和旋转动画（2.2.1支持cc.tween）
            cc.tween(moneyNode)
                .to(duration, {
                position: cc.v3(dest.x, dest.y, 0),
                angle: finalAngle
            }, { easing: 'sineInOut' })
                .call(function () {
                moneyNode.destroy();
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < this.emitCount; ++i) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], MoneyAnimation.prototype, "moneyPrefab", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "emitCount", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "speed", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "rotateSpeed", void 0);
    MoneyAnimation = __decorate([
        ccclass
    ], MoneyAnimation);
    return MoneyAnimation;
}(cc.Component));
exports.default = MoneyAnimation;

cc._RF.pop();