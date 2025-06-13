"use strict";
cc._RF.push(module, '10b30Fk0/VLVZB/59yPzTwz', 'localDataManager');
// script/localDataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ISNEWER = "ISNEWER";
var PayGuider = "PayGuider";
var QIUINFO = "QIUINFO";
var TARGETLEVEL = "TARGETLEVEL";
var GUIDESHOW = "GUIDESHOW";
var DMSWICTH = "DMSWICTH";
var MUSICBG = "MUSICBG";
var MUSICEFFECT = "MUSICEFFECT";
var SYNTHETICCOUNT = "SYNTHETICCOUNT";
var PASSCOUNT = "PASSCOUNT";
var SCORECOUNT = "SCORECOUNT";
var MAXSCORECOUNT = "MAXSCORECOUNT";
var localDataManager = /** @class */ (function () {
    function localDataManager() {
    }
    localDataManager.shareManager = function () {
        if (this._Manager == null) {
            this._Manager = new localDataManager();
        }
        return this._Manager;
    };
    localDataManager.prototype.getIsNewer = function () {
        var qInfo = cc.sys.localStorage.getItem(ISNEWER);
        if (qInfo != null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.setIsNewer = function () {
        cc.sys.localStorage.setItem(ISNEWER, "isNewer");
    };
    localDataManager.prototype.isShowPayGuider = function () {
        var qInfo = cc.sys.localStorage.getItem(ISNEWER);
        if (qInfo != null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.getIsPayGuider = function () {
        var qInfo = cc.sys.localStorage.getItem(PayGuider);
        console.log("getIsPayGuider", qInfo);
        if (qInfo != null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.setIsPayGuider = function () {
        cc.sys.localStorage.setItem(PayGuider, "isGuiderPay");
    };
    localDataManager.prototype.getQiuInfo = function () {
        var qInfo = cc.sys.localStorage.getItem(QIUINFO);
        if (qInfo != null) {
            return qInfo;
        }
        return "";
    };
    localDataManager.prototype.setQiuInfo = function (qInfo) {
        // console.log(`setQiuInfo ${qInfo}`);
        if (typeof qInfo == "string" && qInfo.length > 0) {
            cc.sys.localStorage.setItem(QIUINFO, qInfo);
        }
        else {
            cc.sys.localStorage.removeItem(QIUINFO);
        }
    };
    localDataManager.prototype.getMaxScoreCount = function () {
        var mCount = cc.sys.localStorage.getItem(MAXSCORECOUNT);
        if (mCount != null) {
            return Number(mCount);
        }
        return 0;
    };
    localDataManager.prototype.setMaxScoreCount = function (mCount) {
        cc.sys.localStorage.setItem(MAXSCORECOUNT, String(mCount));
    };
    localDataManager.prototype.getScoreCount = function () {
        var sCount = cc.sys.localStorage.getItem(SCORECOUNT);
        if (sCount != null) {
            return Number(sCount);
        }
        return 0;
    };
    localDataManager.prototype.setScoreCount = function (sCount) {
        cc.sys.localStorage.setItem(SCORECOUNT, String(sCount));
    };
    localDataManager.prototype.getPassCount = function () {
        var pCount = cc.sys.localStorage.getItem(PASSCOUNT);
        if (pCount != null) {
            return Number(pCount);
        }
        return 0;
    };
    localDataManager.prototype.setPassCount = function (pCount) {
        cc.sys.localStorage.setItem(PASSCOUNT, String(pCount));
    };
    localDataManager.prototype.getSyntheticCount = function () {
        var sCount = cc.sys.localStorage.getItem(SYNTHETICCOUNT);
        if (sCount != null) {
            return Number(sCount);
        }
        return 0;
    };
    localDataManager.prototype.setSyntheticCount = function (sCount) {
        cc.sys.localStorage.setItem(SYNTHETICCOUNT, String(sCount));
    };
    localDataManager.prototype.musicBgSwitch = function () {
        var mb = cc.sys.localStorage.getItem(MUSICBG);
        if (mb == null) {
            return true;
        }
        return false;
    };
    localDataManager.prototype.setMusicBg = function (mb) {
        if (mb) {
            cc.sys.localStorage.removeItem(MUSICBG);
        }
        else {
            cc.sys.localStorage.setItem(MUSICBG, String(mb));
        }
    };
    localDataManager.prototype.dmSwitch = function () {
        var dm = cc.sys.localStorage.getItem(DMSWICTH);
        if (dm == null) {
            return true;
        }
        return false;
    };
    localDataManager.prototype.setDMSwicth = function (dm) {
        if (dm) {
            cc.sys.localStorage.removeItem(DMSWICTH);
        }
        else {
            cc.sys.localStorage.setItem(DMSWICTH, String(dm));
        }
    };
    localDataManager.prototype.guideShow = function () {
        var gs = cc.sys.localStorage.getItem(GUIDESHOW);
        if (gs == null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.setGuideShow = function () {
        cc.sys.localStorage.setItem(GUIDESHOW, "1");
    };
    localDataManager.prototype.getTargetLevel = function () {
        var targetLevel = cc.sys.localStorage.getItem(TARGETLEVEL);
        if (targetLevel != null) {
            return Number(targetLevel);
        }
        return 4;
    };
    localDataManager.prototype.setTargetLevel = function (tLvel) {
        cc.sys.localStorage.setItem(TARGETLEVEL, String(tLvel));
    };
    localDataManager.prototype.musicEfficSwitch = function () {
        var me = cc.sys.localStorage.getItem(MUSICEFFECT);
        if (me == null) {
            return true;
        }
        return false;
    };
    localDataManager.prototype.setMusicEffect = function (me) {
        if (me) {
            cc.sys.localStorage.removeItem(MUSICEFFECT);
        }
        else {
            cc.sys.localStorage.setItem(MUSICEFFECT, String(me));
        }
    };
    localDataManager._Manager = null;
    return localDataManager;
}());
exports.default = localDataManager;

cc._RF.pop();