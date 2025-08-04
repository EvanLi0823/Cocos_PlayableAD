
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/InputController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01f5emIrIpEorzhS4Ba4YOo', 'InputController');
// script/qiuScript/InputController.ts

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
var gameConfig_1 = require("../gameConfig");
var JsbSdkScript_1 = require("../PlatformInteraction/JsbSdkScript");
var GameManager_1 = require("./GameManager");
var qiuMoveScript_1 = require("./qiuMoveScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InputController = /** @class */ (function (_super) {
    __extends(InputController, _super);
    function InputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.warnGraphicLine = null;
        _this.touchNum = 0;
        _this.aTween = null;
        _this.obj = { apl: 0 };
        return _this;
        // update (dt) {}
    }
    InputController.prototype.onLoad = function () {
    };
    InputController.prototype.start = function () {
    };
    InputController.prototype.openTouch = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    InputController.prototype.onTouchStart = function (e) {
        if (this.touchNum == -1) {
            return;
        }
        if (cc.isValid(GameManager_1.default.Instance.targetQiu, true)) {
            this.touchNum = 1;
            // let posx = this.node.convertToNodeSpaceAR(e.getLocation()).x;
            // let posy = GameManager.Instance.targetQiu.y;
            // cc.tween(GameManager.Instance.targetQiu)
            //     .to(0.1, { position: cc.v3(posx, posy, 0) })
            //     .start();
            //
            // cc.tween(GameManager.Instance.trayBirdNode)
            //     .to(0.1, { position: cc.v3(posx, GameManager.Instance.trayBirdNode.y, 0) })
            //     .start()
        }
    };
    InputController.prototype.onTouchMove = function (e) {
        if (this.touchNum == -1) {
            return;
        }
        if (cc.isValid(GameManager_1.default.Instance.targetQiu, true)) {
            this.touchNum = 1;
            // let pos = this.node.convertToNodeSpaceAR(e.getLocation());
            // GameManager.Instance.targetQiu.x = pos.x;
            // GameManager.Instance.trayBirdNode.x = pos.x;
            // let moveScript = GameManager.Instance.targetQiu.getComponent(qiuMoveScript);
            // if(cc.isValid(moveScript , true)) {
            //     moveScript.raylineCheck();
            // }
        }
    };
    InputController.prototype.onTouchEnd = function (e) {
        if (cc.isValid(GameManager_1.default.Instance.targetQiu, true) && this.touchNum == 1) {
            this.touchNum = 0;
            var pos = this.node.convertToNodeSpaceAR(e.getLocation());
            // if (pos.x > cc.winSize.width / 2 - 1 || pos.x < -cc.winSize.width / 2 + 1) {
            //     pos.x = Math.max(-cc.winSize.width / 2 + 1, Math.min(cc.winSize.width / 2 - 1, pos.x));
            // }
            // GameManager.Instance.targetQiu.x = pos.x;
            // GameManager.Instance.trayBirdNode.x = pos.x;
            var targetQiu_1 = GameManager_1.default.Instance.targetQiu;
            GameManager_1.default.Instance.targetQiu = null;
            var birdY = GameManager_1.default.Instance.trayBirdNode.y;
            cc.tween(GameManager_1.default.Instance.trayBirdNode)
                // .to(0.07, { position: cc.v3(pos.x, birdY + 60, 0) })
                // .to(0.03, { position: cc.v3(pos.x, birdY, 0) })
                .call(function () {
                if (cc.isValid(targetQiu_1, true)) {
                    var com = targetQiu_1.getComponent(qiuMoveScript_1.default);
                    if (cc.isValid(com, true)) {
                        com.isDown = true;
                    }
                    targetQiu_1.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                    targetQiu_1.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -900);
                }
                // GameManager.Instance.targetQiu = null;
            })
                .start();
            if (gameConfig_1.default.isNewer == true) {
                gameConfig_1.default.saveNewer();
                JsbSdkScript_1.default.buryPoint("debug_game_start_first", "");
            }
            // this.scheduleOnce(() => {
            //     GameManager.Instance.createOneQiu();
            // }, 0.6);
        }
    };
    InputController.prototype.showWarn = function (isShow, warnLineHeigh) {
        if (isShow) {
            if (cc.isValid(this.warnGraphicLine, true) == false) {
                this.warnGraphicLine = this.node.addComponent(cc.Graphics);
            }
            this.drawLineOfDashes(this.warnGraphicLine, cc.v2(-cc.winSize.width / 2, warnLineHeigh), cc.v2(cc.winSize.width / 2, warnLineHeigh), 255);
            // if (cc.isValid(this.aTween, true)) {
            //     this.aTween.stop();
            //     this.aTween = null;
            // }
            //             let currentT = 0;
            //             this.aTween = cc.tween(this.obj)
            //                 .repeatForever(
            //                     cc.tween()
            //                         .by(5, { apl: 255 }, {
            //                             progress: (start, end: number, current, t: number) => {
            //                                 if(Math.abs(t - currentT) < 0.04) {
            //                                     return
            //                                 }
            //                                 currentT = t; 
            //                                 this.obj.apl = Math.floor(255 * t);
            //                                 console.log(`111 ${start} | ${end}| ${current} ${t} | ${this.obj.apl}`); 
            // 
            //                                 this.drawLineOfDashes(this.warnGraphicLine, cc.v2(-cc.winSize.width / 2, warnLineHeigh), cc.v2(cc.winSize.width / 2, warnLineHeigh) , this.obj.apl)
            //                              
            //                             }
            //                         })
            //                         .call(()=> {
            //                             this.obj.apl = 255;
            //                         })
            //                         .delay(0.4)
            //                         .to(5, { apl: 0 }, {
            //                             progress: (start, end: number, current, t: number) => {
            //                                 if(Math.abs(t - currentT) < 0.04) {
            //                                     return
            //                                 }
            //                                 currentT = t; 
            //                                 this.obj.apl = Math.floor(255 * t );
            //                                 console.log(`222 ${start} | ${end}| ${current} ${t}| ${this.obj.apl}`);
            //                                 this.drawLineOfDashes(this.warnGraphicLine, cc.v2(-cc.winSize.width / 2, warnLineHeigh), cc.v2(cc.winSize.width / 2, warnLineHeigh) , this.obj.apl)
            //                             }
            //                         })
            //                         .call(()=> {
            //                             this.obj.apl = 0;
            //                         })
            //                         .delay(0.4)
            //                 )
            //                 .start()
        }
        else {
            // if (cc.isValid(this.aTween, true)) {
            //     this.aTween.stop();
            //     this.aTween = null;
            // }
            if (cc.isValid(this.warnGraphicLine, true)) {
                this.warnGraphicLine.destroy();
            }
        }
    };
    InputController.prototype.drawLineOfDashes = function (g, from, to, alp, color, stroke, length, interval) {
        if (color === void 0) { color = '#FF4E4E'; }
        if (stroke === void 0) { stroke = true; }
        if (length === void 0) { length = 20; }
        if (interval === void 0) { interval = 20; }
        if (g) {
            //以 from：cc.v2(100, -100), to: cc.v2(500, -500) 为例
            var off = to.sub(from); //向量减法 值为cc.v2(400, -400)
            // console.log('向量减法', off)
            var dir = off.normalize(); //向量归一化法  值为cc.v2(0.707。。。, -0.707。。。)
            // console.log('向量归一化法', dir)
            var dis = off.mag(); //返回该向量的长度  值为 565.685424949238
            // console.log('向量的长度', dis)
            var delta = dir.mul(length + interval); // 缩放向量，并返回新结果 值为cc.v2(21.213。。。, -21.213。。。)
            // console.log('缩放向量', delta)
            var delta1 = dir.mul(length); //值为cc.v2(14.142。。。, -14.142。。。)
            // console.log('缩放向量', delta1)
            var offset = 0;
            var mn = 3;
            if (mn > interval) {
                offset = mn - interval;
            }
            var n = Math.floor(dis / (length + interval));
            g.lineWidth = 5; //线宽 
            g.strokeColor.fromHEX("FF6969");
            g.strokeColor.setA(alp);
            if (offset) {
                n--;
                g.moveTo(from.x, from.y);
                var start0 = from.add(cc.v2(dir.x * offset, dir.y * offset));
                g.circle(start0.x, start0.y, 2);
            }
            from = from.add(cc.v2(dir.x * mn, dir.y * mn));
            for (var i = 0; i < n; ++i) {
                var start = from.add(delta.mul(i));
                g.moveTo(start.x, start.y);
                var end = start.add(delta1);
                g.circle(end.x, end.y, 1);
            }
            var start1 = from.add(delta.mul(n));
            g.moveTo(start1.x, start1.y);
            if (length < dis - (length + interval) * n - mn) {
                var end = start1.add(delta1);
                g.circle(end.x, end.y, 1);
            }
            else {
                g.circle(to.x, to.y, 1);
            }
            if (stroke)
                g.stroke();
        }
    };
    InputController = __decorate([
        ccclass
    ], InputController);
    return InputController;
}(cc.Component));
exports.default = InputController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L0lucHV0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsb0VBQStEO0FBQy9ELDZDQUF3QztBQUN4QyxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFtTkM7UUFqTkcscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUE7O1FBME1oQixpQkFBaUI7SUFDckIsQ0FBQztJQTFNRyxnQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxD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QUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBak5nQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBbU5uQztJQUFELHNCQUFDO0NBbk5ELEFBbU5DLENBbk40QyxFQUFFLENBQUMsU0FBUyxHQW1OeEQ7a0JBbk5vQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4uL2dhbWVDb25maWdcIjtcbmltcG9ydCBKc2JTZGtTY3JpcHQgZnJvbSBcIi4uL1BsYXRmb3JtSW50ZXJhY3Rpb24vSnNiU2RrU2NyaXB0XCI7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBxaXVNb3ZlU2NyaXB0IGZyb20gXCIuL3FpdU1vdmVTY3JpcHRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICB3YXJuR3JhcGhpY0xpbmU6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHRvdWNoTnVtOiBudW1iZXIgPSAwO1xuXG4gICAgYVR3ZWVuOiBjYy5Ud2VlbiA9IG51bGw7XG5cbiAgICBvYmogPSB7IGFwbDogMCB9XG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvcGVuVG91Y2goKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcblxuICAgICAgICBpZiAodGhpcy50b3VjaE51bSA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1LCB0cnVlKSkge1xuICAgICAgICAgICAgdGhpcy50b3VjaE51bSA9IDE7XG4gICAgICAgICAgICAvLyBsZXQgcG9zeCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLmdldExvY2F0aW9uKCkpLng7XG4gICAgICAgICAgICAvLyBsZXQgcG9zeSA9IEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdS55O1xuICAgICAgICAgICAgLy8gY2MudHdlZW4oR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1KVxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHBvc3gsIHBvc3ksIDApIH0pXG4gICAgICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gY2MudHdlZW4oR2FtZU1hbmFnZXIuSW5zdGFuY2UudHJheUJpcmROb2RlKVxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHBvc3gsIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRyYXlCaXJkTm9kZS55LCAwKSB9KVxuICAgICAgICAgICAgLy8gICAgIC5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoTnVtID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2MuaXNWYWxpZChHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUsIHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTnVtID0gMTtcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIC8vIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdS54ID0gcG9zLng7XG4gICAgICAgICAgICAvLyBHYW1lTWFuYWdlci5JbnN0YW5jZS50cmF5QmlyZE5vZGUueCA9IHBvcy54O1xuICAgICAgICAgICAgLy8gbGV0IG1vdmVTY3JpcHQgPSBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUuZ2V0Q29tcG9uZW50KHFpdU1vdmVTY3JpcHQpO1xuICAgICAgICAgICAgLy8gaWYoY2MuaXNWYWxpZChtb3ZlU2NyaXB0ICwgdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vICAgICBtb3ZlU2NyaXB0LnJheWxpbmVDaGVjaygpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdSwgdHJ1ZSkgJiYgdGhpcy50b3VjaE51bSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTnVtID0gMDtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgLy8gaWYgKHBvcy54ID4gY2Mud2luU2l6ZS53aWR0aCAvIDIgLSAxIHx8IHBvcy54IDwgLWNjLndpblNpemUud2lkdGggLyAyICsgMSkge1xuICAgICAgICAgICAgLy8gICAgIHBvcy54ID0gTWF0aC5tYXgoLWNjLndpblNpemUud2lkdGggLyAyICsgMSwgTWF0aC5taW4oY2Mud2luU2l6ZS53aWR0aCAvIDIgLSAxLCBwb3MueCkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1LnggPSBwb3MueDtcbiAgICAgICAgICAgIC8vIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRyYXlCaXJkTm9kZS54ID0gcG9zLng7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXRRaXUgPSBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXU7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGJpcmRZID0gR2FtZU1hbmFnZXIuSW5zdGFuY2UudHJheUJpcmROb2RlLnk7XG4gICAgICAgICAgICBjYy50d2VlbihHYW1lTWFuYWdlci5JbnN0YW5jZS50cmF5QmlyZE5vZGUpXG4gICAgICAgICAgICAgICAgLy8gLnRvKDAuMDcsIHsgcG9zaXRpb246IGNjLnYzKHBvcy54LCBiaXJkWSArIDYwLCAwKSB9KVxuICAgICAgICAgICAgICAgIC8vIC50bygwLjAzLCB7IHBvc2l0aW9uOiBjYy52Myhwb3MueCwgYmlyZFksIDApIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihjYy5pc1ZhbGlkKHRhcmdldFFpdSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb20gPSB0YXJnZXRRaXUuZ2V0Q29tcG9uZW50KHFpdU1vdmVTY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2MuaXNWYWxpZChjb20sIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tLmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFFpdS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgLTkwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAgICAgaWYgKGdhbWVDb25maWcuaXNOZXdlciA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBnYW1lQ29uZmlnLnNhdmVOZXdlcigpO1xuICAgICAgICAgICAgICAgIEpzYlNka1NjcmlwdC5idXJ5UG9pbnQoXCJkZWJ1Z19nYW1lX3N0YXJ0X2ZpcnN0XCIsXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS5jcmVhdGVPbmVRaXUoKTtcbiAgICAgICAgICAgIC8vIH0sIDAuNik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93V2Fybihpc1Nob3c6IGJvb2xlYW4sIHdhcm5MaW5lSGVpZ2g6IG51bWJlcikge1xuXG4gICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMud2FybkdyYXBoaWNMaW5lLCB0cnVlKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybkdyYXBoaWNMaW5lID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXdMaW5lT2ZEYXNoZXModGhpcy53YXJuR3JhcGhpY0xpbmUsIGNjLnYyKC1jYy53aW5TaXplLndpZHRoIC8gMiwgd2FybkxpbmVIZWlnaCksIGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCB3YXJuTGluZUhlaWdoKSwgMjU1KVxuICAgICAgICAgICAgLy8gaWYgKGNjLmlzVmFsaWQodGhpcy5hVHdlZW4sIHRydWUpKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hVHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuYVR3ZWVuID0gbnVsbDtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGN1cnJlbnRUID0gMDtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYVR3ZWVuID0gY2MudHdlZW4odGhpcy5vYmopXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC5ieSg1LCB7IGFwbDogMjU1IH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQ6IG51bWJlciwgY3VycmVudCwgdDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKHQgLSBjdXJyZW50VCkgPCAwLjA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IHQ7IFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5hcGwgPSBNYXRoLmZsb29yKDI1NSAqIHQpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgMTExICR7c3RhcnR9IHwgJHtlbmR9fCAke2N1cnJlbnR9ICR7dH0gfCAke3RoaXMub2JqLmFwbH1gKTsgXG4gICAgICAgICAgICAvLyBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZU9mRGFzaGVzKHRoaXMud2FybkdyYXBoaWNMaW5lLCBjYy52MigtY2Mud2luU2l6ZS53aWR0aCAvIDIsIHdhcm5MaW5lSGVpZ2gpLCBjYy52MihjYy53aW5TaXplLndpZHRoIC8gMiwgd2FybkxpbmVIZWlnaCkgLCB0aGlzLm9iai5hcGwpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5hcGwgPSAyNTU7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNClcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC50byg1LCB7IGFwbDogMCB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kOiBudW1iZXIsIGN1cnJlbnQsIHQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihNYXRoLmFicyh0IC0gY3VycmVudFQpIDwgMC4wNCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFQgPSB0OyBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouYXBsID0gTWF0aC5mbG9vcigyNTUgKiB0ICk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAyMjIgJHtzdGFydH0gfCAke2VuZH18ICR7Y3VycmVudH0gJHt0fXwgJHt0aGlzLm9iai5hcGx9YCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xpbmVPZkRhc2hlcyh0aGlzLndhcm5HcmFwaGljTGluZSwgY2MudjIoLWNjLndpblNpemUud2lkdGggLyAyLCB3YXJuTGluZUhlaWdoKSwgY2MudjIoY2Mud2luU2l6ZS53aWR0aCAvIDIsIHdhcm5MaW5lSGVpZ2gpICwgdGhpcy5vYmouYXBsKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5hcGwgPSAwO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjQpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIChjYy5pc1ZhbGlkKHRoaXMuYVR3ZWVuLCB0cnVlKSkge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuYVR3ZWVuLnN0b3AoKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFUd2VlbiA9IG51bGw7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLndhcm5HcmFwaGljTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5HcmFwaGljTGluZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3TGluZU9mRGFzaGVzKGc6IGNjLkdyYXBoaWNzLCBmcm9tOiBjYy5WZWMyLCB0bzogY2MuVmVjMiwgYWxwOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSAnI0ZGNEU0RScsIHN0cm9rZTogYm9vbGVhbiA9IHRydWUsIGxlbmd0aDogbnVtYmVyID0gMjAsIGludGVydmFsOiBudW1iZXIgPSAyMCk6IHZvaWQge1xuICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgLy/ku6UgZnJvbe+8mmNjLnYyKDEwMCwgLTEwMCksIHRvOiBjYy52Mig1MDAsIC01MDApIOS4uuS+i1xuICAgICAgICAgICAgbGV0IG9mZiA9IHRvLnN1Yihmcm9tKTsvL+WQkemHj+WHj+azlSDlgLzkuLpjYy52Mig0MDAsIC00MDApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5ZCR6YeP5YeP5rOVJywgb2ZmKVxuICAgICAgICAgICAgbGV0IGRpciA9IG9mZi5ub3JtYWxpemUoKTsvL+WQkemHj+W9kuS4gOWMluazlSAg5YC85Li6Y2MudjIoMC43MDfjgILjgILjgIIsIC0wLjcwN+OAguOAguOAgilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflkJHph4/lvZLkuIDljJbms5UnLCBkaXIpXG4gICAgICAgICAgICBsZXQgZGlzID0gb2ZmLm1hZygpOy8v6L+U5Zue6K+l5ZCR6YeP55qE6ZW/5bqmICDlgLzkuLogNTY1LjY4NTQyNDk0OTIzOFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WQkemHj+eahOmVv+W6picsIGRpcylcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGRpci5tdWwobGVuZ3RoICsgaW50ZXJ2YWwpOy8vIOe8qeaUvuWQkemHj++8jOW5tui/lOWbnuaWsOe7k+aenCDlgLzkuLpjYy52MigyMS4yMTPjgILjgILjgIIsIC0yMS4yMTPjgILjgILjgIIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn57yp5pS+5ZCR6YePJywgZGVsdGEpXG4gICAgICAgICAgICBsZXQgZGVsdGExID0gZGlyLm11bChsZW5ndGgpOyAgIC8v5YC85Li6Y2MudjIoMTQuMTQy44CC44CC44CCLCAtMTQuMTQy44CC44CC44CCKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+e8qeaUvuWQkemHjycsIGRlbHRhMSlcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgbGV0IG1uID0gMztcbiAgICAgICAgICAgIGlmIChtbiA+IGludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW4gLSBpbnRlcnZhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKGRpcyAvIChsZW5ndGggKyBpbnRlcnZhbCkpO1xuICAgICAgICAgICAgZy5saW5lV2lkdGggPSA1Oy8v57q/5a69IFxuICAgICAgICAgICAgZy5zdHJva2VDb2xvci5mcm9tSEVYKGBGRjY5NjlgKVxuICAgICAgICAgICAgZy5zdHJva2VDb2xvci5zZXRBKGFscClcbiAgICAgICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBuLS07XG4gICAgICAgICAgICAgICAgZy5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydDAgPSBmcm9tLmFkZChjYy52MihkaXIueCAqIG9mZnNldCwgZGlyLnkgKiBvZmZzZXQpKTtcbiAgICAgICAgICAgICAgICBnLmNpcmNsZShzdGFydDAueCwgc3RhcnQwLnksIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJvbSA9IGZyb20uYWRkKGNjLnYyKGRpci54ICogbW4sIGRpci55ICogbW4pKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBmcm9tLmFkZChkZWx0YS5tdWwoaSkpO1xuICAgICAgICAgICAgICAgIGcubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBzdGFydC5hZGQoZGVsdGExKTtcbiAgICAgICAgICAgICAgICBnLmNpcmNsZShlbmQueCwgZW5kLnksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0YXJ0MSA9IGZyb20uYWRkKGRlbHRhLm11bChuKSk7XG4gICAgICAgICAgICBnLm1vdmVUbyhzdGFydDEueCwgc3RhcnQxLnkpO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IGRpcyAtIChsZW5ndGggKyBpbnRlcnZhbCkgKiBuIC0gbW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gc3RhcnQxLmFkZChkZWx0YTEpO1xuICAgICAgICAgICAgICAgIGcuY2lyY2xlKGVuZC54LCBlbmQueSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGcuY2lyY2xlKHRvLngsIHRvLnksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0cm9rZSkgZy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19