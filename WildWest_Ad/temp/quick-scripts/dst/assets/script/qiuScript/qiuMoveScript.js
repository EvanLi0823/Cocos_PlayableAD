
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/qiuMoveScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6265aNK3hNCmqugWkYsm5rP', 'qiuMoveScript');
// script/qiuScript/qiuMoveScript.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L3FpdU1vdmVTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQTBEO0FBQzFELHdDQUF3QztBQUN4QywyQ0FBMkM7QUFDM0MseURBQXlEO0FBRXpELCtDQUErQztBQUUvQyxXQUFXO0FBQ1gsNERBQTREO0FBRzVELHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFFbkMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUU1Qyx5Q0FBeUM7QUFDekMsNEJBQTRCO0FBRTVCLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUMsOEJBQThCO0FBQzlCLFlBQVk7QUFDWixRQUFRO0FBRVIseUJBQXlCO0FBRXpCLG1DQUFtQztBQUNuQyxRQUFRO0FBRVIsZ0NBQWdDO0FBQ2hDLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakMsd0JBQXdCO0FBQ3hCLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUMsNkRBQTZEO0FBRTdELGlFQUFpRTtBQUNqRSxvRkFBb0Y7QUFDcEYsK0JBQStCO0FBQy9CLDhFQUE4RTtBQUM5RSxpRkFBaUY7QUFDakYsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osUUFBUTtBQUNSLHFCQUFxQjtBQUNyQiwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLCtCQUErQjtBQUUvQixxQ0FBcUM7QUFFckMsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUd4Qix3QkFBd0I7QUFDeEIsK0JBQStCO0FBRS9CLHlCQUF5QjtBQUV6Qiw0QkFBNEI7QUFFNUIsb0JBQW9CO0FBRXBCLFFBQVE7QUFDUixpQkFBaUI7QUFFakIsUUFBUTtBQUVSLGdCQUFnQjtBQUNoQiwrQ0FBK0M7QUFDL0Msa0RBQWtEO0FBQ2xELGtGQUFrRjtBQUNsRix1RkFBdUY7QUFDdkYsUUFBUTtBQUVSLG1CQUFtQjtBQUVuQiw2QkFBNkI7QUFDN0IsNkZBQTZGO0FBQzdGLFlBQVk7QUFFWixtQ0FBbUM7QUFDbkMsb0RBQW9EO0FBQ3BELHNDQUFzQztBQUN0QyxxQ0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixpQ0FBaUM7QUFDakMsdUNBQXVDO0FBQ3ZDLHFCQUFxQjtBQUNyQixZQUFZO0FBRVosNEJBQTRCO0FBQzVCLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLG9EQUFvRDtBQUNwRCxrQ0FBa0M7QUFDbEMsK0NBQStDO0FBQy9DLGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLGdCQUFnQjtBQUNoQiw4Q0FBOEM7QUFDOUMsZ0NBQWdDO0FBQ2hDLGdCQUFnQjtBQUVoQixzREFBc0Q7QUFDdEQsOERBQThEO0FBQzlELDBDQUEwQztBQUMxQyxtQkFBbUI7QUFFbkIsb0RBQW9EO0FBQ3BELHNEQUFzRDtBQUN0RCw2REFBNkQ7QUFDN0QscUVBQXFFO0FBQ3JFLFlBQVk7QUFHWixvQ0FBb0M7QUFDcEMsd0ZBQXdGO0FBQ3hGLHVCQUF1QjtBQUV2QixpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CLFFBQVE7QUFFUix1QkFBdUI7QUFFdkIsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1oseUNBQXlDO0FBQ3pDLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDLDZDQUE2QztBQUU3Qyx1RUFBdUU7QUFDdkUsOElBQThJO0FBRTlJLDJDQUEyQztBQUMzQyw0T0FBNE87QUFDNU8sb0RBQW9EO0FBQ3BELHlDQUF5QztBQUN6QyxzREFBc0Q7QUFDdEQsMEJBQTBCO0FBQzFCLDBFQUEwRTtBQUMxRSxnSUFBZ0k7QUFDaEksYUFBYTtBQUViLG1CQUFtQjtBQUNuQixRQUFRO0FBRVIsMEtBQTBLO0FBQzFLLG1CQUFtQjtBQUNuQixpRUFBaUU7QUFDakUsa0VBQWtFO0FBQ2xFLDZDQUE2QztBQUM3QyxrRkFBa0Y7QUFDbEYsK0NBQStDO0FBQy9DLHFFQUFxRTtBQUNyRSw4Q0FBOEM7QUFDOUMsc0dBQXNHO0FBQ3RHLCtDQUErQztBQUMvQyxrRkFBa0Y7QUFDbEYsZ0RBQWdEO0FBQ2hELGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsZ0VBQWdFO0FBQ2hFLHNDQUFzQztBQUN0QyxtREFBbUQ7QUFDbkQsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQiwrQ0FBK0M7QUFDL0MsbUZBQW1GO0FBQ25GLHNEQUFzRDtBQUN0RCxtQkFBbUI7QUFDbkIsZ0VBQWdFO0FBQ2hFLCtDQUErQztBQUMvQyx5REFBeUQ7QUFDekQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCxnREFBZ0Q7QUFDaEQsbUJBQW1CO0FBQ25CLHNEQUFzRDtBQUN0RCwrQ0FBK0M7QUFDL0Msb0VBQW9FO0FBQ3BFLG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFDaEQsMEJBQTBCO0FBQzFCLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIseUNBQXlDO0FBRXpDLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsK0NBQStDO0FBQy9DLDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFDbEMsK0RBQStEO0FBQy9ELG1DQUFtQztBQUNuQywwQ0FBMEM7QUFDMUMsaURBQWlEO0FBQ2pELG1DQUFtQztBQUNuQyxnREFBZ0Q7QUFFaEQsc0VBQXNFO0FBQ3RFLGtDQUFrQztBQUNsQyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxvQkFBb0I7QUFDcEIsd0NBQXdDO0FBQ3hDLGdCQUFnQjtBQUVoQixxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLDBDQUEwQztBQUMxQyxrREFBa0Q7QUFDbEQsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYWR1aW9Ub29scywgeyBlbmdpbmVUeXBlIH0gZnJvbSBcIi4uL2FkdWlvVG9vbHNcIjtcbi8vIGltcG9ydCB1dGlsdG9vbHMgZnJvbSBcIi4uL3V0aWx0b29sc1wiO1xuLy8gaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgcWl1Q29sbGlzaW9uU2NyaXB0IGZyb20gXCIuL3FpdUNvbGxpc2lvblNjcmlwdFwiO1xuXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgcWl1TW92ZVNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIGxpZ2h0eU5vZGU6IGNjLk5vZGUgPSBudWxsOyBcblxuLy8gICAgIHByaXZhdGUgX2lzQ29sbHNpb246IGJvb2xlYW4gPSBmYWxzZTtcbi8vICAgICBzZXQgaXNDb2xsc2lvbihpc0NvbGxzaW9uOiBib29sZWFuKSB7XG5cbi8vICAgICAgICAgdGhpcy5faXNDb2xsc2lvbiA9IGlzQ29sbHNpb247XG4vLyAgICAgICAgIGlmIChpc0NvbGxzaW9uKSB7XG5cbi8vICAgICAgICAgICAgIC8vIHRoaXMubGlnaHR5Tm9kZS5zY2FsZVggPSAwLjA7XG4vLyAgICAgICAgICAgICB0aGlzLmxpZ2h0eU5vZGUuYWN0aXZlID0gZmFsc2U7XG4vLyAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGdldCBpc0NvbGxzaW9uKCkge1xuXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9pc0NvbGxzaW9uO1xuLy8gICAgIH1cblxuLy8gICAgIF9pc0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcbi8vICAgICBzZXQgaXNEb3duKGlzRG9udzogYm9vbGVhbikge1xuLy8gICAgICAgICB0aGlzLl9pc0Rvd24gPSBpc0Rvbnc7XG4vLyAgICAgICAgIGlmIChpc0RvbncpIHtcbi8vICAgICAgICAgICAgIHRoaXMubGlnaHR5Tm9kZS5hbmdsZSA9IDkwO1xuLy8gICAgICAgICAgICAgdGhpcy5saWdodHlOb2RlLnNjYWxlWCA9IDAuMDtcbi8vICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmRlc3Ryb3koKTtcblxuLy8gICAgICAgICAgICAgYWR1aW9Ub29scy5wbGF5U2ltcGxlQWR1aW9FbmdpbmUoZW5naW5lVHlwZS5maXJlKTtcbi8vICAgICAgICAgICAgIC8vIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3Jld2FyZEFuaW1cIiwgY2MuUHJlZmFiICwgKGVyciAsIHJlcyk9PiB7XG4vLyAgICAgICAgICAgICAvLyAgICAgaWYocmVzKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgICAgIGxldCByZXdhcmRBbmltID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7ICBcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuZGlzcGxheU5vZGUuYWRkQ2hpbGQocmV3YXJkQW5pbSk7IFxuLy8gICAgICAgICAgICAgLy8gICAgIH1cbi8vICAgICAgICAgICAgIC8vIH0pXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgZ2V0IGlzRG93bigpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRG93bjtcbi8vICAgICB9XG4vLyAgICAgbGFzdHBvczogY2MuVmVjMyA9IG51bGw7XG5cbi8vICAgICBsaWdodFlNYXhTY2FsZVg6IG51bWJlciA9IDEuMDtcblxuLy8gICAgIFVwZGF0YVRpbWUgPSAwO1xuLy8gICAgIGNoZWNrUmF5VGltZSA9IDA7XG5cblxuLy8gICAgIG5vZGVZOm51bWJlciA9IDA7XG4vLyAgICAgYmlyZE5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICBmbG9hdGluZ1ZhbHVlID0gMDtcblxuLy8gICAgIHN0YXJ0UmF5bGluZSA9IGZhbHNlO1xuXG4vLyAgICAgb25EZXN0cm95KCkge1xuXG4vLyAgICAgfVxuLy8gICAgIG9uTG9hZCgpIHtcblxuLy8gICAgIH1cblxuLy8gICAgIHN0YXJ0KCkge1xuLy8gICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbi8vICAgICAgICAgdGhpcy5ub2RlWSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnk7XG4vLyAgICAgICAgIHRoaXMuYmlyZE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL2dhbWVOb2RlL2dhbWVMYXllci9UcmF5Tm9kZS9iaXJkVHJheVwiKTtcbi8vICAgICAgICAgdGhpcy5mbG9hdGluZ1ZhbHVlID0gMyArIHRoaXMuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkuaW5kZXggKiAwLjE1O1xuLy8gICAgIH1cblxuLy8gICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBcbi8vICAgICAgICAgaWYoIXRoaXMuaXNEb3duKSB7XG4vLyAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMubm9kZVkgKyB0aGlzLmJpcmROb2RlLmdldFBvc2l0aW9uKCkueSAqIHRoaXMuZmxvYXRpbmdWYWx1ZTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHRoaXMuY2hlY2tSYXlUaW1lICs9IGR0O1xuLy8gICAgICAgICBsZXQgbm93UG9zOiBjYy5WZWMzID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuLy8gICAgICAgICBpZiAodGhpcy5sYXN0cG9zID09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHRoaXMubGFzdHBvcyA9IG5vd1Bvcztcbi8vICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuVXBkYXRhVGltZSArPSBkdDtcbi8vICAgICAgICAgaWYgKHRoaXMuVXBkYXRhVGltZSA8IDAuMSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgZGlzdGFuY2UgPSAwO1xuLy8gICAgICAgICBsZXQgbGlnaHR5Tm9kZVdpZHRoID0gMDtcbi8vICAgICAgICAgbGV0IGFuaVRpbWUgPSAwLjE7XG4vLyAgICAgICAgIGlmICh0aGlzLmlzRG93biA9PSBmYWxzZSkge1xuLy8gICAgICAgICAgICAgZGlzdGFuY2UgPSBub3dQb3MueCAtIHRoaXMubGFzdHBvcy54O1xuLy8gICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gMCkge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMubGlnaHR5Tm9kZS5hbmdsZSA9IDE4MDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGVsc2UgaWYgKGRpc3RhbmNlIDwgMCkge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMubGlnaHR5Tm9kZS5hbmdsZSA9IDA7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2UpIDwgMTAwKSB7XG4vLyAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSAwO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBsZXQgc3BlZWQgPSBkaXN0YW5jZSAvIHRoaXMuVXBkYXRhVGltZTtcbi8vICAgICAgICAgICAgIGxpZ2h0eU5vZGVXaWR0aCA9IE1hdGguYWJzKHNwZWVkKSAqIDEuMCAvIDIwMDA7XG4vLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGVlZCArIFwiXCIpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuXG4vLyAgICAgICAgICAgICBkaXN0YW5jZSA9IG5vd1Bvcy55IC0gdGhpcy5sYXN0cG9zLnk7XG4vLyAgICAgICAgICAgICBsZXQgc3BlZWQgPSBkaXN0YW5jZSAvIHRoaXMuVXBkYXRhVGltZTtcbi8vICAgICAgICAgICAgIGxpZ2h0eU5vZGVXaWR0aCA9IE1hdGguYWJzKHNwZWVkKSAqIDEuMCAvIDUwMDtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzLmxpZ2h0eU5vZGUyICR7dGhpcy5saWdodHlOb2RlfWApO1xuLy8gICAgICAgICB9XG5cblxuLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmxpZ2h0eU5vZGUpXG4vLyAgICAgICAgICAgICAudG8oYW5pVGltZSwgeyBzY2FsZVg6IE1hdGgubWluKGxpZ2h0eU5vZGVXaWR0aCwgdGhpcy5saWdodFlNYXhTY2FsZVgpIH0pXG4vLyAgICAgICAgICAgICAuc3RhcnQoKVxuXG4vLyAgICAgICAgIHRoaXMubGFzdHBvcyA9IG5vd1Bvcztcbi8vICAgICAgICAgdGhpcy5VcGRhdGFUaW1lID0gMDtcbi8vICAgICB9XG5cbi8vICAgICByYXlsaW5lQ2hlY2soKSB7XG5cbi8vICAgICAgICAgaWYodGhpcy5zdGFydFJheWxpbmUgPT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAodGhpcy5jaGVja1JheVRpbWUgPCAwLjEpIHtcbi8vICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuY2hlY2tSYXlUaW1lID0gMDtcbi8vICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuXG4vLyAgICAgICAgIGxldCB3b3JsZFBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKVxuLy8gICAgICAgICBsZXQgYXJyYXkgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLnJheUNhc3Qod29ybGRQb2ludCwgY2MudjIod29ybGRQb2ludC54ICwgd29ybGRQb2ludC55IC0gMjAwMCksIGNjLlJheUNhc3RUeXBlLkNsb3Nlc3QpO1xuXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBwb3MgLS0gJHtwb3N9YCk7XG4vLyAgICAgICAgIC8vIGxldCBhcnJheSA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkucmF5Q2FzdChjYy52Mihwb3MueCArIGNjLndpblNpemUud2lkdGggLyAyLCBwb3MueSAtIHRoaXMubm9kZS5oZWlnaHQgLyAyKSwgY2MudjIocG9zLnggKyBjYy53aW5TaXplLndpZHRoIC8gMiwgcG9zLnkgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIDEwIC0gMjAwMCksIGNjLlJheUNhc3RUeXBlLkNsb3Nlc3QpO1xuLy8gICAgICAgICBpZiAoYXJyYXkgIT0gbnVsbCAmJiBhcnJheS5sZW5ndGggPiAwKSB7IFxuLy8gICAgICAgICAgICAgbGV0IGl0ZXJhdG9yID0gIGFycmF5WzBdOyBcbi8vICAgICAgICAgICAgIGxldCBnID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuLy8gICAgICAgICAgICAgZy5jbGVhcigpOyBcbi8vICAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpdGVyYXRvci5wb2ludCk7XG4vLyAgICAgICAgICAgICB0aGlzLmRyYXdMaW5lT2ZEYXNoZXMoZywgY2MudjIoMCwgLXRoaXMubm9kZS5oZWlnaHQgLyAyIC0gMTApLCBjYy52MigwLCAgcG9pbnQueSArIDEwKSwgJyNkY2RjZGMnLCB0cnVlLCAxMCwgMjApO1xuLy8gICAgICAgICB9IFxuXG4vLyAgICAgICAgIC8vIH0gICAgXG4vLyAgICAgfVxuXG4vLyAgICAgZHJhd0xpbmVPZkRhc2hlcyhnOiBjYy5HcmFwaGljcywgZnJvbTogY2MuVmVjMiwgdG86IGNjLlZlYzIsIGNvbG9yOiBzdHJpbmcgPSAnI2ZmZmZmZicsIHN0cm9rZTogYm9vbGVhbiA9IHRydWUsIGxlbmd0aDogbnVtYmVyID0gMTAsIGludGVydmFsOiBudW1iZXIgPSAxMCk6IHZvaWQge1xuLy8gICAgICAgICBpZiAoZykge1xuLy8gICAgICAgICAgICAgLy/ku6UgZnJvbe+8mmNjLnYyKDEwMCwgLTEwMCksIHRvOiBjYy52Mig1MDAsIC01MDApIOS4uuS+i1xuLy8gICAgICAgICAgICAgLy8gbGV0IG9mZiA9IHRvLnN1Yihmcm9tKTsvL+WQkemHj+WHj+azlSDlgLzkuLpjYy52Mig0MDAsIC00MDApXG4vLyAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygn5ZCR6YeP5YeP5rOVJywgb2ZmKVxuLy8gICAgICAgICAgICAgLy8gbGV0IGRpciA9IG9mZi5ub3JtYWxpemUoKTsvL+WQkemHj+W9kuS4gOWMluazlSAg5YC85Li6Y2MudjIoMC43MDfjgILjgILjgIIsIC0wLjcwN+OAguOAguOAgilcbi8vICAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCflkJHph4/lvZLkuIDljJbms5UnLCBkaXIpXG4vLyAgICAgICAgICAgICAvLyBsZXQgZGlzID0gb2ZmLm1hZygpOy8v6L+U5Zue6K+l5ZCR6YeP55qE6ZW/5bqmICDlgLzkuLogNTY1LjY4NTQyNDk0OTIzOFxuLy8gICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ+WQkemHj+eahOmVv+W6picsIGRpcylcbi8vICAgICAgICAgICAgIC8vIGxldCBkZWx0YSA9IGRpci5tdWwobGVuZ3RoICsgaW50ZXJ2YWwpOy8vIOe8qeaUvuWQkemHj++8jOW5tui/lOWbnuaWsOe7k+aenCDlgLzkuLpjYy52MigyMS4yMTPjgILjgILjgIIsIC0yMS4yMTPjgILjgILjgIIpXG4vLyAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygn57yp5pS+5ZCR6YePJywgZGVsdGEpXG4vLyAgICAgICAgICAgICAvLyBsZXQgZGVsdGExID0gZGlyLm11bChsZW5ndGgpOyAgIC8v5YC85Li6Y2MudjIoMTQuMTQy44CC44CC44CCLCAtMTQuMTQy44CC44CC44CCKVxuLy8gICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ+e8qeaUvuWQkemHjycsIGRlbHRhMSlcbi8vICAgICAgICAgICAgIC8vIGxldCBvZmZzZXQgPSAwO1xuLy8gICAgICAgICAgICAgLy8gbGV0IG1uID0gMztcbi8vICAgICAgICAgICAgIC8vIGlmIChtbiA+IGludGVydmFsKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgb2Zmc2V0ID0gbW4gLSBpbnRlcnZhbFxuLy8gICAgICAgICAgICAgLy8gfVxuLy8gICAgICAgICAgICAgLy8gbGV0IG4gPSBNYXRoLmZsb29yKGRpcyAvIChsZW5ndGggKyBpbnRlcnZhbCkpO1xuLy8gICAgICAgICAgICAgLy8gZy5saW5lV2lkdGggPSA1Oy8v57q/5a69XG4vLyAgICAgICAgICAgICAvLyBnLnN0cm9rZUNvbG9yLmZyb21IRVgoY29sb3IpOy8v6aKc6ImyXG4vLyAgICAgICAgICAgICAvLyBpZiAob2Zmc2V0KSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgbi0tO1xuLy8gICAgICAgICAgICAgLy8gICAgIGcubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcbi8vICAgICAgICAgICAgIC8vICAgICBsZXQgc3RhcnQwID0gZnJvbS5hZGQoY2MudjIoZGlyLnggKiBvZmZzZXQsIGRpci55ICogb2Zmc2V0KSk7XG4vLyAgICAgICAgICAgICAvLyAgICAgZy5jaXJjbGUoc3RhcnQwLngsIHN0YXJ0MC55LCAyKTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgICAgIC8vIGZyb20gPSBmcm9tLmFkZChjYy52MihkaXIueCAqIG1uLCBkaXIueSAqIG1uKSlcbi8vICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgbGV0IHN0YXJ0ID0gZnJvbS5hZGQoZGVsdGEubXVsKGkpKTtcbi8vICAgICAgICAgICAgIC8vICAgICBnLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcbi8vICAgICAgICAgICAgIC8vICAgICBsZXQgZW5kID0gc3RhcnQuYWRkKGRlbHRhMSk7XG4vLyAgICAgICAgICAgICAvLyAgICAgZy5jaXJjbGUoZW5kLngsIGVuZC55LCAyKTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgICAgIC8vIGxldCBzdGFydDEgPSBmcm9tLmFkZChkZWx0YS5tdWwobikpO1xuLy8gICAgICAgICAgICAgLy8gZy5tb3ZlVG8oc3RhcnQxLngsIHN0YXJ0MS55KTtcbi8vICAgICAgICAgICAgIC8vIGlmIChsZW5ndGggPCBkaXMgLSAobGVuZ3RoICsgaW50ZXJ2YWwpICogbiAtIG1uKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgbGV0IGVuZCA9IHN0YXJ0MS5hZGQoZGVsdGExKTtcbi8vICAgICAgICAgICAgIC8vICAgICBnLmNpcmNsZShlbmQueCwgZW5kLnksIDIpO1xuLy8gICAgICAgICAgICAgLy8gfSBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vICAgICBnLmNpcmNsZSh0by54LCB0by55LCAyKTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgICAgIC8vIGlmIChzdHJva2UpIGcuc3Ryb2tlKCk7XG5cbi8vICAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGZyb207XG4vLyAgICAgICAgICAgICBsZXQgZW5kUG9zID0gdG87XG4vLyAgICAgICAgICAgICBsZXQgbGluZSA9IGVuZFBvcy5zdWIoc3RhcnRQb3MpO1xuLy8gICAgICAgICAgICAgbGV0IGxpbmVMZW50aCA9IGxpbmUubWFnKCk7XG4vLyAgICAgICAgICAgICBsZXQgdW5pdExlbnRoID0gMjA7XG4vLyAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gbGluZS5ub3JtYWxpemUoKS5tdWwodW5pdExlbnRoKTtcbi8vICAgICAgICAgICAgIGxldCBkcmF3TGluZSA9IHRydWU7XG4vLyAgICAgICAgICAgICBsZXQgcG9zID0gc3RhcnRQb3MuY2xvbmUoKTtcbi8vICAgICAgICAgICAgIC8vIGcuc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbi8vICAgICAgICAgICAgIGcubGluZVdpZHRoID0gNTsvL+e6v+WuvVxuLy8gICAgICAgICAgICAgZy5zdHJva2VDb2xvci5mcm9tSEVYKGNvbG9yKTsvL+minOiJslxuXG4vLyAgICAgICAgICAgICBmb3IgKDsgbGluZUxlbnRoID4gdW5pdExlbnRoOyBsaW5lTGVudGggLT0gdW5pdExlbnRoKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGRyYXdMaW5lKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGcubW92ZVRvKHBvcy54LCBwb3MueSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHBvcy5hZGRTZWxmKGluY3JlbWVudCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGcuY2lyY2xlKHBvcy54LCBwb3MueSwyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZy5zdHJva2UoKTtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICBwb3MuYWRkU2VsZihpbmNyZW1lbnQpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBkcmF3TGluZSA9ICFkcmF3TGluZTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgLy/mnIDlkI7kuIDmrrVcbi8vICAgICAgICAgICAgIGlmIChkcmF3TGluZSkge1xuLy8gICAgICAgICAgICAgICAgIGcubW92ZVRvKHBvcy54LCBwb3MueSk7XG4vLyAgICAgICAgICAgICAgICAgZy5jaXJjbGUoZW5kUG9zLngsIGVuZFBvcy55LDIpO1xuLy8gICAgICAgICAgICAgICAgIGcuc3Ryb2tlKCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4iXX0=