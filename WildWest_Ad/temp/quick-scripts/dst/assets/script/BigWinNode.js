
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
        var _this = this;
        var _a = gameConfig_1.default.getWord('cashOut'), string = _a.string, fontSize = _a.fontSize;
        this.download.string = string;
        this.download.fontSize = fontSize;
        var addUnit = gameConfig_1.default.getUnityMoneyNumber(300.00);
        this.cashLabel.string = gameConfig_1.default.getUnifyCurrency() + addUnit.toFixed(2);
        setTimeout(function () {
            console.log("this.cashLabel.actualWidth", _this.cashLabel.node.width);
            _this.cashImage.setPosition(cc.v2(90 - _this.cashLabel.node.width / 2 - 100, _this.cashImage.getPosition().y));
        }, 0);
    };
    // start()
    // {
    //     let addUnit = gameConfig.getUnityMoneyNumber(15.00);
    //     this.runNumberTween(0,addUnit,1.5)
    // }
    BigWinNode.prototype.runNumberTween = function (from, to, duration) {
        var _this = this;
        var obj = { value: from };
        cc.tween(obj)
            .to(duration, { value: to }, {
            onUpdate: function (target) {
                // 精确到两位小数
                _this.cashLabel.string = gameConfig_1.default.getUnifyCurrency() + target.value.toFixed(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmlnV2luTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUY7QUFDbkYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzQ0M7UUFwQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBOEI3QixDQUFDO0lBN0JHLDJCQUFNLEdBQU47UUFBQSxpQkFVQztRQVRTLElBQUEsS0FBcUIsb0JBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQWpELE1BQU0sWUFBQSxFQUFFLFFBQVEsY0FBaUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLG9CQUFVLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUksb0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsVUFBVSxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFVBQVU7SUFDVixJQUFJO0lBQ0osMkRBQTJEO0lBQzNELHlDQUF5QztJQUN6QyxJQUFJO0lBRUcsbUNBQWMsR0FBckIsVUFBc0IsSUFBWSxFQUFFLEVBQVUsRUFBRSxRQUFnQjtRQUFoRSxpQkFVQztRQVRHLElBQUksR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1IsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN6QixRQUFRLEVBQUUsVUFBQyxNQUFXO2dCQUNsQixVQUFVO2dCQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFJLG9CQUFVLENBQUMsZ0JBQWdCLEVBQUUsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRixDQUFDO1NBQ0osQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFSUixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBc0M5QjtJQUFELGlCQUFDO0NBdENELEFBc0NDLENBdEN1QyxFQUFFLENBQUMsU0FBUyxHQXNDbkQ7a0JBdENvQixVQUFVO0FBd0MvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZUNvbmZpZywge0NvdW50cnksIEp1aWNlSXRlbSwgSnVpY2VJdGVtVHlwZSwgTGFuZ3VhZ2VUeXBlfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpZ1dpbk5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBkb3dubG9hZDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY2FzaExhYmVsOmNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhc2hJbWFnZTpjYy5Ob2RlID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHtzdHJpbmcsIGZvbnRTaXplfSA9IGdhbWVDb25maWcuZ2V0V29yZCgnY2FzaE91dCcpXG4gICAgICAgIHRoaXMuZG93bmxvYWQuc3RyaW5nID0gc3RyaW5nO1xuICAgICAgICB0aGlzLmRvd25sb2FkLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgIGxldCBhZGRVbml0ID0gZ2FtZUNvbmZpZy5nZXRVbml0eU1vbmV5TnVtYmVyKDMwMC4wMCk7XG4gICAgICAgIHRoaXMuY2FzaExhYmVsLnN0cmluZyA9ICBnYW1lQ29uZmlnLmdldFVuaWZ5Q3VycmVuY3koKSArIGFkZFVuaXQudG9GaXhlZCgyKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY2FzaExhYmVsLmFjdHVhbFdpZHRoXCIsdGhpcy5jYXNoTGFiZWwubm9kZS53aWR0aCk7XG4gICAgICAgICAgICB0aGlzLmNhc2hJbWFnZS5zZXRQb3NpdGlvbihjYy52Mig5MC10aGlzLmNhc2hMYWJlbC5ub2RlLndpZHRoLzItMTAwLCB0aGlzLmNhc2hJbWFnZS5nZXRQb3NpdGlvbigpLnkpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgLy8gc3RhcnQoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgbGV0IGFkZFVuaXQgPSBnYW1lQ29uZmlnLmdldFVuaXR5TW9uZXlOdW1iZXIoMTUuMDApO1xuICAgIC8vICAgICB0aGlzLnJ1bk51bWJlclR3ZWVuKDAsYWRkVW5pdCwxLjUpXG4gICAgLy8gfVxuXG4gICAgcHVibGljIHJ1bk51bWJlclR3ZWVuKGZyb206IG51bWJlciwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICBsZXQgb2JqID0geyB2YWx1ZTogZnJvbSB9O1xuICAgICAgICBjYy50d2VlbihvYmopXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgdmFsdWU6IHRvIH0sIHtcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKHRhcmdldDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOeyvuehruWIsOS4pOS9jeWwj+aVsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2hMYWJlbC5zdHJpbmcgPSAgZ2FtZUNvbmZpZy5nZXRVbmlmeUN1cnJlbmN5KCkrdGFyZ2V0LnZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cblxuLy8gdXBkYXRlIChkdCkge31cbiJdfQ==