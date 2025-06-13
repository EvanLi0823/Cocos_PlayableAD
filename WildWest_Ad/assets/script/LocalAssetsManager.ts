
const { ccclass, property } = cc._decorator;


const Kdefault_sprite_splash = "default_sprite_splash"

const KqiuPrefab = "qiuPrefab"

// @ccclass
export default class LocalAssetsManager {

    static commonMap: Map<string, any> = new Map();

    static async loadCommonAssets() {

        await new Promise<number>((resolve) => {

            if (LocalAssetsManager.commonMap.size == 2) {
                resolve(1);
                return
            }

            let assets = cc.assetManager.assets;
            let count = assets.count;
            let tempCount = 0;
            assets.forEach(element => {
                tempCount++;
                if (element.name != null) { 
                    if (!LocalAssetsManager.commonMap.has(Kdefault_sprite_splash) && element.name === Kdefault_sprite_splash) {

                        let uuid = element["_uuid"];
                        if (uuid) {
                            LocalAssetsManager.commonMap.set(Kdefault_sprite_splash, uuid);
                        }
                    }

                    if (!LocalAssetsManager.commonMap.has(KqiuPrefab) && element.name === KqiuPrefab) {

                        let uuid = element["_uuid"];
                        if (uuid) {
                            LocalAssetsManager.commonMap.set(KqiuPrefab, uuid);
                        }
                    } 
                } 

                if (tempCount == count) {
                    resolve(1);
                }
            });
        })
    }
    
    static releasePrefab(prefab: cc.Asset) {
        // LocalAssetsManager.loadCommonAssets();
        // let deps = cc.loader.getDependsRecursively(prefab);
        // let tempArray = [];
        // for (const iterator of deps) {
        //     if (typeof iterator === "string") {
        //         let uuid1 = LocalAssetsManager.commonMap.get(Kdefault_sprite_splash);
        //         let uuid2 = LocalAssetsManager.commonMap.get(KqiuPrefab);
        //         if (iterator !== uuid1 && iterator !== uuid2) {
        //             tempArray.push(iterator)
        //         }
        //     }
        // }

        // cc.assetManager.releaseAsset(tempArray);
        prefab.decRef();   
    } 
}
