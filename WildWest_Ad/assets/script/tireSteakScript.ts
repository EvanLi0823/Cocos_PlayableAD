import levelBarScript from "./levelBarScript";
import gameConfig from "./gameConfig";
import TargetqiuScript from "./TargetScript/TargetqiuScript";

const { ccclass, property } = cc._decorator;

@ccclass
export default class tireSteakScript extends cc.Component {

    @property(cc.Node)
    tireSteakNode: cc.Node = null;

    @property(cc.Node)
    particleNode: cc.Node = null;

    @property(cc.Node)
    spriteNode: cc.Node = null;

    targetNode: cc.Node = null;

    leftNode:cc.Node = null

    score:number = 0;

    redbag:cc.Node = null


    onDestroy() {
        
    }
    onLoad() {
        this.targetNode = cc.find("Canvas/gameNode/gameLayer/UpRewardNode/bg3/moneyID/label");
        cc.resources.load("prefab/redbagPrefab", cc.Prefab, (err, res) => {
            if (res){
                this.redbag = cc.instantiate(res as unknown as cc.Prefab);
                this.node.addChild(this.redbag);
                this.redbag.opacity = 0
            }
        })
    }

    start() {

    }

    action() {
        let targetNode
        targetNode = this.targetNode
        let tartgetPos = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
        let pos1 = this.node.convertToNodeSpaceAR(tartgetPos);
        let pos = cc.v2(pos1.x + targetNode.width / 2, pos1.y);
        let MotionStreakComponent = this.tireSteakNode.getComponent(cc.MotionStreak);
        this.spriteNode.opacity = 255;
        MotionStreakComponent.stroke = 34;
        cc.tween(this.node)
            .parallel(
                cc.tween()
                    .call(() => {
                        this.redbag.opacity = 255
                        
                    })
                    .delay(0.65)
                    .call(() => {
                        // let particleNode = cc.instantiate(this.particleNode);
                        // particleNode.getComponent(cc.ParticleSystem).playOnLoad = true;
                        // particleNode.getComponent(cc.ParticleSystem).autoRemoveOnFinish = true;
                        // this.node.addChild(particleNode);
                    }),
                cc.tween().bezierBy(1.0, cc.v2(pos.x / 4, 500), cc.v2(pos.x * 3 / 4, 500), pos)
                    .call(() => {
                        cc.tween(this.spriteNode).to(0.5, { opacity: 0 }).start();
                            this.redbag.opacity = 0

                        // let particleNode = cc.instantiate(this.particleNode);
                        // particleNode.getComponent(cc.ParticleSystem).playOnLoad = true;
                        // particleNode.getComponent(cc.ParticleSystem).autoRemoveOnFinish = true;
                        // this.node.addChild(particleNode);

                            let dic: { [key: string]: number } = {};
                            dic['Rp'] = 1000000
                            dic['R$'] = 350
                            dic['₩'] = 88000

                            let addUnit = (dic[gameConfig.getUnifyCurrency()] || 66) / 10
                            let oldReward = 0


                            cc.tween(targetNode)
                                .repeat(9,
                                    cc.tween()
                                        .call(() => {
                                            oldReward = oldReward + addUnit;
                                            targetNode.getComponent(cc.Label).string = gameConfig.getUnifyCurrency() + oldReward.toFixed(2);
                                        })
                                        .to(0.06, {scale: 1.12})
                                        .to(0.04, {scale: 1.0})
                                ).call(() => {
                                targetNode.getComponent(cc.Label).string = gameConfig.getUnifyCurrency() + (addUnit*10).toFixed(2)})
                                .start()
                    })
                    .delay(1.0)
                    .call(() => {
                        cc.resources.load(`prefab/BigWinNode`, cc.Prefab, (err, res) => {
                            let prefab = cc.instantiate(res as cc.Prefab);
                            cc.find("Canvas/gameNode").addChild(prefab)
                        })
                        this.node.destroy();

                        // window.gameEnd&&window.gameEnd();
                    })
            )
            .start();
    }
}
