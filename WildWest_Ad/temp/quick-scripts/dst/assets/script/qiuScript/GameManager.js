
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9778aiKqDhC84AtwHhQZOP5', 'GameManager');
// script/qiuScript/GameManager.ts

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
exports.GMZIndex = void 0;
var aduioTools_1 = require("../aduioTools");
var gameConfig_1 = require("../gameConfig");
var GuideScript_1 = require("../GuideScript");
var LocalAssetsManager_1 = require("../LocalAssetsManager");
var GMZIndex;
(function (GMZIndex) {
    GMZIndex[GMZIndex["rewardShow"] = 1] = "rewardShow";
    GMZIndex[GMZIndex["rewardAni"] = 2] = "rewardAni";
    GMZIndex[GMZIndex["finish_target"] = 3] = "finish_target";
    GMZIndex[GMZIndex["busTips"] = 4] = "busTips";
    GMZIndex[GMZIndex["gkPanel"] = 5] = "gkPanel";
})(GMZIndex = exports.GMZIndex || (exports.GMZIndex = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetQiu = null;
        _this.tempQiu = null;
        _this.trayBirdNode = null;
        _this.footNode = null;
        _this.scorePrefab = null;
        // @property(cc.Prefab)
        // qiuPrefab: cc.Prefab = null;
        _this.rewardAnimPrefab = null;
        _this.displayNode = null;
        // @property(cc.Label)
        // totalRewardlabel: cc.Label = null;
        _this.mergePerpetualCount = 0;
        _this.paTween = null;
        _this.isVibration = false;
        _this.qiuArray = [];
        _this.canvas = null;
        _this.tipLabel = null;
        _this.download = null;
        _this.spineNode = null;
        _this.spinebigwinNode = null;
        _this.spinBtn = null;
        _this.btnNode = null;
        _this.popup = null;
        _this.mergeCount = 0;
        _this.passCount = 0;
        _this.extraCount = 0;
        _this.isOver = false;
        _this.isClicked = false;
        _this.scoreNode = null;
        _this.bigwinNode = null;
        _this.isStopCounting = false; //网络请求或广告是停止计数
        _this._countingSwitch = true; //不是停止计数状态，还要操作碰撞了才能恢复计数，防止有连续合成的球自动计数
        return _this;
    }
    GameManager_1 = GameManager;
    Object.defineProperty(GameManager.prototype, "countingSwitch", {
        get: function () {
            return this._countingSwitch;
        },
        set: function (_countingSwitch) {
            this._countingSwitch = _countingSwitch;
        },
        enumerable: false,
        configurable: true
    });
    GameManager.prototype.onLoad = function () {
        if (GameManager_1.Instance != null) {
            GameManager_1.Instance.destroy();
        }
        gameConfig_1.default.setConfig();
        // console.log(`loading ---  start`);
        GameManager_1.Instance = this;
        cc.director.getPhysicsManager().enabled = true;
        if (cc.sys.os === cc.sys.OS_IOS) {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        }
        else {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        }
        this.spineNode.active = false;
        cc.tween(this.spinBtn.node)
            .repeatForever(cc.tween().sequence(cc.tween().to(1, { scale: 1.2 }), cc.tween().to(1, { scale: 1 })))
            .start();
    };
    /**-----------------------------slots------------------------------------ */
    //spin按钮点击
    GameManager.prototype.onSpineClick = function () {
        var _this = this;
        if (this.isClicked) {
            return;
        }
        this.isClicked = true;
        this.spineNode.active = true;
        var anim = this.spineNode.getComponent(cc.Animation);
        anim.once(cc.Animation.EventType.FINISHED, function () {
            setTimeout(function () {
                _this.showTireSteak();
            }, 200);
        }, this);
        anim.play();
    };
    //展示赢钱动画
    GameManager.prototype.showTireSteak = function () {
        var _this = this;
        console.log("showTireSteak");
        if (!this.bigwinNode) {
            cc.resources.load("prefab/BigWinNode", cc.Prefab, function (err, res) {
                if (err) {
                    console.error("Error loading BigWinNode prefab:", err);
                    return;
                }
                console.log("loading BigWinNode prefab:success");
                _this.bigwinNode = cc.instantiate(res);
                cc.find("Canvas/gameNode").addChild(_this.bigwinNode);
                _this.bigwinNode.active = true;
                var anim = _this.bigwinNode.getComponent(cc.Animation);
                anim.once(cc.Animation.EventType.FINISHED, function () {
                    anim.play("bigwinidle");
                    window.gameEnd && window.gameEnd();
                }, _this);
                // 先播idle
                anim.play("bigwin");
            });
        }
    };
    /**---------------------------------------------------------------------- */
    GameManager.prototype.start = function () {
        var _this = this;
        this.tipLabel.string = gameConfig_1.default.getWord("tipLbl");
        // this.download.string = gameConfig.getWord("download");
        cc.resources.load("prefab/GuidePrefab", cc.Prefab, function (err, res) {
            if (res) {
                var guideNode = cc.instantiate(res);
                _this.canvas.addChild(guideNode);
                guideNode.getComponent(GuideScript_1.default).callback = function () {
                    gameConfig_1.default.setGuideShow();
                    LocalAssetsManager_1.default.releasePrefab(res);
                    aduioTools_1.default.playBackgroundMusic();
                };
            }
        });
        window.gameReady && window.gameReady();
    };
    GameManager.prototype.showAddReward = function () {
        var rewardAnimNode = cc.instantiate(this.rewardAnimPrefab);
        this.node.addChild(rewardAnimNode, GMZIndex.rewardAni);
    };
    GameManager.prototype.gameSceneWillDisappear = function () {
        aduioTools_1.default.stopBackgroundMusic();
        this.pauseGame();
    };
    GameManager.prototype.pauseGame = function () {
        cc.director.pause();
        this.displayNode.pauseAllActions();
        aduioTools_1.default.pauseAllEffect();
    };
    GameManager.prototype.resumeGame = function () {
        cc.director.resume();
        this.displayNode.resumeAllActions();
        aduioTools_1.default.resuseAllEffect();
    };
    var GameManager_1;
    GameManager.Instance = null;
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "trayBirdNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "footNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "scorePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "rewardAnimPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "displayNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "canvas", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "download", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "spineNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "spinebigwinNode", void 0);
    __decorate([
        property(cc.Button)
    ], GameManager.prototype, "spinBtn", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "btnNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "popup", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "bigwinNode", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBcUQ7QUFDckQsNENBQWlGO0FBQ2pGLDhDQUF5QztBQUN6Qyw0REFBdUQ7QUFJdkQsSUFBWSxRQU1YO0FBTkQsV0FBWSxRQUFRO0lBQ2hCLG1EQUFjLENBQUE7SUFDZCxpREFBYSxDQUFBO0lBQ2IseURBQWlCLENBQUE7SUFDakIsNkNBQVcsQ0FBQTtJQUNYLDZDQUFXLENBQUE7QUFDZixDQUFDLEVBTlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFNbkI7QUFFSyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9NQztRQWhNRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3Qix1QkFBdUI7UUFDdkIsK0JBQStCO1FBRy9CLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixzQkFBc0I7UUFDdEIscUNBQXFDO1FBRXJDLHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBSTlCLFlBQU0sR0FBVSxJQUFJLENBQUE7UUFHcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFHekIs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SyxDQUFDO2lEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDRztJQVdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNTO0lBcEVWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvTS9CO0lBQUQsa0JBQUM7Q0FwTUQsQUFvTUMsQ0FwTXdDLEVBQUUsQ0FBQyxTQUFTLEdBb01wRDtrQkFwTW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWR1aW9Ub29scywge2VuZ2luZVR5cGV9IGZyb20gXCIuLi9hZHVpb1Rvb2xzXCI7XG5pbXBvcnQgZ2FtZUNvbmZpZywge0p1aWNlSXRlbSwgSnVpY2VJdGVtVHlwZSwgTGFuZ3VhZ2VUeXBlfSBmcm9tIFwiLi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IEd1aWRlU2NyaXB0IGZyb20gXCIuLi9HdWlkZVNjcmlwdFwiO1xuaW1wb3J0IExvY2FsQXNzZXRzTWFuYWdlciBmcm9tIFwiLi4vTG9jYWxBc3NldHNNYW5hZ2VyXCI7XG5cblxuXG5leHBvcnQgZW51bSBHTVpJbmRleCB7XG4gICAgcmV3YXJkU2hvdyA9IDEsXG4gICAgcmV3YXJkQW5pID0gMixcbiAgICBmaW5pc2hfdGFyZ2V0ID0gMyxcbiAgICBidXNUaXBzID0gNCxcbiAgICBna1BhbmVsID0gNSxcbn1cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudHtcblxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEdhbWVNYW5hZ2VyID0gbnVsbDtcblxuICAgIHRhcmdldFFpdTogY2MuTm9kZSA9IG51bGw7XG4gICAgdGVtcFFpdTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0cmF5QmlyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzY29yZVByZWZhYjpjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICAvLyBxaXVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHJld2FyZEFuaW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBkaXNwbGF5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgLy8gdG90YWxSZXdhcmRsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgbWVyZ2VQZXJwZXR1YWxDb3VudCA9IDA7XG4gICAgcGFUd2VlbjogY2MuVHdlZW4gPSBudWxsO1xuXG4gICAgaXNWaWJyYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBxaXVBcnJheTogQXJyYXk8Y2MuTm9kZT4gPSBbXTtcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FudmFzOmNjLk5vZGUgPW51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXBMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGRvd25sb2FkOmNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNwaW5lTm9kZTpjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNwaW5lYmlnd2luTm9kZTpjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgc3BpbkJ0bjpjYy5CdXR0b24gPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bk5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cDpjYy5Ob2RlID0gbnVsbDtcblxuICAgIG1lcmdlQ291bnQgPSAwO1xuICAgIHBhc3NDb3VudCA9IDA7XG5cbiAgICBleHRyYUNvdW50ID0gMDtcblxuICAgIGlzT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmlnd2luTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIGlzU3RvcENvdW50aW5nOiBib29sZWFuID0gZmFsc2U7IC8v572R57uc6K+35rGC5oiW5bm/5ZGK5piv5YGc5q2i6K6h5pWwXG4gICAgX2NvdW50aW5nU3dpdGNoOiBib29sZWFuID0gdHJ1ZTsgIC8v5LiN5piv5YGc5q2i6K6h5pWw54q25oCB77yM6L+Y6KaB5pON5L2c56Kw5pKe5LqG5omN6IO95oGi5aSN6K6h5pWw77yM6Ziy5q2i5pyJ6L+e57ut5ZCI5oiQ55qE55CD6Ieq5Yqo6K6h5pWwXG4gICAgc2V0IGNvdW50aW5nU3dpdGNoKF9jb3VudGluZ1N3aXRjaDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9jb3VudGluZ1N3aXRjaCA9IF9jb3VudGluZ1N3aXRjaDtcbiAgICB9XG5cbiAgICBnZXQgY291bnRpbmdTd2l0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudGluZ1N3aXRjaDtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmIChHYW1lTWFuYWdlci5JbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lQ29uZmlnLnNldENvbmZpZygpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBsb2FkaW5nIC0tLSAgc3RhcnRgKTtcbiAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UgPSB0aGlzOyAgICBcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gbmV3IGNjLlZlYzIoMCwgLTE3MDApO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IG5ldyBjYy5WZWMyKDAsIC0xNzAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IG5ldyBjYy5WZWMyKDAsIC0xNzAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwaW5lTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbkJ0bi5ub2RlKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLCB7c2NhbGU6IDEuMn0pLFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDEsIHtzY2FsZTogMX0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG4gICAgLyoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zbG90cy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLy9zcGlu5oyJ6ZKu54K55Ye7XG4gICAgb25TcGluZUNsaWNrKCl7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwaW5lTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgYW5pbSA9ICB0aGlzLnNwaW5lTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbS5vbmNlKGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcmVTdGVhaygpO1xuICAgICAgICAgICAgfSwgMjAwKTsgXG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBhbmltLnBsYXkoKVxuICAgIH1cbiAgICAvL+Wxleekuui1oumSseWKqOeUu1xuICAgIHNob3dUaXJlU3RlYWsoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93VGlyZVN0ZWFrXCIpXG5cbiAgICAgICAgaWYgKCF0aGlzLmJpZ3dpbk5vZGUpIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGBwcmVmYWIvQmlnV2luTm9kZWAsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBCaWdXaW5Ob2RlIHByZWZhYjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgQmlnV2luTm9kZSBwcmVmYWI6c3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ3dpbk5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVOb2RlXCIpLmFkZENoaWxkKHRoaXMuYmlnd2luTm9kZSlcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ3dpbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMuYmlnd2luTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICBhbmltLm9uY2UoY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbmltLnBsYXkoXCJiaWd3aW5pZGxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lRW5kJiZ3aW5kb3cuZ2FtZUVuZCgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vIOWFiOaSrWlkbGVcbiAgICAgICAgICAgICAgICBhbmltLnBsYXkoXCJiaWd3aW5cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiBcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwidGlwTGJsXCIpO1xuICAgICAgICAvLyB0aGlzLmRvd25sb2FkLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcImRvd25sb2FkXCIpO1xuICAgICAgICBcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvR3VpZGVQcmVmYWJcIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3VpZGVOb2RlID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkQ2hpbGQoZ3VpZGVOb2RlKTtcbiAgICAgICAgICAgICAgICBndWlkZU5vZGUuZ2V0Q29tcG9uZW50KEd1aWRlU2NyaXB0KS5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbmZpZy5zZXRHdWlkZVNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxBc3NldHNNYW5hZ2VyLnJlbGVhc2VQcmVmYWIocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYWR1aW9Ub29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcbiAgICB9XG5cbiAgICBzaG93QWRkUmV3YXJkKCkge1xuICAgICAgICBsZXQgcmV3YXJkQW5pbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJld2FyZEFuaW1QcmVmYWIpO1xuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChyZXdhcmRBbmltTm9kZSwgR01aSW5kZXgucmV3YXJkQW5pKTtcblxuICAgIH1cblxuICAgIGdhbWVTY2VuZVdpbGxEaXNhcHBlYXIoKTogdm9pZCB7XG4gICAgICAgIGFkdWlvVG9vbHMuc3RvcEJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSgpXG4gICAgfVxuXG4gICAgcGF1c2VHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlOb2RlLnBhdXNlQWxsQWN0aW9ucygpO1xuICAgICAgICBhZHVpb1Rvb2xzLnBhdXNlQWxsRWZmZWN0KCk7XG4gICAgfVxuXG4gICAgcmVzdW1lR2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheU5vZGUucmVzdW1lQWxsQWN0aW9ucygpO1xuICAgICAgICBhZHVpb1Rvb2xzLnJlc3VzZUFsbEVmZmVjdCgpO1xuICAgIH1cbn1cbiJdfQ==