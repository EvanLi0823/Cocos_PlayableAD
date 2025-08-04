
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/TargetScript/TargetqiuScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8eeeEQqJ1D2LeVfdOQGGy8', 'TargetqiuScript');
// script/TargetScript/TargetqiuScript.ts

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
var gameConfig_1 = require("../gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TargetqiuScript = /** @class */ (function (_super) {
    __extends(TargetqiuScript, _super);
    function TargetqiuScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qiuSprite = null;
        _this.txtSprite = null;
        _this.isFinsh = false;
        _this.qiuSize = 150;
        _this.txtSize = 40;
        _this._numberCount = 0;
        return _this;
    }
    Object.defineProperty(TargetqiuScript.prototype, "numberCount", {
        get: function () {
            return this._numberCount;
        },
        set: function (numberCount) {
            var _this = this;
            this._numberCount = numberCount;
            this.qiuSize = 150 * (1 + 0.1 * (numberCount - 4));
            this.txtSize = 40 * (1 + 0.1 * (numberCount - 4));
            this.loadQiuSpirte().then(function () {
                _this.qiuSprite.node.width = _this.qiuSize;
                _this.qiuSprite.node.height = _this.qiuSize;
            });
            this.loadTxtSpirte().then(function () {
                var scale = _this.txtSize * 1.0 / _this.txtSprite.spriteFrame.getOriginalSize().height;
                _this.txtSprite.node.height = _this.txtSize;
                _this.txtSprite.node.width = _this.txtSprite.spriteFrame.getOriginalSize().width * scale;
            });
        },
        enumerable: false,
        configurable: true
    });
    TargetqiuScript.prototype.loadQiuSpirte = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        cc.resources.load("img/qiu/ball_n" + Math.pow(2, _this._numberCount + 1) + "a", cc.SpriteFrame, function (err, res) {
                            if (res) {
                                _this.qiuSprite.spriteFrame = res;
                                resolve(1);
                            }
                        });
                    })];
            });
        });
    };
    TargetqiuScript.prototype.loadTxtSpirte = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        cc.resources.load("img/txt/txt_" + Math.pow(2, _this._numberCount + 1), cc.SpriteFrame, function (err, res) {
                            if (res) {
                                _this.txtSprite.spriteFrame = res;
                                resolve(1);
                            }
                        });
                    })];
            });
        });
    };
    // onLoad () {}
    TargetqiuScript.prototype.start = function () {
    };
    // update (dt) {}
    TargetqiuScript.prototype.movieCompleteScaleAnim = function () {
        var _this = this;
        var scale = 115.0 / 150;
        this.node.scale = 1;
        var qiuNode = this.qiuSprite.node;
        var txtNode = this.txtSprite.node;
        qiuNode.width = 150;
        qiuNode.height = 150;
        var txtscale = 40.0 / this.txtSprite.spriteFrame.getOriginalSize().height;
        txtNode.height = 40;
        txtNode.width = this.txtSprite.spriteFrame.getOriginalSize().width * txtscale;
        cc.tween(qiuNode)
            .to(0.25, { scale: 0.8 })
            .delay(0.1)
            .to(0.2, { scale: 0.3 })
            .to(0.2, { scale: 1.1 })
            .to(0.15, { scale: scale })
            .delay(0.1)
            .call(function () {
            if (_this._numberCount < 10) {
                _this.loadDataFixSize(++_this._numberCount);
            }
        })
            .start();
        cc.tween(txtNode)
            .to(0.15, { scale: 0.8 })
            .delay(0.2)
            .to(0.25, { scale: 0.3 })
            .to(0.2, { scale: 1.1 })
            .to(0.15, { scale: scale })
            .start();
    };
    TargetqiuScript.prototype.loadDataFixSize = function (number) {
        var _this = this;
        this._numberCount = number;
        this.loadQiuSpirte().then(function () {
            _this.qiuSprite.node.width = 150;
            _this.qiuSprite.node.height = 150;
        });
        this.loadTxtSpirte().then(function () {
            var scale = 40.0 / _this.txtSprite.spriteFrame.getOriginalSize().height;
            _this.txtSprite.node.height = 40;
            _this.txtSprite.node.width = _this.txtSprite.spriteFrame.getOriginalSize().width * scale;
        });
        gameConfig_1.default.setTargetLevel(number);
        // console.log(`targetNumberCount : ${number}`);
    };
    __decorate([
        property(cc.Sprite)
    ], TargetqiuScript.prototype, "qiuSprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], TargetqiuScript.prototype, "txtSprite", void 0);
    TargetqiuScript = __decorate([
        ccclass
    ], TargetqiuScript);
    return TargetqiuScript;
}(cc.Component));
exports.default = TargetqiuScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVGFyZ2V0U2NyaXB0L1RhcmdldHFpdVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFFakMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE0SEM7UUF6SEcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBVyxLQUFLLENBQUM7UUFFeEIsYUFBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFFTCxrQkFBWSxHQUFXLENBQUMsQ0FBQTs7SUErR3BDLENBQUM7SUE5R0csc0JBQUksd0NBQVc7YUFxQmY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQXZCRCxVQUFnQixXQUFXO1lBQTNCLGlCQW1CQztZQWxCRyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekMsS0FBSSxDQUFD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QyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3ZFLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDM0YsQ0FBQyxDQUFDLENBQUE7UUFFRixvQkFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxnREFBZ0Q7SUFDcEQsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFOWCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNEhuQztJQUFELHNCQUFDO0NBNUhELEFBNEhDLENBNUg0QyxFQUFFLENBQUMsU0FBUyxHQTRIeEQ7a0JBNUhvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4uL2dhbWVDb25maWdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldHFpdVNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHFpdVNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgdHh0U3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgaXNGaW5zaDpib29sZWFuID0gZmFsc2U7XG5cbiAgICBxaXVTaXplID0gMTUwO1xuICAgIHR4dFNpemUgPSA0MDtcblxuICAgIHByaXZhdGUgX251bWJlckNvdW50OiBudW1iZXIgPSAwXG4gICAgc2V0IG51bWJlckNvdW50KG51bWJlckNvdW50KSB7XG4gICAgICAgIHRoaXMuX251bWJlckNvdW50ID0gbnVtYmVyQ291bnQ7XG4gICAgICAgXG4gICAgICAgIHRoaXMucWl1U2l6ZSA9IDE1MCAqICgxICsgMC4xICogKG51bWJlckNvdW50IC0gNCkpO1xuICAgICAgICB0aGlzLnR4dFNpemUgPSA0MCAqICgxICsgMC4xICogKG51bWJlckNvdW50IC0gNCkpO1xuXG4gICAgICAgIHRoaXMubG9hZFFpdVNwaXJ0ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xaXVTcHJpdGUubm9kZS53aWR0aCA9IHRoaXMucWl1U2l6ZTtcbiAgICAgICAgICAgIHRoaXMucWl1U3ByaXRlLm5vZGUuaGVpZ2h0ID0gdGhpcy5xaXVTaXplO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvYWRUeHRTcGlydGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMudHh0U2l6ZSAqIDEuMCAvIHRoaXMudHh0U3ByaXRlLnNwcml0ZUZyYW1lLmdldE9yaWdpbmFsU2l6ZSgpLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudHh0U3ByaXRlLm5vZGUuaGVpZ2h0ID0gdGhpcy50eHRTaXplO1xuICAgICAgICAgICAgdGhpcy50eHRTcHJpdGUubm9kZS53aWR0aCA9IHRoaXMudHh0U3ByaXRlLnNwcml0ZUZyYW1lLmdldE9yaWdpbmFsU2l6ZSgpLndpZHRoICogc2NhbGU7XG4gICAgICAgIH0pIFxuXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldCBudW1iZXJDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlckNvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRRaXVTcGlydGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgaW1nL3FpdS9iYWxsX24ke01hdGgucG93KDIsIHRoaXMuX251bWJlckNvdW50KzEpfWFgLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnFpdVNwcml0ZS5zcHJpdGVGcmFtZSA9IHJlcyBhcyBjYy5TcHJpdGVGcmFtZTsgXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoMSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGxvYWRUeHRTcGlydGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYGltZy90eHQvdHh0XyR7TWF0aC5wb3coMiwgdGhpcy5fbnVtYmVyQ291bnQrMSl9YCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eHRTcHJpdGUuc3ByaXRlRnJhbWUgPSByZXMgYXMgY2MuU3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoMSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxuXG4gICAgbW92aWVDb21wbGV0ZVNjYWxlQW5pbSgpIHtcbiAgICAgICAgbGV0IHNjYWxlID0gMTE1LjAgLyAxNTA7IFxuXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgIGxldCBxaXVOb2RlID0gdGhpcy5xaXVTcHJpdGUubm9kZTtcbiAgICAgICAgbGV0IHR4dE5vZGUgPSB0aGlzLnR4dFNwcml0ZS5ub2RlO1xuXG4gICAgICAgIHFpdU5vZGUud2lkdGggPSAxNTA7XG4gICAgICAgIHFpdU5vZGUuaGVpZ2h0ID0gMTUwO1xuXG4gICAgICAgIGxldCB0eHRzY2FsZSA9IDQwLjAgLyB0aGlzLnR4dFNwcml0ZS5zcHJpdGVGcmFtZS5nZXRPcmlnaW5hbFNpemUoKS5oZWlnaHQ7XG4gICAgICAgIHR4dE5vZGUuaGVpZ2h0ID0gNDA7XG4gICAgICAgIHR4dE5vZGUud2lkdGggPSB0aGlzLnR4dFNwcml0ZS5zcHJpdGVGcmFtZS5nZXRPcmlnaW5hbFNpemUoKS53aWR0aCAqIHR4dHNjYWxlO1xuXG4gICAgICAgIGNjLnR3ZWVuKHFpdU5vZGUpXG4gICAgICAgICAgICAudG8oMC4yNSwgeyBzY2FsZTogMC44IH0pXG4gICAgICAgICAgICAuZGVsYXkoMC4xKVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMC4zIH0pXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjEgfSlcbiAgICAgICAgICAgIC50bygwLjE1LCB7IHNjYWxlOiBzY2FsZSB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuMSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fbnVtYmVyQ291bnQgPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFGaXhTaXplKCsrdGhpcy5fbnVtYmVyQ291bnQpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KClcblxuICAgICAgICBjYy50d2Vlbih0eHROb2RlKVxuICAgICAgICAgICAgLnRvKDAuMTUsIHsgc2NhbGU6IDAuOCB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuMilcbiAgICAgICAgICAgIC50bygwLjI1LCB7IHNjYWxlOiAwLjMgfSlcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuMSB9KVxuICAgICAgICAgICAgLnRvKDAuMTUsIHsgc2NhbGU6IHNjYWxlIH0pXG4gICAgICAgICAgICAuc3RhcnQoKVxuXG4gICAgfVxuXG4gICAgbG9hZERhdGFGaXhTaXplKG51bWJlcil7XG4gICAgICAgIHRoaXMuX251bWJlckNvdW50ID0gbnVtYmVyO1xuICAgICAgICB0aGlzLmxvYWRRaXVTcGlydGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucWl1U3ByaXRlLm5vZGUud2lkdGggPSAxNTA7XG4gICAgICAgICAgICB0aGlzLnFpdVNwcml0ZS5ub2RlLmhlaWdodCA9IDE1MDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkVHh0U3BpcnRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSA0MC4wIC8gdGhpcy50eHRTcHJpdGUuc3ByaXRlRnJhbWUuZ2V0T3JpZ2luYWxTaXplKCkuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy50eHRTcHJpdGUubm9kZS5oZWlnaHQgPSA0MDtcbiAgICAgICAgICAgIHRoaXMudHh0U3ByaXRlLm5vZGUud2lkdGggPSB0aGlzLnR4dFNwcml0ZS5zcHJpdGVGcmFtZS5nZXRPcmlnaW5hbFNpemUoKS53aWR0aCAqIHNjYWxlO1xuICAgICAgICB9KVxuXG4gICAgICAgIGdhbWVDb25maWcuc2V0VGFyZ2V0TGV2ZWwobnVtYmVyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRhcmdldE51bWJlckNvdW50IDogJHtudW1iZXJ9YCk7XG4gICAgfVxufVxuIl19