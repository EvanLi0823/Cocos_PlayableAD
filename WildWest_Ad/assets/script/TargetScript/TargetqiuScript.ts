import gameConfig from "../gameConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TargetqiuScript extends cc.Component {

    @property(cc.Sprite)
    qiuSprite: cc.Sprite = null;

    @property(cc.Sprite)
    txtSprite: cc.Sprite = null;

    isFinsh:boolean = false;

    qiuSize = 150;
    txtSize = 40;

    private _numberCount: number = 0
    set numberCount(numberCount) {
        this._numberCount = numberCount;
       
        this.qiuSize = 150 * (1 + 0.1 * (numberCount - 4));
        this.txtSize = 40 * (1 + 0.1 * (numberCount - 4));

        this.loadQiuSpirte().then(() => {
            this.qiuSprite.node.width = this.qiuSize;
            this.qiuSprite.node.height = this.qiuSize;
        });

        this.loadTxtSpirte().then(() => {
            let scale = this.txtSize * 1.0 / this.txtSprite.spriteFrame.getOriginalSize().height;
            this.txtSprite.node.height = this.txtSize;
            this.txtSprite.node.width = this.txtSprite.spriteFrame.getOriginalSize().width * scale;
        }) 

       
        
    }

    get numberCount() {
        return this._numberCount;
    }

    async loadQiuSpirte() {

        return new Promise((resolve) => {
            cc.resources.load(`img/qiu/ball_n${Math.pow(2, this._numberCount+1)}a`, cc.SpriteFrame, (err, res) => {
                if (res) {
                    this.qiuSprite.spriteFrame = res as cc.SpriteFrame; 
                    resolve(1); 
                }
            });
        })
    }

    async loadTxtSpirte() {
        return new Promise((resolve) => {
            cc.resources.load(`img/txt/txt_${Math.pow(2, this._numberCount+1)}`, cc.SpriteFrame, (err, res) => {
                if (res) {
                    this.txtSprite.spriteFrame = res as cc.SpriteFrame;
                    resolve(1); 
                }
            });
        })
    }

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    movieCompleteScaleAnim() {
        let scale = 115.0 / 150; 

        this.node.scale = 1;
        let qiuNode = this.qiuSprite.node;
        let txtNode = this.txtSprite.node;

        qiuNode.width = 150;
        qiuNode.height = 150;

        let txtscale = 40.0 / this.txtSprite.spriteFrame.getOriginalSize().height;
        txtNode.height = 40;
        txtNode.width = this.txtSprite.spriteFrame.getOriginalSize().width * txtscale;

        cc.tween(qiuNode)
            .to(0.25, { scale: 0.8 })
            .delay(0.1)
            .to(0.2, { scale: 0.3 })
            .to(0.2, { scale: 1.1 })
            .to(0.15, { scale: scale })
            .delay(0.1)
            .call(() => { 
                if(this._numberCount < 10){
                    this.loadDataFixSize(++this._numberCount);
                } 
            })
            .start()

        cc.tween(txtNode)
            .to(0.15, { scale: 0.8 })
            .delay(0.2)
            .to(0.25, { scale: 0.3 })
            .to(0.2, { scale: 1.1 })
            .to(0.15, { scale: scale })
            .start()

    }

    loadDataFixSize(number){
        this._numberCount = number;
        this.loadQiuSpirte().then(() => {
            this.qiuSprite.node.width = 150;
            this.qiuSprite.node.height = 150;
        });

        this.loadTxtSpirte().then(() => {
            let scale = 40.0 / this.txtSprite.spriteFrame.getOriginalSize().height;
            this.txtSprite.node.height = 40;
            this.txtSprite.node.width = this.txtSprite.spriteFrame.getOriginalSize().width * scale;
        })

        gameConfig.setTargetLevel(number);
        // console.log(`targetNumberCount : ${number}`);
    }
}
