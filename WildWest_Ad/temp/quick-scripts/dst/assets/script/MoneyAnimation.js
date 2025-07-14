
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MoneyAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc6e6gFH2hG2IwLV87M0Mnw', 'MoneyAnimation');
// script/MoneyAnimation.ts

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
function randomMinus1To1() {
    return Math.random() * 2 - 1;
}
var MoneyAnimation = /** @class */ (function (_super) {
    __extends(MoneyAnimation, _super);
    function MoneyAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moneyPrefab = null;
        _this.emitCount = 8; // 发射数量
        _this.speed = 300; // 速度（像素/秒）
        _this.rotateSpeed = 360; // 旋转速度（度/秒）
        return _this;
    }
    MoneyAnimation.prototype.onLoad = function () {
        // 确保moneyPrefab已设置
        if (!this.moneyPrefab) {
            cc.error("Money prefab is not set!");
            return;
        }
        this.emitMoney();
    };
    /**
     * 调用该函数触发飞钱动画
     */
    MoneyAnimation.prototype.emitMoney = function () {
        var center = cc.v2(0, 0); // 本节点为中心（相对当前节点坐标）
        var radius = 200; // 飞行半径
        var _loop_1 = function (i) {
            // 每个物体的发射角
            var angle = (2 * Math.PI / this_1.emitCount) * i + randomMinus1To1() * 0.1;
            var direction = cc.v2(Math.cos(angle), Math.sin(angle));
            var dest = center.add(direction.mul(radius));
            // 实例化money对象
            var moneyNode = cc.instantiate(this_1.moneyPrefab);
            moneyNode.parent = this_1.node;
            moneyNode.setPosition(center);
            moneyNode.setScale(0.7);
            var distance = center.sub(dest).mag();
            var duration = distance / this_1.speed;
            // 旋转目标
            var finalAngle = this_1.rotateSpeed * duration;
            // 用 cc.tween 添加飞行和旋转动画（2.2.1支持cc.tween）
            cc.tween(moneyNode)
                .to(duration, {
                position: cc.v3(dest.x, dest.y, 0),
                angle: finalAngle
            }, { easing: 'sineInOut' })
                .call(function () {
                moneyNode.destroy();
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < this.emitCount; ++i) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], MoneyAnimation.prototype, "moneyPrefab", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "emitCount", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "speed", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "rotateSpeed", void 0);
    MoneyAnimation = __decorate([
        ccclass
    ], MoneyAnimation);
    return MoneyAnimation;
}(cc.Component));
exports.default = MoneyAnimation;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTW9uZXlBbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsU0FBUyxlQUFlO0lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUdEO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBMkRDO1FBeERHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBRyxPQUFPO1FBR2hDLFdBQUssR0FBVyxHQUFHLENBQUMsQ0FBSyxXQUFXO1FBR3BDLGlCQUFXLEdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWTs7SUErQzNDLENBQUM7SUE3Q0csK0JBQU0sR0FBTjtRQUNJLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGtDQUFTLEdBQWhCO1FBQ0ksSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDL0MsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQVMsT0FBTztnQ0FFMUIsQ0FBQztZQUNOLFdBQVc7WUFDWCxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUMzRSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRS9DLGFBQWE7WUFDYixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssV0FBVyxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFLLElBQUksQ0FBQztZQUM3QixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsT0FBSyxLQUFLLENBQUM7WUFFckMsT0FBTztZQUNQLElBQUksVUFBVSxHQUFHLE9BQUssV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUM3Qyx3Q0FBd0M7WUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7aUJBQ2QsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDVixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLEVBQUUsVUFBVTthQUNwQixFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUMxQixJQUFJLENBQUM7Z0JBQ0YsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQzs7O1FBMUJqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7b0JBQTlCLENBQUM7U0EyQlQ7SUFDTCxDQUFDO0lBdkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1U7SUFHOUI7UUFEQyxRQUFRO3FEQUNhO0lBR3RCO1FBREMsUUFBUTtpREFDVztJQUdwQjtRQURDLFFBQVE7dURBQ2lCO0lBWlQsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJEbEM7SUFBRCxxQkFBQztDQTNERCxBQTJEQyxDQTNEMkMsRUFBRSxDQUFDLFNBQVMsR0EyRHZEO2tCQTNEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuZnVuY3Rpb24gcmFuZG9tTWludXMxVG8xKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmV5QW5pbWF0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbW9uZXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBlbWl0Q291bnQ6IG51bWJlciA9IDg7ICAgLy8g5Y+R5bCE5pWw6YePXG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMzAwOyAgICAgLy8g6YCf5bqm77yI5YOP57SgL+enku+8iVxuXG4gICAgQHByb3BlcnR5XG4gICAgcm90YXRlU3BlZWQ6IG51bWJlciA9IDM2MDsgLy8g5peL6L2s6YCf5bqm77yI5bqmL+enku+8iVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDnoa7kv51tb25leVByZWZhYuW3suiuvue9rlxuICAgICAgICBpZiAoIXRoaXMubW9uZXlQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTW9uZXkgcHJlZmFiIGlzIG5vdCBzZXQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdE1vbmV5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6LCD55So6K+l5Ye95pWw6Kem5Y+R6aOe6ZKx5Yqo55S7XG4gICAgICovXG4gICAgcHVibGljIGVtaXRNb25leSgpIHtcbiAgICAgICAgY29uc3QgY2VudGVyID0gY2MudjIoMCwgMCk7IC8vIOacrOiKgueCueS4uuS4reW/g++8iOebuOWvueW9k+WJjeiKgueCueWdkOagh++8iVxuICAgICAgICBjb25zdCByYWRpdXMgPSAyMDA7ICAgICAgICAgLy8g6aOe6KGM5Y2K5b6EXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVtaXRDb3VudDsgKytpKSB7XG4gICAgICAgICAgICAvLyDmr4/kuKrniankvZPnmoTlj5HlsITop5JcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJIC8gdGhpcy5lbWl0Q291bnQpICogaSArIHJhbmRvbU1pbnVzMVRvMSgpICogMC4xO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gY2MudjIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgY29uc3QgZGVzdCA9IGNlbnRlci5hZGQoZGlyZWN0aW9uLm11bChyYWRpdXMpKTtcblxuICAgICAgICAgICAgLy8g5a6e5L6L5YyWbW9uZXnlr7nosaFcbiAgICAgICAgICAgIGxldCBtb25leU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1vbmV5UHJlZmFiKTtcbiAgICAgICAgICAgIG1vbmV5Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBtb25leU5vZGUuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgICAgIG1vbmV5Tm9kZS5zZXRTY2FsZSgwLjcpO1xuXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjZW50ZXIuc3ViKGRlc3QpLm1hZygpO1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyB0aGlzLnNwZWVkO1xuXG4gICAgICAgICAgICAvLyDml4vovaznm67moIdcbiAgICAgICAgICAgIGxldCBmaW5hbEFuZ2xlID0gdGhpcy5yb3RhdGVTcGVlZCAqIGR1cmF0aW9uO1xuICAgICAgICAgICAgLy8g55SoIGNjLnR3ZWVuIOa3u+WKoOmjnuihjOWSjOaXi+i9rOWKqOeUu++8iDIuMi4x5pSv5oyBY2MudHdlZW7vvIlcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5Tm9kZSlcbiAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKGRlc3QueCxkZXN0LnksMCksXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiBmaW5hbEFuZ2xlXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb25leU5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=