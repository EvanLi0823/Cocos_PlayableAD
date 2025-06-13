// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import gameConfig from "./gameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RightNode extends cc.Component {

    @property(cc.Label)
    download:cc.Label = null;

    start () {
        this.download.string = gameConfig.getWord("download");
    }
}
