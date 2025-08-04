
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/TrayScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVHJheVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXlCQztRQXRCRyxjQUFRLEdBQVksSUFBSSxDQUFDOztRQXFCekIsaUJBQWlCO0lBQ3JCLENBQUM7SUFwQkcsZUFBZTtJQUVmLDBCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQ2YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDZixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ2xELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNqRCxFQUNELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQ2YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUNsRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2hELENBQ0osQ0FDSjthQUNBLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQUhSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5QjlCO0lBQUQsaUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QnVDLEVBQUUsQ0FBQyxTQUFTLEdBeUJuRDtrQkF6Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF5U2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYmlyZE5vZGUpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnBhcmFsbGVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLjIsIHsgc2NhbGVYOiAxLjA2LCBzY2FsZVk6IDAuOTUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDEuMiwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTUpIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDEuMiwgeyBzY2FsZVg6IDAuOTUsIHNjYWxlWTogMS4wNSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMS4yLCB7IHBvc2l0aW9uOiBjYy52MigwLCA1KSB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==