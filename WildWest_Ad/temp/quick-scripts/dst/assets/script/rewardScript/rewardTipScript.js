
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/rewardScript/rewardTipScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29e835afYVFD6H36KhMdm5p', 'rewardTipScript');
// script/rewardScript/rewardTipScript.ts

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
var aduioTools_1 = require("../aduioTools");
var gameConfig_1 = require("../gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardTipScript = /** @class */ (function (_super) {
    __extends(rewardTipScript, _super);
    function rewardTipScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLable = null;
        _this.rewardLabel = null;
        _this.rewardTipImg = null;
        _this._rewardValue = 0;
        _this.reciveCallBack = null;
        _this.showOverCallBack = null;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(rewardTipScript.prototype, "rewardValue", {
        get: function () {
            return this._rewardValue;
        },
        set: function (rewardValue) {
            this._rewardValue = rewardValue;
            var result = rewardValue;
            result = gameConfig_1.default.getUnifyMoney(rewardValue, 1);
            this.rewardLabel.string = gameConfig_1.default.getWord("rewardTip", result).string;
        },
        enumerable: false,
        configurable: true
    });
    rewardTipScript.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.titleLable.string = gameConfig_1.default.getWord("gkTips").title;
        gameConfig_1.default.setMoneySp(this.rewardTipImg);
    };
    rewardTipScript.prototype.start = function () {
        var _this = this;
        aduioTools_1.default.playSimpleAduioEngine(aduioTools_1.engineType.pass);
        cc.tween(this.node)
            .to(0.2, { opacity: 255 })
            .delay(1)
            .call(function () {
            _this.reciveCallBack(_this.rewardValue);
        })
            .delay(0.9)
            .call(function () {
            _this.node.removeComponent(cc.BlockInputEvents);
        })
            .to(0.2, { opacity: 0 })
            .call(function () {
            if (_this.showOverCallBack) {
                _this.showOverCallBack();
            }
            _this.node.destroy();
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], rewardTipScript.prototype, "titleLable", void 0);
    __decorate([
        property(cc.Label)
    ], rewardTipScript.prototype, "rewardLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], rewardTipScript.prototype, "rewardTipImg", void 0);
    rewardTipScript = __decorate([
        ccclass
    ], rewardTipScript);
    return rewardTipScript;
}(cc.Component));
exports.default = rewardTipScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcmV3YXJkU2NyaXB0L3Jld2FyZFRpcFNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUQ7QUFDdkQsNENBQXVDO0FBRWpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBeURDO1FBdERHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBWXpCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7UUErQmpDLGlCQUFpQjtJQUNyQixDQUFDO0lBN0NHLHNCQUFJLHdDQUFXO2FBT2Y7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQVRELFVBQWdCLFdBQVc7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDaEMsSUFBSSxNQUFNLEdBQU8sV0FBVyxDQUFDO1lBQ25DLE1BQU0sR0FBRyxvQkFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1RSxDQUFDOzs7T0FBQTtJQVVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQzNELG9CQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUFBLGlCQXFCQztRQXBCRyxvQkFBVSxDQUFDLHFCQUFxQixDQUFDLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLENBQUM7YUFDdkIsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsR0FBRyxFQUFHLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3JCLElBQUksQ0FBQztZQUNGLElBQUcsS0FBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN0QixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUMzQjtZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNXO0lBVGQsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXlEbkM7SUFBRCxzQkFBQztDQXpERCxBQXlEQyxDQXpENEMsRUFBRSxDQUFDLFNBQVMsR0F5RHhEO2tCQXpEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi4vYWR1aW9Ub29sc1wiO1xuaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4uL2dhbWVDb25maWdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJld2FyZFRpcFNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGVMYWJsZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHJld2FyZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHJld2FyZFRpcEltZzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIF9yZXdhcmRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBzZXQgcmV3YXJkVmFsdWUocmV3YXJkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmV3YXJkVmFsdWUgPSByZXdhcmRWYWx1ZTtcbiAgICAgICAgbGV0IHJlc3VsdDphbnkgPSByZXdhcmRWYWx1ZTtcblx0XHRyZXN1bHQgPSBnYW1lQ29uZmlnLmdldFVuaWZ5TW9uZXkocmV3YXJkVmFsdWUsIDEpO1xuICAgICAgICB0aGlzLnJld2FyZExhYmVsLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcInJld2FyZFRpcFwiLHJlc3VsdCkuc3RyaW5nO1xuICAgIH1cblxuICAgIGdldCByZXdhcmRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jld2FyZFZhbHVlO1xuICAgIH1cblxuICAgIHJlY2l2ZUNhbGxCYWNrOkZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHNob3dPdmVyQ2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLnRpdGxlTGFibGUuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwiZ2tUaXBzXCIpLnRpdGxlXG4gICAgICAgIGdhbWVDb25maWcuc2V0TW9uZXlTcCh0aGlzLnJld2FyZFRpcEltZylcbiAgICB9XG5cbiAgICBzdGFydCgpIHsgXG4gICAgICAgIGFkdWlvVG9vbHMucGxheVNpbXBsZUFkdWlvRW5naW5lKGVuZ2luZVR5cGUucGFzcyk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgLnRvKDAuMiAsIHtvcGFjaXR5OjI1NX0pXG4gICAgICAgIC5kZWxheSgxKVxuICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjaXZlQ2FsbEJhY2sodGhpcy5yZXdhcmRWYWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5kZWxheSgwLjkpXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICAgICAgICB9KVxuICAgICAgICAudG8oMC4yICwge29wYWNpdHk6MH0pXG4gICAgICAgIC5jYWxsKCgpPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5zaG93T3ZlckNhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3ZlckNhbGxCYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGFydCgpOyBcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19