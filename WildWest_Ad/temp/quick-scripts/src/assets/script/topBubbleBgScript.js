"use strict";
cc._RF.push(module, '1164asFIMJJTKZAsldebGdK', 'topBubbleBgScript');
// script/topBubbleBgScript.ts

// import aduioTools, { engineType } from "./aduioTools";
// import BubbleAnimationScript from "./BubbleAnimationScript";
// import localDataManager from "./localDataManager";
// import TargetqiuScript from "./TargetScript/TargetqiuScript";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class topBubbleBgScript extends cc.Component {
//     @property(cc.Label)
//     compositeLabel: cc.Label = null;
//     private _targetNode: cc.Node = null;
//     set targetNode(targetNode: cc.Node) {
//         this._targetNode = targetNode;
//     }
//     get targetNode() {
//         return this._targetNode;
//     }
//     // onLoad () {}
//     start() {
//         let sCount = localDataManager.shareManager().getSyntheticCount();
//         this.compositeLabel.string = `x${sCount}`
//     }
//     SyntheticUltimate() {
//         let sCount = localDataManager.shareManager().getSyntheticCount();
//         localDataManager.shareManager().setSyntheticCount(sCount + 1);
//         setTimeout(() => {
//             this.compositeLabel.string = `x${sCount + 1}`
//         }, 3.4);
//     }
//     // update (dt) {}
//     mountQiuAnimation() {
//         let wpos = this.targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
//         let thisPos = this.node.convertToNodeSpaceAR(wpos);
//         this.targetNode.setPosition(thisPos);
//         this.targetNode.parent = this.node;
//         cc.resources.load(`prefab/txBubbleAnimation`, cc.Prefab, (err, res) => {
//             if (res) {
//                 let aniNode = cc.instantiate(res as cc.Prefab);
//                 aniNode.scale = 0.7;
//                 aniNode.getComponent(BubbleAnimationScript).callBack = () => {
//                     let deps = cc.loader.getDependsRecursively(res);
//                     cc.loader.release(deps);
//                     res.decRef();
//                 };
//                 this.node.addChild(aniNode);
//                 aduioTools.playSimpleAduioEngine(engineType.endTurn);
//             }
//         })
//     }
//     directMountqiu(level) {
//         cc.resources.load("prefab/TargetqiuPrefab", cc.Prefab, (err, res) => {
//             if (res) {
//                 let targetQiu = cc.instantiate(res as cc.Prefab);
//                 targetQiu.getComponent(TargetqiuScript).loadDataFixSize(level)
//                 let scale = 115.0 / 150;
//                 targetQiu.scale = scale;
//                 targetQiu.parent = this.node;
//                 this.targetNode = targetQiu;
//             }
//         })
//     }
// }

cc._RF.pop();