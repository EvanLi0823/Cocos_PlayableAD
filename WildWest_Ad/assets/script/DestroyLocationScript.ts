
const { ccclass, property } = cc._decorator;

@ccclass
export default class DestroyLocationScript extends cc.Component {

    @property(cc.Node)
    maskNode: cc.Node = null;

    locationPos:cc.Vec2 = cc.v2(0,0);
    width:number = 0

    callback:Function = null;

    onLoad() { }

    start() {
        let width = Math.sqrt((Math.pow(cc.winSize.width, 2) + Math.pow(cc.winSize.height, 2))); 
        this.maskNode.width = width;
        this.maskNode.height = width;

        let scale = this.width * 1.0/width;

        cc.tween(this.maskNode)
                .to(0.7, { scale, position: cc.v3(this.locationPos.x, this.locationPos.y, 0) })
                .delay(0.2)
                .call(()=> {
                    this.maskNode.destroy();
                    if(this.callback) {
                        this.callback();
                    }
                })
                .start()
         
    }

    // update (dt) {}
}
