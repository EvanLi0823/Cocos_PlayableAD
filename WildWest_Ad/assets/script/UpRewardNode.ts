// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import gameConfig from "./gameConfig";
import { ResMgr } from "./utils/ResMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UpRewardNode extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property(cc.Sprite)
    moneyIcon: cc.Sprite = null

    @property(cc.Label)
    moneyLabel: cc.Label = null

    @property(cc.Node)
    targetNode: cc.Node = null

    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Label)
    cashOutLabel: cc.Label = null;
    @property(cc.Label)

    btnLbl:cc.Label = null;

    @property(cc.Boolean)
    showFinishMoney: Boolean = false;


    start() {
        this.changeSprite().then(r => {
            // console.log("changeSpritethen")
            this.sprite.spriteFrame = r
        })
        // gameConfig.setMoneySp(this.moneyIcon)
        this.moneyLabel.string = gameConfig.getUnifyCurrency() + '0.00'

        if (this.title) {
            this.title.string = gameConfig.getWord("MyBalance")
        }
        if(this.btnLbl){
            const {string,fontSize} = gameConfig.getWord("withdraw");
            this.btnLbl.string = string;
            this.btnLbl.fontSize = fontSize;
        }
        if (this.cashOutLabel) {
            const {string, fontSize} = gameConfig.getWord('cashOutTop')
            this.cashOutLabel.string = string;
            this.cashOutLabel.fontSize = fontSize;
        }
        
        // demo的结算页面
        if (this.targetNode && this.showFinishMoney) {
            if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
                this.node.scale = 0.7
            }
            let dic: { [key: string]: number } = {};
            dic['Rp'] = 1000000
            dic['R$'] = 350
            dic['₩'] = 88000

            let addUnit = (dic[gameConfig.getUnifyCurrency()] || 66) / 10
            let oldReward = 0

            cc.tween(this.targetNode)
                .repeat(9,
                    cc.tween()
                        .call(() => {
                            oldReward = oldReward + addUnit;
                            this.targetNode.getComponent(cc.Label).string = gameConfig.getUnifyCurrency() + oldReward.toFixed(2);
                        })
                        .to(0.06, { scale: 1.12 })
                        .to(0.04, { scale: 1.0 })
                ).call(() => {
                    this.targetNode.getComponent(cc.Label).string = gameConfig.getUnifyCurrency() + (addUnit * 10).toFixed(2)
                })
                .start()


            if (this.showFinishMoney) {
                cc.tween(this.node).call(() => {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, (err, res) => {
                        if (res) {
                            let rewardAnim = cc.instantiate(res as cc.Prefab);
                            rewardAnim.scale = 2
                            this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    })
                }).delay(0.3).call(() => {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, (err, res) => {
                        if (res) {
                            let rewardAnim = cc.instantiate(res as cc.Prefab);
                            rewardAnim.setPosition(10, 10)
                            rewardAnim.scale = 2
                            this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    })
                }).delay(0.3).call(() => {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, (err, res) => {
                        if (res) {
                            let rewardAnim = cc.instantiate(res as cc.Prefab);
                            rewardAnim.setPosition(0, 10)

                            rewardAnim.scale = 2
                            this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    })
                })
                    .start()

                // setTimeout(() => {
                //     window.gameEnd && window.gameEnd();
                // }, 2000);
            }

            
        }
    }

    async changeSprite() {
        // console.log("changeSprite")
        let pay1sp = gameConfig.getUnifyGuidePay(0);
        let sp: any = await ResMgr.loadResourcesAsset("img/payimg/" + pay1sp, cc.SpriteFrame)
        return sp;
    }


    // update (dt) {}
}
