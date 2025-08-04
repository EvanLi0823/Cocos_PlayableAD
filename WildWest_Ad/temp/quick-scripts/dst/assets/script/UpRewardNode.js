
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/UpRewardNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVXBSZXdhcmROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDJDQUFzQztBQUN0Qyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE4SEM7UUEzSEcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFBO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRzFCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFZLEtBQUssQ0FBQzs7UUFxR2pDLGlCQUFpQjtJQUNyQixDQUFDO0lBbkdHLDRCQUFLLEdBQUw7UUFBQSxpQkF3RkM7UUF2RkcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDdEIsa0NBQWtDO1lBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxvQkFBVSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxDQUFBO1FBRS9ELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMs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LE9BQU87T0FDYSxZQUFZLENBOEhoQztJQUFELG1CQUFDO0NBOUhELEFBOEhDLENBOUh5QyxFQUFFLENBQUMsU0FBUyxHQThIckQ7a0JBOUhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBnYW1lQ29uZmlnIGZyb20gXCIuL2dhbWVDb25maWdcIjtcbmltcG9ydCB7IFJlc01nciB9IGZyb20gXCIuL3V0aWxzL1Jlc01nclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBSZXdhcmROb2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBtb25leUljb246IGNjLlNwcml0ZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBtb25leUxhYmVsOiBjYy5MYWJlbCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBjYXNoT3V0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG5cbiAgICBidG5MYmw6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgc2hvd0ZpbmlzaE1vbmV5OiBCb29sZWFuID0gZmFsc2U7XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNoYW5nZVNwcml0ZSgpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZVNwcml0ZXRoZW5cIilcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gclxuICAgICAgICB9KVxuICAgICAgICAvLyBnYW1lQ29uZmlnLnNldE1vbmV5U3AodGhpcy5tb25leUljb24pXG4gICAgICAgIHRoaXMubW9uZXlMYWJlbC5zdHJpbmcgPSBnYW1lQ29uZmlnLmdldFVuaWZ5Q3VycmVuY3koKSArICcwLjAwJ1xuXG4gICAgICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcIk15QmFsYW5jZVwiKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYnRuTGJsKXtcbiAgICAgICAgICAgIGNvbnN0IHtzdHJpbmcsZm9udFNpemV9ID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwid2l0aGRyYXdcIik7XG4gICAgICAgICAgICB0aGlzLmJ0bkxibC5zdHJpbmcgPSBzdHJpbmc7XG4gICAgICAgICAgICB0aGlzLmJ0bkxibC5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhc2hPdXRMYWJlbCkge1xuICAgICAgICAgICAgY29uc3Qge3N0cmluZywgZm9udFNpemV9ID0gZ2FtZUNvbmZpZy5nZXRXb3JkKCdjYXNoT3V0VG9wJylcbiAgICAgICAgICAgIHRoaXMuY2FzaE91dExhYmVsLnN0cmluZyA9IHN0cmluZztcbiAgICAgICAgICAgIHRoaXMuY2FzaE91dExhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGRlbW/nmoTnu5PnrpfpobXpnaJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Tm9kZSAmJiB0aGlzLnNob3dGaW5pc2hNb25leSkge1xuICAgICAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuN1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpYzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICAgICAgICAgICAgZGljWydScCddID0gMTAwMDAwMFxuICAgICAgICAgICAgZGljWydSJCddID0gMzUwXG4gICAgICAgICAgICBkaWNbJ+KCqSddID0gODgwMDBcblxuICAgICAgICAgICAgbGV0IGFkZFVuaXQgPSAoZGljW2dhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpXSB8fCA2NikgLyAxMFxuICAgICAgICAgICAgbGV0IG9sZFJld2FyZCA9IDBcblxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50YXJnZXROb2RlKVxuICAgICAgICAgICAgICAgIC5yZXBlYXQoOSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFJld2FyZCA9IG9sZFJld2FyZCArIGFkZFVuaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRVbmlmeUN1cnJlbmN5KCkgKyBvbGRSZXdhcmQudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4wNiwgeyBzY2FsZTogMS4xMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDQsIHsgc2NhbGU6IDEuMCB9KVxuICAgICAgICAgICAgICAgICkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpICsgKGFkZFVuaXQgKiAxMCkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcblxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RmluaXNoTW9uZXkpIHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYi9yZXdhcmRBbmltXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZEFuaW0gPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRBbmltLnNjYWxlID0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hZGRDaGlsZChyZXdhcmRBbmltLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuZGVsYXkoMC4zKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvcmV3YXJkQW5pbVwiLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRBbmltID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQW5pbS5zZXRQb3NpdGlvbigxMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQW5pbS5zY2FsZSA9IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWRkQ2hpbGQocmV3YXJkQW5pbSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmRlbGF5KDAuMykuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3Jld2FyZEFuaW1cIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkQW5pbSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEFuaW0uc2V0UG9zaXRpb24oMCwgMTApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRBbmltLnNjYWxlID0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hZGRDaGlsZChyZXdhcmRBbmltLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcblxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cuZ2FtZUVuZCAmJiB3aW5kb3cuZ2FtZUVuZCgpO1xuICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNoYW5nZVNwcml0ZSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VTcHJpdGVcIilcbiAgICAgICAgbGV0IHBheTFzcCA9IGdhbWVDb25maWcuZ2V0VW5pZnlHdWlkZVBheSgwKTtcbiAgICAgICAgbGV0IHNwOiBhbnkgPSBhd2FpdCBSZXNNZ3IubG9hZFJlc291cmNlc0Fzc2V0KFwiaW1nL3BheWltZy9cIiArIHBheTFzcCwgY2MuU3ByaXRlRnJhbWUpXG4gICAgICAgIHJldHVybiBzcDtcbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=