import gameConfig, {Country, JuiceItem, JuiceItemType, LanguageType} from "./gameConfig";
const {ccclass, property} = cc._decorator;

@ccclass
export default class BigWinNode extends cc.Component {
    @property(cc.Label)
    download:cc.Label = null;

    @property(cc.Label)
    cashLabel:cc.Label = null;

    @property(cc.Node)
    cashImage:cc.Node = null;
    onLoad() {
        const {string, fontSize} = gameConfig.getWord('cashOut')
        this.download.string = string;
        this.download.fontSize = fontSize;
        let addUnit = gameConfig.getUnityMoneyNumber(300.00);
        this.cashLabel.string =  gameConfig.getUnifyCurrency() + addUnit.toFixed(2);
        setTimeout(() => {
            console.log("this.cashLabel.actualWidth",this.cashLabel.node.width);
            this.cashImage.setPosition(cc.v2(90-this.cashLabel.node.width/2-100, this.cashImage.getPosition().y));
        }, 0);
    }

    // start()
    // {
    //     let addUnit = gameConfig.getUnityMoneyNumber(15.00);
    //     this.runNumberTween(0,addUnit,1.5)
    // }

    public runNumberTween(from: number, to: number, duration: number) {
        let obj = { value: from };
        cc.tween(obj)
            .to(duration, { value: to }, {
                onUpdate: (target: any) => {
                    // 精确到两位小数
                    this.cashLabel.string =  gameConfig.getUnifyCurrency()+target.value.toFixed(2);
                }
            })
            .start();
    }
}

// update (dt) {}
