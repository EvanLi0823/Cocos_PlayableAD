
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GuideScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5272jdyqtHTpVLhDmBti0B', 'GuideScript');
// script/GuideScript.ts

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
var GameManager_1 = require("./qiuScript/GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GuideScript = /** @class */ (function (_super) {
    __extends(GuideScript, _super);
    function GuideScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handNode = null;
        _this.remindLabel = null;
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    GuideScript.prototype.onLoad = function () {
        this.handNode.setPosition(GameManager_1.default.Instance.btnNode.getPosition());
    };
    GuideScript.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    GuideScript.prototype.start = function () {
        var _this = this;
        var _a = gameConfig_1.default.getWord('guide'), string = _a.string, fontSize = _a.fontSize;
        this.remindLabel.string = string;
        this.remindLabel.fontSize = fontSize;
        this.scheduleOnce(function () {
            _this.node.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart, _this);
        }, 0.5);
        cc.tween(this.handNode)
            .repeatForever(cc.tween()
            .to(0.35, { scale: 0.8 })
            .delay(0.07)
            .to(0.35, { scale: 1.5 })
            .delay(0.07)
            .to(0.5, { scale: 1 }))
            .start();
    };
    GuideScript.prototype.onTouchStart = function (e) {
        if (this.callback) {
            this.callback();
        }
        this.node.destroy();
    };
    GuideScript.prototype.onTouchMove = function (e) {
    };
    __decorate([
        property(cc.Node)
    ], GuideScript.prototype, "handNode", void 0);
    __decorate([
        property(cc.RichText)
    ], GuideScript.prototype, "remindLabel", void 0);
    GuideScript = __decorate([
        ccclass
    ], GuideScript);
    return GuideScript;
}(cc.Component));
exports.default = GuideScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvR3VpZGVTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWtEQztRQS9DRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUVoQyxjQUFRLEdBQVksSUFBSSxDQUFDOztRQXlDekIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6Q0csNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO0lBRXpFLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFBQSxpQkFrQkM7UUFqQlMsSUFBQSxLQUFxQixvQkFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBL0MsTUFBTSxZQUFBLEVBQUUsUUFBUSxjQUErQixDQUFBO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxDQUFDO1FBQ3pFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNsQixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDNUI7YUFDQSxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLENBQUM7UUFDVixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksQ0FBQztJQUViLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO29EQUNVO0lBTmYsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtEL0I7SUFBRCxrQkFBQztDQWxERCxBQWtEQyxDQWxEd0MsRUFBRSxDQUFDLFNBQVMsR0FrRHBEO2tCQWxEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lQ29uZmlnIGZyb20gXCIuL2dhbWVDb25maWdcIjtcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9xaXVTY3JpcHQvR2FtZU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByZW1pbmRMYWJlbDogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuaGFuZE5vZGUuc2V0UG9zaXRpb24oR2FtZU1hbmFnZXIuSW5zdGFuY2UuYnRuTm9kZS5nZXRQb3NpdGlvbigpKVxuXG4gICAgfSBcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB7c3RyaW5nLCBmb250U2l6ZX0gPSBnYW1lQ29uZmlnLmdldFdvcmQoJ2d1aWRlJylcbiAgICAgICAgdGhpcy5yZW1pbmRMYWJlbC5zdHJpbmcgPSBzdHJpbmc7XG4gICAgICAgIHRoaXMucmVtaW5kTGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIH0sIDAuNSk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kTm9kZSlcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzUsIHsgc2NhbGU6MC44IH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjA3KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zNSwgeyBzY2FsZToxLjUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMDcpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6MSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICBpZih0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7IFxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=