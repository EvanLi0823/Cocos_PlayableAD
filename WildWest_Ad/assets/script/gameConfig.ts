import LocalAssetsManager from "./LocalAssetsManager";
import localDataManager from "./localDataManager";
import JsbSdkScript from "./PlatformInteraction/JsbSdkScript";

export enum PlayableAdType {
   AppLovin = "AppLovin",
   Mtg = "Mtg",
}

export enum LanguageType {
   English  = "English",
   /**印尼语 */
   IN = "IN",
   /**葡萄牙 */
   PT = "PT",
   /** 韩语 */
   KO = "KO",
   /** 菲律宾语 */
   FIL = "FIL",
   /** 越南语 */
   VN = "VN",
   /** 印地语 */
   HI = "HI",
   /** 俄语 */
   RU = "RU",
}

export enum Country{
   /**印尼 */
   ID = "id",
   /**巴西 */
   BR = "br",
   /**巴基斯坦 */
   PK = "pk",
   /**英语*/
   EN = "en",
   /**韩国 */
   KR = "kr",
   /**俄罗斯 */
   RU = "ru",
   /**菲律宾 */
   PH= "ph",
   /**越南 */
   VN = "vn",   
   /**印度 */
   IN = "in",
}

class MoneyParam {
   static EN = ["money", "redbagfly"] //多张，单张
   static PT = ["moneypt", "redbagflypt"]//多张，单张
   static ID = ["moneyID", "redbagflyID"]//多张，单张
   static PK = ["moneyPK", "redbagflyPK"]//多张，单张
   static KR = ["moneyKR", "redbagflyKR"]//多张，单张 
}

export default class gameConfig {

   static IS_GAME_MUSICBG = true;  //是否开启背景音乐
   static IS_GAME_MUSICEFFECT = true; //是否开启音效果  
   static dmSwitch = true;
   static isWhiteBag = true;

   static isShowGuide = false;

   static isNewer:boolean = true;

   static isAnti:boolean = false;

   static targetLevel = 0;

   static commonParm = null;


   static setConfig() { 
      this.IS_GAME_MUSICBG = localDataManager.shareManager().musicBgSwitch();
      this.IS_GAME_MUSICEFFECT = localDataManager.shareManager().musicEfficSwitch();
      this.dmSwitch = localDataManager.shareManager().dmSwitch();
      this.isShowGuide = localDataManager.shareManager().guideShow(); 
      this.targetLevel =  localDataManager.shareManager().getTargetLevel(); 

      this.isNewer = localDataManager.shareManager().getIsNewer();

      let jsb =  JsbSdkScript.Instance;
      window["JstSDK"] = jsb;  
      
      if (gameConfig.isShowGuide == false) {
         localDataManager.shareManager().setScoreCount(150);
      }
      let commonParm = JsbSdkScript.getCommonParm();
      if (typeof commonParm === "string") {
         commonParm = JSON.parse(commonParm)
         console.log("看看android 给的配置",commonParm)
      }
      this.commonParm = commonParm;
      this.isWhiteBag = JsbSdkScript.requestIsWhiteBao()
      // LocalAssetsManager.loadCommonAssets();
   }

   static saveNewer(){
      this.isNewer = false;
      localDataManager.shareManager().setIsNewer();
   }

   private static moneyCache = {};
   static setMoneySp(money:cc.Sprite,index: number = 0){
      if (cc.isValid(money)){
         let moneytype;
         let country = this.getCountry
         if(country == "br"){
            moneytype = ["moneypt","redbagflypt"][index];
         }else if(country == "id"){
            moneytype = ["moneyID","redbagflyID"][index];
         }else if(country == "pk"){
            moneytype = ["moneyPK","redbagflyPK"][index];
         }else if(country == "kr"){
            moneytype = ["moneyKR","redbagflyKR"][index];
         }else{
            moneytype = ["money","redbagfly"][index];
         }
         if (moneytype == undefined) return;

         if (this.moneyCache[moneytype]){
            money.spriteFrame = this.moneyCache[moneytype];
         }else{
            let respath = "img/SceneImage/" + moneytype
            if (index == 1){
               respath = "img/rewardImg/" + moneytype
            }
            cc.resources.load(respath,cc.SpriteFrame,(err,asset)=>{
               if (asset){
                  this.moneyCache[moneytype] = asset
                  if (cc.isValid(money)) money.spriteFrame = asset;
               }
            })
         }
      }
   }

