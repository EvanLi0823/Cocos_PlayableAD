
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BingoScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmluZ29TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUd6Qyw2Q0FBNkM7QUFFN0MsV0FBVztBQUNYLDBEQUEwRDtBQUUxRCwyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBRWhDLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFFaEMsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUVyQyw4QkFBOEI7QUFDOUIsc0JBQXNCO0FBRXRCLGlCQUFpQjtBQUNqQix5SEFBeUg7QUFFekgsOEpBQThKO0FBRzlKLDRDQUE0QztBQUM1Qyw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLFlBQVk7QUFFWiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLFlBQVk7QUFFWiw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLFlBQVk7QUFFWixrREFBa0Q7QUFFbEQscUVBQXFFO0FBQ3JFLDBEQUEwRDtBQUMxRCxnREFBZ0Q7QUFDaEQsWUFBWTtBQUdaLHVGQUF1RjtBQUN2Rix1QkFBdUI7QUFDdkIsb0VBQW9FO0FBQ3BFLGdCQUFnQjtBQUNoQixhQUFhO0FBRWIsdUZBQXVGO0FBQ3ZGLHVCQUF1QjtBQUN2QixvRUFBb0U7QUFDcEUsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFFZCw0Q0FBNEM7QUFDNUMsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsbURBQW1EO0FBQ25ELDBGQUEwRjtBQUMxRix1QkFBdUI7QUFDdkIseUVBQXlFO0FBQ3pFLGdCQUFnQjtBQUNoQixhQUFhO0FBRWIsdURBQXVEO0FBRXZELDJEQUEyRDtBQUUzRCxRQUFRO0FBRVIsd0JBQXdCO0FBRXhCLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYWR1aW9Ub29scyBmcm9tIFwiLi9hZHVpb1Rvb2xzXCI7XG4vLyBpbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XG5cbiBcbi8vIGNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZ29TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICBiaW5nb0VuOmNjLlNwcml0ZSA9IG51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuLy8gICAgIGJpbmdvQ246Y2MuU3ByaXRlID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4vLyAgICAgbGlhbmppU3ByaXRlOmNjLlNwcml0ZSA9IG51bGw7XG5cbi8vICAgICBsaWFuamlDb3VudDpudW1iZXIgPSAwO1xuLy8gICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4vLyAgICAgc3RhcnQgKCkge1xuLy8gICAgICAgICBsZXQgYmluZ29BcnJheSA9IFtcInR4dF9iaW5nb19cIiAgLCBcInR4dF9iaW5nb2Nvb2xfXCIgLCBcInR4dF9iaW5nb25pY2VfXCIsIFwidHh0X2JpbmdvYmFuZ19cIiAsIFwidHh0X3N1cHBlcmJpbmdvX1wiXTtcblxuLy8gICAgICAgICBsZXQgbGlhbmppQXJyYXQgPSBbXCJ0eHRfY29tYm9fdHdvXCIgLFwidHh0X2NvbWJvX3RocmVlXCIgLCBcInR4dF9jb21ib19mb3VyXCIgLFwidHh0X2NvbWJvX2ZpdmVcIiAsXCJ0eHRfY29tYm9fc2l4XCIgLCBcInR4dF9jb21ib19zZXZlblwiLFwidHh0X2NvbWJvX2VpZ2h0XCJdO1xuICAgICAgICBcblxuLy8gICAgICAgICBsZXQgYmluZ0NvdW50ID0gdGhpcy5saWFuamlDb3VudDtcbi8vICAgICAgICAgaWYoYmluZ0NvdW50ID4gNSkge1xuLy8gICAgICAgICAgICAgYmluZ0NvdW50LS07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBpZihiaW5nQ291bnQgPiA2KSB7XG4vLyAgICAgICAgICAgICBiaW5nQ291bnQtLTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGlmKGJpbmdDb3VudCA+IDYpIHtcbi8vICAgICAgICAgICAgIGJpbmdDb3VudCA9IDY7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgYmluZ28gPSBiaW5nb0FycmF5W2JpbmdDb3VudCAtIDJdOyBcbiAgICAgICAgXG4vLyAgICAgICAgIGxldCBsYW5ndWFnZSA9IGdhbWVDb25maWcuY29tbW9uUGFybS5sYW5ndWFnZSB8fCAnQ2hpbmVzZSdcbi8vICAgICAgICAgaWYgKGxhbmd1YWdlID09IFwiZW5cIiB8fCBsYW5ndWFnZSA9PSBcIkVuZ2xpc2hcIil7XG4vLyAgICAgICAgICAgICB0aGlzLmJpbmdvQ24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYGltZy9iaW5nby8ke2JpbmdvfWNuYCAsIGNjLlNwcml0ZUZyYW1lICwgKGVyciAsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYocmVzKXtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmJpbmdvQ24uc3ByaXRlRnJhbWUgPSByZXMgYXMgY2MuU3ByaXRlRnJhbWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYGltZy9iaW5nby8ke2JpbmdvfWVuYCAsIGNjLlNwcml0ZUZyYW1lICwgKGVyciAsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYocmVzKXtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmJpbmdvRW4uc3ByaXRlRnJhbWUgPSByZXMgYXMgY2MuU3ByaXRlRnJhbWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pIFxuXG4vLyAgICAgICAgIGxldCBsaWFuQ291bnQgPSB0aGlzLmxpYW5qaUNvdW50O1xuLy8gICAgICAgICBpZihsaWFuQ291bnQgPiA4KXtcbi8vICAgICAgICAgICAgIGxpYW5Db3VudCA9IDg7XG4vLyAgICAgICAgIH0gIFxuLy8gICAgICAgICBsZXQgbGluYWppID0gbGlhbmppQXJyYXRbbGlhbkNvdW50LSAyXTsgXG4vLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGBpbWcvbGlhbmppSW1nLyR7bGluYWppfWAgLCBjYy5TcHJpdGVGcmFtZSAsIChlcnIgLCByZXMpID0+IHtcbi8vICAgICAgICAgICAgIGlmKHJlcyl7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5saWFuamlTcHJpdGUuc3ByaXRlRnJhbWUgPSByZXMgYXMgY2MuU3ByaXRlRnJhbWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgIFxuLy8gICAgICAgICBhZHVpb1Rvb2xzLnBsYXlTaW1wbGVBZHVpb0VuZ2luZShiaW5nQ291bnQgLSAyKSBcbiAgICAgICAgXG4vLyAgICAgfVxuXG4vLyAgICAgLy8gdXBkYXRlIChkdCkge31cblxuLy8gICAgIGFuaU92ZXIoKXtcbi8vICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbi8vICAgICB9XG4vLyB9XG4iXX0=