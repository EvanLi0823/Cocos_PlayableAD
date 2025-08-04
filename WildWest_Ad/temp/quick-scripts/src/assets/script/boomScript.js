"use strict";
cc._RF.push(module, 'cafc38D1O5O7psk2wCczTKk', 'boomScript');
// script/boomScript.ts

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
var boomScript = /** @class */ (function (_super) {
    __extends(boomScript, _super);
    function boomScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.smokeParticle = null;
        _this.fogParticle = null;
        _this.lightNode = null;
        _this.spreadRing = null;
        _this.innerRing = null;
        _this.outerRing = null;
        _this.Halo = null;
        _this.indexLabel = null;
        _this.targetRadius = null;
        _this.index = null;
        _this.rate = null;
        _this.time = 0;
        return _this;
        // update (dt) {}
    }
    boomScript.prototype.onDestroy = function () {
        // console.log(`boomScript onDestroy`); 
    };
    boomScript.prototype.onLoad = function () {
        var rate = 1.0;
        for (var i = 0; i < this.index; i++) {
            rate *= 0.9;
        }
        this.rate = rate;
        this.initData();
    };
    boomScript.prototype.start = function () {
        var _this = this;
        var scale = this.targetRadius * this.rate / 80.0;
        this.time = 0.65 * scale;
        this.spreadRing.scale = 0;
        this.lightNode.scale = 2.0 * this.rate * this.targetRadius / 278;
        cc.tween(this.lightNode)
            .delay(0.08)
            .to(0.02, { scale: 4.5 * this.rate * this.targetRadius / 278 })
            .call(function () {
            _this.smokeParticle.resetSystem();
        })
            .parallel(cc.tween().to(this.time * 0.5, { scale: 3.0 * this.rate * this.targetRadius / 278 }), cc.tween().call(function () {
            cc.tween(_this.spreadRing).to(_this.time * 0.5, { scale: 1.0 }).to(0.01, { opacity: 0 }).start();
            cc.tween(_this.Halo).to(_this.time * 0.5, { opacity: 0 }).start();
        }))
            .call(function () {
            cc.tween(_this.innerRing).to(_this.time * 0.3, { scale: 0.5, opacity: 0 }).start();
            cc.tween(_this.outerRing).to(_this.time * 0.6, { scale: 2, opacity: 0 }).start();
        })
            .delay(1.0)
            .call(function () {
            _this.node.destroy();
        })
            .start();
        cc.tween(this.indexLabel.node)
            .to(0.1, { scale: 1.5, opacity: 255 })
            .to(0.35, { scale: 0.6 })
            .to(0.35, { scale: 1.3 })
            .by(0.4, { scale: -1, opacity: -255, position: cc.v3(0, 50, 0) })
            .start();
        this.fogParticle.resetSystem();
    };
    boomScript.prototype.initData = function () {
        //         this.light03.width =  this.targetRadius;
        //         this.light03.height =  this.targetRadius;
        // 
        //         this.light04.width = this.targetRadius;
        //         this.light04.height = this.targetRadius; 
        this.smokeParticle.startSize = this.targetRadius / 2;
        this.smokeParticle.startSizeVar = this.targetRadius / 4;
        this.smokeParticle.endSize = this.targetRadius / 6;
        this.smokeParticle.endSizeVar = this.targetRadius / 12;
        this.smokeParticle.startRadius = this.targetRadius / 4;
        this.smokeParticle.startRadiusVar = this.targetRadius / 20;
        this.smokeParticle.endRadius = this.targetRadius * 2.5 * this.rate;
        this.smokeParticle.endRadiusVar = this.targetRadius / 100;
        // this.smokeParticle.life = this.time * 0.5;
        // this.smokeParticle.lifeVar = this.time * 0.1;
        // this.fogParticle.duration = 0.4 * this.rate;
        this.fogParticle.startRadius = this.targetRadius * 1.8 * this.rate;
        this.fogParticle.startRadiusVar = 20;
        this.fogParticle.endRadius = this.targetRadius * 3.0 * this.rate + this.targetRadius;
        this.fogParticle.endRadiusVar = this.targetRadius;
        this.indexLabel.string = "<color=#FFDB00><outline color=#FF8000 width=1>" + (this.index + 1) + "</outline></color>";
        this.indexLabel.node.setPosition(cc.v2(this.targetRadius / 2, this.targetRadius / 4));
    };
    __decorate([
        property(cc.ParticleSystem)
    ], boomScript.prototype, "smokeParticle", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], boomScript.prototype, "fogParticle", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "lightNode", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "spreadRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "innerRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "outerRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "Halo", void 0);
    __decorate([
        property(cc.RichText)
    ], boomScript.prototype, "indexLabel", void 0);
    boomScript = __decorate([
        ccclass
    ], boomScript);
    return boomScript;
}(cc.Component));
exports.default = boomScript;

cc._RF.pop();