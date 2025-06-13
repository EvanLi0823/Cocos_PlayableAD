
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/boomScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cafc38D1O5O7psk2wCczTKk', 'boomScript');
// script/boomScript.ts

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
var boomScript = /** @class */ (function (_super) {
    __extends(boomScript, _super);
    function boomScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.smokeParticle = null;
        _this.fogParticle = null;
        _this.lightNode = null;
        _this.spreadRing = null;
        _this.innerRing = null;
        _this.outerRing = null;
        _this.Halo = null;
        _this.indexLabel = null;
        _this.targetRadius = null;
        _this.index = null;
        _this.rate = null;
        _this.time = 0;
        return _this;
        // update (dt) {}
    }
    boomScript.prototype.onDestroy = function () {
        // console.log(`boomScript onDestroy`); 
    };
    boomScript.prototype.onLoad = function () {
        var rate = 1.0;
        for (var i = 0; i < this.index; i++) {
            rate *= 0.9;
        }
        this.rate = rate;
        this.initData();
    };
    boomScript.prototype.start = function () {
        var _this = this;
        var scale = this.targetRadius * this.rate / 80.0;
        this.time = 0.65 * scale;
        this.spreadRing.scale = 0;
        this.lightNode.scale = 2.0 * this.rate * this.targetRadius / 278;
        cc.tween(this.lightNode)
            .delay(0.08)
            .to(0.02, { scale: 4.5 * this.rate * this.targetRadius / 278 })
            .call(function () {
            _this.smokeParticle.resetSystem();
        })
            .parallel(cc.tween().to(this.time * 0.5, { scale: 3.0 * this.rate * this.targetRadius / 278 }), cc.tween().call(function () {
            cc.tween(_this.spreadRing).to(_this.time * 0.5, { scale: 1.0 }).to(0.01, { opacity: 0 }).start();
            cc.tween(_this.Halo).to(_this.time * 0.5, { opacity: 0 }).start();
        }))
            .call(function () {
            cc.tween(_this.innerRing).to(_this.time * 0.3, { scale: 0.5, opacity: 0 }).start();
            cc.tween(_this.outerRing).to(_this.time * 0.6, { scale: 2, opacity: 0 }).start();
        })
            .delay(1.0)
            .call(function () {
            _this.node.destroy();
        })
            .start();
        cc.tween(this.indexLabel.node)
            .to(0.1, { scale: 1.5, opacity: 255 })
            .to(0.35, { scale: 0.6 })
            .to(0.35, { scale: 1.3 })
            .by(0.4, { scale: -1, opacity: -255, position: cc.v3(0, 50, 0) })
            .start();
        this.fogParticle.resetSystem();
    };
    boomScript.prototype.initData = function () {
        //         this.light03.width =  this.targetRadius;
        //         this.light03.height =  this.targetRadius;
        // 
        //         this.light04.width = this.targetRadius;
        //         this.light04.height = this.targetRadius; 
        this.smokeParticle.startSize = this.targetRadius / 2;
        this.smokeParticle.startSizeVar = this.targetRadius / 4;
        this.smokeParticle.endSize = this.targetRadius / 6;
        this.smokeParticle.endSizeVar = this.targetRadius / 12;
        this.smokeParticle.startRadius = this.targetRadius / 4;
        this.smokeParticle.startRadiusVar = this.targetRadius / 20;
        this.smokeParticle.endRadius = this.targetRadius * 2.5 * this.rate;
        this.smokeParticle.endRadiusVar = this.targetRadius / 100;
        // this.smokeParticle.life = this.time * 0.5;
        // this.smokeParticle.lifeVar = this.time * 0.1;
        // this.fogParticle.duration = 0.4 * this.rate;
        this.fogParticle.startRadius = this.targetRadius * 1.8 * this.rate;
        this.fogParticle.startRadiusVar = 20;
        this.fogParticle.endRadius = this.targetRadius * 3.0 * this.rate + this.targetRadius;
        this.fogParticle.endRadiusVar = this.targetRadius;
        this.indexLabel.string = "<color=#FFDB00><outline color=#FF8000 width=1>" + (this.index + 1) + "</outline></color>";
        this.indexLabel.node.setPosition(cc.v2(this.targetRadius / 2, this.targetRadius / 4));
    };
    __decorate([
        property(cc.ParticleSystem)
    ], boomScript.prototype, "smokeParticle", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], boomScript.prototype, "fogParticle", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "lightNode", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "spreadRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "innerRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "outerRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "Halo", void 0);
    __decorate([
        property(cc.RichText)
    ], boomScript.prototype, "indexLabel", void 0);
    boomScript = __decorate([
        ccclass
    ], boomScript);
    return boomScript;
}(cc.Component));
exports.default = boomScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYm9vbVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRIQztRQXpIRyxtQkFBYSxHQUFzQixJQUFJLENBQUM7UUFHeEMsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBR3RDLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBVSxJQUFJLENBQUM7UUFDM0IsV0FBSyxHQUFVLElBQUksQ0FBQztRQUVaLFVBQUksR0FBVSxJQUFJLENBQUM7UUFFM0IsVUFBSSxHQUFVLENBQUMsQ0FBQzs7UUE0RmhCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0ZhLDhCQUFTLEdBQW5CO1FBQ0ksd0NBQXdDO0lBQzVDLENBQUM7SUFDRCwyQkFBTSxHQUFOO1FBRUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLEdBQUcsQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQUEsaUJBd0NDO1FBdENHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBRTtRQUMvRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLEVBQUUsQ0FBQyxJQUFJLEVBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDLFlBQVksR0FBQyxHQUFHLEVBQUMsQ0FBQzthQUN6RCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQzthQUNELFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxZQUFZLEdBQUMsR0FBRyxFQUFDLENBQUMsRUFDOUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUcsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzRixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUcsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FDTDthQUNBLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDN0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoRixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtRQUVSLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDN0IsRUFBRSxDQUFDLEdBQUcsRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUcsT0FBTyxFQUFDLEdBQUcsRUFBQyxDQUFDO2FBQ25DLEVBQUUsQ0FBQyxJQUFJLEVBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLENBQUM7YUFDdEIsRUFBRSxDQUFDLElBQUksRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQzthQUN0QixFQUFFLENBQUMsR0FBRyxFQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFHLE9BQU8sRUFBQyxDQUFDLEdBQUcsRUFBRyxRQUFRLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDL0QsS0FBSyxFQUFFLENBQUE7UUFFUixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRW5DLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBRUosbURBQW1EO1FBQ25ELG9EQUFvRDtRQUNwRCxHQUFHO1FBQ0gsa0RBQWtEO1FBQ2xELG9EQUFvRDtRQUU1QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQztRQUVyRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUMsR0FBRyxDQUFDO1FBQ3hELDZDQUE2QztRQUM3QyxnREFBZ0Q7UUFFaEQsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNwRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRWxELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLG9EQUFpRCxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsd0JBQW9CLENBQUE7UUFDMUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLEVBQUcsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZGLENBQUM7SUFySEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQztxREFDWTtJQUd4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO21EQUNVO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tEQUNRO0lBeEJiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0SDlCO0lBQUQsaUJBQUM7Q0E1SEQsQUE0SEMsQ0E1SHVDLEVBQUUsQ0FBQyxTQUFTLEdBNEhuRDtrQkE1SG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29tU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBzbW9rZVBhcnRpY2xlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXG4gICAgZm9nUGFydGljbGU6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDsgXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaWdodE5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzcHJlYWRSaW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGlubmVyUmluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvdXRlclJpbmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgSGFsbzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgaW5kZXhMYWJlbDpjYy5SaWNoVGV4dCA9IG51bGw7IFxuXG4gICAgdGFyZ2V0UmFkaXVzOm51bWJlciA9IG51bGw7ICBcbiAgICBpbmRleDpudW1iZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByYXRlOm51bWJlciA9IG51bGw7XG5cbiAgICB0aW1lOm51bWJlciA9IDA7XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgYm9vbVNjcmlwdCBvbkRlc3Ryb3lgKTsgXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCByYXRlID0gMS4wO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgcmF0ZSAqPSAwLjk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYXRlID0gcmF0ZTtcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpOyBcbiAgICB9XG5cbiAgICBzdGFydCgpIHsgXG4gICAgICAgIFxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnRhcmdldFJhZGl1cyAqIHRoaXMucmF0ZSAvIDgwLjA7XG4gICAgICAgIHRoaXMudGltZSA9IDAuNjUgKiBzY2FsZTsgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNwcmVhZFJpbmcuc2NhbGUgPSAwO1xuICAgICAgXG4gICAgICAgIHRoaXMubGlnaHROb2RlLnNjYWxlID0gMi4wICogdGhpcy5yYXRlICp0aGlzLnRhcmdldFJhZGl1cy8yNzggO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxpZ2h0Tm9kZSlcbiAgICAgICAgLmRlbGF5KDAuMDgpXG4gICAgICAgIC50bygwLjAyICwge3NjYWxlOjQuNSAqIHRoaXMucmF0ZSAqdGhpcy50YXJnZXRSYWRpdXMvMjc4fSkgXG4gICAgICAgIC5jYWxsKCgpPT4geyBcbiAgICAgICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xuICAgICAgICB9KVxuICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMudGltZSAqIDAuNSAse3NjYWxlOjMuMCAqIHRoaXMucmF0ZSAqdGhpcy50YXJnZXRSYWRpdXMvMjc4fSksICBcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwcmVhZFJpbmcpLnRvKHRoaXMudGltZSAqIDAuNSAsIHtzY2FsZToxLjB9KS50bygwLjAxICwge29wYWNpdHk6MH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5IYWxvKS50byh0aGlzLnRpbWUgKiAwLjUgLCB7b3BhY2l0eTowIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmlubmVyUmluZykudG8odGhpcy50aW1lICogMC4zICwge3NjYWxlOjAuNSwgb3BhY2l0eTowfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vdXRlclJpbmcpLnRvKHRoaXMudGltZSAqIDAuNiAsIHtzY2FsZToyICwgb3BhY2l0eTowfSkuc3RhcnQoKVxuICAgICAgICB9KVxuICAgICAgICAuZGVsYXkoMS4wKVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCkgXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5pbmRleExhYmVsLm5vZGUpIFxuICAgICAgICAudG8oMC4xICwge3NjYWxlOjEuNSAsIG9wYWNpdHk6MjU1fSlcbiAgICAgICAgLnRvKDAuMzUgLCB7c2NhbGU6MC42fSlcbiAgICAgICAgLnRvKDAuMzUgLCB7c2NhbGU6MS4zfSlcbiAgICAgICAgLmJ5KDAuNCAsIHtzY2FsZTotMSAsIG9wYWNpdHk6LTI1NSAsIHBvc2l0aW9uOmNjLnYzKDAgLCA1MCAsMCl9KSBcbiAgICAgICAgLnN0YXJ0KClcbiAgICAgICBcbiAgICAgICAgdGhpcy5mb2dQYXJ0aWNsZS5yZXNldFN5c3RlbSgpOyBcblxuICAgIH1cblxuICAgIGluaXREYXRhKCkgeyBcbiAgICAgICAgXG4vLyAgICAgICAgIHRoaXMubGlnaHQwMy53aWR0aCA9ICB0aGlzLnRhcmdldFJhZGl1cztcbi8vICAgICAgICAgdGhpcy5saWdodDAzLmhlaWdodCA9ICB0aGlzLnRhcmdldFJhZGl1cztcbi8vIFxuLy8gICAgICAgICB0aGlzLmxpZ2h0MDQud2lkdGggPSB0aGlzLnRhcmdldFJhZGl1cztcbi8vICAgICAgICAgdGhpcy5saWdodDA0LmhlaWdodCA9IHRoaXMudGFyZ2V0UmFkaXVzOyBcblxuICAgICAgICB0aGlzLnNtb2tlUGFydGljbGUuc3RhcnRTaXplID0gdGhpcy50YXJnZXRSYWRpdXMvMjtcbiAgICAgICAgdGhpcy5zbW9rZVBhcnRpY2xlLnN0YXJ0U2l6ZVZhciA9IHRoaXMudGFyZ2V0UmFkaXVzLzQ7XG5cbiAgICAgICAgdGhpcy5zbW9rZVBhcnRpY2xlLmVuZFNpemUgPSB0aGlzLnRhcmdldFJhZGl1cy82O1xuICAgICAgICB0aGlzLnNtb2tlUGFydGljbGUuZW5kU2l6ZVZhciA9IHRoaXMudGFyZ2V0UmFkaXVzLzEyO1xuXG4gICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5zdGFydFJhZGl1cyA9IHRoaXMudGFyZ2V0UmFkaXVzLzQ7XG4gICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5zdGFydFJhZGl1c1ZhciA9IHRoaXMudGFyZ2V0UmFkaXVzLzIwO1xuXG4gICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5lbmRSYWRpdXMgPSB0aGlzLnRhcmdldFJhZGl1cyAqIDIuNSAqdGhpcy5yYXRlO1xuICAgICAgICB0aGlzLnNtb2tlUGFydGljbGUuZW5kUmFkaXVzVmFyID0gdGhpcy50YXJnZXRSYWRpdXMvMTAwO1xuICAgICAgICAvLyB0aGlzLnNtb2tlUGFydGljbGUubGlmZSA9IHRoaXMudGltZSAqIDAuNTtcbiAgICAgICAgLy8gdGhpcy5zbW9rZVBhcnRpY2xlLmxpZmVWYXIgPSB0aGlzLnRpbWUgKiAwLjE7XG5cbiAgICAgICAgLy8gdGhpcy5mb2dQYXJ0aWNsZS5kdXJhdGlvbiA9IDAuNCAqIHRoaXMucmF0ZTtcbiAgICAgICAgdGhpcy5mb2dQYXJ0aWNsZS5zdGFydFJhZGl1cyA9IHRoaXMudGFyZ2V0UmFkaXVzICoxLjggKnRoaXMucmF0ZTtcbiAgICAgICAgdGhpcy5mb2dQYXJ0aWNsZS5zdGFydFJhZGl1c1ZhciA9IDIwO1xuXG4gICAgICAgIHRoaXMuZm9nUGFydGljbGUuZW5kUmFkaXVzID0gdGhpcy50YXJnZXRSYWRpdXMgKiAzLjAgKnRoaXMucmF0ZSArIHRoaXMudGFyZ2V0UmFkaXVzO1xuICAgICAgICB0aGlzLmZvZ1BhcnRpY2xlLmVuZFJhZGl1c1ZhciA9IHRoaXMudGFyZ2V0UmFkaXVzOyBcblxuICAgICAgICB0aGlzLmluZGV4TGFiZWwuc3RyaW5nID0gYDxjb2xvcj0jRkZEQjAwPjxvdXRsaW5lIGNvbG9yPSNGRjgwMDAgd2lkdGg9MT4ke3RoaXMuaW5kZXgrMX08L291dGxpbmU+PC9jb2xvcj5gXG4gICAgICAgIHRoaXMuaW5kZXhMYWJlbC5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKHRoaXMudGFyZ2V0UmFkaXVzLzIgICx0aGlzLnRhcmdldFJhZGl1cy80KSk7XG5cbiAgICB9XG5cbiAgIFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=