
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
        var addUnit = gameConfig_1.default.getUnityMoneyStr();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmlnV2luTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUY7QUFDbkYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzQ0M7UUFwQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBOEI3QixDQUFDO0lBN0JHLDJCQUFNLEdBQU47UUFDVSxJQUFBLEtBQXFCLG9CQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFqRCxNQUFNLFlBQUEsRUFBRSxRQUFRLGNBQWlDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQyx3REFBd0Q7UUFDeEQsK0VBQStFO0lBRW5GLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBRUksSUFBSSxPQUFPLEdBQUcsb0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBc0IsSUFBWSxFQUFFLEVBQVUsRUFBRSxRQUFnQjtRQUFoRSxpQkFhQztRQVpHLElBQUksR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1IsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN6QixRQUFRLEVBQUUsVUFBQyxNQUFXO2dCQUNsQixVQUFVO2dCQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFJLG9CQUFVLENBQUMsZ0JBQWdCLEVBQUUsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsVUFBVSxDQUFDO29CQUNQLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztTQUNKLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNPO0lBUlIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXNDOUI7SUFBRCxpQkFBQztDQXRDRCxBQXNDQyxDQXRDdUMsRUFBRSxDQUFDLFNBQVMsR0FzQ25EO2tCQXRDb0IsVUFBVTtBQXdDL0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcsIHtDb3VudHJ5LCBKdWljZUl0ZW0sIEp1aWNlSXRlbVR5cGUsIExhbmd1YWdlVHlwZX0gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaWdXaW5Ob2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZG93bmxvYWQ6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGNhc2hMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXNoSW1hZ2U6Y2MuTm9kZSA9IG51bGw7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zdCB7c3RyaW5nLCBmb250U2l6ZX0gPSBnYW1lQ29uZmlnLmdldFdvcmQoJ2Nhc2hPdXQnKVxuICAgICAgICB0aGlzLmRvd25sb2FkLnN0cmluZyA9IHN0cmluZztcbiAgICAgICAgdGhpcy5kb3dubG9hZC5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAvLyBsZXQgYWRkVW5pdCA9IGdhbWVDb25maWcuZ2V0VW5pdHlNb25leU51bWJlcigzMDAuMDApO1xuICAgICAgICAvLyB0aGlzLmNhc2hMYWJlbC5zdHJpbmcgPSAgZ2FtZUNvbmZpZy5nZXRVbmlmeUN1cnJlbmN5KCkgKyBhZGRVbml0LnRvRml4ZWQoMik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0KClcbiAgICB7XG4gICAgICAgIGxldCBhZGRVbml0ID0gZ2FtZUNvbmZpZy5nZXRVbml0eU1vbmV5U3RyKCk7XG4gICAgICAgIHRoaXMucnVuTnVtYmVyVHdlZW4oMCxhZGRVbml0LDEuMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJ1bk51bWJlclR3ZWVuKGZyb206IG51bWJlciwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICBsZXQgb2JqID0geyB2YWx1ZTogZnJvbSB9O1xuICAgICAgICBjYy50d2VlbihvYmopXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgdmFsdWU6IHRvIH0sIHtcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKHRhcmdldDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOeyvuehruWIsOS4pOS9jeWwj+aVsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2hMYWJlbC5zdHJpbmcgPSAgZ2FtZUNvbmZpZy5nZXRVbmlmeUN1cnJlbmN5KCkrdGFyZ2V0LnZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNoSW1hZ2Uuc2V0UG9zaXRpb24oY2MudjIoOTAtdGhpcy5jYXNoTGFiZWwubm9kZS53aWR0aC8yLTEwMCwgdGhpcy5jYXNoSW1hZ2UuZ2V0UG9zaXRpb24oKS55KSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG59XG5cbi8vIHVwZGF0ZSAoZHQpIHt9XG4iXX0=