const {ccclass, property} = cc._decorator;
function randomMinus1To1(): number {
    return Math.random() * 2 - 1;
}

@ccclass
export default class MoneyAnimation extends cc.Component {

    @property(cc.Prefab)
    moneyPrefab: cc.Prefab = null;

    @property
    emitCount: number = 8;   // 发射数量

    @property
    speed: number = 300;     // 速度（像素/秒）

    @property
    rotateSpeed: number = 360; // 旋转速度（度/秒）

    onLoad() {
        // 确保moneyPrefab已设置
        if (!this.moneyPrefab) {
            cc.error("Money prefab is not set!");
            return;
        }
        this.emitMoney();
    }

    /**
     * 调用该函数触发飞钱动画
     */
    public emitMoney() {
        const center = cc.v2(0, 0); // 本节点为中心（相对当前节点坐标）
        const radius = 200;         // 飞行半径

        for (let i = 0; i < this.emitCount; ++i) {
            // 每个物体的发射角
            const angle = (2 * Math.PI / this.emitCount) * i + randomMinus1To1() * 0.1;
            const direction = cc.v2(Math.cos(angle), Math.sin(angle));
            const dest = center.add(direction.mul(radius));

            // 实例化money对象
            let moneyNode = cc.instantiate(this.moneyPrefab);
            moneyNode.parent = this.node;
            moneyNode.setPosition(center);
            moneyNode.setScale(0.7);

            let distance = center.sub(dest).mag();
            let duration = distance / this.speed;

            // 旋转目标
            let finalAngle = this.rotateSpeed * duration;
            // 用 cc.tween 添加飞行和旋转动画（2.2.1支持cc.tween）
            cc.tween(moneyNode)
                .to(duration, {
                    position: cc.v3(dest.x,dest.y,0),
                    angle: finalAngle
                }, { easing: 'sineInOut' })
                .call(() => {
                    moneyNode.destroy();
                })
                .start();
        }
    }
}
