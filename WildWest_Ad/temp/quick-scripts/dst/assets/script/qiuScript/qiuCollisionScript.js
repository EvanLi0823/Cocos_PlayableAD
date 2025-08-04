
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/qiuCollisionScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afce9p0/DFAIY3Z4UMTYQVw', 'qiuCollisionScript');
// script/qiuScript/qiuCollisionScript.ts

// import boomScript from "../boomScript"; 
// import JsbSdkScript from "../PlatformInteraction/JsbSdkScript";
// import tireSteakScript from "../tireSteakScript";
// import GameManager from "./GameManager";
// import qiuMoveScript from "./qiuMoveScript";
// const { ccclass, property } = cc._decorator;
// export type QiuInfo = {
//     index: number,
//     pos: cc.Vec2,
//     speed: cc.Vec2
//     rigidBodyType: cc.RigidBodyType
// }
// @ccclass
// export default class qiuCollisionScript extends cc.Component {
//     @property(cc.Prefab)
//     sparkPrefab: cc.Prefab = null;
//     @property(cc.Sprite)
//     qiuSprite: cc.Sprite = null;
//     @property(cc.Sprite)
//     txtSprite: cc.Sprite = null;
//     @property([cc.SpriteFrame])
//     qiuSpriteFrameArray: Array<cc.SpriteFrame> = [];
//     @property([cc.SpriteFrame])
//     txtSpriteFrameArray: Array<cc.SpriteFrame> = [];
//     @property(cc.Prefab)
//     scorePrefab: cc.Prefab = null;
//     @property(cc.Prefab)
//     mergeBoomPrefab:cc.Prefab = null;
//     targetNode:cc.Node = null
//     leftNode:cc.Node = null
//     redbag:cc.Node = null
//     scoreNode: cc.Node = null;
//     perpetualAttackCount = 0;
//     get qiuInfo(): QiuInfo {
//         let rType = this.node.getComponent(cc.RigidBody).type;
//         let velocity = cc.v2(0, 0)
//         if (rType == cc.RigidBodyType.Dynamic) {
//             velocity = this.node.getComponent(cc.RigidBody).linearVelocity
//         }
//         let info: QiuInfo = {
//             index: this.index,
//             pos: this.node.getPosition(),
//             speed: velocity,
//             rigidBodyType: rType
//         }
//         return info
//     }
//     private _isDeath: boolean = false;
//     set isDeath(isDeath: boolean) {
//         this._isDeath = isDeath;
//         if (isDeath) {
//             this.node.getComponent(cc.PhysicsCircleCollider).radius = 0;
//             this.node.getComponent(cc.PhysicsCircleCollider).apply();
//         }
//     }
//     get isDeath() {
//         return this._isDeath;
//     }
//     tween: cc.Tween = null;
//     paTween: cc.Tween = null;
//     scaleTween: cc.Tween = null;
//     isspark = false;
//     collisionTime: number = 0;
//     collisionPoint: cc.Vec2 = null;
//     gameOver() {
//         this._isDeath = true; 
//     }
//     private _index: number;
//     public get index() {
//         return this._index;
//     }
//     public set index(index: number) {
//         this._index = index;
//         if (index > 10) {
//             return
//         }
//         this.qiuSprite.spriteFrame = this.qiuSpriteFrameArray[index];
//         this.txtSprite.spriteFrame = this.txtSpriteFrameArray[index];
//         let moiveScript = this.getComponent(qiuMoveScript);
//         if (cc.isValid(moiveScript, true)) {
//             moiveScript.lightyNode.height = this.qiuSprite.node.height;
//             moiveScript.lightyNode.width = 214 * this.qiuSprite.node.height * 1.0 / 83;
//         }
//         this.node.width = this.qiuSprite.node.width;
//         this.node.height = this.qiuSprite.node.height;
//     }
//     levelUp() {
//         let oriWidth = this.node.width;
//         this.index++;
//         if (this.index == 9){
//             JsbSdkScript.buryPoint("debug_1024_done","")
//         }else if(this.index == 10){
//             JsbSdkScript.buryPoint("debug_2048_done","")
//         }
//         let width = this.node.width;
//         this.node.scale = oriWidth * 1.0 / width;
//         this.getComponent(cc.PhysicsCircleCollider).radius = oriWidth / 2 - 1;
//         this.getComponent(cc.PhysicsCircleCollider).apply();
//         if (cc.isValid(this.scaleTween, true)) {
//             this.scaleTween.stop();
//         }
//         this.scaleTween = cc.tween(this.node)
//             .parallel(
//                 cc.tween().delay(0.1)
//                     .call(() => {
//                         this.getComponent(cc.PhysicsCircleCollider).radius = width / 2 - 1;
//                         this.getComponent(cc.PhysicsCircleCollider).apply();
//                         this.isDeath = false;
//                     }),
//                 cc.tween(this.node)
//                     .to(0.15, { scale: 1.15 })
//                     .to(0.3, { scale: 1.0 })
//             )
//             // .to(0.18, { scale: 1})
//             .start()
//         let qiuNode = this.node.getChildByName("qiu");
//         let qiuZindex = qiuNode.zIndex;
//         let txtNode = this.node.getChildByName("txt");
//         if (cc.isValid(this.tween, true)) {
//             this.tween.stop();
//         }
//         txtNode.zIndex = qiuNode.zIndex + 1;
//         txtNode.setPosition(cc.v2(0, 0));
//         txtNode.scale = 1.0;
//         let rate = 1.0;
//         for (let i = 0; i < this.index; i++) {
//             rate *= 0.9;
//         }
//         let scale = this.node.width * rate / 80.0;
//         this.tween = cc.tween(txtNode)
//             .delay(0.1)
//             .to(0.15 * scale, { position: cc.v3(this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex - 1;
//             })
//             .to(0.2 * scale, { position: cc.v3(-this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex + 1;
//             })
//             .to(0.1 * scale, { position: cc.v3(0, 0, 0), scaleX: 1.0, scaleY: 1.0, skewY: 0 })
//             .to(0.1 * scale, { position: cc.v3(this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex - 1;
//             })
//             .to(0.2 * scale, { position: cc.v3(-this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex + 1;
//             })
//             .to(0.1 * scale, { position: cc.v3(0, 0, 0), scaleX: 1.0, scaleY: 1.0 })
//             .start()
//     }
//     initData(index) {
//         // this.currentIndex = index;
//         this.index = index;
//         this.getComponent(cc.PhysicsCircleCollider).radius = this.node.height / 2 - 1;
//         this.getComponent(cc.PhysicsCircleCollider).apply();
//     }
//     // protected onDestroy(): void {
//     //     console.log(`qiuCollisionScript onDestroy`);
//     // }
//     onLoad () {
//         this.targetNode = cc.find("Canvas/gameNode/gameLayer/UpRewardNode/moneyID/label");
//         this.leftNode = cc.find("Canvas/leftNode/label");
//     }
//     start() {
//     }
//     // update (dt) {}
//     onBeginContact(contact: cc.PhysicsContact, selfConllider, otherCollider) {
//         if (otherCollider.node.group == "floor" || otherCollider.node.group == "qiuqiu") {
//             // if(cc.isValid(GameManager.Instance.tempQiu,true) && cc.isValid(this.node , true) ) {
//             //     // if(GameManager.Instance.tempQiu.name != null && this.node.name != null) {
//             //         if( GameManager.Instance.tempQiu.name === this.node.name) {  
//             //             GameManager.Instance.tempQiu = null; 
//             //         }
//             //     // }
//             // }
//             let com1: qiuMoveScript = selfConllider.getComponent(qiuMoveScript);
//             if (cc.isValid(com1, true)) {
//                 com1.isCollsion = true;
//                 GameManager.Instance.resetCounting();  
//             }
//             // let com2: qiuMoveScript = otherCollider.getComponent(qiuMoveScript);
//             // if (cc.isValid(com2, true)) {
//             //     com2.isCollsion = true;
//             // }
//         }
//         if (selfConllider.node.group == "qiuqiu" && otherCollider.node.group == "qiuqiu") { 
//             if(GameManager.Instance.isOver) {
//                 return
//             }
//             if (cc.isValid(GameManager.Instance.targetQiu, true)) {
//                 if (GameManager.Instance.targetQiu == selfConllider.node) {
//                     if (GameManager.Instance.targetQiu.getComponent(cc.RigidBody).type == cc.RigidBodyType.Static) {
//                         GameManager.Instance.gameOver()
//                         return
//                     } 
//                 }
//             }
//             if (selfConllider.node.y < otherCollider.node.y) {
//                 return
//             }
//             let selfIndex = this.index;
//             let otherCollisionScript: qiuCollisionScript = otherCollider.getComponent(qiuCollisionScript);
//             let otherIndex = otherCollisionScript.index;
//             let selfDeath = this.isDeath;
//             let otherDeath = otherCollisionScript.isDeath;
//             // 融合
//             if (!selfDeath && !otherDeath && selfIndex == otherIndex) {
//                 if (this.index >= 10) {
//                     return
//                 }
//                 otherCollisionScript.isDeath = true;
//                 this.getComponent(qiuCollisionScript).isDeath = true;
//                 let pos1 = this.node.getPosition();
//                 let pos2 = otherCollider.node.getPosition();
//                 let pos = cc.v3(pos1.x + (pos2.x - pos1.x) * 9 / 10, pos1.y + (pos2.y - pos1.y) * 9 / 10, 0);
//                 // let pos = cc.v3(pos2.x ,  pos2.y , 0); 
//                         // let boomNode = cc.instantiate(this.mergeBoomPrefab);
//                         // boomNode.getComponent(boomScript).targetRadius = this.node.width;
//                         // boomNode.getComponent(boomScript).index = this.index;
//                         // boomNode.setPosition(pos);
//                         // this.node.parent.addChild(boomNode);
//                 this.playBoomAnimation(pos);
//                 cc.resources.load("prefab/redbagPrefab", cc.Prefab, (err, res) => {
//                     if (res){
//                         this.redbag = cc.instantiate(res as unknown as cc.Prefab);
//                         this.redbag.setPosition(this.node.getPosition())
//                         cc.find("Canvas").addChild(this.redbag);
//                         let targetNode
//                         if (cc.view.getFrameSize().width > cc.view.getFrameSize().height){
//                             targetNode = this.leftNode
//                         }else{
//                             targetNode = this.targetNode
//                         }
//                         let tartgetPos = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
//                         let pos1 = this.redbag.convertToNodeSpaceAR(tartgetPos);
//                         let pos = cc.v2(pos1.x + targetNode.width / 2, pos1.y);
//                         cc.tween(this.redbag)
//                             .bezierBy(1.0, cc.v2(pos.x / 4, 500), cc.v2(pos.x * 3 / 4, 500), pos)
//                             .to(0.1, { opacity: 0 })
//                             .start()
//                     }
//                 })
//                 if (cc.isValid(this.scoreNode, true) && cc.isValid(otherCollisionScript.scoreNode, true)) {
//                     this.scoreNode.getComponent(tireSteakScript).score += otherCollisionScript.scoreNode.getComponent(tireSteakScript).score;
//                     otherCollisionScript.scoreNode.destroy()
//                 }
//                 else if (cc.isValid(this.scoreNode, true) == false) {
//                     if (cc.isValid(otherCollisionScript.scoreNode, true)) {
//                         this.scoreNode = otherCollisionScript.scoreNode;
//                     }
//                     else {
//                         this.scoreNode = cc.instantiate(this.scorePrefab);
//                         GameManager.Instance.displayNode.addChild(this.scoreNode);
//                     }
//                 }
//                 this.scoreNode.getComponent(tireSteakScript).score += (this.index + 1);
//                 this.scoreNode.setPosition(pos2);
//                 GameManager.Instance.synthesizeQiu(this.index + 1, pos, otherCollider.node, this.node);
//                 let otherPaCount = otherCollider.getComponent(qiuCollisionScript).perpetualAttackCount;
//                 let selfPaCount = selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount;
//                 let maxCount = Math.max(otherPaCount, selfPaCount)
//                 selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount = maxCount + 1;
//                 if (cc.isValid(this.paTween, true)) {
//                     this.paTween.stop();
//                 }
//                 this.paTween = cc.tween(selfConllider.node)
//                     .delay(0.7)
//                     .call(() => {
//                         let selfPaCount = selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount; 
//                         selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount = 0;
//                         if (cc.isValid(this.scoreNode, true)) {
//                             this.scoreNode.getComponent(tireSteakScript).action();
//                             this.scoreNode = null;
//                         }
//                     })
//                     .start();
//                 let time = 0.1;
//                 for (let i = 0; i < this.index; i++) {
//                     time *= 1.1;
//                 }
//                 // console.log(`merget time ${this.index} | ${time}`);
//                 cc.tween(otherCollider.node)
//                     .to(time, { position: pos, scale: 0 })
//                     .call(() => {
//                         otherCollider.node.destroy();
//                     })
//                     .start();
//                 cc.tween(this.node)
//                     .to(time, { position: pos })
//                     .call(() => {
//                         if (cc.isValid(selfConllider.node, true) && this.index == otherIndex) {
//                             this.levelUp();
//                         }
//                     })
//                     .start();
//             }
//             else if (selfIndex != otherIndex) {
//                 this.isspark = true;
//             }
//         }
//     }
//     playBoomAnimation(pos)
//     {
//         let boomNode = cc.instantiate(this.mergeBoomPrefab);
//         boomNode.getComponent(boomScript).targetRadius = this.node.width;
//         boomNode.getComponent(boomScript).index = this.index;
//         boomNode.setPosition(pos);
//         this.node.parent.addChild(boomNode);
//     }
//     onEndContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider): void {
//         if (selfCollider.node.group == "qiuqiu" && otherCollider.node.group == "qiuqiu") {
//             if (selfCollider.node.y < otherCollider.node.y) {
//                 return
//             }
//             if (this.isspark) {
//                 this.isspark = false;
//             }
//         }
//     }
//     onPostSolve(contact: cc.PhysicsContact, selfConllider, otherCollider) {
//         if (selfConllider.node.group == "qiuqiu" && otherCollider.node.group == "qiuqiu") {
//             if (selfConllider.node.y < otherCollider.node.y) {
//                 return;
//             }
//             if (!this.isspark) {
//                 return;
//             }
//             let selfIndex = this.index;
//             let otherIndex = otherCollider.getComponent(qiuCollisionScript).index;
//             if (selfIndex != otherIndex) {
//                 let manifoldPoints: Array<cc.ManifoldPoint> = contact.getManifold().points;
//                 if (manifoldPoints != null && manifoldPoints.length > 0) {
//                     let manifoldPoint = manifoldPoints[0];
//                     if (Math.abs(manifoldPoint.normalImpulse) >= 8000 || (Math.abs(manifoldPoint.tangentImpulse) >= 8000)) {
//                         // if ((Math.pow(manifoldPoint.normalImpulse , 2) + Math.pow(manifoldPoint.tangentImpulse , 2)) > 500000000) {
//                         // console.log(`onPostSolve ${selfIndex} | ${otherIndex}`);
//                         let worldPoints = contact.getWorldManifold().points;
//                         if (worldPoints != null && worldPoints.length > 0) {
//                             let nowTime = (new Date()).getTime();
//                             if (this.collisionTime > 0 && Math.abs(this.collisionTime - nowTime) < 2000) {
//                                 return
//                             }
//                             let point = worldPoints[0];
//                             let point1 = this.node.parent.convertToNodeSpaceAR(point);
//                             // console.log(`worldPoints ${point1}`);
//                             if (!(this.collisionPoint && Math.abs(this.collisionPoint.x - point1.x) < 20 && Math.abs(this.collisionPoint.y - point1.y) < 20)) {
//                                 // console.log(`worldPoints ${point1}  | ${nowTime}  |  ${this.collisionTime} | ${Math.pow(manifoldPoint.normalImpulse, 2) + Math.pow(manifoldPoint.tangentImpulse, 2)}`);
//                                 let sparkNode = cc.instantiate(this.sparkPrefab);
//                                 sparkNode.setPosition(point1);
//                                 this.node.parent.addChild(sparkNode);
//                             }
//                             this.collisionPoint = point1;
//                             this.collisionTime = nowTime;
//                         }
//                         // console.log(`manifoldPoint: ${manifoldPoint.normalImpulse} | ${manifoldPoint.tangentImpulse}`);
//                     }
//                 }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L3FpdUNvbGxpc2lvblNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0Msa0VBQWtFO0FBQ2xFLG9EQUFvRDtBQUNwRCwyQ0FBMkM7QUFDM0MsK0NBQStDO0FBRS9DLCtDQUErQztBQUUvQywwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsc0NBQXNDO0FBQ3RDLElBQUk7QUFFSixXQUFXO0FBQ1gsaUVBQWlFO0FBRWpFLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFFckMsMkJBQTJCO0FBQzNCLG1DQUFtQztBQUVuQywyQkFBMkI7QUFDM0IsbUNBQW1DO0FBRW5DLGtDQUFrQztBQUNsQyx1REFBdUQ7QUFFdkQsa0NBQWtDO0FBQ2xDLHVEQUF1RDtBQUV2RCwyQkFBMkI7QUFDM0IscUNBQXFDO0FBRXJDLDJCQUEyQjtBQUMzQix3Q0FBd0M7QUFFeEMsZ0NBQWdDO0FBRWhDLDhCQUE4QjtBQUU5Qiw0QkFBNEI7QUFHNUIsaUNBQWlDO0FBRWpDLGdDQUFnQztBQUVoQywrQkFBK0I7QUFDL0IsaUVBQWlFO0FBQ2pFLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsNkVBQTZFO0FBQzdFLFlBQVk7QUFFWixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLDRDQUE0QztBQUM1QywrQkFBK0I7QUFDL0IsbUNBQW1DO0FBQ25DLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsUUFBUTtBQUVSLHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUN6QiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBQ3hFLFlBQVk7QUFDWixRQUFRO0FBRVIsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyxRQUFRO0FBR1IsOEJBQThCO0FBRTlCLGdDQUFnQztBQUVoQyxtQ0FBbUM7QUFFbkMsdUJBQXVCO0FBRXZCLGlD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LHlGQUF5RjtBQUd6Rix1RUFBdUU7QUFDdkUsa0tBQWtLO0FBQ2xLLDZNQUE2TTtBQUU3TSxvRkFBb0Y7QUFDcEYsaUVBQWlFO0FBQ2pFLHdFQUF3RTtBQUN4RSxnQ0FBZ0M7QUFDaEMsNERBQTREO0FBQzVELDREQUE0RDtBQUU1RCw0QkFBNEI7QUFDNUIsNkhBQTZIO0FBQzdILHdCQUF3QjtBQUN4QixvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBib29tU2NyaXB0IGZyb20gXCIuLi9ib29tU2NyaXB0XCI7IFxuLy8gaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi4vUGxhdGZvcm1JbnRlcmFjdGlvbi9Kc2JTZGtTY3JpcHRcIjtcbi8vIGltcG9ydCB0aXJlU3RlYWtTY3JpcHQgZnJvbSBcIi4uL3RpcmVTdGVha1NjcmlwdFwiO1xuLy8gaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgcWl1TW92ZVNjcmlwdCBmcm9tIFwiLi9xaXVNb3ZlU2NyaXB0XCI7XG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIGV4cG9ydCB0eXBlIFFpdUluZm8gPSB7XG4vLyAgICAgaW5kZXg6IG51bWJlcixcbi8vICAgICBwb3M6IGNjLlZlYzIsXG4vLyAgICAgc3BlZWQ6IGNjLlZlYzJcbi8vICAgICByaWdpZEJvZHlUeXBlOiBjYy5SaWdpZEJvZHlUeXBlXG4vLyB9XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBxaXVDb2xsaXNpb25TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlByZWZhYilcbi8vICAgICBzcGFya1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4vLyAgICAgcWl1U3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICB0eHRTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbi8vICAgICBxaXVTcHJpdGVGcmFtZUFycmF5OiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBbXTtcblxuLy8gICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuLy8gICAgIHR4dFNwcml0ZUZyYW1lQXJyYXk6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IFtdO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlByZWZhYilcbi8vICAgICBzY29yZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4vLyAgICAgbWVyZ2VCb29tUHJlZmFiOmNjLlByZWZhYiA9IG51bGw7XG5cbi8vICAgICB0YXJnZXROb2RlOmNjLk5vZGUgPSBudWxsXG5cbi8vICAgICBsZWZ0Tm9kZTpjYy5Ob2RlID0gbnVsbFxuXG4vLyAgICAgcmVkYmFnOmNjLk5vZGUgPSBudWxsXG5cblxuLy8gICAgIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICBwZXJwZXR1YWxBdHRhY2tDb3VudCA9IDA7XG5cbi8vICAgICBnZXQgcWl1SW5mbygpOiBRaXVJbmZvIHtcbi8vICAgICAgICAgbGV0IHJUeXBlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGU7XG4vLyAgICAgICAgIGxldCB2ZWxvY2l0eSA9IGNjLnYyKDAsIDApXG4vLyAgICAgICAgIGlmIChyVHlwZSA9PSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWMpIHtcbi8vICAgICAgICAgICAgIHZlbG9jaXR5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgaW5mbzogUWl1SW5mbyA9IHtcbi8vICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuLy8gICAgICAgICAgICAgcG9zOiB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSxcbi8vICAgICAgICAgICAgIHNwZWVkOiB2ZWxvY2l0eSxcbi8vICAgICAgICAgICAgIHJpZ2lkQm9keVR5cGU6IHJUeXBlXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGluZm9cbi8vICAgICB9XG5cbi8vICAgICBwcml2YXRlIF9pc0RlYXRoOiBib29sZWFuID0gZmFsc2U7XG4vLyAgICAgc2V0IGlzRGVhdGgoaXNEZWF0aDogYm9vbGVhbikge1xuLy8gICAgICAgICB0aGlzLl9pc0RlYXRoID0gaXNEZWF0aDtcbi8vICAgICAgICAgaWYgKGlzRGVhdGgpIHtcbi8vICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSAwO1xuLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLmFwcGx5KCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBnZXQgaXNEZWF0aCgpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVhdGg7XG4vLyAgICAgfVxuXG4gICAgXG4vLyAgICAgdHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuLy8gICAgIHBhVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuLy8gICAgIHNjYWxlVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuLy8gICAgIGlzc3BhcmsgPSBmYWxzZTtcblxuLy8gICAgIGNvbGxpc2lvblRpbWU6IG51bWJlciA9IDA7XG4vLyAgICAgY29sbGlzaW9uUG9pbnQ6IGNjLlZlYzIgPSBudWxsO1xuXG5cbi8vICAgICBnYW1lT3ZlcigpIHtcbi8vICAgICAgICAgdGhpcy5faXNEZWF0aCA9IHRydWU7IFxuLy8gICAgIH1cblxuLy8gICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG4vLyAgICAgcHVibGljIGdldCBpbmRleCgpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuLy8gICAgIH1cblxuLy8gICAgIHB1YmxpYyBzZXQgaW5kZXgoaW5kZXg6IG51bWJlcikge1xuLy8gICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuLy8gICAgICAgICBpZiAoaW5kZXggPiAxMCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICB0aGlzLnFpdVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucWl1U3ByaXRlRnJhbWVBcnJheVtpbmRleF07XG4vLyAgICAgICAgIHRoaXMudHh0U3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy50eHRTcHJpdGVGcmFtZUFycmF5W2luZGV4XTtcblxuLy8gICAgICAgICBsZXQgbW9pdmVTY3JpcHQgPSB0aGlzLmdldENvbXBvbmVudChxaXVNb3ZlU2NyaXB0KTtcbi8vICAgICAgICAgaWYgKGNjLmlzVmFsaWQobW9pdmVTY3JpcHQsIHRydWUpKSB7XG4vLyAgICAgICAgICAgICBtb2l2ZVNjcmlwdC5saWdodHlOb2RlLmhlaWdodCA9IHRoaXMucWl1U3ByaXRlLm5vZGUuaGVpZ2h0O1xuLy8gICAgICAgICAgICAgbW9pdmVTY3JpcHQubGlnaHR5Tm9kZS53aWR0aCA9IDIxNCAqIHRoaXMucWl1U3ByaXRlLm5vZGUuaGVpZ2h0ICogMS4wIC8gODM7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICB0aGlzLm5vZGUud2lkdGggPSB0aGlzLnFpdVNwcml0ZS5ub2RlLndpZHRoO1xuLy8gICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5xaXVTcHJpdGUubm9kZS5oZWlnaHQ7XG4vLyAgICAgfVxuXG4vLyAgICAgbGV2ZWxVcCgpIHtcbi8vICAgICAgICAgbGV0IG9yaVdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuXG4vLyAgICAgICAgIHRoaXMuaW5kZXgrKztcbi8vICAgICAgICAgaWYgKHRoaXMuaW5kZXggPT0gOSl7XG4vLyAgICAgICAgICAgICBKc2JTZGtTY3JpcHQuYnVyeVBvaW50KFwiZGVidWdfMTAyNF9kb25lXCIsXCJcIilcbi8vICAgICAgICAgfWVsc2UgaWYodGhpcy5pbmRleCA9PSAxMCl7XG4vLyAgICAgICAgICAgICBKc2JTZGtTY3JpcHQuYnVyeVBvaW50KFwiZGVidWdfMjA0OF9kb25lXCIsXCJcIilcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGxldCB3aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcblxuLy8gICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBvcmlXaWR0aCAqIDEuMCAvIHdpZHRoO1xuLy8gICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IG9yaVdpZHRoIC8gMiAtIDE7XG4vLyAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcikuYXBwbHkoKTtcblxuLy8gICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnNjYWxlVHdlZW4sIHRydWUpKSB7XG4vLyAgICAgICAgICAgICB0aGlzLnNjYWxlVHdlZW4uc3RvcCgpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuc2NhbGVUd2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSlcbi8vICAgICAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmRlbGF5KDAuMSlcbi8vICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSB3aWR0aCAvIDIgLSAxO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5hcHBseSgpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGVhdGggPSBmYWxzZTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSksXG4vLyAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4xNSwgeyBzY2FsZTogMS4xNSB9KVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxLjAgfSlcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgIC8vIC50bygwLjE4LCB7IHNjYWxlOiAxfSlcbi8vICAgICAgICAgICAgIC5zdGFydCgpXG5cbi8vICAgICAgICAgbGV0IHFpdU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaXVcIik7XG4vLyAgICAgICAgIGxldCBxaXVaaW5kZXggPSBxaXVOb2RlLnpJbmRleDtcbi8vICAgICAgICAgbGV0IHR4dE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIik7XG5cbi8vICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy50d2VlbiwgdHJ1ZSkpIHtcbi8vICAgICAgICAgICAgIHRoaXMudHdlZW4uc3RvcCgpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdHh0Tm9kZS56SW5kZXggPSBxaXVOb2RlLnpJbmRleCArIDE7XG4vLyAgICAgICAgIHR4dE5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICB0eHROb2RlLnNjYWxlID0gMS4wO1xuXG4vLyAgICAgICAgIGxldCByYXRlID0gMS4wO1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kZXg7IGkrKykge1xuLy8gICAgICAgICAgICAgcmF0ZSAqPSAwLjk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5ub2RlLndpZHRoICogcmF0ZSAvIDgwLjA7XG5cbi8vICAgICAgICAgdGhpcy50d2VlbiA9IGNjLnR3ZWVuKHR4dE5vZGUpXG4vLyAgICAgICAgICAgICAuZGVsYXkoMC4xKVxuLy8gICAgICAgICAgICAgLnRvKDAuMTUgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLndpZHRoIC8gMiwgMCwgMCksIHNjYWxlWDogMC4wLCBzY2FsZVk6IDAuNyB9KVxuLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHR4dE5vZGUuekluZGV4ID0gcWl1WmluZGV4IC0gMTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yICogc2NhbGUsIHsgcG9zaXRpb246IGNjLnYzKC10aGlzLm5vZGUud2lkdGggLyAyLCAwLCAwKSwgc2NhbGVYOiAwLjAsIHNjYWxlWTogMC43IH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdHh0Tm9kZS56SW5kZXggPSBxaXVaaW5kZXggKyAxO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC50bygwLjEgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIHNjYWxlWDogMS4wLCBzY2FsZVk6IDEuMCwgc2tld1k6IDAgfSlcbi8vICAgICAgICAgICAgIC50bygwLjEgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLndpZHRoIC8gMiwgMCwgMCksIHNjYWxlWDogMC4wLCBzY2FsZVk6IDAuNyB9KVxuLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHR4dE5vZGUuekluZGV4ID0gcWl1WmluZGV4IC0gMTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yICogc2NhbGUsIHsgcG9zaXRpb246IGNjLnYzKC10aGlzLm5vZGUud2lkdGggLyAyLCAwLCAwKSwgc2NhbGVYOiAwLjAsIHNjYWxlWTogMC43IH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdHh0Tm9kZS56SW5kZXggPSBxaXVaaW5kZXggKyAxO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC50bygwLjEgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIHNjYWxlWDogMS4wLCBzY2FsZVk6IDEuMCB9KVxuLy8gICAgICAgICAgICAgLnN0YXJ0KClcbi8vICAgICB9XG5cbi8vICAgICBpbml0RGF0YShpbmRleCkge1xuLy8gICAgICAgICAvLyB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuLy8gICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cbi8vICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSB0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIDE7XG4vLyAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcikuYXBwbHkoKTtcbi8vICAgICB9XG5cbi8vICAgICAvLyBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhgcWl1Q29sbGlzaW9uU2NyaXB0IG9uRGVzdHJveWApO1xuXG4vLyAgICAgLy8gfVxuLy8gICAgIG9uTG9hZCAoKSB7XG4vLyAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZU5vZGUvZ2FtZUxheWVyL1VwUmV3YXJkTm9kZS9tb25leUlEL2xhYmVsXCIpO1xuLy8gICAgICAgICB0aGlzLmxlZnROb2RlID0gY2MuZmluZChcIkNhbnZhcy9sZWZ0Tm9kZS9sYWJlbFwiKTtcbi8vICAgICB9XG5cbi8vICAgICBzdGFydCgpIHtcblxuLy8gICAgIH1cblxuLy8gICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbi8vICAgICBvbkJlZ2luQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbmxsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuXG4vLyAgICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUuZ3JvdXAgPT0gXCJmbG9vclwiIHx8IG90aGVyQ29sbGlkZXIubm9kZS5ncm91cCA9PSBcInFpdXFpdVwiKSB7XG4gICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gaWYoY2MuaXNWYWxpZChHYW1lTWFuYWdlci5JbnN0YW5jZS50ZW1wUWl1LHRydWUpICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlICwgdHJ1ZSkgKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gaWYoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGVtcFFpdS5uYW1lICE9IG51bGwgJiYgdGhpcy5ub2RlLm5hbWUgIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgLy8gICAgICAgICBpZiggR2FtZU1hbmFnZXIuSW5zdGFuY2UudGVtcFFpdS5uYW1lID09PSB0aGlzLm5vZGUubmFtZSkgeyAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UudGVtcFFpdSA9IG51bGw7IFxuLy8gICAgICAgICAgICAgLy8gICAgICAgICB9XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gfVxuLy8gICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG5cbi8vICAgICAgICAgICAgIGxldCBjb20xOiBxaXVNb3ZlU2NyaXB0ID0gc2VsZkNvbmxsaWRlci5nZXRDb21wb25lbnQocWl1TW92ZVNjcmlwdCk7XG4vLyAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChjb20xLCB0cnVlKSkge1xuLy8gICAgICAgICAgICAgICAgIGNvbTEuaXNDb2xsc2lvbiA9IHRydWU7XG4vLyAgICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UucmVzZXRDb3VudGluZygpOyAgXG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIC8vIGxldCBjb20yOiBxaXVNb3ZlU2NyaXB0ID0gb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQocWl1TW92ZVNjcmlwdCk7XG4vLyAgICAgICAgICAgICAvLyBpZiAoY2MuaXNWYWxpZChjb20yLCB0cnVlKSkge1xuLy8gICAgICAgICAgICAgLy8gICAgIGNvbTIuaXNDb2xsc2lvbiA9IHRydWU7XG4vLyAgICAgICAgICAgICAvLyB9XG5cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoc2VsZkNvbmxsaWRlci5ub2RlLmdyb3VwID09IFwicWl1cWl1XCIgJiYgb3RoZXJDb2xsaWRlci5ub2RlLmdyb3VwID09IFwicWl1cWl1XCIpIHsgXG4vLyAgICAgICAgICAgICBpZihHYW1lTWFuYWdlci5JbnN0YW5jZS5pc092ZXIpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdSwgdHJ1ZSkpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1ID09IHNlbGZDb25sbGlkZXIubm9kZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGUgPT0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWMpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlLmdhbWVPdmVyKClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICAgICAgICAgICAgICB9IFxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgaWYgKHNlbGZDb25sbGlkZXIubm9kZS55IDwgb3RoZXJDb2xsaWRlci5ub2RlLnkpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgbGV0IHNlbGZJbmRleCA9IHRoaXMuaW5kZXg7XG4vLyAgICAgICAgICAgICBsZXQgb3RoZXJDb2xsaXNpb25TY3JpcHQ6IHFpdUNvbGxpc2lvblNjcmlwdCA9IG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCk7XG4vLyAgICAgICAgICAgICBsZXQgb3RoZXJJbmRleCA9IG90aGVyQ29sbGlzaW9uU2NyaXB0LmluZGV4O1xuXG4vLyAgICAgICAgICAgICBsZXQgc2VsZkRlYXRoID0gdGhpcy5pc0RlYXRoO1xuLy8gICAgICAgICAgICAgbGV0IG90aGVyRGVhdGggPSBvdGhlckNvbGxpc2lvblNjcmlwdC5pc0RlYXRoO1xuXG4vLyAgICAgICAgICAgICAvLyDono3lkIhcbi8vICAgICAgICAgICAgIGlmICghc2VsZkRlYXRoICYmICFvdGhlckRlYXRoICYmIHNlbGZJbmRleCA9PSBvdGhlckluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gMTApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIG90aGVyQ29sbGlzaW9uU2NyaXB0LmlzRGVhdGggPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkuaXNEZWF0aCA9IHRydWU7XG5cbi8vICAgICAgICAgICAgICAgICBsZXQgcG9zMSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuLy8gICAgICAgICAgICAgICAgIGxldCBwb3MyID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKCk7XG4vLyAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYzKHBvczEueCArIChwb3MyLnggLSBwb3MxLngpICogOSAvIDEwLCBwb3MxLnkgKyAocG9zMi55IC0gcG9zMS55KSAqIDkgLyAxMCwgMCk7XG4vLyAgICAgICAgICAgICAgICAgLy8gbGV0IHBvcyA9IGNjLnYzKHBvczIueCAsICBwb3MyLnkgLCAwKTsgXG4gICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGJvb21Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5tZXJnZUJvb21QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGJvb21TY3JpcHQpLnRhcmdldFJhZGl1cyA9IHRoaXMubm9kZS53aWR0aDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvb21Ob2RlLmdldENvbXBvbmVudChib29tU2NyaXB0KS5pbmRleCA9IHRoaXMuaW5kZXg7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvb21Ob2RlLnNldFBvc2l0aW9uKHBvcyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJvb21Ob2RlKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnBsYXlCb29tQW5pbWF0aW9uKHBvcyk7XG4vLyAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvcmVkYmFnUHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRiYWcgPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgdW5rbm93biBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRiYWcuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKHRoaXMucmVkYmFnKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldE5vZGVcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMubGVmdE5vZGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldE5vZGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJ0Z2V0UG9zID0gdGFyZ2V0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvczEgPSB0aGlzLnJlZGJhZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJ0Z2V0UG9zKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mihwb3MxLnggKyB0YXJnZXROb2RlLndpZHRoIC8gMiwgcG9zMS55KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucmVkYmFnKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iZXppZXJCeSgxLjAsIGNjLnYyKHBvcy54IC8gNCwgNTAwKSwgY2MudjIocG9zLnggKiAzIC8gNCwgNTAwKSwgcG9zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG5cbi8vICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnNjb3JlTm9kZSwgdHJ1ZSkgJiYgY2MuaXNWYWxpZChvdGhlckNvbGxpc2lvblNjcmlwdC5zY29yZU5vZGUsIHRydWUpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudCh0aXJlU3RlYWtTY3JpcHQpLnNjb3JlICs9IG90aGVyQ29sbGlzaW9uU2NyaXB0LnNjb3JlTm9kZS5nZXRDb21wb25lbnQodGlyZVN0ZWFrU2NyaXB0KS5zY29yZTtcbi8vICAgICAgICAgICAgICAgICAgICAgb3RoZXJDb2xsaXNpb25TY3JpcHQuc2NvcmVOb2RlLmRlc3Ryb3koKVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYy5pc1ZhbGlkKHRoaXMuc2NvcmVOb2RlLCB0cnVlKSA9PSBmYWxzZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChvdGhlckNvbGxpc2lvblNjcmlwdC5zY29yZU5vZGUsIHRydWUpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZSA9IG90aGVyQ29sbGlzaW9uU2NyaXB0LnNjb3JlTm9kZTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZVByZWZhYik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS5kaXNwbGF5Tm9kZS5hZGRDaGlsZCh0aGlzLnNjb3JlTm9kZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zY29yZU5vZGUuZ2V0Q29tcG9uZW50KHRpcmVTdGVha1NjcmlwdCkuc2NvcmUgKz0gKHRoaXMuaW5kZXggKyAxKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZS5zZXRQb3NpdGlvbihwb3MyKTtcblxuLy8gICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnN5bnRoZXNpemVRaXUodGhpcy5pbmRleCArIDEsIHBvcywgb3RoZXJDb2xsaWRlci5ub2RlLCB0aGlzLm5vZGUpO1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IG90aGVyUGFDb3VudCA9IG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkucGVycGV0dWFsQXR0YWNrQ291bnQ7XG5cbi8vICAgICAgICAgICAgICAgICBsZXQgc2VsZlBhQ291bnQgPSBzZWxmQ29ubGxpZGVyLmdldENvbXBvbmVudChxaXVDb2xsaXNpb25TY3JpcHQpLnBlcnBldHVhbEF0dGFja0NvdW50O1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IG1heENvdW50ID0gTWF0aC5tYXgob3RoZXJQYUNvdW50LCBzZWxmUGFDb3VudClcbi8vICAgICAgICAgICAgICAgICBzZWxmQ29ubGxpZGVyLmdldENvbXBvbmVudChxaXVDb2xsaXNpb25TY3JpcHQpLnBlcnBldHVhbEF0dGFja0NvdW50ID0gbWF4Q291bnQgKyAxO1xuXG5cbi8vICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnBhVHdlZW4sIHRydWUpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFUd2Vlbi5zdG9wKCk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIHRoaXMucGFUd2VlbiA9IGNjLnR3ZWVuKHNlbGZDb25sbGlkZXIubm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNylcbi8vICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGZQYUNvdW50ID0gc2VsZkNvbmxsaWRlci5nZXRDb21wb25lbnQocWl1Q29sbGlzaW9uU2NyaXB0KS5wZXJwZXR1YWxBdHRhY2tDb3VudDsgXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGZDb25sbGlkZXIuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkucGVycGV0dWFsQXR0YWNrQ291bnQgPSAwO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnNjb3JlTm9kZSwgdHJ1ZSkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZS5nZXRDb21wb25lbnQodGlyZVN0ZWFrU2NyaXB0KS5hY3Rpb24oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZSA9IG51bGw7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuXG5cbi8vICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IDAuMTtcbi8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kZXg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgICAgICB0aW1lICo9IDEuMTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG1lcmdldCB0aW1lICR7dGhpcy5pbmRleH0gfCAke3RpbWV9YCk7XG5cbi8vICAgICAgICAgICAgICAgICBjYy50d2VlbihvdGhlckNvbGxpZGVyLm5vZGUpXG4vLyAgICAgICAgICAgICAgICAgICAgIC50byh0aW1lLCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5kZXN0cm95KCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8odGltZSwgeyBwb3NpdGlvbjogcG9zIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHNlbGZDb25sbGlkZXIubm9kZSwgdHJ1ZSkgJiYgdGhpcy5pbmRleCA9PSBvdGhlckluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFVwKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZWxzZSBpZiAoc2VsZkluZGV4ICE9IG90aGVySW5kZXgpIHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmlzc3BhcmsgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHBsYXlCb29tQW5pbWF0aW9uKHBvcylcbi8vICAgICB7XG4vLyAgICAgICAgIGxldCBib29tTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWVyZ2VCb29tUHJlZmFiKTtcbi8vICAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGJvb21TY3JpcHQpLnRhcmdldFJhZGl1cyA9IHRoaXMubm9kZS53aWR0aDtcbi8vICAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGJvb21TY3JpcHQpLmluZGV4ID0gdGhpcy5pbmRleDtcbi8vICAgICAgICAgYm9vbU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbi8vICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChib29tTm9kZSk7XG4vLyAgICAgfVxuLy8gICAgIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcik6IHZvaWQge1xuLy8gICAgICAgICBpZiAoc2VsZkNvbGxpZGVyLm5vZGUuZ3JvdXAgPT0gXCJxaXVxaXVcIiAmJiBvdGhlckNvbGxpZGVyLm5vZGUuZ3JvdXAgPT0gXCJxaXVxaXVcIikge1xuLy8gICAgICAgICAgICAgaWYgKHNlbGZDb2xsaWRlci5ub2RlLnkgPCBvdGhlckNvbGxpZGVyLm5vZGUueSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaWYgKHRoaXMuaXNzcGFyaykge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNzcGFyayA9IGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgb25Qb3N0U29sdmUoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb25sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbi8vICAgICAgICAgaWYgKHNlbGZDb25sbGlkZXIubm9kZS5ncm91cCA9PSBcInFpdXFpdVwiICYmIG90aGVyQ29sbGlkZXIubm9kZS5ncm91cCA9PSBcInFpdXFpdVwiKSB7XG4vLyAgICAgICAgICAgICBpZiAoc2VsZkNvbmxsaWRlci5ub2RlLnkgPCBvdGhlckNvbGxpZGVyLm5vZGUueSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgaWYgKCF0aGlzLmlzc3BhcmspIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBsZXQgc2VsZkluZGV4ID0gdGhpcy5pbmRleDtcbi8vICAgICAgICAgICAgIGxldCBvdGhlckluZGV4ID0gb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQocWl1Q29sbGlzaW9uU2NyaXB0KS5pbmRleDtcbi8vICAgICAgICAgICAgIGlmIChzZWxmSW5kZXggIT0gb3RoZXJJbmRleCkge1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IG1hbmlmb2xkUG9pbnRzOiBBcnJheTxjYy5NYW5pZm9sZFBvaW50PiA9IGNvbnRhY3QuZ2V0TWFuaWZvbGQoKS5wb2ludHM7XG4vLyAgICAgICAgICAgICAgICAgaWYgKG1hbmlmb2xkUG9pbnRzICE9IG51bGwgJiYgbWFuaWZvbGRQb2ludHMubGVuZ3RoID4gMCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgbWFuaWZvbGRQb2ludCA9IG1hbmlmb2xkUG9pbnRzWzBdO1xuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKG1hbmlmb2xkUG9pbnQubm9ybWFsSW1wdWxzZSkgPj0gODAwMCB8fCAoTWF0aC5hYnMobWFuaWZvbGRQb2ludC50YW5nZW50SW1wdWxzZSkgPj0gODAwMCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICgoTWF0aC5wb3cobWFuaWZvbGRQb2ludC5ub3JtYWxJbXB1bHNlICwgMikgKyBNYXRoLnBvdyhtYW5pZm9sZFBvaW50LnRhbmdlbnRJbXB1bHNlICwgMikpID4gNTAwMDAwMDAwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb25Qb3N0U29sdmUgJHtzZWxmSW5kZXh9IHwgJHtvdGhlckluZGV4fWApO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd29ybGRQb2ludHMgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5wb2ludHM7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod29ybGRQb2ludHMgIT0gbnVsbCAmJiB3b3JsZFBvaW50cy5sZW5ndGggPiAwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vd1RpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblRpbWUgPiAwICYmIE1hdGguYWJzKHRoaXMuY29sbGlzaW9uVGltZSAtIG5vd1RpbWUpIDwgMjAwMCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gd29ybGRQb2ludHNbMF07XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50MSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgd29ybGRQb2ludHMgJHtwb2ludDF9YCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5jb2xsaXNpb25Qb2ludCAmJiBNYXRoLmFicyh0aGlzLmNvbGxpc2lvblBvaW50LnggLSBwb2ludDEueCkgPCAyMCAmJiBNYXRoLmFicyh0aGlzLmNvbGxpc2lvblBvaW50LnkgLSBwb2ludDEueSkgPCAyMCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHdvcmxkUG9pbnRzICR7cG9pbnQxfSAgfCAke25vd1RpbWV9ICB8ICAke3RoaXMuY29sbGlzaW9uVGltZX0gfCAke01hdGgucG93KG1hbmlmb2xkUG9pbnQubm9ybWFsSW1wdWxzZSwgMikgKyBNYXRoLnBvdyhtYW5pZm9sZFBvaW50LnRhbmdlbnRJbXB1bHNlLCAyKX1gKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhcmtOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcGFya1ByZWZhYik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXJrTm9kZS5zZXRQb3NpdGlvbihwb2ludDEpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHNwYXJrTm9kZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uUG9pbnQgPSBwb2ludDE7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25UaW1lID0gbm93VGltZTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG1hbmlmb2xkUG9pbnQ6ICR7bWFuaWZvbGRQb2ludC5ub3JtYWxJbXB1bHNlfSB8ICR7bWFuaWZvbGRQb2ludC50YW5nZW50SW1wdWxzZX1gKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbiJdfQ==