// import aduioTools, { engineType } from "./aduioTools";
// import gameConfig from "./gameConfig";
// import JsbSdkScript from "./PlatformInteraction/JsbSdkScript";
// import GameManager from "./qiuScript/GameManager";
// import qiuCollisionScript from "./qiuScript/qiuCollisionScript";
// import qiuMoveScript from "./qiuScript/qiuMoveScript";
// import TargetqiuScript from "./TargetScript/TargetqiuScript";
// import topBubbleBgScript from "./topBubbleBgScript";


// const { ccclass, property } = cc._decorator;

// @ccclass
// export default class GradeNoticeBoardScript extends cc.Component {

//     @property(cc.Node)
//     bgNode: cc.Node = null;

//     // @property(cc.Prefab)
//     // qiuPrefab: cc.Prefab = null;

//     @property(cc.Label)
//     title: cc.Label = null

//     // @property(cc.Node)
//     // girl: cc.Node = null
    
//     // @property(cc.RichText)
//     // remindLabel:cc.RichText = null;

//     // @property(cc.Prefab)
//     // targetQiuPrefab: cc.Prefab = null;

//     dismissCallBack:Function = null;
//     // onLoad () {}
//     targetNode: cc.Node = null;
//     onDestroy() {
//         // console.log(`GradeNoticeBoardScript OnDestroy`); 
//     }
//     start() {
//         this.title.string = gameConfig.getWord("guideNoticeTitle")
//         let targetNode = cc.find("headNode/UI_top_bubble_bg_01" , GameManager.Instance.displayNode); 
         
//         this.targetNode = targetNode;

//         this.bgNode.scaleY = 0;
//         let level = 4;

//         let levelNode:cc.Node = null;
//         cc.resources.load("prefab/TargetqiuPrefab", cc.Prefab, (err, res) => {
//             if (res) {
//                 // let boardNode = cc.instantiate(res as cc.Prefab);
//                 levelNode = cc.instantiate(res as cc.Prefab);
//                 levelNode.getComponent(TargetqiuScript).numberCount = level;  
//                 levelNode.setPosition(0, -20);  
//                 this.bgNode.addChild(levelNode);
//             }
//         })

//         // let levelNode = cc.instantiate(this.targetQiuPrefab);
//         // levelNode.getComponent(TargetqiuScript).numberCount = level; 
 
//         // levelNode.setPosition(0, -20); 

//         // this.bgNode.addChild(levelNode);

//         cc.tween(this.bgNode)
//             .to(0.4, { scaleY: 1.1 })
//             .to(0.2, { scaleY: 0.9 })
//             .to(0.2, { scaleY: 1.0 })
//             .delay(0.1)
//             .call(() => {

//                 let post = this.targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
//                 let targetPos = levelNode.convertToNodeSpaceAR(post);
//                 let tpos = cc.v3(targetPos.x, targetPos.y - 18, 0);

//                 let qiuNode = levelNode.getChildByName("qiuNode");
//                 let scale = 115.0/qiuNode.height;
//                 cc.tween(levelNode)
//                     .parallel(
//                         cc.tween(levelNode).to(0.5, { position: cc.v3(tpos.x, tpos.y + 20, 0)}),
//                         cc.tween(qiuNode).to(0.5, {scale:scale})
//                     )
//                     .to(0.2, { position: cc.v3(tpos.x, tpos.y - 15, 0) })
//                     .to(0.15, { position: cc.v3(tpos.x, tpos.y + 12, 0) })
//                     .to(0.1, { position: cc.v3(tpos.x, tpos.y - 10, 0) })
//                     .to(0.07, { position: cc.v3(tpos.x, tpos.y, 0) })
//                     .call(() => {
//                         this.targetNode.getComponent(topBubbleBgScript).targetNode = levelNode;
//                         this.targetNode.getComponent(topBubbleBgScript).mountQiuAnimation();
//                         this.dismissNode();
//                     })
//                     .start();
//             })
//             .start();

//         // cc.tween(this.girl)
//         //     .delay(0.4)
//         //     .parallel(
//         //         cc.tween().call(()=> {
//         //             aduioTools.playSimpleAduioEngine(engineType.girlLaugh)
//         //         }),
//         //         cc.tween().to(0.4, { position: cc.v3(0, this.girl.height * 9 * 1.0 / 10, 0) })
//         //     )
           
//         //     .start();
//     }

//     dismissNode() {
//         // cc.tween(this.girl)
//         //     .to(0.3, { position: cc.v3(0, 0, 0) })
//         //     .start();

//         cc.tween(this.bgNode)
//             .delay(0.3)
//             .to(0.3, { scaleY: 0 })
//             .call(() => {
//                 this.node.destroy();
//                 if(this.dismissCallBack) {
//                     this.dismissCallBack();
//                 }
//             })
//             .start();

//     }

//     // update (dt) {}
// }
