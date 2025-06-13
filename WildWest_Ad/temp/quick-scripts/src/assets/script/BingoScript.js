"use strict";
cc._RF.push(module, '79d82012uFClZjxTc8BNoUJ', 'BingoScript');
// script/BingoScript.ts

// import aduioTools from "./aduioTools";
// import gameConfig from "./gameConfig";
// const {ccclass, property} = cc._decorator;
// @ccclass
// export default class BingoScript extends cc.Component {
//     @property(cc.Sprite)
//     bingoEn:cc.Sprite = null;
//     @property(cc.Sprite)
//     bingoCn:cc.Sprite = null;
//     @property(cc.Sprite)
//     lianjiSprite:cc.Sprite = null;
//     lianjiCount:number = 0;
//     // onLoad () {}
//     start () {
//         let bingoArray = ["txt_bingo_"  , "txt_bingocool_" , "txt_bingonice_", "txt_bingobang_" , "txt_supperbingo_"];
//         let lianjiArrat = ["txt_combo_two" ,"txt_combo_three" , "txt_combo_four" ,"txt_combo_five" ,"txt_combo_six" , "txt_combo_seven","txt_combo_eight"];
//         let bingCount = this.lianjiCount;
//         if(bingCount > 5) {
//             bingCount--;
//         }
//         if(bingCount > 6) {
//             bingCount--;
//         }
//         if(bingCount > 6) {
//             bingCount = 6;
//         }
//         let bingo = bingoArray[bingCount - 2]; 
//         let language = gameConfig.commonParm.language || 'Chinese'
//         if (language == "en" || language == "English"){
//             this.bingoCn.node.active = false;
//         }
//         cc.resources.load(`img/bingo/${bingo}cn` , cc.SpriteFrame , (err , res) => {
//             if(res){
//                 this.bingoCn.spriteFrame = res as cc.SpriteFrame;
//             }
//         })
//         cc.resources.load(`img/bingo/${bingo}en` , cc.SpriteFrame , (err , res) => {
//             if(res){
//                 this.bingoEn.spriteFrame = res as cc.SpriteFrame;
//             }
//         }) 
//         let lianCount = this.lianjiCount;
//         if(lianCount > 8){
//             lianCount = 8;
//         }  
//         let linaji = lianjiArrat[lianCount- 2]; 
//         cc.resources.load(`img/lianjiImg/${linaji}` , cc.SpriteFrame , (err , res) => {
//             if(res){
//                 this.lianjiSprite.spriteFrame = res as cc.SpriteFrame;
//             }
//         })
//         this.node.getComponent(cc.Animation).play();
//         aduioTools.playSimpleAduioEngine(bingCount - 2) 
//     }
//     // update (dt) {}
//     aniOver(){
//         this.node.destroy();
//     }
// }

cc._RF.pop();