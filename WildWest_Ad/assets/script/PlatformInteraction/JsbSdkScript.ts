import gameConfig from "../gameConfig";
import {ReceviceRPResultModel, SingleRPConfigModel} from "../Model/DataModel";
import {gameSceneDelegate, PassRewardDelegate} from "./PIDelegate";

const OC_RV_JSC_CLASS = "OCCBridge";

// const ANDROID_PATH = "com.taoni.android.answer.ui.activity.MainActivity"   
// const ANDROID_PATH = "org/cocos2dx/javascript/AppActivity" 
const ANDROID_PATH = "com.android.game.MainActivity"

export default class JsbSdkScript  {


    passRewardlistener: PassRewardDelegate = null;
    sceneListener:gameSceneDelegate = null;

    delegate = null;
    

    private static _instance:JsbSdkScript = null
    public static get Instance():JsbSdkScript  {
        if(JsbSdkScript._instance == null){
            JsbSdkScript._instance = new JsbSdkScript();
        }

        return JsbSdkScript._instance;
    }  

    private constructor(){
        this.delegate = {

            getEveryRewardAmountCallBack(reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.getEveryRewardAmountCallBack != null) {
                    // console.log(`reportPassRewardCallBack ${reward}`);

                    JsbSdkScript.Instance.passRewardlistener.getEveryRewardAmountCallBack(reward);
                }
            },

            showVideoCallBack(reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.showVideoCallBack != null) {

                    // console.log(`receivePassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.showVideoCallBack(reward);
                }
            },

            gameSceneDisapear(){
                if (JsbSdkScript.Instance.sceneListener != null && JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear != null && undefined != JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear) {  
                    JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear();
                }
            },
          
            gameSceneOnResume(){
                if (JsbSdkScript.Instance.sceneListener != null && JsbSdkScript.Instance.sceneListener.gameSceneOnResume != null && undefined != JsbSdkScript.Instance.sceneListener.gameSceneOnResume) {  
                    JsbSdkScript.Instance.sceneListener.gameSceneOnResume();
                }
            },

            getMergeRewardAmountCallBack(reward) {
               
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.getMergeRewardAmountCallBack != null) {

                    // console.log(`receivePassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.getMergeRewardAmountCallBack(reward);
                }
            },
        }
    }

    static getMergeReward(){
        // if (gameConfig.isWhiteBag) return;
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "getMergeReward", "()V");
        // }
    }

    static requestIsWhiteBao():boolean {
        // let isWhiteBao;
        // if (cc.sys.os === cc.sys.OS_ANDROID) { 
        //     isWhiteBao = jsb.reflection.callStaticMethod(ANDROID_PATH, "requestIsWhiteBao", "()Z");
        // }
        // return isWhiteBao? isWhiteBao : false;;
        return false;
    }

    static getCommonParm() {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     return jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getCommonParm:");
        // }
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "getCommonParm", "()Ljava/lang/String;");
        // }
        // else {
            return {
                language: 'English',
                numberOfIntervals: 6
            }
        // }
    }
     
    static getTotalReward():string {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     let totalReward = jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getTotalReward");
        //     return totalReward;
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     let totalReward = jsb.reflection.callStaticMethod(ANDROID_PATH, "getTotalReward", "()Ljava/lang/String;");
        //     if(totalReward != null && typeof totalReward == "string") {
        //         return totalReward;
        //     }  
        // }
        return "10";
    }

    static getMaxValueReward():number {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     let totalReward = jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getTotalReward");
        //     return totalReward;
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     let totalReward = jsb.reflection.callStaticMethod(ANDROID_PATH, "getmaxValueReward", "()I");
        //     if(totalReward != null && typeof totalReward == "number") {
        //         return totalReward;
        //     }  
        // }
        return 10;
    }

    static getEveryRewardAmount() {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getEveryRewardAmount:");
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) { 
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "getEveryRewardAmount", "()V");
        // }
        // else{
        //     setTimeout(() => {
        //         let model = {
        //             reward:"10.00",
        //             isnewplayer : 1,
        //         }
        //         let modelJson = JSON.stringify(model);
        //         JsbSdkScript.Instance.delegate.getEveryRewardAmountCallBack(modelJson);
        //     }, 0.2);
        // }
    }
    /**0视频广告 1插屏广告 2宝箱视频广告*/
    static showVideo(type:number) {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "showVideo:andIsHC:", `${type}`);
        // }
        // else if (cc.sys.os === cc.sys.OS_ANDROID) { 
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "showVideo", "(I)V", type);
        // }
        // else{
        //     setTimeout(() => {
        //         let model:ReceviceRPResultModel = {
        //             amount: "1.00",
        //         }
    
        //         let modelJson = JSON.stringify(model);
        //         JsbSdkScript.Instance.delegate.showVideoCallBack(modelJson);
        //     }, 0.2);
        // }
    }

    static showWithdraw() {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "showWithdraw:");
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "showWithdraw", "()V");
        // }
    }

    static buryPoint(eventname : string,jsondata : string) {
    //    if (cc.sys.os === cc.sys.OS_ANDROID) {
    //         jsb.reflection.callStaticMethod(ANDROID_PATH, "buryPoint", "(Ljava/lang/String;Ljava/lang/String;)V",eventname,jsondata);
    //     }
    }

     /**获取宝箱打开条件 */
     static getBaoXiaoCondition() {
        // let jsonstr = {isload: 1, freezetime: Date.now()}
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     try{
        //         let ret = jsb.reflection.callStaticMethod(ANDROID_PATH, "getBaoXiaoCondition", "()Ljava/lang/String;")
        //         jsonstr = JSON.parse(ret);
        //     }catch{
        //         console.warn("数据异常")
        //         jsonstr = {isload:0, freezetime: Date.now()+12332131231312}
        //     }
        // }
        // console.log("getBaoXiaoCondition",JSON.stringify(jsonstr))
        // return jsonstr
     }

    //  static getUserLevel() : number {
        // let getUserLevel
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     getUserLevel = jsb.reflection.callStaticMethod(ANDROID_PATH, "getMyLevel", "()I")
        // }
        // return getUserLevel ? getUserLevel : 4
    //  }

     static showBubble(){
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "onBubbleClick", "()V");
        //  }
     }
     
    // static isNewPlayer() : number {
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "isNewPlayer", "()I");
        //  }
    //  }

    static playMergeAudio(index) {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "playMergeAudio:",`${index}`);
        // }
        // else if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "playMergeAudio", "(Ljava/lang/String;)V",`${index}`);
        // }
    }

    static PrivacyPolicy() {
    //     if (cc.sys.os === cc.sys.OS_ANDROID) {
    //        jsb.reflection.callStaticMethod(ANDROID_PATH, "PrivacyPolicy", "()V");
    //    }
   }

   static TermsofUse() {
    //    if (cc.sys.os === cc.sys.OS_ANDROID) {
    //        jsb.reflection.callStaticMethod(ANDROID_PATH, "TermsofUse", "()V");
    //    }
   }
}
