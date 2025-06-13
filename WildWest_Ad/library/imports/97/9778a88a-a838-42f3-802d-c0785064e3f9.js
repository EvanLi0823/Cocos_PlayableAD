"use strict";
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