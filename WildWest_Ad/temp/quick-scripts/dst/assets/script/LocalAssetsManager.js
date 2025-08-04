
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/LocalAssetsManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTG9jYWxBc3NldHNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxzQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQTtBQUV0RCxJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUE7QUFFOUIsV0FBVztBQUNYO0lBQUE7SUE0REEsQ0FBQztJQXhEZ0IsbUNBQWdCLEdBQTdCOzs7OzRCQUVJLHFCQUFNLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTzs0QkFFOUIsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQ0FDeEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNYLE9BQU07NkJBQ1Q7NEJBRUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7NEJBQ3BDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7NEJBQ3pCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQ2xCLFNBQVMsRUFBRSxDQUFDO2dDQUNaLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7b0NBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxzQkFBc0IsRUFBRTt3Q0FFdEcsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dDQUM1QixJQUFJLElBQUksRUFBRTs0Q0FDTixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO3lDQUNsRTtxQ0FDSjtvQ0FFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTt3Q0FFOUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dDQUM1QixJQUFJLElBQUksRUFBRTs0Q0FDTixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzt5Q0FDdEQ7cUNBQ0o7aUNBQ0o7Z0NBRUQsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO29DQUNwQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQ2Q7NEJBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLEVBQUE7O3dCQWxDRixTQWtDRSxDQUFBOzs7OztLQUNMO0lBRU0sZ0NBQWEsR0FBcEIsVUFBcUIsTUFBZ0I7UUFDakMseUNBQXlDO1FBQ3pDLHNEQUFzRDtRQUN0RCxzQkFBc0I7UUFDdEIsaUNBQWlDO1FBQ2pDLDBDQUEwQztRQUMxQyxnRkFBZ0Y7UUFDaEYsb0VBQW9FO1FBQ3BFLDBEQUEwRDtRQUMxRCx1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLFFBQVE7UUFDUixJQUFJO1FBRUosMkNBQTJDO1FBQzNDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBekRNLDRCQUFTLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7SUEwRG5ELHlCQUFDO0NBNURELEFBNERDLElBQUE7a0JBNURvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuY29uc3QgS2RlZmF1bHRfc3ByaXRlX3NwbGFzaCA9IFwiZGVmYXVsdF9zcHJpdGVfc3BsYXNoXCJcblxuY29uc3QgS3FpdVByZWZhYiA9IFwicWl1UHJlZmFiXCJcblxuLy8gQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsQXNzZXRzTWFuYWdlciB7XG5cbiAgICBzdGF0aWMgY29tbW9uTWFwOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xuXG4gICAgc3RhdGljIGFzeW5jIGxvYWRDb21tb25Bc3NldHMoKSB7XG5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoTG9jYWxBc3NldHNNYW5hZ2VyLmNvbW1vbk1hcC5zaXplID09IDIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKDEpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYXNzZXRzID0gY2MuYXNzZXRNYW5hZ2VyLmFzc2V0cztcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGFzc2V0cy5jb3VudDtcbiAgICAgICAgICAgIGxldCB0ZW1wQ291bnQgPSAwO1xuICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgdGVtcENvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSAhPSBudWxsKSB7IFxuICAgICAgICAgICAgICAgICAgICBpZiAoIUxvY2FsQXNzZXRzTWFuYWdlci5jb21tb25NYXAuaGFzKEtkZWZhdWx0X3Nwcml0ZV9zcGxhc2gpICYmIGVsZW1lbnQubmFtZSA9PT0gS2RlZmF1bHRfc3ByaXRlX3NwbGFzaCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXVpZCA9IGVsZW1lbnRbXCJfdXVpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxBc3NldHNNYW5hZ2VyLmNvbW1vbk1hcC5zZXQoS2RlZmF1bHRfc3ByaXRlX3NwbGFzaCwgdXVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIUxvY2FsQXNzZXRzTWFuYWdlci5jb21tb25NYXAuaGFzKEtxaXVQcmVmYWIpICYmIGVsZW1lbnQubmFtZSA9PT0gS3FpdVByZWZhYikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXVpZCA9IGVsZW1lbnRbXCJfdXVpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxBc3NldHNNYW5hZ2VyLmNvbW1vbk1hcC5zZXQoS3FpdVByZWZhYiwgdXVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgIGlmICh0ZW1wQ291bnQgPT0gY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHJlbGVhc2VQcmVmYWIocHJlZmFiOiBjYy5Bc3NldCkge1xuICAgICAgICAvLyBMb2NhbEFzc2V0c01hbmFnZXIubG9hZENvbW1vbkFzc2V0cygpO1xuICAgICAgICAvLyBsZXQgZGVwcyA9IGNjLmxvYWRlci5nZXREZXBlbmRzUmVjdXJzaXZlbHkocHJlZmFiKTtcbiAgICAgICAgLy8gbGV0IHRlbXBBcnJheSA9IFtdO1xuICAgICAgICAvLyBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGRlcHMpIHtcbiAgICAgICAgLy8gICAgIGlmICh0eXBlb2YgaXRlcmF0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgdXVpZDEgPSBMb2NhbEFzc2V0c01hbmFnZXIuY29tbW9uTWFwLmdldChLZGVmYXVsdF9zcHJpdGVfc3BsYXNoKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgdXVpZDIgPSBMb2NhbEFzc2V0c01hbmFnZXIuY29tbW9uTWFwLmdldChLcWl1UHJlZmFiKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoaXRlcmF0b3IgIT09IHV1aWQxICYmIGl0ZXJhdG9yICE9PSB1dWlkMikge1xuICAgICAgICAvLyAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaChpdGVyYXRvcilcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFzc2V0KHRlbXBBcnJheSk7XG4gICAgICAgIHByZWZhYi5kZWNSZWYoKTsgICBcbiAgICB9IFxufVxuIl19