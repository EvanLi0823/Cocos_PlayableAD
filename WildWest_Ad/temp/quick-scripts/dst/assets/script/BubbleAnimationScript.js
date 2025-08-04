
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BubbleAnimationScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b0aVjDi5F9LbVhu87eaiT', 'BubbleAnimationScript');
// script/BubbleAnimationScript.ts

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
var BubbleAnimationScript = /** @class */ (function (_super) {
    __extends(BubbleAnimationScript, _super);
    function BubbleAnimationScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callBack = null;
        return _this;
        // update (dt) {}
    }
    BubbleAnimationScript.prototype.bubbleAnimationFinish = function () {
        this.node.destroy();
        if (this.callBack) {
            this.callBack();
        }
    };
    BubbleAnimationScript.prototype.onDestroy = function () {
        // console.log(`bubbleAnimation onDestroy`);
    };
    // onLoad () {}
    BubbleAnimationScript.prototype.start = function () {
    };
    BubbleAnimationScript = __decorate([
        ccclass
    ], BubbleAnimationScript);
    return BubbleAnimationScript;
}(cc.Component));
exports.default = BubbleAnimationScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQnViYmxlQW5pbWF0aW9uU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBcUJDO1FBbkJHLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBa0J6QixpQkFBaUI7SUFDckIsQ0FBQztJQWpCRyxxREFBcUIsR0FBckI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFDVSx5Q0FBUyxHQUFuQjtRQUNHLDRDQUE0QztJQUMvQyxDQUFDO0lBQ0QsZUFBZTtJQUVoQixxQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQWxCZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0FxQnpDO0lBQUQsNEJBQUM7Q0FyQkQsQUFxQkMsQ0FyQmtELEVBQUUsQ0FBQyxTQUFTLEdBcUI5RDtrQkFyQm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxlQW5pbWF0aW9uU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHsgXG4gICAgXG4gICAgY2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgYnViYmxlQW5pbWF0aW9uRmluaXNoKCl7XG5cbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgaWYodGhpcy5jYWxsQmFjaykge1xuICAgICAgICAgICAgdGhpcy5jYWxsQmFjaygpO1xuICAgICAgICB9XG4gICAgfSAgICBcbiAgICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGJ1YmJsZUFuaW1hdGlvbiBvbkRlc3Ryb3lgKTtcbiAgICAgfVxuICAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==