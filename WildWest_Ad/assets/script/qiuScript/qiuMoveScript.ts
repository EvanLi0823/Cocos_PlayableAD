// import aduioTools, { engineType } from "../aduioTools";
// import utiltools from "../utiltools";
// import GameManager from "./GameManager";
// import qiuCollisionScript from "./qiuCollisionScript";

// const { ccclass, property } = cc._decorator;

// @ccclass
// export default class qiuMoveScript extends cc.Component {


//     @property(cc.Node)
//     lightyNode: cc.Node = null; 

//     private _isCollsion: boolean = false;
//     set isCollsion(isCollsion: boolean) {

//         this._isCollsion = isCollsion;
//         if (isCollsion) {

//             // this.lightyNode.scaleX = 0.0;
//             this.lightyNode.active = false;
//             this.destroy();
//         }
//     }

//     get isCollsion() {

//         return this._isCollsion;
//     }

//     _isDown: boolean = false;
//     set isDown(isDonw: boolean) {
//         this._isDown = isDonw;
//         if (isDonw) {
//             this.lightyNode.angle = 90;
//             this.lightyNode.scaleX = 0.0;
//             this.node.getComponent(cc.Graphics).destroy();

//             aduioTools.playSimpleAduioEngine(engineType.fire);
//             // cc.resources.load("prefab/rewardAnim", cc.Prefab , (err , res)=> {
//             //     if(res) {
//             //         let rewardAnim = cc.instantiate(res as cc.Prefab);  
//             //         GameManager.Instance.displayNode.addChild(rewardAnim); 
//             //     }
//             // })
//         }
//     }
//     get isDown() {
//         return this._isDown;
//     }
//     lastpos: cc.Vec3 = null;

//     lightYMaxScaleX: number = 1.0;

//     UpdataTime = 0;
//     checkRayTime = 0;


//     nodeY:number = 0;
//     birdNode:cc.Node = null;

//     floatingValue = 0;

//     startRayline = false;

//     onDestroy() {

//     }
//     onLoad() {

//     }

//     start() {
//         this.node.addComponent(cc.Graphics);
//         this.nodeY = this.node.getPosition().y;
//         this.birdNode = cc.find("Canvas/gameNode/gameLayer/TrayNode/birdTray");
//         this.floatingValue = 3 + this.getComponent(qiuCollisionScript).index * 0.15;
//     }

//     update(dt) {
        
//         if(!this.isDown) {
//             this.node.y = this.nodeY + this.birdNode.getPosition().y * this.floatingValue;
//         }

//         this.checkRayTime += dt;
//         let nowPos: cc.Vec3 = this.node.position;
//         if (this.lastpos == null) {
//             this.lastpos = nowPos;
//             return
//         }
//         this.UpdataTime += dt;
//         if (this.UpdataTime < 0.1) {
//             return
//         }

//         let distance = 0;
//         let lightyNodeWidth = 0;
//         let aniTime = 0.1;
//         if (this.isDown == false) {
//             distance = nowPos.x - this.lastpos.x;
//             if (distance > 0) {
//                 this.lightyNode.angle = 180;
//             }
//             else if (distance < 0) {
//                 this.lightyNode.angle = 0;
//             }
//             if (Math.abs(distance) < 100) {
//                 distance = 0;
//             }

//             let speed = distance / this.UpdataTime;
//             lightyNodeWidth = Math.abs(speed) * 1.0 / 2000;
//             // console.log(speed + "");
//         } else {

//             distance = nowPos.y - this.lastpos.y;
//             let speed = distance / this.UpdataTime;
//             lightyNodeWidth = Math.abs(speed) * 1.0 / 500;
//             // console.log(`this.lightyNode2 ${this.lightyNode}`);
//         }


//         cc.tween(this.lightyNode)
//             .to(aniTime, { scaleX: Math.min(lightyNodeWidth, this.lightYMaxScaleX) })
//             .start()

//         this.lastpos = nowPos;
//         this.UpdataTime = 0;
//     }

//     raylineCheck() {

//         if(this.startRayline == false) {
//             return;
//         }
//         if (this.checkRayTime < 0.1) {
//             return
//         }
//         this.checkRayTime = 0;
//         let pos = this.node.getPosition();

