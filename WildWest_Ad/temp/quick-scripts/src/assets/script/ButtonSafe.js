"use strict";
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