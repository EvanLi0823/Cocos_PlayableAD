import gameConfig from "./gameConfig";
import JsbSdkScript from "./PlatformInteraction/JsbSdkScript";


export enum engineType {
    bingo = 0,
    bingocool,
    bingonice,
    bingobang,
    supperbingo,
    fire,
    finish_target,
    merge,
    pass,
    reward,
    girlLaugh,
    endTurn,
    sucess,
    excellent

}
// const C3 = 130.81;
// const c3d150 = 150 / C3;

const { ccclass, property } = cc._decorator;

@ccclass
export default class aduioTools {
    static backMusicIsPlay = null;

    static playSimpleAduioEngine(eType: engineType) {
        if (gameConfig.IS_GAME_MUSICEFFECT) {
            let url: string = "";
            switch (eType) {
                case engineType.bingo:
                    url = "/AudioClip/sfx_combo_bingo";
                    break;
                case engineType.bingocool:
                    url = "/AudioClip/sfx_combo_bingocool";
                    break;
                case engineType.bingonice:
                    url = "/AudioClip/sfx_combo_bingonice";
                    break;
                case engineType.bingobang:
                    url = "/AudioClip/sfx_combo_bingobang";
                    break;
                case engineType.supperbingo:
                    url = "/AudioClip/sfx_combo_supperbingo";
                    break;
                case engineType.fire:
                    url = "/AudioClip/sfx_fire";
                    break;
                case engineType.finish_target:
                    url = "/AudioClip/sfx_finish_target";
                    break;
                case engineType.merge:
                    url = "/AudioClip/sfx_merge";
                    break;
                case engineType.girlLaugh:
                    url = "/AudioClip/sfx_girl_laugh";
                    break;
                case engineType.pass:
                    url = "/AudioClip/sfx_combo_pass";
                    break;
                case engineType.reward:
                    url = "/AudioClip/sfx_combo_reward";
                    break;
                case engineType.endTurn:
                    url = "/AudioClip/sfx_end_turn";
                    break;
                case engineType.sucess:
                    url = "/AudioClip/sfx_success";
                    break;
                case engineType.excellent:
                    url = "/sounds/excellent";
                    break;
                default:
                    break;
            }

            if (url.length > 0) {
                cc.resources.load(url, cc.AudioClip, (err, res) => {
                    if (res) {
                        let audioId = cc.audioEngine.playEffect(res as cc.AudioClip, false);
                        if(url === "/AudioClip/sfx_combo_pass") {
                            cc.audioEngine.setVolume(audioId , 0.5);
                        }
                    }
                })
            }
        }
    }

    static playBackgroundMusic() {

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
    }

    static stopBackgroundMusic() {
        if (aduioTools.backMusicIsPlay != null) {
            cc.audioEngine.stopMusic();
            aduioTools.backMusicIsPlay = null;
        }
    }

    static playmerge(index: number) {
        if (gameConfig.IS_GAME_MUSICEFFECT) {
            if (cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID) {
                JsbSdkScript.playMergeAudio(index);
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
    }

    static pauseAllEffect() {
        cc.audioEngine.pauseAllEffects();
    }

    static resuseAllEffect() {
        cc.audioEngine.resumeAllEffects();
    }
}
