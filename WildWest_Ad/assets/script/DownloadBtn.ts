// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DownloadBtn extends cc.Component {

    @property(cc.Node)
    btn: cc.Node = null;

    onLoad() {
        cc.tween(this.btn)
            .repeatForever(
                cc.tween().sequence(
                    cc.tween().to(1, {scale: 1.2}),
                    cc.tween().to(1, {scale: 1})
                )
            )
            .start()
    }

    callback(){
        console.log("点击了")
        window.install&&window.install();
        // window.mraid && window.mraid.open('https://play.google.com/store/apps/details?id=com.candy.fantasy.slots.sweet.game');
    }
}

// update (dt) {}
