
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/TargetScript/TargetCompleteScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVGFyZ2V0U2NyaXB0L1RhcmdldENvbXBsZXRlU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUVuRCwrQ0FBK0M7QUFFL0MsV0FBVztBQUNYLG1FQUFtRTtBQUluRSxpQ0FBaUM7QUFFakMsc0JBQXNCO0FBRXRCLGdCQUFnQjtBQUVoQixRQUFRO0FBQ1Isd0JBQXdCO0FBRXhCLGtEQUFrRDtBQUNsRCxzR0FBc0c7QUFFdEcsNEVBQTRFO0FBRTVFLHFDQUFxQztBQUNyQyw4RUFBOEU7QUFDOUUsWUFBWTtBQUVaLDhEQUE4RDtBQUM5RCxnRUFBZ0U7QUFDaEUseURBQXlEO0FBQ3pELGdFQUFnRTtBQUVoRSxpRkFBaUY7QUFDakYseUJBQXlCO0FBQ3pCLHdFQUF3RTtBQUN4RSwyRkFBMkY7QUFDM0Ysa0RBQWtEO0FBQ2xELCtDQUErQztBQUMvQyxxREFBcUQ7QUFFckQsMENBQTBDO0FBQzFDLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQywwQ0FBMEM7QUFDMUMsNENBQTRDO0FBQzVDLDhGQUE4RjtBQUM5RixrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBQzNFLHdCQUF3QjtBQUN4QiwrQ0FBK0M7QUFDL0MsaUNBQWlDO0FBQ2pDLDhEQUE4RDtBQUM5RCxrREFBa0Q7QUFDbEQsc0VBQXNFO0FBQ3RFLDZCQUE2QjtBQUM3Qix3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsNENBQTRDO0FBQzVDLGlEQUFpRDtBQUNqRCxpRUFBaUU7QUFDakUsb0RBQW9EO0FBQ3BELDBEQUEwRDtBQUMxRCxpSEFBaUg7QUFDakgsK0VBQStFO0FBQy9FLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHlKQUF5SjtBQUN6Six3QkFBd0I7QUFDeEIsb0NBQW9DO0FBRXBDLHVGQUF1RjtBQUN2RiwwRUFBMEU7QUFDMUUsNERBQTREO0FBQzVELHlEQUF5RDtBQUN6RCw2REFBNkQ7QUFDN0QsZ0dBQWdHO0FBRWhHLCtDQUErQztBQUMvQywwQ0FBMEM7QUFDMUMsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUN4RCx1Q0FBdUM7QUFFdkMsK0NBQStDO0FBRS9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFFL0IsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixTQUFTO0FBQ1QsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi4vYWR1aW9Ub29sc1wiO1xuLy8gaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9xaXVTY3JpcHQvR2FtZU1hbmFnZXJcIjtcbi8vIGltcG9ydCB0b3BCdWJibGVCZ1NjcmlwdCBmcm9tIFwiLi4vdG9wQnViYmxlQmdTY3JpcHRcIjtcbi8vIGltcG9ydCBUYXJnZXRxaXVTY3JpcHQgZnJvbSBcIi4vVGFyZ2V0cWl1U2NyaXB0XCI7XG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXRDb21wbGV0ZVNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4vLyAgICAgY2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuLy8gICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4vLyAgICAgc3RhcnQoKSB7XG5cbi8vICAgICB9XG4vLyAgICAgLy8gdXBkYXRlIChkdCkge31cblxuLy8gICAgIGNvbXBsZXRlVGFyZ2V0KHN0YXJ0UG9pbnQsIHRhcnRnZXROdW1iZXIpIHtcbi8vICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5maW5kKFwiaGVhZE5vZGUvVUlfdG9wX2J1YmJsZV9iZ18wMVwiLCBHYW1lTWFuYWdlci5JbnN0YW5jZS5kaXNwbGF5Tm9kZSk7XG5cbi8vICAgICAgICAgbGV0IG5vZGUgPSB0YXJnZXROb2RlLmdldENvbXBvbmVudCh0b3BCdWJibGVCZ1NjcmlwdCkudGFyZ2V0Tm9kZTtcblxuLy8gICAgICAgICBpZiAodGFydGdldE51bWJlciA9PSAxMCkge1xuLy8gICAgICAgICAgICAgdGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQodG9wQnViYmxlQmdTY3JpcHQpLlN5bnRoZXRpY1VsdGltYXRlKCk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgcG9zdCA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbi8vICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3N0KTtcbi8vICAgICAgICAgbGV0IHRwb3MgPSBjYy52Myh0YXJnZXRQb3MueCwgdGFyZ2V0UG9zLnksIDApO1xuLy8gICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJ0UG9pbnQpO1xuXG4vLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL1RhcmdldHFpdVByZWZhYlwiLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHJlcykge1xuLy8gICAgICAgICAgICAgICAgIGxldCB0YXJnZXRRaXVOb2RlID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1Tm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5udW1iZXJDb3VudCA9IHRhcnRnZXROdW1iZXI7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1Tm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuLy8gICAgICAgICAgICAgICAgIHRhcmdldFFpdU5vZGUuc2V0U2NhbGUoMC4wKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGFyZ2V0UWl1Tm9kZSk7XG5cbi8vICAgICAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRRaXVOb2RlKVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAwLjc1IH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjIpXG4vLyAgICAgICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR1aW9Ub29scy5wbGF5U2ltcGxlQWR1aW9FbmdpbmUoZW5naW5lVHlwZS5maW5pc2hfdGFyZ2V0KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC43LCB7IHBvc2l0aW9uOiBjYy52MygwLCAwLCAwKSB9KVxuLy8gICAgICAgICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMiB9KVxuLy8gICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBzY2FsZTogMS4wIH0pLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNylcbi8vICAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjcsIHsgb3BhY2l0eTogMTAwIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQodG9wQnViYmxlQmdTY3JpcHQpLnRhcmdldE5vZGUgPSB0YXJnZXRRaXVOb2RlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlLmNyZWF0ZU9uZVFpdSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjModHBvcy54LCB0cG9zLnksIDApLCBzY2FsZTogMTUwLjAgLyB0YXJnZXRRaXVOb2RlLmdldENvbXBvbmVudChUYXJnZXRxaXVTY3JpcHQpLnFpdVNpemUgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3cG9zID0gdGFyZ2V0UWl1Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRhcmdldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod3Bvcylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFFpdU5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1Tm9kZS5zZXRQb3NpdGlvbihwb3MpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkKHRhcmdldFFpdU5vZGUpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRRaXVOb2RlLmdldENvbXBvbmVudChUYXJnZXRxaXVTY3JpcHQpLm1vdmllQ29tcGxldGVTY2FsZUFuaW0oKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0Tm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuMTUgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xOCwgeyBzY2FsZTogMS4wIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEJhY2spIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSkgIFxuLy8gICAgIH0gXG4vLyB9XG4iXX0=