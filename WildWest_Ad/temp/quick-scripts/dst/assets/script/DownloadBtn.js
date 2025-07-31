
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/DownloadBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4602dOx0CJHopuNeOKmIB7I', 'DownloadBtn');
// script/DownloadBtn.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var gameConfig_1 = require("./gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DownloadBtn = /** @class */ (function (_super) {
    __extends(DownloadBtn, _super);
    function DownloadBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn = null;
        return _this;
    }
    DownloadBtn.prototype.onLoad = function () {
        cc.tween(this.btn)
            .repeatForever(cc.tween().sequence(cc.tween().to(1, { scale: 1.2 }), cc.tween().to(1, { scale: 1 })))
            .start();
    };
    DownloadBtn.prototype.callback = function () {
        console.log("点击了");
        //mtg打开下方这行
        if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.Mtg) {
            window.install && window.install();
        }
        else if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.AppLovin) {
            //applovin打开下方这行
            window.mraid && window.mraid.open('https://play.google.com/store/apps/details?id=com.newaa.slots.easter.bunny');
        }
    };
    __decorate([
        property(cc.Node)
    ], DownloadBtn.prototype, "btn", void 0);
    DownloadBtn = __decorate([
        ccclass
    ], DownloadBtn);
    return DownloadBtn;
}(cc.Component));
exports.default = DownloadBtn;
// update (dt) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRG93bmxvYWRCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7QUFDdEYsMkNBQXdEO0FBRWxELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMEJDO1FBdkJHLFNBQUcsR0FBWSxJQUFJLENBQUM7O0lBdUJ4QixDQUFDO0lBckJHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDYixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDZixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUM5QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUMvQixDQUNKO2FBQ0EsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLFdBQVc7UUFDWCxJQUFJLG9CQUFVLENBQUMsaUJBQWlCLEtBQUssMkJBQWMsQ0FBQyxHQUFHLEVBQUU7WUFDckQsTUFBTSxDQUFDLE9BQU8sSUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEM7YUFBSyxJQUFJLG9CQUFVLENBQUMsaUJBQWlCLEtBQUssMkJBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDaEUsZ0JBQWdCO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsNEVBQTRFLENBQUMsQ0FBQztTQUNuSDtJQUNMLENBQUM7SUF0QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRTtJQUhILFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQi9CO0lBQUQsa0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQndDLEVBQUUsQ0FBQyxTQUFTLEdBMEJwRDtrQkExQm9CLFdBQVc7QUE0QmhDLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuaW1wb3J0IGdhbWVDb25maWcsIHtQbGF5YWJsZUFkVHlwZX0gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvd25sb2FkQnRuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLCB7c2NhbGU6IDEuMn0pLFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDEsIHtzY2FsZTogMX0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBjYWxsYmFjaygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+S6hlwiKVxuICAgICAgICAvL210Z+aJk+W8gOS4i+aWuei/meihjFxuICAgICAgICBpZiAoZ2FtZUNvbmZpZy5nZXRQbGF5YWJsZUFkVHlwZSA9PT0gUGxheWFibGVBZFR5cGUuTXRnKSB7XG4gICAgICAgICAgICB3aW5kb3cuaW5zdGFsbCYmd2luZG93Lmluc3RhbGwoKTtcbiAgICAgICAgfWVsc2UgaWYgKGdhbWVDb25maWcuZ2V0UGxheWFibGVBZFR5cGUgPT09IFBsYXlhYmxlQWRUeXBlLkFwcExvdmluKSB7XG4gICAgICAgICAgICAvL2FwcGxvdmlu5omT5byA5LiL5pa56L+Z6KGMXG4gICAgICAgICAgICB3aW5kb3cubXJhaWQgJiYgd2luZG93Lm1yYWlkLm9wZW4oJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20ubmV3YWEuc2xvdHMuZWFzdGVyLmJ1bm55Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHVwZGF0ZSAoZHQpIHt9XG4iXX0=