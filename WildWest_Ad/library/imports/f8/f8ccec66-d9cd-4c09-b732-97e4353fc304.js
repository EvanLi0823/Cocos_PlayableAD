"use strict";
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