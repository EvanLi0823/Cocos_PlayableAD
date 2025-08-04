"use strict";
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