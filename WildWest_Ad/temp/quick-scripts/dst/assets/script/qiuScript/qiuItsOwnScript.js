
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/qiuItsOwnScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L3FpdUl0c093blNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsMkRBQW1FO0FBQ25FLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW9FQztRQWhFRyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFJakMsaUJBQVcsR0FBYyxJQUFJLENBQUM7O1FBMkQ5QixpQkFBaUI7SUFDckIsQ0FBQztJQTFERyxlQUFlO0lBRWYsK0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBYTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDRCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMs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QUFDO3dEQUNVO0lBUmIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW9FbkM7SUFBRCxzQkFBQztDQXBFRCxBQW9FQyxDQXBFNEMsRUFBRSxDQUFDLFNBQVMsR0FvRXhEO2tCQXBFb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHFpdUNvbGxpc2lvblNjcmlwdCwgeyBRaXVJbmZvIH0gZnJvbSBcIi4vcWl1Q29sbGlzaW9uU2NyaXB0XCI7XG5pbXBvcnQgcWl1TW92ZVNjcmlwdCBmcm9tIFwiLi9xaXVNb3ZlU2NyaXB0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBxaXVJdHNPd25TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXG4gICAgZ2FyeU1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZGVzdHJveUJvb206IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdChpbmZvOiBRaXVJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdFwiLGluZm8pO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkuaW5pdERhdGEoaW5mby5pbmRleCk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihpbmZvLnBvcylcblxuICAgICAgICBpZiAoaW5mby5yaWdpZEJvZHlUeXBlID09IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChxaXVNb3ZlU2NyaXB0KS5pc0NvbGxzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gaW5mby5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5hd2FrZU9uTG9hZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS50ZW1wUWl1ID0gdGhpcy5ub2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZkRlc3Ryb3koY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicWl1XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ2FyeU1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ2FyeU1hdGVyaWFsKTtcblxuICAgICAgICBsZXQgYm9vbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRlc3Ryb3lCb29tKTtcblxuICAgICAgICBib29tTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0U2l6ZSA9IHRoaXMubm9kZS53aWR0aCAqIDMuMCAvIDQ7XG5cbiAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRTaXplID0gdGhpcy5ub2RlLndpZHRoICogMS4wIC8gMTY7XG5cbiAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRSYWRpdXMgPSB0aGlzLm5vZGUud2lkdGggKiAwLjg7XG5cbiAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRSYWRpdXNWYXIgPSB0aGlzLm5vZGUud2lkdGggKiAwLjggKiAwLjE7XG5cbiAgICAgICAgYm9vbU5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChib29tTm9kZSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5hcHBseSgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjI1LCB7IHNjYWxlOiAwIH0pLFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuZGVsYXkoMC4xKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==