"use strict";
cc._RF.push(module, '60988TRggVIbIwthcjk33b8', 'levelBarScript');
// script/levelBarScript.ts

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
var localDataManager_1 = require("./localDataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var levelBarScript = /** @class */ (function (_super) {
    __extends(levelBarScript, _super);
    function levelBarScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.levelRemindLabel = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    levelBarScript.prototype.start = function () {
        var currentScore = localDataManager_1.default.shareManager().getScoreCount();
        this.levelLabel.string = "<color=#FFFFFF><outline color=#CD4D00 width=2>" + currentScore + "</outline></color>";
        this.levelRemindLabel.string = gameConfig_1.default.getWord("score").string + "：";
    };
    levelBarScript.prototype.addScore = function (score) {
        var currentScore = localDataManager_1.default.shareManager().getScoreCount();
        var newScore = currentScore + score;
        this.levelLabel.string = "<color=#FFFFFF><outline color=#CD4D00 width=2>" + newScore + "</outline></color>";
        localDataManager_1.default.shareManager().setScoreCount(newScore);
    };
    levelBarScript.prototype.reSetState = function () {
        var currentScore = localDataManager_1.default.shareManager().getScoreCount();
        this.levelLabel.string = "<color=#FFFFFF><outline color=#CD4D00 width=2>" + currentScore + "</outline></color>";
    };
    __decorate([
        property(cc.RichText)
    ], levelBarScript.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], levelBarScript.prototype, "levelRemindLabel", void 0);
    levelBarScript = __decorate([
        ccclass
    ], levelBarScript);
    return levelBarScript;
}(cc.Component));
exports.default = levelBarScript;

cc._RF.pop();