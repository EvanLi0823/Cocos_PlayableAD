import aduioTools, { engineType } from "../aduioTools";
import gameConfig from "../gameConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class rewardTipScript extends cc.Component {

    @property(cc.Label)
    titleLable: cc.Label = null;

    @property(cc.Label)
    rewardLabel: cc.Label = null;

    @property(cc.Sprite)
    rewardTipImg: cc.Sprite = null;

    _rewardValue: number = 0;
    set rewardValue(rewardValue) {
        this._rewardValue = rewardValue;
        let result:any = rewardValue;
		result = gameConfig.getUnifyMoney(rewardValue, 1);
        this.rewardLabel.string = gameConfig.getWord("rewardTip",result).string;
    }

    get rewardValue() {
        return this._rewardValue;
    }

    reciveCallBack:Function = null;

    showOverCallBack:Function = null;

    onLoad () {
        this.node.opacity = 0;
        this.titleLable.string = gameConfig.getWord("gkTips").title
        gameConfig.setMoneySp(this.rewardTipImg)
    }

    start() { 
        aduioTools.playSimpleAduioEngine(engineType.pass);
        cc.tween(this.node)
        .to(0.2 , {opacity:255})
        .delay(1)
        .call(()=> {
            this.reciveCallBack(this.rewardValue);
        })
        .delay(0.9)
        .call(()=>{
            this.node.removeComponent(cc.BlockInputEvents);
        })
        .to(0.2 , {opacity:0})
        .call(()=> {
            if(this.showOverCallBack) {
                this.showOverCallBack();
            }
            this.node.destroy();
            
        })
        .start(); 
    }

    // update (dt) {}
}