   static getWord(type, parameter1?, parameter2?) {
      let Language = {
         English: {
            guide:  {
               string: `<color=#FFFFFF>Tap to Start</color>`,
               fontSize: 40,
            },
            download:"Download",
            cashOut:{
               string: "Cash Out",
               fontSize: 80,
            },
            cashOutTop:{
               string: "Cash Out",
               fontSize: 32,
            },
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         },
         KO: {
            guide:  {
               string: `<color=#FFFFFF>시작하려면 탭하세요</color>`,
               fontSize: 40,
            },
            cashOut:{
               string: "현금 인출",
               fontSize: 80,
            },
            download:"다운로드",
            cashOutTop:{
               string: "현금 인출",
               fontSize: 32,
            },
            //tipLbl: "최종 결과는 보장되지 않으며, 받을 수 있는 금액은 앱 또는 웹사이트에 게시된 규칙에 따릅니다.",
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         },
         IN: {
            guide:  {
               string: `<color=#FFFFFF>tap untuk dimulai</color>`,
               fontSize: 40,
            },
            download:"Unduh",
            cashOut:{
               string: "Tarik Tunai",
               fontSize: 80,
            },
            cashOutTop:{
               string: "Tarik Tunai",
               fontSize: 30,
            },
            // tipLbl: "Hasil akhir tidak dijamin, jumlah yang dapat Anda peroleh tergantung pada aturan yang diterbitkan di APLIKASI atau situs web.",
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         },
         PT: {
            guide:  {
               string: `<color=#FFFFFF>toque para iniciar</color>`,
               fontSize: 40,
            },
            download:"Transferir",
            cashOut:{
               string: "Sacar",
               fontSize: 80,
            },
            cashOutTop:{
               string: "Sacar",
               fontSize: 32,
            },
            // tipLbl: "O resultado final não é garantido, o valor que você pode obter está sujeito às regras publicadas no APP ou site.",
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         },
         FIL: {
            guide:  {
               string: `<color=#FFFFFF>Tap para simulan</color>`,
               fontSize: 40,
            },
            download:"I-download",
            cashOut:{
               string: "Cash Out",
               fontSize: 80,
            },
            cashOutTop:{
               string: "Cash Out",
               fontSize: 32,
            },
            // tipLbl: "Hindi garantisado ang pinal na resulta, at ang halagang makukuha mo ay nakaayon sa mga patakarang inilathala sa APP o website.",
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         },
         VN: {
            guide:  {
               string: `<color=#FFFFFF>Nhấn để bắt đầu</color>`,
               fontSize: 40,
            },
            download:"Tải xuống",
            cashOut:{
               string: "Rút tiền",
               fontSize: 80,
            },
            cashOutTop:{
               string: "Rút tiền",
               fontSize: 32,
            },
            // tipLbl: "Kết quả cuối cùng không được đảm bảo, số tiền bạn có thể nhận được phụ thuộc vào các quy tắc được công bố trên ỨNG DỤNG hoặc trang web.",
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         },
         HI: {
            guide:  {
               string: `<color=#FFFFFF>शुरू करने के लिए टैप करें</color>`,
               fontSize: 40,
            },
            download:"डाउनलोड करें",
            cashOut:{
               string: "कैश आउट",
               fontSize: 80,
            },
            cashOutTop:{
               string: "कैश आउट",
               fontSize: 32,
            },
            // tipLbl: "अंतिम परिणाम की गारंटी नहीं है, आप जितनी राशि प्राप्त कर सकते हैं, वह APP या वेबसाइट पर प्रकाशित नियमों पर निर्भर करती है।",
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         },
         RU: {
            guide:  {
               string: `<color=#FFFFFF>Нажмите, чтобы начать</color>`,
               fontSize: 40,
            },
            download:"Скачать",
            cashOut:{
               string: "Вывод средств",
               fontSize: 60,
            },
            cashOutTop:{
               string: "Вывод средств",
               fontSize: 21,
            },
            // tipLbl: "Окончательный результат не гарантируется. Сумма, которую вы можете получить, зависит от правил, опубликованных в приложении или на сайте.",
            tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
         }
         
      }
      let language = this.localLanguage;
      console.log("getWord: type", type ,language )
      try{
         return Language[language][type];
      }catch{
         console.warn("报错了",language, type)
         return {};
      }
   }

   static getUnityMoneyNumber(reward, isExchangeRate = 0) 
   {
      if (!this.isNumber(reward)) {
         return 0;
      } else {
         let money:any = this.toFix(reward);
         if (isExchangeRate == 0) {
            money = this.toFix((Number(reward) * this.getUnifyExchangeRate()));
         }
         return Number(money);
      }
   }

   static getUnifyExchangeRate(){
      let country = this.getCountry
   	let exchangeRate = 1;
   	if(country == Country.ID){
   	     exchangeRate = 15168;
   	}else if(country == Country.BR){
   	  exchangeRate = 5.14;
   	}else if(country == Country.PK){
   	  exchangeRate =275;
   	}else if(country == Country.KR){
         exchangeRate = 1290;
      }
      else if(country == Country.RU){
            exchangeRate = 100;
      }
      else if(country == Country.PH){
            exchangeRate = 56;
         }  
      else if(country == Country.VN){
            exchangeRate = 24000;
         }
      else if(country == Country.IN){
            exchangeRate = 82;
         }
      else if(country == Country.EN){
            exchangeRate = 1; 
      }
   	return exchangeRate;
   }

