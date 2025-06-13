
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/ResMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '295d6wPmb9M6Kk+qkfOKT5O', 'ResMgr');
// script/utils/ResMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResMgr = void 0;
var ResMgr = /** @class */ (function () {
    function ResMgr() {
    }
    ResMgr.loadResourcesAsset = function (path, type) {
        return new Promise(function (resolve, reason) {
            cc.resources.load(path, type, function (err, sp) {
                if (sp) {
                    resolve(sp);
                }
                else {
                    console.warn("【加载资源失败】", path);
                }
            });
        });
    };
    return ResMgr;
}());
exports.ResMgr = ResMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvUmVzTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFZQSxDQUFDO0lBWFUseUJBQWtCLEdBQXpCLFVBQTBCLElBQVcsRUFBQyxJQUFJO1FBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUM5QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUcsSUFBSSxFQUFDLFVBQUMsR0FBRyxFQUFDLEVBQUU7Z0JBQ2pDLElBQUksRUFBRSxFQUFDO29CQUNILE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtpQkFDZDtxQkFBSTtvQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQTtpQkFDaEM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGFBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc01nciB7XG4gICAgc3RhdGljIGxvYWRSZXNvdXJjZXNBc3NldChwYXRoOnN0cmluZyx0eXBlKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlYXNvbik9PntcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGggLCB0eXBlLChlcnIsc3ApPT57XG4gICAgICAgICAgICAgICAgaWYgKHNwKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzcClcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi44CQ5Yqg6L296LWE5rqQ5aSx6LSl44CRXCIscGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iXX0=