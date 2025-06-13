
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tireSteakScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdGlyZVN0ZWFrU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTBHQztRQXZHRyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVcsSUFBSSxDQUFBO1FBRXZCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFFakIsWUFBTSxHQUFXLElBQUksQ0FBQTs7SUF5RnpCLENBQUM7SUF0RkcsbUNBQVMsR0FBVDtJQUVBLENBQUM7SUFDRCxnQ0FBTSxHQUFOO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDekQsSUFBSSxHQUFHLEVBQUM7Z0JBQ0osS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQTJCLENBQUMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7YUFDMUI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdD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QVMsR0EwR3hEO2tCQTFHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsZXZlbEJhclNjcmlwdCBmcm9tIFwiLi9sZXZlbEJhclNjcmlwdFwiO1xuaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IFRhcmdldHFpdVNjcmlwdCBmcm9tIFwiLi9UYXJnZXRTY3JpcHQvVGFyZ2V0cWl1U2NyaXB0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aXJlU3RlYWtTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlyZVN0ZWFrTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYXJ0aWNsZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3ByaXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICB0YXJnZXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGxlZnROb2RlOmNjLk5vZGUgPSBudWxsXG5cbiAgICBzY29yZTpudW1iZXIgPSAwO1xuXG4gICAgcmVkYmFnOmNjLk5vZGUgPSBudWxsXG5cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gY2MuZmluZChcIkNhbnZhcy9nYW1lTm9kZS9nYW1lTGF5ZXIvVXBSZXdhcmROb2RlL2JnMy9tb25leUlEL2xhYmVsXCIpO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYi9yZWRiYWdQcmVmYWJcIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVkYmFnID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIHVua25vd24gYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5yZWRiYWcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVkYmFnLm9wYWNpdHkgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBhY3Rpb24oKSB7XG4gICAgICAgIGxldCB0YXJnZXROb2RlXG4gICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldE5vZGVcbiAgICAgICAgbGV0IHRhcnRnZXRQb3MgPSB0YXJnZXROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCBwb3MxID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcnRnZXRQb3MpO1xuICAgICAgICBsZXQgcG9zID0gY2MudjIocG9zMS54ICsgdGFyZ2V0Tm9kZS53aWR0aCAvIDIsIHBvczEueSk7XG4gICAgICAgIGxldCBNb3Rpb25TdHJlYWtDb21wb25lbnQgPSB0aGlzLnRpcmVTdGVha05vZGUuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgICAgIHRoaXMuc3ByaXRlTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBNb3Rpb25TdHJlYWtDb21wb25lbnQuc3Ryb2tlID0gMzQ7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkYmFnLm9wYWNpdHkgPSAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC42NSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHBhcnRpY2xlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFydGljbGVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnBsYXlPbkxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVOb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuYXV0b1JlbW92ZU9uRmluaXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChwYXJ0aWNsZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJlemllckJ5KDEuMCwgY2MudjIocG9zLnggLyA0LCA1MDApLCBjYy52Mihwb3MueCAqIDMgLyA0LCA1MDApLCBwb3MpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3ByaXRlTm9kZSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGJhZy5vcGFjaXR5ID0gMFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcGFydGljbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYXJ0aWNsZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVOb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkucGxheU9uTG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5hdXRvUmVtb3ZlT25GaW5pc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKHBhcnRpY2xlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGljOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGljWydScCddID0gMTAwMDAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY1snUiQnXSA9IDM1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY1sn4oKpJ10gPSA4ODAwMFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZFVuaXQgPSAoZGljW2dhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpXSB8fCA2NikgLyAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRSZXdhcmQgPSAwXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBlYXQoOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFJld2FyZCA9IG9sZFJld2FyZCArIGFkZFVuaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBnYW1lQ29uZmlnLmdldFVuaWZ5Q3VycmVuY3koKSArIG9sZFJld2FyZC50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDYsIHtzY2FsZTogMS4xMn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDQsIHtzY2FsZTogMS4wfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpICsgKGFkZFVuaXQqMTApLnRvRml4ZWQoMil9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMS4wKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgcHJlZmFiL0JpZ1dpbk5vZGVgLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVOb2RlXCIpLmFkZENoaWxkKHByZWZhYilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cuZ2FtZUVuZCYmd2luZG93LmdhbWVFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==