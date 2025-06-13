"use strict";
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