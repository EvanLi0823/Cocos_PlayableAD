"use strict";
cc._RF.push(module, '4602dOx0CJHopuNeOKmIB7I', 'DownloadBtn');
// script/DownloadBtn.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var gameConfig_1 = require("./gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DownloadBtn = /** @class */ (function (_super) {
    __extends(DownloadBtn, _super);
    function DownloadBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn = null;
        return _this;
    }
    DownloadBtn.prototype.onLoad = function () {
        cc.tween(this.btn)
            .repeatForever(cc.tween().sequence(cc.tween().to(1, { scale: 1.2 }), cc.tween().to(1, { scale: 1 })))
            .start();
    };
    DownloadBtn.prototype.callback = function () {
        console.log("点击了");
        //mtg打开下方这行
        if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.Mtg) {
            window.install && window.install();
        }
        else if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.AppLovin) {
            //applovin打开下方这行
            window.mraid && window.mraid.open('https://play.google.com/store/apps/details?id=com.newaa.slots.easter.bunny');
        }
    };
    __decorate([
        property(cc.Node)
    ], DownloadBtn.prototype, "btn", void 0);
    DownloadBtn = __decorate([
        ccclass
    ], DownloadBtn);
    return DownloadBtn;
}(cc.Component));
exports.default = DownloadBtn;
// update (dt) {}

cc._RF.pop();