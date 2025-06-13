
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/Juice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b84d3Ao+g9HMoEcFPLEq/0V', 'Juice');
// script/qiuScript/Juice.ts

// import { ResMgr } from "../utils/ResMgr";
// const {ccclass, property} = cc._decorator;
// function RandomInteger(e:number, t:number) {
//     return Math.floor(Math.random() * (t - e) + e)
// }
// //负责水果合成时的爆汁动画效果
// @ccclass
// export default class Juice extends cc.Component {
//     static prefabPath = "prefab/Juice";
//     @property(cc.SpriteFrame)
//     particle:cc.SpriteFrame=null;
//     @property(cc.SpriteFrame)
//     circle:cc.SpriteFrame=null;
//     @property(cc.SpriteFrame)
//     slash:cc.SpriteFrame=null;
//     static async showJuice(data:any, worldPos: cc.Vec2|cc.Vec3, width: number,bomb?:boolean) {
//         try {
//             let prefab = await ResMgr.loadResourcesAsset(Juice.prefabPath, cc.Prefab);
//             let node:any = cc.instantiate(prefab);    
//             let parent = cc.find("Canvas");
//             if(!parent) return;
//             parent.addChild(node);
//             node.getComponent(Juice).showAnim(data, worldPos, width, bomb);
//         } catch (error) {
//             cc.warn(error)
//         }
//     }
//     // 合并时的动画效果
//     showAnim(data:any, worldPos: cc.Vec2|cc.Vec3, width: number, bomb?:boolean) {
//         this.particle = data.particle;
//         this.circle = data.circle;
//         this.slash = data.slash;
//         // 果粒
//         for (let i = 0; i < 20; ++i) {
//             const node = new cc.Node('Sprite');
//             const sp = node.addComponent(cc.Sprite);
//             sp.spriteFrame = this.particle;
//             node.parent = this.node;
//             const a = 359 * Math.random(),
//             i = 60 * Math.random() + width / 2,
//             l = cc.v3(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
//             node.scale = .5 * Math.random() + width / 100;
//             const p = .5 * Math.random();
//             let nodePos = node.parent.convertToNodeSpaceAR(worldPos);
//             node.setPosition(nodePos);
//             cc.tween(node)
//             .parallel(
//                 cc.tween(node).by(p,{position:l}),
//                 cc.scaleTo(p + .5, .3),
//                 cc.rotateBy(p + .5, RandomInteger(-360, 360))
//             )
//             .to(0.1,{opacity:0})
//             .call(()=>{
//                 node.active = false;
//             })
//             .start()
//         }
//         if(bomb) return;//爆炸 不执行下面的效果
//         // 水珠
//         for (let f = 0; f < 20; f++) {
//             const node = new cc.Node('Sprite');
//             const sp = node.addComponent(cc.Sprite);
//             sp.spriteFrame = this.circle;
//             node.parent = this.node;
//             let a = 359 * Math.random(), 
//             i = 60 * Math.random() + width / 2,
//             l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
//             node.scale = .5 * Math.random() + width / 100;
//             let p = .5 * Math.random();
//             let nodePos = node.parent.convertToNodeSpaceAR(worldPos);
//             node.setPosition(nodePos);
//             cc.tween(node)
//             .parallel(
//                 cc.moveBy(p, l), 
//                 cc.scaleTo(p + .5, .3)
//             )
//             .then(cc.fadeOut(.1))
//             .call(()=>{node.active = false})
//             .start()
//         }
//         // 果汁
//         const node = new cc.Node('Sprite');
//         const sp = node.addComponent(cc.Sprite);
//         sp.spriteFrame = this.slash;
//         node.parent = this.node;
//         let nodePos = node.parent.convertToNodeSpaceAR(worldPos);
//         node.setPosition(nodePos);
//         node.scale = 0;
//         node.angle = RandomInteger(0, 360);
//         cc.tween(node)
//         .parallel(
//             cc.scaleTo(.2, width / 150), 
//             cc.fadeOut(1)
//         )
//         .call(()=>{node.active = false})
//         .start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L0p1aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0QztBQUU1Qyw2Q0FBNkM7QUFDN0MsK0NBQStDO0FBQy9DLHFEQUFxRDtBQUNyRCxJQUFJO0FBR0osbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxvREFBb0Q7QUFFcEQsMENBQTBDO0FBRTFDLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFFcEMsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUVsQyxnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBRWpDLGlHQUFpRztBQUNqRyxnQkFBZ0I7QUFDaEIseUZBQXlGO0FBQ3pGLHlEQUF5RDtBQUN6RCw4Q0FBOEM7QUFDOUMsa0NBQWtDO0FBQ2xDLHFDQUFxQztBQUNyQyw4RUFBOEU7QUFDOUUsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osUUFBUTtBQUVSLGtCQUFrQjtBQUNsQixvRkFBb0Y7QUFDcEYseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsZ0JBQWdCO0FBQ2hCLHlDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQsdURBQXVEO0FBRXZELDhDQUE4QztBQUM5Qyx1Q0FBdUM7QUFFdkMsNkNBQTZDO0FBQzdDLGtEQUFrRDtBQUNsRCwyRkFBMkY7QUFFM0YsNkRBQTZEO0FBQzdELDRDQUE0QztBQUU1Qyx3RUFBd0U7QUFDeEUseUNBQXlDO0FBRXpDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIscURBQXFEO0FBQ3JELDBDQUEwQztBQUMxQyxnRUFBZ0U7QUFDaEUsZ0JBQWdCO0FBQ2hCLG1DQUFtQztBQUNuQywwQkFBMEI7QUFDMUIsdUNBQXVDO0FBQ3ZDLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsWUFBWTtBQUNaLHdDQUF3QztBQUN4QyxnQkFBZ0I7QUFDaEIseUNBQXlDO0FBQ3pDLGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFFdkQsNENBQTRDO0FBQzVDLHVDQUF1QztBQUV2Qyw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBQ2xELDJGQUEyRjtBQUUzRiw2REFBNkQ7QUFDN0QsMENBQTBDO0FBRTFDLHdFQUF3RTtBQUN4RSx5Q0FBeUM7QUFFekMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixvQ0FBb0M7QUFDcEMseUNBQXlDO0FBQ3pDLGdCQUFnQjtBQUNoQixvQ0FBb0M7QUFDcEMsK0NBQStDO0FBQy9DLHVCQUF1QjtBQUN2QixZQUFZO0FBRVosZ0JBQWdCO0FBQ2hCLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFFbkQsdUNBQXVDO0FBQ3ZDLG1DQUFtQztBQUVuQyxvRUFBb0U7QUFDcEUscUNBQXFDO0FBQ3JDLDBCQUEwQjtBQUMxQiw4Q0FBOEM7QUFFOUMseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQiw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLFlBQVk7QUFDWiwyQ0FBMkM7QUFDM0Msb0JBQW9CO0FBQ3BCLFFBQVE7QUFFUixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgUmVzTWdyIH0gZnJvbSBcIi4uL3V0aWxzL1Jlc01nclwiO1xuXG4vLyBjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbi8vIGZ1bmN0aW9uIFJhbmRvbUludGVnZXIoZTpudW1iZXIsIHQ6bnVtYmVyKSB7XG4vLyAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0IC0gZSkgKyBlKVxuLy8gfVxuXG5cbi8vIC8v6LSf6LSj5rC05p6c5ZCI5oiQ5pe255qE54iG5rGB5Yqo55S75pWI5p6cXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVpY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgc3RhdGljIHByZWZhYlBhdGggPSBcInByZWZhYi9KdWljZVwiO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuLy8gICAgIHBhcnRpY2xlOmNjLlNwcml0ZUZyYW1lPW51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4vLyAgICAgY2lyY2xlOmNjLlNwcml0ZUZyYW1lPW51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4vLyAgICAgc2xhc2g6Y2MuU3ByaXRlRnJhbWU9bnVsbDtcblxuLy8gICAgIHN0YXRpYyBhc3luYyBzaG93SnVpY2UoZGF0YTphbnksIHdvcmxkUG9zOiBjYy5WZWMyfGNjLlZlYzMsIHdpZHRoOiBudW1iZXIsYm9tYj86Ym9vbGVhbikge1xuLy8gICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgbGV0IHByZWZhYiA9IGF3YWl0IFJlc01nci5sb2FkUmVzb3VyY2VzQXNzZXQoSnVpY2UucHJlZmFiUGF0aCwgY2MuUHJlZmFiKTtcbi8vICAgICAgICAgICAgIGxldCBub2RlOmFueSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7ICAgIFxuLy8gICAgICAgICAgICAgbGV0IHBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4vLyAgICAgICAgICAgICBpZighcGFyZW50KSByZXR1cm47XG4vLyAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4vLyAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChKdWljZSkuc2hvd0FuaW0oZGF0YSwgd29ybGRQb3MsIHdpZHRoLCBib21iKTtcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNjLndhcm4oZXJyb3IpXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyDlkIjlubbml7bnmoTliqjnlLvmlYjmnpxcbi8vICAgICBzaG93QW5pbShkYXRhOmFueSwgd29ybGRQb3M6IGNjLlZlYzJ8Y2MuVmVjMywgd2lkdGg6IG51bWJlciwgYm9tYj86Ym9vbGVhbikge1xuLy8gICAgICAgICB0aGlzLnBhcnRpY2xlID0gZGF0YS5wYXJ0aWNsZTtcbi8vICAgICAgICAgdGhpcy5jaXJjbGUgPSBkYXRhLmNpcmNsZTtcbi8vICAgICAgICAgdGhpcy5zbGFzaCA9IGRhdGEuc2xhc2g7XG4vLyAgICAgICAgIC8vIOaenOeyklxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyArK2kpIHtcbi8vICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4vLyAgICAgICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbi8vICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5wYXJ0aWNsZTtcbi8vICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4vLyAgICAgICAgICAgICBjb25zdCBhID0gMzU5ICogTWF0aC5yYW5kb20oKSxcbi8vICAgICAgICAgICAgIGkgPSA2MCAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDIsXG4vLyAgICAgICAgICAgICBsID0gY2MudjMoTWF0aC5zaW4oYSAqIE1hdGguUEkgLyAxODApICogaSwgTWF0aC5jb3MoYSAqIE1hdGguUEkgLyAxODApICogaSk7XG5cbi8vICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAuNSAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDEwMDtcbi8vICAgICAgICAgICAgIGNvbnN0IHAgPSAuNSAqIE1hdGgucmFuZG9tKCk7XG5cbi8vICAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuLy8gICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihub2RlUG9zKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcbi8vICAgICAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKS5ieShwLHtwb3NpdGlvbjpsfSksXG4vLyAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhwICsgLjUsIC4zKSxcbi8vICAgICAgICAgICAgICAgICBjYy5yb3RhdGVCeShwICsgLjUsIFJhbmRvbUludGVnZXIoLTM2MCwgMzYwKSlcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgIC50bygwLjEse29wYWNpdHk6MH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuLy8gICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLnN0YXJ0KClcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihib21iKSByZXR1cm47Ly/niIbngrgg5LiN5omn6KGM5LiL6Z2i55qE5pWI5p6cXG4vLyAgICAgICAgIC8vIOawtOePoFxuLy8gICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IDIwOyBmKyspIHtcbi8vICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4vLyAgICAgICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbi8vICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5jaXJjbGU7XG4vLyAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuLy8gICAgICAgICAgICAgbGV0IGEgPSAzNTkgKiBNYXRoLnJhbmRvbSgpLCBcbi8vICAgICAgICAgICAgIGkgPSA2MCAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDIsXG4vLyAgICAgICAgICAgICBsID0gY2MudjIoTWF0aC5zaW4oYSAqIE1hdGguUEkgLyAxODApICogaSwgTWF0aC5jb3MoYSAqIE1hdGguUEkgLyAxODApICogaSk7XG5cbi8vICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAuNSAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDEwMDtcbi8vICAgICAgICAgICAgIGxldCBwID0gLjUgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbi8vICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZVBvcyk7XG5cbi8vICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4vLyAgICAgICAgICAgICAucGFyYWxsZWwoXG4vLyAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KHAsIGwpLCBcbi8vICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKHAgKyAuNSwgLjMpXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICAudGhlbihjYy5mYWRlT3V0KC4xKSlcbi8vICAgICAgICAgICAgIC5jYWxsKCgpPT57bm9kZS5hY3RpdmUgPSBmYWxzZX0pXG4vLyAgICAgICAgICAgICAuc3RhcnQoKVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLy8g5p6c5rGBXG4vLyAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4vLyAgICAgICAgIGNvbnN0IHNwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcblxuLy8gICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMuc2xhc2g7XG4vLyAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBcbi8vICAgICAgICAgbGV0IG5vZGVQb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4vLyAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZVBvcyk7XG4vLyAgICAgICAgIG5vZGUuc2NhbGUgPSAwO1xuLy8gICAgICAgICBub2RlLmFuZ2xlID0gUmFuZG9tSW50ZWdlcigwLCAzNjApO1xuXG4vLyAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4vLyAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIHdpZHRoIC8gMTUwKSwgXG4vLyAgICAgICAgICAgICBjYy5mYWRlT3V0KDEpXG4vLyAgICAgICAgIClcbi8vICAgICAgICAgLmNhbGwoKCk9Pntub2RlLmFjdGl2ZSA9IGZhbHNlfSlcbi8vICAgICAgICAgLnN0YXJ0KCk7XG4vLyAgICAgfVxuXG4vLyB9Il19