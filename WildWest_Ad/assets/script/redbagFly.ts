// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import gameConfig from "./gameConfig";
import {ResMgr} from "./utils/ResMgr";

const {ccclass, property} = cc._decorator;


@ccclass
export default class redbagFly extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    start() {
        // this.changeSprite().then(r => {
        //     // console.log("changeSpritethen")
        //     this.sprite.spriteFrame = r
        // })
    }

    // async changeSprite() {

    //     let pay1sp = gameConfig.getRedbag(1);
    //     let sp: any = ResMgr.loadResourcesAsset("img/rewardImg/" + pay1sp, cc.SpriteFrame)
    //     return sp;
    // }

    // update (dt) {}
}
