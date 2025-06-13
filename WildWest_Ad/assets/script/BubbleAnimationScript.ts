 
const {ccclass, property} = cc._decorator;

@ccclass
export default class BubbleAnimationScript extends cc.Component { 
    
    callBack:Function = null;

    bubbleAnimationFinish(){

        this.node.destroy();
        if(this.callBack) {
            this.callBack();
        }
    }    
     protected onDestroy(): void {
        // console.log(`bubbleAnimation onDestroy`);
     }
     // onLoad () {}

    start () {
        
    }

    // update (dt) {}
}
