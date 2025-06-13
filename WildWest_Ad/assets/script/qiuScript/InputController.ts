import gameConfig from "../gameConfig";
import JsbSdkScript from "../PlatformInteraction/JsbSdkScript";
import GameManager from "./GameManager";
import qiuMoveScript from "./qiuMoveScript";

const { ccclass, property } = cc._decorator;

@ccclass
export default class InputController extends cc.Component {

    warnGraphicLine: cc.Graphics = null;

    touchNum: number = 0;

    aTween: cc.Tween = null;

    obj = { apl: 0 }
    onLoad() {

    }

    start() {

    }

    openTouch() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    onTouchStart(e) {

        if (this.touchNum == -1) {
            return
        }
        if (cc.isValid(GameManager.Instance.targetQiu, true)) {
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
    }

    onTouchMove(e) {
        if (this.touchNum == -1) {
            return
        }
        if (cc.isValid(GameManager.Instance.targetQiu, true)) {
            this.touchNum = 1;
            // let pos = this.node.convertToNodeSpaceAR(e.getLocation());
            // GameManager.Instance.targetQiu.x = pos.x;
            // GameManager.Instance.trayBirdNode.x = pos.x;
            // let moveScript = GameManager.Instance.targetQiu.getComponent(qiuMoveScript);
            // if(cc.isValid(moveScript , true)) {
            //     moveScript.raylineCheck();
            // }
        }
    }

    onTouchEnd(e) {
        if (cc.isValid(GameManager.Instance.targetQiu, true) && this.touchNum == 1) {
            this.touchNum = 0;

            let pos = this.node.convertToNodeSpaceAR(e.getLocation());
            // if (pos.x > cc.winSize.width / 2 - 1 || pos.x < -cc.winSize.width / 2 + 1) {
            //     pos.x = Math.max(-cc.winSize.width / 2 + 1, Math.min(cc.winSize.width / 2 - 1, pos.x));
            // }
            // GameManager.Instance.targetQiu.x = pos.x;
            // GameManager.Instance.trayBirdNode.x = pos.x;

            let targetQiu = GameManager.Instance.targetQiu;
            GameManager.Instance.targetQiu = null;
            let birdY = GameManager.Instance.trayBirdNode.y;
            cc.tween(GameManager.Instance.trayBirdNode)
                // .to(0.07, { position: cc.v3(pos.x, birdY + 60, 0) })
                // .to(0.03, { position: cc.v3(pos.x, birdY, 0) })
                .call(() => {
                    if(cc.isValid(targetQiu, true)) {
                        let com = targetQiu.getComponent(qiuMoveScript);
                        if(cc.isValid(com, true)) {
                            com.isDown = true;
                        }
                        
                        targetQiu.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                        targetQiu.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -900);
                    }
                    
                    // GameManager.Instance.targetQiu = null;
                })
                .start();

            if (gameConfig.isNewer == true){
                gameConfig.saveNewer();
                JsbSdkScript.buryPoint("debug_game_start_first","")
            }
            // this.scheduleOnce(() => {
            //     GameManager.Instance.createOneQiu();
            // }, 0.6);
        }
    }

    showWarn(isShow: boolean, warnLineHeigh: number) {

        if (isShow) {
            if (cc.isValid(this.warnGraphicLine, true) == false) {
                this.warnGraphicLine = this.node.addComponent(cc.Graphics);
            }
            this.drawLineOfDashes(this.warnGraphicLine, cc.v2(-cc.winSize.width / 2, warnLineHeigh), cc.v2(cc.winSize.width / 2, warnLineHeigh), 255)
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
    }

    drawLineOfDashes(g: cc.Graphics, from: cc.Vec2, to: cc.Vec2, alp: number, color: string = '#FF4E4E', stroke: boolean = true, length: number = 20, interval: number = 20): void {
        if (g) {
            //以 from：cc.v2(100, -100), to: cc.v2(500, -500) 为例
            let off = to.sub(from);//向量减法 值为cc.v2(400, -400)
            // console.log('向量减法', off)
            let dir = off.normalize();//向量归一化法  值为cc.v2(0.707。。。, -0.707。。。)
            // console.log('向量归一化法', dir)
            let dis = off.mag();//返回该向量的长度  值为 565.685424949238
            // console.log('向量的长度', dis)
            let delta = dir.mul(length + interval);// 缩放向量，并返回新结果 值为cc.v2(21.213。。。, -21.213。。。)
            // console.log('缩放向量', delta)
            let delta1 = dir.mul(length);   //值为cc.v2(14.142。。。, -14.142。。。)
            // console.log('缩放向量', delta1)
            let offset = 0;
            let mn = 3;
            if (mn > interval) {
                offset = mn - interval
            }
            let n = Math.floor(dis / (length + interval));
            g.lineWidth = 5;//线宽 
            g.strokeColor.fromHEX(`FF6969`)
            g.strokeColor.setA(alp)
            if (offset) {
                n--;
                g.moveTo(from.x, from.y);
                let start0 = from.add(cc.v2(dir.x * offset, dir.y * offset));
                g.circle(start0.x, start0.y, 2);
            }
            from = from.add(cc.v2(dir.x * mn, dir.y * mn))
            for (let i = 0; i < n; ++i) {
                let start = from.add(delta.mul(i));
                g.moveTo(start.x, start.y);
                let end = start.add(delta1);
                g.circle(end.x, end.y, 1);
            }
            let start1 = from.add(delta.mul(n));
            g.moveTo(start1.x, start1.y);
            if (length < dis - (length + interval) * n - mn) {
                let end = start1.add(delta1);
                g.circle(end.x, end.y, 1);
            } else {
                g.circle(to.x, to.y, 1);
            }
            if (stroke) g.stroke();
        }
    }
    // update (dt) {}
}
