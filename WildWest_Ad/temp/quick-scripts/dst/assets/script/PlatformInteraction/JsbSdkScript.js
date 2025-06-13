
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PlatformInteraction/JsbSdkScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUGxhdGZvcm1JbnRlcmFjdGlvbi9Kc2JTZGtTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGVBQWUsR0FBRyxXQUFXLENBQUM7QUFFcEMsOEVBQThFO0FBQzlFLDhEQUE4RDtBQUM5RCxJQUFNLFlBQVksR0FBRywrQkFBK0IsQ0FBQTtBQUVwRDtJQWtCSTtRQWZBLHVCQUFrQixHQUF1QixJQUFJLENBQUM7UUFDOUMsa0JBQWEsR0FBcUIsSUFBSSxDQUFDO1FBRXZDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFhWixJQUFJLENBQUMsUUFBUSxHQUFHO1lBRVosNEJBQTRCLFlBQUMsTUFBTTtnQkFDL0IsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixJQUFJLElBQUk7dUJBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLElBQUksSUFBSSxFQUFFO29CQUNsRixxREFBcUQ7b0JBRXJELFlBQVksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pGO1lBQ0wsQ0FBQztZQUVELGlCQUFpQixZQUFDLE1BQU07Z0JBQ3BCLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJO3VCQUM3QyxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixJQUFJLElBQUksRUFBRTtvQkFFdkUsc0RBQXNEO29CQUN0RCxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN0RTtZQUNMLENBQUM7WUFFRCxpQkFBaUI7Z0JBQ2IsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLElBQUksSUFBSSxJQUFJLFNB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LDRDQUE0QztRQUM1Qyw2RUFBNkU7UUFDN0UsT0FBTztJQUNSLENBQUM7SUE3TmUsc0JBQVMsR0FBZ0IsSUFBSSxDQUFBO0lBOE5oRCxtQkFBQztDQXZPRCxBQXVPQyxJQUFBO2tCQXZPb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lQ29uZmlnIGZyb20gXCIuLi9nYW1lQ29uZmlnXCI7XG5pbXBvcnQge1JlY2V2aWNlUlBSZXN1bHRNb2RlbCwgU2luZ2xlUlBDb25maWdNb2RlbH0gZnJvbSBcIi4uL01vZGVsL0RhdGFNb2RlbFwiO1xuaW1wb3J0IHtnYW1lU2NlbmVEZWxlZ2F0ZSwgUGFzc1Jld2FyZERlbGVnYXRlfSBmcm9tIFwiLi9QSURlbGVnYXRlXCI7XG5cbmNvbnN0IE9DX1JWX0pTQ19DTEFTUyA9IFwiT0NDQnJpZGdlXCI7XG5cbi8vIGNvbnN0IEFORFJPSURfUEFUSCA9IFwiY29tLnRhb25pLmFuZHJvaWQuYW5zd2VyLnVpLmFjdGl2aXR5Lk1haW5BY3Rpdml0eVwiICAgXG4vLyBjb25zdCBBTkRST0lEX1BBVEggPSBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIgXG5jb25zdCBBTkRST0lEX1BBVEggPSBcImNvbS5hbmRyb2lkLmdhbWUuTWFpbkFjdGl2aXR5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNiU2RrU2NyaXB0ICB7XG5cblxuICAgIHBhc3NSZXdhcmRsaXN0ZW5lcjogUGFzc1Jld2FyZERlbGVnYXRlID0gbnVsbDtcbiAgICBzY2VuZUxpc3RlbmVyOmdhbWVTY2VuZURlbGVnYXRlID0gbnVsbDtcblxuICAgIGRlbGVnYXRlID0gbnVsbDtcbiAgICBcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpKc2JTZGtTY3JpcHQgPSBudWxsXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTpKc2JTZGtTY3JpcHQgIHtcbiAgICAgICAgaWYoSnNiU2RrU2NyaXB0Ll9pbnN0YW5jZSA9PSBudWxsKXtcbiAgICAgICAgICAgIEpzYlNka1NjcmlwdC5faW5zdGFuY2UgPSBuZXcgSnNiU2RrU2NyaXB0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSnNiU2RrU2NyaXB0Ll9pbnN0YW5jZTtcbiAgICB9ICBcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcblxuICAgICAgICAgICAgZ2V0RXZlcnlSZXdhcmRBbW91bnRDYWxsQmFjayhyZXdhcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnBhc3NSZXdhcmRsaXN0ZW5lciAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICYmIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5wYXNzUmV3YXJkbGlzdGVuZXIuZ2V0RXZlcnlSZXdhcmRBbW91bnRDYWxsQmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGByZXBvcnRQYXNzUmV3YXJkQ2FsbEJhY2sgJHtyZXdhcmR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnBhc3NSZXdhcmRsaXN0ZW5lci5nZXRFdmVyeVJld2FyZEFtb3VudENhbGxCYWNrKHJld2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2hvd1ZpZGVvQ2FsbEJhY2socmV3YXJkKSB7XG4gICAgICAgICAgICAgICAgaWYgKEpzYlNka1NjcmlwdC5JbnN0YW5jZS5wYXNzUmV3YXJkbGlzdGVuZXIgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAmJiBKc2JTZGtTY3JpcHQuSW5zdGFuY2UucGFzc1Jld2FyZGxpc3RlbmVyLnNob3dWaWRlb0NhbGxCYWNrICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgcmVjZWl2ZVBhc3NSZXdhcmRDYWxsQmFjayAke3Jld2FyZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnBhc3NSZXdhcmRsaXN0ZW5lci5zaG93VmlkZW9DYWxsQmFjayhyZXdhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdhbWVTY2VuZURpc2FwZWFyKCl7XG4gICAgICAgICAgICAgICAgaWYgKEpzYlNka1NjcmlwdC5JbnN0YW5jZS5zY2VuZUxpc3RlbmVyICE9IG51bGwgJiYgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnNjZW5lTGlzdGVuZXIuZ2FtZVNjZW5lV2lsbERpc2FwcGVhciAhPSBudWxsICYmIHVuZGVmaW5lZCAhPSBKc2JTZGtTY3JpcHQuSW5zdGFuY2Uuc2NlbmVMaXN0ZW5lci5nYW1lU2NlbmVXaWxsRGlzYXBwZWFyKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnNjZW5lTGlzdGVuZXIuZ2FtZVNjZW5lV2lsbERpc2FwcGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgICAgICBnYW1lU2NlbmVPblJlc3VtZSgpe1xuICAgICAgICAgICAgICAgIGlmIChKc2JTZGtTY3JpcHQuSW5zdGFuY2Uuc2NlbmVMaXN0ZW5lciAhPSBudWxsICYmIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5zY2VuZUxpc3RlbmVyLmdhbWVTY2VuZU9uUmVzdW1lICE9IG51bGwgJiYgdW5kZWZpbmVkICE9IEpzYlNka1NjcmlwdC5JbnN0YW5jZS5zY2VuZUxpc3RlbmVyLmdhbWVTY2VuZU9uUmVzdW1lKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnNjZW5lTGlzdGVuZXIuZ2FtZVNjZW5lT25SZXN1bWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRNZXJnZVJld2FyZEFtb3VudENhbGxCYWNrKHJld2FyZCkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKEpzYlNka1NjcmlwdC5JbnN0YW5jZS5wYXNzUmV3YXJkbGlzdGVuZXIgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAmJiBKc2JTZGtTY3JpcHQuSW5zdGFuY2UucGFzc1Jld2FyZGxpc3RlbmVyLmdldE1lcmdlUmV3YXJkQW1vdW50Q2FsbEJhY2sgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGByZWNlaXZlUGFzc1Jld2FyZENhbGxCYWNrICR7cmV3YXJkfWApO1xuICAgICAgICAgICAgICAgICAgICBKc2JTZGtTY3JpcHQuSW5zdGFuY2UucGFzc1Jld2FyZGxpc3RlbmVyLmdldE1lcmdlUmV3YXJkQW1vdW50Q2FsbEJhY2socmV3YXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1lcmdlUmV3YXJkKCl7XG4gICAgICAgIC8vIGlmIChnYW1lQ29uZmlnLmlzV2hpdGVCYWcpIHJldHVybjtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgLy8gICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoQU5EUk9JRF9QQVRILCBcImdldE1lcmdlUmV3YXJkXCIsIFwiKClWXCIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlcXVlc3RJc1doaXRlQmFvKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIGxldCBpc1doaXRlQmFvO1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkgeyBcbiAgICAgICAgLy8gICAgIGlzV2hpdGVCYW8gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJyZXF1ZXN0SXNXaGl0ZUJhb1wiLCBcIigpWlwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gaXNXaGl0ZUJhbz8gaXNXaGl0ZUJhbyA6IGZhbHNlOztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDb21tb25QYXJtKCkge1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19SVl9KU0NfQ0xBU1MsIFwiZ2V0Q29tbW9uUGFybTpcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRDb21tb25QYXJtXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnRW5nbGlzaCcsXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZJbnRlcnZhbHM6IDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAgXG4gICAgc3RhdGljIGdldFRvdGFsUmV3YXJkKCk6c3RyaW5nIHtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAvLyAgICAgbGV0IHRvdGFsUmV3YXJkID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19SVl9KU0NfQ0xBU1MsIFwiZ2V0VG90YWxSZXdhcmRcIik7XG4gICAgICAgIC8vICAgICByZXR1cm4gdG90YWxSZXdhcmQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBsZXQgdG90YWxSZXdhcmQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRUb3RhbFJld2FyZFwiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICAvLyAgICAgaWYodG90YWxSZXdhcmQgIT0gbnVsbCAmJiB0eXBlb2YgdG90YWxSZXdhcmQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0b3RhbFJld2FyZDtcbiAgICAgICAgLy8gICAgIH0gIFxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBcIjEwXCI7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1heFZhbHVlUmV3YXJkKCk6bnVtYmVyIHtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAvLyAgICAgbGV0IHRvdGFsUmV3YXJkID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19SVl9KU0NfQ0xBU1MsIFwiZ2V0VG90YWxSZXdhcmRcIik7XG4gICAgICAgIC8vICAgICByZXR1cm4gdG90YWxSZXdhcmQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBsZXQgdG90YWxSZXdhcmQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRtYXhWYWx1ZVJld2FyZFwiLCBcIigpSVwiKTtcbiAgICAgICAgLy8gICAgIGlmKHRvdGFsUmV3YXJkICE9IG51bGwgJiYgdHlwZW9mIHRvdGFsUmV3YXJkID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdG90YWxSZXdhcmQ7XG4gICAgICAgIC8vICAgICB9ICBcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEV2ZXJ5UmV3YXJkQW1vdW50KCkge1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1JWX0pTQ19DTEFTUywgXCJnZXRFdmVyeVJld2FyZEFtb3VudDpcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7IFxuICAgICAgICAvLyAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChBTkRST0lEX1BBVEgsIFwiZ2V0RXZlcnlSZXdhcmRBbW91bnRcIiwgXCIoKVZcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGxldCBtb2RlbCA9IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV3YXJkOlwiMTAuMDBcIixcbiAgICAgICAgLy8gICAgICAgICAgICAgaXNuZXdwbGF5ZXIgOiAxLFxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBsZXQgbW9kZWxKc29uID0gSlNPTi5zdHJpbmdpZnkobW9kZWwpO1xuICAgICAgICAvLyAgICAgICAgIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5kZWxlZ2F0ZS5nZXRFdmVyeVJld2FyZEFtb3VudENhbGxCYWNrKG1vZGVsSnNvbik7XG4gICAgICAgIC8vICAgICB9LCAwLjIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8qKjDop4bpopHlub/lkYogMeaPkuWxj+W5v+WRiiAy5a6d566x6KeG6aKR5bm/5ZGKKi9cbiAgICBzdGF0aWMgc2hvd1ZpZGVvKHR5cGU6bnVtYmVyKSB7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgLy8gICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfUlZfSlNDX0NMQVNTLCBcInNob3dWaWRlbzphbmRJc0hDOlwiLCBgJHt0eXBlfWApO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHsgXG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJzaG93VmlkZW9cIiwgXCIoSSlWXCIsIHR5cGUpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2V7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgbW9kZWw6UmVjZXZpY2VSUFJlc3VsdE1vZGVsID0ge1xuICAgICAgICAvLyAgICAgICAgICAgICBhbW91bnQ6IFwiMS4wMFwiLFxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gICAgICAgICBsZXQgbW9kZWxKc29uID0gSlNPTi5zdHJpbmdpZnkobW9kZWwpO1xuICAgICAgICAvLyAgICAgICAgIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5kZWxlZ2F0ZS5zaG93VmlkZW9DYWxsQmFjayhtb2RlbEpzb24pO1xuICAgICAgICAvLyAgICAgfSwgMC4yKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93V2l0aGRyYXcoKSB7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgLy8gICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfUlZfSlNDX0NMQVNTLCBcInNob3dXaXRoZHJhdzpcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJzaG93V2l0aGRyYXdcIiwgXCIoKVZcIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYnVyeVBvaW50KGV2ZW50bmFtZSA6IHN0cmluZyxqc29uZGF0YSA6IHN0cmluZykge1xuICAgIC8vICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgLy8gICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJidXJ5UG9pbnRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIixldmVudG5hbWUsanNvbmRhdGEpO1xuICAgIC8vICAgICB9XG4gICAgfVxuXG4gICAgIC8qKuiOt+WPluWuneeuseaJk+W8gOadoeS7tiAqL1xuICAgICBzdGF0aWMgZ2V0QmFvWGlhb0NvbmRpdGlvbigpIHtcbiAgICAgICAgLy8gbGV0IGpzb25zdHIgPSB7aXNsb2FkOiAxLCBmcmVlemV0aW1lOiBEYXRlLm5vdygpfVxuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAvLyAgICAgdHJ5e1xuICAgICAgICAvLyAgICAgICAgIGxldCByZXQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRCYW9YaWFvQ29uZGl0aW9uXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIilcbiAgICAgICAgLy8gICAgICAgICBqc29uc3RyID0gSlNPTi5wYXJzZShyZXQpO1xuICAgICAgICAvLyAgICAgfWNhdGNoe1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUud2FybihcIuaVsOaNruW8guW4uFwiKVxuICAgICAgICAvLyAgICAgICAgIGpzb25zdHIgPSB7aXNsb2FkOjAsIGZyZWV6ZXRpbWU6IERhdGUubm93KCkrMTIzMzIxMzEyMzEzMTJ9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRCYW9YaWFvQ29uZGl0aW9uXCIsSlNPTi5zdHJpbmdpZnkoanNvbnN0cikpXG4gICAgICAgIC8vIHJldHVybiBqc29uc3RyXG4gICAgIH1cblxuICAgIC8vICBzdGF0aWMgZ2V0VXNlckxldmVsKCkgOiBudW1iZXIge1xuICAgICAgICAvLyBsZXQgZ2V0VXNlckxldmVsXG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBnZXRVc2VyTGV2ZWwgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRNeUxldmVsXCIsIFwiKClJXCIpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGdldFVzZXJMZXZlbCA/IGdldFVzZXJMZXZlbCA6IDRcbiAgICAvLyAgfVxuXG4gICAgIHN0YXRpYyBzaG93QnViYmxlKCl7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChBTkRST0lEX1BBVEgsIFwib25CdWJibGVDbGlja1wiLCBcIigpVlwiKTtcbiAgICAgICAgLy8gIH1cbiAgICAgfVxuICAgICBcbiAgICAvLyBzdGF0aWMgaXNOZXdQbGF5ZXIoKSA6IG51bWJlciB7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChBTkRST0lEX1BBVEgsIFwiaXNOZXdQbGF5ZXJcIiwgXCIoKUlcIik7XG4gICAgICAgIC8vICB9XG4gICAgLy8gIH1cblxuICAgIHN0YXRpYyBwbGF5TWVyZ2VBdWRpbyhpbmRleCkge1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1JWX0pTQ19DTEFTUywgXCJwbGF5TWVyZ2VBdWRpbzpcIixgJHtpbmRleH1gKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJwbGF5TWVyZ2VBdWRpb1wiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLGAke2luZGV4fWApO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc3RhdGljIFByaXZhY3lQb2xpY3koKSB7XG4gICAgLy8gICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgLy8gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoQU5EUk9JRF9QQVRILCBcIlByaXZhY3lQb2xpY3lcIiwgXCIoKVZcIik7XG4gICAgLy8gICAgfVxuICAgfVxuXG4gICBzdGF0aWMgVGVybXNvZlVzZSgpIHtcbiAgICAvLyAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgIC8vICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJUZXJtc29mVXNlXCIsIFwiKClWXCIpO1xuICAgIC8vICAgIH1cbiAgIH1cbn1cbiJdfQ==