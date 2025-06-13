
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/topBubbleBgScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9wQnViYmxlQmdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXlEO0FBQ3pELCtEQUErRDtBQUMvRCxxREFBcUQ7QUFDckQsZ0VBQWdFO0FBRWhFLCtDQUErQztBQUUvQyxXQUFXO0FBQ1gsZ0VBQWdFO0FBRWhFLDBCQUEwQjtBQUMxQix1Q0FBdUM7QUFFdkMsMkNBQTJDO0FBQzNDLDRDQUE0QztBQUM1Qyx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSLHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLHNCQUFzQjtBQUV0QixnQkFBZ0I7QUFDaEIsNEVBQTRFO0FBQzVFLG9EQUFvRDtBQUNwRCxRQUFRO0FBRVIsNEJBQTRCO0FBQzVCLDRFQUE0RTtBQUM1RSx5RUFBeUU7QUFDekUsNkJBQTZCO0FBQzdCLDREQUE0RDtBQUM1RCxtQkFBbUI7QUFDbkIsUUFBUTtBQUVSLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIseUVBQXlFO0FBQ3pFLDhEQUE4RDtBQUM5RCxnREFBZ0Q7QUFDaEQsOENBQThDO0FBRTlDLG1GQUFtRjtBQUNuRix5QkFBeUI7QUFFekIsa0VBQWtFO0FBQ2xFLHVDQUF1QztBQUN2QyxpRkFBaUY7QUFDakYsdUVBQXVFO0FBQ3ZFLCtDQUErQztBQUMvQyxvQ0FBb0M7QUFDcEMscUJBQXFCO0FBQ3JCLCtDQUErQztBQUMvQyx3RUFBd0U7QUFDeEUsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixRQUFRO0FBRVIsOEJBQThCO0FBQzlCLGlGQUFpRjtBQUNqRix5QkFBeUI7QUFDekIsb0VBQW9FO0FBQ3BFLGlGQUFpRjtBQUNqRiwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLGdEQUFnRDtBQUNoRCwrQ0FBK0M7QUFDL0MsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi9hZHVpb1Rvb2xzXCI7XG4vLyBpbXBvcnQgQnViYmxlQW5pbWF0aW9uU2NyaXB0IGZyb20gXCIuL0J1YmJsZUFuaW1hdGlvblNjcmlwdFwiO1xuLy8gaW1wb3J0IGxvY2FsRGF0YU1hbmFnZXIgZnJvbSBcIi4vbG9jYWxEYXRhTWFuYWdlclwiO1xuLy8gaW1wb3J0IFRhcmdldHFpdVNjcmlwdCBmcm9tIFwiLi9UYXJnZXRTY3JpcHQvVGFyZ2V0cWl1U2NyaXB0XCI7XG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyB0b3BCdWJibGVCZ1NjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4vLyAgICAgY29tcG9zaXRlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuLy8gICAgIHByaXZhdGUgX3RhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuLy8gICAgIHNldCB0YXJnZXROb2RlKHRhcmdldE5vZGU6IGNjLk5vZGUpIHtcbi8vICAgICAgICAgdGhpcy5fdGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGU7XG4vLyAgICAgfVxuLy8gICAgIGdldCB0YXJnZXROb2RlKCkge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0Tm9kZTtcbi8vICAgICB9XG4vLyAgICAgLy8gb25Mb2FkICgpIHt9XG5cbi8vICAgICBzdGFydCgpIHtcbi8vICAgICAgICAgbGV0IHNDb3VudCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U3ludGhldGljQ291bnQoKTtcbi8vICAgICAgICAgdGhpcy5jb21wb3NpdGVMYWJlbC5zdHJpbmcgPSBgeCR7c0NvdW50fWBcbi8vICAgICB9XG5cbi8vICAgICBTeW50aGV0aWNVbHRpbWF0ZSgpIHtcbi8vICAgICAgICAgbGV0IHNDb3VudCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U3ludGhldGljQ291bnQoKTtcbi8vICAgICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRTeW50aGV0aWNDb3VudChzQ291bnQgKyAxKTtcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLmNvbXBvc2l0ZUxhYmVsLnN0cmluZyA9IGB4JHtzQ291bnQgKyAxfWBcbi8vICAgICAgICAgfSwgMy40KTtcbi8vICAgICB9XG5cbi8vICAgICAvLyB1cGRhdGUgKGR0KSB7fVxuLy8gICAgIG1vdW50UWl1QW5pbWF0aW9uKCkge1xuLy8gICAgICAgICBsZXQgd3BvcyA9IHRoaXMudGFyZ2V0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICBsZXQgdGhpc1BvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3cG9zKTtcbi8vICAgICAgICAgdGhpcy50YXJnZXROb2RlLnNldFBvc2l0aW9uKHRoaXNQb3MpO1xuLy8gICAgICAgICB0aGlzLnRhcmdldE5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4vLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGBwcmVmYWIvdHhCdWJibGVBbmltYXRpb25gLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHJlcykge1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IGFuaU5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgY2MuUHJlZmFiKTtcbi8vICAgICAgICAgICAgICAgICBhbmlOb2RlLnNjYWxlID0gMC43O1xuLy8gICAgICAgICAgICAgICAgIGFuaU5vZGUuZ2V0Q29tcG9uZW50KEJ1YmJsZUFuaW1hdGlvblNjcmlwdCkuY2FsbEJhY2sgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCBkZXBzID0gY2MubG9hZGVyLmdldERlcGVuZHNSZWN1cnNpdmVseShyZXMpO1xuLy8gICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZShkZXBzKTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzLmRlY1JlZigpO1xuLy8gICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGFuaU5vZGUpO1xuLy8gICAgICAgICAgICAgICAgIGFkdWlvVG9vbHMucGxheVNpbXBsZUFkdWlvRW5naW5lKGVuZ2luZVR5cGUuZW5kVHVybik7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyAgICAgZGlyZWN0TW91bnRxaXUobGV2ZWwpIHtcbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvVGFyZ2V0cWl1UHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAocmVzKSB7XG4vLyAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFFpdSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgIHRhcmdldFFpdS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5sb2FkRGF0YUZpeFNpemUobGV2ZWwpXG4vLyAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gMTE1LjAgLyAxNTA7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1LnNjYWxlID0gc2NhbGU7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1LnBhcmVudCA9IHRoaXMubm9kZTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXRRaXU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfVxuIl19