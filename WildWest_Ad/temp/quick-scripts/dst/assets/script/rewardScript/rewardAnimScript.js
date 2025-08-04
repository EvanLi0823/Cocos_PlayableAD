
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/rewardScript/rewardAnimScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95d307sAchJQrtFQRLBUCLa', 'rewardAnimScript');
// script/rewardScript/rewardAnimScript.ts

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
var gameConfig_1 = require("../gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardAnimScript = /** @class */ (function (_super) {
    __extends(rewardAnimScript, _super);
    function rewardAnimScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.rpArray = [];
        _this.targetNode = null;
        _this.Ani = null;
        _this.targetPos = null;
        return _this;
    }
    rewardAnimScript.prototype.onLoad = function () {
        for (var i = 0; i < this.content.childrenCount; i++) {
            var sp = this.content.children[i].getComponent(cc.Sprite);
            gameConfig_1.default.setMoneySp(sp, 1);
        }
    };
    rewardAnimScript.prototype.start = function () {
        // this.movieToTarget();
    };
    __decorate([
        property(cc.Node)
    ], rewardAnimScript.prototype, "content", void 0);
    __decorate([
        property([cc.Node])
    ], rewardAnimScript.prototype, "rpArray", void 0);
    __decorate([
        property(cc.Node)
    ], rewardAnimScript.prototype, "targetNode", void 0);
    __decorate([
        property(cc.Animation)
    ], rewardAnimScript.prototype, "Ani", void 0);
    rewardAnimScript = __decorate([
        ccclass
    ], rewardAnimScript);
    return rewardAnimScript;
}(cc.Component));
exports.default = rewardAnimScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcmV3YXJkU2NyaXB0L3Jld2FyZEFuaW1TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQXVDO0FBR2pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBOEJDO1FBM0JHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFtQixFQUFFLENBQUM7UUFHN0IsZ0JBQVUsR0FBVSxJQUFJLENBQUE7UUFHeEIsU0FBRyxHQUFnQixJQUFJLENBQUE7UUFDdkIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFpQjlCLENBQUM7SUFmRyxpQ0FBTSxHQUFOO1FBRUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDekQsb0JBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzlCO0lBR0wsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDSSx3QkFBd0I7SUFDNUIsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDQTtJQVpOLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBOEJwQztJQUFELHVCQUFDO0NBOUJELEFBOEJDLENBOUI2QyxFQUFFLENBQUMsU0FBUyxHQThCekQ7a0JBOUJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWR1aW9Ub29scywge2VuZ2luZVR5cGV9IGZyb20gXCIuLi9hZHVpb1Rvb2xzXCI7XG5pbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9xaXVTY3JpcHQvR2FtZU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJld2FyZEFuaW1TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIFxuICAgIGNvbnRlbnQ6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIHJwQXJyYXk6IEFycmF5PGNjLk5vZGU+ID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YXJnZXROb2RlOmNjLk5vZGU9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgQW5pOmNjLkFuaW1hdGlvbiA9IG51bGxcbiAgICB0YXJnZXRQb3M6IGNjLlZlYzIgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8dGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7aSsrKXtcbiAgICAgICAgICAgIGxldCBzcCA9IHRoaXMuY29udGVudC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICAgICAgZ2FtZUNvbmZpZy5zZXRNb25leVNwKHNwLDEpXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMubW92aWVUb1RhcmdldCgpO1xuICAgIH1cblxuICAgIFxufVxuIl19