"use strict";
cc._RF.push(module, '59c253jJy5DaK3uQf4o2TMu', 'DestroyLocationScript');
// script/DestroyLocationScript.ts

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
var DestroyLocationScript = /** @class */ (function (_super) {
    __extends(DestroyLocationScript, _super);
    function DestroyLocationScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.locationPos = cc.v2(0, 0);
        _this.width = 0;
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    DestroyLocationScript.prototype.onLoad = function () { };
    DestroyLocationScript.prototype.start = function () {
        var _this = this;
        var width = Math.sqrt((Math.pow(cc.winSize.width, 2) + Math.pow(cc.winSize.height, 2)));
        this.maskNode.width = width;
        this.maskNode.height = width;
        var scale = this.width * 1.0 / width;
        cc.tween(this.maskNode)
            .to(0.7, { scale: scale, position: cc.v3(this.locationPos.x, this.locationPos.y, 0) })
            .delay(0.2)
            .call(function () {
            _this.maskNode.destroy();
            if (_this.callback) {
                _this.callback();
            }
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], DestroyLocationScript.prototype, "maskNode", void 0);
    DestroyLocationScript = __decorate([
        ccclass
    ], DestroyLocationScript);
    return DestroyLocationScript;
}(cc.Component));
exports.default = DestroyLocationScript;

cc._RF.pop();