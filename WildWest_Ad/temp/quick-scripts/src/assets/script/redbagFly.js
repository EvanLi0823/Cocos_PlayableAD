"use strict";
cc._RF.push(module, '4cd4cSsdbJIAI8F/Gt1Kg54', 'redbagFly');
// script/redbagFly.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var redbagFly = /** @class */ (function (_super) {
    __extends(redbagFly, _super);
    function redbagFly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        return _this;
        // async changeSprite() {
        //     let pay1sp = gameConfig.getRedbag(1);
        //     let sp: any = ResMgr.loadResourcesAsset("img/rewardImg/" + pay1sp, cc.SpriteFrame)
        //     return sp;
        // }
        // update (dt) {}
    }
    redbagFly.prototype.start = function () {
        // this.changeSprite().then(r => {
        //     // console.log("changeSpritethen")
        //     this.sprite.spriteFrame = r
        // })
    };
    __decorate([
        property(cc.Sprite)
    ], redbagFly.prototype, "sprite", void 0);
    redbagFly = __decorate([
        ccclass
    ], redbagFly);
    return redbagFly;
}(cc.Component));
exports.default = redbagFly;

cc._RF.pop();