"use strict";
cc._RF.push(module, 'e1256/cwMJFx4ig41ZJKszc', 'BigWinNode');
// script/BigWinNode.ts

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
var gameConfig_1 = require("./gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BigWinNode = /** @class */ (function (_super) {
    __extends(BigWinNode, _super);
    function BigWinNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.download = null;
        _this.cashLabel = null;
        _this.cashImage = null;
        return _this;
    }
    BigWinNode.prototype.onLoad = function () {
        var _a = gameConfig_1.default.getWord('cashOut'), string = _a.string, fontSize = _a.fontSize;
        this.download.string = string;
        this.download.fontSize = fontSize;
        // let addUnit = gameConfig.getUnityMoneyNumber(300.00);
        // this.cashLabel.string =  gameConfig.getUnifyCurrency() + addUnit.toFixed(2);
    };
    BigWinNode.prototype.start = function () {
        var addUnit = gameConfig_1.default.getUnityMoneyNumber(300.00);
        this.runNumberTween(0, addUnit, 1.0);
    };
    BigWinNode.prototype.runNumberTween = function (from, to, duration) {
        var _this = this;
        var obj = { value: from };
        cc.tween(obj)
            .to(duration, { value: to }, {
            onUpdate: function (target) {
                // 精确到两位小数
                _this.cashLabel.string = gameConfig_1.default.getUnifyCurrency() + target.value.toFixed(0);
                setTimeout(function () {
                    _this.cashImage.setPosition(cc.v2(90 - _this.cashLabel.node.width / 2 - 100, _this.cashImage.getPosition().y));
                }, 0);
            }
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], BigWinNode.prototype, "download", void 0);
    __decorate([
        property(cc.Label)
    ], BigWinNode.prototype, "cashLabel", void 0);
    __decorate([
        property(cc.Node)
    ], BigWinNode.prototype, "cashImage", void 0);
    BigWinNode = __decorate([
        ccclass
    ], BigWinNode);
    return BigWinNode;
}(cc.Component));
exports.default = BigWinNode;
// update (dt) {}

cc._RF.pop();