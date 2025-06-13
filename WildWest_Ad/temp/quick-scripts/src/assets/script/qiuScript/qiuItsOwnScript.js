"use strict";
cc._RF.push(module, '3cf020D4PhPz79+E2fizocw', 'qiuItsOwnScript');
// script/qiuScript/qiuItsOwnScript.ts

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
var GameManager_1 = require("./GameManager");
var qiuCollisionScript_1 = require("./qiuCollisionScript");
var qiuMoveScript_1 = require("./qiuMoveScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var qiuItsOwnScript = /** @class */ (function (_super) {
    __extends(qiuItsOwnScript, _super);
    function qiuItsOwnScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.garyMaterial = null;
        _this.destroyBoom = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    qiuItsOwnScript.prototype.start = function () {
    };
    qiuItsOwnScript.prototype.init = function (info) {
        console.log("init", info);
        this.node.getComponent(qiuCollisionScript_1.default).initData(info.index);
        this.node.setPosition(info.pos);
        if (info.rigidBodyType == cc.RigidBodyType.Dynamic) {
            this.node.getComponent(qiuMoveScript_1.default).isCollsion = true;
            this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
            this.node.getComponent(cc.RigidBody).linearVelocity = info.speed;
            this.node.getComponent(cc.RigidBody).awakeOnLoad = true;
        }
        else {
            GameManager_1.default.Instance.targetQiu = this.node;
            GameManager_1.default.Instance.tempQiu = this.node;
        }
    };
    qiuItsOwnScript.prototype.selfDestroy = function (callBack) {
        var _this = this;
        this.node.getChildByName("qiu").getComponent(cc.Sprite).setMaterial(0, this.garyMaterial);
        this.node.getChildByName("txt").getComponent(cc.Sprite).setMaterial(0, this.garyMaterial);
        var boomNode = cc.instantiate(this.destroyBoom);
        boomNode.getComponent(cc.ParticleSystem).startSize = this.node.width * 3.0 / 4;
        boomNode.getComponent(cc.ParticleSystem).endSize = this.node.width * 1.0 / 16;
        boomNode.getComponent(cc.ParticleSystem).endRadius = this.node.width * 0.8;
        boomNode.getComponent(cc.ParticleSystem).endRadiusVar = this.node.width * 0.8 * 0.1;
        boomNode.setPosition(this.node.position);
        this.node.parent.addChild(boomNode);
        this.node.getComponent(cc.PhysicsCircleCollider).radius = 0;
        this.node.getComponent(cc.PhysicsCircleCollider).apply();
        cc.tween(this.node)
            .parallel(cc.tween().to(0.25, { scale: 0 }), cc.tween().delay(0.1).call(function () {
            if (callBack) {
                callBack();
            }
        }))
            .call(function () {
            _this.node.destroy();
        })
            .start();
    };
    __decorate([
        property(cc.Material)
    ], qiuItsOwnScript.prototype, "garyMaterial", void 0);
    __decorate([
        property(cc.Prefab)
    ], qiuItsOwnScript.prototype, "destroyBoom", void 0);
    qiuItsOwnScript = __decorate([
        ccclass
    ], qiuItsOwnScript);
    return qiuItsOwnScript;
}(cc.Component));
exports.default = qiuItsOwnScript;

cc._RF.pop();