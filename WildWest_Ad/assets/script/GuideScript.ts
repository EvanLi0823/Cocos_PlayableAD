import gameConfig from "./gameConfig";
import GameManager from "./qiuScript/GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GuideScript extends cc.Component {

    @property(cc.Node)
    handNode: cc.Node = null;

    @property(cc.RichText)
    remindLabel: cc.RichText = null;

    callback:Function = null;
    onLoad () {
        this.handNode.setPosition(GameManager.Instance.btnNode.getPosition())

    } 

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    start() {
        const {string, fontSize} = gameConfig.getWord('guide')
        this.remindLabel.string = string;
        this.remindLabel.fontSize = fontSize;
        this.scheduleOnce(() => {
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        }, 0.5);

        cc.tween(this.handNode)
            .repeatForever(
                cc.tween()
                    .to(0.35, { scale:0.8 })
                    .delay(0.07)
                    .to(0.35, { scale:1.5 })
                    .delay(0.07)
                    .to(0.5, { scale:1 })
            )
            .start()
    }

    onTouchStart(e) {
        if(this.callback) {
            this.callback();
        } 
        this.node.destroy(); 
    }

    onTouchMove(e) {

    }

    // update (dt) {}
}
