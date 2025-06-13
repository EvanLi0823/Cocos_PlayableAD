

export interface PassRewardDelegate {

    getEveryRewardAmountCallBack?: (modelJson:string) => (void);

    showVideoCallBack?: (modelJson:string) => (void);

    getMergeRewardAmountCallBack?: (modelJson:string) => (void);

}

export interface gameSceneDelegate {

    gameSceneOnResume():(void);

    gameSceneWillDisappear():(void); 

}