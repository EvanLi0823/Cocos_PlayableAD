
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
            return Country.EN;
            // return Country.BR;
            // return Country.ID;
            // return Country.RU;
            // return Country.PH;
            // return Country.VN;
            // return Country.IN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(gameConfig, "getPlayableAdType", {
        get: function () {
            return PlayableAdType.AppLovin;
            // return PlayableAdType.Mtg;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsbUVBQThEO0FBRTlELElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN2Qix1Q0FBcUIsQ0FBQTtJQUNyQiw2QkFBVyxDQUFBO0FBQ2QsQ0FBQyxFQUhXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBR3pCO0FBRUQsSUFBWSxZQWdCWDtBQWhCRCxXQUFZLFlBQVk7SUFDckIsbUNBQW9CLENBQUE7SUFDcEIsU0FBUztJQUNULHlCQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1QseUJBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCx5QkFBUyxDQUFBO0lBQ1QsV0FBVztJQUNYLDJCQUFXLENBQUE7SUFDWCxVQUFVO0lBQ1YseUJBQVMsQ0FBQTtJQUNULFVBQVU7SUFDVix5QkFBUyxDQUFBO0lBQ1QsU0FBUztJQUNULHlCQUFTLENBQUE7QUFDWixDQUFDLEVBaEJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBZ0J2QjtBQUVELElBQVksT0FtQlg7QUFuQkQsV0FBWSxPQUFPO0lBQ2hCLFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxVQUFVO0lBQ1Ysb0JBQVMsQ0FBQTtJQUNULE9BQU87SUFDUCxvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1Qsb0JBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCxvQkFBUSxDQUFBO0lBQ1IsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxRQUFRO0lBQ1Isb0JBQVMsQ0FBQTtBQUNaLENBQUMsRUFuQlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBbUJsQjtBQUVEO0lBQUE7SUFNQSxDQUFDO0lBTFMsYUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFBLENB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QUFZLEdBQW5CO1FBQ0csMEJBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVNLHlCQUFjLEdBQXJCLFVBQXNCLEtBQVk7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsMEJBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUEzYU0sMEJBQWUsR0FBRyxJQUFJLENBQUMsQ0FBRSxVQUFVO0lBQ25DLDhCQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLFdBQVc7SUFDdkMsbUJBQVEsR0FBRyxJQUFJLENBQUM7SUFDaEIscUJBQVUsR0FBRyxJQUFJLENBQUM7SUFFbEIsc0JBQVcsR0FBRyxLQUFLLENBQUM7SUFFcEIsa0JBQU8sR0FBVyxJQUFJLENBQUM7SUFFdkIsaUJBQU0sR0FBVyxLQUFLLENBQUM7SUFFdkIsc0JBQVcsR0FBRyxDQUFDLENBQUM7SUFFaEIscUJBQVUsR0FBRyxJQUFJLENBQUM7SUFpQ1YscUJBQVUsR0FBRyxFQUFFLENBQUM7SUE4WGxDLGlCQUFDO0NBOWFELEFBOGFDLElBQUE7a0JBOWFvQixVQUFVO0FBZ2JsQixRQUFBLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQy9CLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBVztRQUN4QixNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDdEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXO0tBQ3hCO0NBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsQXNzZXRzTWFuYWdlciBmcm9tIFwiLi9Mb2NhbEFzc2V0c01hbmFnZXJcIjtcbmltcG9ydCBsb2NhbERhdGFNYW5hZ2VyIGZyb20gXCIuL2xvY2FsRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBKc2JTZGtTY3JpcHQgZnJvbSBcIi4vUGxhdGZvcm1JbnRlcmFjdGlvbi9Kc2JTZGtTY3JpcHRcIjtcblxuZXhwb3J0IGVudW0gUGxheWFibGVBZFR5cGUge1xuICAgQXBwTG92aW4gPSBcIkFwcExvdmluXCIsXG4gICBNdGcgPSBcIk10Z1wiLFxufVxuXG5leHBvcnQgZW51bSBMYW5ndWFnZVR5cGUge1xuICAgRW5nbGlzaCAgPSBcIkVuZ2xpc2hcIixcbiAgIC8qKuWNsOWwvOivrSAqL1xuICAgSU4gPSBcIklOXCIsXG4gICAvKirokaHokITniZkgKi9cbiAgIFBUID0gXCJQVFwiLFxuICAgLyoqIOmfqeivrSAqL1xuICAgS08gPSBcIktPXCIsXG4gICAvKiog6I+y5b6L5a6+6K+tICovXG4gICBGSUwgPSBcIkZJTFwiLFxuICAgLyoqIOi2iuWNl+ivrSAqL1xuICAgVk4gPSBcIlZOXCIsXG4gICAvKiog5Y2w5Zyw6K+tICovXG4gICBISSA9IFwiSElcIixcbiAgIC8qKiDkv4Tor60gKi9cbiAgIFJVID0gXCJSVVwiLFxufVxuXG5leHBvcnQgZW51bSBDb3VudHJ5e1xuICAgLyoq5Y2w5bC8ICovXG4gICBJRCA9IFwiaWRcIixcbiAgIC8qKuW3tOilvyAqL1xuICAgQlIgPSBcImJyXCIsXG4gICAvKirlt7Tln7rmlq/lnaYgKi9cbiAgIFBLID0gXCJwa1wiLFxuICAgLyoq6Iux6K+tKi9cbiAgIEVOID0gXCJlblwiLFxuICAgLyoq6Z+p5Zu9ICovXG4gICBLUiA9IFwia3JcIixcbiAgIC8qKuS/hOe9l+aWryAqL1xuICAgUlUgPSBcInJ1XCIsXG4gICAvKiroj7Llvovlrr4gKi9cbiAgIFBIPSBcInBoXCIsXG4gICAvKirotorljZcgKi9cbiAgIFZOID0gXCJ2blwiLCAgIFxuICAgLyoq5Y2w5bqmICovXG4gICBJTiA9IFwiaW5cIixcbn1cblxuY2xhc3MgTW9uZXlQYXJhbSB7XG4gICBzdGF0aWMgRU4gPSBbXCJtb25leVwiLCBcInJlZGJhZ2ZseVwiXSAvL+WkmuW8oO+8jOWNleW8oFxuICAgc3RhdGljIFBUID0gW1wibW9uZXlwdFwiLCBcInJlZGJhZ2ZseXB0XCJdLy/lpJrlvKDvvIzljZXlvKBcbiAgIHN0YXRpYyBJRCA9IFtcIm1vbmV5SURcIiwgXCJyZWRiYWdmbHlJRFwiXS8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgUEsgPSBbXCJtb25leVBLXCIsIFwicmVkYmFnZmx5UEtcIl0vL+WkmuW8oO+8jOWNleW8oFxuICAgc3RhdGljIEtSID0gW1wibW9uZXlLUlwiLCBcInJlZGJhZ2ZseUtSXCJdLy/lpJrlvKDvvIzljZXlvKAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVDb25maWcge1xuXG4gICBzdGF0aWMgSVNfR0FNRV9NVVNJQ0JHID0gdHJ1ZTsgIC8v5piv5ZCm5byA5ZCv6IOM5pmv6Z+z5LmQXG4gICBzdGF0aWMgSVNfR0FNRV9NVVNJQ0VGRkVDVCA9IHRydWU7IC8v5piv5ZCm5byA5ZCv6Z+z5pWI5p6cICBcbiAgIHN0YXRpYyBkbVN3aXRjaCA9IHRydWU7XG4gICBzdGF0aWMgaXNXaGl0ZUJhZyA9IHRydWU7XG5cbiAgIHN0YXRpYyBpc1Nob3dHdWlkZSA9IGZhbHNlO1xuXG4gICBzdGF0aWMgaXNOZXdlcjpib29sZWFuID0gdHJ1ZTtcblxuICAgc3RhdGljIGlzQW50aTpib29sZWFuID0gZmFsc2U7XG5cbiAgIHN0YXRpYyB0YXJnZXRMZXZlbCA9IDA7XG5cbiAgIHN0YXRpYyBjb21tb25QYXJtID0gbnVsbDtcblxuXG4gICBzdGF0aWMgc2V0Q29uZmlnKCkgeyBcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0JHID0gbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5tdXNpY0JnU3dpdGNoKCk7XG4gICAgICB0aGlzLklTX0dBTUVfTVVTSUNFRkZFQ1QgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLm11c2ljRWZmaWNTd2l0Y2goKTtcbiAgICAgIHRoaXMuZG1Td2l0Y2ggPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmRtU3dpdGNoKCk7XG4gICAgICB0aGlzLmlzU2hvd0d1aWRlID0gbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5ndWlkZVNob3coKTsgXG4gICAgICB0aGlzLnRhcmdldExldmVsID0gIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0VGFyZ2V0TGV2ZWwoKTsgXG5cbiAgICAgIHRoaXMuaXNOZXdlciA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0SXNOZXdlcigpO1xuXG4gICAgICBsZXQganNiID0gIEpzYlNka1NjcmlwdC5JbnN0YW5jZTtcbiAgICAgIHdpbmRvd1tcIkpzdFNES1wiXSA9IGpzYjsgIFxuICAgICAgXG4gICAgICBpZiAoZ2FtZUNvbmZpZy5pc1Nob3dHdWlkZSA9PSBmYWxzZSkge1xuICAgICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRTY29yZUNvdW50KDE1MCk7XG4gICAgICB9XG4gICAgICBsZXQgY29tbW9uUGFybSA9IEpzYlNka1NjcmlwdC5nZXRDb21tb25QYXJtKCk7XG4gICAgICBpZiAodHlwZW9mIGNvbW1vblBhcm0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgIGNvbW1vblBhcm0gPSBKU09OLnBhcnNlKGNvbW1vblBhcm0pXG4gICAgICAgICBjb25zb2xlLmxvZyhcIueci+eci2FuZHJvaWQg57uZ55qE6YWN572uXCIsY29tbW9uUGFybSlcbiAgICAgIH1cbiAgICAgIHRoaXMuY29tbW9uUGFybSA9IGNvbW1vblBhcm07XG4gICAgICB0aGlzLmlzV2hpdGVCYWcgPSBKc2JTZGtTY3JpcHQucmVxdWVzdElzV2hpdGVCYW8oKVxuICAgICAgLy8gTG9jYWxBc3NldHNNYW5hZ2VyLmxvYWRDb21tb25Bc3NldHMoKTtcbiAgIH1cblxuICAgc3RhdGljIHNhdmVOZXdlcigpe1xuICAgICAgdGhpcy5pc05ld2VyID0gZmFsc2U7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldElzTmV3ZXIoKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBzdGF0aWMgbW9uZXlDYWNoZSA9IHt9O1xuICAgc3RhdGljIHNldE1vbmV5U3AobW9uZXk6Y2MuU3ByaXRlLGluZGV4OiBudW1iZXIgPSAwKXtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG1vbmV5KSl7XG4gICAgICAgICBsZXQgbW9uZXl0eXBlO1xuICAgICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlcbiAgICAgICAgIGlmKGNvdW50cnkgPT0gXCJiclwiKXtcbiAgICAgICAgICAgIG1vbmV5dHlwZSA9IFtcIm1vbmV5cHRcIixcInJlZGJhZ2ZseXB0XCJdW2luZGV4XTtcbiAgICAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gXCJpZFwiKXtcbiAgICAgICAgICAgIG1vbmV5dHlwZSA9IFtcIm1vbmV5SURcIixcInJlZGJhZ2ZseUlEXCJdW2luZGV4XTtcbiAgICAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gXCJwa1wiKXtcbiAgICAgICAgICAgIG1vbmV5dHlwZSA9IFtcIm1vbmV5UEtcIixcInJlZGJhZ2ZseVBLXCJdW2luZGV4XTtcbiAgICAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gXCJrclwiKXtcbiAgICAgICAgICAgIG1vbmV5dHlwZSA9IFtcIm1vbmV5S1JcIixcInJlZGJhZ2ZseUtSXCJdW2luZGV4XTtcbiAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlcIixcInJlZGJhZ2ZseVwiXVtpbmRleF07XG4gICAgICAgICB9XG4gICAgICAgICBpZiAobW9uZXl0eXBlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICAgICBpZiAodGhpcy5tb25leUNhY2hlW21vbmV5dHlwZV0pe1xuICAgICAgICAgICAgbW9uZXkuc3ByaXRlRnJhbWUgPSB0aGlzLm1vbmV5Q2FjaGVbbW9uZXl0eXBlXTtcbiAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHJlc3BhdGggPSBcImltZy9TY2VuZUltYWdlL1wiICsgbW9uZXl0eXBlXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMSl7XG4gICAgICAgICAgICAgICByZXNwYXRoID0gXCJpbWcvcmV3YXJkSW1nL1wiICsgbW9uZXl0eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChyZXNwYXRoLGNjLlNwcml0ZUZyYW1lLChlcnIsYXNzZXQpPT57XG4gICAgICAgICAgICAgICBpZiAoYXNzZXQpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5tb25leUNhY2hlW21vbmV5dHlwZV0gPSBhc3NldFxuICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQobW9uZXkpKSBtb25leS5zcHJpdGVGcmFtZSA9IGFzc2V0O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdGljIGdldFdvcmQodHlwZSwgcGFyYW1ldGVyMT8sIHBhcmFtZXRlcjI/KSB7XG4gICAgICBsZXQgTGFuZ3VhZ2UgPSB7XG4gICAgICAgICBFbmdsaXNoOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPlRhcCB0byBTdGFydDwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIkRvd25sb2FkXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJDYXNoIE91dFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIkNhc2ggT3V0XCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBLTzoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj7si5zsnpHtlZjroKTrqbQg7YOt7ZWY7IS47JqUPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIu2YhOq4iCDsnbjstpxcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIuuLpOyatOuhnOuTnFwiLFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi7ZiE6riIIOyduOy2nFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vdGlwTGJsOiBcIuy1nOyihSDqsrDqs7zripQg67O07J6l65CY7KeAIOyViuycvOupsCwg67Cb7J2EIOyImCDsnojripQg6riI7JWh7J2AIOyVsSDrmJDripQg7Ju57IKs7J207Yq47JeQIOqyjOyLnOuQnCDqt5zsuZnsl5Ag65Sw66aF64uI64ukLlwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBJTjoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj50YXAgdW50dWsgZGltdWxhaTwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIlVuZHVoXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJUYXJpayBUdW5haVwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlRhcmlrIFR1bmFpXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGlwTGJsOiBcIkhhc2lsIGFraGlyIHRpZGFrIGRpamFtaW4sIGp1bWxhaCB5YW5nIGRhcGF0IEFuZGEgcGVyb2xlaCB0ZXJnYW50dW5nIHBhZGEgYXR1cmFuIHlhbmcgZGl0ZXJiaXRrYW4gZGkgQVBMSUtBU0kgYXRhdSBzaXR1cyB3ZWIuXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIFBUOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPnRvcXVlIHBhcmEgaW5pY2lhcjwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIlRyYW5zZmVyaXJcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlNhY2FyXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiU2FjYXJcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB0aXBMYmw6IFwiTyByZXN1bHRhZG8gZmluYWwgbsOjbyDDqSBnYXJhbnRpZG8sIG8gdmFsb3IgcXVlIHZvY8OqIHBvZGUgb2J0ZXIgZXN0w6Egc3VqZWl0byDDoHMgcmVncmFzIHB1YmxpY2FkYXMgbm8gQVBQIG91IHNpdGUuXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIEZJTDoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj5UYXAgcGFyYSBzaW11bGFuPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiSS1kb3dubG9hZFwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiQ2FzaCBPdXRcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJDYXNoIE91dFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCJIaW5kaSBnYXJhbnRpc2FkbyBhbmcgcGluYWwgbmEgcmVzdWx0YSwgYXQgYW5nIGhhbGFnYW5nIG1ha3VrdWhhIG1vIGF5IG5ha2FheW9uIHNhIG1nYSBwYXRha2FyYW5nIGluaWxhdGhhbGEgc2EgQVBQIG8gd2Vic2l0ZS5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgVk46IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+TmjhuqVuIMSR4buDIGLhuq90IMSR4bqndTwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcIlThuqNpIHh14buRbmdcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlLDunQgdGnhu4FuXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiUsO6dCB0aeG7gW5cIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB0aXBMYmw6IFwiS+G6v3QgcXXhuqMgY3Xhu5FpIGPDuW5nIGtow7RuZyDEkcaw4bujYyDEkeG6o20gYuG6o28sIHPhu5EgdGnhu4FuIGLhuqFuIGPDsyB0aOG7gyBuaOG6rW4gxJHGsOG7o2MgcGjhu6UgdGh14buZYyB2w6BvIGPDoWMgcXV5IHThuq9jIMSRxrDhu6NjIGPDtG5nIGLhu5EgdHLDqm4g4buoTkcgROG7pE5HIGhv4bq3YyB0cmFuZyB3ZWIuXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIEhJOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPuCktuClgeCksOClgiDgpJXgpLDgpKjgpYcg4KSV4KWHIOCksuCkv+CkjyDgpJ/gpYjgpKog4KSV4KSw4KWH4KSCPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwi4KSh4KS+4KSJ4KSo4KSy4KWL4KShIOCkleCksOClh+CkglwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi4KSV4KWI4KS2IOCkhuCkieCkn1wiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIuCkleCliOCktiDgpIbgpIngpJ9cIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB0aXBMYmw6IFwi4KSF4KSC4KSk4KS/4KSuIOCkquCksOCkv+Cko+CkvuCkriDgpJXgpYAg4KSX4KS+4KSw4KSC4KSf4KWAIOCkqOCkueClgOCkgiDgpLngpYgsIOCkhuCkqiDgpJzgpL/gpKTgpKjgpYAg4KSw4KS+4KS24KS/IOCkquCljeCksOCkvuCkquCljeCkpCDgpJXgpLAg4KS44KSV4KSk4KWHIOCkueCliOCkgiwg4KS14KS5IEFQUCDgpK/gpL4g4KS14KWH4KSs4KS44KS+4KSH4KSfIOCkquCksCDgpKrgpY3gpLDgpJXgpL7gpLbgpL/gpKQg4KSo4KS/4KSv4KSu4KWL4KSCIOCkquCksCDgpKjgpL/gpLDgpY3gpK3gpLAg4KSV4KSw4KSk4KWAIOCkueCliOClpFwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBSVToge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj7QndCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQvdCw0YfQsNGC0Yw8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCLQodC60LDRh9Cw0YLRjFwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi0JLRi9Cy0L7QtCDRgdGA0LXQtNGB0YLQslwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDYwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcItCS0YvQstC+0LQg0YHRgNC10LTRgdGC0LJcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB0aXBMYmw6IFwi0J7QutC+0L3Rh9Cw0YLQtdC70YzQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCINC90LUg0LPQsNGA0LDQvdGC0LjRgNGD0LXRgtGB0Y8uINCh0YPQvNC80LAsINC60L7RgtC+0YDRg9GOINCy0Ysg0LzQvtC20LXRgtC1INC/0L7Qu9GD0YfQuNGC0YwsINC30LDQstC40YHQuNGCINC+0YIg0L/RgNCw0LLQuNC7LCDQvtC/0YPQsdC70LjQutC+0LLQsNC90L3Ri9GFINCyINC/0YDQuNC70L7QttC10L3QuNC4INC40LvQuCDQvdCwINGB0LDQudGC0LUuXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9XG4gICAgICBsZXQgbGFuZ3VhZ2UgPSB0aGlzLmxvY2FsTGFuZ3VhZ2U7XG4gICAgICBjb25zb2xlLmxvZyhcImdldFdvcmQ6IHR5cGVcIiwgdHlwZSAsbGFuZ3VhZ2UgKVxuICAgICAgdHJ5e1xuICAgICAgICAgcmV0dXJuIExhbmd1YWdlW2xhbmd1YWdlXVt0eXBlXTtcbiAgICAgIH1jYXRjaHtcbiAgICAgICAgIGNvbnNvbGUud2FybihcIuaKpemUmeS6hlwiLGxhbmd1YWdlLCB0eXBlKVxuICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pdHlNb25leU51bWJlcihyZXdhcmQsIGlzRXhjaGFuZ2VSYXRlID0gMCkgXG4gICB7XG4gICAgICBpZiAoIXRoaXMuaXNOdW1iZXIocmV3YXJkKSkge1xuICAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgbGV0IG1vbmV5OmFueSA9IHRoaXMudG9GaXgocmV3YXJkKTtcbiAgICAgICAgIGlmIChpc0V4Y2hhbmdlUmF0ZSA9PSAwKSB7XG4gICAgICAgICAgICBtb25leSA9IHRoaXMudG9GaXgoKE51bWJlcihyZXdhcmQpICogdGhpcy5nZXRVbmlmeUV4Y2hhbmdlUmF0ZSgpKSk7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gTnVtYmVyKG1vbmV5KTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5RXhjaGFuZ2VSYXRlKCl7XG4gICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgXHRsZXQgZXhjaGFuZ2VSYXRlID0gMTtcbiAgIFx0aWYoY291bnRyeSA9PSBDb3VudHJ5LklEKXtcbiAgIFx0ICAgICBleGNoYW5nZVJhdGUgPSAxNTE2ODtcbiAgIFx0fWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LkJSKXtcbiAgIFx0ICBleGNoYW5nZVJhdGUgPSA1LjE0O1xuICAgXHR9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEspe1xuICAgXHQgIGV4Y2hhbmdlUmF0ZSA9Mjc1O1xuICAgXHR9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuS1Ipe1xuICAgICAgICAgZXhjaGFuZ2VSYXRlID0gMTI5MDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlJVKXtcbiAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDEwMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBIKXtcbiAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDU2O1xuICAgICAgICAgfSAgXG4gICAgICBlbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5WTil7XG4gICAgICAgICAgICBleGNoYW5nZVJhdGUgPSAyNDAwMDtcbiAgICAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LklOKXtcbiAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDgyO1xuICAgICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuRU4pe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gMTsgXG4gICAgICB9XG4gICBcdHJldHVybiBleGNoYW5nZVJhdGU7XG4gICB9XG5cbiAgIHN0YXRpYyBnZXRVbmlmeUd1aWRlUGF5KGluZGV4KXtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5O1xuICAgICAgbGV0IG1vbmV5dHlwZTtcbiAgICAgIGlmKGNvdW50cnkgPT0gQ291bnRyeS5CUil7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19wYWdCYW5rXCIsXCJicl9waXhcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LklEKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX2RhbmFcIixcImlkX292b1wiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEspe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfcGFpc2FcIixcImljX2phenpcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LktSKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX2tha2FvcGF5XCIsXCJpY19qYXp6XCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5SVSl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY193ZWJtb25leVwiLFwiaWNfdGlua29mZlwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEgpe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfZ2Nhc2hcIixcImljX3BheW1heWFcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlZOKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX21vbW9cIixcImljX3phbG9wYXlcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LklOKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BheXRtXCIsXCJpY19waG9uZXBlXCJdW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19wYXlwYWxcIixcImljX2FtYXpvblwiXVtpbmRleF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9uZXl0eXBlXG4gICB9XG5cbiAgIHN0YXRpYyBnZXRSZWRiYWcoaW5kZXgpIHtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5O1xuICAgICAgbGV0IG1vbmV5dHlwZTtcbiAgICAgIGlmIChjb3VudHJ5ID09IENvdW50cnkuSUQpIHtcbiAgICAgICAgIG1vbmV5dHlwZSA9IE1vbmV5UGFyYW0uSURbaW5kZXhdO1xuICAgICAgfSBlbHNlIGlmIChjb3VudHJ5ID09IENvdW50cnkuUEspIHtcbiAgICAgICAgIG1vbmV5dHlwZSA9IE1vbmV5UGFyYW0uUEtbaW5kZXhdO1xuICAgICAgfWVsc2UgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5CUikge1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5QVFtpbmRleF07XG4gICAgICB9ZWxzZSBpZiAoY291bnRyeSA9PSBDb3VudHJ5LktSKSB7XG4gICAgICAgICBtb25leXR5cGUgPSBNb25leVBhcmFtLktSW2luZGV4XTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgIG1vbmV5dHlwZSA9IE1vbmV5UGFyYW0uRU5baW5kZXhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vbmV5dHlwZVxuICAgfVxuXG4gICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpXG4gICB9XG5cbiAgIHN0YXRpYyBnZXRVbmlmeU1vbmV5KHJld2FyZCxpc0V4Y2hhbmdlUmF0ZSl7XG4gICAgICBpZiAoIXRoaXMuaXNOdW1iZXIocmV3YXJkKSl7XG4gICAgICAgICByZXR1cm4gMCA7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgIGxldCBtb25leTphbnkgPSAgdGhpcy50b0ZpeChyZXdhcmQpO1xuICAgICAgICAgaWYoaXNFeGNoYW5nZVJhdGUgPT0gMCl7XG4gICAgICAgICAgICBtb25leSA9dGhpcy50b0ZpeCgoTnVtYmVyKHJld2FyZCkqdGhpcy5nZXRVbmlmeUV4Y2hhbmdlUmF0ZSgpKSk7XG4gICAgICAgICB9XG4gICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgICAgICAgaWYobW9uZXk+IDEwMDApe1xuICAgICAgICAgICAgaWYoY291bnRyeSA9PSBDb3VudHJ5LklEKXtcbiAgICAgICAgICAgICAgIG1vbmV5ID0gIHRoaXMudG9GaXgobW9uZXkvMTAwMCkrXCJrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbW9uZXk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyB0b0ZpeChyZXdhcmQpe1xuXHQgICByZXR1cm4gIE51bWJlcihyZXdhcmQpLnRvRml4ZWQoMilcbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5Q3VycmVuY3koKXtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICAgICBsZXQgY3VycmVuY3kgPSBcIiRcIlxuICAgICAgaWYoY291bnRyeSA9PSBDb3VudHJ5LklEKXtcbiAgICAgICAgY3VycmVuY3kgPSBcIlJwXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuQlIpe1xuICAgICAgICBjdXJyZW5jeSA9IFwiUiRcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICAgICAgIGN1cnJlbmN5ID0gXCJQLlJzXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuS1Ipe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCqVwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlJVKXtcbiAgICAgICAgIGN1cnJlbmN5ID0gXCLigr1cIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSCl7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oKxXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuVk4pe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCq1wiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LklOKXtcbiAgICAgICAgIGN1cnJlbmN5ID0gXCLigrlcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW5jeTtcbiAgIH1cblxuXG4gICBzdGF0aWMgZ2V0IGdldENvdW50cnkoKXtcbiAgICAgIHJldHVybiBDb3VudHJ5LkVOO1xuICAgICAgLy8gcmV0dXJuIENvdW50cnkuQlI7XG4gICAgICAvLyByZXR1cm4gQ291bnRyeS5JRDtcbiAgICAgIC8vIHJldHVybiBDb3VudHJ5LlJVO1xuICAgICAgLy8gcmV0dXJuIENvdW50cnkuUEg7XG4gICAgICAvLyByZXR1cm4gQ291bnRyeS5WTjtcbiAgICAgIC8vIHJldHVybiBDb3VudHJ5LklOO1xuICAgfVxuXG4gICBzdGF0aWMgZ2V0IGdldFBsYXlhYmxlQWRUeXBlKCl7XG4gICAgICByZXR1cm4gUGxheWFibGVBZFR5cGUuQXBwTG92aW47XG4gICAgICAvLyByZXR1cm4gUGxheWFibGVBZFR5cGUuTXRnO1xuICAgfVxuXG4gICBzdGF0aWMgZ2V0IGxvY2FsTGFuZ3VhZ2UoKSB7XG4gICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgICAgbGV0IGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLkVuZ2xpc2g7XG4gICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuSU47XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuQlIpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuUFQ7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEspe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuUFQ7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuS1Ipe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuS087XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuUlU7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEgpe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuRklMO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlZOKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLlZOO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LklOKXtcbiAgICAgICAgIGxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLkhJO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhbmd1YWdlO1xuICAgfVxuXG5cbiAgIHN0YXRpYyBjaGFuZ2VNdXNpY2JnKCl7XG4gICAgICB0aGlzLklTX0dBTUVfTVVTSUNCRyA9ICF0aGlzLklTX0dBTUVfTVVTSUNCRztcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0TXVzaWNCZyh0aGlzLklTX0dBTUVfTVVTSUNCRyk7XG4gICB9XG5cbiAgIHN0YXRpYyBjaGFuZ2VFZmZlY3QoKXtcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVCA9ICF0aGlzLklTX0dBTUVfTVVTSUNFRkZFQ1Q7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldE11c2ljRWZmZWN0KHRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVCk7XG4gICB9XG5cbiAgIHN0YXRpYyBjaGFuZ2VEbVN3aXRjaCgpe1xuICAgICAgdGhpcy5kbVN3aXRjaCA9ICF0aGlzLmRtU3dpdGNoO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRETVN3aWN0aCh0aGlzLmRtU3dpdGNoKTtcbiAgIH1cblxuICAgc3RhdGljIHNldEd1aWRlU2hvdygpe1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRHdWlkZVNob3coKTtcbiAgIH1cblxuICAgc3RhdGljIHNldFRhcmdldExldmVsKGxldmVsOm51bWJlcikge1xuICAgICAgdGhpcy50YXJnZXRMZXZlbCA9IGxldmVsO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRUYXJnZXRMZXZlbChsZXZlbCk7XG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBKdWljZUl0ZW0gPSBjYy5DbGFzcyh7XG4gICBuYW1lOiAnSnVpY2VJdGVtJyxcbiAgIHByb3BlcnRpZXM6IHtcbiAgICAgICBwYXJ0aWNsZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgY2lyY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICBzbGFzaDogY2MuU3ByaXRlRnJhbWUsXG4gICB9XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBKdWljZUl0ZW1UeXBle1xuICAgcGFydGljbGU6IGNjLlNwcml0ZUZyYW1lXG4gICBjaXJjbGU6IGNjLlNwcml0ZUZyYW1lXG4gICBzbGFzaDogY2MuU3ByaXRlRnJhbWVcbn1cbiJdfQ==