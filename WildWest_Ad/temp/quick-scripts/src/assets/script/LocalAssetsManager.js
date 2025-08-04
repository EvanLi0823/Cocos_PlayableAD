"use strict";
cc._RF.push(module, '48264VFHk1Agash3wYXjvpK', 'LocalAssetsManager');
// script/LocalAssetsManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Kdefault_sprite_splash = "default_sprite_splash";
var KqiuPrefab = "qiuPrefab";
// @ccclass
var LocalAssetsManager = /** @class */ (function () {
    function LocalAssetsManager() {
    }
    LocalAssetsManager.loadCommonAssets = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            if (LocalAssetsManager.commonMap.size == 2) {
                                resolve(1);
                                return;
                            }
                            var assets = cc.assetManager.assets;
                            var count = assets.count;
                            var tempCount = 0;
                            assets.forEach(function (element) {
                                tempCount++;
                                if (element.name != null) {
                                    if (!LocalAssetsManager.commonMap.has(Kdefault_sprite_splash) && element.name === Kdefault_sprite_splash) {
                                        var uuid = element["_uuid"];
                                        if (uuid) {
                                            LocalAssetsManager.commonMap.set(Kdefault_sprite_splash, uuid);
                                        }
                                    }
                                    if (!LocalAssetsManager.commonMap.has(KqiuPrefab) && element.name === KqiuPrefab) {
                                        var uuid = element["_uuid"];
                                        if (uuid) {
                                            LocalAssetsManager.commonMap.set(KqiuPrefab, uuid);
                                        }
                                    }
                                }
                                if (tempCount == count) {
                                    resolve(1);
                                }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalAssetsManager.releasePrefab = function (prefab) {
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
    };
    LocalAssetsManager.commonMap = new Map();
    return LocalAssetsManager;
}());
exports.default = LocalAssetsManager;

cc._RF.pop();