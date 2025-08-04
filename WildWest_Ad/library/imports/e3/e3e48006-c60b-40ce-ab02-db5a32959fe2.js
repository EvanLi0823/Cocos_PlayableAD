"use strict";
cc._RF.push(module, 'e3e48AGxgtAzqsC21oylZ/i', 'UpRewardNode');
// script/UpRewardNode.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameConfig_1 = require("./gameConfig");
var ResMgr_1 = require("./utils/ResMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UpRewardNode = /** @class */ (function (_super) {
    __extends(UpRewardNode, _super);
    function UpRewardNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.moneyIcon = null;
        _this.moneyLabel = null;
        _this.targetNode = null;
        _this.title = null;
        _this.cashOutLabel = null;
        _this.btnLbl = null;
        _this.showFinishMoney = false;
        return _this;
        // update (dt) {}
    }
    UpRewardNode.prototype.start = function () {
        var _this = this;
        this.changeSprite().then(function (r) {
            // console.log("changeSpritethen")
            _this.sprite.spriteFrame = r;
        });
        // gameConfig.setMoneySp(this.moneyIcon)
        this.moneyLabel.string = gameConfig_1.default.getUnifyCurrency() + '0.00';
        if (this.title) {
            this.title.string = gameConfig_1.default.getWord("MyBalance");
        }
        if (this.btnLbl) {
            var _a = gameConfig_1.default.getWord("withdraw"), string = _a.string, fontSize = _a.fontSize;
            this.btnLbl.string = string;
            this.btnLbl.fontSize = fontSize;
        }
        if (this.cashOutLabel) {
            var _b = gameConfig_1.default.getWord('cashOutTop'), string = _b.string, fontSize = _b.fontSize;
            this.cashOutLabel.string = string;
            this.cashOutLabel.fontSize = fontSize;
        }
        // demo的结算页面
        if (this.targetNode && this.showFinishMoney) {
            if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
                this.node.scale = 0.7;
            }
            var dic = {};
            dic['Rp'] = 1000000;
            dic['R$'] = 350;
            dic['₩'] = 88000;
            var addUnit_1 = (dic[gameConfig_1.default.getUnifyCurrency()] || 66) / 10;
            var oldReward_1 = 0;
            cc.tween(this.targetNode)
                .repeat(9, cc.tween()
                .call(function () {
                oldReward_1 = oldReward_1 + addUnit_1;
                _this.targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + oldReward_1.toFixed(2);
            })
                .to(0.06, { scale: 1.12 })
                .to(0.04, { scale: 1.0 })).call(function () {
                _this.targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + (addUnit_1 * 10).toFixed(2);
            })
                .start();
            if (this.showFinishMoney) {
                cc.tween(this.node).call(function () {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, function (err, res) {
                        if (res) {
                            var rewardAnim = cc.instantiate(res);
                            rewardAnim.scale = 2;
                            _this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    });
                }).delay(0.3).call(function () {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, function (err, res) {
                        if (res) {
                            var rewardAnim = cc.instantiate(res);
                            rewardAnim.setPosition(10, 10);
                            rewardAnim.scale = 2;
                            _this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    });
                }).delay(0.3).call(function () {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, function (err, res) {
                        if (res) {
                            var rewardAnim = cc.instantiate(res);
                            rewardAnim.setPosition(0, 10);
                            rewardAnim.scale = 2;
                            _this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    });
                })
                    .start();
                // setTimeout(() => {
                //     window.gameEnd && window.gameEnd();
                // }, 2000);
            }
        }
    };
    UpRewardNode.prototype.changeSprite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pay1sp, sp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pay1sp = gameConfig_1.default.getUnifyGuidePay(0);
                        return [4 /*yield*/, ResMgr_1.ResMgr.loadResourcesAsset("img/payimg/" + pay1sp, cc.SpriteFrame)];
                    case 1:
                        sp = _a.sent();
                        return [2 /*return*/, sp];
                }
            });
        });
    };
    __decorate([
        property(cc.Sprite)
    ], UpRewardNode.prototype, "sprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], UpRewardNode.prototype, "moneyIcon", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UpRewardNode.prototype, "targetNode", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "cashOutLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "btnLbl", void 0);
    __decorate([
        property(cc.Boolean)
    ], UpRewardNode.prototype, "showFinishMoney", void 0);
    UpRewardNode = __decorate([
        ccclass
    ], UpRewardNode);
    return UpRewardNode;
}(cc.Component));
exports.default = UpRewardNode;

cc._RF.pop();