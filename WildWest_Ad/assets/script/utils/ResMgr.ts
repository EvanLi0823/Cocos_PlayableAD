export class ResMgr {
    static loadResourcesAsset(path:string,type){
        return new Promise((resolve,reason)=>{
            cc.resources.load(path , type,(err,sp)=>{
                if (sp){
                    resolve(sp)
                }else{
                    console.warn("【加载资源失败】",path)
                }
            })
        })
    }
}