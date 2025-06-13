
const { ccclass, property } = cc._decorator;

@ccclass
export default class TrayScript extends cc.Component {

    @property(cc.Node)
    birdNode: cc.Node = null;

    // onLoad () {}

    start() {
        cc.tween(this.birdNode)
            .repeatForever(
                cc.tween().sequence(
                    cc.tween().parallel(
                        cc.tween().to(1.2, { scaleX: 1.06, scaleY: 0.95 }),
                        cc.tween().by(1.2, { position: cc.v2(0, -5) })
                    ),
                    cc.tween().parallel(
                        cc.tween().to(1.2, { scaleX: 0.95, scaleY: 1.05 }),
                        cc.tween().by(1.2, { position: cc.v2(0, 5) })
                    )
                )
            )
            .start();
    }

    // update (dt) {}
}
