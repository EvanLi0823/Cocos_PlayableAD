
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
exports.JuiceItem = exports.Country = exports.LanguageType = exports.PlayableAdType = void 0;
var localDataManager_1 = require("./localDataManager");
var JsbSdkScript_1 = require("./PlatformInteraction/JsbSdkScript");
var PlayableAdType;
(function (PlayableAdType) {
    PlayableAdType["AppLovin"] = "AppLovin";
    PlayableAdType["Mtg"] = "Mtg";
})(PlayableAdType = exports.PlayableAdType || (exports.PlayableAdType = {}));
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
            return Country.IN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(gameConfig, "getPlayableAdType", {
        get: function () {
            return PlayableAdType.Mtg;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsbUVBQThEO0FBRTlELElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN2Qix1Q0FBcUIsQ0FBQTtJQUNyQiw2QkFBVyxDQUFBO0FBQ2QsQ0FBQyxFQUhXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBR3pCO0FBRUQsSUFBWSxZQWdCWDtBQWhCRCxXQUFZLFlBQVk7SUFDckIsbUNBQW9CLENBQUE7SUFDcEIsU0FBUztJQUNULHlCQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1QseUJBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCx5QkFBUyxDQUFBO0lBQ1QsV0FBVztJQUNYLDJCQUFXLENBQUE7SUFDWCxVQUFVO0lBQ1YseUJBQVMsQ0FBQTtJQUNULFVBQVU7SUFDVix5QkFBUyxDQUFBO0lBQ1QsU0FBUztJQUNULHlCQUFTLENBQUE7QUFDWixDQUFDLEVBaEJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBZ0J2QjtBQUVELElBQVksT0FtQlg7QUFuQkQsV0FBWSxPQUFPO0lBQ2hCLFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxVQUFVO0lBQ1Ysb0JBQVMsQ0FBQTtJQUNULE9BQU87SUFDUCxvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1Qsb0JBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCxvQkFBUSxDQUFBO0lBQ1IsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxRQUFRO0lBQ1Isb0JBQVMsQ0FBQTtBQUNaLENBQUMsRUFuQlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBbUJsQjtBQUVEO0lBQUE7SUFNQSxDQUFDO0lBTFMsYUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFBLENB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S0FBWTtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QiwwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXBhTSwwQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFFLFVBQVU7SUFDbkMsOEJBQW1CLEdBQUcsSUFBSSxDQUFDLENBQUMsV0FBVztJQUN2QyxtQkFBUSxHQUFHLElBQUksQ0FBQztJQUNoQixxQkFBVSxHQUFHLElBQUksQ0FBQztJQUVsQixzQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVwQixrQkFBTyxHQUFXLElBQUksQ0FBQztJQUV2QixpQkFBTSxHQUFXLEtBQUssQ0FBQztJQUV2QixzQkFBVyxHQUFHLENBQUMsQ0FBQztJQUVoQixxQkFBVSxHQUFHLElBQUksQ0FBQztJQWlDVixxQkFBVSxHQUFHLEVBQUUsQ0FBQztJQXVYbEMsaUJBQUM7Q0F2YUQsQUF1YUMsSUFBQTtrQkF2YW9CLFVBQVU7QUF5YWxCLFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDL0IsSUFBSSxFQUFFLFdBQVc7SUFDakIsVUFBVSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVztRQUN0QixLQUFLLEVBQUUsRUFBRSxDQUFDLFdBQVc7S0FDeEI7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYWxBc3NldHNNYW5hZ2VyIGZyb20gXCIuL0xvY2FsQXNzZXRzTWFuYWdlclwiO1xuaW1wb3J0IGxvY2FsRGF0YU1hbmFnZXIgZnJvbSBcIi4vbG9jYWxEYXRhTWFuYWdlclwiO1xuaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi9QbGF0Zm9ybUludGVyYWN0aW9uL0pzYlNka1NjcmlwdFwiO1xuXG5leHBvcnQgZW51bSBQbGF5YWJsZUFkVHlwZSB7XG4gICBBcHBMb3ZpbiA9IFwiQXBwTG92aW5cIixcbiAgIE10ZyA9IFwiTXRnXCIsXG59XG5cbmV4cG9ydCBlbnVtIExhbmd1YWdlVHlwZSB7XG4gICBFbmdsaXNoICA9IFwiRW5nbGlzaFwiLFxuICAgLyoq5Y2w5bC86K+tICovXG4gICBJTiA9IFwiSU5cIixcbiAgIC8qKuiRoeiQhOeJmSAqL1xuICAgUFQgPSBcIlBUXCIsXG4gICAvKiog6Z+p6K+tICovXG4gICBLTyA9IFwiS09cIixcbiAgIC8qKiDoj7Llvovlrr7or60gKi9cbiAgIEZJTCA9IFwiRklMXCIsXG4gICAvKiog6LaK5Y2X6K+tICovXG4gICBWTiA9IFwiVk5cIixcbiAgIC8qKiDljbDlnLDor60gKi9cbiAgIEhJID0gXCJISVwiLFxuICAgLyoqIOS/hOivrSAqL1xuICAgUlUgPSBcIlJVXCIsXG59XG5cbmV4cG9ydCBlbnVtIENvdW50cnl7XG4gICAvKirljbDlsLwgKi9cbiAgIElEID0gXCJpZFwiLFxuICAgLyoq5be06KW/ICovXG4gICBCUiA9IFwiYnJcIixcbiAgIC8qKuW3tOWfuuaWr+WdpiAqL1xuICAgUEsgPSBcInBrXCIsXG4gICAvKiroi7Hor60qL1xuICAgRU4gPSBcImVuXCIsXG4gICAvKirpn6nlm70gKi9cbiAgIEtSID0gXCJrclwiLFxuICAgLyoq5L+E572X5pavICovXG4gICBSVSA9IFwicnVcIixcbiAgIC8qKuiPsuW+i+WuviAqL1xuICAgUEg9IFwicGhcIixcbiAgIC8qKui2iuWNlyAqL1xuICAgVk4gPSBcInZuXCIsICAgXG4gICAvKirljbDluqYgKi9cbiAgIElOID0gXCJpblwiLFxufVxuXG5jbGFzcyBNb25leVBhcmFtIHtcbiAgIHN0YXRpYyBFTiA9IFtcIm1vbmV5XCIsIFwicmVkYmFnZmx5XCJdIC8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgUFQgPSBbXCJtb25leXB0XCIsIFwicmVkYmFnZmx5cHRcIl0vL+WkmuW8oO+8jOWNleW8oFxuICAgc3RhdGljIElEID0gW1wibW9uZXlJRFwiLCBcInJlZGJhZ2ZseUlEXCJdLy/lpJrlvKDvvIzljZXlvKBcbiAgIHN0YXRpYyBQSyA9IFtcIm1vbmV5UEtcIiwgXCJyZWRiYWdmbHlQS1wiXS8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgS1IgPSBbXCJtb25leUtSXCIsIFwicmVkYmFnZmx5S1JcIl0vL+WkmuW8oO+8jOWNleW8oCBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZUNvbmZpZyB7XG5cbiAgIHN0YXRpYyBJU19HQU1FX01VU0lDQkcgPSB0cnVlOyAgLy/mmK/lkKblvIDlkK/og4zmma/pn7PkuZBcbiAgIHN0YXRpYyBJU19HQU1FX01VU0lDRUZGRUNUID0gdHJ1ZTsgLy/mmK/lkKblvIDlkK/pn7PmlYjmnpwgIFxuICAgc3RhdGljIGRtU3dpdGNoID0gdHJ1ZTtcbiAgIHN0YXRpYyBpc1doaXRlQmFnID0gdHJ1ZTtcblxuICAgc3RhdGljIGlzU2hvd0d1aWRlID0gZmFsc2U7XG5cbiAgIHN0YXRpYyBpc05ld2VyOmJvb2xlYW4gPSB0cnVlO1xuXG4gICBzdGF0aWMgaXNBbnRpOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgc3RhdGljIHRhcmdldExldmVsID0gMDtcblxuICAgc3RhdGljIGNvbW1vblBhcm0gPSBudWxsO1xuXG5cbiAgIHN0YXRpYyBzZXRDb25maWcoKSB7IFxuICAgICAgdGhpcy5JU19HQU1FX01VU0lDQkcgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLm11c2ljQmdTd2l0Y2goKTtcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkubXVzaWNFZmZpY1N3aXRjaCgpO1xuICAgICAgdGhpcy5kbVN3aXRjaCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZG1Td2l0Y2goKTtcbiAgICAgIHRoaXMuaXNTaG93R3VpZGUgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmd1aWRlU2hvdygpOyBcbiAgICAgIHRoaXMudGFyZ2V0TGV2ZWwgPSAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5nZXRUYXJnZXRMZXZlbCgpOyBcblxuICAgICAgdGhpcy5pc05ld2VyID0gbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5nZXRJc05ld2VyKCk7XG5cbiAgICAgIGxldCBqc2IgPSAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlO1xuICAgICAgd2luZG93W1wiSnN0U0RLXCJdID0ganNiOyAgXG4gICAgICBcbiAgICAgIGlmIChnYW1lQ29uZmlnLmlzU2hvd0d1aWRlID09IGZhbHNlKSB7XG4gICAgICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldFNjb3JlQ291bnQoMTUwKTtcbiAgICAgIH1cbiAgICAgIGxldCBjb21tb25QYXJtID0gSnNiU2RrU2NyaXB0LmdldENvbW1vblBhcm0oKTtcbiAgICAgIGlmICh0eXBlb2YgY29tbW9uUGFybSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgY29tbW9uUGFybSA9IEpTT04ucGFyc2UoY29tbW9uUGFybSlcbiAgICAgICAgIGNvbnNvbGUubG9nKFwi55yL55yLYW5kcm9pZCDnu5nnmoTphY3nva5cIixjb21tb25QYXJtKVxuICAgICAgfVxuICAgICAgdGhpcy5jb21tb25QYXJtID0gY29tbW9uUGFybTtcbiAgICAgIHRoaXMuaXNXaGl0ZUJhZyA9IEpzYlNka1NjcmlwdC5yZXF1ZXN0SXNXaGl0ZUJhbygpXG4gICAgICAvLyBMb2NhbEFzc2V0c01hbmFnZXIubG9hZENvbW1vbkFzc2V0cygpO1xuICAgfVxuXG4gICBzdGF0aWMgc2F2ZU5ld2VyKCl7XG4gICAgICB0aGlzLmlzTmV3ZXIgPSBmYWxzZTtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0SXNOZXdlcigpO1xuICAgfVxuXG4gICBwcml2YXRlIHN0YXRpYyBtb25leUNhY2hlID0ge307XG4gICBzdGF0aWMgc2V0TW9uZXlTcChtb25leTpjYy5TcHJpdGUsaW5kZXg6IG51bWJlciA9IDApe1xuICAgICAgaWYgKGNjLmlzVmFsaWQobW9uZXkpKXtcbiAgICAgICAgIGxldCBtb25leXR5cGU7XG4gICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgICAgICAgaWYoY291bnRyeSA9PSBcImJyXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlwdFwiLFwicmVkYmFnZmx5cHRcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcImlkXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlJRFwiLFwicmVkYmFnZmx5SURcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcInBrXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlQS1wiLFwicmVkYmFnZmx5UEtcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcImtyXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlLUlwiLFwicmVkYmFnZmx5S1JcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBbXCJtb25leVwiLFwicmVkYmFnZmx5XCJdW2luZGV4XTtcbiAgICAgICAgIH1cbiAgICAgICAgIGlmIChtb25leXR5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgIGlmICh0aGlzLm1vbmV5Q2FjaGVbbW9uZXl0eXBlXSl7XG4gICAgICAgICAgICBtb25leS5zcHJpdGVGcmFtZSA9IHRoaXMubW9uZXlDYWNoZVttb25leXR5cGVdO1xuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgcmVzcGF0aCA9IFwiaW1nL1NjZW5lSW1hZ2UvXCIgKyBtb25leXR5cGVcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAxKXtcbiAgICAgICAgICAgICAgIHJlc3BhdGggPSBcImltZy9yZXdhcmRJbWcvXCIgKyBtb25leXR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc3BhdGgsY2MuU3ByaXRlRnJhbWUsKGVycixhc3NldCk9PntcbiAgICAgICAgICAgICAgIGlmIChhc3NldCl7XG4gICAgICAgICAgICAgICAgICB0aGlzLm1vbmV5Q2FjaGVbbW9uZXl0eXBlXSA9IGFzc2V0XG4gICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChtb25leSkpIG1vbmV5LnNwcml0ZUZyYW1lID0gYXNzZXQ7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0V29yZCh0eXBlLCBwYXJhbWV0ZXIxPywgcGFyYW1ldGVyMj8pIHtcbiAgICAgIGxldCBMYW5ndWFnZSA9IHtcbiAgICAgICAgIEVuZ2xpc2g6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+VGFwIHRvIFN0YXJ0PC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiRG93bmxvYWRcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIkNhc2ggT3V0XCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiQ2FzaCBPdXRcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIEtPOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPuyLnOyeke2VmOugpOuptCDtg63tlZjshLjsmpQ8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi7ZiE6riIIOyduOy2nFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwi64uk7Jq066Gc65OcXCIsXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLtmITquIgg7J247LacXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy90aXBMYmw6IFwi7LWc7KKFIOqysOqzvOuKlCDrs7TsnqXrkJjsp4Ag7JWK7Jy866mwLCDrsJvsnYQg7IiYIOyeiOuKlCDquIjslaHsnYAg7JWxIOuYkOuKlCDsm7nsgqzsnbTtirjsl5Ag6rKM7Iuc65CcIOq3nOy5meyXkCDrlLDrpoXri4jri6QuXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIElOOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPnRhcCB1bnR1ayBkaW11bGFpPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVW5kdWhcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlRhcmlrIFR1bmFpXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiVGFyaWsgVHVuYWlcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB0aXBMYmw6IFwiSGFzaWwgYWtoaXIgdGlkYWsgZGlqYW1pbiwganVtbGFoIHlhbmcgZGFwYXQgQW5kYSBwZXJvbGVoIHRlcmdhbnR1bmcgcGFkYSBhdHVyYW4geWFuZyBkaXRlcmJpdGthbiBkaSBBUExJS0FTSSBhdGF1IHNpdHVzIHdlYi5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgUFQ6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+dG9xdWUgcGFyYSBpbmljaWFyPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVHJhbnNmZXJpclwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiU2FjYXJcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJTYWNhclwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCJPIHJlc3VsdGFkbyBmaW5hbCBuw6NvIMOpIGdhcmFudGlkbywgbyB2YWxvciBxdWUgdm9jw6ogcG9kZSBvYnRlciBlc3TDoSBzdWplaXRvIMOgcyByZWdyYXMgcHVibGljYWRhcyBubyBBUFAgb3Ugc2l0ZS5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgRklMOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPlRhcCBwYXJhIHNpbXVsYW48L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCJJLWRvd25sb2FkXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJDYXNoIE91dFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIkNhc2ggT3V0XCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGlwTGJsOiBcIkhpbmRpIGdhcmFudGlzYWRvIGFuZyBwaW5hbCBuYSByZXN1bHRhLCBhdCBhbmcgaGFsYWdhbmcgbWFrdWt1aGEgbW8gYXkgbmFrYWF5b24gc2EgbWdhIHBhdGFrYXJhbmcgaW5pbGF0aGFsYSBzYSBBUFAgbyB3ZWJzaXRlLlwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBWTjoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj5OaOG6pW4gxJHhu4MgYuG6r3QgxJHhuqd1PC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVOG6o2kgeHXhu5FuZ1wiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiUsO6dCB0aeG7gW5cIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJSw7p0IHRp4buBblwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCJL4bq/dCBxdeG6oyBjdeG7kWkgY8O5bmcga2jDtG5nIMSRxrDhu6NjIMSR4bqjbSBi4bqjbywgc+G7kSB0aeG7gW4gYuG6oW4gY8OzIHRo4buDIG5o4bqtbiDEkcaw4bujYyBwaOG7pSB0aHXhu5ljIHbDoG8gY8OhYyBxdXkgdOG6r2MgxJHGsOG7o2MgY8O0bmcgYuG7kSB0csOqbiDhu6hORyBE4bukTkcgaG/hurdjIHRyYW5nIHdlYi5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgSEk6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+4KS24KWB4KSw4KWCIOCkleCksOCkqOClhyDgpJXgpYcg4KSy4KS/4KSPIOCkn+CliOCkqiDgpJXgpLDgpYfgpII8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCLgpKHgpL7gpIngpKjgpLLgpYvgpKEg4KSV4KSw4KWH4KSCXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLgpJXgpYjgpLYg4KSG4KSJ4KSfXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi4KSV4KWI4KS2IOCkhuCkieCkn1wiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCLgpIXgpILgpKTgpL/gpK4g4KSq4KSw4KS/4KSj4KS+4KSuIOCkleClgCDgpJfgpL7gpLDgpILgpJ/gpYAg4KSo4KS54KWA4KSCIOCkueCliCwg4KSG4KSqIOCknOCkv+CkpOCkqOClgCDgpLDgpL7gpLbgpL8g4KSq4KWN4KSw4KS+4KSq4KWN4KSkIOCkleCksCDgpLjgpJXgpKTgpYcg4KS54KWI4KSCLCDgpLXgpLkgQVBQIOCkr+CkviDgpLXgpYfgpKzgpLjgpL7gpIfgpJ8g4KSq4KSwIOCkquCljeCksOCkleCkvuCktuCkv+CkpCDgpKjgpL/gpK/gpK7gpYvgpIIg4KSq4KSwIOCkqOCkv+CksOCljeCkreCksCDgpJXgpLDgpKTgpYAg4KS54KWI4KWkXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIFJVOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPtCd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINC90LDRh9Cw0YLRjDwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcItCh0LrQsNGH0LDRgtGMXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLQktGL0LLQvtC0INGB0YDQtdC00YHRgtCyXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi0JLRi9Cy0L7QtCDRgdGA0LXQtNGB0YLQslwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDIxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCLQntC60L7QvdGH0LDRgtC10LvRjNC90YvQuSDRgNC10LfRg9C70YzRgtCw0YIg0L3QtSDQs9Cw0YDQsNC90YLQuNGA0YPQtdGC0YHRjy4g0KHRg9C80LzQsCwg0LrQvtGC0L7RgNGD0Y4g0LLRiyDQvNC+0LbQtdGC0LUg0L/QvtC70YPRh9C40YLRjCwg0LfQsNCy0LjRgdC40YIg0L7RgiDQv9GA0LDQstC40LssINC+0L/Rg9Cx0LvQuNC60L7QstCw0L3QvdGL0YUg0LIg0L/RgNC40LvQvtC20LXQvdC40Lgg0LjQu9C4INC90LAg0YHQsNC50YLQtS5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH1cbiAgICAgIGxldCBsYW5ndWFnZSA9IHRoaXMubG9jYWxMYW5ndWFnZTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0V29yZDogdHlwZVwiLCB0eXBlICxsYW5ndWFnZSApXG4gICAgICB0cnl7XG4gICAgICAgICByZXR1cm4gTGFuZ3VhZ2VbbGFuZ3VhZ2VdW3R5cGVdO1xuICAgICAgfWNhdGNoe1xuICAgICAgICAgY29uc29sZS53YXJuKFwi5oql6ZSZ5LqGXCIsbGFuZ3VhZ2UsIHR5cGUpXG4gICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBnZXRVbml0eU1vbmV5TnVtYmVyKHJld2FyZCwgaXNFeGNoYW5nZVJhdGUgPSAwKSBcbiAgIHtcbiAgICAgIGlmICghdGhpcy5pc051bWJlcihyZXdhcmQpKSB7XG4gICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBsZXQgbW9uZXk6YW55ID0gdGhpcy50b0ZpeChyZXdhcmQpO1xuICAgICAgICAgaWYgKGlzRXhjaGFuZ2VSYXRlID09IDApIHtcbiAgICAgICAgICAgIG1vbmV5ID0gdGhpcy50b0ZpeCgoTnVtYmVyKHJld2FyZCkgKiB0aGlzLmdldFVuaWZ5RXhjaGFuZ2VSYXRlKCkpKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBOdW1iZXIobW9uZXkpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlFeGNoYW5nZVJhdGUoKXtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICBcdGxldCBleGNoYW5nZVJhdGUgPSAxO1xuICAgXHRpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgXHQgICAgIGV4Y2hhbmdlUmF0ZSA9IDE1MTY4O1xuICAgXHR9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuQlIpe1xuICAgXHQgIGV4Y2hhbmdlUmF0ZSA9IDUuMTQ7XG4gICBcdH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICBcdCAgZXhjaGFuZ2VSYXRlID0yNzU7XG4gICBcdH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBleGNoYW5nZVJhdGUgPSAxMjkwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gMTAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEgpe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gNTY7XG4gICAgICAgICB9ICBcbiAgICAgIGVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlZOKXtcbiAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDI0MDAwO1xuICAgICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gODI7XG4gICAgICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5FTil7XG4gICAgICAgICAgICBleGNoYW5nZVJhdGUgPSAxOyBcbiAgICAgIH1cbiAgIFx0cmV0dXJuIGV4Y2hhbmdlUmF0ZTtcbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5R3VpZGVQYXkoaW5kZXgpe1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnk7XG4gICAgICBsZXQgbW9uZXl0eXBlO1xuICAgICAgaWYoY291bnRyeSA9PSBDb3VudHJ5LkJSKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BhZ0JhbmtcIixcImJyX3BpeFwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfZGFuYVwiLFwiaWRfb3ZvXCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19wYWlzYVwiLFwiaWNfamF6elwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuS1Ipe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfa2FrYW9wYXlcIixcImljX2phenpcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlJVKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3dlYm1vbmV5XCIsXCJpY190aW5rb2ZmXCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSCl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19nY2FzaFwiLFwiaWNfcGF5bWF5YVwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuVk4pe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfbW9tb1wiLFwiaWNfemFsb3BheVwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfcGF5dG1cIixcImljX3Bob25lcGVcIl1baW5kZXhdO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BheXBhbFwiLFwiaWNfYW1hem9uXCJdW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb25leXR5cGVcbiAgIH1cblxuICAgc3RhdGljIGdldFJlZGJhZyhpbmRleCkge1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnk7XG4gICAgICBsZXQgbW9uZXl0eXBlO1xuICAgICAgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5JRCkge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5JRFtpbmRleF07XG4gICAgICB9IGVsc2UgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5QSykge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5QS1tpbmRleF07XG4gICAgICB9ZWxzZSBpZiAoY291bnRyeSA9PSBDb3VudHJ5LkJSKSB7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBNb25leVBhcmFtLlBUW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmIChjb3VudHJ5ID09IENvdW50cnkuS1IpIHtcbiAgICAgICAgIG1vbmV5dHlwZSA9IE1vbmV5UGFyYW0uS1JbaW5kZXhdO1xuICAgICAgfWVsc2Uge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5FTltpbmRleF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9uZXl0eXBlXG4gICB9XG5cbiAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSlcbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5TW9uZXkocmV3YXJkLGlzRXhjaGFuZ2VSYXRlKXtcbiAgICAgIGlmICghdGhpcy5pc051bWJlcihyZXdhcmQpKXtcbiAgICAgICAgIHJldHVybiAwIDtcbiAgICAgIH1lbHNle1xuICAgICAgICAgbGV0IG1vbmV5OmFueSA9ICB0aGlzLnRvRml4KHJld2FyZCk7XG4gICAgICAgICBpZihpc0V4Y2hhbmdlUmF0ZSA9PSAwKXtcbiAgICAgICAgICAgIG1vbmV5ID10aGlzLnRvRml4KChOdW1iZXIocmV3YXJkKSp0aGlzLmdldFVuaWZ5RXhjaGFuZ2VSYXRlKCkpKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICAgICAgICBpZihtb25leT4gMTAwMCl7XG4gICAgICAgICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgICAgICAgbW9uZXkgPSAgdGhpcy50b0ZpeChtb25leS8xMDAwKStcImtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBtb25leTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdGljIHRvRml4KHJld2FyZCl7XG5cdCAgIHJldHVybiAgTnVtYmVyKHJld2FyZCkudG9GaXhlZCgyKVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlDdXJyZW5jeSgpe1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlcbiAgICAgIGxldCBjdXJyZW5jeSA9IFwiJFwiXG4gICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICBjdXJyZW5jeSA9IFwiUnBcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5CUil7XG4gICAgICAgIGN1cnJlbmN5ID0gXCJSJFwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBLKXtcbiAgICAgICAgY3VycmVuY3kgPSBcIlAuUnNcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oKpXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCvVwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBIKXtcbiAgICAgICAgIGN1cnJlbmN5ID0gXCLigrFcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5WTil7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oKrXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCuVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbmN5O1xuICAgfVxuXG5cbiAgIHN0YXRpYyBnZXQgZ2V0Q291bnRyeSgpe1xuICAgICAgcmV0dXJuIENvdW50cnkuSU47XG4gICB9XG5cbiAgIHN0YXRpYyBnZXQgZ2V0UGxheWFibGVBZFR5cGUoKXtcbiAgICAgIHJldHVybiBQbGF5YWJsZUFkVHlwZS5NdGc7XG4gICB9XG5cbiAgIHN0YXRpYyBnZXQgbG9jYWxMYW5ndWFnZSgpIHtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICAgICBsZXQgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuRW5nbGlzaDtcbiAgICAgIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JRCl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5JTjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5CUil7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5QVDtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5QVDtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5LTztcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5SVSl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5SVTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSCl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5GSUw7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuVk4pe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuVk47XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuSEk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gICB9XG5cblxuICAgc3RhdGljIGNoYW5nZU11c2ljYmcoKXtcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0JHID0gIXRoaXMuSVNfR0FNRV9NVVNJQ0JHO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRNdXNpY0JnKHRoaXMuSVNfR0FNRV9NVVNJQ0JHKTtcbiAgIH1cblxuICAgc3RhdGljIGNoYW5nZUVmZmVjdCgpe1xuICAgICAgdGhpcy5JU19HQU1FX01VU0lDRUZGRUNUID0gIXRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVDtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0TXVzaWNFZmZlY3QodGhpcy5JU19HQU1FX01VU0lDRUZGRUNUKTtcbiAgIH1cblxuICAgc3RhdGljIGNoYW5nZURtU3dpdGNoKCl7XG4gICAgICB0aGlzLmRtU3dpdGNoID0gIXRoaXMuZG1Td2l0Y2g7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldERNU3dpY3RoKHRoaXMuZG1Td2l0Y2gpO1xuICAgfVxuXG4gICBzdGF0aWMgc2V0R3VpZGVTaG93KCl7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldEd1aWRlU2hvdygpO1xuICAgfVxuXG4gICBzdGF0aWMgc2V0VGFyZ2V0TGV2ZWwobGV2ZWw6bnVtYmVyKSB7XG4gICAgICB0aGlzLnRhcmdldExldmVsID0gbGV2ZWw7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldFRhcmdldExldmVsKGxldmVsKTtcbiAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEp1aWNlSXRlbSA9IGNjLkNsYXNzKHtcbiAgIG5hbWU6ICdKdWljZUl0ZW0nLFxuICAgcHJvcGVydGllczoge1xuICAgICAgIHBhcnRpY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICBjaXJjbGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgIHNsYXNoOiBjYy5TcHJpdGVGcmFtZSxcbiAgIH1cbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEp1aWNlSXRlbVR5cGV7XG4gICBwYXJ0aWNsZTogY2MuU3ByaXRlRnJhbWVcbiAgIGNpcmNsZTogY2MuU3ByaXRlRnJhbWVcbiAgIHNsYXNoOiBjYy5TcHJpdGVGcmFtZVxufVxuIl19