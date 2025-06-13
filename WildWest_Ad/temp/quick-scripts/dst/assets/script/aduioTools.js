
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/aduioTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYWR1aW9Ub29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsbUVBQThEO0FBRzlELElBQVksVUFnQlg7QUFoQkQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCxxREFBUyxDQUFBO0lBQ1QscURBQVMsQ0FBQTtJQUNULHFEQUFTLENBQUE7SUFDVCx5REFBVyxDQUFBO0lBQ1gsMkNBQUksQ0FBQTtJQUNKLDZEQUFhLENBQUE7SUFDYiw2Q0FBSyxDQUFBO0lBQ0wsMkNBQUksQ0FBQTtJQUNKLCtDQUFNLENBQUE7SUFDTixzREFBUyxDQUFBO0lBQ1Qsa0RBQU8sQ0FBQTtJQUNQLGdEQUFNLENBQUE7SUFDTixzREFBUyxDQUFBO0FBRWIsQ0FBQyxFQWhCVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQWdCckI7QUFDRCxxQkFBcUI7QUFDckIsMkJBQTJCO0FBRXJCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7SUE4SUEsQ0FBQzttQkE5SW9CLFVBQVU7SUFHcEIsZ0NBQXFCLEdBQTVCLFVBQTZCLEtBQWlCO1FBQzFDLElBQUksb0JBQVUsQ0FBQyxtQkFBbUIsRUFBRTtZQUNoQyxJQUFJLEtBQUcsR0FBVyxFQUFFLENBQUM7WUFDckIsUUFBUSxLQUFLLEVBQUU7Z0JBQ1gsS0FBSyxVQUFVLENBQUMsS0FBSztvQkFDakIsS0FBRyxHQUFHLDRCQUE0QixDQUFDO29CQUNuQyxNQUFNO2dCQUNWLEtBQUssVUFBVSxDQUFDLFNBQVM7b0JBQ3JCLEtBQUcsR0FBRyxnQ0FBZ0MsQ0FBQztvQkFDdkMsTUFBTTtnQkFDVixLQUFLLFVBQVUsQ0FBQyxTQUFTO29CQUNyQixLQUFHLEdBQUcsZ0NBQWdDLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1YsS0FBSyxVQUFVLENB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UixLQUFLO2dCQUdMLDJDQUEyQztnQkFDM0MscUVBQXFFO2dCQUNyRSxpQkFBaUI7Z0JBQ2pCLCtCQUErQjtnQkFDL0Isd0RBQXdEO2dCQUN4RCxxQkFBcUI7Z0JBQ3JCLDJFQUEyRTtnQkFDM0UsZ0JBQWdCO2dCQUNoQixxQ0FBcUM7Z0JBQ3JDLGtFQUFrRTtnQkFDbEUsK0NBQStDO2dCQUMvQyx1Q0FBdUM7Z0JBQ3ZDLCtEQUErRDtnQkFDL0QsNERBQTREO2dCQUM1RCxrQ0FBa0M7Z0JBQ2xDLGlCQUFpQjtnQkFDakIsK0NBQStDO2dCQUMvQyxRQUFRO2dCQUNSLEtBQUs7YUFDUjtTQUNKO0lBQ0wsQ0FBQztJQUVNLHlCQUFjLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sMEJBQWUsR0FBdEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQzs7SUE1SU0sMEJBQWUsR0FBRyxJQUFJLENBQUM7SUFEYixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBOEk5QjtJQUFELGlCQUFDO0NBOUlELEFBOElDLElBQUE7a0JBOUlvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi9QbGF0Zm9ybUludGVyYWN0aW9uL0pzYlNka1NjcmlwdFwiO1xuXG5cbmV4cG9ydCBlbnVtIGVuZ2luZVR5cGUge1xuICAgIGJpbmdvID0gMCxcbiAgICBiaW5nb2Nvb2wsXG4gICAgYmluZ29uaWNlLFxuICAgIGJpbmdvYmFuZyxcbiAgICBzdXBwZXJiaW5nbyxcbiAgICBmaXJlLFxuICAgIGZpbmlzaF90YXJnZXQsXG4gICAgbWVyZ2UsXG4gICAgcGFzcyxcbiAgICByZXdhcmQsXG4gICAgZ2lybExhdWdoLFxuICAgIGVuZFR1cm4sXG4gICAgc3VjZXNzLFxuICAgIGV4Y2VsbGVudFxuXG59XG4vLyBjb25zdCBDMyA9IDEzMC44MTtcbi8vIGNvbnN0IGMzZDE1MCA9IDE1MCAvIEMzO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWR1aW9Ub29scyB7XG4gICAgc3RhdGljIGJhY2tNdXNpY0lzUGxheSA9IG51bGw7XG5cbiAgICBzdGF0aWMgcGxheVNpbXBsZUFkdWlvRW5naW5lKGVUeXBlOiBlbmdpbmVUeXBlKSB7XG4gICAgICAgIGlmIChnYW1lQ29uZmlnLklTX0dBTUVfTVVTSUNFRkZFQ1QpIHtcbiAgICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBzd2l0Y2ggKGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBlbmdpbmVUeXBlLmJpbmdvOlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X2NvbWJvX2JpbmdvXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5iaW5nb2Nvb2w6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fYmluZ29jb29sXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5iaW5nb25pY2U6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fYmluZ29uaWNlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5iaW5nb2Jhbmc6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fYmluZ29iYW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5zdXBwZXJiaW5nbzpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvQXVkaW9DbGlwL3NmeF9jb21ib19zdXBwZXJiaW5nb1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGVuZ2luZVR5cGUuZmlyZTpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvQXVkaW9DbGlwL3NmeF9maXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5maW5pc2hfdGFyZ2V0OlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X2ZpbmlzaF90YXJnZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBlbmdpbmVUeXBlLm1lcmdlOlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X21lcmdlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5naXJsTGF1Z2g6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfZ2lybF9sYXVnaFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGVuZ2luZVR5cGUucGFzczpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvQXVkaW9DbGlwL3NmeF9jb21ib19wYXNzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5yZXdhcmQ6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fcmV3YXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5lbmRUdXJuOlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X2VuZF90dXJuXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5zdWNlc3M6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfc3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGVuZ2luZVR5cGUuZXhjZWxsZW50OlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9zb3VuZHMvZXhjZWxsZW50XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChyZXMgYXMgY2MuQXVkaW9DbGlwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1cmwgPT09IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fcGFzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSWQgLCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5QmFja2dyb3VuZE11c2ljKCkge1xuXG4gICAgICAgIC8vIGlmIChnYW1lQ29uZmlnLklTX0dBTUVfTVVTSUNCRykge1xuXG4gICAgICAgIC8vICAgICBpZiAoYWR1aW9Ub29scy5iYWNrTXVzaWNJc1BsYXkgPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCcvQXVkaW9DbGlwL2JnbV8xJywgY2MuQXVkaW9DbGlwLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHJlcykge1xuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhZHVpb1Rvb2xzLmJhY2tNdXNpY0lzUGxheSA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhyZXMgYXMgY2MuQXVkaW9DbGlwLCB0cnVlKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDAuNSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN0b3BCYWNrZ3JvdW5kTXVzaWMoKSB7XG4gICAgICAgIGlmIChhZHVpb1Rvb2xzLmJhY2tNdXNpY0lzUGxheSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICAgICAgICAgIGFkdWlvVG9vbHMuYmFja011c2ljSXNQbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5bWVyZ2UoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoZ2FtZUNvbmZpZy5JU19HQU1FX01VU0lDRUZGRUNUKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgICAgICBKc2JTZGtTY3JpcHQucGxheU1lcmdlQXVkaW8oaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvd1tcIndlYmtpdEF1ZGlvQ29udGV4dFwiXTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgYXVkaW9DdHggPSBBdWRpb0NvbnRleHQgPyBuZXcgQXVkaW9Db250ZXh0KCkgOiAnJztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgQXVkaW9Db250ZXh0ICR7YXVkaW9DdHh9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjYy5yZXNvdXJjZXMubG9hZChgQXVkaW9DbGlwL3NmeF9tZXJnZWAsIGNjLkFzc2V0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHJlcykge1xuXG4gICAgICAgICAgICAgICAgLy8gZnMucmVhZEZpbGUocmVzLm5hdGl2ZVVybCwgKGVyciwgZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5yZXNvdXJjZXMubG9hZChgQXVkaW9DbGlwL3NmeF9tZXJnZWAsIGNjLkFzc2V0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZmV0Y2gocmVzLm5hdGl2ZVVybClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlciA9PiBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmZmVyKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAudGhlbihhdWRpb0J1ZmZlciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBzYW1wbGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNhbXBsZS5idWZmZXIgPSBhdWRpb0J1ZmZlcjtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLmxvb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IDEgKyAwLjEgKiBpbmRleDtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygndWZmJykpO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwYXVzZUFsbEVmZmVjdCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGxFZmZlY3RzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc3VzZUFsbEVmZmVjdCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsRWZmZWN0cygpO1xuICAgIH1cbn1cbiJdfQ==