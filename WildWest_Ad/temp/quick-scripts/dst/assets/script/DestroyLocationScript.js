
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/DestroyLocationScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRGVzdHJveUxvY2F0aW9uU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBaUNDO1FBOUJHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxXQUFLLEdBQVUsQ0FBQyxDQUFBO1FBRWhCLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBd0J6QixpQkFBaUI7SUFDckIsQ0FBQztJQXZCRyxzQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLHFDQUFLLEdBQUw7UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBQyxLQUFLLENBQUM7UUFFbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDOUUsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsSUFBRyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNkLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBRXBCLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDTztJQUhSLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBaUN6QztJQUFELDRCQUFDO0NBakNELEFBaUNDLENBakNrRCxFQUFFLENBQUMsU0FBUyxHQWlDOUQ7a0JBakNvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0cm95TG9jYXRpb25TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgbG9jYXRpb25Qb3M6Y2MuVmVjMiA9IGNjLnYyKDAsMCk7XG4gICAgd2lkdGg6bnVtYmVyID0gMFxuXG4gICAgY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkgeyB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5zcXJ0KChNYXRoLnBvdyhjYy53aW5TaXplLndpZHRoLCAyKSArIE1hdGgucG93KGNjLndpblNpemUuaGVpZ2h0LCAyKSkpOyBcbiAgICAgICAgdGhpcy5tYXNrTm9kZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLm1hc2tOb2RlLmhlaWdodCA9IHdpZHRoO1xuXG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMud2lkdGggKiAxLjAvd2lkdGg7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5tYXNrTm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC43LCB7IHNjYWxlLCBwb3NpdGlvbjogY2MudjModGhpcy5sb2NhdGlvblBvcy54LCB0aGlzLmxvY2F0aW9uUG9zLnksIDApIH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMilcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgIFxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=