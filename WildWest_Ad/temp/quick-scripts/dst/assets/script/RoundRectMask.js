
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/RoundRectMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8ccexm2c1MCbcyl+Q1P8ME', 'RoundRectMask');
// script/RoundRectMask.ts

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
exports.RoundRectMask = void 0;
var property = cc._decorator.property;
var ccclass = cc._decorator.ccclass;
var executeInEditMode = cc._decorator.executeInEditMode;
var disallowMultiple = cc._decorator.disallowMultiple;
var requireComponent = cc._decorator.requireComponent;
var menu = cc._decorator.menu;
cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
var RoundRectMask = /** @class */ (function (_super) {
    __extends(RoundRectMask, _super);
    function RoundRectMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._radius = 50;
        // @property(cc.Mask)
        _this.mask = null;
        return _this;
    }
    Object.defineProperty(RoundRectMask.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        //    public radius: number = 50;
        set: function (r) {
            this._radius = r;
            this.updateMask(r);
        },
        enumerable: false,
        configurable: true
    });
    RoundRectMask.prototype.onEnable = function () {
        this.mask = this.getComponent(cc.Mask);
        this.updateMask(this.radius);
    };
    RoundRectMask.prototype.updateMask = function (r) {
        var _radius = r >= 0 ? r : 0;
        if (_radius < 1) {
            _radius = Math.min(this.node.width, this.node.height) * _radius;
        }
        this.mask["radius"] = _radius;
        this.mask["onDraw"] = this.onDraw.bind(this.mask);
        this.mask["_updateGraphics"] = this._updateGraphics.bind(this.mask);
        this.mask.type = cc.Mask.Type.RECT;
    };
    RoundRectMask.prototype._updateGraphics = function () {
        // @ts-ignore.
        var graphics = this._graphics;
        if (!graphics) {
            return;
        }
        this.onDraw(graphics);
    };
    /**
     * mask 用于绘制罩子的函数.
     * this 指向mask 对象,需要特别注意.
     * @param graphics
     */
    RoundRectMask.prototype.onDraw = function (graphics) {
        // Share render data with graphics content
        graphics.clear(false);
        var node = this.node;
        var width = node.width;
        var height = node.height;
        var x = -width * node.anchorX;
        var y = -height * node.anchorY;
        graphics.roundRect(x, y, width, height, this.radius || 0);
        graphics.strokeColor = cc.color(0, 0, 0, 255);
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
            graphics.stroke();
        }
        else {
            graphics.fill();
        }
    };
    __decorate([
        property()
    ], RoundRectMask.prototype, "_radius", void 0);
    __decorate([
        property({ tooltip: "圆角半径:\n0-1之间为最小边长比例值, \n>1为具体像素值" })
    ], RoundRectMask.prototype, "radius", null);
    RoundRectMask = __decorate([
        ccclass()
        //@ts-ignore
        ,
        executeInEditMode(true)
        //@ts-ignore
        ,
        disallowMultiple(true),
        requireComponent(cc.Mask),
        menu("渲染组件/圆角遮罩")
    ], RoundRectMask);
    return RoundRectMask;
}(cc.Component));
exports.RoundRectMask = RoundRectMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUm91bmRSZWN0TWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUksSUFBTyxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDekMsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDdkMsSUFBTyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO0FBQzNELElBQU8sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN6RCxJQUFPLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDekQsSUFBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFTdkM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUFvRUM7UUFqRVcsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQWM3QixxQkFBcUI7UUFDWCxVQUFJLEdBQVksSUFBSSxDQUFDOztJQWtEbkMsQ0FBQztJQTdERyxzQkFBVyxpQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO1FBRUwsaUNBQWlDO2FBQzdCLFVBQWtCLENBQVM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FOQTtJQVdTLGdDQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElB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LCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW1wb3J0IHByb3BlcnR5ID0gY2MuX2RlY29yYXRvci5wcm9wZXJ0eTtcclxuICAgIGltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xyXG4gICAgaW1wb3J0IGV4ZWN1dGVJbkVkaXRNb2RlID0gY2MuX2RlY29yYXRvci5leGVjdXRlSW5FZGl0TW9kZTtcclxuICAgIGltcG9ydCBkaXNhbGxvd011bHRpcGxlID0gY2MuX2RlY29yYXRvci5kaXNhbGxvd011bHRpcGxlO1xyXG4gICAgaW1wb3J0IHJlcXVpcmVDb21wb25lbnQgPSBjYy5fZGVjb3JhdG9yLnJlcXVpcmVDb21wb25lbnQ7XHJcbiAgICBpbXBvcnQgbWVudSA9IGNjLl9kZWNvcmF0b3IubWVudTtcclxuXHJcbiAgICBjYy5tYWNyby5FTkFCTEVfV0VCR0xfQU5USUFMSUFTID0gdHJ1ZTtcclxuXHJcbiAgICBAY2NjbGFzcygpXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIEBleGVjdXRlSW5FZGl0TW9kZSh0cnVlKVxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBAZGlzYWxsb3dNdWx0aXBsZSh0cnVlKVxyXG4gICAgQHJlcXVpcmVDb21wb25lbnQoY2MuTWFzaylcclxuICAgIEBtZW51KFwi5riy5p+T57uE5Lu2L+WchuinkumBrue9qVwiKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvdW5kUmVjdE1hc2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgICAgICBAcHJvcGVydHkoKVxyXG4gICAgICAgIHByaXZhdGUgX3JhZGl1czogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgICAgIEBwcm9wZXJ0eSh7dG9vbHRpcDogXCLlnIbop5LljYrlvoQ6XFxuMC0x5LmL6Ze05Li65pyA5bCP6L656ZW/5q+U5L6L5YC8LCBcXG4+MeS4uuWFt+S9k+WDj+e0oOWAvFwifSlcclxuXHJcbiAgICAgICAgcHVibGljIGdldCByYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gNTA7XHJcbiAgICAgICAgcHVibGljIHNldCByYWRpdXMocjogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGl1cyA9IHI7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFzayhyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEBwcm9wZXJ0eShjYy5NYXNrKVxyXG4gICAgICAgIHByb3RlY3RlZCBtYXNrOiBjYy5NYXNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXNrKHRoaXMucmFkaXVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlTWFzayhyOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgbGV0IF9yYWRpdXMgPSByID49IDAgPyByIDogMDtcclxuICAgICAgICAgICAgaWYgKF9yYWRpdXMgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBfcmFkaXVzID0gTWF0aC5taW4odGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KSAqIF9yYWRpdXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXNrW1wicmFkaXVzXCJdID0gX3JhZGl1cztcclxuICAgICAgICAgICAgdGhpcy5tYXNrW1wib25EcmF3XCJdID0gdGhpcy5vbkRyYXcuYmluZCh0aGlzLm1hc2spO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tbXCJfdXBkYXRlR3JhcGhpY3NcIl0gPSB0aGlzLl91cGRhdGVHcmFwaGljcy5iaW5kKHRoaXMubWFzayk7XHJcbiAgICAgICAgICAgIHRoaXMubWFzay50eXBlID0gY2MuTWFzay5UeXBlLlJFQ1Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF91cGRhdGVHcmFwaGljcygpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUuXHJcbiAgICAgICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICBpZiAoIWdyYXBoaWNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkRyYXcoZ3JhcGhpY3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogbWFzayDnlKjkuo7nu5jliLbnvanlrZDnmoTlh73mlbAuXHJcbiAgICAgICAgICogdGhpcyDmjIflkJFtYXNrIOWvueixoSzpnIDopoHnibnliKvms6jmhI8uXHJcbiAgICAgICAgICogQHBhcmFtIGdyYXBoaWNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uRHJhdyhncmFwaGljczogY2MuR3JhcGhpY3MpIHtcclxuICAgICAgICAgICAgLy8gU2hhcmUgcmVuZGVyIGRhdGEgd2l0aCBncmFwaGljcyBjb250ZW50XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IG5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IHggPSAtd2lkdGggKiBub2RlLmFuY2hvclg7XHJcbiAgICAgICAgICAgIGxldCB5ID0gLWhlaWdodCAqIG5vZGUuYW5jaG9yWTtcclxuICAgICAgICAgICAgZ3JhcGhpY3Mucm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHRoaXMucmFkaXVzIHx8IDApO1xyXG5cclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSAgY2MuY29sb3IoMCwwLDAsMjU1KTtcclxuICAgICAgICAgICAgaWYgKGNjLmdhbWUucmVuZGVyVHlwZSA9PT0gY2MuZ2FtZS5SRU5ERVJfVFlQRV9DQU5WQVMpIHtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==