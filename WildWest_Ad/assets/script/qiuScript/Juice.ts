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