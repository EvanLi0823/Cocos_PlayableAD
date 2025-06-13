 
const {ccclass, property} = cc._decorator;

@ccclass
export default class ButtonSafe extends cc.Component {

    @property 
    safeTime: number = 0.5; 

    clickEvents = null;

    start () {
        let button = this.getComponent(cc.Button);
        if (!button){
            return;
        }
        this.clickEvents = button.clickEvents;

        this.node.on('click', ()=>{
            button.clickEvents = [];
            this.scheduleOnce((dt)=>{
                button.clickEvents = this.clickEvents;
            }, this.safeTime);

            // mark: 这种方式会导致快速点击按钮时触摸穿透（按钮禁用时不再接受触摸事件）
            // let autoGrey = button.enableAutoGrayEffect;
            // button.enableAutoGrayEffect = false;
            // button.interactable = false;
            // this.scheduleOnce((dt)=>{
            //     button.enableAutoGrayEffect = autoGrey;
            //     button.interactable = true;
            // }, this.safeTime);
        }, this);
    }

    // update (dt) {}
}
