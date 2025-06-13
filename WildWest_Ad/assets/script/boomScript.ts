
const { ccclass, property } = cc._decorator;

@ccclass
export default class boomScript extends cc.Component {

    @property(cc.ParticleSystem)
    smokeParticle: cc.ParticleSystem = null;

    @property(cc.ParticleSystem)
    fogParticle: cc.ParticleSystem = null; 

    @property(cc.Node)
    lightNode:cc.Node = null;

    @property(cc.Node)
    spreadRing: cc.Node = null;

    @property(cc.Node)
    innerRing: cc.Node = null;

    @property(cc.Node)
    outerRing: cc.Node = null;

    @property(cc.Node)
    Halo: cc.Node = null;

    @property(cc.RichText)
    indexLabel:cc.RichText = null; 

    targetRadius:number = null;  
    index:number = null;

    private rate:number = null;

    time:number = 0;

    protected onDestroy(): void {
        // console.log(`boomScript onDestroy`); 
    }
    onLoad() {
        
        let rate = 1.0;
        for (let i = 0; i < this.index; i++) {
            rate *= 0.9;
        }
        this.rate = rate;
        this.initData(); 
    }

    start() { 
        
        let scale = this.targetRadius * this.rate / 80.0;
        this.time = 0.65 * scale; 
        
        this.spreadRing.scale = 0;
      
        this.lightNode.scale = 2.0 * this.rate *this.targetRadius/278 ;
        cc.tween(this.lightNode)
        .delay(0.08)
        .to(0.02 , {scale:4.5 * this.rate *this.targetRadius/278}) 
        .call(()=> { 
            this.smokeParticle.resetSystem();
        })
        .parallel(
            cc.tween().to(this.time * 0.5 ,{scale:3.0 * this.rate *this.targetRadius/278}),  
            cc.tween().call(()=> {
                cc.tween(this.spreadRing).to(this.time * 0.5 , {scale:1.0}).to(0.01 , {opacity:0}).start();
                cc.tween(this.Halo).to(this.time * 0.5 , {opacity:0 }).start();
            })
        )
        .call(()=>{
            cc.tween(this.innerRing).to(this.time * 0.3 , {scale:0.5, opacity:0}).start()
            cc.tween(this.outerRing).to(this.time * 0.6 , {scale:2 , opacity:0}).start()
        })
        .delay(1.0)
        .call(()=>{
            this.node.destroy();
        })
        .start() 

        cc.tween(this.indexLabel.node) 
        .to(0.1 , {scale:1.5 , opacity:255})
        .to(0.35 , {scale:0.6})
        .to(0.35 , {scale:1.3})
        .by(0.4 , {scale:-1 , opacity:-255 , position:cc.v3(0 , 50 ,0)}) 
        .start()
       
        this.fogParticle.resetSystem(); 

    }

    initData() { 
        
//         this.light03.width =  this.targetRadius;
//         this.light03.height =  this.targetRadius;
// 
//         this.light04.width = this.targetRadius;
//         this.light04.height = this.targetRadius; 

        this.smokeParticle.startSize = this.targetRadius/2;
        this.smokeParticle.startSizeVar = this.targetRadius/4;

        this.smokeParticle.endSize = this.targetRadius/6;
        this.smokeParticle.endSizeVar = this.targetRadius/12;

        this.smokeParticle.startRadius = this.targetRadius/4;
        this.smokeParticle.startRadiusVar = this.targetRadius/20;

        this.smokeParticle.endRadius = this.targetRadius * 2.5 *this.rate;
        this.smokeParticle.endRadiusVar = this.targetRadius/100;
        // this.smokeParticle.life = this.time * 0.5;
        // this.smokeParticle.lifeVar = this.time * 0.1;

        // this.fogParticle.duration = 0.4 * this.rate;
        this.fogParticle.startRadius = this.targetRadius *1.8 *this.rate;
        this.fogParticle.startRadiusVar = 20;

        this.fogParticle.endRadius = this.targetRadius * 3.0 *this.rate + this.targetRadius;
        this.fogParticle.endRadiusVar = this.targetRadius; 

        this.indexLabel.string = `<color=#FFDB00><outline color=#FF8000 width=1>${this.index+1}</outline></color>`
        this.indexLabel.node.setPosition(cc.v2(this.targetRadius/2  ,this.targetRadius/4));

    }

   
    // update (dt) {}
}
