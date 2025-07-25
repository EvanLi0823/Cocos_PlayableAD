"use strict";
cc._RF.push(module, 'e332eM7NLxAmbBG4x5suy50', 'TrayScript');
// script/TrayScript.ts

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
var TrayScript = /** @class */ (function (_super) {
    __extends(TrayScript, _super);
    function TrayScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.birdNode = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    TrayScript.prototype.start = function () {
        cc.tween(this.birdNode)
            .repeatForever(cc.tween().sequence(cc.tween().parallel(cc.tween().to(1.2, { scaleX: 1.06, scaleY: 0.95 }), cc.tween().by(1.2, { position: cc.v2(0, -5) })), cc.tween().parallel(cc.tween().to(1.2, { scaleX: 0.95, scaleY: 1.05 }), cc.tween().by(1.2, { position: cc.v2(0, 5) }))))
            .start();
    };
    __decorate([
        property(cc.Node)
    ], TrayScript.prototype, "birdNode", void 0);
    TrayScript = __decorate([
        ccclass
    ], TrayScript);
    return TrayScript;
}(cc.Component));
exports.default = TrayScript;

cc._RF.pop();