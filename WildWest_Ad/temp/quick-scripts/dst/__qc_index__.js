
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/BigWinNode');
require('./assets/script/BingoScript');
require('./assets/script/BubbleAnimationScript');
require('./assets/script/ButtonSafe');
require('./assets/script/DestroyLocationScript');
require('./assets/script/DialogBase');
require('./assets/script/DownloadBtn');
require('./assets/script/FinalRandom/FinalRandom');
require('./assets/script/FinalRandom/Point');
require('./assets/script/GradeNoticeBoardScript');
require('./assets/script/GuideScript');
require('./assets/script/LocalAssetsManager');
require('./assets/script/Model/DataModel');
require('./assets/script/MoneyAnimation');
require('./assets/script/PlatformInteraction/JsbSdkScript');
require('./assets/script/PlatformInteraction/PIDelegate');
require('./assets/script/RightNode');
require('./assets/script/RoundRectMask');
require('./assets/script/TargetScript/TargetCompleteScript');
require('./assets/script/TargetScript/TargetqiuScript');
require('./assets/script/TrayScript');
require('./assets/script/UpRewardNode');
require('./assets/script/aduioTools');
require('./assets/script/boomScript');
require('./assets/script/gameConfig');
require('./assets/script/levelBarScript');
require('./assets/script/localDataManager');
require('./assets/script/qiuScript/GameManager');
require('./assets/script/qiuScript/InputController');
require('./assets/script/qiuScript/Juice');
require('./assets/script/qiuScript/qiuCollisionScript');
require('./assets/script/qiuScript/qiuItsOwnScript');
require('./assets/script/qiuScript/qiuMoveScript');
require('./assets/script/redbagFly');
require('./assets/script/rewardScript/rewardAnimScript');
require('./assets/script/rewardScript/rewardTipScript');
require('./assets/script/tireSteakScript');
require('./assets/script/topBubbleBgScript');
require('./assets/script/utils/ResMgr');
require('./assets/script/utils/RewardMgr');
require('./assets/script/utiltools');

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