"use strict";
cc._RF.push(module, '41ed2FE4o5It5I9A+CA81Ou', 'JsbSdkScript');
// script/PlatformInteraction/JsbSdkScript.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OC_RV_JSC_CLASS = "OCCBridge";
// const ANDROID_PATH = "com.taoni.android.answer.ui.activity.MainActivity"   
// const ANDROID_PATH = "org/cocos2dx/javascript/AppActivity" 
var ANDROID_PATH = "com.android.game.MainActivity";
var JsbSdkScript = /** @class */ (function () {
    function JsbSdkScript() {
        this.passRewardlistener = null;
        this.sceneListener = null;
        this.delegate = null;
        this.delegate = {
            getEveryRewardAmountCallBack: function (reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.getEveryRewardAmountCallBack != null) {
                    // console.log(`reportPassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.getEveryRewardAmountCallBack(reward);
                }
            },
            showVideoCallBack: function (reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.showVideoCallBack != null) {
                    // console.log(`receivePassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.showVideoCallBack(reward);
                }
            },
            gameSceneDisapear: function () {
                if (JsbSdkScript.Instance.sceneListener != null && JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear != null && undefined != JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear) {
                    JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear();
                }
            },
            gameSceneOnResume: function () {
                if (JsbSdkScript.Instance.sceneListener != null && JsbSdkScript.Instance.sceneListener.gameSceneOnResume != null && undefined != JsbSdkScript.Instance.sceneListener.gameSceneOnResume) {
                    JsbSdkScript.Instance.sceneListener.gameSceneOnResume();
                }
            },
            getMergeRewardAmountCallBack: function (reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.getMergeRewardAmountCallBack != null) {
                    // console.log(`receivePassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.getMergeRewardAmountCallBack(reward);
                }
            },
        };
    }
    Object.defineProperty(JsbSdkScript, "Instance", {
        get: function () {
            if (JsbSdkScript._instance == null) {
                JsbSdkScript._instance = new JsbSdkScript();
            }
            return JsbSdkScript._instance;
        },
        enumerable: false,
        configurable: true
    });
    JsbSdkScript.getMergeReward = function () {
        // if (gameConfig.isWhiteBag) return;
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "getMergeReward", "()V");
        // }
    };
    JsbSdkScript.requestIsWhiteBao = function () {
        // let isWhiteBao;
        // if (cc.sys.os === cc.sys.OS_ANDROID) { 
        //     isWhiteBao = jsb.reflection.callStaticMethod(ANDROID_PATH, "requestIsWhiteBao", "()Z");
        // }
        // return isWhiteBao? isWhiteBao : false;;
        return false;
    };
    JsbSdkScript.getCommonParm = function () {
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
        };
        // }
    };
    JsbSdkScript.getTotalReward = function () {
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
    };
    JsbSdkScript.getMaxValueReward = function () {
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
    };
    JsbSdkScript.getEveryRewardAmount = function () {
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
    };
    /**0视频广告 1插屏广告 2宝箱视频广告*/
    JsbSdkScript.showVideo = function (type) {
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
    };
    JsbSdkScript.showWithdraw = function () {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "showWithdraw:");
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "showWithdraw", "()V");
        // }
    };
    JsbSdkScript.buryPoint = function (eventname, jsondata) {
        //    if (cc.sys.os === cc.sys.OS_ANDROID) {
        //         jsb.reflection.callStaticMethod(ANDROID_PATH, "buryPoint", "(Ljava/lang/String;Ljava/lang/String;)V",eventname,jsondata);
        //     }
    };
    /**获取宝箱打开条件 */
    JsbSdkScript.getBaoXiaoCondition = function () {
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
    };
    //  static getUserLevel() : number {
    // let getUserLevel
    // if (cc.sys.os === cc.sys.OS_ANDROID) {
    //     getUserLevel = jsb.reflection.callStaticMethod(ANDROID_PATH, "getMyLevel", "()I")
    // }
    // return getUserLevel ? getUserLevel : 4
    //  }
    JsbSdkScript.showBubble = function () {
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "onBubbleClick", "()V");
        //  }
    };
    // static isNewPlayer() : number {
    // if (cc.sys.os === cc.sys.OS_ANDROID) {
    //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "isNewPlayer", "()I");
    //  }
    //  }
    JsbSdkScript.playMergeAudio = function (index) {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "playMergeAudio:",`${index}`);
        // }
        // else if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "playMergeAudio", "(Ljava/lang/String;)V",`${index}`);
        // }
    };
    JsbSdkScript.PrivacyPolicy = function () {
        //     if (cc.sys.os === cc.sys.OS_ANDROID) {
        //        jsb.reflection.callStaticMethod(ANDROID_PATH, "PrivacyPolicy", "()V");
        //    }
    };
    JsbSdkScript.TermsofUse = function () {
        //    if (cc.sys.os === cc.sys.OS_ANDROID) {
        //        jsb.reflection.callStaticMethod(ANDROID_PATH, "TermsofUse", "()V");
        //    }
    };
    JsbSdkScript._instance = null;
    return JsbSdkScript;
}());
exports.default = JsbSdkScript;

cc._RF.pop();