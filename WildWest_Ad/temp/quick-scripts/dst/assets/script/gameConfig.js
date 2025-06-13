
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4040a0iaJCLoZzaUiRggmH', 'gameConfig');
// script/gameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuiceItem = exports.Country = exports.LanguageType = void 0;
var localDataManager_1 = require("./localDataManager");
var JsbSdkScript_1 = require("./PlatformInteraction/JsbSdkScript");
var LanguageType;
(function (LanguageType) {
    LanguageType["English"] = "English";
    /**印尼语 */
    LanguageType["IN"] = "IN";
    /**葡萄牙 */
    LanguageType["PT"] = "PT";
    /** 韩语 */
    LanguageType["KO"] = "KO";
    /** 菲律宾语 */
    LanguageType["FIL"] = "FIL";
    /** 越南语 */
    LanguageType["VN"] = "VN";
    /** 印地语 */
    LanguageType["HI"] = "HI";
    /** 俄语 */
    LanguageType["RU"] = "RU";
})(LanguageType = exports.LanguageType || (exports.LanguageType = {}));
var Country;
(function (Country) {
    /**印尼 */
    Country["ID"] = "id";
    /**巴西 */
    Country["BR"] = "br";
    /**巴基斯坦 */
    Country["PK"] = "pk";
    /**英语*/
    Country["EN"] = "en";
    /**韩国 */
    Country["KR"] = "kr";
    /**俄罗斯 */
    Country["RU"] = "ru";
    /**菲律宾 */
    Country["PH"] = "ph";
    /**越南 */
    Country["VN"] = "vn";
    /**印度 */
    Country["IN"] = "in";
})(Country = exports.Country || (exports.Country = {}));
var MoneyParam = /** @class */ (function () {
    function MoneyParam() {
    }
    MoneyParam.EN = ["money", "redbagfly"]; //多张，单张
    MoneyParam.PT = ["moneypt", "redbagflypt"]; //多张，单张
    MoneyParam.ID = ["moneyID", "redbagflyID"]; //多张，单张
    MoneyParam.PK = ["moneyPK", "redbagflyPK"]; //多张，单张
    MoneyParam.KR = ["moneyKR", "redbagflyKR"]; //多张，单张 
    return MoneyParam;
}());
var gameConfig = /** @class */ (function () {
    function gameConfig() {
    }
    gameConfig.setConfig = function () {
        this.IS_GAME_MUSICBG = localDataManager_1.default.shareManager().musicBgSwitch();
        this.IS_GAME_MUSICEFFECT = localDataManager_1.default.shareManager().musicEfficSwitch();
        this.dmSwitch = localDataManager_1.default.shareManager().dmSwitch();
        this.isShowGuide = localDataManager_1.default.shareManager().guideShow();
        this.targetLevel = localDataManager_1.default.shareManager().getTargetLevel();
        this.isNewer = localDataManager_1.default.shareManager().getIsNewer();
        var jsb = JsbSdkScript_1.default.Instance;
        window["JstSDK"] = jsb;
        if (gameConfig.isShowGuide == false) {
            localDataManager_1.default.shareManager().setScoreCount(150);
        }
        var commonParm = JsbSdkScript_1.default.getCommonParm();
        if (typeof commonParm === "string") {
            commonParm = JSON.parse(commonParm);
            console.log("看看android 给的配置", commonParm);
        }
        this.commonParm = commonParm;
        this.isWhiteBag = JsbSdkScript_1.default.requestIsWhiteBao();
        // LocalAssetsManager.loadCommonAssets();
    };
    gameConfig.saveNewer = function () {
        this.isNewer = false;
        localDataManager_1.default.shareManager().setIsNewer();
    };
    gameConfig.setMoneySp = function (money, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (cc.isValid(money)) {
            var moneytype_1;
            var country = this.getCountry;
            if (country == "br") {
                moneytype_1 = ["moneypt", "redbagflypt"][index];
            }
            else if (country == "id") {
                moneytype_1 = ["moneyID", "redbagflyID"][index];
            }
            else if (country == "pk") {
                moneytype_1 = ["moneyPK", "redbagflyPK"][index];
            }
            else if (country == "kr") {
                moneytype_1 = ["moneyKR", "redbagflyKR"][index];
            }
            else {
                moneytype_1 = ["money", "redbagfly"][index];
            }
            if (moneytype_1 == undefined)
                return;
            if (this.moneyCache[moneytype_1]) {
                money.spriteFrame = this.moneyCache[moneytype_1];
            }
            else {
                var respath = "img/SceneImage/" + moneytype_1;
                if (index == 1) {
                    respath = "img/rewardImg/" + moneytype_1;
                }
                cc.resources.load(respath, cc.SpriteFrame, function (err, asset) {
                    if (asset) {
                        _this.moneyCache[moneytype_1] = asset;
                        if (cc.isValid(money))
                            money.spriteFrame = asset;
                    }
                });
            }
        }
    };
    gameConfig.getWord = function (type, parameter1, parameter2) {
        var Language = {
            English: {
                guide: {
                    string: "<color=#FFFFFF>Tap to Start</color>",
                    fontSize: 40,
                },
                download: "Download",
                cashOut: {
                    string: "Cash Out",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Cash Out",
                    fontSize: 32,
                },
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            KO: {
                guide: {
                    string: "<color=#FFFFFF>\uC2DC\uC791\uD558\uB824\uBA74 \uD0ED\uD558\uC138\uC694</color>",
                    fontSize: 40,
                },
                cashOut: {
                    string: "현금 인출",
                    fontSize: 80,
                },
                download: "다운로드",
                cashOutTop: {
                    string: "현금 인출",
                    fontSize: 32,
                },
                tipLbl: "최종 결과는 보장되지 않으며, 받을 수 있는 금액은 앱 또는 웹사이트에 게시된 규칙에 따릅니다.",
            },
            IN: {
                guide: {
                    string: "<color=#FFFFFF>tap untuk dimulai</color>",
                    fontSize: 40,
                },
                download: "Unduh",
                cashOut: {
                    string: "Tarik Tunai",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Tarik Tunai",
                    fontSize: 30,
                },
                tipLbl: "Hasil akhir tidak dijamin, jumlah yang dapat Anda peroleh tergantung pada aturan yang diterbitkan di APLIKASI atau situs web.",
            },
            PT: {
                guide: {
                    string: "<color=#FFFFFF>toque para iniciar</color>",
                    fontSize: 40,
                },
                download: "Transferir",
                cashOut: {
                    string: "Sacar",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Sacar",
                    fontSize: 32,
                },
                tipLbl: "O resultado final não é garantido, o valor que você pode obter está sujeito às regras publicadas no APP ou site.",
            },
            FIL: {
                guide: {
                    string: "<color=#FFFFFF>Tap para simulan</color>",
                    fontSize: 40,
                },
                download: "I-download",
                cashOut: {
                    string: "Cash Out",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Cash Out",
                    fontSize: 32,
                },
                tipLbl: "Hindi garantisado ang pinal na resulta, at ang halagang makukuha mo ay nakaayon sa mga patakarang inilathala sa APP o website.",
            },
            VN: {
                guide: {
                    string: "<color=#FFFFFF>Nh\u1EA5n \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u</color>",
                    fontSize: 40,
                },
                download: "Tải xuống",
                cashOut: {
                    string: "Rút tiền",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Rút tiền",
                    fontSize: 32,
                },
                tipLbl: "Kết quả cuối cùng không được đảm bảo, số tiền bạn có thể nhận được phụ thuộc vào các quy tắc được công bố trên ỨNG DỤNG hoặc trang web.",
            },
            HI: {
                guide: {
                    string: "<color=#FFFFFF>\u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902</color>",
                    fontSize: 40,
                },
                download: "डाउनलोड करें",
                cashOut: {
                    string: "कैश आउट",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "कैश आउट",
                    fontSize: 32,
                },
                tipLbl: "अंतिम परिणाम की गारंटी नहीं है, आप जितनी राशि प्राप्त कर सकते हैं, वह APP या वेबसाइट पर प्रकाशित नियमों पर निर्भर करती है।",
            },
            RU: {
                guide: {
                    string: "<color=#FFFFFF>\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C</color>",
                    fontSize: 40,
                },
                download: "Скачать",
                cashOut: {
                    string: "Вывод средств",
                    fontSize: 60,
                },
                cashOutTop: {
                    string: "Вывод средств",
                    fontSize: 21,
                },
                tipLbl: "Окончательный результат не гарантируется. Сумма, которую вы можете получить, зависит от правил, опубликованных в приложении или на сайте.",
            }
        };
        var language = this.localLanguage;
        console.log("getWord: type", type, language);
        try {
            return Language[language][type];
        }
        catch (_a) {
            console.warn("报错了", language, type);
            return {};
        }
    };
    gameConfig.getUnityMoneyNumber = function (reward, isExchangeRate) {
        if (isExchangeRate === void 0) { isExchangeRate = 0; }
        if (!this.isNumber(reward)) {
            return 0;
        }
        else {
            var money = this.toFix(reward);
            if (isExchangeRate == 0) {
                money = this.toFix((Number(reward) * this.getUnifyExchangeRate()));
            }
            return Number(money);
        }
    };
    gameConfig.getUnifyExchangeRate = function () {
        var country = this.getCountry;
        var exchangeRate = 1;
        if (country == Country.ID) {
            exchangeRate = 15168;
        }
        else if (country == Country.BR) {
            exchangeRate = 5.14;
        }
        else if (country == Country.PK) {
            exchangeRate = 275;
        }
        else if (country == Country.KR) {
            exchangeRate = 1290;
        }
        else if (country == Country.RU) {
            exchangeRate = 100;
        }
        else if (country == Country.PH) {
            exchangeRate = 56;
        }
        else if (country == Country.VN) {
            exchangeRate = 24000;
        }
        else if (country == Country.IN) {
            exchangeRate = 82;
        }
        else if (country == Country.EN) {
            exchangeRate = 1;
        }
        return exchangeRate;
    };
    gameConfig.getUnifyGuidePay = function (index) {
        var country = this.getCountry;
        var moneytype;
        if (country == Country.BR) {
            moneytype = ["ic_pagBank", "br_pix"][index];
        }
        else if (country == Country.ID) {
            moneytype = ["ic_dana", "id_ovo"][index];
        }
        else if (country == Country.PK) {
            moneytype = ["ic_paisa", "ic_jazz"][index];
        }
        else if (country == Country.KR) {
            moneytype = ["ic_kakaopay", "ic_jazz"][index];
        }
        else if (country == Country.RU) {
            moneytype = ["ic_webmoney", "ic_tinkoff"][index];
        }
        else if (country == Country.PH) {
            moneytype = ["ic_gcash", "ic_paymaya"][index];
        }
        else if (country == Country.VN) {
            moneytype = ["ic_momo", "ic_zalopay"][index];
        }
        else if (country == Country.IN) {
            moneytype = ["ic_paytm", "ic_phonepe"][index];
        }
        else {
            moneytype = ["ic_paypal", "ic_amazon"][index];
        }
        return moneytype;
    };
    gameConfig.getRedbag = function (index) {
        var country = this.getCountry;
        var moneytype;
        if (country == Country.ID) {
            moneytype = MoneyParam.ID[index];
        }
        else if (country == Country.PK) {
            moneytype = MoneyParam.PK[index];
        }
        else if (country == Country.BR) {
            moneytype = MoneyParam.PT[index];
        }
        else if (country == Country.KR) {
            moneytype = MoneyParam.KR[index];
        }
        else {
            moneytype = MoneyParam.EN[index];
        }
        return moneytype;
    };
    gameConfig.isNumber = function (value) {
        return !Number.isNaN(Number(value));
    };
    gameConfig.getUnifyMoney = function (reward, isExchangeRate) {
        if (!this.isNumber(reward)) {
            return 0;
        }
        else {
            var money = this.toFix(reward);
            if (isExchangeRate == 0) {
                money = this.toFix((Number(reward) * this.getUnifyExchangeRate()));
            }
            var country = this.getCountry;
            if (money > 1000) {
                if (country == Country.ID) {
                    money = this.toFix(money / 1000) + "k";
                }
            }
            return money;
        }
    };
    gameConfig.toFix = function (reward) {
        return Number(reward).toFixed(2);
    };
    gameConfig.getUnifyCurrency = function () {
        var country = this.getCountry;
        var currency = "$";
        if (country == Country.ID) {
            currency = "Rp";
        }
        else if (country == Country.BR) {
            currency = "R$";
        }
        else if (country == Country.PK) {
            currency = "P.Rs";
        }
        else if (country == Country.KR) {
            currency = "₩";
        }
        else if (country == Country.RU) {
            currency = "₽";
        }
        else if (country == Country.PH) {
            currency = "₱";
        }
        else if (country == Country.VN) {
            currency = "₫";
        }
        else if (country == Country.IN) {
            currency = "₹";
        }
        return currency;
    };
    Object.defineProperty(gameConfig, "getCountry", {
        get: function () {
            return Country.EN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(gameConfig, "localLanguage", {
        get: function () {
            var country = this.getCountry;
            var language = LanguageType.English;
            if (country == Country.ID) {
                language = LanguageType.IN;
            }
            else if (country == Country.BR) {
                language = LanguageType.PT;
            }
            else if (country == Country.PK) {
                language = LanguageType.PT;
            }
            else if (country == Country.KR) {
                language = LanguageType.KO;
            }
            else if (country == Country.RU) {
                language = LanguageType.RU;
            }
            else if (country == Country.PH) {
                language = LanguageType.FIL;
            }
            else if (country == Country.VN) {
                language = LanguageType.VN;
            }
            else if (country == Country.IN) {
                language = LanguageType.HI;
            }
            return language;
        },
        enumerable: false,
        configurable: true
    });
    gameConfig.changeMusicbg = function () {
        this.IS_GAME_MUSICBG = !this.IS_GAME_MUSICBG;
        localDataManager_1.default.shareManager().setMusicBg(this.IS_GAME_MUSICBG);
    };
    gameConfig.changeEffect = function () {
        this.IS_GAME_MUSICEFFECT = !this.IS_GAME_MUSICEFFECT;
        localDataManager_1.default.shareManager().setMusicEffect(this.IS_GAME_MUSICEFFECT);
    };
    gameConfig.changeDmSwitch = function () {
        this.dmSwitch = !this.dmSwitch;
        localDataManager_1.default.shareManager().setDMSwicth(this.dmSwitch);
    };
    gameConfig.setGuideShow = function () {
        localDataManager_1.default.shareManager().setGuideShow();
    };
    gameConfig.setTargetLevel = function (level) {
        this.targetLevel = level;
        localDataManager_1.default.shareManager().setTargetLevel(level);
    };
    gameConfig.IS_GAME_MUSICBG = true; //是否开启背景音乐
    gameConfig.IS_GAME_MUSICEFFECT = true; //是否开启音效果  
    gameConfig.dmSwitch = true;
    gameConfig.isWhiteBag = true;
    gameConfig.isShowGuide = false;
    gameConfig.isNewer = true;
    gameConfig.isAnti = false;
    gameConfig.targetLevel = 0;
    gameConfig.commonParm = null;
    gameConfig.moneyCache = {};
    return gameConfig;
}());
exports.default = gameConfig;
exports.JuiceItem = cc.Class({
    name: 'JuiceItem',
    properties: {
        particle: cc.SpriteFrame,
        circle: cc.SpriteFrame,
        slash: cc.SpriteFrame,
    }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsbUVBQThEO0FBRTlELElBQVksWUFnQlg7QUFoQkQsV0FBWSxZQUFZO0lBQ3JCLG1DQUFvQixDQUFBO0lBQ3BCLFNBQVM7SUFDVCx5QkFBUyxDQUFBO0lBQ1QsU0FBUztJQUNULHlCQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1QseUJBQVMsQ0FBQTtJQUNULFdBQVc7SUFDWCwyQkFBVyxDQUFBO0lBQ1gsVUFBVTtJQUNWLHlCQUFTLENBQUE7SUFDVCxVQUFVO0lBQ1YseUJBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCx5QkFBUyxDQUFBO0FBQ1osQ0FBQyxFQWhCVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWdCdkI7QUFFRCxJQUFZLE9BbUJYO0FBbkJELFdBQVksT0FBTztJQUNoQixRQUFRO0lBQ1Isb0JBQVMsQ0FBQTtJQUNULFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsVUFBVTtJQUNWLG9CQUFTLENBQUE7SUFDVCxPQUFPO0lBQ1Asb0JBQVMsQ0FBQTtJQUNULFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsU0FBUztJQUNULG9CQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1Qsb0JBQVEsQ0FBQTtJQUNSLFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7QUFDWixDQUFDLEVBbkJXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQW1CbEI7QUFFRDtJQUFBO0lBTUEsQ0FBQztJQUxTLGFBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQSxDQUFDLE9BQU87SUFDbkMsYUFBRSxHQUFHLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFBLENBQUEsT0FBTztJQUN0QyxhQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUEsQ0FB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SUFBSSxDQUFDO0lBRXZCLGlCQUFNLEdBQVcsS0FBSyxDQUFDO0lBRXZCLHNCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBRWhCLHFCQUFVLEdBQUcsSUFBSSxDQUFDO0lBaUNWLHFCQUFVLEdBQUcsRUFBRSxDQUFDO0lBNldsQyxpQkFBQztDQTdaRCxBQTZaQyxJQUFBO2tCQTdab0IsVUFBVTtBQStabEIsUUFBQSxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUMvQixJQUFJLEVBQUUsV0FBVztJQUNqQixVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDeEIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXO1FBQ3RCLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVztLQUN4QjtDQUNILENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhbEFzc2V0c01hbmFnZXIgZnJvbSBcIi4vTG9jYWxBc3NldHNNYW5hZ2VyXCI7XG5pbXBvcnQgbG9jYWxEYXRhTWFuYWdlciBmcm9tIFwiLi9sb2NhbERhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgSnNiU2RrU2NyaXB0IGZyb20gXCIuL1BsYXRmb3JtSW50ZXJhY3Rpb24vSnNiU2RrU2NyaXB0XCI7XG5cbmV4cG9ydCBlbnVtIExhbmd1YWdlVHlwZSB7XG4gICBFbmdsaXNoICA9IFwiRW5nbGlzaFwiLFxuICAgLyoq5Y2w5bC86K+tICovXG4gICBJTiA9IFwiSU5cIixcbiAgIC8qKuiRoeiQhOeJmSAqL1xuICAgUFQgPSBcIlBUXCIsXG4gICAvKiog6Z+p6K+tICovXG4gICBLTyA9IFwiS09cIixcbiAgIC8qKiDoj7Llvovlrr7or60gKi9cbiAgIEZJTCA9IFwiRklMXCIsXG4gICAvKiog6LaK5Y2X6K+tICovXG4gICBWTiA9IFwiVk5cIixcbiAgIC8qKiDljbDlnLDor60gKi9cbiAgIEhJID0gXCJISVwiLFxuICAgLyoqIOS/hOivrSAqL1xuICAgUlUgPSBcIlJVXCIsXG59XG5cbmV4cG9ydCBlbnVtIENvdW50cnl7XG4gICAvKirljbDlsLwgKi9cbiAgIElEID0gXCJpZFwiLFxuICAgLyoq5be06KW/ICovXG4gICBCUiA9IFwiYnJcIixcbiAgIC8qKuW3tOWfuuaWr+WdpiAqL1xuICAgUEsgPSBcInBrXCIsXG4gICAvKiroi7Hor60qL1xuICAgRU4gPSBcImVuXCIsXG4gICAvKirpn6nlm70gKi9cbiAgIEtSID0gXCJrclwiLFxuICAgLyoq5L+E572X5pavICovXG4gICBSVSA9IFwicnVcIixcbiAgIC8qKuiPsuW+i+WuviAqL1xuICAgUEg9IFwicGhcIixcbiAgIC8qKui2iuWNlyAqL1xuICAgVk4gPSBcInZuXCIsICAgXG4gICAvKirljbDluqYgKi9cbiAgIElOID0gXCJpblwiLFxufVxuXG5jbGFzcyBNb25leVBhcmFtIHtcbiAgIHN0YXRpYyBFTiA9IFtcIm1vbmV5XCIsIFwicmVkYmFnZmx5XCJdIC8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgUFQgPSBbXCJtb25leXB0XCIsIFwicmVkYmFnZmx5cHRcIl0vL+WkmuW8oO+8jOWNleW8oFxuICAgc3RhdGljIElEID0gW1wibW9uZXlJRFwiLCBcInJlZGJhZ2ZseUlEXCJdLy/lpJrlvKDvvIzljZXlvKBcbiAgIHN0YXRpYyBQSyA9IFtcIm1vbmV5UEtcIiwgXCJyZWRiYWdmbHlQS1wiXS8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgS1IgPSBbXCJtb25leUtSXCIsIFwicmVkYmFnZmx5S1JcIl0vL+WkmuW8oO+8jOWNleW8oCBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZUNvbmZpZyB7XG5cbiAgIHN0YXRpYyBJU19HQU1FX01VU0lDQkcgPSB0cnVlOyAgLy/mmK/lkKblvIDlkK/og4zmma/pn7PkuZBcbiAgIHN0YXRpYyBJU19HQU1FX01VU0lDRUZGRUNUID0gdHJ1ZTsgLy/mmK/lkKblvIDlkK/pn7PmlYjmnpwgIFxuICAgc3RhdGljIGRtU3dpdGNoID0gdHJ1ZTtcbiAgIHN0YXRpYyBpc1doaXRlQmFnID0gdHJ1ZTtcblxuICAgc3RhdGljIGlzU2hvd0d1aWRlID0gZmFsc2U7XG5cbiAgIHN0YXRpYyBpc05ld2VyOmJvb2xlYW4gPSB0cnVlO1xuXG4gICBzdGF0aWMgaXNBbnRpOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgc3RhdGljIHRhcmdldExldmVsID0gMDtcblxuICAgc3RhdGljIGNvbW1vblBhcm0gPSBudWxsO1xuXG5cbiAgIHN0YXRpYyBzZXRDb25maWcoKSB7IFxuICAgICAgdGhpcy5JU19HQU1FX01VU0lDQkcgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLm11c2ljQmdTd2l0Y2goKTtcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkubXVzaWNFZmZpY1N3aXRjaCgpO1xuICAgICAgdGhpcy5kbVN3aXRjaCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZG1Td2l0Y2goKTtcbiAgICAgIHRoaXMuaXNTaG93R3VpZGUgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmd1aWRlU2hvdygpOyBcbiAgICAgIHRoaXMudGFyZ2V0TGV2ZWwgPSAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5nZXRUYXJnZXRMZXZlbCgpOyBcblxuICAgICAgdGhpcy5pc05ld2VyID0gbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5nZXRJc05ld2VyKCk7XG5cbiAgICAgIGxldCBqc2IgPSAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlO1xuICAgICAgd2luZG93W1wiSnN0U0RLXCJdID0ganNiOyAgXG4gICAgICBcbiAgICAgIGlmIChnYW1lQ29uZmlnLmlzU2hvd0d1aWRlID09IGZhbHNlKSB7XG4gICAgICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldFNjb3JlQ291bnQoMTUwKTtcbiAgICAgIH1cbiAgICAgIGxldCBjb21tb25QYXJtID0gSnNiU2RrU2NyaXB0LmdldENvbW1vblBhcm0oKTtcbiAgICAgIGlmICh0eXBlb2YgY29tbW9uUGFybSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgY29tbW9uUGFybSA9IEpTT04ucGFyc2UoY29tbW9uUGFybSlcbiAgICAgICAgIGNvbnNvbGUubG9nKFwi55yL55yLYW5kcm9pZCDnu5nnmoTphY3nva5cIixjb21tb25QYXJtKVxuICAgICAgfVxuICAgICAgdGhpcy5jb21tb25QYXJtID0gY29tbW9uUGFybTtcbiAgICAgIHRoaXMuaXNXaGl0ZUJhZyA9IEpzYlNka1NjcmlwdC5yZXF1ZXN0SXNXaGl0ZUJhbygpXG4gICAgICAvLyBMb2NhbEFzc2V0c01hbmFnZXIubG9hZENvbW1vbkFzc2V0cygpO1xuICAgfVxuXG4gICBzdGF0aWMgc2F2ZU5ld2VyKCl7XG4gICAgICB0aGlzLmlzTmV3ZXIgPSBmYWxzZTtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0SXNOZXdlcigpO1xuICAgfVxuXG4gICBwcml2YXRlIHN0YXRpYyBtb25leUNhY2hlID0ge307XG4gICBzdGF0aWMgc2V0TW9uZXlTcChtb25leTpjYy5TcHJpdGUsaW5kZXg6IG51bWJlciA9IDApe1xuICAgICAgaWYgKGNjLmlzVmFsaWQobW9uZXkpKXtcbiAgICAgICAgIGxldCBtb25leXR5cGU7XG4gICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgICAgICAgaWYoY291bnRyeSA9PSBcImJyXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlwdFwiLFwicmVkYmFnZmx5cHRcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcImlkXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlJRFwiLFwicmVkYmFnZmx5SURcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcInBrXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlQS1wiLFwicmVkYmFnZmx5UEtcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcImtyXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlLUlwiLFwicmVkYmFnZmx5S1JcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBbXCJtb25leVwiLFwicmVkYmFnZmx5XCJdW2luZGV4XTtcbiAgICAgICAgIH1cbiAgICAgICAgIGlmIChtb25leXR5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgIGlmICh0aGlzLm1vbmV5Q2FjaGVbbW9uZXl0eXBlXSl7XG4gICAgICAgICAgICBtb25leS5zcHJpdGVGcmFtZSA9IHRoaXMubW9uZXlDYWNoZVttb25leXR5cGVdO1xuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgcmVzcGF0aCA9IFwiaW1nL1NjZW5lSW1hZ2UvXCIgKyBtb25leXR5cGVcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAxKXtcbiAgICAgICAgICAgICAgIHJlc3BhdGggPSBcImltZy9yZXdhcmRJbWcvXCIgKyBtb25leXR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc3BhdGgsY2MuU3ByaXRlRnJhbWUsKGVycixhc3NldCk9PntcbiAgICAgICAgICAgICAgIGlmIChhc3NldCl7XG4gICAgICAgICAgICAgICAgICB0aGlzLm1vbmV5Q2FjaGVbbW9uZXl0eXBlXSA9IGFzc2V0XG4gICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChtb25leSkpIG1vbmV5LnNwcml0ZUZyYW1lID0gYXNzZXQ7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0V29yZCh0eXBlLCBwYXJhbWV0ZXIxPywgcGFyYW1ldGVyMj8pIHtcbiAgICAgIGxldCBMYW5ndWFnZSA9IHtcbiAgICAgICAgIEVuZ2xpc2g6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+VGFwIHRvIFN0YXJ0PC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiRG93bmxvYWRcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIkNhc2ggT3V0XCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiQ2FzaCBPdXRcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIEtPOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPuyLnOyeke2VmOugpOuptCDtg63tlZjshLjsmpQ8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi7ZiE6riIIOyduOy2nFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwi64uk7Jq066Gc65OcXCIsXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLtmITquIgg7J247LacXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlwTGJsOiBcIuy1nOyihSDqsrDqs7zripQg67O07J6l65CY7KeAIOyViuycvOupsCwg67Cb7J2EIOyImCDsnojripQg6riI7JWh7J2AIOyVsSDrmJDripQg7Ju57IKs7J207Yq47JeQIOqyjOyLnOuQnCDqt5zsuZnsl5Ag65Sw66aF64uI64ukLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIElOOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPnRhcCB1bnR1ayBkaW11bGFpPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVW5kdWhcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlRhcmlrIFR1bmFpXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiVGFyaWsgVHVuYWlcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXBMYmw6IFwiSGFzaWwgYWtoaXIgdGlkYWsgZGlqYW1pbiwganVtbGFoIHlhbmcgZGFwYXQgQW5kYSBwZXJvbGVoIHRlcmdhbnR1bmcgcGFkYSBhdHVyYW4geWFuZyBkaXRlcmJpdGthbiBkaSBBUExJS0FTSSBhdGF1IHNpdHVzIHdlYi5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBQVDoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj50b3F1ZSBwYXJhIGluaWNpYXI8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCJUcmFuc2ZlcmlyXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJTYWNhclwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlNhY2FyXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlwTGJsOiBcIk8gcmVzdWx0YWRvIGZpbmFsIG7Do28gw6kgZ2FyYW50aWRvLCBvIHZhbG9yIHF1ZSB2b2PDqiBwb2RlIG9idGVyIGVzdMOhIHN1amVpdG8gw6BzIHJlZ3JhcyBwdWJsaWNhZGFzIG5vIEFQUCBvdSBzaXRlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIEZJTDoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj5UYXAgcGFyYSBzaW11bGFuPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiSS1kb3dubG9hZFwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiQ2FzaCBPdXRcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJDYXNoIE91dFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpcExibDogXCJIaW5kaSBnYXJhbnRpc2FkbyBhbmcgcGluYWwgbmEgcmVzdWx0YSwgYXQgYW5nIGhhbGFnYW5nIG1ha3VrdWhhIG1vIGF5IG5ha2FheW9uIHNhIG1nYSBwYXRha2FyYW5nIGluaWxhdGhhbGEgc2EgQVBQIG8gd2Vic2l0ZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBWTjoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj5OaOG6pW4gxJHhu4MgYuG6r3QgxJHhuqd1PC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVOG6o2kgeHXhu5FuZ1wiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiUsO6dCB0aeG7gW5cIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJSw7p0IHRp4buBblwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpcExibDogXCJL4bq/dCBxdeG6oyBjdeG7kWkgY8O5bmcga2jDtG5nIMSRxrDhu6NjIMSR4bqjbSBi4bqjbywgc+G7kSB0aeG7gW4gYuG6oW4gY8OzIHRo4buDIG5o4bqtbiDEkcaw4bujYyBwaOG7pSB0aHXhu5ljIHbDoG8gY8OhYyBxdXkgdOG6r2MgxJHGsOG7o2MgY8O0bmcgYuG7kSB0csOqbiDhu6hORyBE4bukTkcgaG/hurdjIHRyYW5nIHdlYi5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBISToge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj7gpLbgpYHgpLDgpYIg4KSV4KSw4KSo4KWHIOCkleClhyDgpLLgpL/gpI8g4KSf4KWI4KSqIOCkleCksOClh+CkgjwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIuCkoeCkvuCkieCkqOCksuCli+CkoSDgpJXgpLDgpYfgpIJcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIuCkleCliOCktiDgpIbgpIngpJ9cIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLgpJXgpYjgpLYg4KSG4KSJ4KSfXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlwTGJsOiBcIuCkheCkguCkpOCkv+CkriDgpKrgpLDgpL/gpKPgpL7gpK4g4KSV4KWAIOCkl+CkvuCksOCkguCkn+ClgCDgpKjgpLngpYDgpIIg4KS54KWILCDgpIbgpKog4KSc4KS/4KSk4KSo4KWAIOCksOCkvuCktuCkvyDgpKrgpY3gpLDgpL7gpKrgpY3gpKQg4KSV4KSwIOCkuOCkleCkpOClhyDgpLngpYjgpIIsIOCkteCkuSBBUFAg4KSv4KS+IOCkteClh+CkrOCkuOCkvuCkh+CknyDgpKrgpLAg4KSq4KWN4KSw4KSV4KS+4KS24KS/4KSkIOCkqOCkv+Ckr+CkruCli+CkgiDgpKrgpLAg4KSo4KS/4KSw4KWN4KSt4KSwIOCkleCksOCkpOClgCDgpLngpYjgpaRcIixcbiAgICAgICAgIH0sXG4gICAgICAgICBSVToge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj7QndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQvdCw0YfQsNGC0Yw8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCLQodC60LDRh9Cw0YLRjFwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi0JLRi9Cy0L7QtCDRgdGA0LXQtNGB0YLQslwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDYwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcItCS0YvQstC+0LQg0YHRgNC10LTRgdGC0LJcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXBMYmw6IFwi0J7QutC+0L3Rh9Cw0YLQtdC70YzQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCINC90LUg0LPQsNGA0LDQvdGC0LjRgNGD0LXRgtGB0Y8uINCh0YPQvNC80LAsINC60L7RgtC+0YDRg9GOINCy0Ysg0LzQvtC20LXRgtC1INC/0L7Qu9GD0YfQuNGC0YwsINC30LDQstC40YHQuNGCINC+0YIg0L/RgNCw0LLQuNC7LCDQvtC/0YPQsdC70LjQutC+0LLQsNC90L3Ri9GFINCyINC/0YDQuNC70L7QttC10L3QuNC4INC40LvQuCDQvdCwINGB0LDQudGC0LUuXCIsXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH1cbiAgICAgIGxldCBsYW5ndWFnZSA9IHRoaXMubG9jYWxMYW5ndWFnZTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0V29yZDogdHlwZVwiLCB0eXBlICxsYW5ndWFnZSApXG4gICAgICB0cnl7XG4gICAgICAgICByZXR1cm4gTGFuZ3VhZ2VbbGFuZ3VhZ2VdW3R5cGVdO1xuICAgICAgfWNhdGNoe1xuICAgICAgICAgY29uc29sZS53YXJuKFwi5oql6ZSZ5LqGXCIsbGFuZ3VhZ2UsIHR5cGUpXG4gICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBnZXRVbml0eU1vbmV5TnVtYmVyKHJld2FyZCwgaXNFeGNoYW5nZVJhdGUgPSAwKSBcbiAgIHtcbiAgICAgIGlmICghdGhpcy5pc051bWJlcihyZXdhcmQpKSB7XG4gICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBsZXQgbW9uZXk6YW55ID0gdGhpcy50b0ZpeChyZXdhcmQpO1xuICAgICAgICAgaWYgKGlzRXhjaGFuZ2VSYXRlID09IDApIHtcbiAgICAgICAgICAgIG1vbmV5ID0gdGhpcy50b0ZpeCgoTnVtYmVyKHJld2FyZCkgKiB0aGlzLmdldFVuaWZ5RXhjaGFuZ2VSYXRlKCkpKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBOdW1iZXIobW9uZXkpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlFeGNoYW5nZVJhdGUoKXtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICBcdGxldCBleGNoYW5nZVJhdGUgPSAxO1xuICAgXHRpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgXHQgICAgIGV4Y2hhbmdlUmF0ZSA9IDE1MTY4O1xuICAgXHR9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuQlIpe1xuICAgXHQgIGV4Y2hhbmdlUmF0ZSA9IDUuMTQ7XG4gICBcdH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICBcdCAgZXhjaGFuZ2VSYXRlID0yNzU7XG4gICBcdH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBleGNoYW5nZVJhdGUgPSAxMjkwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gMTAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEgpe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gNTY7XG4gICAgICAgICB9ICBcbiAgICAgIGVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlZOKXtcbiAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDI0MDAwO1xuICAgICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gODI7XG4gICAgICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5FTil7XG4gICAgICAgICAgICBleGNoYW5nZVJhdGUgPSAxOyBcbiAgICAgIH1cbiAgIFx0cmV0dXJuIGV4Y2hhbmdlUmF0ZTtcbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5R3VpZGVQYXkoaW5kZXgpe1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnk7XG4gICAgICBsZXQgbW9uZXl0eXBlO1xuICAgICAgaWYoY291bnRyeSA9PSBDb3VudHJ5LkJSKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BhZ0JhbmtcIixcImJyX3BpeFwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfZGFuYVwiLFwiaWRfb3ZvXCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19wYWlzYVwiLFwiaWNfamF6elwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuS1Ipe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfa2FrYW9wYXlcIixcImljX2phenpcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlJVKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3dlYm1vbmV5XCIsXCJpY190aW5rb2ZmXCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSCl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19nY2FzaFwiLFwiaWNfcGF5bWF5YVwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuVk4pe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfbW9tb1wiLFwiaWNfemFsb3BheVwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfcGF5dG1cIixcImljX3Bob25lcGVcIl1baW5kZXhdO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BheXBhbFwiLFwiaWNfYW1hem9uXCJdW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb25leXR5cGVcbiAgIH1cblxuICAgc3RhdGljIGdldFJlZGJhZyhpbmRleCkge1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnk7XG4gICAgICBsZXQgbW9uZXl0eXBlO1xuICAgICAgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5JRCkge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5JRFtpbmRleF07XG4gICAgICB9IGVsc2UgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5QSykge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5QS1tpbmRleF07XG4gICAgICB9ZWxzZSBpZiAoY291bnRyeSA9PSBDb3VudHJ5LkJSKSB7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBNb25leVBhcmFtLlBUW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmIChjb3VudHJ5ID09IENvdW50cnkuS1IpIHtcbiAgICAgICAgIG1vbmV5dHlwZSA9IE1vbmV5UGFyYW0uS1JbaW5kZXhdO1xuICAgICAgfWVsc2Uge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5FTltpbmRleF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9uZXl0eXBlXG4gICB9XG5cbiAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSlcbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5TW9uZXkocmV3YXJkLGlzRXhjaGFuZ2VSYXRlKXtcbiAgICAgIGlmICghdGhpcy5pc051bWJlcihyZXdhcmQpKXtcbiAgICAgICAgIHJldHVybiAwIDtcbiAgICAgIH1lbHNle1xuICAgICAgICAgbGV0IG1vbmV5OmFueSA9ICB0aGlzLnRvRml4KHJld2FyZCk7XG4gICAgICAgICBpZihpc0V4Y2hhbmdlUmF0ZSA9PSAwKXtcbiAgICAgICAgICAgIG1vbmV5ID10aGlzLnRvRml4KChOdW1iZXIocmV3YXJkKSp0aGlzLmdldFVuaWZ5RXhjaGFuZ2VSYXRlKCkpKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICAgICAgICBpZihtb25leT4gMTAwMCl7XG4gICAgICAgICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgICAgICAgbW9uZXkgPSAgdGhpcy50b0ZpeChtb25leS8xMDAwKStcImtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBtb25leTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdGljIHRvRml4KHJld2FyZCl7XG5cdCAgIHJldHVybiAgTnVtYmVyKHJld2FyZCkudG9GaXhlZCgyKVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlDdXJyZW5jeSgpe1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlcbiAgICAgIGxldCBjdXJyZW5jeSA9IFwiJFwiXG4gICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICBjdXJyZW5jeSA9IFwiUnBcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5CUil7XG4gICAgICAgIGN1cnJlbmN5ID0gXCJSJFwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBLKXtcbiAgICAgICAgY3VycmVuY3kgPSBcIlAuUnNcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oKpXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCvVwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBIKXtcbiAgICAgICAgIGN1cnJlbmN5ID0gXCLigrFcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5WTil7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oKrXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCuVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbmN5O1xuICAgfVxuXG5cbiAgIHN0YXRpYyBnZXQgZ2V0Q291bnRyeSgpe1xuICAgICAgcmV0dXJuIENvdW50cnkuRU47XG4gICB9XG5cblxuICAgc3RhdGljIGdldCBsb2NhbExhbmd1YWdlKCkge1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlcbiAgICAgIGxldCBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5FbmdsaXNoO1xuICAgICAgaWYoY291bnRyeSA9PSBDb3VudHJ5LklEKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLklOO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LkJSKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLlBUO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBLKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLlBUO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LktSKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLktPO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlJVKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLlJVO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBIKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLkZJTDtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5WTil7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5WTjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JTil7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5ISTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYW5ndWFnZTtcbiAgIH1cblxuXG4gICBzdGF0aWMgY2hhbmdlTXVzaWNiZygpe1xuICAgICAgdGhpcy5JU19HQU1FX01VU0lDQkcgPSAhdGhpcy5JU19HQU1FX01VU0lDQkc7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldE11c2ljQmcodGhpcy5JU19HQU1FX01VU0lDQkcpO1xuICAgfVxuXG4gICBzdGF0aWMgY2hhbmdlRWZmZWN0KCl7XG4gICAgICB0aGlzLklTX0dBTUVfTVVTSUNFRkZFQ1QgPSAhdGhpcy5JU19HQU1FX01VU0lDRUZGRUNUO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRNdXNpY0VmZmVjdCh0aGlzLklTX0dBTUVfTVVTSUNFRkZFQ1QpO1xuICAgfVxuXG4gICBzdGF0aWMgY2hhbmdlRG1Td2l0Y2goKXtcbiAgICAgIHRoaXMuZG1Td2l0Y2ggPSAhdGhpcy5kbVN3aXRjaDtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0RE1Td2ljdGgodGhpcy5kbVN3aXRjaCk7XG4gICB9XG5cbiAgIHN0YXRpYyBzZXRHdWlkZVNob3coKXtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0R3VpZGVTaG93KCk7XG4gICB9XG5cbiAgIHN0YXRpYyBzZXRUYXJnZXRMZXZlbChsZXZlbDpudW1iZXIpIHtcbiAgICAgIHRoaXMudGFyZ2V0TGV2ZWwgPSBsZXZlbDtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0VGFyZ2V0TGV2ZWwobGV2ZWwpO1xuICAgfVxufVxuXG5leHBvcnQgY29uc3QgSnVpY2VJdGVtID0gY2MuQ2xhc3Moe1xuICAgbmFtZTogJ0p1aWNlSXRlbScsXG4gICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgcGFydGljbGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgIGNpcmNsZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgc2xhc2g6IGNjLlNwcml0ZUZyYW1lLFxuICAgfVxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVpY2VJdGVtVHlwZXtcbiAgIHBhcnRpY2xlOiBjYy5TcHJpdGVGcmFtZVxuICAgY2lyY2xlOiBjYy5TcHJpdGVGcmFtZVxuICAgc2xhc2g6IGNjLlNwcml0ZUZyYW1lXG59XG4iXX0=