"use strict";
cc._RF.push(module, '33a22fZNsJJMZtkMz4oLOSM', 'aduioTools');
// script/aduioTools.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.engineType = void 0;
var gameConfig_1 = require("./gameConfig");
var JsbSdkScript_1 = require("./PlatformInteraction/JsbSdkScript");
var engineType;
(function (engineType) {
    engineType[engineType["bingo"] = 0] = "bingo";
    engineType[engineType["bingocool"] = 1] = "bingocool";
    engineType[engineType["bingonice"] = 2] = "bingonice";
    engineType[engineType["bingobang"] = 3] = "bingobang";
    engineType[engineType["supperbingo"] = 4] = "supperbingo";
    engineType[engineType["fire"] = 5] = "fire";
    engineType[engineType["finish_target"] = 6] = "finish_target";
    engineType[engineType["merge"] = 7] = "merge";
    engineType[engineType["pass"] = 8] = "pass";
    engineType[engineType["reward"] = 9] = "reward";
    engineType[engineType["girlLaugh"] = 10] = "girlLaugh";
    engineType[engineType["endTurn"] = 11] = "endTurn";
    engineType[engineType["sucess"] = 12] = "sucess";
    engineType[engineType["excellent"] = 13] = "excellent";
})(engineType = exports.engineType || (exports.engineType = {}));
// const C3 = 130.81;
// const c3d150 = 150 / C3;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var aduioTools = /** @class */ (function () {
    function aduioTools() {
    }
    aduioTools_1 = aduioTools;
    aduioTools.playSimpleAduioEngine = function (eType) {
        if (gameConfig_1.default.IS_GAME_MUSICEFFECT) {
            var url_1 = "";
            switch (eType) {
                case engineType.bingo:
                    url_1 = "/AudioClip/sfx_combo_bingo";
                    break;
                case engineType.bingocool:
                    url_1 = "/AudioClip/sfx_combo_bingocool";
                    break;
                case engineType.bingonice:
                    url_1 = "/AudioClip/sfx_combo_bingonice";
                    break;
                case engineType.bingobang:
                    url_1 = "/AudioClip/sfx_combo_bingobang";
                    break;
                case engineType.supperbingo:
                    url_1 = "/AudioClip/sfx_combo_supperbingo";
                    break;
                case engineType.fire:
                    url_1 = "/AudioClip/sfx_fire";
                    break;
                case engineType.finish_target:
                    url_1 = "/AudioClip/sfx_finish_target";
                    break;
                case engineType.merge:
                    url_1 = "/AudioClip/sfx_merge";
                    break;
                case engineType.girlLaugh:
                    url_1 = "/AudioClip/sfx_girl_laugh";
                    break;
                case engineType.pass:
                    url_1 = "/AudioClip/sfx_combo_pass";
                    break;
                case engineType.reward:
                    url_1 = "/AudioClip/sfx_combo_reward";
                    break;
                case engineType.endTurn:
                    url_1 = "/AudioClip/sfx_end_turn";
                    break;
                case engineType.sucess:
                    url_1 = "/AudioClip/sfx_success";
                    break;
                case engineType.excellent:
                    url_1 = "/sounds/excellent";
                    break;
                default:
                    break;
            }
            if (url_1.length > 0) {
                cc.resources.load(url_1, cc.AudioClip, function (err, res) {
                    if (res) {
                        var audioId = cc.audioEngine.playEffect(res, false);
                        if (url_1 === "/AudioClip/sfx_combo_pass") {
                            cc.audioEngine.setVolume(audioId, 0.5);
                        }
                    }
                });
            }
        }
    };
    aduioTools.playBackgroundMusic = function () {
        // if (gameConfig.IS_GAME_MUSICBG) {
        //     if (aduioTools.backMusicIsPlay == null) {
        //         cc.resources.load('/AudioClip/bgm_1', cc.AudioClip, (err, res) => {
        //             if (res) {
        //                 aduioTools.backMusicIsPlay = cc.audioEngine.playMusic(res as cc.AudioClip, true);
        //                 cc.audioEngine.setMusicVolume(0.5);
        //             }
        //         })
        //     }
        // }
    };
    aduioTools.stopBackgroundMusic = function () {
        if (aduioTools_1.backMusicIsPlay != null) {
            cc.audioEngine.stopMusic();
            aduioTools_1.backMusicIsPlay = null;
        }
    };
    aduioTools.playmerge = function (index) {
        if (gameConfig_1.default.IS_GAME_MUSICEFFECT) {
            if (cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID) {
                JsbSdkScript_1.default.playMergeAudio(index);
            }
            else {
                // let fs = require('fs');
                // let AudioContext = window.AudioContext || window["webkitAudioContext"];
                // let audioCtx = AudioContext ? new AudioContext() : '';
                // console.log(`AudioContext ${audioCtx}`);
                // cc.resources.load(`AudioClip/sfx_merge`, cc.Asset, (err, res) => {
                //     if (res) {
                // fs.readFile(res.nativeUrl, (err, data) => {
                // }
                // )
                //     }
                // })
                // const audioContext = new AudioContext();
                // cc.resources.load(`AudioClip/sfx_merge`, cc.Asset, (err, res) => {
                //     if (res) {
                //         fetch(res.nativeUrl)
                //             .then(response => response.arrayBuffer())
                //             .then(
                //                 arrayBuffer => audioContext.decodeAudioData(arrayBuffer)
                //             )
                //             .then(audioBuffer => {
                //                 let sample = audioContext.createBufferSource();
                //                 sample.buffer = audioBuffer;
                //                 sample.loop = false;
                //                 sample.playbackRate.value = 1 + 0.1 * index;
                //                 sample.connect(audioContext.destination);
                //                 sample.start();
                //             })
                //             .catch(e => console.log('uff'));
                //     }
                // })
            }
        }
    };
    aduioTools.pauseAllEffect = function () {
        cc.audioEngine.pauseAllEffects();
    };
    aduioTools.resuseAllEffect = function () {
        cc.audioEngine.resumeAllEffects();
    };
    var aduioTools_1;
    aduioTools.backMusicIsPlay = null;
    aduioTools = aduioTools_1 = __decorate([
        ccclass
    ], aduioTools);
    return aduioTools;
}());
exports.default = aduioTools;

cc._RF.pop();