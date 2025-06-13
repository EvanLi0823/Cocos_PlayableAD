import aduioTools, {engineType} from "../aduioTools";
import gameConfig from "../gameConfig";
import GameManager from "../qiuScript/GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class rewardAnimScript extends cc.Component {

    @property(cc.Node) 
    content:cc.Node = null;

    @property([cc.Node])
    rpArray: Array<cc.Node> = [];

    @property(cc.Node)
    targetNode:cc.Node= null

    @property(cc.Animation)
    Ani:cc.Animation = null
    targetPos: cc.Vec2 = null;

    onLoad() {

        for (let i = 0;i<this.content.childrenCount;i++){
            let sp = this.content.children[i].getComponent(cc.Sprite)
            gameConfig.setMoneySp(sp,1)
        }


    }

    start() {
        // this.movieToTarget();
    }

    
}
