
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/DialogBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRGlhbG9nQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkMsSUFBQSxLQUFnRCxFQUFFLENBQUMsVUFBVSxFQUEzRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFcEU7O0dBRUc7QUFJSDtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXNJQztRQWpJVSxhQUFPLEdBQWlCLElBQUksQ0FBQztRQU83QixjQUFRLEdBQXFCLElBQUksQ0FBQztRQU9sQyxlQUFTLEdBQXFCLElBQUksQ0FBQztRQUUxQywrQkFBK0I7UUFDdkIsa0JBQVksR0FBaUMsRUFBRSxDQUFDO1FBRWhELGdCQUFVLEdBQVcsRUFBRSxDQUFDOztRQXdHaEM7O1dBRUc7UUFDSCw0REFBNEQ7UUFDeEQsNkNBQTZDO1FBQ2pELElBQUk7SUFDUixDQUFDO0lBNUdHLHNCQUFXLGlDQUFTO1FBRHBCLDRDQUE0QzthQUM1QyxjQUFpQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVoRCw4QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUMsWUFBWSxFQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRyxJQUFJLENBQUMsV0FBVyxFQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRyxJQUFJLENBQUMsVUFBVSxF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LElBQUksQ0FBQywyQkFBMkIsQ0FBQztPQUNiLFVBQVUsQ0FzSTlCO0lBQUQsaUJBQUM7Q0F0SUQsQUFzSUMsQ0F0SXVDLEVBQUUsQ0FBQyxTQUFTLEdBc0luRDtrQkF0SW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcblxyXG4vLyBpbXBvcnQgRWRpdG9yVG9vbCBmcm9tIFwiLi9FZGl0b3JUb29sXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZGlzYWxsb3dNdWx0aXBsZSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDlvLnnqpfln7rnsbtcclxuICovXHJcbkBjY2NsYXNzXHJcbkBkaXNhbGxvd011bHRpcGxlXHJcbkBtZW51KCdGcmFtZXdvcmsv5Z+656GA57uE5Lu2L0RpYWxvZ0Jhc2UnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8qKiDlvLnnqpdwcmVmYWLlnKhyZXNvdXJjZXMvcHJlZmFiL2RpYWxvZy/kuIvnmoTot6/lvoQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcFVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIHB1YmxpYyBEbGdBbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uQ2xpcCxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aJk+W8gOW8ueeql+eahOWKqOeUuycsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuICEhdGhpcy5EbGdBbmltOyB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIE9wZW5DbGlwOiBjYy5BbmltYXRpb25DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvbkNsaXAsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICflhbPpl63lvLnnqpfnmoTliqjnlLsnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiAhIXRoaXMuRGxnQW5pbTsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBDbG9zZUNsaXA6IGNjLkFuaW1hdGlvbkNsaXAgPSBudWxsO1xyXG5cclxuICAgIC8qKiDlpJbpg6jnmoRyZXNvbHZl5Ye95pWw77yM5Zyo5by556qXY2xvc2Xml7bosIPnlKggKi9cclxuICAgIHByaXZhdGUgX3Jlc29sdmVMaXN0OiBBcnJheTwodmFsdWU/OiBhbnkpID0+IHZvaWQ+ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfcHJlZmFiVXJsOiBzdHJpbmcgPSAnJztcclxuICAgIC8qKiDlvLnnqpdwcmVmYWLlnKhyZXNvdXJjZXMvcHJlZmFiL2RpYWxvZy/kuIvnmoTot6/lvoQgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFiVXJsKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wcmVmYWJVcmw7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQgLCB0aGlzLm9uVG91Y2hTdGFydCAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSAsIHRoaXMub25Ub3VjaE1vdmUgLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCAsIHRoaXMub25Ub3VjaEVuZCAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMICwgdGhpcy5vblRvdWNoRW5kICwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkRsZ0FuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5PcGVuQ2xpcCAmJiB0aGlzLkRsZ0FuaW0uYWRkQ2xpcCh0aGlzLk9wZW5DbGlwKTtcclxuICAgICAgICAgICAgdGhpcy5DbG9zZUNsaXAgJiYgdGhpcy5EbGdBbmltLmFkZENsaXAodGhpcy5DbG9zZUNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLkRsZ0FuaW0ub24oY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5vbkFuaW1GaW5pc2hlZCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQgLCB0aGlzLm9uVG91Y2hTdGFydCAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFICwgdGhpcy5vblRvdWNoTW92ZSAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQgLCB0aGlzLm9uVG91Y2hFbmQgLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMICwgdGhpcy5vblRvdWNoRW5kICwgdGhpcyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9XHJcbiAgICAvLyBwcm90ZWN0ZWQgcmVzZXRJbkVkaXRvcigpOiB2b2lkIHtcclxuICAgIC8vICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGFuaW06IGNjLkFuaW1hdGlvbiA9IHRoaXMubm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChhbmltKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5EbGdBbmltID0gYW5pbTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBFZGl0b3JUb29sLmxvYWQ8Y2MuQW5pbWF0aW9uQ2xpcD4oJ3Jlcy9hbmltYXRpb24vZGlhbG9nL29wZW4uYW5pbScpLnRoZW4oKHYpID0+IHsgdGhpcy5PcGVuQ2xpcCA9IHY7IH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIEVkaXRvclRvb2wubG9hZDxjYy5BbmltYXRpb25DbGlwPigncmVzL2FuaW1hdGlvbi9kaWFsb2cvY2xvc2UuYW5pbScpLnRoZW4oKHYpID0+IHsgdGhpcy5DbG9zZUNsaXAgPSB2OyB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25BbmltRmluaXNoZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuRGxnQW5pbS5jdXJyZW50Q2xpcCA9PT0gdGhpcy5DbG9zZUNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOWKqOeUu1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheU9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuRGxnQW5pbSAmJiB0aGlzLk9wZW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRGxnQW5pbS5wbGF5KHRoaXMuT3BlbkNsaXAubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5Yqo55S777yM5Yqo55S757uT5p2f5Zue6LCD5Lit5Lya6LCD55SoY2xvc2XplIDmr4FcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlDbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5EbGdBbmltICYmIHRoaXMuQ2xvc2VDbGlwKSB7IFxyXG4gICAgICAgICAgICBpZiAodGhpcy5EbGdBbmltLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuQ2xvc2VDbGlwLm5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuRGxnQW5pbS5wbGF5KHRoaXMuQ2xvc2VDbGlwLm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDlvLnnqpfml7bnmoTlpITnkIZcclxuICAgICAqIEB2aXJ0dWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcGVuKC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreW8ueeql++8jOmUgOavgeiKgueCueaXtueahOWkhOeQhuOAglxyXG4gICAgICogLSDlv4Xpobvkvb/nlKjmraTmjqXlj6PplIDmr4HvvIzlrZDnsbvph43lhpnml7bor7fosIPnlKhzdXBlci5jbG9zZSgpXHJcbiAgICAgKiBAdmlydHVhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2UoKTogYW55IHtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlTGlzdC5mb3JFYWNoKChyZXNvbHZlKSA9PiB7IHJlc29sdmUoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5oyJ6ZKu5Zue6LCDXHJcbiAgICAgKiBAdmlydHVhbFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25DbGlja0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheUNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlpJbpg6hyZXNvbHZl5Ye95pWw77yM5Zyo5by556qXY2xvc2Xml7bosIPnlKhcclxuICAgICAqL1xyXG4gICAgLy8gcHVibGljIGFkZFJlc29sdmUocmVzb2x2ZTogKHZhbHVlPzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVG9vbC5hcnJheUFkZCh0aGlzLl9yZXNvbHZlTGlzdCwgcmVzb2x2ZSk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19