//         let worldPoint = this.node.convertToWorldSpaceAR(cc.v2(0,0))
//         let array = cc.director.getPhysicsManager().rayCast(worldPoint, cc.v2(worldPoint.x , worldPoint.y - 2000), cc.RayCastType.Closest);

//         // console.log(`pos -- ${pos}`);
//         // let array = cc.director.getPhysicsManager().rayCast(cc.v2(pos.x + cc.winSize.width / 2, pos.y - this.node.height / 2), cc.v2(pos.x + cc.winSize.width / 2, pos.y - this.node.height / 2 - 10 - 2000), cc.RayCastType.Closest);
//         if (array != null && array.length > 0) { 
//             let iterator =  array[0]; 
//             let g = this.getComponent(cc.Graphics);
//             g.clear(); 
//             let point = this.node.convertToNodeSpaceAR(iterator.point);
//             this.drawLineOfDashes(g, cc.v2(0, -this.node.height / 2 - 10), cc.v2(0,  point.y + 10), '#dcdcdc', true, 10, 20);
//         } 

//         // }    
//     }

//     drawLineOfDashes(g: cc.Graphics, from: cc.Vec2, to: cc.Vec2, color: string = '#ffffff', stroke: boolean = true, length: number = 10, interval: number = 10): void {
//         if (g) {
//             //以 from：cc.v2(100, -100), to: cc.v2(500, -500) 为例
//             // let off = to.sub(from);//向量减法 值为cc.v2(400, -400)
//             // // console.log('向量减法', off)
//             // let dir = off.normalize();//向量归一化法  值为cc.v2(0.707。。。, -0.707。。。)
//             // // console.log('向量归一化法', dir)
//             // let dis = off.mag();//返回该向量的长度  值为 565.685424949238
//             // // console.log('向量的长度', dis)
//             // let delta = dir.mul(length + interval);// 缩放向量，并返回新结果 值为cc.v2(21.213。。。, -21.213。。。)
//             // // console.log('缩放向量', delta)
//             // let delta1 = dir.mul(length);   //值为cc.v2(14.142。。。, -14.142。。。)
//             // // console.log('缩放向量', delta1)
//             // let offset = 0;
//             // let mn = 3;
//             // if (mn > interval) {
//             //     offset = mn - interval
//             // }
//             // let n = Math.floor(dis / (length + interval));
//             // g.lineWidth = 5;//线宽
//             // g.strokeColor.fromHEX(color);//颜色
//             // if (offset) {
//             //     n--;
//             //     g.moveTo(from.x, from.y);
//             //     let start0 = from.add(cc.v2(dir.x * offset, dir.y * offset));
//             //     g.circle(start0.x, start0.y, 2);
//             // }
//             // from = from.add(cc.v2(dir.x * mn, dir.y * mn))
//             // for (let i = 0; i < n; ++i) {
//             //     let start = from.add(delta.mul(i));
//             //     g.moveTo(start.x, start.y);
//             //     let end = start.add(delta1);
//             //     g.circle(end.x, end.y, 2);
//             // }
//             // let start1 = from.add(delta.mul(n));
//             // g.moveTo(start1.x, start1.y);
//             // if (length < dis - (length + interval) * n - mn) {
//             //     let end = start1.add(delta1);
//             //     g.circle(end.x, end.y, 2);
//             // } else {
//             //     g.circle(to.x, to.y, 2);
//             // }
//             // if (stroke) g.stroke();

//             let startPos = from;
//             let endPos = to;
//             let line = endPos.sub(startPos);
//             let lineLenth = line.mag();
//             let unitLenth = 20;
//             let increment = line.normalize().mul(unitLenth);
//             let drawLine = true;
//             let pos = startPos.clone();
//             // g.strokeColor = cc.Color.WHITE;
//             g.lineWidth = 5;//线宽
//             g.strokeColor.fromHEX(color);//颜色

//             for (; lineLenth > unitLenth; lineLenth -= unitLenth) {
//                 if (drawLine) {
//                     g.moveTo(pos.x, pos.y);
//                     pos.addSelf(increment);
//                     g.circle(pos.x, pos.y,2);
//                     g.stroke();
//                 } else {
//                     pos.addSelf(increment);
//                 }
//                 drawLine = !drawLine;
//             }

//             //最后一段
//             if (drawLine) {
//                 g.moveTo(pos.x, pos.y);
//                 g.circle(endPos.x, endPos.y,2);
//                 g.stroke();
//             }
//         }
//     }
// }