   static getUnifyGuidePay(index){
      let country = this.getCountry;
      let moneytype;
      if(country == Country.BR){
         moneytype = ["ic_pagBank","br_pix"][index];
      }else if(country == Country.ID){
         moneytype = ["ic_dana","id_ovo"][index];
      }else if(country == Country.PK){
         moneytype = ["ic_paisa","ic_jazz"][index];
      }else if(country == Country.KR){
         moneytype = ["ic_kakaopay","ic_jazz"][index];
      }else if(country == Country.RU){
         moneytype = ["ic_webmoney","ic_tinkoff"][index];
      }else if(country == Country.PH){
         moneytype = ["ic_gcash","ic_paymaya"][index];
      }else if(country == Country.VN){
         moneytype = ["ic_momo","ic_zalopay"][index];
      }else if(country == Country.IN){
         moneytype = ["ic_paytm","ic_phonepe"][index];
      }
      else{
         moneytype = ["ic_paypal","ic_amazon"][index];
      }
      return moneytype
   }

   static getRedbag(index) {
      let country = this.getCountry;
      let moneytype;
      if (country == Country.ID) {
         moneytype = MoneyParam.ID[index];
      } else if (country == Country.PK) {
         moneytype = MoneyParam.PK[index];
      }else if (country == Country.BR) {
            moneytype = MoneyParam.PT[index];
      }else if (country == Country.KR) {
         moneytype = MoneyParam.KR[index];
      }else {
         moneytype = MoneyParam.EN[index];
      }
      return moneytype
   }

   static isNumber(value) {
      return !Number.isNaN(Number(value))
   }

   static getUnifyMoney(reward,isExchangeRate){
      if (!this.isNumber(reward)){
         return 0 ;
      }else{
         let money:any =  this.toFix(reward);
         if(isExchangeRate == 0){
            money =this.toFix((Number(reward)*this.getUnifyExchangeRate()));
         }
         let country = this.getCountry
         if(money> 1000){
            if(country == Country.ID){
               money =  this.toFix(money/1000)+"k";
            }
         }
         return money;
      }
   }

   static toFix(reward){
	   return  Number(reward).toFixed(2)
   }

   static getUnifyCurrency(){
      let country = this.getCountry
      let currency = "$"
      if(country == Country.ID){
        currency = "Rp";
      }else if(country == Country.BR){
        currency = "R$";
      }else if(country == Country.PK){
        currency = "P.Rs";
      }else if(country == Country.KR){
         currency = "₩";
      }else if(country == Country.RU){
         currency = "₽";
      }else if(country == Country.PH){
         currency = "₱";
      }else if(country == Country.VN){
         currency = "₫";
      }else if(country == Country.IN){
         currency = "₹";
      }
      return currency;
   }


   static get getCountry(){
      return Country.BR;
   }

   static get getPlayableAdType(){
      return PlayableAdType.Mtg;
   }

   static get localLanguage() {
      let country = this.getCountry
      let language = LanguageType.English;
      if(country == Country.ID){
         language = LanguageType.IN;
      }else if(country == Country.BR){
         language = LanguageType.PT;
      }else if(country == Country.PK){
         language = LanguageType.PT;
      }else if(country == Country.KR){
         language = LanguageType.KO;
      }else if(country == Country.RU){
         language = LanguageType.RU;
      }else if(country == Country.PH){
         language = LanguageType.FIL;
      }else if(country == Country.VN){
         language = LanguageType.VN;
      }else if(country == Country.IN){
         language = LanguageType.HI;
      }
      return language;
   }


   static changeMusicbg(){
      this.IS_GAME_MUSICBG = !this.IS_GAME_MUSICBG;
      localDataManager.shareManager().setMusicBg(this.IS_GAME_MUSICBG);
   }

   static changeEffect(){
      this.IS_GAME_MUSICEFFECT = !this.IS_GAME_MUSICEFFECT;
      localDataManager.shareManager().setMusicEffect(this.IS_GAME_MUSICEFFECT);
   }

   static changeDmSwitch(){
      this.dmSwitch = !this.dmSwitch;
      localDataManager.shareManager().setDMSwicth(this.dmSwitch);
   }

   static setGuideShow(){
      localDataManager.shareManager().setGuideShow();
   }

   static setTargetLevel(level:number) {
      this.targetLevel = level;
      localDataManager.shareManager().setTargetLevel(level);
   }
}

export const JuiceItem = cc.Class({
   name: 'JuiceItem',
   properties: {
       particle: cc.SpriteFrame,
       circle: cc.SpriteFrame,
       slash: cc.SpriteFrame,
   }
});

export interface JuiceItemType{
   particle: cc.SpriteFrame
   circle: cc.SpriteFrame
   slash: cc.SpriteFrame
}
