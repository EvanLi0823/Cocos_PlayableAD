
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
            }, 100);
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
                    if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.Mtg) {
                        //mtg打开下面这行
                        window.gameEnd && window.gameEnd();
                    }
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
        if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.Mtg) {
            window.gameReady && window.gameReady();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBcUQ7QUFDckQsNENBQWdHO0FBQ2hHLDhDQUF5QztBQUN6Qyw0REFBdUQ7QUFJdkQsSUFBWSxRQU1YO0FBTkQsV0FBWSxRQUFRO0lBQ2hCLG1EQUFjLENBQUE7SUFDZCxpREFBYSxDQUFBO0lBQ2IseURBQWlCLENBQUE7SUFDakIsNkNBQVcsQ0FBQTtJQUNYLDZDQUFXLENBQUE7QUFDZixDQUFDLEVBTlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFNbkI7QUFFSyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXVNQztRQW5NRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3Qix1QkFBdUI7UUFDdkIsK0JBQStCO1FBRy9CLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixzQkFBc0I7UUFDdEIscUNBQXFDO1FBRXJDLHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBSTlCLFlBQU0sR0FBVSxJQUFJLENBQUE7UUFHcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFHekIs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REFDVTtJQWE1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0c7SUFXckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUztJQXBFVixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBdU0vQjtJQUFELGtCQUFDO0NBdk1ELEFBdU1DLENBdk13QyxFQUFFLENBQUMsU0FBUyxHQXVNcEQ7a0JBdk1vQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkdWlvVG9vbHMsIHtlbmdpbmVUeXBlfSBmcm9tIFwiLi4vYWR1aW9Ub29sc1wiO1xuaW1wb3J0IGdhbWVDb25maWcsIHtKdWljZUl0ZW0sIEp1aWNlSXRlbVR5cGUsIExhbmd1YWdlVHlwZSxQbGF5YWJsZUFkVHlwZX0gZnJvbSBcIi4uL2dhbWVDb25maWdcIjtcbmltcG9ydCBHdWlkZVNjcmlwdCBmcm9tIFwiLi4vR3VpZGVTY3JpcHRcIjtcbmltcG9ydCBMb2NhbEFzc2V0c01hbmFnZXIgZnJvbSBcIi4uL0xvY2FsQXNzZXRzTWFuYWdlclwiO1xuXG5cblxuZXhwb3J0IGVudW0gR01aSW5kZXgge1xuICAgIHJld2FyZFNob3cgPSAxLFxuICAgIHJld2FyZEFuaSA9IDIsXG4gICAgZmluaXNoX3RhcmdldCA9IDMsXG4gICAgYnVzVGlwcyA9IDQsXG4gICAgZ2tQYW5lbCA9IDUsXG59XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnR7XG5cbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBHYW1lTWFuYWdlciA9IG51bGw7XG5cbiAgICB0YXJnZXRRaXU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHRlbXBRaXU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdHJheUJpcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2NvcmVQcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gcWl1UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICByZXdhcmRBbmltUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGlzcGxheU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIC8vIHRvdGFsUmV3YXJkbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIG1lcmdlUGVycGV0dWFsQ291bnQgPSAwO1xuICAgIHBhVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuICAgIGlzVmlicmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgcWl1QXJyYXk6IEFycmF5PGNjLk5vZGU+ID0gW107XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhbnZhczpjYy5Ob2RlID1udWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlwTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBkb3dubG9hZDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzcGluZU5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzcGluZWJpZ3dpbk5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHNwaW5CdG46Y2MuQnV0dG9uID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Ob2RlOmNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXA6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBtZXJnZUNvdW50ID0gMDtcbiAgICBwYXNzQ291bnQgPSAwO1xuXG4gICAgZXh0cmFDb3VudCA9IDA7XG5cbiAgICBpc092ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpZ3dpbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBpc1N0b3BDb3VudGluZzogYm9vbGVhbiA9IGZhbHNlOyAvL+e9kee7nOivt+axguaIluW5v+WRiuaYr+WBnOatouiuoeaVsFxuICAgIF9jb3VudGluZ1N3aXRjaDogYm9vbGVhbiA9IHRydWU7ICAvL+S4jeaYr+WBnOatouiuoeaVsOeKtuaAge+8jOi/mOimgeaTjeS9nOeisOaSnuS6huaJjeiDveaBouWkjeiuoeaVsO+8jOmYsuatouaciei/nue7reWQiOaIkOeahOeQg+iHquWKqOiuoeaVsFxuICAgIHNldCBjb3VudGluZ1N3aXRjaChfY291bnRpbmdTd2l0Y2g6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fY291bnRpbmdTd2l0Y2ggPSBfY291bnRpbmdTd2l0Y2g7XG4gICAgfVxuXG4gICAgZ2V0IGNvdW50aW5nU3dpdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRpbmdTd2l0Y2g7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZUNvbmZpZy5zZXRDb25maWcoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgbG9hZGluZyAtLS0gIHN0YXJ0YCk7XG4gICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlID0gdGhpczsgICAgXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IG5ldyBjYy5WZWMyKDAsIC0xNzAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBuZXcgY2MuVmVjMigwLCAtMTcwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBuZXcgY2MuVmVjMigwLCAtMTcwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGluZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5CdG4ubm9kZSlcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMSwge3NjYWxlOiAxLjJ9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLCB7c2NhbGU6IDF9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuICAgIC8qKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2xvdHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8vc3BpbuaMiemSrueCueWHu1xuICAgIG9uU3BpbmVDbGljaygpe1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFuaW0gPSAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ub25jZShjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXJlU3RlYWsoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7IFxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgYW5pbS5wbGF5KClcbiAgICB9XG4gICAgLy/lsZXnpLrotaLpkrHliqjnlLtcbiAgICBzaG93VGlyZVN0ZWFrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd1RpcmVTdGVha1wiKVxuXG4gICAgICAgIGlmICghdGhpcy5iaWd3aW5Ob2RlKSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgcHJlZmFiL0JpZ1dpbk5vZGVgLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgQmlnV2luTm9kZSBwcmVmYWI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIEJpZ1dpbk5vZGUgcHJlZmFiOnN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWd3aW5Ob2RlID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lTm9kZVwiKS5hZGRDaGlsZCh0aGlzLmJpZ3dpbk5vZGUpXG4gICAgICAgICAgICAgICAgdGhpcy5iaWd3aW5Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmJpZ3dpbk5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgYW5pbS5vbmNlKGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5wbGF5KFwiYmlnd2luaWRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVDb25maWcuZ2V0UGxheWFibGVBZFR5cGUgPT09IFBsYXlhYmxlQWRUeXBlLk10Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9tdGfmiZPlvIDkuIvpnaLov5nooYxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lRW5kJiZ3aW5kb3cuZ2FtZUVuZCgpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vIOWFiOaSrWlkbGVcbiAgICAgICAgICAgICAgICBhbmltLnBsYXkoXCJiaWd3aW5cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiBcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwidGlwTGJsXCIpO1xuICAgICAgICAvLyB0aGlzLmRvd25sb2FkLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcImRvd25sb2FkXCIpO1xuICAgICAgICBcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvR3VpZGVQcmVmYWJcIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3VpZGVOb2RlID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkQ2hpbGQoZ3VpZGVOb2RlKTtcbiAgICAgICAgICAgICAgICBndWlkZU5vZGUuZ2V0Q29tcG9uZW50KEd1aWRlU2NyaXB0KS5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbmZpZy5zZXRHdWlkZVNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxBc3NldHNNYW5hZ2VyLnJlbGVhc2VQcmVmYWIocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYWR1aW9Ub29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGdhbWVDb25maWcuZ2V0UGxheWFibGVBZFR5cGUgPT09IFBsYXlhYmxlQWRUeXBlLk10Zykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93QWRkUmV3YXJkKCkge1xuICAgICAgICBsZXQgcmV3YXJkQW5pbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJld2FyZEFuaW1QcmVmYWIpO1xuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChyZXdhcmRBbmltTm9kZSwgR01aSW5kZXgucmV3YXJkQW5pKTtcblxuICAgIH1cblxuICAgIGdhbWVTY2VuZVdpbGxEaXNhcHBlYXIoKTogdm9pZCB7XG4gICAgICAgIGFkdWlvVG9vbHMuc3RvcEJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSgpXG4gICAgfVxuXG4gICAgcGF1c2VHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlOb2RlLnBhdXNlQWxsQWN0aW9ucygpO1xuICAgICAgICBhZHVpb1Rvb2xzLnBhdXNlQWxsRWZmZWN0KCk7XG4gICAgfVxuXG4gICAgcmVzdW1lR2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheU5vZGUucmVzdW1lQWxsQWN0aW9ucygpO1xuICAgICAgICBhZHVpb1Rvb2xzLnJlc3VzZUFsbEVmZmVjdCgpO1xuICAgIH1cbn1cbiJdfQ==