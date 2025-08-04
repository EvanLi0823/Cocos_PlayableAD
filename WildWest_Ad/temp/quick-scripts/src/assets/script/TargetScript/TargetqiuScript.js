"use strict";
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