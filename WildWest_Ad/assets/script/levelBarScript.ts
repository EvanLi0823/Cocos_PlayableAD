import gameConfig from "./gameConfig";
import localDataManager from "./localDataManager";
import JsbSdkScript from "./PlatformInteraction/JsbSdkScript";
import GameManager from "./qiuScript/GameManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class levelBarScript extends cc.Component {


    @property(cc.RichText)
    levelLabel:cc.RichText = null;

    @property(cc.Label)
    levelRemindLabel:cc.Label = null;

      // onLoad () {}
    start () {
        let currentScore = localDataManager.shareManager().getScoreCount();
        this.levelLabel.string = `<color=#FFFFFF><outline color=#CD4D00 width=2>${currentScore}</outline></color>`;
        this.levelRemindLabel.string = gameConfig.getWord("score").string + "："
    }

    addScore(score){ 
        let currentScore = localDataManager.shareManager().getScoreCount();
        let newScore = currentScore + score;
        this.levelLabel.string = `<color=#FFFFFF><outline color=#CD4D00 width=2>${newScore}</outline></color>`;
        localDataManager.shareManager().setScoreCount(newScore);
    }


    reSetState(){
        let currentScore = localDataManager.shareManager().getScoreCount();

        this.levelLabel.string = `<color=#FFFFFF><outline color=#CD4D00 width=2>${currentScore}</outline></color>`;

    }

    // update (dt) {}
}