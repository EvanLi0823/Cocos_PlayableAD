import GameManager from "./GameManager";
import qiuCollisionScript, { QiuInfo } from "./qiuCollisionScript";
import qiuMoveScript from "./qiuMoveScript";

const { ccclass, property } = cc._decorator;

@ccclass
export default class qiuItsOwnScript extends cc.Component {


    @property(cc.Material)
    garyMaterial: cc.Material = null;


    @property(cc.Prefab)
    destroyBoom: cc.Prefab = null;

    // onLoad () {}

    start() {

    }

    init(info: QiuInfo) {
        console.log("init",info);
        this.node.getComponent(qiuCollisionScript).initData(info.index);
        this.node.setPosition(info.pos)

        if (info.rigidBodyType == cc.RigidBodyType.Dynamic) {
            this.node.getComponent(qiuMoveScript).isCollsion = true;
            this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
            this.node.getComponent(cc.RigidBody).linearVelocity = info.speed;
            this.node.getComponent(cc.RigidBody).awakeOnLoad = true;
        }
        else {
            GameManager.Instance.targetQiu = this.node;
            GameManager.Instance.tempQiu = this.node;
        }
    }

    selfDestroy(callBack) {
        this.node.getChildByName("qiu").getComponent(cc.Sprite).setMaterial(0, this.garyMaterial);
        this.node.getChildByName("txt").getComponent(cc.Sprite).setMaterial(0, this.garyMaterial);

        let boomNode = cc.instantiate(this.destroyBoom);

        boomNode.getComponent(cc.ParticleSystem).startSize = this.node.width * 3.0 / 4;

        boomNode.getComponent(cc.ParticleSystem).endSize = this.node.width * 1.0 / 16;

        boomNode.getComponent(cc.ParticleSystem).endRadius = this.node.width * 0.8;

        boomNode.getComponent(cc.ParticleSystem).endRadiusVar = this.node.width * 0.8 * 0.1;

        boomNode.setPosition(this.node.position);
        this.node.parent.addChild(boomNode);

        this.node.getComponent(cc.PhysicsCircleCollider).radius = 0;
        this.node.getComponent(cc.PhysicsCircleCollider).apply();
        cc.tween(this.node)
            .parallel(
                cc.tween().to(0.25, { scale: 0 }),
                cc.tween().delay(0.1).call(() => {
                    if (callBack) {
                        callBack();
                    }
                })
            )
            .call(() => {
                this.node.destroy();
            })
            .start()
    }

    // update (dt) {}
}
