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
