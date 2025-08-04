"use strict";
cc._RF.push(module, 'a7429wYD/VH/68quVRrmg6A', 'TargetCompleteScript');
// script/TargetScript/TargetCompleteScript.ts

// import aduioTools, { engineType } from "../aduioTools";
// import GameManager from "../qiuScript/GameManager";
// import topBubbleBgScript from "../topBubbleBgScript";
// import TargetqiuScript from "./TargetqiuScript";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class TargetCompleteScript extends cc.Component {
//     callBack: Function = null;
//     // onLoad () {}
//     start() {
//     }
//     // update (dt) {}
//     completeTarget(startPoint, tartgetNumber) {
//         let targetNode = cc.find("headNode/UI_top_bubble_bg_01", GameManager.Instance.displayNode);
//         let node = targetNode.getComponent(topBubbleBgScript).targetNode;
//         if (tartgetNumber == 10) {
//             targetNode.getComponent(topBubbleBgScript).SyntheticUltimate();
//         }
//         let post = node.convertToWorldSpaceAR(cc.v2(0, 0));
//         let targetPos = this.node.convertToNodeSpaceAR(post);
//         let tpos = cc.v3(targetPos.x, targetPos.y, 0);
//         let pos = this.node.convertToNodeSpaceAR(startPoint);
//         cc.resources.load("prefab/TargetqiuPrefab", cc.Prefab, (err, res) => {
//             if (res) {
//                 let targetQiuNode = cc.instantiate(res as cc.Prefab);
//                 targetQiuNode.getComponent(TargetqiuScript).numberCount = tartgetNumber;
//                 targetQiuNode.setPosition(pos);
//                 targetQiuNode.setScale(0.0);
//                 this.node.addChild(targetQiuNode);
//                 cc.tween(targetQiuNode)
//                     .to(0.2, { scale: 0.75 })
//                     .delay(0.2)
//                     .parallel(
//                         cc.tween()
//                             .delay(0.3)
//                             .call(() => {
//                                 aduioTools.playSimpleAduioEngine(engineType.finish_target);
//                             }),
//                         cc.tween().to(0.7, { position: cc.v3(0, 0, 0) })
//                     )
//                     .to(0.5, { scale: 0.2 })
//                     .parallel(
//                         cc.tween().to(0.4, { scale: 1.0 }),
//                         cc.tween().call(() => {
//                             this.getComponent(cc.Animation).play();
//                         })
//                     )
//                     .delay(0.7)
//                     .parallel(
//                         cc.tween()
//                             .call(() => {
//                                 cc.tween(node)
//                                     .to(0.7, { opacity: 100 })
//                                     .call(() => {
//                                         node.destroy();
//                                         targetNode.getComponent(topBubbleBgScript).targetNode = targetQiuNode;
//                                         GameManager.Instance.createOneQiu();
//                                     })
//                                     .start()
//                             }),
//                         cc.tween().to(0.7, { position: cc.v3(tpos.x, tpos.y, 0), scale: 150.0 / targetQiuNode.getComponent(TargetqiuScript).qiuSize })
//                     )
//                     .call(() => {
//                         let wpos = targetQiuNode.convertToWorldSpaceAR(cc.v2(0, 0));
//                         let pos = targetNode.convertToNodeSpaceAR(wpos)
//                         targetQiuNode.removeFromParent();
//                         targetQiuNode.setPosition(pos)
//                         targetNode.addChild(targetQiuNode)
//                         targetQiuNode.getComponent(TargetqiuScript).movieCompleteScaleAnim();
//                         cc.tween(targetNode)
//                             .delay(0.3)
//                             .to(0.3, { scale: 1.15 })
//                             .to(0.18, { scale: 1.0 })
//                             .start()
//                         this.node.destroy();
//                         if (this.callBack) {
//                             this.callBack();
//                         }
//                     })
//                     .start()
//             }
//         })  
//     } 
// }

cc._RF.pop();