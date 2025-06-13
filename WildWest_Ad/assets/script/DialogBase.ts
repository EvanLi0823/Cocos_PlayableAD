 

// import EditorTool from "./EditorTool";


const { ccclass, property, disallowMultiple, menu } = cc._decorator;

/**
 * 弹窗基类
 */
@ccclass
@disallowMultiple
@menu('Framework/基础组件/DialogBase')
export default class DialogBase extends cc.Component {
    /** 弹窗prefab在resources/prefab/dialog/下的路径 */
    public static pUrl: string = '';

    @property(cc.Animation)
    public DlgAnim: cc.Animation = null;

    @property({
        type: cc.AnimationClip,
        tooltip: CC_DEV && '打开弹窗的动画',
        visible() { return !!this.DlgAnim; }
    })
    public OpenClip: cc.AnimationClip = null;

    @property({
        type: cc.AnimationClip,
        tooltip: CC_DEV && '关闭弹窗的动画',
        visible() { return !!this.DlgAnim; }
    })
    public CloseClip: cc.AnimationClip = null;

    /** 外部的resolve函数，在弹窗close时调用 */
    private _resolveList: Array<(value?: any) => void> = [];

    private _prefabUrl: string = '';
    /** 弹窗prefab在resources/prefab/dialog/下的路径 */
    public get prefabUrl(): string { return this._prefabUrl; }

    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.TOUCH_START , this.onTouchStart , this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE , this.onTouchMove , this);
        this.node.off(cc.Node.EventType.TOUCH_END , this.onTouchEnd , this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL , this.onTouchEnd , this);
    }
    protected onLoad(): void {
        if (this.DlgAnim) {
            this.OpenClip && this.DlgAnim.addClip(this.OpenClip);
            this.CloseClip && this.DlgAnim.addClip(this.CloseClip);
            this.DlgAnim.on(cc.Animation.EventType.FINISHED, this.onAnimFinished, this);
        }

        this.node.on(cc.Node.EventType.TOUCH_START , this.onTouchStart , this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE , this.onTouchMove , this);
        this.node.on(cc.Node.EventType.TOUCH_END , this.onTouchEnd , this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL , this.onTouchEnd , this);

        
    }
    onTouchStart(e) {
        e.stopPropagation()
    }

    onTouchMove(e) {
        e.stopPropagation()
    }

    onTouchEnd(e) {
        e.stopPropagation()
    }
    // protected resetInEditor(): void {
    //     if (CC_EDITOR) {
    //         for (let i = 0; i < this.node.childrenCount; i++) {
    //             let anim: cc.Animation = this.node.children[i].getComponent(cc.Animation);
    //             if (anim) {
    //                 this.DlgAnim = anim;
    //                 EditorTool.load<cc.AnimationClip>('res/animation/dialog/open.anim').then((v) => { this.OpenClip = v; });
    //                 EditorTool.load<cc.AnimationClip>('res/animation/dialog/close.anim').then((v) => { this.CloseClip = v; });
    //                 break;
    //             }
    //         }
    //     }
    // }

    protected onAnimFinished(): void {
        if (this.DlgAnim.currentClip === this.CloseClip) {
            this.close();
        }
    }

    /**
     * 打开动画
     */
    public playOpen(): void {
        if (this.DlgAnim && this.OpenClip) {
            this.DlgAnim.play(this.OpenClip.name);
        }
    }

    /**
     * 关闭动画，动画结束回调中会调用close销毁
     */
    public playClose(): void {
        if (this.DlgAnim && this.CloseClip) { 
            if (this.DlgAnim.getAnimationState(this.CloseClip.name).isPlaying) {
                return;
            }
            this.DlgAnim.play(this.CloseClip.name);
        } else {
            this.close();
        }
    }

    /**
     * 打开弹窗时的处理
     * @virtual
     */
    public open(...args: any[]): any {
    }

    /**
     * 关闭弹窗，销毁节点时的处理。
     * - 必须使用此接口销毁，子类重写时请调用super.close()
     * @virtual
     */
    public close(): any {
        this._resolveList.forEach((resolve) => { resolve(); });
        this.node.removeFromParent();
        this.node.destroy();
    }

    /**
     * 关闭按钮回调
     * @virtual
     */
    protected onClickClose(): void {
        this.playClose();
    }

    /**
     * 添加外部resolve函数，在弹窗close时调用
     */
    // public addResolve(resolve: (value?: any) => void): void {
        // Tool.arrayAdd(this._resolveList, resolve);
    // }
}
