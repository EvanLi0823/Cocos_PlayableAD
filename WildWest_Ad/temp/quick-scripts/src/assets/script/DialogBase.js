"use strict";
cc._RF.push(module, 'c9b43xn4UpBI5OjAbVMM8fQ', 'DialogBase');
// script/DialogBase.ts

"use strict";
// import EditorTool from "./EditorTool";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu;
/**
 * 弹窗基类
 */
var DialogBase = /** @class */ (function (_super) {
    __extends(DialogBase, _super);
    function DialogBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DlgAnim = null;
        _this.OpenClip = null;
        _this.CloseClip = null;
        /** 外部的resolve函数，在弹窗close时调用 */
        _this._resolveList = [];
        _this._prefabUrl = '';
        return _this;
        /**
         * 添加外部resolve函数，在弹窗close时调用
         */
        // public addResolve(resolve: (value?: any) => void): void {
        // Tool.arrayAdd(this._resolveList, resolve);
        // }
    }
    Object.defineProperty(DialogBase.prototype, "prefabUrl", {
        /** 弹窗prefab在resources/prefab/dialog/下的路径 */
        get: function () { return this._prefabUrl; },
        enumerable: false,
        configurable: true
    });
    DialogBase.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    DialogBase.prototype.onLoad = function () {
        if (this.DlgAnim) {
            this.OpenClip && this.DlgAnim.addClip(this.OpenClip);
            this.CloseClip && this.DlgAnim.addClip(this.CloseClip);
            this.DlgAnim.on(cc.Animation.EventType.FINISHED, this.onAnimFinished, this);
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    DialogBase.prototype.onTouchStart = function (e) {
        e.stopPropagation();
    };
    DialogBase.prototype.onTouchMove = function (e) {
        e.stopPropagation();
    };
    DialogBase.prototype.onTouchEnd = function (e) {
        e.stopPropagation();
    };
    // protected resetInEditor(): void {
    //     if (CC_EDITOR) {
    //         for (let i = 0; i < this.node.childrenCount; i++) {
    //             let anim: cc.Animation = this.node.children[i].getComponent(cc.Animation);
    //             if (anim) {
    //                 this.DlgAnim = anim;
    //                 EditorTool.load<cc.AnimationClip>('res/animation/dialog/open.anim').then((v) => { this.OpenClip = v; });
    //                 EditorTool.load<cc.AnimationClip>('res/animation/dialog/close.anim').then((v) => { this.CloseClip = v; });
    //                 break;
    //             }
    //         }
    //     }
    // }
    DialogBase.prototype.onAnimFinished = function () {
        if (this.DlgAnim.currentClip === this.CloseClip) {
            this.close();
        }
    };
    /**
     * 打开动画
     */
    DialogBase.prototype.playOpen = function () {
        if (this.DlgAnim && this.OpenClip) {
            this.DlgAnim.play(this.OpenClip.name);
        }
    };
    /**
     * 关闭动画，动画结束回调中会调用close销毁
     */
    DialogBase.prototype.playClose = function () {
        if (this.DlgAnim && this.CloseClip) {
            if (this.DlgAnim.getAnimationState(this.CloseClip.name).isPlaying) {
                return;
            }
            this.DlgAnim.play(this.CloseClip.name);
        }
        else {
            this.close();
        }
    };
    /**
     * 打开弹窗时的处理
     * @virtual
     */
    DialogBase.prototype.open = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    /**
     * 关闭弹窗，销毁节点时的处理。
     * - 必须使用此接口销毁，子类重写时请调用super.close()
     * @virtual
     */
    DialogBase.prototype.close = function () {
        this._resolveList.forEach(function (resolve) { resolve(); });
        this.node.removeFromParent();
        this.node.destroy();
    };
    /**
     * 关闭按钮回调
     * @virtual
     */
    DialogBase.prototype.onClickClose = function () {
        this.playClose();
    };
    /** 弹窗prefab在resources/prefab/dialog/下的路径 */
    DialogBase.pUrl = '';
    __decorate([
        property(cc.Animation)
    ], DialogBase.prototype, "DlgAnim", void 0);
    __decorate([
        property({
            type: cc.AnimationClip,
            tooltip: CC_DEV && '打开弹窗的动画',
            visible: function () { return !!this.DlgAnim; }
        })
    ], DialogBase.prototype, "OpenClip", void 0);
    __decorate([
        property({
            type: cc.AnimationClip,
            tooltip: CC_DEV && '关闭弹窗的动画',
            visible: function () { return !!this.DlgAnim; }
        })
    ], DialogBase.prototype, "CloseClip", void 0);
    DialogBase = __decorate([
        ccclass,
        disallowMultiple,
        menu('Framework/基础组件/DialogBase')
    ], DialogBase);
    return DialogBase;
}(cc.Component));
exports.default = DialogBase;

cc._RF.pop();