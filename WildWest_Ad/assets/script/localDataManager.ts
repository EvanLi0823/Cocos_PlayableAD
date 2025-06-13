const ISNEWER = "ISNEWER"
const PayGuider = "PayGuider"

const QIUINFO = "QIUINFO"

const TARGETLEVEL = "TARGETLEVEL"
const GUIDESHOW = "GUIDESHOW"
const DMSWICTH = "DMSWICTH"
const MUSICBG = "MUSICBG"
const MUSICEFFECT = "MUSICEFFECT"

const SYNTHETICCOUNT = "SYNTHETICCOUNT"
 
const PASSCOUNT = "PASSCOUNT"
const SCORECOUNT = "SCORECOUNT"

const MAXSCORECOUNT = "MAXSCORECOUNT"

export default class localDataManager  {

    private static _Manager = null;

    public static shareManager():localDataManager {
        if(this._Manager == null) {
            this._Manager = new localDataManager();
        }
        return this._Manager;
    }

    private constructor() {

    }
    getIsNewer():boolean {
        let qInfo = cc.sys.localStorage.getItem(ISNEWER);
        if (qInfo != null) {
            return false;
        }
        return true;
    }

    setIsNewer() {
        cc.sys.localStorage.setItem(ISNEWER, "isNewer");
    }

    isShowPayGuider():boolean {
        let qInfo = cc.sys.localStorage.getItem(ISNEWER);
        if (qInfo != null) {
            return false;
        }
        return true;
    }

    getIsPayGuider() {
        let qInfo = cc.sys.localStorage.getItem(PayGuider);
        console.log("getIsPayGuider",qInfo)
        if (qInfo != null) {
            return false;
        }
        return true;
    }

    setIsPayGuider() {
        cc.sys.localStorage.setItem(PayGuider, "isGuiderPay");
    }

    getQiuInfo():string {
        let qInfo = cc.sys.localStorage.getItem(QIUINFO);
        if (qInfo != null) {
            return qInfo;
        }
        return ``;
    }

    setQiuInfo(qInfo:string) {
        // console.log(`setQiuInfo ${qInfo}`);
        
        if(typeof qInfo == "string" && qInfo.length > 0) {
            cc.sys.localStorage.setItem(QIUINFO, qInfo);
        }
        else{
            cc.sys.localStorage.removeItem(QIUINFO);
        }
    }

    getMaxScoreCount():number {
        let mCount = cc.sys.localStorage.getItem(MAXSCORECOUNT);
        if (mCount != null) {
            return Number(mCount);
        }
        return 0;
    }

    setMaxScoreCount(mCount:number) {
        cc.sys.localStorage.setItem(MAXSCORECOUNT, String(mCount));
    }

    getScoreCount():number {
        let sCount = cc.sys.localStorage.getItem(SCORECOUNT);
        if (sCount != null) {
            return Number(sCount);
        }
        return 0;
    }

    setScoreCount(sCount:number) {
        cc.sys.localStorage.setItem(SCORECOUNT, String(sCount));
    } 

    getPassCount():number {
        let pCount = cc.sys.localStorage.getItem(PASSCOUNT);
        if (pCount != null) {
            return Number(pCount);
        }
        return 0;
    }

    setPassCount(pCount:number) {
        cc.sys.localStorage.setItem(PASSCOUNT, String(pCount));
    }

    getSyntheticCount():number {
        let sCount = cc.sys.localStorage.getItem(SYNTHETICCOUNT);
        if (sCount != null) {
            return Number(sCount);
        }
        return 0;
    }

    setSyntheticCount(sCount:number) {
        cc.sys.localStorage.setItem(SYNTHETICCOUNT, String(sCount));
    }

    musicBgSwitch() {
        let mb = cc.sys.localStorage.getItem(MUSICBG);
        if (mb == null) {
            return true;
        }
        return false;
    }

    setMusicBg(mb:boolean) {
        if(mb) {
            cc.sys.localStorage.removeItem(MUSICBG);
        }else{
            cc.sys.localStorage.setItem(MUSICBG, String(mb));
        } 
    }

    dmSwitch(){
        let dm = cc.sys.localStorage.getItem(DMSWICTH);
        if (dm == null) {
            return true;
        }
        return false;
    }

    setDMSwicth(dm:boolean) {
        if(dm) {
            cc.sys.localStorage.removeItem(DMSWICTH);
        }else{
            cc.sys.localStorage.setItem(DMSWICTH, String(dm));
        } 
    }

    guideShow(){
        let gs = cc.sys.localStorage.getItem(GUIDESHOW);
        if (gs == null) {
            return false;
        }
        return true;
    }

    setGuideShow() {
        cc.sys.localStorage.setItem(GUIDESHOW, "1");
    }

    getTargetLevel():number {
        let targetLevel = cc.sys.localStorage.getItem(TARGETLEVEL);
        if(targetLevel != null) {
            return Number(targetLevel);
        }
        return 4;
    }

    setTargetLevel(tLvel:number) {
        cc.sys.localStorage.setItem(TARGETLEVEL, String(tLvel));
    }

    musicEfficSwitch() {
        let me = cc.sys.localStorage.getItem(MUSICEFFECT);
        if (me == null) {
            return true;
        }
        return false;
    }

    setMusicEffect(me:boolean) {
        if(me) {
            cc.sys.localStorage.removeItem(MUSICEFFECT);
        }else{
            cc.sys.localStorage.setItem(MUSICEFFECT, String(me));
        }  
    }
}
