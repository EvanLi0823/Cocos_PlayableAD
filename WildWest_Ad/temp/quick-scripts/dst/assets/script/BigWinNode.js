
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BigWinNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1256/cwMJFx4ig41ZJKszc', 'BigWinNode');
// script/BigWinNode.ts

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
var BigWinNode = /** @class */ (function (_super) {
    __extends(BigWinNode, _super);
    function BigWinNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.download = null;
        _this.cashLabel = null;
        _this.cashImage = null;
        return _this;
    }
    BigWinNode.prototype.onLoad = function () {
        var _a = gameConfig_1.default.getWord('cashOut'), string = _a.string, fontSize = _a.fontSize;
        this.download.string = string;
        this.download.fontSize = fontSize;
        // let addUnit = gameConfig.getUnityMoneyNumber(300.00);
        // this.cashLabel.string =  gameConfig.getUnifyCurrency() + addUnit.toFixed(2);
    };
    BigWinNode.prototype.start = function () {
        var addUnit = gameConfig_1.default.getUnityMoneyNumber(300.00);
        this.runNumberTween(0, addUnit, 1.0);
    };
    BigWinNode.prototype.runNumberTween = function (from, to, duration) {
        var _this = this;
        var obj = { value: from };
        cc.tween(obj)
            .to(duration, { value: to }, {
            onUpdate: function (target) {
                // 精确到两位小数
                _this.cashLabel.string = gameConfig_1.default.getUnifyCurrency() + target.value.toFixed(0);
                setTimeout(function () {
                    _this.cashImage.setPosition(cc.v2(90 - _this.cashLabel.node.width / 2 - 100, _this.cashImage.getPosition().y));
                }, 0);
            }
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], BigWinNode.prototype, "download", void 0);
    __decorate([
        property(cc.Label)
    ], BigWinNode.prototype, "cashLabel", void 0);
    __decorate([
        property(cc.Node)
    ], BigWinNode.prototype, "cashImage", void 0);
    BigWinNode = __decorate([
        ccclass
    ], BigWinNode);
    return BigWinNode;
}(cc.Component));
exports.default = BigWinNode;
// update (dt) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmlnV2luTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUY7QUFDbkYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzQ0M7UUFwQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBOEI3QixDQUFDO0lBN0JHLDJCQUFNLEdBQU47UUFDVSxJQUFBLEtBQXFCLG9CQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFqRCxNQUFNLFlBQUEsRUFBRSxRQUFRLGNBQWlDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQyx3REFBd0Q7UUFDeEQsK0VBQStFO0lBRW5GLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBRUksSUFBSSxPQUFPLEdBQUcsb0JBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLG1DQUFjLEdBQXJCLFVBQXNCLElBQVksRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFBaEUsaUJBYUM7UUFaRyxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNSLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDekIsUUFBUSxFQUFFLFVBQUMsTUFBVztnQkFDbEIsVUFBVTtnQkFDVixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBSSxvQkFBVSxDQUFDLGdCQUFnQixFQUFFLEdBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLFVBQVUsQ0FBQztvQkFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUM7U0FDSixDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQVJSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FzQzlCO0lBQUQsaUJBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3VDLEVBQUUsQ0FBQyxTQUFTLEdBc0NuRDtrQkF0Q29CLFVBQVU7QUF3Qy9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lQ29uZmlnLCB7Q291bnRyeSwgSnVpY2VJdGVtLCBKdWljZUl0ZW1UeXBlLCBMYW5ndWFnZVR5cGV9IGZyb20gXCIuL2dhbWVDb25maWdcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlnV2luTm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGRvd25sb2FkOmNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBjYXNoTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FzaEltYWdlOmNjLk5vZGUgPSBudWxsO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc3Qge3N0cmluZywgZm9udFNpemV9ID0gZ2FtZUNvbmZpZy5nZXRXb3JkKCdjYXNoT3V0JylcbiAgICAgICAgdGhpcy5kb3dubG9hZC5zdHJpbmcgPSBzdHJpbmc7XG4gICAgICAgIHRoaXMuZG93bmxvYWQuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgLy8gbGV0IGFkZFVuaXQgPSBnYW1lQ29uZmlnLmdldFVuaXR5TW9uZXlOdW1iZXIoMzAwLjAwKTtcbiAgICAgICAgLy8gdGhpcy5jYXNoTGFiZWwuc3RyaW5nID0gIGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpICsgYWRkVW5pdC50b0ZpeGVkKDIpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICBsZXQgYWRkVW5pdCA9IGdhbWVDb25maWcuZ2V0VW5pdHlNb25leU51bWJlcigzMDAuMDApO1xuICAgICAgICB0aGlzLnJ1bk51bWJlclR3ZWVuKDAsYWRkVW5pdCwxLjApO1xuICAgIH1cblxuICAgIHB1YmxpYyBydW5OdW1iZXJUd2Vlbihmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG9iaiA9IHsgdmFsdWU6IGZyb20gfTtcbiAgICAgICAgY2MudHdlZW4ob2JqKVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHZhbHVlOiB0byB9LCB7XG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDnsr7noa7liLDkuKTkvY3lsI/mlbBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNoTGFiZWwuc3RyaW5nID0gIGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpK3RhcmdldC52YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzaEltYWdlLnNldFBvc2l0aW9uKGNjLnYyKDkwLXRoaXMuY2FzaExhYmVsLm5vZGUud2lkdGgvMi0xMDAsIHRoaXMuY2FzaEltYWdlLmdldFBvc2l0aW9uKCkueSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuXG4vLyB1cGRhdGUgKGR0KSB7fVxuIl19