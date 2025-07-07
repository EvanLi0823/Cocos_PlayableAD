import aduioTools, {engineType} from "../aduioTools";
import gameConfig, {JuiceItem, JuiceItemType, LanguageType} from "../gameConfig";
import GuideScript from "../GuideScript";
import LocalAssetsManager from "../LocalAssetsManager";



export enum GMZIndex {
    rewardShow = 1,
    rewardAni = 2,
    finish_target = 3,
    busTips = 4,
    gkPanel = 5,
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component{

    public static Instance: GameManager = null;

    targetQiu: cc.Node = null;
    tempQiu: cc.Node = null;

    @property(cc.Node)
    trayBirdNode: cc.Node = null;

    @property(cc.Node)
    footNode: cc.Node = null;

    @property(cc.Prefab)
    scorePrefab:cc.Prefab = null;

    // @property(cc.Prefab)
    // qiuPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    rewardAnimPrefab: cc.Prefab = null;

    @property(cc.Node)
    displayNode: cc.Node = null;

    // @property(cc.Label)
    // totalRewardlabel: cc.Label = null;

    mergePerpetualCount = 0;
    paTween: cc.Tween = null;

    isVibration: boolean = false;
    qiuArray: Array<cc.Node> = [];


    @property(cc.Node)
    canvas:cc.Node =null

    @property(cc.Label)
    tipLabel:cc.Label = null;
    
    @property(cc.Label)
    download:cc.Label = null;

    @property(cc.Node)
    spineNode:cc.Node = null;

    @property(cc.Node)
    spinebigwinNode:cc.Node = null;

    @property(cc.Button)
    spinBtn:cc.Button = null;
    
    @property(cc.Node)
    btnNode:cc.Node = null;

    @property(cc.Node)
    popup:cc.Node = null;

    mergeCount = 0;
    passCount = 0;

    extraCount = 0;

    isOver: boolean = false;
    isClicked: boolean = false;
    scoreNode: cc.Node = null;
    @property(cc.Node)
    bigwinNode: cc.Node = null;


    isStopCounting: boolean = false; //网络请求或广告是停止计数
    _countingSwitch: boolean = true;  //不是停止计数状态，还要操作碰撞了才能恢复计数，防止有连续合成的球自动计数
    set countingSwitch(_countingSwitch: boolean) {
        this._countingSwitch = _countingSwitch;
    }

    get countingSwitch() {
        return this._countingSwitch;
    }

    onLoad() {
        if (GameManager.Instance != null) {
            GameManager.Instance.destroy();
        }

        gameConfig.setConfig();

        // console.log(`loading ---  start`);
        GameManager.Instance = this;    
        cc.director.getPhysicsManager().enabled = true;
        if (cc.sys.os === cc.sys.OS_IOS) {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        } else if (cc.sys.os === cc.sys.OS_ANDROID) {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        } else {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        }
        this.spineNode.active = false;
         cc.tween(this.spinBtn.node)
            .repeatForever(
                cc.tween().sequence(
                    cc.tween().to(1, {scale: 1.2}),
                    cc.tween().to(1, {scale: 1})
                )
            )
            .start()
    }
    /**-----------------------------slots------------------------------------ */

    //spin按钮点击
    onSpineClick(){
        if (this.isClicked) {
            return
        }
        this.isClicked = true;
        this.spineNode.active = true;
        let anim =  this.spineNode.getComponent(cc.Animation);
        anim.once(cc.Animation.EventType.FINISHED, () => {
            setTimeout(() => {
                this.showTireSteak();
            }, 200); 
        }, this);
        anim.play()
    }
    //展示赢钱动画
    showTireSteak(){
        console.log("showTireSteak")

        if (!this.bigwinNode) {
            cc.resources.load(`prefab/BigWinNode`, cc.Prefab, (err, res) => {
                if (err) {
                    console.error("Error loading BigWinNode prefab:", err);
                    return;
                }
                console.log("loading BigWinNode prefab:success");
                this.bigwinNode = cc.instantiate(res as cc.Prefab);
                cc.find("Canvas/gameNode").addChild(this.bigwinNode)
                this.bigwinNode.active = true;
                let anim = this.bigwinNode.getComponent(cc.Animation);
                anim.once(cc.Animation.EventType.FINISHED, () => {
                    anim.play("bigwinidle");

                    window.gameEnd&&window.gameEnd();
                }, this);
                // 先播idle
                anim.play("bigwin");
            })
        }
    }
    /**---------------------------------------------------------------------- */
 


    start() {
        this.tipLabel.string = gameConfig.getWord("tipLbl");
        // this.download.string = gameConfig.getWord("download");
        
        cc.resources.load("prefab/GuidePrefab", cc.Prefab, (err, res) => {
            if (res) {
                let guideNode = cc.instantiate(res as cc.Prefab);
                this.canvas.addChild(guideNode);
                guideNode.getComponent(GuideScript).callback = () => {
                    gameConfig.setGuideShow();
                    LocalAssetsManager.releasePrefab(res);
                    aduioTools.playBackgroundMusic();
                };
            }
        })

        window.gameReady && window.gameReady();
    }

    showAddReward() {
        let rewardAnimNode = cc.instantiate(this.rewardAnimPrefab);

        this.node.addChild(rewardAnimNode, GMZIndex.rewardAni);

    }

    gameSceneWillDisappear(): void {
        aduioTools.stopBackgroundMusic();
        this.pauseGame()
    }

    pauseGame() {
        cc.director.pause();
        this.displayNode.pauseAllActions();
        aduioTools.pauseAllEffect();
    }

    resumeGame() {
        cc.director.resume();
        this.displayNode.resumeAllActions();
        aduioTools.resuseAllEffect();
    }
}
