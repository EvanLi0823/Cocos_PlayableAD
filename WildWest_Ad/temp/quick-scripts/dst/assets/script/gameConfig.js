
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
                //tipLbl: "최종 결과는 보장되지 않으며, 받을 수 있는 금액은 앱 또는 웹사이트에 게시된 규칙에 따릅니다.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
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
                // tipLbl: "Hasil akhir tidak dijamin, jumlah yang dapat Anda peroleh tergantung pada aturan yang diterbitkan di APLIKASI atau situs web.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
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
                // tipLbl: "O resultado final não é garantido, o valor que você pode obter está sujeito às regras publicadas no APP ou site.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
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
                // tipLbl: "Hindi garantisado ang pinal na resulta, at ang halagang makukuha mo ay nakaayon sa mga patakarang inilathala sa APP o website.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
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
                // tipLbl: "Kết quả cuối cùng không được đảm bảo, số tiền bạn có thể nhận được phụ thuộc vào các quy tắc được công bố trên ỨNG DỤNG hoặc trang web.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
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
                // tipLbl: "अंतिम परिणाम की गारंटी नहीं है, आप जितनी राशि प्राप्त कर सकते हैं, वह APP या वेबसाइट पर प्रकाशित नियमों पर निर्भर करती है।",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
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
                // tipLbl: "Окончательный результат не гарантируется. Сумма, которую вы можете получить, зависит от правил, опубликованных в приложении или на сайте.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
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
            return Country.VN;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsbUVBQThEO0FBRTlELElBQVksWUFnQlg7QUFoQkQsV0FBWSxZQUFZO0lBQ3JCLG1DQUFvQixDQUFBO0lBQ3BCLFNBQVM7SUFDVCx5QkFBUyxDQUFBO0lBQ1QsU0FBUztJQUNULHlCQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1QseUJBQVMsQ0FBQTtJQUNULFdBQVc7SUFDWCwyQkFBVyxDQUFBO0lBQ1gsVUFBVTtJQUNWLHlCQUFTLENBQUE7SUFDVCxVQUFVO0lBQ1YseUJBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCx5QkFBUyxDQUFBO0FBQ1osQ0FBQyxFQWhCVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWdCdkI7QUFFRCxJQUFZLE9BbUJYO0FBbkJELFdBQVksT0FBTztJQUNoQixRQUFRO0lBQ1Isb0JBQVMsQ0FBQTtJQUNULFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsVUFBVTtJQUNWLG9CQUFTLENBQUE7SUFDVCxPQUFPO0lBQ1Asb0JBQVMsQ0FBQTtJQUNULFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsU0FBUztJQUNULG9CQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1Qsb0JBQVEsQ0FBQTtJQUNSLFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7QUFDWixDQUFDLEVBbkJXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQW1CbEI7QUFFRDtJQUFBO0lBTUEsQ0FBQztJQUxTLGFBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQSxDQUFDLE9BQU87SUFDbkMsYUFBRSxHQUFHLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFBLENBQUEsT0FBTztJQUN0QyxhQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUEsQ0FB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SUFDdkMsbUJBQVEsR0FBRyxJQUFJLENBQUM7SUFDaEIscUJBQVUsR0FBRyxJQUFJLENBQUM7SUFFbEIsc0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFcEIsa0JBQU8sR0FBVyxJQUFJLENBQUM7SUFFdkIsaUJBQU0sR0FBVyxLQUFLLENBQUM7SUFFdkIsc0JBQVcsR0FBRyxDQUFDLENBQUM7SUFFaEIscUJBQVUsR0FBRyxJQUFJLENBQUM7SUFpQ1YscUJBQVUsR0FBRyxFQUFFLENBQUM7SUFvWGxDLGlCQUFDO0NBcGFELEFBb2FDLElBQUE7a0JBcGFvQixVQUFVO0FBc2FsQixRQUFBLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQy9CLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBVztRQUN4QixNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDdEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXO0tBQ3hCO0NBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsQXNzZXRzTWFuYWdlciBmcm9tIFwiLi9Mb2NhbEFzc2V0c01hbmFnZXJcIjtcbmltcG9ydCBsb2NhbERhdGFNYW5hZ2VyIGZyb20gXCIuL2xvY2FsRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBKc2JTZGtTY3JpcHQgZnJvbSBcIi4vUGxhdGZvcm1JbnRlcmFjdGlvbi9Kc2JTZGtTY3JpcHRcIjtcblxuZXhwb3J0IGVudW0gTGFuZ3VhZ2VUeXBlIHtcbiAgIEVuZ2xpc2ggID0gXCJFbmdsaXNoXCIsXG4gICAvKirljbDlsLzor60gKi9cbiAgIElOID0gXCJJTlwiLFxuICAgLyoq6JGh6JCE54mZICovXG4gICBQVCA9IFwiUFRcIixcbiAgIC8qKiDpn6nor60gKi9cbiAgIEtPID0gXCJLT1wiLFxuICAgLyoqIOiPsuW+i+WuvuivrSAqL1xuICAgRklMID0gXCJGSUxcIixcbiAgIC8qKiDotorljZfor60gKi9cbiAgIFZOID0gXCJWTlwiLFxuICAgLyoqIOWNsOWcsOivrSAqL1xuICAgSEkgPSBcIkhJXCIsXG4gICAvKiog5L+E6K+tICovXG4gICBSVSA9IFwiUlVcIixcbn1cblxuZXhwb3J0IGVudW0gQ291bnRyeXtcbiAgIC8qKuWNsOWwvCAqL1xuICAgSUQgPSBcImlkXCIsXG4gICAvKirlt7Topb8gKi9cbiAgIEJSID0gXCJiclwiLFxuICAgLyoq5be05Z+65pav5Z2mICovXG4gICBQSyA9IFwicGtcIixcbiAgIC8qKuiLseivrSovXG4gICBFTiA9IFwiZW5cIixcbiAgIC8qKumfqeWbvSAqL1xuICAgS1IgPSBcImtyXCIsXG4gICAvKirkv4TnvZfmlq8gKi9cbiAgIFJVID0gXCJydVwiLFxuICAgLyoq6I+y5b6L5a6+ICovXG4gICBQSD0gXCJwaFwiLFxuICAgLyoq6LaK5Y2XICovXG4gICBWTiA9IFwidm5cIiwgICBcbiAgIC8qKuWNsOW6piAqL1xuICAgSU4gPSBcImluXCIsXG59XG5cbmNsYXNzIE1vbmV5UGFyYW0ge1xuICAgc3RhdGljIEVOID0gW1wibW9uZXlcIiwgXCJyZWRiYWdmbHlcIl0gLy/lpJrlvKDvvIzljZXlvKBcbiAgIHN0YXRpYyBQVCA9IFtcIm1vbmV5cHRcIiwgXCJyZWRiYWdmbHlwdFwiXS8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgSUQgPSBbXCJtb25leUlEXCIsIFwicmVkYmFnZmx5SURcIl0vL+WkmuW8oO+8jOWNleW8oFxuICAgc3RhdGljIFBLID0gW1wibW9uZXlQS1wiLCBcInJlZGJhZ2ZseVBLXCJdLy/lpJrlvKDvvIzljZXlvKBcbiAgIHN0YXRpYyBLUiA9IFtcIm1vbmV5S1JcIiwgXCJyZWRiYWdmbHlLUlwiXS8v5aSa5byg77yM5Y2V5bygIFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lQ29uZmlnIHtcblxuICAgc3RhdGljIElTX0dBTUVfTVVTSUNCRyA9IHRydWU7ICAvL+aYr+WQpuW8gOWQr+iDjOaZr+mfs+S5kFxuICAgc3RhdGljIElTX0dBTUVfTVVTSUNFRkZFQ1QgPSB0cnVlOyAvL+aYr+WQpuW8gOWQr+mfs+aViOaenCAgXG4gICBzdGF0aWMgZG1Td2l0Y2ggPSB0cnVlO1xuICAgc3RhdGljIGlzV2hpdGVCYWcgPSB0cnVlO1xuXG4gICBzdGF0aWMgaXNTaG93R3VpZGUgPSBmYWxzZTtcblxuICAgc3RhdGljIGlzTmV3ZXI6Ym9vbGVhbiA9IHRydWU7XG5cbiAgIHN0YXRpYyBpc0FudGk6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICBzdGF0aWMgdGFyZ2V0TGV2ZWwgPSAwO1xuXG4gICBzdGF0aWMgY29tbW9uUGFybSA9IG51bGw7XG5cblxuICAgc3RhdGljIHNldENvbmZpZygpIHsgXG4gICAgICB0aGlzLklTX0dBTUVfTVVTSUNCRyA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkubXVzaWNCZ1N3aXRjaCgpO1xuICAgICAgdGhpcy5JU19HQU1FX01VU0lDRUZGRUNUID0gbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5tdXNpY0VmZmljU3dpdGNoKCk7XG4gICAgICB0aGlzLmRtU3dpdGNoID0gbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5kbVN3aXRjaCgpO1xuICAgICAgdGhpcy5pc1Nob3dHdWlkZSA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ3VpZGVTaG93KCk7IFxuICAgICAgdGhpcy50YXJnZXRMZXZlbCA9ICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmdldFRhcmdldExldmVsKCk7IFxuXG4gICAgICB0aGlzLmlzTmV3ZXIgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmdldElzTmV3ZXIoKTtcblxuICAgICAgbGV0IGpzYiA9ICBKc2JTZGtTY3JpcHQuSW5zdGFuY2U7XG4gICAgICB3aW5kb3dbXCJKc3RTREtcIl0gPSBqc2I7ICBcbiAgICAgIFxuICAgICAgaWYgKGdhbWVDb25maWcuaXNTaG93R3VpZGUgPT0gZmFsc2UpIHtcbiAgICAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0U2NvcmVDb3VudCgxNTApO1xuICAgICAgfVxuICAgICAgbGV0IGNvbW1vblBhcm0gPSBKc2JTZGtTY3JpcHQuZ2V0Q29tbW9uUGFybSgpO1xuICAgICAgaWYgKHR5cGVvZiBjb21tb25QYXJtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICBjb21tb25QYXJtID0gSlNPTi5wYXJzZShjb21tb25QYXJtKVxuICAgICAgICAgY29uc29sZS5sb2coXCLnnIvnnIthbmRyb2lkIOe7meeahOmFjee9rlwiLGNvbW1vblBhcm0pXG4gICAgICB9XG4gICAgICB0aGlzLmNvbW1vblBhcm0gPSBjb21tb25QYXJtO1xuICAgICAgdGhpcy5pc1doaXRlQmFnID0gSnNiU2RrU2NyaXB0LnJlcXVlc3RJc1doaXRlQmFvKClcbiAgICAgIC8vIExvY2FsQXNzZXRzTWFuYWdlci5sb2FkQ29tbW9uQXNzZXRzKCk7XG4gICB9XG5cbiAgIHN0YXRpYyBzYXZlTmV3ZXIoKXtcbiAgICAgIHRoaXMuaXNOZXdlciA9IGZhbHNlO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRJc05ld2VyKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgc3RhdGljIG1vbmV5Q2FjaGUgPSB7fTtcbiAgIHN0YXRpYyBzZXRNb25leVNwKG1vbmV5OmNjLlNwcml0ZSxpbmRleDogbnVtYmVyID0gMCl7XG4gICAgICBpZiAoY2MuaXNWYWxpZChtb25leSkpe1xuICAgICAgICAgbGV0IG1vbmV5dHlwZTtcbiAgICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICAgICAgICBpZihjb3VudHJ5ID09IFwiYnJcIil7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBbXCJtb25leXB0XCIsXCJyZWRiYWdmbHlwdFwiXVtpbmRleF07XG4gICAgICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IFwiaWRcIil7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBbXCJtb25leUlEXCIsXCJyZWRiYWdmbHlJRFwiXVtpbmRleF07XG4gICAgICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IFwicGtcIil7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBbXCJtb25leVBLXCIsXCJyZWRiYWdmbHlQS1wiXVtpbmRleF07XG4gICAgICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IFwia3JcIil7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBbXCJtb25leUtSXCIsXCJyZWRiYWdmbHlLUlwiXVtpbmRleF07XG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1vbmV5dHlwZSA9IFtcIm1vbmV5XCIsXCJyZWRiYWdmbHlcIl1baW5kZXhdO1xuICAgICAgICAgfVxuICAgICAgICAgaWYgKG1vbmV5dHlwZSA9PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICAgaWYgKHRoaXMubW9uZXlDYWNoZVttb25leXR5cGVdKXtcbiAgICAgICAgICAgIG1vbmV5LnNwcml0ZUZyYW1lID0gdGhpcy5tb25leUNhY2hlW21vbmV5dHlwZV07XG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCByZXNwYXRoID0gXCJpbWcvU2NlbmVJbWFnZS9cIiArIG1vbmV5dHlwZVxuICAgICAgICAgICAgaWYgKGluZGV4ID09IDEpe1xuICAgICAgICAgICAgICAgcmVzcGF0aCA9IFwiaW1nL3Jld2FyZEltZy9cIiArIG1vbmV5dHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocmVzcGF0aCxjYy5TcHJpdGVGcmFtZSwoZXJyLGFzc2V0KT0+e1xuICAgICAgICAgICAgICAgaWYgKGFzc2V0KXtcbiAgICAgICAgICAgICAgICAgIHRoaXMubW9uZXlDYWNoZVttb25leXR5cGVdID0gYXNzZXRcbiAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKG1vbmV5KSkgbW9uZXkuc3ByaXRlRnJhbWUgPSBhc3NldDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBnZXRXb3JkKHR5cGUsIHBhcmFtZXRlcjE/LCBwYXJhbWV0ZXIyPykge1xuICAgICAgbGV0IExhbmd1YWdlID0ge1xuICAgICAgICAgRW5nbGlzaDoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj5UYXAgdG8gU3RhcnQ8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCJEb3dubG9hZFwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiQ2FzaCBPdXRcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJDYXNoIE91dFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgS086IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+7Iuc7J6R7ZWY66Ck66m0IO2Dre2VmOyEuOyalDwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLtmITquIgg7J247LacXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCLri6TsmrTroZzrk5xcIixcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIu2YhOq4iCDsnbjstpxcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL3RpcExibDogXCLstZzsooUg6rKw6rO864qUIOuztOyepeuQmOyngCDslYrsnLzrqbAsIOuwm+ydhCDsiJgg7J6I64qUIOq4iOyVoeydgCDslbEg65iQ64qUIOybueyCrOydtO2KuOyXkCDqsozsi5zrkJwg6rec7LmZ7JeQIOuUsOumheuLiOuLpC5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgSU46IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+dGFwIHVudHVrIGRpbXVsYWk8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCJVbmR1aFwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiVGFyaWsgVHVuYWlcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJUYXJpayBUdW5haVwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCJIYXNpbCBha2hpciB0aWRhayBkaWphbWluLCBqdW1sYWggeWFuZyBkYXBhdCBBbmRhIHBlcm9sZWggdGVyZ2FudHVuZyBwYWRhIGF0dXJhbiB5YW5nIGRpdGVyYml0a2FuIGRpIEFQTElLQVNJIGF0YXUgc2l0dXMgd2ViLlwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBQVDoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj50b3F1ZSBwYXJhIGluaWNpYXI8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCJUcmFuc2ZlcmlyXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJTYWNhclwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlNhY2FyXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGlwTGJsOiBcIk8gcmVzdWx0YWRvIGZpbmFsIG7Do28gw6kgZ2FyYW50aWRvLCBvIHZhbG9yIHF1ZSB2b2PDqiBwb2RlIG9idGVyIGVzdMOhIHN1amVpdG8gw6BzIHJlZ3JhcyBwdWJsaWNhZGFzIG5vIEFQUCBvdSBzaXRlLlwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBGSUw6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+VGFwIHBhcmEgc2ltdWxhbjwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIkktZG93bmxvYWRcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIkNhc2ggT3V0XCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiQ2FzaCBPdXRcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB0aXBMYmw6IFwiSGluZGkgZ2FyYW50aXNhZG8gYW5nIHBpbmFsIG5hIHJlc3VsdGEsIGF0IGFuZyBoYWxhZ2FuZyBtYWt1a3VoYSBtbyBheSBuYWthYXlvbiBzYSBtZ2EgcGF0YWthcmFuZyBpbmlsYXRoYWxhIHNhIEFQUCBvIHdlYnNpdGUuXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIFZOOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPk5o4bqlbiDEkeG7gyBi4bqvdCDEkeG6p3U8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCJU4bqjaSB4deG7kW5nXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJSw7p0IHRp4buBblwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlLDunQgdGnhu4FuXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGlwTGJsOiBcIkvhur90IHF14bqjIGN14buRaSBjw7luZyBraMO0bmcgxJHGsOG7o2MgxJHhuqNtIGLhuqNvLCBz4buRIHRp4buBbiBi4bqhbiBjw7MgdGjhu4Mgbmjhuq1uIMSRxrDhu6NjIHBo4bulIHRodeG7mWMgdsOgbyBjw6FjIHF1eSB04bqvYyDEkcaw4bujYyBjw7RuZyBi4buRIHRyw6puIOG7qE5HIEThu6RORyBob+G6t2MgdHJhbmcgd2ViLlwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBISToge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj7gpLbgpYHgpLDgpYIg4KSV4KSw4KSo4KWHIOCkleClhyDgpLLgpL/gpI8g4KSf4KWI4KSqIOCkleCksOClh+CkgjwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIuCkoeCkvuCkieCkqOCksuCli+CkoSDgpJXgpLDgpYfgpIJcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIuCkleCliOCktiDgpIbgpIngpJ9cIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLgpJXgpYjgpLYg4KSG4KSJ4KSfXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGlwTGJsOiBcIuCkheCkguCkpOCkv+CkriDgpKrgpLDgpL/gpKPgpL7gpK4g4KSV4KWAIOCkl+CkvuCksOCkguCkn+ClgCDgpKjgpLngpYDgpIIg4KS54KWILCDgpIbgpKog4KSc4KS/4KSk4KSo4KWAIOCksOCkvuCktuCkvyDgpKrgpY3gpLDgpL7gpKrgpY3gpKQg4KSV4KSwIOCkuOCkleCkpOClhyDgpLngpYjgpIIsIOCkteCkuSBBUFAg4KSv4KS+IOCkteClh+CkrOCkuOCkvuCkh+CknyDgpKrgpLAg4KSq4KWN4KSw4KSV4KS+4KS24KS/4KSkIOCkqOCkv+Ckr+CkruCli+CkgiDgpKrgpLAg4KSo4KS/4KSw4KWN4KSt4KSwIOCkleCksOCkpOClgCDgpLngpYjgpaRcIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgUlU6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0L3QsNGH0LDRgtGMPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwi0KHQutCw0YfQsNGC0YxcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcItCS0YvQstC+0LQg0YHRgNC10LTRgdGC0LJcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLQktGL0LLQvtC0INGB0YDQtdC00YHRgtCyXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMjEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGlwTGJsOiBcItCe0LrQvtC90YfQsNGC0LXQu9GM0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgiDQvdC1INCz0LDRgNCw0L3RgtC40YDRg9C10YLRgdGPLiDQodGD0LzQvNCwLCDQutC+0YLQvtGA0YPRjiDQstGLINC80L7QttC10YLQtSDQv9C+0LvRg9GH0LjRgtGMLCDQt9Cw0LLQuNGB0LjRgiDQvtGCINC/0YDQsNCy0LjQuywg0L7Qv9GD0LHQu9C40LrQvtCy0LDQvdC90YvRhSDQsiDQv9GA0LjQu9C+0LbQtdC90LjQuCDQuNC70Lgg0L3QsCDRgdCw0LnRgtC1LlwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfVxuICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5sb2NhbExhbmd1YWdlO1xuICAgICAgY29uc29sZS5sb2coXCJnZXRXb3JkOiB0eXBlXCIsIHR5cGUgLGxhbmd1YWdlIClcbiAgICAgIHRyeXtcbiAgICAgICAgIHJldHVybiBMYW5ndWFnZVtsYW5ndWFnZV1bdHlwZV07XG4gICAgICB9Y2F0Y2h7XG4gICAgICAgICBjb25zb2xlLndhcm4oXCLmiqXplJnkuoZcIixsYW5ndWFnZSwgdHlwZSlcbiAgICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdGljIGdldFVuaXR5TW9uZXlOdW1iZXIocmV3YXJkLCBpc0V4Y2hhbmdlUmF0ZSA9IDApIFxuICAge1xuICAgICAgaWYgKCF0aGlzLmlzTnVtYmVyKHJld2FyZCkpIHtcbiAgICAgICAgIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGxldCBtb25leTphbnkgPSB0aGlzLnRvRml4KHJld2FyZCk7XG4gICAgICAgICBpZiAoaXNFeGNoYW5nZVJhdGUgPT0gMCkge1xuICAgICAgICAgICAgbW9uZXkgPSB0aGlzLnRvRml4KChOdW1iZXIocmV3YXJkKSAqIHRoaXMuZ2V0VW5pZnlFeGNoYW5nZVJhdGUoKSkpO1xuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIE51bWJlcihtb25leSk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBnZXRVbmlmeUV4Y2hhbmdlUmF0ZSgpe1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlcbiAgIFx0bGV0IGV4Y2hhbmdlUmF0ZSA9IDE7XG4gICBcdGlmKGNvdW50cnkgPT0gQ291bnRyeS5JRCl7XG4gICBcdCAgICAgZXhjaGFuZ2VSYXRlID0gMTUxNjg7XG4gICBcdH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5CUil7XG4gICBcdCAgZXhjaGFuZ2VSYXRlID0gNS4xNDtcbiAgIFx0fWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBLKXtcbiAgIFx0ICBleGNoYW5nZVJhdGUgPTI3NTtcbiAgIFx0fWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LktSKXtcbiAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDEyOTA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5SVSl7XG4gICAgICAgICAgICBleGNoYW5nZVJhdGUgPSAxMDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSCl7XG4gICAgICAgICAgICBleGNoYW5nZVJhdGUgPSA1NjtcbiAgICAgICAgIH0gIFxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuVk4pe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gMjQwMDA7XG4gICAgICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JTil7XG4gICAgICAgICAgICBleGNoYW5nZVJhdGUgPSA4MjtcbiAgICAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LkVOKXtcbiAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDE7IFxuICAgICAgfVxuICAgXHRyZXR1cm4gZXhjaGFuZ2VSYXRlO1xuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlHdWlkZVBheShpbmRleCl7XG4gICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeTtcbiAgICAgIGxldCBtb25leXR5cGU7XG4gICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuQlIpe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfcGFnQmFua1wiLFwiYnJfcGl4XCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JRCl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19kYW5hXCIsXCJpZF9vdm9cIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBLKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BhaXNhXCIsXCJpY19qYXp6XCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19rYWthb3BheVwiLFwiaWNfamF6elwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfd2VibW9uZXlcIixcImljX3RpbmtvZmZcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBIKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX2djYXNoXCIsXCJpY19wYXltYXlhXCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5WTil7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19tb21vXCIsXCJpY196YWxvcGF5XCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JTil7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19wYXl0bVwiLFwiaWNfcGhvbmVwZVwiXVtpbmRleF07XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfcGF5cGFsXCIsXCJpY19hbWF6b25cIl1baW5kZXhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vbmV5dHlwZVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0UmVkYmFnKGluZGV4KSB7XG4gICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeTtcbiAgICAgIGxldCBtb25leXR5cGU7XG4gICAgICBpZiAoY291bnRyeSA9PSBDb3VudHJ5LklEKSB7XG4gICAgICAgICBtb25leXR5cGUgPSBNb25leVBhcmFtLklEW2luZGV4XTtcbiAgICAgIH0gZWxzZSBpZiAoY291bnRyeSA9PSBDb3VudHJ5LlBLKSB7XG4gICAgICAgICBtb25leXR5cGUgPSBNb25leVBhcmFtLlBLW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmIChjb3VudHJ5ID09IENvdW50cnkuQlIpIHtcbiAgICAgICAgICAgIG1vbmV5dHlwZSA9IE1vbmV5UGFyYW0uUFRbaW5kZXhdO1xuICAgICAgfWVsc2UgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5LUikge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5LUltpbmRleF07XG4gICAgICB9ZWxzZSB7XG4gICAgICAgICBtb25leXR5cGUgPSBNb25leVBhcmFtLkVOW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb25leXR5cGVcbiAgIH1cblxuICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gIU51bWJlci5pc05hTihOdW1iZXIodmFsdWUpKVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlNb25leShyZXdhcmQsaXNFeGNoYW5nZVJhdGUpe1xuICAgICAgaWYgKCF0aGlzLmlzTnVtYmVyKHJld2FyZCkpe1xuICAgICAgICAgcmV0dXJuIDAgO1xuICAgICAgfWVsc2V7XG4gICAgICAgICBsZXQgbW9uZXk6YW55ID0gIHRoaXMudG9GaXgocmV3YXJkKTtcbiAgICAgICAgIGlmKGlzRXhjaGFuZ2VSYXRlID09IDApe1xuICAgICAgICAgICAgbW9uZXkgPXRoaXMudG9GaXgoKE51bWJlcihyZXdhcmQpKnRoaXMuZ2V0VW5pZnlFeGNoYW5nZVJhdGUoKSkpO1xuICAgICAgICAgfVxuICAgICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlcbiAgICAgICAgIGlmKG1vbmV5PiAxMDAwKXtcbiAgICAgICAgICAgIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JRCl7XG4gICAgICAgICAgICAgICBtb25leSA9ICB0aGlzLnRvRml4KG1vbmV5LzEwMDApK1wia1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIG1vbmV5O1xuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgdG9GaXgocmV3YXJkKXtcblx0ICAgcmV0dXJuICBOdW1iZXIocmV3YXJkKS50b0ZpeGVkKDIpXG4gICB9XG5cbiAgIHN0YXRpYyBnZXRVbmlmeUN1cnJlbmN5KCl7XG4gICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgICAgbGV0IGN1cnJlbmN5ID0gXCIkXCJcbiAgICAgIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JRCl7XG4gICAgICAgIGN1cnJlbmN5ID0gXCJScFwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LkJSKXtcbiAgICAgICAgY3VycmVuY3kgPSBcIlIkXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEspe1xuICAgICAgICBjdXJyZW5jeSA9IFwiUC5Sc1wiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LktSKXtcbiAgICAgICAgIGN1cnJlbmN5ID0gXCLigqlcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5SVSl7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oK9XCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEgpe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCsVwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlZOKXtcbiAgICAgICAgIGN1cnJlbmN5ID0gXCLigqtcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JTil7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oK5XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVuY3k7XG4gICB9XG5cblxuICAgc3RhdGljIGdldCBnZXRDb3VudHJ5KCl7XG4gICAgICByZXR1cm4gQ291bnRyeS5WTjtcbiAgIH1cblxuXG4gICBzdGF0aWMgZ2V0IGxvY2FsTGFuZ3VhZ2UoKSB7XG4gICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgICAgbGV0IGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLkVuZ2xpc2g7XG4gICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuSU47XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuQlIpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuUFQ7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEspe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuUFQ7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuS1Ipe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuS087XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuUlU7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEgpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuRklMO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlZOKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLlZOO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LklOKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLkhJO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhbmd1YWdlO1xuICAgfVxuXG5cbiAgIHN0YXRpYyBjaGFuZ2VNdXNpY2JnKCl7XG4gICAgICB0aGlzLklTX0dBTUVfTVVTSUNCRyA9ICF0aGlzLklTX0dBTUVfTVVTSUNCRztcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0TXVzaWNCZyh0aGlzLklTX0dBTUVfTVVTSUNCRyk7XG4gICB9XG5cbiAgIHN0YXRpYyBjaGFuZ2VFZmZlY3QoKXtcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVCA9ICF0aGlzLklTX0dBTUVfTVVTSUNFRkZFQ1Q7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldE11c2ljRWZmZWN0KHRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVCk7XG4gICB9XG5cbiAgIHN0YXRpYyBjaGFuZ2VEbVN3aXRjaCgpe1xuICAgICAgdGhpcy5kbVN3aXRjaCA9ICF0aGlzLmRtU3dpdGNoO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRETVN3aWN0aCh0aGlzLmRtU3dpdGNoKTtcbiAgIH1cblxuICAgc3RhdGljIHNldEd1aWRlU2hvdygpe1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRHdWlkZVNob3coKTtcbiAgIH1cblxuICAgc3RhdGljIHNldFRhcmdldExldmVsKGxldmVsOm51bWJlcikge1xuICAgICAgdGhpcy50YXJnZXRMZXZlbCA9IGxldmVsO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRUYXJnZXRMZXZlbChsZXZlbCk7XG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBKdWljZUl0ZW0gPSBjYy5DbGFzcyh7XG4gICBuYW1lOiAnSnVpY2VJdGVtJyxcbiAgIHByb3BlcnRpZXM6IHtcbiAgICAgICBwYXJ0aWNsZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgY2lyY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICBzbGFzaDogY2MuU3ByaXRlRnJhbWUsXG4gICB9XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBKdWljZUl0ZW1UeXBle1xuICAgcGFydGljbGU6IGNjLlNwcml0ZUZyYW1lXG4gICBjaXJjbGU6IGNjLlNwcml0ZUZyYW1lXG4gICBzbGFzaDogY2MuU3ByaXRlRnJhbWVcbn1cbiJdfQ==