
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GradeNoticeBoardScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ce858lBlVMMZfvdHCLa30y', 'GradeNoticeBoardScript');
// script/GradeNoticeBoardScript.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvR3JhZGVOb3RpY2VCb2FyZFNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLGlFQUFpRTtBQUNqRSxxREFBcUQ7QUFDckQsbUVBQW1FO0FBQ25FLHlEQUF5RDtBQUN6RCxnRUFBZ0U7QUFDaEUsdURBQXVEO0FBR3ZELCtDQUErQztBQUUvQyxXQUFXO0FBQ1gscUVBQXFFO0FBRXJFLHlCQUF5QjtBQUN6Qiw4QkFBOEI7QUFFOUIsOEJBQThCO0FBQzlCLHNDQUFzQztBQUV0QywwQkFBMEI7QUFDMUIsNkJBQTZCO0FBRTdCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFFOUIsZ0NBQWdDO0FBQ2hDLHlDQUF5QztBQUV6Qyw4QkFBOEI7QUFDOUIsNENBQTRDO0FBRTVDLHVDQUF1QztBQUN2QyxzQkFBc0I7QUFDdEIsa0NBQWtDO0FBQ2xDLG9CQUFvQjtBQUNwQiwrREFBK0Q7QUFDL0QsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixxRUFBcUU7QUFDckUsd0dBQXdHO0FBRXhHLHdDQUF3QztBQUV4QyxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBRXpCLHdDQUF3QztBQUN4QyxpRkFBaUY7QUFDakYseUJBQXlCO0FBQ3pCLHVFQUF1RTtBQUN2RSxnRUFBZ0U7QUFDaEUsaUZBQWlGO0FBQ2pGLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFFYixtRUFBbUU7QUFDbkUsMkVBQTJFO0FBRTNFLDZDQUE2QztBQUU3Qyw4Q0FBOEM7QUFFOUMsZ0NBQWdDO0FBQ2hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQiw0QkFBNEI7QUFFNUIsaUZBQWlGO0FBQ2pGLHdFQUF3RTtBQUN4RSxzRUFBc0U7QUFFdEUscUVBQXFFO0FBQ3JFLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsaUNBQWlDO0FBQ2pDLG1HQUFtRztBQUNuRyxtRUFBbUU7QUFDbkUsd0JBQXdCO0FBQ3hCLDRFQUE0RTtBQUM1RSw2RUFBNkU7QUFDN0UsNEVBQTRFO0FBQzVFLHdFQUF3RTtBQUN4RSxvQ0FBb0M7QUFDcEMsa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRiw4Q0FBOEM7QUFDOUMseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakIsd0JBQXdCO0FBRXhCLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLDRDQUE0QztBQUM1QyxnRkFBZ0Y7QUFDaEYseUJBQXlCO0FBQ3pCLG9HQUFvRztBQUNwRyxtQkFBbUI7QUFFbkIsMkJBQTJCO0FBQzNCLFFBQVE7QUFFUixzQkFBc0I7QUFDdEIsaUNBQWlDO0FBQ2pDLHdEQUF3RDtBQUN4RCwyQkFBMkI7QUFFM0IsZ0NBQWdDO0FBQ2hDLDBCQUEwQjtBQUMxQixzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBQzVCLHVDQUF1QztBQUN2Qyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsd0JBQXdCO0FBRXhCLFFBQVE7QUFFUix3QkFBd0I7QUFDeEIsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi9hZHVpb1Rvb2xzXCI7XG4vLyBpbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XG4vLyBpbXBvcnQgSnNiU2RrU2NyaXB0IGZyb20gXCIuL1BsYXRmb3JtSW50ZXJhY3Rpb24vSnNiU2RrU2NyaXB0XCI7XG4vLyBpbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vcWl1U2NyaXB0L0dhbWVNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgcWl1Q29sbGlzaW9uU2NyaXB0IGZyb20gXCIuL3FpdVNjcmlwdC9xaXVDb2xsaXNpb25TY3JpcHRcIjtcbi8vIGltcG9ydCBxaXVNb3ZlU2NyaXB0IGZyb20gXCIuL3FpdVNjcmlwdC9xaXVNb3ZlU2NyaXB0XCI7XG4vLyBpbXBvcnQgVGFyZ2V0cWl1U2NyaXB0IGZyb20gXCIuL1RhcmdldFNjcmlwdC9UYXJnZXRxaXVTY3JpcHRcIjtcbi8vIGltcG9ydCB0b3BCdWJibGVCZ1NjcmlwdCBmcm9tIFwiLi90b3BCdWJibGVCZ1NjcmlwdFwiO1xuXG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFkZU5vdGljZUJvYXJkU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxuLy8gICAgIC8vIHFpdVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbi8vICAgICB0aXRsZTogY2MuTGFiZWwgPSBudWxsXG5cbi8vICAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbi8vICAgICAvLyBnaXJsOiBjYy5Ob2RlID0gbnVsbFxuICAgIFxuLy8gICAgIC8vIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbi8vICAgICAvLyByZW1pbmRMYWJlbDpjYy5SaWNoVGV4dCA9IG51bGw7XG5cbi8vICAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxuLy8gICAgIC8vIHRhcmdldFFpdVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIGRpc21pc3NDYWxsQmFjazpGdW5jdGlvbiA9IG51bGw7XG4vLyAgICAgLy8gb25Mb2FkICgpIHt9XG4vLyAgICAgdGFyZ2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4vLyAgICAgb25EZXN0cm95KCkge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhgR3JhZGVOb3RpY2VCb2FyZFNjcmlwdCBPbkRlc3Ryb3lgKTsgXG4vLyAgICAgfVxuLy8gICAgIHN0YXJ0KCkge1xuLy8gICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcImd1aWRlTm90aWNlVGl0bGVcIilcbi8vICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5maW5kKFwiaGVhZE5vZGUvVUlfdG9wX2J1YmJsZV9iZ18wMVwiICwgR2FtZU1hbmFnZXIuSW5zdGFuY2UuZGlzcGxheU5vZGUpOyBcbiAgICAgICAgIFxuLy8gICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXROb2RlO1xuXG4vLyAgICAgICAgIHRoaXMuYmdOb2RlLnNjYWxlWSA9IDA7XG4vLyAgICAgICAgIGxldCBsZXZlbCA9IDQ7XG5cbi8vICAgICAgICAgbGV0IGxldmVsTm9kZTpjYy5Ob2RlID0gbnVsbDtcbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvVGFyZ2V0cWl1UHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAocmVzKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gbGV0IGJvYXJkTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgIGxldmVsTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgIGxldmVsTm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5udW1iZXJDb3VudCA9IGxldmVsOyAgXG4vLyAgICAgICAgICAgICAgICAgbGV2ZWxOb2RlLnNldFBvc2l0aW9uKDAsIC0yMCk7ICBcbi8vICAgICAgICAgICAgICAgICB0aGlzLmJnTm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICAgIC8vIGxldCBsZXZlbE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFFpdVByZWZhYik7XG4vLyAgICAgICAgIC8vIGxldmVsTm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5udW1iZXJDb3VudCA9IGxldmVsOyBcbiBcbi8vICAgICAgICAgLy8gbGV2ZWxOb2RlLnNldFBvc2l0aW9uKDAsIC0yMCk7IFxuXG4vLyAgICAgICAgIC8vIHRoaXMuYmdOb2RlLmFkZENoaWxkKGxldmVsTm9kZSk7XG5cbi8vICAgICAgICAgY2MudHdlZW4odGhpcy5iZ05vZGUpXG4vLyAgICAgICAgICAgICAudG8oMC40LCB7IHNjYWxlWTogMS4xIH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlWTogMC45IH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlWTogMS4wIH0pXG4vLyAgICAgICAgICAgICAuZGVsYXkoMC4xKVxuLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IHBvc3QgPSB0aGlzLnRhcmdldE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbi8vICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gbGV2ZWxOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc3QpO1xuLy8gICAgICAgICAgICAgICAgIGxldCB0cG9zID0gY2MudjModGFyZ2V0UG9zLngsIHRhcmdldFBvcy55IC0gMTgsIDApO1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IHFpdU5vZGUgPSBsZXZlbE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaXVOb2RlXCIpO1xuLy8gICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IDExNS4wL3FpdU5vZGUuaGVpZ2h0O1xuLy8gICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGxldmVsTm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obGV2ZWxOb2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRwb3MueCwgdHBvcy55ICsgMjAsIDApfSksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihxaXVOb2RlKS50bygwLjUsIHtzY2FsZTpzY2FsZX0pXG4vLyAgICAgICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBwb3NpdGlvbjogY2MudjModHBvcy54LCB0cG9zLnkgLSAxNSwgMCkgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMTUsIHsgcG9zaXRpb246IGNjLnYzKHRwb3MueCwgdHBvcy55ICsgMTIsIDApIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHRwb3MueCwgdHBvcy55IC0gMTAsIDApIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC50bygwLjA3LCB7IHBvc2l0aW9uOiBjYy52Myh0cG9zLngsIHRwb3MueSwgMCkgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudCh0b3BCdWJibGVCZ1NjcmlwdCkudGFyZ2V0Tm9kZSA9IGxldmVsTm9kZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQodG9wQnViYmxlQmdTY3JpcHQpLm1vdW50UWl1QW5pbWF0aW9uKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NOb2RlKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC5zdGFydCgpO1xuXG4vLyAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuZ2lybClcbi8vICAgICAgICAgLy8gICAgIC5kZWxheSgwLjQpXG4vLyAgICAgICAgIC8vICAgICAucGFyYWxsZWwoXG4vLyAgICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpPT4ge1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICBhZHVpb1Rvb2xzLnBsYXlTaW1wbGVBZHVpb0VuZ2luZShlbmdpbmVUeXBlLmdpcmxMYXVnaClcbi8vICAgICAgICAgLy8gICAgICAgICB9KSxcbi8vICAgICAgICAgLy8gICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMCwgdGhpcy5naXJsLmhlaWdodCAqIDkgKiAxLjAgLyAxMCwgMCkgfSlcbi8vICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAgXG4vLyAgICAgICAgIC8vICAgICAuc3RhcnQoKTtcbi8vICAgICB9XG5cbi8vICAgICBkaXNtaXNzTm9kZSgpIHtcbi8vICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5naXJsKVxuLy8gICAgICAgICAvLyAgICAgLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCkgfSlcbi8vICAgICAgICAgLy8gICAgIC5zdGFydCgpO1xuXG4vLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYmdOb2RlKVxuLy8gICAgICAgICAgICAgLmRlbGF5KDAuMylcbi8vICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVZOiAwIH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbi8vICAgICAgICAgICAgICAgICBpZih0aGlzLmRpc21pc3NDYWxsQmFjaykge1xuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDYWxsQmFjaygpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAuc3RhcnQoKTtcblxuLy8gICAgIH1cblxuLy8gICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4vLyB9XG4iXX0=