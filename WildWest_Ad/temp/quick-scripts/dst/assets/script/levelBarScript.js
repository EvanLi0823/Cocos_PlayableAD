
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/levelBarScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbGV2ZWxCYXJTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUs1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdDQztRQTVCRyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUc5QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O1FBd0JqQyxpQkFBaUI7SUFDckIsQ0FBQztJQXZCSyxlQUFlO0lBQ2pCLDhCQUFLLEdBQUw7UUFDSSxJQUFJLFlBQVksR0FBRywwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxtREFBaUQsWUFBWSx1QkFBb0IsQ0FBQztRQUMzRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDM0UsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxZQUFZLEdBQUcsMEJBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkUsSUFBSSxRQUFRLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxtREFBaUQsUUFBUSx1QkFBb0IsQ0FBQztRQUN2RywwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUdELG1DQUFVLEdBQVY7UUFDSSxJQUFJLFlBQVksR0FBRywwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVuRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxtREFBaUQsWUFBWSx1QkFBb0IsQ0FBQztJQUUvRyxDQUFDO0lBekJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0RBQ1E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDYztJQVBoQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBZ0NsQztJQUFELHFCQUFDO0NBaENELEFBZ0NDLENBaEMyQyxFQUFFLENBQUMsU0FBUyxHQWdDdkQ7a0JBaENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IGxvY2FsRGF0YU1hbmFnZXIgZnJvbSBcIi4vbG9jYWxEYXRhTWFuYWdlclwiO1xuaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi9QbGF0Zm9ybUludGVyYWN0aW9uL0pzYlNka1NjcmlwdFwiO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL3FpdVNjcmlwdC9HYW1lTWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGV2ZWxCYXJTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgbGV2ZWxMYWJlbDpjYy5SaWNoVGV4dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWxSZW1pbmRMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U2NvcmVDb3VudCgpO1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gYDxjb2xvcj0jRkZGRkZGPjxvdXRsaW5lIGNvbG9yPSNDRDREMDAgd2lkdGg9Mj4ke2N1cnJlbnRTY29yZX08L291dGxpbmU+PC9jb2xvcj5gO1xuICAgICAgICB0aGlzLmxldmVsUmVtaW5kTGFiZWwuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwic2NvcmVcIikuc3RyaW5nICsgXCLvvJpcIlxuICAgIH1cblxuICAgIGFkZFNjb3JlKHNjb3JlKXsgXG4gICAgICAgIGxldCBjdXJyZW50U2NvcmUgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmdldFNjb3JlQ291bnQoKTtcbiAgICAgICAgbGV0IG5ld1Njb3JlID0gY3VycmVudFNjb3JlICsgc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBgPGNvbG9yPSNGRkZGRkY+PG91dGxpbmUgY29sb3I9I0NENEQwMCB3aWR0aD0yPiR7bmV3U2NvcmV9PC9vdXRsaW5lPjwvY29sb3I+YDtcbiAgICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRTY29yZUNvdW50KG5ld1Njb3JlKTtcbiAgICB9XG5cblxuICAgIHJlU2V0U3RhdGUoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U2NvcmVDb3VudCgpO1xuXG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBgPGNvbG9yPSNGRkZGRkY+PG91dGxpbmUgY29sb3I9I0NENEQwMCB3aWR0aD0yPiR7Y3VycmVudFNjb3JlfTwvb3V0bGluZT48L2NvbG9yPmA7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufSJdfQ==