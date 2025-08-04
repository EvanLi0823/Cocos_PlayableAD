
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ButtonSafe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f961QcymFFxK1OZOZ33lDh', 'ButtonSafe');
// script/ButtonSafe.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSafe = /** @class */ (function (_super) {
    __extends(ButtonSafe, _super);
    function ButtonSafe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.safeTime = 0.5;
        _this.clickEvents = null;
        return _this;
        // update (dt) {}
    }
    ButtonSafe.prototype.start = function () {
        var _this = this;
        var button = this.getComponent(cc.Button);
        if (!button) {
            return;
        }
        this.clickEvents = button.clickEvents;
        this.node.on('click', function () {
            button.clickEvents = [];
            _this.scheduleOnce(function (dt) {
                button.clickEvents = _this.clickEvents;
            }, _this.safeTime);
            // mark: 这种方式会导致快速点击按钮时触摸穿透（按钮禁用时不再接受触摸事件）
            // let autoGrey = button.enableAutoGrayEffect;
            // button.enableAutoGrayEffect = false;
            // button.interactable = false;
            // this.scheduleOnce((dt)=>{
            //     button.enableAutoGrayEffect = autoGrey;
            //     button.interactable = true;
            // }, this.safeTime);
        }, this);
    };
    __decorate([
        property
    ], ButtonSafe.prototype, "safeTime", void 0);
    ButtonSafe = __decorate([
        ccclass
    ], ButtonSafe);
    return ButtonSafe;
}(cc.Component));
exports.default = ButtonSafe;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQnV0dG9uU2FmZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWdDQztRQTdCRyxjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLGlCQUFXLEdBQUcsSUFBSSxDQUFDOztRQTBCbkIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6QkcsMEJBQUssR0FBTDtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ1IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNsQixNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLFVBQUMsRUFBRTtnQkFDakIsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbEIsMENBQTBDO1lBQzFDLDhDQUE4QztZQUM5Qyx1Q0FBdUM7WUFDdkMsK0JBQStCO1lBQy9CLDRCQUE0QjtZQUM1Qiw4Q0FBOEM7WUFDOUMsa0NBQWtDO1lBQ2xDLHFCQUFxQjtRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBMUJEO1FBREMsUUFBUTtnREFDYztJQUhOLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnQzlCO0lBQUQsaUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NuRDtrQkFoQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvblNhZmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5IFxuICAgIHNhZmVUaW1lOiBudW1iZXIgPSAwLjU7IFxuXG4gICAgY2xpY2tFdmVudHMgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgYnV0dG9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKCFidXR0b24pe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudHMgPSBidXR0b24uY2xpY2tFdmVudHM7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKChkdCk9PntcbiAgICAgICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMgPSB0aGlzLmNsaWNrRXZlbnRzO1xuICAgICAgICAgICAgfSwgdGhpcy5zYWZlVGltZSk7XG5cbiAgICAgICAgICAgIC8vIG1hcms6IOi/meenjeaWueW8j+S8muWvvOiHtOW/q+mAn+eCueWHu+aMiemSruaXtuinpuaRuOepv+mAj++8iOaMiemSruemgeeUqOaXtuS4jeWGjeaOpeWPl+inpuaRuOS6i+S7tu+8iVxuICAgICAgICAgICAgLy8gbGV0IGF1dG9HcmV5ID0gYnV0dG9uLmVuYWJsZUF1dG9HcmF5RWZmZWN0O1xuICAgICAgICAgICAgLy8gYnV0dG9uLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBidXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoZHQpPT57XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gYXV0b0dyZXk7XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB9LCB0aGlzLnNhZmVUaW1lKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==