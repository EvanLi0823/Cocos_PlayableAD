"use strict";
cc._RF.push(module, '29e835afYVFD6H36KhMdm5p', 'rewardTipScript');
// script/rewardScript/rewardTipScript.ts

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
var aduioTools_1 = require("../aduioTools");
var gameConfig_1 = require("../gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardTipScript = /** @class */ (function (_super) {
    __extends(rewardTipScript, _super);
    function rewardTipScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLable = null;
        _this.rewardLabel = null;
        _this.rewardTipImg = null;
        _this._rewardValue = 0;
        _this.reciveCallBack = null;
        _this.showOverCallBack = null;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(rewardTipScript.prototype, "rewardValue", {
        get: function () {
            return this._rewardValue;
        },
        set: function (rewardValue) {
            this._rewardValue = rewardValue;
            var result = rewardValue;
            result = gameConfig_1.default.getUnifyMoney(rewardValue, 1);
            this.rewardLabel.string = gameConfig_1.default.getWord("rewardTip", result).string;
        },
        enumerable: false,
        configurable: true
    });
    rewardTipScript.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.titleLable.string = gameConfig_1.default.getWord("gkTips").title;
        gameConfig_1.default.setMoneySp(this.rewardTipImg);
    };
    rewardTipScript.prototype.start = function () {
        var _this = this;
        aduioTools_1.default.playSimpleAduioEngine(aduioTools_1.engineType.pass);
        cc.tween(this.node)
            .to(0.2, { opacity: 255 })
            .delay(1)
            .call(function () {
            _this.reciveCallBack(_this.rewardValue);
        })
            .delay(0.9)
            .call(function () {
            _this.node.removeComponent(cc.BlockInputEvents);
        })
            .to(0.2, { opacity: 0 })
            .call(function () {
            if (_this.showOverCallBack) {
                _this.showOverCallBack();
            }
            _this.node.destroy();
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], rewardTipScript.prototype, "titleLable", void 0);
    __decorate([
        property(cc.Label)
    ], rewardTipScript.prototype, "rewardLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], rewardTipScript.prototype, "rewardTipImg", void 0);
    rewardTipScript = __decorate([
        ccclass
    ], rewardTipScript);
    return rewardTipScript;
}(cc.Component));
exports.default = rewardTipScript;

cc._RF.pop();