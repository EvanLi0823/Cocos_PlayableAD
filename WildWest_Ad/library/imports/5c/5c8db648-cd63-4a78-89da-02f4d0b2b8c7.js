"use strict";
cc._RF.push(module, '5c8dbZIzWNKeInaAvTQsrjH', 'tireSteakScript');
// script/tireSteakScript.ts

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
var tireSteakScript = /** @class */ (function (_super) {
    __extends(tireSteakScript, _super);
    function tireSteakScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tireSteakNode = null;
        _this.particleNode = null;
        _this.spriteNode = null;
        _this.targetNode = null;
        _this.leftNode = null;
        _this.score = 0;
        _this.redbag = null;
        return _this;
    }
    tireSteakScript.prototype.onDestroy = function () {
    };
    tireSteakScript.prototype.onLoad = function () {
        var _this = this;
        this.targetNode = cc.find("Canvas/gameNode/gameLayer/UpRewardNode/bg3/moneyID/label");
        cc.resources.load("prefab/redbagPrefab", cc.Prefab, function (err, res) {
            if (res) {
                _this.redbag = cc.instantiate(res);
                _this.node.addChild(_this.redbag);
                _this.redbag.opacity = 0;
            }
        });
    };
    tireSteakScript.prototype.start = function () {
    };
    tireSteakScript.prototype.action = function () {
        var _this = this;
        var targetNode;
        targetNode = this.targetNode;
        var tartgetPos = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos1 = this.node.convertToNodeSpaceAR(tartgetPos);
        var pos = cc.v2(pos1.x + targetNode.width / 2, pos1.y);
        var MotionStreakComponent = this.tireSteakNode.getComponent(cc.MotionStreak);
        this.spriteNode.opacity = 255;
        MotionStreakComponent.stroke = 34;
        cc.tween(this.node)
            .parallel(cc.tween()
            .call(function () {
            _this.redbag.opacity = 255;
        })
            .delay(0.65)
            .call(function () {
            // let particleNode = cc.instantiate(this.particleNode);
            // particleNode.getComponent(cc.ParticleSystem).playOnLoad = true;
            // particleNode.getComponent(cc.ParticleSystem).autoRemoveOnFinish = true;
            // this.node.addChild(particleNode);
        }), cc.tween().bezierBy(1.0, cc.v2(pos.x / 4, 500), cc.v2(pos.x * 3 / 4, 500), pos)
            .call(function () {
            cc.tween(_this.spriteNode).to(0.5, { opacity: 0 }).start();
            _this.redbag.opacity = 0;
            // let particleNode = cc.instantiate(this.particleNode);
            // particleNode.getComponent(cc.ParticleSystem).playOnLoad = true;
            // particleNode.getComponent(cc.ParticleSystem).autoRemoveOnFinish = true;
            // this.node.addChild(particleNode);
            var dic = {};
            dic['Rp'] = 1000000;
            dic['R$'] = 350;
            dic['₩'] = 88000;
            var addUnit = (dic[gameConfig_1.default.getUnifyCurrency()] || 66) / 10;
            var oldReward = 0;
            cc.tween(targetNode)
                .repeat(9, cc.tween()
                .call(function () {
                oldReward = oldReward + addUnit;
                targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + oldReward.toFixed(2);
            })
                .to(0.06, { scale: 1.12 })
                .to(0.04, { scale: 1.0 })).call(function () {
                targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + (addUnit * 10).toFixed(2);
            })
                .start();
        })
            .delay(1.0)
            .call(function () {
            cc.resources.load("prefab/BigWinNode", cc.Prefab, function (err, res) {
                var prefab = cc.instantiate(res);
                cc.find("Canvas/gameNode").addChild(prefab);
            });
            _this.node.destroy();
            // window.gameEnd&&window.gameEnd();
        }))
            .start();
    };
    __decorate([
        property(cc.Node)
    ], tireSteakScript.prototype, "tireSteakNode", void 0);
    __decorate([
        property(cc.Node)
    ], tireSteakScript.prototype, "particleNode", void 0);
    __decorate([
        property(cc.Node)
    ], tireSteakScript.prototype, "spriteNode", void 0);
    tireSteakScript = __decorate([
        ccclass
    ], tireSteakScript);
    return tireSteakScript;
}(cc.Component));
exports.default = tireSteakScript;

cc._RF.pop();