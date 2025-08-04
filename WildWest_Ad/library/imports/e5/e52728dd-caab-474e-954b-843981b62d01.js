"use strict";
cc._RF.push(module, 'e5272jdyqtHTpVLhDmBti0B', 'GuideScript');
// script/GuideScript.ts

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
var GameManager_1 = require("./qiuScript/GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GuideScript = /** @class */ (function (_super) {
    __extends(GuideScript, _super);
    function GuideScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handNode = null;
        _this.remindLabel = null;
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    GuideScript.prototype.onLoad = function () {
        this.handNode.setPosition(GameManager_1.default.Instance.btnNode.getPosition());
    };
    GuideScript.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    GuideScript.prototype.start = function () {
        var _this = this;
        var _a = gameConfig_1.default.getWord('guide'), string = _a.string, fontSize = _a.fontSize;
        this.remindLabel.string = string;
        this.remindLabel.fontSize = fontSize;
        this.scheduleOnce(function () {
            _this.node.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart, _this);
        }, 0.5);
        cc.tween(this.handNode)
            .repeatForever(cc.tween()
            .to(0.35, { scale: 0.8 })
            .delay(0.07)
            .to(0.35, { scale: 1.5 })
            .delay(0.07)
            .to(0.5, { scale: 1 }))
            .start();
    };
    GuideScript.prototype.onTouchStart = function (e) {
        if (this.callback) {
            this.callback();
        }
        this.node.destroy();
    };
    GuideScript.prototype.onTouchMove = function (e) {
    };
    __decorate([
        property(cc.Node)
    ], GuideScript.prototype, "handNode", void 0);
    __decorate([
        property(cc.RichText)
    ], GuideScript.prototype, "remindLabel", void 0);
    GuideScript = __decorate([
        ccclass
    ], GuideScript);
    return GuideScript;
}(cc.Component));
exports.default = GuideScript;

cc._RF.pop();