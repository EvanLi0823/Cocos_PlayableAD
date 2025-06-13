
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/redbagFly.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcmVkYmFnRmx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0JDO1FBakJHLFlBQU0sR0FBYyxJQUFJLENBQUM7O1FBU3pCLHlCQUF5QjtRQUV6Qiw0Q0FBNEM7UUFDNUMseUZBQXlGO1FBQ3pGLGlCQUFpQjtRQUNqQixJQUFJO1FBRUosaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyx5QkFBSyxHQUFMO1FBQ0ksa0NBQWtDO1FBQ2xDLHlDQUF5QztRQUN6QyxrQ0FBa0M7UUFDbEMsS0FBSztJQUNULENBQUM7SUFQRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBSFIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9CN0I7SUFBRCxnQkFBQztDQXBCRCxBQW9CQyxDQXBCc0MsRUFBRSxDQUFDLFNBQVMsR0FvQmxEO2tCQXBCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XG5pbXBvcnQge1Jlc01ncn0gZnJvbSBcIi4vdXRpbHMvUmVzTWdyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWRiYWdGbHkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VTcHJpdGUoKS50aGVuKHIgPT4ge1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VTcHJpdGV0aGVuXCIpXG4gICAgICAgIC8vICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHJcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICAvLyBhc3luYyBjaGFuZ2VTcHJpdGUoKSB7XG5cbiAgICAvLyAgICAgbGV0IHBheTFzcCA9IGdhbWVDb25maWcuZ2V0UmVkYmFnKDEpO1xuICAgIC8vICAgICBsZXQgc3A6IGFueSA9IFJlc01nci5sb2FkUmVzb3VyY2VzQXNzZXQoXCJpbWcvcmV3YXJkSW1nL1wiICsgcGF5MXNwLCBjYy5TcHJpdGVGcmFtZSlcbiAgICAvLyAgICAgcmV0dXJuIHNwO1xuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=