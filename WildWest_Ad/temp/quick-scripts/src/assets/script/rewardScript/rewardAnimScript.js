"use strict";
cc._RF.push(module, '95d307sAchJQrtFQRLBUCLa', 'rewardAnimScript');
// script/rewardScript/rewardAnimScript.ts

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
var gameConfig_1 = require("../gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardAnimScript = /** @class */ (function (_super) {
    __extends(rewardAnimScript, _super);
    function rewardAnimScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.rpArray = [];
        _this.targetNode = null;
        _this.Ani = null;
        _this.targetPos = null;
        return _this;
    }
    rewardAnimScript.prototype.onLoad = function () {
        for (var i = 0; i < this.content.childrenCount; i++) {
            var sp = this.content.children[i].getComponent(cc.Sprite);
            gameConfig_1.default.setMoneySp(sp, 1);
        }
    };
    rewardAnimScript.prototype.start = function () {
        // this.movieToTarget();
    };
    __decorate([
        property(cc.Node)
    ], rewardAnimScript.prototype, "content", void 0);
    __decorate([
        property([cc.Node])
    ], rewardAnimScript.prototype, "rpArray", void 0);
    __decorate([
        property(cc.Node)
    ], rewardAnimScript.prototype, "targetNode", void 0);
    __decorate([
        property(cc.Animation)
    ], rewardAnimScript.prototype, "Ani", void 0);
    rewardAnimScript = __decorate([
        ccclass
    ], rewardAnimScript);
    return rewardAnimScript;
}(cc.Component));
exports.default = rewardAnimScript;

cc._RF.pop();