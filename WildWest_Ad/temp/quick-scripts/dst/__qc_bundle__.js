
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/BigWinNode');
require('./assets/script/BingoScript');
require('./assets/script/BubbleAnimationScript');
require('./assets/script/ButtonSafe');
require('./assets/script/DestroyLocationScript');
require('./assets/script/DialogBase');
require('./assets/script/DownloadBtn');
require('./assets/script/FinalRandom/FinalRandom');
require('./assets/script/FinalRandom/Point');
require('./assets/script/GradeNoticeBoardScript');
require('./assets/script/GuideScript');
require('./assets/script/LocalAssetsManager');
require('./assets/script/Model/DataModel');
require('./assets/script/MoneyAnimation');
require('./assets/script/PlatformInteraction/JsbSdkScript');
require('./assets/script/PlatformInteraction/PIDelegate');
require('./assets/script/RightNode');
require('./assets/script/RoundRectMask');
require('./assets/script/TargetScript/TargetCompleteScript');
require('./assets/script/TargetScript/TargetqiuScript');
require('./assets/script/TrayScript');
require('./assets/script/UpRewardNode');
require('./assets/script/aduioTools');
require('./assets/script/boomScript');
require('./assets/script/gameConfig');
require('./assets/script/levelBarScript');
require('./assets/script/localDataManager');
require('./assets/script/qiuScript/GameManager');
require('./assets/script/qiuScript/InputController');
require('./assets/script/qiuScript/Juice');
require('./assets/script/qiuScript/qiuCollisionScript');
require('./assets/script/qiuScript/qiuItsOwnScript');
require('./assets/script/qiuScript/qiuMoveScript');
require('./assets/script/redbagFly');
require('./assets/script/rewardScript/rewardAnimScript');
require('./assets/script/rewardScript/rewardTipScript');
require('./assets/script/tireSteakScript');
require('./assets/script/topBubbleBgScript');
require('./assets/script/utils/ResMgr');
require('./assets/script/utils/RewardMgr');
require('./assets/script/utiltools');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/FinalRandom/Point.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6277nEcNNCgI99jmtXC1wR', 'Point');
// script/FinalRandom/Point.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.x = 0;
        this.y = 0;
        this.x = xPos;
        this.y = yPos;
    }
    return Point;
}());
exports.Point = Point;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRmluYWxSYW5kb20vUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHSSxlQUFvQixJQUFZLEVBQVUsSUFBWTtRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUZ0RCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUVWLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgICB4OiBudW1iZXIgPSAwO1xuICAgIHk6IG51bWJlciA9IDA7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB4UG9zOiBudW1iZXIsIHByaXZhdGUgeVBvczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhQb3M7XG4gICAgICAgIHRoaXMueSA9IHlQb3M7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BubbleAnimationScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b0aVjDi5F9LbVhu87eaiT', 'BubbleAnimationScript');
// script/BubbleAnimationScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BubbleAnimationScript = /** @class */ (function (_super) {
    __extends(BubbleAnimationScript, _super);
    function BubbleAnimationScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callBack = null;
        return _this;
        // update (dt) {}
    }
    BubbleAnimationScript.prototype.bubbleAnimationFinish = function () {
        this.node.destroy();
        if (this.callBack) {
            this.callBack();
        }
    };
    BubbleAnimationScript.prototype.onDestroy = function () {
        // console.log(`bubbleAnimation onDestroy`);
    };
    // onLoad () {}
    BubbleAnimationScript.prototype.start = function () {
    };
    BubbleAnimationScript = __decorate([
        ccclass
    ], BubbleAnimationScript);
    return BubbleAnimationScript;
}(cc.Component));
exports.default = BubbleAnimationScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQnViYmxlQW5pbWF0aW9uU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBcUJDO1FBbkJHLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBa0J6QixpQkFBaUI7SUFDckIsQ0FBQztJQWpCRyxxREFBcUIsR0FBckI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFDVSx5Q0FBUyxHQUFuQjtRQUNHLDRDQUE0QztJQUMvQyxDQUFDO0lBQ0QsZUFBZTtJQUVoQixxQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQWxCZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0FxQnpDO0lBQUQsNEJBQUM7Q0FyQkQsQUFxQkMsQ0FyQmtELEVBQUUsQ0FBQyxTQUFTLEdBcUI5RDtrQkFyQm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxlQW5pbWF0aW9uU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHsgXG4gICAgXG4gICAgY2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgYnViYmxlQW5pbWF0aW9uRmluaXNoKCl7XG5cbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgaWYodGhpcy5jYWxsQmFjaykge1xuICAgICAgICAgICAgdGhpcy5jYWxsQmFjaygpO1xuICAgICAgICB9XG4gICAgfSAgICBcbiAgICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGJ1YmJsZUFuaW1hdGlvbiBvbkRlc3Ryb3lgKTtcbiAgICAgfVxuICAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Model/DataModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0e9272OvFOUoDSvlNG7Vhd', 'DataModel');
// script/Model/DataModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTW9kZWwvRGF0YU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBTaW5nbGVSUENvbmZpZ01vZGVsID0ge1xuICAgIHZhbHVlOnN0cmluZyxcbiBcbiB9XG4gXG5leHBvcnQgdHlwZSBSZWNldmljZVJQUmVzdWx0TW9kZWwgPSB7XG4gICAgYW1vdW50OnN0cmluZyxcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PlatformInteraction/PIDelegate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8c02XcmaNJsKVlBC/AZT8r', 'PIDelegate');
// script/PlatformInteraction/PIDelegate.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUGxhdGZvcm1JbnRlcmFjdGlvbi9QSURlbGVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGludGVyZmFjZSBQYXNzUmV3YXJkRGVsZWdhdGUge1xuXG4gICAgZ2V0RXZlcnlSZXdhcmRBbW91bnRDYWxsQmFjaz86IChtb2RlbEpzb246c3RyaW5nKSA9PiAodm9pZCk7XG5cbiAgICBzaG93VmlkZW9DYWxsQmFjaz86IChtb2RlbEpzb246c3RyaW5nKSA9PiAodm9pZCk7XG5cbiAgICBnZXRNZXJnZVJld2FyZEFtb3VudENhbGxCYWNrPzogKG1vZGVsSnNvbjpzdHJpbmcpID0+ICh2b2lkKTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIGdhbWVTY2VuZURlbGVnYXRlIHtcblxuICAgIGdhbWVTY2VuZU9uUmVzdW1lKCk6KHZvaWQpO1xuXG4gICAgZ2FtZVNjZW5lV2lsbERpc2FwcGVhcigpOih2b2lkKTsgXG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/InputController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01f5emIrIpEorzhS4Ba4YOo', 'InputController');
// script/qiuScript/InputController.ts

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
var gameConfig_1 = require("../gameConfig");
var JsbSdkScript_1 = require("../PlatformInteraction/JsbSdkScript");
var GameManager_1 = require("./GameManager");
var qiuMoveScript_1 = require("./qiuMoveScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InputController = /** @class */ (function (_super) {
    __extends(InputController, _super);
    function InputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.warnGraphicLine = null;
        _this.touchNum = 0;
        _this.aTween = null;
        _this.obj = { apl: 0 };
        return _this;
        // update (dt) {}
    }
    InputController.prototype.onLoad = function () {
    };
    InputController.prototype.start = function () {
    };
    InputController.prototype.openTouch = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    InputController.prototype.onTouchStart = function (e) {
        if (this.touchNum == -1) {
            return;
        }
        if (cc.isValid(GameManager_1.default.Instance.targetQiu, true)) {
            this.touchNum = 1;
            // let posx = this.node.convertToNodeSpaceAR(e.getLocation()).x;
            // let posy = GameManager.Instance.targetQiu.y;
            // cc.tween(GameManager.Instance.targetQiu)
            //     .to(0.1, { position: cc.v3(posx, posy, 0) })
            //     .start();
            //
            // cc.tween(GameManager.Instance.trayBirdNode)
            //     .to(0.1, { position: cc.v3(posx, GameManager.Instance.trayBirdNode.y, 0) })
            //     .start()
        }
    };
    InputController.prototype.onTouchMove = function (e) {
        if (this.touchNum == -1) {
            return;
        }
        if (cc.isValid(GameManager_1.default.Instance.targetQiu, true)) {
            this.touchNum = 1;
            // let pos = this.node.convertToNodeSpaceAR(e.getLocation());
            // GameManager.Instance.targetQiu.x = pos.x;
            // GameManager.Instance.trayBirdNode.x = pos.x;
            // let moveScript = GameManager.Instance.targetQiu.getComponent(qiuMoveScript);
            // if(cc.isValid(moveScript , true)) {
            //     moveScript.raylineCheck();
            // }
        }
    };
    InputController.prototype.onTouchEnd = function (e) {
        if (cc.isValid(GameManager_1.default.Instance.targetQiu, true) && this.touchNum == 1) {
            this.touchNum = 0;
            var pos = this.node.convertToNodeSpaceAR(e.getLocation());
            // if (pos.x > cc.winSize.width / 2 - 1 || pos.x < -cc.winSize.width / 2 + 1) {
            //     pos.x = Math.max(-cc.winSize.width / 2 + 1, Math.min(cc.winSize.width / 2 - 1, pos.x));
            // }
            // GameManager.Instance.targetQiu.x = pos.x;
            // GameManager.Instance.trayBirdNode.x = pos.x;
            var targetQiu_1 = GameManager_1.default.Instance.targetQiu;
            GameManager_1.default.Instance.targetQiu = null;
            var birdY = GameManager_1.default.Instance.trayBirdNode.y;
            cc.tween(GameManager_1.default.Instance.trayBirdNode)
                // .to(0.07, { position: cc.v3(pos.x, birdY + 60, 0) })
                // .to(0.03, { position: cc.v3(pos.x, birdY, 0) })
                .call(function () {
                if (cc.isValid(targetQiu_1, true)) {
                    var com = targetQiu_1.getComponent(qiuMoveScript_1.default);
                    if (cc.isValid(com, true)) {
                        com.isDown = true;
                    }
                    targetQiu_1.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                    targetQiu_1.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -900);
                }
                // GameManager.Instance.targetQiu = null;
            })
                .start();
            if (gameConfig_1.default.isNewer == true) {
                gameConfig_1.default.saveNewer();
                JsbSdkScript_1.default.buryPoint("debug_game_start_first", "");
            }
            // this.scheduleOnce(() => {
            //     GameManager.Instance.createOneQiu();
            // }, 0.6);
        }
    };
    InputController.prototype.showWarn = function (isShow, warnLineHeigh) {
        if (isShow) {
            if (cc.isValid(this.warnGraphicLine, true) == false) {
                this.warnGraphicLine = this.node.addComponent(cc.Graphics);
            }
            this.drawLineOfDashes(this.warnGraphicLine, cc.v2(-cc.winSize.width / 2, warnLineHeigh), cc.v2(cc.winSize.width / 2, warnLineHeigh), 255);
            // if (cc.isValid(this.aTween, true)) {
            //     this.aTween.stop();
            //     this.aTween = null;
            // }
            //             let currentT = 0;
            //             this.aTween = cc.tween(this.obj)
            //                 .repeatForever(
            //                     cc.tween()
            //                         .by(5, { apl: 255 }, {
            //                             progress: (start, end: number, current, t: number) => {
            //                                 if(Math.abs(t - currentT) < 0.04) {
            //                                     return
            //                                 }
            //                                 currentT = t; 
            //                                 this.obj.apl = Math.floor(255 * t);
            //                                 console.log(`111 ${start} | ${end}| ${current} ${t} | ${this.obj.apl}`); 
            // 
            //                                 this.drawLineOfDashes(this.warnGraphicLine, cc.v2(-cc.winSize.width / 2, warnLineHeigh), cc.v2(cc.winSize.width / 2, warnLineHeigh) , this.obj.apl)
            //                              
            //                             }
            //                         })
            //                         .call(()=> {
            //                             this.obj.apl = 255;
            //                         })
            //                         .delay(0.4)
            //                         .to(5, { apl: 0 }, {
            //                             progress: (start, end: number, current, t: number) => {
            //                                 if(Math.abs(t - currentT) < 0.04) {
            //                                     return
            //                                 }
            //                                 currentT = t; 
            //                                 this.obj.apl = Math.floor(255 * t );
            //                                 console.log(`222 ${start} | ${end}| ${current} ${t}| ${this.obj.apl}`);
            //                                 this.drawLineOfDashes(this.warnGraphicLine, cc.v2(-cc.winSize.width / 2, warnLineHeigh), cc.v2(cc.winSize.width / 2, warnLineHeigh) , this.obj.apl)
            //                             }
            //                         })
            //                         .call(()=> {
            //                             this.obj.apl = 0;
            //                         })
            //                         .delay(0.4)
            //                 )
            //                 .start()
        }
        else {
            // if (cc.isValid(this.aTween, true)) {
            //     this.aTween.stop();
            //     this.aTween = null;
            // }
            if (cc.isValid(this.warnGraphicLine, true)) {
                this.warnGraphicLine.destroy();
            }
        }
    };
    InputController.prototype.drawLineOfDashes = function (g, from, to, alp, color, stroke, length, interval) {
        if (color === void 0) { color = '#FF4E4E'; }
        if (stroke === void 0) { stroke = true; }
        if (length === void 0) { length = 20; }
        if (interval === void 0) { interval = 20; }
        if (g) {
            //以 from：cc.v2(100, -100), to: cc.v2(500, -500) 为例
            var off = to.sub(from); //向量减法 值为cc.v2(400, -400)
            // console.log('向量减法', off)
            var dir = off.normalize(); //向量归一化法  值为cc.v2(0.707。。。, -0.707。。。)
            // console.log('向量归一化法', dir)
            var dis = off.mag(); //返回该向量的长度  值为 565.685424949238
            // console.log('向量的长度', dis)
            var delta = dir.mul(length + interval); // 缩放向量，并返回新结果 值为cc.v2(21.213。。。, -21.213。。。)
            // console.log('缩放向量', delta)
            var delta1 = dir.mul(length); //值为cc.v2(14.142。。。, -14.142。。。)
            // console.log('缩放向量', delta1)
            var offset = 0;
            var mn = 3;
            if (mn > interval) {
                offset = mn - interval;
            }
            var n = Math.floor(dis / (length + interval));
            g.lineWidth = 5; //线宽 
            g.strokeColor.fromHEX("FF6969");
            g.strokeColor.setA(alp);
            if (offset) {
                n--;
                g.moveTo(from.x, from.y);
                var start0 = from.add(cc.v2(dir.x * offset, dir.y * offset));
                g.circle(start0.x, start0.y, 2);
            }
            from = from.add(cc.v2(dir.x * mn, dir.y * mn));
            for (var i = 0; i < n; ++i) {
                var start = from.add(delta.mul(i));
                g.moveTo(start.x, start.y);
                var end = start.add(delta1);
                g.circle(end.x, end.y, 1);
            }
            var start1 = from.add(delta.mul(n));
            g.moveTo(start1.x, start1.y);
            if (length < dis - (length + interval) * n - mn) {
                var end = start1.add(delta1);
                g.circle(end.x, end.y, 1);
            }
            else {
                g.circle(to.x, to.y, 1);
            }
            if (stroke)
                g.stroke();
        }
    };
    InputController = __decorate([
        ccclass
    ], InputController);
    return InputController;
}(cc.Component));
exports.default = InputController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L0lucHV0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsb0VBQStEO0FBQy9ELDZDQUF3QztBQUN4QyxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFtTkM7UUFqTkcscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUE7O1FBME1oQixpQkFBaUI7SUFDckIsQ0FBQztJQTFNRyxnQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxD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QUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBak5nQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBbU5uQztJQUFELHNCQUFDO0NBbk5ELEFBbU5DLENBbk40QyxFQUFFLENBQUMsU0FBUyxHQW1OeEQ7a0JBbk5vQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4uL2dhbWVDb25maWdcIjtcbmltcG9ydCBKc2JTZGtTY3JpcHQgZnJvbSBcIi4uL1BsYXRmb3JtSW50ZXJhY3Rpb24vSnNiU2RrU2NyaXB0XCI7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBxaXVNb3ZlU2NyaXB0IGZyb20gXCIuL3FpdU1vdmVTY3JpcHRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICB3YXJuR3JhcGhpY0xpbmU6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHRvdWNoTnVtOiBudW1iZXIgPSAwO1xuXG4gICAgYVR3ZWVuOiBjYy5Ud2VlbiA9IG51bGw7XG5cbiAgICBvYmogPSB7IGFwbDogMCB9XG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBvcGVuVG91Y2goKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcblxuICAgICAgICBpZiAodGhpcy50b3VjaE51bSA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1LCB0cnVlKSkge1xuICAgICAgICAgICAgdGhpcy50b3VjaE51bSA9IDE7XG4gICAgICAgICAgICAvLyBsZXQgcG9zeCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLmdldExvY2F0aW9uKCkpLng7XG4gICAgICAgICAgICAvLyBsZXQgcG9zeSA9IEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdS55O1xuICAgICAgICAgICAgLy8gY2MudHdlZW4oR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1KVxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHBvc3gsIHBvc3ksIDApIH0pXG4gICAgICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gY2MudHdlZW4oR2FtZU1hbmFnZXIuSW5zdGFuY2UudHJheUJpcmROb2RlKVxuICAgICAgICAgICAgLy8gICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHBvc3gsIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRyYXlCaXJkTm9kZS55LCAwKSB9KVxuICAgICAgICAgICAgLy8gICAgIC5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoTnVtID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2MuaXNWYWxpZChHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUsIHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTnVtID0gMTtcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIC8vIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdS54ID0gcG9zLng7XG4gICAgICAgICAgICAvLyBHYW1lTWFuYWdlci5JbnN0YW5jZS50cmF5QmlyZE5vZGUueCA9IHBvcy54O1xuICAgICAgICAgICAgLy8gbGV0IG1vdmVTY3JpcHQgPSBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUuZ2V0Q29tcG9uZW50KHFpdU1vdmVTY3JpcHQpO1xuICAgICAgICAgICAgLy8gaWYoY2MuaXNWYWxpZChtb3ZlU2NyaXB0ICwgdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vICAgICBtb3ZlU2NyaXB0LnJheWxpbmVDaGVjaygpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdSwgdHJ1ZSkgJiYgdGhpcy50b3VjaE51bSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTnVtID0gMDtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgLy8gaWYgKHBvcy54ID4gY2Mud2luU2l6ZS53aWR0aCAvIDIgLSAxIHx8IHBvcy54IDwgLWNjLndpblNpemUud2lkdGggLyAyICsgMSkge1xuICAgICAgICAgICAgLy8gICAgIHBvcy54ID0gTWF0aC5tYXgoLWNjLndpblNpemUud2lkdGggLyAyICsgMSwgTWF0aC5taW4oY2Mud2luU2l6ZS53aWR0aCAvIDIgLSAxLCBwb3MueCkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1LnggPSBwb3MueDtcbiAgICAgICAgICAgIC8vIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRyYXlCaXJkTm9kZS54ID0gcG9zLng7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXRRaXUgPSBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXU7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGJpcmRZID0gR2FtZU1hbmFnZXIuSW5zdGFuY2UudHJheUJpcmROb2RlLnk7XG4gICAgICAgICAgICBjYy50d2VlbihHYW1lTWFuYWdlci5JbnN0YW5jZS50cmF5QmlyZE5vZGUpXG4gICAgICAgICAgICAgICAgLy8gLnRvKDAuMDcsIHsgcG9zaXRpb246IGNjLnYzKHBvcy54LCBiaXJkWSArIDYwLCAwKSB9KVxuICAgICAgICAgICAgICAgIC8vIC50bygwLjAzLCB7IHBvc2l0aW9uOiBjYy52Myhwb3MueCwgYmlyZFksIDApIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihjYy5pc1ZhbGlkKHRhcmdldFFpdSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb20gPSB0YXJnZXRRaXUuZ2V0Q29tcG9uZW50KHFpdU1vdmVTY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2MuaXNWYWxpZChjb20sIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tLmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFFpdS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgLTkwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAgICAgaWYgKGdhbWVDb25maWcuaXNOZXdlciA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBnYW1lQ29uZmlnLnNhdmVOZXdlcigpO1xuICAgICAgICAgICAgICAgIEpzYlNka1NjcmlwdC5idXJ5UG9pbnQoXCJkZWJ1Z19nYW1lX3N0YXJ0X2ZpcnN0XCIsXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS5jcmVhdGVPbmVRaXUoKTtcbiAgICAgICAgICAgIC8vIH0sIDAuNik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93V2Fybihpc1Nob3c6IGJvb2xlYW4sIHdhcm5MaW5lSGVpZ2g6IG51bWJlcikge1xuXG4gICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMud2FybkdyYXBoaWNMaW5lLCB0cnVlKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybkdyYXBoaWNMaW5lID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXdMaW5lT2ZEYXNoZXModGhpcy53YXJuR3JhcGhpY0xpbmUsIGNjLnYyKC1jYy53aW5TaXplLndpZHRoIC8gMiwgd2FybkxpbmVIZWlnaCksIGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCB3YXJuTGluZUhlaWdoKSwgMjU1KVxuICAgICAgICAgICAgLy8gaWYgKGNjLmlzVmFsaWQodGhpcy5hVHdlZW4sIHRydWUpKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hVHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuYVR3ZWVuID0gbnVsbDtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGN1cnJlbnRUID0gMDtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYVR3ZWVuID0gY2MudHdlZW4odGhpcy5vYmopXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC5ieSg1LCB7IGFwbDogMjU1IH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQ6IG51bWJlciwgY3VycmVudCwgdDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKHQgLSBjdXJyZW50VCkgPCAwLjA0KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IHQ7IFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5hcGwgPSBNYXRoLmZsb29yKDI1NSAqIHQpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgMTExICR7c3RhcnR9IHwgJHtlbmR9fCAke2N1cnJlbnR9ICR7dH0gfCAke3RoaXMub2JqLmFwbH1gKTsgXG4gICAgICAgICAgICAvLyBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZU9mRGFzaGVzKHRoaXMud2FybkdyYXBoaWNMaW5lLCBjYy52MigtY2Mud2luU2l6ZS53aWR0aCAvIDIsIHdhcm5MaW5lSGVpZ2gpLCBjYy52MihjYy53aW5TaXplLndpZHRoIC8gMiwgd2FybkxpbmVIZWlnaCkgLCB0aGlzLm9iai5hcGwpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5hcGwgPSAyNTU7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNClcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC50byg1LCB7IGFwbDogMCB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kOiBudW1iZXIsIGN1cnJlbnQsIHQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihNYXRoLmFicyh0IC0gY3VycmVudFQpIDwgMC4wNCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFQgPSB0OyBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouYXBsID0gTWF0aC5mbG9vcigyNTUgKiB0ICk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAyMjIgJHtzdGFydH0gfCAke2VuZH18ICR7Y3VycmVudH0gJHt0fXwgJHt0aGlzLm9iai5hcGx9YCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xpbmVPZkRhc2hlcyh0aGlzLndhcm5HcmFwaGljTGluZSwgY2MudjIoLWNjLndpblNpemUud2lkdGggLyAyLCB3YXJuTGluZUhlaWdoKSwgY2MudjIoY2Mud2luU2l6ZS53aWR0aCAvIDIsIHdhcm5MaW5lSGVpZ2gpICwgdGhpcy5vYmouYXBsKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5hcGwgPSAwO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjQpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIChjYy5pc1ZhbGlkKHRoaXMuYVR3ZWVuLCB0cnVlKSkge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuYVR3ZWVuLnN0b3AoKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFUd2VlbiA9IG51bGw7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLndhcm5HcmFwaGljTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5HcmFwaGljTGluZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3TGluZU9mRGFzaGVzKGc6IGNjLkdyYXBoaWNzLCBmcm9tOiBjYy5WZWMyLCB0bzogY2MuVmVjMiwgYWxwOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSAnI0ZGNEU0RScsIHN0cm9rZTogYm9vbGVhbiA9IHRydWUsIGxlbmd0aDogbnVtYmVyID0gMjAsIGludGVydmFsOiBudW1iZXIgPSAyMCk6IHZvaWQge1xuICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgLy/ku6UgZnJvbe+8mmNjLnYyKDEwMCwgLTEwMCksIHRvOiBjYy52Mig1MDAsIC01MDApIOS4uuS+i1xuICAgICAgICAgICAgbGV0IG9mZiA9IHRvLnN1Yihmcm9tKTsvL+WQkemHj+WHj+azlSDlgLzkuLpjYy52Mig0MDAsIC00MDApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5ZCR6YeP5YeP5rOVJywgb2ZmKVxuICAgICAgICAgICAgbGV0IGRpciA9IG9mZi5ub3JtYWxpemUoKTsvL+WQkemHj+W9kuS4gOWMluazlSAg5YC85Li6Y2MudjIoMC43MDfjgILjgILjgIIsIC0wLjcwN+OAguOAguOAgilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflkJHph4/lvZLkuIDljJbms5UnLCBkaXIpXG4gICAgICAgICAgICBsZXQgZGlzID0gb2ZmLm1hZygpOy8v6L+U5Zue6K+l5ZCR6YeP55qE6ZW/5bqmICDlgLzkuLogNTY1LjY4NTQyNDk0OTIzOFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WQkemHj+eahOmVv+W6picsIGRpcylcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGRpci5tdWwobGVuZ3RoICsgaW50ZXJ2YWwpOy8vIOe8qeaUvuWQkemHj++8jOW5tui/lOWbnuaWsOe7k+aenCDlgLzkuLpjYy52MigyMS4yMTPjgILjgILjgIIsIC0yMS4yMTPjgILjgILjgIIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn57yp5pS+5ZCR6YePJywgZGVsdGEpXG4gICAgICAgICAgICBsZXQgZGVsdGExID0gZGlyLm11bChsZW5ndGgpOyAgIC8v5YC85Li6Y2MudjIoMTQuMTQy44CC44CC44CCLCAtMTQuMTQy44CC44CC44CCKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+e8qeaUvuWQkemHjycsIGRlbHRhMSlcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgbGV0IG1uID0gMztcbiAgICAgICAgICAgIGlmIChtbiA+IGludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW4gLSBpbnRlcnZhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKGRpcyAvIChsZW5ndGggKyBpbnRlcnZhbCkpO1xuICAgICAgICAgICAgZy5saW5lV2lkdGggPSA1Oy8v57q/5a69IFxuICAgICAgICAgICAgZy5zdHJva2VDb2xvci5mcm9tSEVYKGBGRjY5NjlgKVxuICAgICAgICAgICAgZy5zdHJva2VDb2xvci5zZXRBKGFscClcbiAgICAgICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBuLS07XG4gICAgICAgICAgICAgICAgZy5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydDAgPSBmcm9tLmFkZChjYy52MihkaXIueCAqIG9mZnNldCwgZGlyLnkgKiBvZmZzZXQpKTtcbiAgICAgICAgICAgICAgICBnLmNpcmNsZShzdGFydDAueCwgc3RhcnQwLnksIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJvbSA9IGZyb20uYWRkKGNjLnYyKGRpci54ICogbW4sIGRpci55ICogbW4pKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBmcm9tLmFkZChkZWx0YS5tdWwoaSkpO1xuICAgICAgICAgICAgICAgIGcubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBzdGFydC5hZGQoZGVsdGExKTtcbiAgICAgICAgICAgICAgICBnLmNpcmNsZShlbmQueCwgZW5kLnksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0YXJ0MSA9IGZyb20uYWRkKGRlbHRhLm11bChuKSk7XG4gICAgICAgICAgICBnLm1vdmVUbyhzdGFydDEueCwgc3RhcnQxLnkpO1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA8IGRpcyAtIChsZW5ndGggKyBpbnRlcnZhbCkgKiBuIC0gbW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gc3RhcnQxLmFkZChkZWx0YTEpO1xuICAgICAgICAgICAgICAgIGcuY2lyY2xlKGVuZC54LCBlbmQueSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGcuY2lyY2xlKHRvLngsIHRvLnksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0cm9rZSkgZy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/rewardScript/rewardTipScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29e835afYVFD6H36KhMdm5p', 'rewardTipScript');
// script/rewardScript/rewardTipScript.ts

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
var aduioTools_1 = require("../aduioTools");
var gameConfig_1 = require("../gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardTipScript = /** @class */ (function (_super) {
    __extends(rewardTipScript, _super);
    function rewardTipScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLable = null;
        _this.rewardLabel = null;
        _this.rewardTipImg = null;
        _this._rewardValue = 0;
        _this.reciveCallBack = null;
        _this.showOverCallBack = null;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(rewardTipScript.prototype, "rewardValue", {
        get: function () {
            return this._rewardValue;
        },
        set: function (rewardValue) {
            this._rewardValue = rewardValue;
            var result = rewardValue;
            result = gameConfig_1.default.getUnifyMoney(rewardValue, 1);
            this.rewardLabel.string = gameConfig_1.default.getWord("rewardTip", result).string;
        },
        enumerable: false,
        configurable: true
    });
    rewardTipScript.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.titleLable.string = gameConfig_1.default.getWord("gkTips").title;
        gameConfig_1.default.setMoneySp(this.rewardTipImg);
    };
    rewardTipScript.prototype.start = function () {
        var _this = this;
        aduioTools_1.default.playSimpleAduioEngine(aduioTools_1.engineType.pass);
        cc.tween(this.node)
            .to(0.2, { opacity: 255 })
            .delay(1)
            .call(function () {
            _this.reciveCallBack(_this.rewardValue);
        })
            .delay(0.9)
            .call(function () {
            _this.node.removeComponent(cc.BlockInputEvents);
        })
            .to(0.2, { opacity: 0 })
            .call(function () {
            if (_this.showOverCallBack) {
                _this.showOverCallBack();
            }
            _this.node.destroy();
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], rewardTipScript.prototype, "titleLable", void 0);
    __decorate([
        property(cc.Label)
    ], rewardTipScript.prototype, "rewardLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], rewardTipScript.prototype, "rewardTipImg", void 0);
    rewardTipScript = __decorate([
        ccclass
    ], rewardTipScript);
    return rewardTipScript;
}(cc.Component));
exports.default = rewardTipScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcmV3YXJkU2NyaXB0L3Jld2FyZFRpcFNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUQ7QUFDdkQsNENBQXVDO0FBRWpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBeURDO1FBdERHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBWXpCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7UUErQmpDLGlCQUFpQjtJQUNyQixDQUFDO0lBN0NHLHNCQUFJLHdDQUFXO2FBT2Y7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQVRELFVBQWdCLFdBQVc7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDaEMsSUFBSSxNQUFNLEdBQU8sV0FBVyxDQUFDO1lBQ25DLE1BQU0sR0FBRyxvQkFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1RSxDQUFDOzs7T0FBQTtJQVVELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQzNELG9CQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUFBLGlCQXFCQztRQXBCRyxvQkFBVSxDQUFDLHFCQUFxQixDQUFDLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLENBQUM7YUFDdkIsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsR0FBRyxFQUFHLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3JCLElBQUksQ0FBQztZQUNGLElBQUcsS0FBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN0QixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUMzQjtZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNXO0lBVGQsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXlEbkM7SUFBRCxzQkFBQztDQXpERCxBQXlEQyxDQXpENEMsRUFBRSxDQUFDLFNBQVMsR0F5RHhEO2tCQXpEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi4vYWR1aW9Ub29sc1wiO1xuaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4uL2dhbWVDb25maWdcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJld2FyZFRpcFNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGVMYWJsZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHJld2FyZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHJld2FyZFRpcEltZzogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIF9yZXdhcmRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBzZXQgcmV3YXJkVmFsdWUocmV3YXJkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmV3YXJkVmFsdWUgPSByZXdhcmRWYWx1ZTtcbiAgICAgICAgbGV0IHJlc3VsdDphbnkgPSByZXdhcmRWYWx1ZTtcblx0XHRyZXN1bHQgPSBnYW1lQ29uZmlnLmdldFVuaWZ5TW9uZXkocmV3YXJkVmFsdWUsIDEpO1xuICAgICAgICB0aGlzLnJld2FyZExhYmVsLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcInJld2FyZFRpcFwiLHJlc3VsdCkuc3RyaW5nO1xuICAgIH1cblxuICAgIGdldCByZXdhcmRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jld2FyZFZhbHVlO1xuICAgIH1cblxuICAgIHJlY2l2ZUNhbGxCYWNrOkZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHNob3dPdmVyQ2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLnRpdGxlTGFibGUuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwiZ2tUaXBzXCIpLnRpdGxlXG4gICAgICAgIGdhbWVDb25maWcuc2V0TW9uZXlTcCh0aGlzLnJld2FyZFRpcEltZylcbiAgICB9XG5cbiAgICBzdGFydCgpIHsgXG4gICAgICAgIGFkdWlvVG9vbHMucGxheVNpbXBsZUFkdWlvRW5naW5lKGVuZ2luZVR5cGUucGFzcyk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgLnRvKDAuMiAsIHtvcGFjaXR5OjI1NX0pXG4gICAgICAgIC5kZWxheSgxKVxuICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjaXZlQ2FsbEJhY2sodGhpcy5yZXdhcmRWYWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5kZWxheSgwLjkpXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICAgICAgICB9KVxuICAgICAgICAudG8oMC4yICwge29wYWNpdHk6MH0pXG4gICAgICAgIC5jYWxsKCgpPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5zaG93T3ZlckNhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3ZlckNhbGxCYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGFydCgpOyBcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GuideScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5272jdyqtHTpVLhDmBti0B', 'GuideScript');
// script/GuideScript.ts

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
var gameConfig_1 = require("./gameConfig");
var GameManager_1 = require("./qiuScript/GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GuideScript = /** @class */ (function (_super) {
    __extends(GuideScript, _super);
    function GuideScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handNode = null;
        _this.remindLabel = null;
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    GuideScript.prototype.onLoad = function () {
        this.handNode.setPosition(GameManager_1.default.Instance.btnNode.getPosition());
    };
    GuideScript.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    GuideScript.prototype.start = function () {
        var _this = this;
        var _a = gameConfig_1.default.getWord('guide'), string = _a.string, fontSize = _a.fontSize;
        this.remindLabel.string = string;
        this.remindLabel.fontSize = fontSize;
        this.scheduleOnce(function () {
            _this.node.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart, _this);
        }, 0.5);
        cc.tween(this.handNode)
            .repeatForever(cc.tween()
            .to(0.35, { scale: 0.8 })
            .delay(0.07)
            .to(0.35, { scale: 1.5 })
            .delay(0.07)
            .to(0.5, { scale: 1 }))
            .start();
    };
    GuideScript.prototype.onTouchStart = function (e) {
        if (this.callback) {
            this.callback();
        }
        this.node.destroy();
    };
    GuideScript.prototype.onTouchMove = function (e) {
    };
    __decorate([
        property(cc.Node)
    ], GuideScript.prototype, "handNode", void 0);
    __decorate([
        property(cc.RichText)
    ], GuideScript.prototype, "remindLabel", void 0);
    GuideScript = __decorate([
        ccclass
    ], GuideScript);
    return GuideScript;
}(cc.Component));
exports.default = GuideScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvR3VpZGVTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWtEQztRQS9DRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUVoQyxjQUFRLEdBQVksSUFBSSxDQUFDOztRQXlDekIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6Q0csNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO0lBRXpFLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFBQSxpQkFrQkM7UUFqQlMsSUFBQSxLQUFxQixvQkFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBL0MsTUFBTSxZQUFBLEVBQUUsUUFBUSxjQUErQixDQUFBO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxDQUFDO1FBQ3pFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNsQixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDNUI7YUFDQSxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLENBQUM7UUFDVixJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksQ0FBQztJQUViLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO29EQUNVO0lBTmYsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtEL0I7SUFBRCxrQkFBQztDQWxERCxBQWtEQyxDQWxEd0MsRUFBRSxDQUFDLFNBQVMsR0FrRHBEO2tCQWxEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lQ29uZmlnIGZyb20gXCIuL2dhbWVDb25maWdcIjtcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9xaXVTY3JpcHQvR2FtZU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGhhbmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICByZW1pbmRMYWJlbDogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuaGFuZE5vZGUuc2V0UG9zaXRpb24oR2FtZU1hbmFnZXIuSW5zdGFuY2UuYnRuTm9kZS5nZXRQb3NpdGlvbigpKVxuXG4gICAgfSBcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB7c3RyaW5nLCBmb250U2l6ZX0gPSBnYW1lQ29uZmlnLmdldFdvcmQoJ2d1aWRlJylcbiAgICAgICAgdGhpcy5yZW1pbmRMYWJlbC5zdHJpbmcgPSBzdHJpbmc7XG4gICAgICAgIHRoaXMucmVtaW5kTGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIH0sIDAuNSk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kTm9kZSlcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMzUsIHsgc2NhbGU6MC44IH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjA3KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zNSwgeyBzY2FsZToxLjUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMDcpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6MSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICBpZih0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7IFxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/RightNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a1c4DSydxPnpsi+D571KOo', 'RightNode');
// script/RightNode.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var gameConfig_1 = require("./gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RightNode = /** @class */ (function (_super) {
    __extends(RightNode, _super);
    function RightNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.download = null;
        return _this;
    }
    RightNode.prototype.start = function () {
        this.download.string = gameConfig_1.default.getWord("download");
    };
    __decorate([
        property(cc.Label)
    ], RightNode.prototype, "download", void 0);
    RightNode = __decorate([
        ccclass
    ], RightNode);
    return RightNode;
}(cc.Component));
exports.default = RightNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUmlnaHROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQVFDO1FBTEcsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUFLN0IsQ0FBQztJQUhHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTTtJQUhSLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FRN0I7SUFBRCxnQkFBQztDQVJELEFBUUMsQ0FSc0MsRUFBRSxDQUFDLFNBQVMsR0FRbEQ7a0JBUm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpZ2h0Tm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZG93bmxvYWQ6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmRvd25sb2FkLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcImRvd25sb2FkXCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GradeNoticeBoardScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ce858lBlVMMZfvdHCLa30y', 'GradeNoticeBoardScript');
// script/GradeNoticeBoardScript.ts

// import aduioTools, { engineType } from "./aduioTools";
// import gameConfig from "./gameConfig";
// import JsbSdkScript from "./PlatformInteraction/JsbSdkScript";
// import GameManager from "./qiuScript/GameManager";
// import qiuCollisionScript from "./qiuScript/qiuCollisionScript";
// import qiuMoveScript from "./qiuScript/qiuMoveScript";
// import TargetqiuScript from "./TargetScript/TargetqiuScript";
// import topBubbleBgScript from "./topBubbleBgScript";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class GradeNoticeBoardScript extends cc.Component {
//     @property(cc.Node)
//     bgNode: cc.Node = null;
//     // @property(cc.Prefab)
//     // qiuPrefab: cc.Prefab = null;
//     @property(cc.Label)
//     title: cc.Label = null
//     // @property(cc.Node)
//     // girl: cc.Node = null
//     // @property(cc.RichText)
//     // remindLabel:cc.RichText = null;
//     // @property(cc.Prefab)
//     // targetQiuPrefab: cc.Prefab = null;
//     dismissCallBack:Function = null;
//     // onLoad () {}
//     targetNode: cc.Node = null;
//     onDestroy() {
//         // console.log(`GradeNoticeBoardScript OnDestroy`); 
//     }
//     start() {
//         this.title.string = gameConfig.getWord("guideNoticeTitle")
//         let targetNode = cc.find("headNode/UI_top_bubble_bg_01" , GameManager.Instance.displayNode); 
//         this.targetNode = targetNode;
//         this.bgNode.scaleY = 0;
//         let level = 4;
//         let levelNode:cc.Node = null;
//         cc.resources.load("prefab/TargetqiuPrefab", cc.Prefab, (err, res) => {
//             if (res) {
//                 // let boardNode = cc.instantiate(res as cc.Prefab);
//                 levelNode = cc.instantiate(res as cc.Prefab);
//                 levelNode.getComponent(TargetqiuScript).numberCount = level;  
//                 levelNode.setPosition(0, -20);  
//                 this.bgNode.addChild(levelNode);
//             }
//         })
//         // let levelNode = cc.instantiate(this.targetQiuPrefab);
//         // levelNode.getComponent(TargetqiuScript).numberCount = level; 
//         // levelNode.setPosition(0, -20); 
//         // this.bgNode.addChild(levelNode);
//         cc.tween(this.bgNode)
//             .to(0.4, { scaleY: 1.1 })
//             .to(0.2, { scaleY: 0.9 })
//             .to(0.2, { scaleY: 1.0 })
//             .delay(0.1)
//             .call(() => {
//                 let post = this.targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
//                 let targetPos = levelNode.convertToNodeSpaceAR(post);
//                 let tpos = cc.v3(targetPos.x, targetPos.y - 18, 0);
//                 let qiuNode = levelNode.getChildByName("qiuNode");
//                 let scale = 115.0/qiuNode.height;
//                 cc.tween(levelNode)
//                     .parallel(
//                         cc.tween(levelNode).to(0.5, { position: cc.v3(tpos.x, tpos.y + 20, 0)}),
//                         cc.tween(qiuNode).to(0.5, {scale:scale})
//                     )
//                     .to(0.2, { position: cc.v3(tpos.x, tpos.y - 15, 0) })
//                     .to(0.15, { position: cc.v3(tpos.x, tpos.y + 12, 0) })
//                     .to(0.1, { position: cc.v3(tpos.x, tpos.y - 10, 0) })
//                     .to(0.07, { position: cc.v3(tpos.x, tpos.y, 0) })
//                     .call(() => {
//                         this.targetNode.getComponent(topBubbleBgScript).targetNode = levelNode;
//                         this.targetNode.getComponent(topBubbleBgScript).mountQiuAnimation();
//                         this.dismissNode();
//                     })
//                     .start();
//             })
//             .start();
//         // cc.tween(this.girl)
//         //     .delay(0.4)
//         //     .parallel(
//         //         cc.tween().call(()=> {
//         //             aduioTools.playSimpleAduioEngine(engineType.girlLaugh)
//         //         }),
//         //         cc.tween().to(0.4, { position: cc.v3(0, this.girl.height * 9 * 1.0 / 10, 0) })
//         //     )
//         //     .start();
//     }
//     dismissNode() {
//         // cc.tween(this.girl)
//         //     .to(0.3, { position: cc.v3(0, 0, 0) })
//         //     .start();
//         cc.tween(this.bgNode)
//             .delay(0.3)
//             .to(0.3, { scaleY: 0 })
//             .call(() => {
//                 this.node.destroy();
//                 if(this.dismissCallBack) {
//                     this.dismissCallBack();
//                 }
//             })
//             .start();
//     }
//     // update (dt) {}
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvR3JhZGVOb3RpY2VCb2FyZFNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBeUQ7QUFDekQseUNBQXlDO0FBQ3pDLGlFQUFpRTtBQUNqRSxxREFBcUQ7QUFDckQsbUVBQW1FO0FBQ25FLHlEQUF5RDtBQUN6RCxnRUFBZ0U7QUFDaEUsdURBQXVEO0FBR3ZELCtDQUErQztBQUUvQyxXQUFXO0FBQ1gscUVBQXFFO0FBRXJFLHlCQUF5QjtBQUN6Qiw4QkFBOEI7QUFFOUIsOEJBQThCO0FBQzlCLHNDQUFzQztBQUV0QywwQkFBMEI7QUFDMUIsNkJBQTZCO0FBRTdCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFFOUIsZ0NBQWdDO0FBQ2hDLHlDQUF5QztBQUV6Qyw4QkFBOEI7QUFDOUIsNENBQTRDO0FBRTVDLHVDQUF1QztBQUN2QyxzQkFBc0I7QUFDdEIsa0NBQWtDO0FBQ2xDLG9CQUFvQjtBQUNwQiwrREFBK0Q7QUFDL0QsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixxRUFBcUU7QUFDckUsd0dBQXdHO0FBRXhHLHdDQUF3QztBQUV4QyxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBRXpCLHdDQUF3QztBQUN4QyxpRkFBaUY7QUFDakYseUJBQXlCO0FBQ3pCLHVFQUF1RTtBQUN2RSxnRUFBZ0U7QUFDaEUsaUZBQWlGO0FBQ2pGLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFFYixtRUFBbUU7QUFDbkUsMkVBQTJFO0FBRTNFLDZDQUE2QztBQUU3Qyw4Q0FBOEM7QUFFOUMsZ0NBQWdDO0FBQ2hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQiw0QkFBNEI7QUFFNUIsaUZBQWlGO0FBQ2pGLHdFQUF3RTtBQUN4RSxzRUFBc0U7QUFFdEUscUVBQXFFO0FBQ3JFLG9EQUFvRDtBQUNwRCxzQ0FBc0M7QUFDdEMsaUNBQWlDO0FBQ2pDLG1HQUFtRztBQUNuRyxtRUFBbUU7QUFDbkUsd0JBQXdCO0FBQ3hCLDRFQUE0RTtBQUM1RSw2RUFBNkU7QUFDN0UsNEVBQTRFO0FBQzVFLHdFQUF3RTtBQUN4RSxvQ0FBb0M7QUFDcEMsa0dBQWtHO0FBQ2xHLCtGQUErRjtBQUMvRiw4Q0FBOEM7QUFDOUMseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakIsd0JBQXdCO0FBRXhCLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLDRDQUE0QztBQUM1QyxnRkFBZ0Y7QUFDaEYseUJBQXlCO0FBQ3pCLG9HQUFvRztBQUNwRyxtQkFBbUI7QUFFbkIsMkJBQTJCO0FBQzNCLFFBQVE7QUFFUixzQkFBc0I7QUFDdEIsaUNBQWlDO0FBQ2pDLHdEQUF3RDtBQUN4RCwyQkFBMkI7QUFFM0IsZ0NBQWdDO0FBQ2hDLDBCQUEwQjtBQUMxQixzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBQzVCLHVDQUF1QztBQUN2Qyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsd0JBQXdCO0FBRXhCLFFBQVE7QUFFUix3QkFBd0I7QUFDeEIsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi9hZHVpb1Rvb2xzXCI7XG4vLyBpbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XG4vLyBpbXBvcnQgSnNiU2RrU2NyaXB0IGZyb20gXCIuL1BsYXRmb3JtSW50ZXJhY3Rpb24vSnNiU2RrU2NyaXB0XCI7XG4vLyBpbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vcWl1U2NyaXB0L0dhbWVNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgcWl1Q29sbGlzaW9uU2NyaXB0IGZyb20gXCIuL3FpdVNjcmlwdC9xaXVDb2xsaXNpb25TY3JpcHRcIjtcbi8vIGltcG9ydCBxaXVNb3ZlU2NyaXB0IGZyb20gXCIuL3FpdVNjcmlwdC9xaXVNb3ZlU2NyaXB0XCI7XG4vLyBpbXBvcnQgVGFyZ2V0cWl1U2NyaXB0IGZyb20gXCIuL1RhcmdldFNjcmlwdC9UYXJnZXRxaXVTY3JpcHRcIjtcbi8vIGltcG9ydCB0b3BCdWJibGVCZ1NjcmlwdCBmcm9tIFwiLi90b3BCdWJibGVCZ1NjcmlwdFwiO1xuXG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFkZU5vdGljZUJvYXJkU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxuLy8gICAgIC8vIHFpdVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbi8vICAgICB0aXRsZTogY2MuTGFiZWwgPSBudWxsXG5cbi8vICAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbi8vICAgICAvLyBnaXJsOiBjYy5Ob2RlID0gbnVsbFxuICAgIFxuLy8gICAgIC8vIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbi8vICAgICAvLyByZW1pbmRMYWJlbDpjYy5SaWNoVGV4dCA9IG51bGw7XG5cbi8vICAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxuLy8gICAgIC8vIHRhcmdldFFpdVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIGRpc21pc3NDYWxsQmFjazpGdW5jdGlvbiA9IG51bGw7XG4vLyAgICAgLy8gb25Mb2FkICgpIHt9XG4vLyAgICAgdGFyZ2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4vLyAgICAgb25EZXN0cm95KCkge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhgR3JhZGVOb3RpY2VCb2FyZFNjcmlwdCBPbkRlc3Ryb3lgKTsgXG4vLyAgICAgfVxuLy8gICAgIHN0YXJ0KCkge1xuLy8gICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcImd1aWRlTm90aWNlVGl0bGVcIilcbi8vICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5maW5kKFwiaGVhZE5vZGUvVUlfdG9wX2J1YmJsZV9iZ18wMVwiICwgR2FtZU1hbmFnZXIuSW5zdGFuY2UuZGlzcGxheU5vZGUpOyBcbiAgICAgICAgIFxuLy8gICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXROb2RlO1xuXG4vLyAgICAgICAgIHRoaXMuYmdOb2RlLnNjYWxlWSA9IDA7XG4vLyAgICAgICAgIGxldCBsZXZlbCA9IDQ7XG5cbi8vICAgICAgICAgbGV0IGxldmVsTm9kZTpjYy5Ob2RlID0gbnVsbDtcbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvVGFyZ2V0cWl1UHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAocmVzKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gbGV0IGJvYXJkTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgIGxldmVsTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgIGxldmVsTm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5udW1iZXJDb3VudCA9IGxldmVsOyAgXG4vLyAgICAgICAgICAgICAgICAgbGV2ZWxOb2RlLnNldFBvc2l0aW9uKDAsIC0yMCk7ICBcbi8vICAgICAgICAgICAgICAgICB0aGlzLmJnTm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICAgIC8vIGxldCBsZXZlbE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRhcmdldFFpdVByZWZhYik7XG4vLyAgICAgICAgIC8vIGxldmVsTm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5udW1iZXJDb3VudCA9IGxldmVsOyBcbiBcbi8vICAgICAgICAgLy8gbGV2ZWxOb2RlLnNldFBvc2l0aW9uKDAsIC0yMCk7IFxuXG4vLyAgICAgICAgIC8vIHRoaXMuYmdOb2RlLmFkZENoaWxkKGxldmVsTm9kZSk7XG5cbi8vICAgICAgICAgY2MudHdlZW4odGhpcy5iZ05vZGUpXG4vLyAgICAgICAgICAgICAudG8oMC40LCB7IHNjYWxlWTogMS4xIH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlWTogMC45IH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlWTogMS4wIH0pXG4vLyAgICAgICAgICAgICAuZGVsYXkoMC4xKVxuLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IHBvc3QgPSB0aGlzLnRhcmdldE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbi8vICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gbGV2ZWxOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc3QpO1xuLy8gICAgICAgICAgICAgICAgIGxldCB0cG9zID0gY2MudjModGFyZ2V0UG9zLngsIHRhcmdldFBvcy55IC0gMTgsIDApO1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IHFpdU5vZGUgPSBsZXZlbE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaXVOb2RlXCIpO1xuLy8gICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IDExNS4wL3FpdU5vZGUuaGVpZ2h0O1xuLy8gICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGxldmVsTm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obGV2ZWxOb2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKHRwb3MueCwgdHBvcy55ICsgMjAsIDApfSksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihxaXVOb2RlKS50bygwLjUsIHtzY2FsZTpzY2FsZX0pXG4vLyAgICAgICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBwb3NpdGlvbjogY2MudjModHBvcy54LCB0cG9zLnkgLSAxNSwgMCkgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMTUsIHsgcG9zaXRpb246IGNjLnYzKHRwb3MueCwgdHBvcy55ICsgMTIsIDApIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHRwb3MueCwgdHBvcy55IC0gMTAsIDApIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC50bygwLjA3LCB7IHBvc2l0aW9uOiBjYy52Myh0cG9zLngsIHRwb3MueSwgMCkgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudCh0b3BCdWJibGVCZ1NjcmlwdCkudGFyZ2V0Tm9kZSA9IGxldmVsTm9kZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQodG9wQnViYmxlQmdTY3JpcHQpLm1vdW50UWl1QW5pbWF0aW9uKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NOb2RlKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC5zdGFydCgpO1xuXG4vLyAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuZ2lybClcbi8vICAgICAgICAgLy8gICAgIC5kZWxheSgwLjQpXG4vLyAgICAgICAgIC8vICAgICAucGFyYWxsZWwoXG4vLyAgICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpPT4ge1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICBhZHVpb1Rvb2xzLnBsYXlTaW1wbGVBZHVpb0VuZ2luZShlbmdpbmVUeXBlLmdpcmxMYXVnaClcbi8vICAgICAgICAgLy8gICAgICAgICB9KSxcbi8vICAgICAgICAgLy8gICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoMCwgdGhpcy5naXJsLmhlaWdodCAqIDkgKiAxLjAgLyAxMCwgMCkgfSlcbi8vICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAgXG4vLyAgICAgICAgIC8vICAgICAuc3RhcnQoKTtcbi8vICAgICB9XG5cbi8vICAgICBkaXNtaXNzTm9kZSgpIHtcbi8vICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5naXJsKVxuLy8gICAgICAgICAvLyAgICAgLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCkgfSlcbi8vICAgICAgICAgLy8gICAgIC5zdGFydCgpO1xuXG4vLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYmdOb2RlKVxuLy8gICAgICAgICAgICAgLmRlbGF5KDAuMylcbi8vICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVZOiAwIH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbi8vICAgICAgICAgICAgICAgICBpZih0aGlzLmRpc21pc3NDYWxsQmFjaykge1xuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDYWxsQmFjaygpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAuc3RhcnQoKTtcblxuLy8gICAgIH1cblxuLy8gICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4vLyB9XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/RoundRectMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8ccexm2c1MCbcyl+Q1P8ME', 'RoundRectMask');
// script/RoundRectMask.ts

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
exports.RoundRectMask = void 0;
var property = cc._decorator.property;
var ccclass = cc._decorator.ccclass;
var executeInEditMode = cc._decorator.executeInEditMode;
var disallowMultiple = cc._decorator.disallowMultiple;
var requireComponent = cc._decorator.requireComponent;
var menu = cc._decorator.menu;
cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
var RoundRectMask = /** @class */ (function (_super) {
    __extends(RoundRectMask, _super);
    function RoundRectMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._radius = 50;
        // @property(cc.Mask)
        _this.mask = null;
        return _this;
    }
    Object.defineProperty(RoundRectMask.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        //    public radius: number = 50;
        set: function (r) {
            this._radius = r;
            this.updateMask(r);
        },
        enumerable: false,
        configurable: true
    });
    RoundRectMask.prototype.onEnable = function () {
        this.mask = this.getComponent(cc.Mask);
        this.updateMask(this.radius);
    };
    RoundRectMask.prototype.updateMask = function (r) {
        var _radius = r >= 0 ? r : 0;
        if (_radius < 1) {
            _radius = Math.min(this.node.width, this.node.height) * _radius;
        }
        this.mask["radius"] = _radius;
        this.mask["onDraw"] = this.onDraw.bind(this.mask);
        this.mask["_updateGraphics"] = this._updateGraphics.bind(this.mask);
        this.mask.type = cc.Mask.Type.RECT;
    };
    RoundRectMask.prototype._updateGraphics = function () {
        // @ts-ignore.
        var graphics = this._graphics;
        if (!graphics) {
            return;
        }
        this.onDraw(graphics);
    };
    /**
     * mask 用于绘制罩子的函数.
     * this 指向mask 对象,需要特别注意.
     * @param graphics
     */
    RoundRectMask.prototype.onDraw = function (graphics) {
        // Share render data with graphics content
        graphics.clear(false);
        var node = this.node;
        var width = node.width;
        var height = node.height;
        var x = -width * node.anchorX;
        var y = -height * node.anchorY;
        graphics.roundRect(x, y, width, height, this.radius || 0);
        graphics.strokeColor = cc.color(0, 0, 0, 255);
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
            graphics.stroke();
        }
        else {
            graphics.fill();
        }
    };
    __decorate([
        property()
    ], RoundRectMask.prototype, "_radius", void 0);
    __decorate([
        property({ tooltip: "圆角半径:\n0-1之间为最小边长比例值, \n>1为具体像素值" })
    ], RoundRectMask.prototype, "radius", null);
    RoundRectMask = __decorate([
        ccclass()
        //@ts-ignore
        ,
        executeInEditMode(true)
        //@ts-ignore
        ,
        disallowMultiple(true),
        requireComponent(cc.Mask),
        menu("渲染组件/圆角遮罩")
    ], RoundRectMask);
    return RoundRectMask;
}(cc.Component));
exports.RoundRectMask = RoundRectMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUm91bmRSZWN0TWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUksSUFBTyxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDekMsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDdkMsSUFBTyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO0FBQzNELElBQU8sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN6RCxJQUFPLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDekQsSUFBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFTdkM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUFvRUM7UUFqRVcsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQWM3QixxQkFBcUI7UUFDWCxVQUFJLEdBQVksSUFBSSxDQUFDOztJQWtEbkMsQ0FBQztJQTdERyxzQkFBVyxpQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO1FBRUwsaUNBQWlDO2FBQzdCLFVBQWtCLENBQVM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FOQTtJQVdTLGdDQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsQ0FBUztRQUN4QixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUNuRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyx1Q0FBZSxHQUF2QjtRQUVJLGNBQWM7UUFDZCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sOEJBQU0sR0FBaEIsVUFBaUIsUUFBcUI7UUFDbEMsMENBQTBDO1FBQzFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFMUQsUUFBUSxDQUFDLFdBQVcsR0FBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNuRCxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNILFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFoRUQ7UUFEQyxRQUFRLEVBQUU7a0RBQ2tCO0lBSTdCO1FBRkMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLGtDQUFrQyxFQUFDLENBQUM7K0NBSXZEO0lBVFEsYUFBYTtRQVB6QixPQUFPLEVBQUU7UUFDVixZQUFZOztRQUNYLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUN4QixZQUFZOztRQUNYLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUN0QixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUM7T0FDTCxhQUFhLENBb0V6QjtJQUFELG9CQUFDO0NBcEVELEFBb0VDLENBcEVrQyxFQUFFLENBQUMsU0FBUyxHQW9FOUM7QUFwRVksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW1wb3J0IHByb3BlcnR5ID0gY2MuX2RlY29yYXRvci5wcm9wZXJ0eTtcclxuICAgIGltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xyXG4gICAgaW1wb3J0IGV4ZWN1dGVJbkVkaXRNb2RlID0gY2MuX2RlY29yYXRvci5leGVjdXRlSW5FZGl0TW9kZTtcclxuICAgIGltcG9ydCBkaXNhbGxvd011bHRpcGxlID0gY2MuX2RlY29yYXRvci5kaXNhbGxvd011bHRpcGxlO1xyXG4gICAgaW1wb3J0IHJlcXVpcmVDb21wb25lbnQgPSBjYy5fZGVjb3JhdG9yLnJlcXVpcmVDb21wb25lbnQ7XHJcbiAgICBpbXBvcnQgbWVudSA9IGNjLl9kZWNvcmF0b3IubWVudTtcclxuXHJcbiAgICBjYy5tYWNyby5FTkFCTEVfV0VCR0xfQU5USUFMSUFTID0gdHJ1ZTtcclxuXHJcbiAgICBAY2NjbGFzcygpXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIEBleGVjdXRlSW5FZGl0TW9kZSh0cnVlKVxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBAZGlzYWxsb3dNdWx0aXBsZSh0cnVlKVxyXG4gICAgQHJlcXVpcmVDb21wb25lbnQoY2MuTWFzaylcclxuICAgIEBtZW51KFwi5riy5p+T57uE5Lu2L+WchuinkumBrue9qVwiKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvdW5kUmVjdE1hc2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgICAgICBAcHJvcGVydHkoKVxyXG4gICAgICAgIHByaXZhdGUgX3JhZGl1czogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgICAgIEBwcm9wZXJ0eSh7dG9vbHRpcDogXCLlnIbop5LljYrlvoQ6XFxuMC0x5LmL6Ze05Li65pyA5bCP6L656ZW/5q+U5L6L5YC8LCBcXG4+MeS4uuWFt+S9k+WDj+e0oOWAvFwifSlcclxuXHJcbiAgICAgICAgcHVibGljIGdldCByYWRpdXMoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gNTA7XHJcbiAgICAgICAgcHVibGljIHNldCByYWRpdXMocjogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGl1cyA9IHI7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFzayhyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEBwcm9wZXJ0eShjYy5NYXNrKVxyXG4gICAgICAgIHByb3RlY3RlZCBtYXNrOiBjYy5NYXNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNYXNrKHRoaXMucmFkaXVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlTWFzayhyOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgbGV0IF9yYWRpdXMgPSByID49IDAgPyByIDogMDtcclxuICAgICAgICAgICAgaWYgKF9yYWRpdXMgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBfcmFkaXVzID0gTWF0aC5taW4odGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KSAqIF9yYWRpdXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXNrW1wicmFkaXVzXCJdID0gX3JhZGl1cztcclxuICAgICAgICAgICAgdGhpcy5tYXNrW1wib25EcmF3XCJdID0gdGhpcy5vbkRyYXcuYmluZCh0aGlzLm1hc2spO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tbXCJfdXBkYXRlR3JhcGhpY3NcIl0gPSB0aGlzLl91cGRhdGVHcmFwaGljcy5iaW5kKHRoaXMubWFzayk7XHJcbiAgICAgICAgICAgIHRoaXMubWFzay50eXBlID0gY2MuTWFzay5UeXBlLlJFQ1Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF91cGRhdGVHcmFwaGljcygpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUuXHJcbiAgICAgICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMuX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICBpZiAoIWdyYXBoaWNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkRyYXcoZ3JhcGhpY3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogbWFzayDnlKjkuo7nu5jliLbnvanlrZDnmoTlh73mlbAuXHJcbiAgICAgICAgICogdGhpcyDmjIflkJFtYXNrIOWvueixoSzpnIDopoHnibnliKvms6jmhI8uXHJcbiAgICAgICAgICogQHBhcmFtIGdyYXBoaWNzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uRHJhdyhncmFwaGljczogY2MuR3JhcGhpY3MpIHtcclxuICAgICAgICAgICAgLy8gU2hhcmUgcmVuZGVyIGRhdGEgd2l0aCBncmFwaGljcyBjb250ZW50XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IG5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgbGV0IHggPSAtd2lkdGggKiBub2RlLmFuY2hvclg7XHJcbiAgICAgICAgICAgIGxldCB5ID0gLWhlaWdodCAqIG5vZGUuYW5jaG9yWTtcclxuICAgICAgICAgICAgZ3JhcGhpY3Mucm91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIHRoaXMucmFkaXVzIHx8IDApO1xyXG5cclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSAgY2MuY29sb3IoMCwwLDAsMjU1KTtcclxuICAgICAgICAgICAgaWYgKGNjLmdhbWUucmVuZGVyVHlwZSA9PT0gY2MuZ2FtZS5SRU5ERVJfVFlQRV9DQU5WQVMpIHtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/RewardMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bfd5ENcClO45EknaolfCDQ', 'RewardMgr');
// script/utils/RewardMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardMgr = void 0;
var RewardMgr = /** @class */ (function () {
    function RewardMgr() {
    }
    RewardMgr.radius = [29, 40, 48, 48, 62, 73, 83, 91, 102, 126, 136]; //圆形半径
    RewardMgr.offsetY = [-5, 0, 0, -2, 0, -2, 0, 0, -5, 0, 4]; //碰撞组件y轴偏移量
    return RewardMgr;
}());
exports.RewardMgr = RewardMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvUmV3YXJkTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFHQSxDQUFDO0lBRmlCLGdCQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQ3RELGlCQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7SUFDdEUsZ0JBQUM7Q0FIRCxBQUdDLElBQUE7QUFIWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXdhcmRNZ3J7XG4gICAgcHVibGljIHN0YXRpYyByYWRpdXMgPSBbMjksNDAsNDgsNDgsNjIsNzMsODMsOTEsMTAyLDEyNiwxMzZdOyAvL+WchuW9ouWNiuW+hFxuICAgIHB1YmxpYyBzdGF0aWMgb2Zmc2V0WSA9IFstNSwwLCAwLC0yLCAwLC0yLDAsMCwtNSwwLDRdOyAvL+eisOaSnue7hOS7tnnovbTlgY/np7vph49cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/DialogBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b43xn4UpBI5OjAbVMM8fQ', 'DialogBase');
// script/DialogBase.ts

"use strict";
// import EditorTool from "./EditorTool";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu;
/**
 * 弹窗基类
 */
var DialogBase = /** @class */ (function (_super) {
    __extends(DialogBase, _super);
    function DialogBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DlgAnim = null;
        _this.OpenClip = null;
        _this.CloseClip = null;
        /** 外部的resolve函数，在弹窗close时调用 */
        _this._resolveList = [];
        _this._prefabUrl = '';
        return _this;
        /**
         * 添加外部resolve函数，在弹窗close时调用
         */
        // public addResolve(resolve: (value?: any) => void): void {
        // Tool.arrayAdd(this._resolveList, resolve);
        // }
    }
    Object.defineProperty(DialogBase.prototype, "prefabUrl", {
        /** 弹窗prefab在resources/prefab/dialog/下的路径 */
        get: function () { return this._prefabUrl; },
        enumerable: false,
        configurable: true
    });
    DialogBase.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    DialogBase.prototype.onLoad = function () {
        if (this.DlgAnim) {
            this.OpenClip && this.DlgAnim.addClip(this.OpenClip);
            this.CloseClip && this.DlgAnim.addClip(this.CloseClip);
            this.DlgAnim.on(cc.Animation.EventType.FINISHED, this.onAnimFinished, this);
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    DialogBase.prototype.onTouchStart = function (e) {
        e.stopPropagation();
    };
    DialogBase.prototype.onTouchMove = function (e) {
        e.stopPropagation();
    };
    DialogBase.prototype.onTouchEnd = function (e) {
        e.stopPropagation();
    };
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
    DialogBase.prototype.onAnimFinished = function () {
        if (this.DlgAnim.currentClip === this.CloseClip) {
            this.close();
        }
    };
    /**
     * 打开动画
     */
    DialogBase.prototype.playOpen = function () {
        if (this.DlgAnim && this.OpenClip) {
            this.DlgAnim.play(this.OpenClip.name);
        }
    };
    /**
     * 关闭动画，动画结束回调中会调用close销毁
     */
    DialogBase.prototype.playClose = function () {
        if (this.DlgAnim && this.CloseClip) {
            if (this.DlgAnim.getAnimationState(this.CloseClip.name).isPlaying) {
                return;
            }
            this.DlgAnim.play(this.CloseClip.name);
        }
        else {
            this.close();
        }
    };
    /**
     * 打开弹窗时的处理
     * @virtual
     */
    DialogBase.prototype.open = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    /**
     * 关闭弹窗，销毁节点时的处理。
     * - 必须使用此接口销毁，子类重写时请调用super.close()
     * @virtual
     */
    DialogBase.prototype.close = function () {
        this._resolveList.forEach(function (resolve) { resolve(); });
        this.node.removeFromParent();
        this.node.destroy();
    };
    /**
     * 关闭按钮回调
     * @virtual
     */
    DialogBase.prototype.onClickClose = function () {
        this.playClose();
    };
    /** 弹窗prefab在resources/prefab/dialog/下的路径 */
    DialogBase.pUrl = '';
    __decorate([
        property(cc.Animation)
    ], DialogBase.prototype, "DlgAnim", void 0);
    __decorate([
        property({
            type: cc.AnimationClip,
            tooltip: CC_DEV && '打开弹窗的动画',
            visible: function () { return !!this.DlgAnim; }
        })
    ], DialogBase.prototype, "OpenClip", void 0);
    __decorate([
        property({
            type: cc.AnimationClip,
            tooltip: CC_DEV && '关闭弹窗的动画',
            visible: function () { return !!this.DlgAnim; }
        })
    ], DialogBase.prototype, "CloseClip", void 0);
    DialogBase = __decorate([
        ccclass,
        disallowMultiple,
        menu('Framework/基础组件/DialogBase')
    ], DialogBase);
    return DialogBase;
}(cc.Component));
exports.default = DialogBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRGlhbG9nQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkMsSUFBQSxLQUFnRCxFQUFFLENBQUMsVUFBVSxFQUEzRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFFcEU7O0dBRUc7QUFJSDtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXNJQztRQWpJVSxhQUFPLEdBQWlCLElBQUksQ0FBQztRQU83QixjQUFRLEdBQXFCLElBQUksQ0FBQztRQU9sQyxlQUFTLEdBQXFCLElBQUksQ0FBQztRQUUxQywrQkFBK0I7UUFDdkIsa0JBQVksR0FBaUMsRUFBRSxDQUFDO1FBRWhELGdCQUFVLEdBQVcsRUFBRSxDQUFDOztRQXdHaEM7O1dBRUc7UUFDSCw0REFBNEQ7UUFDeEQsNkNBQTZDO1FBQ2pELElBQUk7SUFDUixDQUFDO0lBNUdHLHNCQUFXLGlDQUFTO1FBRHBCLDRDQUE0QzthQUM1QyxjQUFpQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVoRCw4QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUMsWUFBWSxFQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRyxJQUFJLENBQUMsV0FBVyxFQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRyxJQUFJLENBQUMsVUFBVSxF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LElBQUksQ0FBQywyQkFBMkIsQ0FBQztPQUNiLFVBQVUsQ0FzSTlCO0lBQUQsaUJBQUM7Q0F0SUQsQUFzSUMsQ0F0SXVDLEVBQUUsQ0FBQyxTQUFTLEdBc0luRDtrQkF0SW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcblxyXG4vLyBpbXBvcnQgRWRpdG9yVG9vbCBmcm9tIFwiLi9FZGl0b3JUb29sXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZGlzYWxsb3dNdWx0aXBsZSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDlvLnnqpfln7rnsbtcclxuICovXHJcbkBjY2NsYXNzXHJcbkBkaXNhbGxvd011bHRpcGxlXHJcbkBtZW51KCdGcmFtZXdvcmsv5Z+656GA57uE5Lu2L0RpYWxvZ0Jhc2UnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8qKiDlvLnnqpdwcmVmYWLlnKhyZXNvdXJjZXMvcHJlZmFiL2RpYWxvZy/kuIvnmoTot6/lvoQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcFVybDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIHB1YmxpYyBEbGdBbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQW5pbWF0aW9uQ2xpcCxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aJk+W8gOW8ueeql+eahOWKqOeUuycsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuICEhdGhpcy5EbGdBbmltOyB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIE9wZW5DbGlwOiBjYy5BbmltYXRpb25DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkFuaW1hdGlvbkNsaXAsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICflhbPpl63lvLnnqpfnmoTliqjnlLsnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiAhIXRoaXMuRGxnQW5pbTsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBDbG9zZUNsaXA6IGNjLkFuaW1hdGlvbkNsaXAgPSBudWxsO1xyXG5cclxuICAgIC8qKiDlpJbpg6jnmoRyZXNvbHZl5Ye95pWw77yM5Zyo5by556qXY2xvc2Xml7bosIPnlKggKi9cclxuICAgIHByaXZhdGUgX3Jlc29sdmVMaXN0OiBBcnJheTwodmFsdWU/OiBhbnkpID0+IHZvaWQ+ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfcHJlZmFiVXJsOiBzdHJpbmcgPSAnJztcclxuICAgIC8qKiDlvLnnqpdwcmVmYWLlnKhyZXNvdXJjZXMvcHJlZmFiL2RpYWxvZy/kuIvnmoTot6/lvoQgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlZmFiVXJsKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wcmVmYWJVcmw7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQgLCB0aGlzLm9uVG91Y2hTdGFydCAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSAsIHRoaXMub25Ub3VjaE1vdmUgLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCAsIHRoaXMub25Ub3VjaEVuZCAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMICwgdGhpcy5vblRvdWNoRW5kICwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkRsZ0FuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5PcGVuQ2xpcCAmJiB0aGlzLkRsZ0FuaW0uYWRkQ2xpcCh0aGlzLk9wZW5DbGlwKTtcclxuICAgICAgICAgICAgdGhpcy5DbG9zZUNsaXAgJiYgdGhpcy5EbGdBbmltLmFkZENsaXAodGhpcy5DbG9zZUNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLkRsZ0FuaW0ub24oY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5vbkFuaW1GaW5pc2hlZCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQgLCB0aGlzLm9uVG91Y2hTdGFydCAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFICwgdGhpcy5vblRvdWNoTW92ZSAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQgLCB0aGlzLm9uVG91Y2hFbmQgLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMICwgdGhpcy5vblRvdWNoRW5kICwgdGhpcyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9XHJcbiAgICAvLyBwcm90ZWN0ZWQgcmVzZXRJbkVkaXRvcigpOiB2b2lkIHtcclxuICAgIC8vICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGFuaW06IGNjLkFuaW1hdGlvbiA9IHRoaXMubm9kZS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChhbmltKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5EbGdBbmltID0gYW5pbTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBFZGl0b3JUb29sLmxvYWQ8Y2MuQW5pbWF0aW9uQ2xpcD4oJ3Jlcy9hbmltYXRpb24vZGlhbG9nL29wZW4uYW5pbScpLnRoZW4oKHYpID0+IHsgdGhpcy5PcGVuQ2xpcCA9IHY7IH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIEVkaXRvclRvb2wubG9hZDxjYy5BbmltYXRpb25DbGlwPigncmVzL2FuaW1hdGlvbi9kaWFsb2cvY2xvc2UuYW5pbScpLnRoZW4oKHYpID0+IHsgdGhpcy5DbG9zZUNsaXAgPSB2OyB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25BbmltRmluaXNoZWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuRGxnQW5pbS5jdXJyZW50Q2xpcCA9PT0gdGhpcy5DbG9zZUNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOWKqOeUu1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheU9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuRGxnQW5pbSAmJiB0aGlzLk9wZW5DbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRGxnQW5pbS5wbGF5KHRoaXMuT3BlbkNsaXAubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5Yqo55S777yM5Yqo55S757uT5p2f5Zue6LCD5Lit5Lya6LCD55SoY2xvc2XplIDmr4FcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlDbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5EbGdBbmltICYmIHRoaXMuQ2xvc2VDbGlwKSB7IFxyXG4gICAgICAgICAgICBpZiAodGhpcy5EbGdBbmltLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuQ2xvc2VDbGlwLm5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuRGxnQW5pbS5wbGF5KHRoaXMuQ2xvc2VDbGlwLm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDlvLnnqpfml7bnmoTlpITnkIZcclxuICAgICAqIEB2aXJ0dWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcGVuKC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreW8ueeql++8jOmUgOavgeiKgueCueaXtueahOWkhOeQhuOAglxyXG4gICAgICogLSDlv4Xpobvkvb/nlKjmraTmjqXlj6PplIDmr4HvvIzlrZDnsbvph43lhpnml7bor7fosIPnlKhzdXBlci5jbG9zZSgpXHJcbiAgICAgKiBAdmlydHVhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2UoKTogYW55IHtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlTGlzdC5mb3JFYWNoKChyZXNvbHZlKSA9PiB7IHJlc29sdmUoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5oyJ6ZKu5Zue6LCDXHJcbiAgICAgKiBAdmlydHVhbFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25DbGlja0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheUNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDlpJbpg6hyZXNvbHZl5Ye95pWw77yM5Zyo5by556qXY2xvc2Xml7bosIPnlKhcclxuICAgICAqL1xyXG4gICAgLy8gcHVibGljIGFkZFJlc29sdmUocmVzb2x2ZTogKHZhbHVlPzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVG9vbC5hcnJheUFkZCh0aGlzLl9yZXNvbHZlTGlzdCwgcmVzb2x2ZSk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/UpRewardNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3e48AGxgtAzqsC21oylZ/i', 'UpRewardNode');
// script/UpRewardNode.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var gameConfig_1 = require("./gameConfig");
var ResMgr_1 = require("./utils/ResMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UpRewardNode = /** @class */ (function (_super) {
    __extends(UpRewardNode, _super);
    function UpRewardNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.moneyIcon = null;
        _this.moneyLabel = null;
        _this.targetNode = null;
        _this.title = null;
        _this.cashOutLabel = null;
        _this.btnLbl = null;
        _this.showFinishMoney = false;
        return _this;
        // update (dt) {}
    }
    UpRewardNode.prototype.start = function () {
        var _this = this;
        this.changeSprite().then(function (r) {
            // console.log("changeSpritethen")
            _this.sprite.spriteFrame = r;
        });
        // gameConfig.setMoneySp(this.moneyIcon)
        this.moneyLabel.string = gameConfig_1.default.getUnifyCurrency() + '0.00';
        if (this.title) {
            this.title.string = gameConfig_1.default.getWord("MyBalance");
        }
        if (this.btnLbl) {
            var _a = gameConfig_1.default.getWord("withdraw"), string = _a.string, fontSize = _a.fontSize;
            this.btnLbl.string = string;
            this.btnLbl.fontSize = fontSize;
        }
        if (this.cashOutLabel) {
            var _b = gameConfig_1.default.getWord('cashOutTop'), string = _b.string, fontSize = _b.fontSize;
            this.cashOutLabel.string = string;
            this.cashOutLabel.fontSize = fontSize;
        }
        // demo的结算页面
        if (this.targetNode && this.showFinishMoney) {
            if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
                this.node.scale = 0.7;
            }
            var dic = {};
            dic['Rp'] = 1000000;
            dic['R$'] = 350;
            dic['₩'] = 88000;
            var addUnit_1 = (dic[gameConfig_1.default.getUnifyCurrency()] || 66) / 10;
            var oldReward_1 = 0;
            cc.tween(this.targetNode)
                .repeat(9, cc.tween()
                .call(function () {
                oldReward_1 = oldReward_1 + addUnit_1;
                _this.targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + oldReward_1.toFixed(2);
            })
                .to(0.06, { scale: 1.12 })
                .to(0.04, { scale: 1.0 })).call(function () {
                _this.targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + (addUnit_1 * 10).toFixed(2);
            })
                .start();
            if (this.showFinishMoney) {
                cc.tween(this.node).call(function () {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, function (err, res) {
                        if (res) {
                            var rewardAnim = cc.instantiate(res);
                            rewardAnim.scale = 2;
                            _this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    });
                }).delay(0.3).call(function () {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, function (err, res) {
                        if (res) {
                            var rewardAnim = cc.instantiate(res);
                            rewardAnim.setPosition(10, 10);
                            rewardAnim.scale = 2;
                            _this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    });
                }).delay(0.3).call(function () {
                    cc.resources.load("prefab/rewardAnim", cc.Prefab, function (err, res) {
                        if (res) {
                            var rewardAnim = cc.instantiate(res);
                            rewardAnim.setPosition(0, 10);
                            rewardAnim.scale = 2;
                            _this.node.parent.getChildByName("bg").addChild(rewardAnim, -1);
                        }
                    });
                })
                    .start();
                // setTimeout(() => {
                //     window.gameEnd && window.gameEnd();
                // }, 2000);
            }
        }
    };
    UpRewardNode.prototype.changeSprite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pay1sp, sp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pay1sp = gameConfig_1.default.getUnifyGuidePay(0);
                        return [4 /*yield*/, ResMgr_1.ResMgr.loadResourcesAsset("img/payimg/" + pay1sp, cc.SpriteFrame)];
                    case 1:
                        sp = _a.sent();
                        return [2 /*return*/, sp];
                }
            });
        });
    };
    __decorate([
        property(cc.Sprite)
    ], UpRewardNode.prototype, "sprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], UpRewardNode.prototype, "moneyIcon", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UpRewardNode.prototype, "targetNode", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "cashOutLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UpRewardNode.prototype, "btnLbl", void 0);
    __decorate([
        property(cc.Boolean)
    ], UpRewardNode.prototype, "showFinishMoney", void 0);
    UpRewardNode = __decorate([
        ccclass
    ], UpRewardNode);
    return UpRewardNode;
}(cc.Component));
exports.default = UpRewardNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVXBSZXdhcmROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDJDQUFzQztBQUN0Qyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE4SEM7UUEzSEcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWMsSUFBSSxDQUFBO1FBRzNCLGdCQUFVLEdBQWEsSUFBSSxDQUFBO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRzFCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFZLEtBQUssQ0FBQzs7UUFxR2pDLGlCQUFpQjtJQUNyQixDQUFDO0lBbkdHLDRCQUFLLEdBQUw7UUFBQSxpQkF3RkM7UUF2RkcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDdEIsa0NBQWtDO1lBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxvQkFBVSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxDQUFBO1FBRS9ELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMs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LE9BQU87T0FDYSxZQUFZLENBOEhoQztJQUFELG1CQUFDO0NBOUhELEFBOEhDLENBOUh5QyxFQUFFLENBQUMsU0FBUyxHQThIckQ7a0JBOUhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBnYW1lQ29uZmlnIGZyb20gXCIuL2dhbWVDb25maWdcIjtcbmltcG9ydCB7IFJlc01nciB9IGZyb20gXCIuL3V0aWxzL1Jlc01nclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBSZXdhcmROb2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBtb25leUljb246IGNjLlNwcml0ZSA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBtb25leUxhYmVsOiBjYy5MYWJlbCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBjYXNoT3V0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG5cbiAgICBidG5MYmw6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXG4gICAgc2hvd0ZpbmlzaE1vbmV5OiBCb29sZWFuID0gZmFsc2U7XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNoYW5nZVNwcml0ZSgpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZVNwcml0ZXRoZW5cIilcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gclxuICAgICAgICB9KVxuICAgICAgICAvLyBnYW1lQ29uZmlnLnNldE1vbmV5U3AodGhpcy5tb25leUljb24pXG4gICAgICAgIHRoaXMubW9uZXlMYWJlbC5zdHJpbmcgPSBnYW1lQ29uZmlnLmdldFVuaWZ5Q3VycmVuY3koKSArICcwLjAwJ1xuXG4gICAgICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcIk15QmFsYW5jZVwiKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYnRuTGJsKXtcbiAgICAgICAgICAgIGNvbnN0IHtzdHJpbmcsZm9udFNpemV9ID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwid2l0aGRyYXdcIik7XG4gICAgICAgICAgICB0aGlzLmJ0bkxibC5zdHJpbmcgPSBzdHJpbmc7XG4gICAgICAgICAgICB0aGlzLmJ0bkxibC5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhc2hPdXRMYWJlbCkge1xuICAgICAgICAgICAgY29uc3Qge3N0cmluZywgZm9udFNpemV9ID0gZ2FtZUNvbmZpZy5nZXRXb3JkKCdjYXNoT3V0VG9wJylcbiAgICAgICAgICAgIHRoaXMuY2FzaE91dExhYmVsLnN0cmluZyA9IHN0cmluZztcbiAgICAgICAgICAgIHRoaXMuY2FzaE91dExhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGRlbW/nmoTnu5PnrpfpobXpnaJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Tm9kZSAmJiB0aGlzLnNob3dGaW5pc2hNb25leSkge1xuICAgICAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuN1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpYzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICAgICAgICAgICAgZGljWydScCddID0gMTAwMDAwMFxuICAgICAgICAgICAgZGljWydSJCddID0gMzUwXG4gICAgICAgICAgICBkaWNbJ+KCqSddID0gODgwMDBcblxuICAgICAgICAgICAgbGV0IGFkZFVuaXQgPSAoZGljW2dhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpXSB8fCA2NikgLyAxMFxuICAgICAgICAgICAgbGV0IG9sZFJld2FyZCA9IDBcblxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy50YXJnZXROb2RlKVxuICAgICAgICAgICAgICAgIC5yZXBlYXQoOSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFJld2FyZCA9IG9sZFJld2FyZCArIGFkZFVuaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRVbmlmeUN1cnJlbmN5KCkgKyBvbGRSZXdhcmQudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4wNiwgeyBzY2FsZTogMS4xMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDQsIHsgc2NhbGU6IDEuMCB9KVxuICAgICAgICAgICAgICAgICkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpICsgKGFkZFVuaXQgKiAxMCkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcblxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RmluaXNoTW9uZXkpIHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYi9yZXdhcmRBbmltXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZEFuaW0gPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRBbmltLnNjYWxlID0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hZGRDaGlsZChyZXdhcmRBbmltLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuZGVsYXkoMC4zKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvcmV3YXJkQW5pbVwiLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRBbmltID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQW5pbS5zZXRQb3NpdGlvbigxMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQW5pbS5zY2FsZSA9IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWRkQ2hpbGQocmV3YXJkQW5pbSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmRlbGF5KDAuMykuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3Jld2FyZEFuaW1cIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkQW5pbSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEFuaW0uc2V0UG9zaXRpb24oMCwgMTApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRBbmltLnNjYWxlID0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hZGRDaGlsZChyZXdhcmRBbmltLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcblxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cuZ2FtZUVuZCAmJiB3aW5kb3cuZ2FtZUVuZCgpO1xuICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNoYW5nZVNwcml0ZSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VTcHJpdGVcIilcbiAgICAgICAgbGV0IHBheTFzcCA9IGdhbWVDb25maWcuZ2V0VW5pZnlHdWlkZVBheSgwKTtcbiAgICAgICAgbGV0IHNwOiBhbnkgPSBhd2FpdCBSZXNNZ3IubG9hZFJlc291cmNlc0Fzc2V0KFwiaW1nL3BheWltZy9cIiArIHBheTFzcCwgY2MuU3ByaXRlRnJhbWUpXG4gICAgICAgIHJldHVybiBzcDtcbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/aduioTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33a22fZNsJJMZtkMz4oLOSM', 'aduioTools');
// script/aduioTools.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.engineType = void 0;
var gameConfig_1 = require("./gameConfig");
var JsbSdkScript_1 = require("./PlatformInteraction/JsbSdkScript");
var engineType;
(function (engineType) {
    engineType[engineType["bingo"] = 0] = "bingo";
    engineType[engineType["bingocool"] = 1] = "bingocool";
    engineType[engineType["bingonice"] = 2] = "bingonice";
    engineType[engineType["bingobang"] = 3] = "bingobang";
    engineType[engineType["supperbingo"] = 4] = "supperbingo";
    engineType[engineType["fire"] = 5] = "fire";
    engineType[engineType["finish_target"] = 6] = "finish_target";
    engineType[engineType["merge"] = 7] = "merge";
    engineType[engineType["pass"] = 8] = "pass";
    engineType[engineType["reward"] = 9] = "reward";
    engineType[engineType["girlLaugh"] = 10] = "girlLaugh";
    engineType[engineType["endTurn"] = 11] = "endTurn";
    engineType[engineType["sucess"] = 12] = "sucess";
    engineType[engineType["excellent"] = 13] = "excellent";
})(engineType = exports.engineType || (exports.engineType = {}));
// const C3 = 130.81;
// const c3d150 = 150 / C3;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var aduioTools = /** @class */ (function () {
    function aduioTools() {
    }
    aduioTools_1 = aduioTools;
    aduioTools.playSimpleAduioEngine = function (eType) {
        if (gameConfig_1.default.IS_GAME_MUSICEFFECT) {
            var url_1 = "";
            switch (eType) {
                case engineType.bingo:
                    url_1 = "/AudioClip/sfx_combo_bingo";
                    break;
                case engineType.bingocool:
                    url_1 = "/AudioClip/sfx_combo_bingocool";
                    break;
                case engineType.bingonice:
                    url_1 = "/AudioClip/sfx_combo_bingonice";
                    break;
                case engineType.bingobang:
                    url_1 = "/AudioClip/sfx_combo_bingobang";
                    break;
                case engineType.supperbingo:
                    url_1 = "/AudioClip/sfx_combo_supperbingo";
                    break;
                case engineType.fire:
                    url_1 = "/AudioClip/sfx_fire";
                    break;
                case engineType.finish_target:
                    url_1 = "/AudioClip/sfx_finish_target";
                    break;
                case engineType.merge:
                    url_1 = "/AudioClip/sfx_merge";
                    break;
                case engineType.girlLaugh:
                    url_1 = "/AudioClip/sfx_girl_laugh";
                    break;
                case engineType.pass:
                    url_1 = "/AudioClip/sfx_combo_pass";
                    break;
                case engineType.reward:
                    url_1 = "/AudioClip/sfx_combo_reward";
                    break;
                case engineType.endTurn:
                    url_1 = "/AudioClip/sfx_end_turn";
                    break;
                case engineType.sucess:
                    url_1 = "/AudioClip/sfx_success";
                    break;
                case engineType.excellent:
                    url_1 = "/sounds/excellent";
                    break;
                default:
                    break;
            }
            if (url_1.length > 0) {
                cc.resources.load(url_1, cc.AudioClip, function (err, res) {
                    if (res) {
                        var audioId = cc.audioEngine.playEffect(res, false);
                        if (url_1 === "/AudioClip/sfx_combo_pass") {
                            cc.audioEngine.setVolume(audioId, 0.5);
                        }
                    }
                });
            }
        }
    };
    aduioTools.playBackgroundMusic = function () {
        // if (gameConfig.IS_GAME_MUSICBG) {
        //     if (aduioTools.backMusicIsPlay == null) {
        //         cc.resources.load('/AudioClip/bgm_1', cc.AudioClip, (err, res) => {
        //             if (res) {
        //                 aduioTools.backMusicIsPlay = cc.audioEngine.playMusic(res as cc.AudioClip, true);
        //                 cc.audioEngine.setMusicVolume(0.5);
        //             }
        //         })
        //     }
        // }
    };
    aduioTools.stopBackgroundMusic = function () {
        if (aduioTools_1.backMusicIsPlay != null) {
            cc.audioEngine.stopMusic();
            aduioTools_1.backMusicIsPlay = null;
        }
    };
    aduioTools.playmerge = function (index) {
        if (gameConfig_1.default.IS_GAME_MUSICEFFECT) {
            if (cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID) {
                JsbSdkScript_1.default.playMergeAudio(index);
            }
            else {
                // let fs = require('fs');
                // let AudioContext = window.AudioContext || window["webkitAudioContext"];
                // let audioCtx = AudioContext ? new AudioContext() : '';
                // console.log(`AudioContext ${audioCtx}`);
                // cc.resources.load(`AudioClip/sfx_merge`, cc.Asset, (err, res) => {
                //     if (res) {
                // fs.readFile(res.nativeUrl, (err, data) => {
                // }
                // )
                //     }
                // })
                // const audioContext = new AudioContext();
                // cc.resources.load(`AudioClip/sfx_merge`, cc.Asset, (err, res) => {
                //     if (res) {
                //         fetch(res.nativeUrl)
                //             .then(response => response.arrayBuffer())
                //             .then(
                //                 arrayBuffer => audioContext.decodeAudioData(arrayBuffer)
                //             )
                //             .then(audioBuffer => {
                //                 let sample = audioContext.createBufferSource();
                //                 sample.buffer = audioBuffer;
                //                 sample.loop = false;
                //                 sample.playbackRate.value = 1 + 0.1 * index;
                //                 sample.connect(audioContext.destination);
                //                 sample.start();
                //             })
                //             .catch(e => console.log('uff'));
                //     }
                // })
            }
        }
    };
    aduioTools.pauseAllEffect = function () {
        cc.audioEngine.pauseAllEffects();
    };
    aduioTools.resuseAllEffect = function () {
        cc.audioEngine.resumeAllEffects();
    };
    var aduioTools_1;
    aduioTools.backMusicIsPlay = null;
    aduioTools = aduioTools_1 = __decorate([
        ccclass
    ], aduioTools);
    return aduioTools;
}());
exports.default = aduioTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYWR1aW9Ub29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMsbUVBQThEO0FBRzlELElBQVksVUFnQlg7QUFoQkQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCxxREFBUyxDQUFBO0lBQ1QscURBQVMsQ0FBQTtJQUNULHFEQUFTLENBQUE7SUFDVCx5REFBVyxDQUFBO0lBQ1gsMkNBQUksQ0FBQTtJQUNKLDZEQUFhLENBQUE7SUFDYiw2Q0FBSyxDQUFBO0lBQ0wsMkNBQUksQ0FBQTtJQUNKLCtDQUFNLENBQUE7SUFDTixzREFBUyxDQUFBO0lBQ1Qsa0RBQU8sQ0FBQTtJQUNQLGdEQUFNLENBQUE7SUFDTixzREFBUyxDQUFBO0FBRWIsQ0FBQyxFQWhCVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQWdCckI7QUFDRCxxQkFBcUI7QUFDckIsMkJBQTJCO0FBRXJCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7SUE4SUEsQ0FBQzttQkE5SW9CLFVBQVU7SUFHcEIsZ0NBQXFCLEdBQTVCLFVBQTZCLEtBQWlCO1FBQzFDLElBQUksb0JBQVUsQ0FBQyxtQkFBbUIsRUFBRTtZQUNoQyxJQUFJLEtBQUcsR0FBVyxFQUFFLENBQUM7WUFDckIsUUFBUSxLQUFLLEVBQUU7Z0JBQ1gsS0FBSyxVQUFVLENBQUMsS0FBSztvQkFDakIsS0FBRyxHQUFHLDRCQUE0QixDQUFDO29CQUNuQyxNQUFNO2dCQUNWLEtBQUssVUFBVSxDQUFDLFNBQVM7b0JBQ3JCLEtBQUcsR0FBRyxnQ0FBZ0MsQ0FBQztvQkFDdkMsTUFBTTtnQkFDVixLQUFLLFVBQVUsQ0FBQyxTQUFTO29CQUNyQixLQUFHLEdBQUcsZ0NBQWdDLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1YsS0FBSyxVQUFVLENB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UixLQUFLO2dCQUdMLDJDQUEyQztnQkFDM0MscUVBQXFFO2dCQUNyRSxpQkFBaUI7Z0JBQ2pCLCtCQUErQjtnQkFDL0Isd0RBQXdEO2dCQUN4RCxxQkFBcUI7Z0JBQ3JCLDJFQUEyRTtnQkFDM0UsZ0JBQWdCO2dCQUNoQixxQ0FBcUM7Z0JBQ3JDLGtFQUFrRTtnQkFDbEUsK0NBQStDO2dCQUMvQyx1Q0FBdUM7Z0JBQ3ZDLCtEQUErRDtnQkFDL0QsNERBQTREO2dCQUM1RCxrQ0FBa0M7Z0JBQ2xDLGlCQUFpQjtnQkFDakIsK0NBQStDO2dCQUMvQyxRQUFRO2dCQUNSLEtBQUs7YUFDUjtTQUNKO0lBQ0wsQ0FBQztJQUVNLHlCQUFjLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sMEJBQWUsR0FBdEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQzs7SUE1SU0sMEJBQWUsR0FBRyxJQUFJLENBQUM7SUFEYixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBOEk5QjtJQUFELGlCQUFDO0NBOUlELEFBOElDLElBQUE7a0JBOUlvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi9QbGF0Zm9ybUludGVyYWN0aW9uL0pzYlNka1NjcmlwdFwiO1xuXG5cbmV4cG9ydCBlbnVtIGVuZ2luZVR5cGUge1xuICAgIGJpbmdvID0gMCxcbiAgICBiaW5nb2Nvb2wsXG4gICAgYmluZ29uaWNlLFxuICAgIGJpbmdvYmFuZyxcbiAgICBzdXBwZXJiaW5nbyxcbiAgICBmaXJlLFxuICAgIGZpbmlzaF90YXJnZXQsXG4gICAgbWVyZ2UsXG4gICAgcGFzcyxcbiAgICByZXdhcmQsXG4gICAgZ2lybExhdWdoLFxuICAgIGVuZFR1cm4sXG4gICAgc3VjZXNzLFxuICAgIGV4Y2VsbGVudFxuXG59XG4vLyBjb25zdCBDMyA9IDEzMC44MTtcbi8vIGNvbnN0IGMzZDE1MCA9IDE1MCAvIEMzO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWR1aW9Ub29scyB7XG4gICAgc3RhdGljIGJhY2tNdXNpY0lzUGxheSA9IG51bGw7XG5cbiAgICBzdGF0aWMgcGxheVNpbXBsZUFkdWlvRW5naW5lKGVUeXBlOiBlbmdpbmVUeXBlKSB7XG4gICAgICAgIGlmIChnYW1lQ29uZmlnLklTX0dBTUVfTVVTSUNFRkZFQ1QpIHtcbiAgICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBzd2l0Y2ggKGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBlbmdpbmVUeXBlLmJpbmdvOlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X2NvbWJvX2JpbmdvXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5iaW5nb2Nvb2w6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fYmluZ29jb29sXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5iaW5nb25pY2U6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fYmluZ29uaWNlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5iaW5nb2Jhbmc6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fYmluZ29iYW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5zdXBwZXJiaW5nbzpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvQXVkaW9DbGlwL3NmeF9jb21ib19zdXBwZXJiaW5nb1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGVuZ2luZVR5cGUuZmlyZTpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvQXVkaW9DbGlwL3NmeF9maXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5maW5pc2hfdGFyZ2V0OlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X2ZpbmlzaF90YXJnZXRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBlbmdpbmVUeXBlLm1lcmdlOlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X21lcmdlXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5naXJsTGF1Z2g6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfZ2lybF9sYXVnaFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGVuZ2luZVR5cGUucGFzczpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvQXVkaW9DbGlwL3NmeF9jb21ib19wYXNzXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5yZXdhcmQ6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fcmV3YXJkXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5lbmRUdXJuOlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9BdWRpb0NsaXAvc2Z4X2VuZF90dXJuXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZW5naW5lVHlwZS5zdWNlc3M6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL0F1ZGlvQ2xpcC9zZnhfc3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGVuZ2luZVR5cGUuZXhjZWxsZW50OlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9zb3VuZHMvZXhjZWxsZW50XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChyZXMgYXMgY2MuQXVkaW9DbGlwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1cmwgPT09IFwiL0F1ZGlvQ2xpcC9zZnhfY29tYm9fcGFzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSWQgLCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5QmFja2dyb3VuZE11c2ljKCkge1xuXG4gICAgICAgIC8vIGlmIChnYW1lQ29uZmlnLklTX0dBTUVfTVVTSUNCRykge1xuXG4gICAgICAgIC8vICAgICBpZiAoYWR1aW9Ub29scy5iYWNrTXVzaWNJc1BsYXkgPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCcvQXVkaW9DbGlwL2JnbV8xJywgY2MuQXVkaW9DbGlwLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHJlcykge1xuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhZHVpb1Rvb2xzLmJhY2tNdXNpY0lzUGxheSA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhyZXMgYXMgY2MuQXVkaW9DbGlwLCB0cnVlKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDAuNSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN0b3BCYWNrZ3JvdW5kTXVzaWMoKSB7XG4gICAgICAgIGlmIChhZHVpb1Rvb2xzLmJhY2tNdXNpY0lzUGxheSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICAgICAgICAgIGFkdWlvVG9vbHMuYmFja011c2ljSXNQbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwbGF5bWVyZ2UoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoZ2FtZUNvbmZpZy5JU19HQU1FX01VU0lDRUZGRUNUKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgICAgICBKc2JTZGtTY3JpcHQucGxheU1lcmdlQXVkaW8oaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgZnMgPSByZXF1aXJlKCdmcycpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvd1tcIndlYmtpdEF1ZGlvQ29udGV4dFwiXTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgYXVkaW9DdHggPSBBdWRpb0NvbnRleHQgPyBuZXcgQXVkaW9Db250ZXh0KCkgOiAnJztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgQXVkaW9Db250ZXh0ICR7YXVkaW9DdHh9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjYy5yZXNvdXJjZXMubG9hZChgQXVkaW9DbGlwL3NmeF9tZXJnZWAsIGNjLkFzc2V0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHJlcykge1xuXG4gICAgICAgICAgICAgICAgLy8gZnMucmVhZEZpbGUocmVzLm5hdGl2ZVVybCwgKGVyciwgZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5yZXNvdXJjZXMubG9hZChgQXVkaW9DbGlwL3NmeF9tZXJnZWAsIGNjLkFzc2V0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZmV0Y2gocmVzLm5hdGl2ZVVybClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlciA9PiBhdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmZmVyKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAudGhlbihhdWRpb0J1ZmZlciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBzYW1wbGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNhbXBsZS5idWZmZXIgPSBhdWRpb0J1ZmZlcjtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLmxvb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IDEgKyAwLjEgKiBpbmRleDtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2FtcGxlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygndWZmJykpO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwYXVzZUFsbEVmZmVjdCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGxFZmZlY3RzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc3VzZUFsbEVmZmVjdCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsRWZmZWN0cygpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ButtonSafe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f961QcymFFxK1OZOZ33lDh', 'ButtonSafe');
// script/ButtonSafe.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSafe = /** @class */ (function (_super) {
    __extends(ButtonSafe, _super);
    function ButtonSafe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.safeTime = 0.5;
        _this.clickEvents = null;
        return _this;
        // update (dt) {}
    }
    ButtonSafe.prototype.start = function () {
        var _this = this;
        var button = this.getComponent(cc.Button);
        if (!button) {
            return;
        }
        this.clickEvents = button.clickEvents;
        this.node.on('click', function () {
            button.clickEvents = [];
            _this.scheduleOnce(function (dt) {
                button.clickEvents = _this.clickEvents;
            }, _this.safeTime);
            // mark: 这种方式会导致快速点击按钮时触摸穿透（按钮禁用时不再接受触摸事件）
            // let autoGrey = button.enableAutoGrayEffect;
            // button.enableAutoGrayEffect = false;
            // button.interactable = false;
            // this.scheduleOnce((dt)=>{
            //     button.enableAutoGrayEffect = autoGrey;
            //     button.interactable = true;
            // }, this.safeTime);
        }, this);
    };
    __decorate([
        property
    ], ButtonSafe.prototype, "safeTime", void 0);
    ButtonSafe = __decorate([
        ccclass
    ], ButtonSafe);
    return ButtonSafe;
}(cc.Component));
exports.default = ButtonSafe;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQnV0dG9uU2FmZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWdDQztRQTdCRyxjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLGlCQUFXLEdBQUcsSUFBSSxDQUFDOztRQTBCbkIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6QkcsMEJBQUssR0FBTDtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ1IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNsQixNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLFVBQUMsRUFBRTtnQkFDakIsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbEIsMENBQTBDO1lBQzFDLDhDQUE4QztZQUM5Qyx1Q0FBdUM7WUFDdkMsK0JBQStCO1lBQy9CLDRCQUE0QjtZQUM1Qiw4Q0FBOEM7WUFDOUMsa0NBQWtDO1lBQ2xDLHFCQUFxQjtRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBMUJEO1FBREMsUUFBUTtnREFDYztJQUhOLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnQzlCO0lBQUQsaUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3VDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NuRDtrQkFoQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvblNhZmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5IFxuICAgIHNhZmVUaW1lOiBudW1iZXIgPSAwLjU7IFxuXG4gICAgY2xpY2tFdmVudHMgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgYnV0dG9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKCFidXR0b24pe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudHMgPSBidXR0b24uY2xpY2tFdmVudHM7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKChkdCk9PntcbiAgICAgICAgICAgICAgICBidXR0b24uY2xpY2tFdmVudHMgPSB0aGlzLmNsaWNrRXZlbnRzO1xuICAgICAgICAgICAgfSwgdGhpcy5zYWZlVGltZSk7XG5cbiAgICAgICAgICAgIC8vIG1hcms6IOi/meenjeaWueW8j+S8muWvvOiHtOW/q+mAn+eCueWHu+aMiemSruaXtuinpuaRuOepv+mAj++8iOaMiemSruemgeeUqOaXtuS4jeWGjeaOpeWPl+inpuaRuOS6i+S7tu+8iVxuICAgICAgICAgICAgLy8gbGV0IGF1dG9HcmV5ID0gYnV0dG9uLmVuYWJsZUF1dG9HcmF5RWZmZWN0O1xuICAgICAgICAgICAgLy8gYnV0dG9uLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBidXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoZHQpPT57XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gYXV0b0dyZXk7XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB9LCB0aGlzLnNhZmVUaW1lKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/DestroyLocationScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59c253jJy5DaK3uQf4o2TMu', 'DestroyLocationScript');
// script/DestroyLocationScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DestroyLocationScript = /** @class */ (function (_super) {
    __extends(DestroyLocationScript, _super);
    function DestroyLocationScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.locationPos = cc.v2(0, 0);
        _this.width = 0;
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    DestroyLocationScript.prototype.onLoad = function () { };
    DestroyLocationScript.prototype.start = function () {
        var _this = this;
        var width = Math.sqrt((Math.pow(cc.winSize.width, 2) + Math.pow(cc.winSize.height, 2)));
        this.maskNode.width = width;
        this.maskNode.height = width;
        var scale = this.width * 1.0 / width;
        cc.tween(this.maskNode)
            .to(0.7, { scale: scale, position: cc.v3(this.locationPos.x, this.locationPos.y, 0) })
            .delay(0.2)
            .call(function () {
            _this.maskNode.destroy();
            if (_this.callback) {
                _this.callback();
            }
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], DestroyLocationScript.prototype, "maskNode", void 0);
    DestroyLocationScript = __decorate([
        ccclass
    ], DestroyLocationScript);
    return DestroyLocationScript;
}(cc.Component));
exports.default = DestroyLocationScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRGVzdHJveUxvY2F0aW9uU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBaUNDO1FBOUJHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxXQUFLLEdBQVUsQ0FBQyxDQUFBO1FBRWhCLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBd0J6QixpQkFBaUI7SUFDckIsQ0FBQztJQXZCRyxzQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLHFDQUFLLEdBQUw7UUFBQSxpQkFrQkM7UUFqQkcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBQyxLQUFLLENBQUM7UUFFbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDOUUsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsSUFBRyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNkLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBRXBCLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDTztJQUhSLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBaUN6QztJQUFELDRCQUFDO0NBakNELEFBaUNDLENBakNrRCxFQUFFLENBQUMsU0FBUyxHQWlDOUQ7a0JBakNvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0cm95TG9jYXRpb25TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgbG9jYXRpb25Qb3M6Y2MuVmVjMiA9IGNjLnYyKDAsMCk7XG4gICAgd2lkdGg6bnVtYmVyID0gMFxuXG4gICAgY2FsbGJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkgeyB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5zcXJ0KChNYXRoLnBvdyhjYy53aW5TaXplLndpZHRoLCAyKSArIE1hdGgucG93KGNjLndpblNpemUuaGVpZ2h0LCAyKSkpOyBcbiAgICAgICAgdGhpcy5tYXNrTm9kZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLm1hc2tOb2RlLmhlaWdodCA9IHdpZHRoO1xuXG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMud2lkdGggKiAxLjAvd2lkdGg7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5tYXNrTm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC43LCB7IHNjYWxlLCBwb3NpdGlvbjogY2MudjModGhpcy5sb2NhdGlvblBvcy54LCB0aGlzLmxvY2F0aW9uUG9zLnksIDApIH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMilcbiAgICAgICAgICAgICAgICAuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgIFxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/levelBarScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60988TRggVIbIwthcjk33b8', 'levelBarScript');
// script/levelBarScript.ts

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
var gameConfig_1 = require("./gameConfig");
var localDataManager_1 = require("./localDataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var levelBarScript = /** @class */ (function (_super) {
    __extends(levelBarScript, _super);
    function levelBarScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.levelRemindLabel = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    levelBarScript.prototype.start = function () {
        var currentScore = localDataManager_1.default.shareManager().getScoreCount();
        this.levelLabel.string = "<color=#FFFFFF><outline color=#CD4D00 width=2>" + currentScore + "</outline></color>";
        this.levelRemindLabel.string = gameConfig_1.default.getWord("score").string + "：";
    };
    levelBarScript.prototype.addScore = function (score) {
        var currentScore = localDataManager_1.default.shareManager().getScoreCount();
        var newScore = currentScore + score;
        this.levelLabel.string = "<color=#FFFFFF><outline color=#CD4D00 width=2>" + newScore + "</outline></color>";
        localDataManager_1.default.shareManager().setScoreCount(newScore);
    };
    levelBarScript.prototype.reSetState = function () {
        var currentScore = localDataManager_1.default.shareManager().getScoreCount();
        this.levelLabel.string = "<color=#FFFFFF><outline color=#CD4D00 width=2>" + currentScore + "</outline></color>";
    };
    __decorate([
        property(cc.RichText)
    ], levelBarScript.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], levelBarScript.prototype, "levelRemindLabel", void 0);
    levelBarScript = __decorate([
        ccclass
    ], levelBarScript);
    return levelBarScript;
}(cc.Component));
exports.default = levelBarScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbGV2ZWxCYXJTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBQ3RDLHVEQUFrRDtBQUs1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdDQztRQTVCRyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUc5QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7O1FBd0JqQyxpQkFBaUI7SUFDckIsQ0FBQztJQXZCSyxlQUFlO0lBQ2pCLDhCQUFLLEdBQUw7UUFDSSxJQUFJLFlBQVksR0FBRywwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxtREFBaUQsWUFBWSx1QkFBb0IsQ0FBQztRQUMzRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDM0UsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxZQUFZLEdBQUcsMEJBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkUsSUFBSSxRQUFRLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxtREFBaUQsUUFBUSx1QkFBb0IsQ0FBQztRQUN2RywwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUdELG1DQUFVLEdBQVY7UUFDSSxJQUFJLFlBQVksR0FBRywwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVuRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxtREFBaUQsWUFBWSx1QkFBb0IsQ0FBQztJQUUvRyxDQUFDO0lBekJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0RBQ1E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDYztJQVBoQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBZ0NsQztJQUFELHFCQUFDO0NBaENELEFBZ0NDLENBaEMyQyxFQUFFLENBQUMsU0FBUyxHQWdDdkQ7a0JBaENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IGxvY2FsRGF0YU1hbmFnZXIgZnJvbSBcIi4vbG9jYWxEYXRhTWFuYWdlclwiO1xuaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi9QbGF0Zm9ybUludGVyYWN0aW9uL0pzYlNka1NjcmlwdFwiO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL3FpdVNjcmlwdC9HYW1lTWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGV2ZWxCYXJTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgbGV2ZWxMYWJlbDpjYy5SaWNoVGV4dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWxSZW1pbmRMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U2NvcmVDb3VudCgpO1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gYDxjb2xvcj0jRkZGRkZGPjxvdXRsaW5lIGNvbG9yPSNDRDREMDAgd2lkdGg9Mj4ke2N1cnJlbnRTY29yZX08L291dGxpbmU+PC9jb2xvcj5gO1xuICAgICAgICB0aGlzLmxldmVsUmVtaW5kTGFiZWwuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwic2NvcmVcIikuc3RyaW5nICsgXCLvvJpcIlxuICAgIH1cblxuICAgIGFkZFNjb3JlKHNjb3JlKXsgXG4gICAgICAgIGxldCBjdXJyZW50U2NvcmUgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmdldFNjb3JlQ291bnQoKTtcbiAgICAgICAgbGV0IG5ld1Njb3JlID0gY3VycmVudFNjb3JlICsgc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBgPGNvbG9yPSNGRkZGRkY+PG91dGxpbmUgY29sb3I9I0NENEQwMCB3aWR0aD0yPiR7bmV3U2NvcmV9PC9vdXRsaW5lPjwvY29sb3I+YDtcbiAgICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRTY29yZUNvdW50KG5ld1Njb3JlKTtcbiAgICB9XG5cblxuICAgIHJlU2V0U3RhdGUoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRTY29yZSA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U2NvcmVDb3VudCgpO1xuXG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBgPGNvbG9yPSNGRkZGRkY+PG91dGxpbmUgY29sb3I9I0NENEQwMCB3aWR0aD0yPiR7Y3VycmVudFNjb3JlfTwvb3V0bGluZT48L2NvbG9yPmA7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
            window.mraid && window.mraid.open('https://play.google.com/store/apps/details?id=com.wild.cowboy.slots');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRG93bmxvYWRCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7QUFDdEYsMkNBQXdEO0FBRWxELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMEJDO1FBdkJHLFNBQUcsR0FBWSxJQUFJLENBQUM7O0lBdUJ4QixDQUFDO0lBckJHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDYixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDZixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUM5QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUMvQixDQUNKO2FBQ0EsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLFdBQVc7UUFDWCxJQUFJLG9CQUFVLENBQUMsaUJBQWlCLEtBQUssMkJBQWMsQ0FBQyxHQUFHLEVBQUU7WUFDckQsTUFBTSxDQUFDLE9BQU8sSUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEM7YUFBSyxJQUFJLG9CQUFVLENBQUMsaUJBQWlCLEtBQUssMkJBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDaEUsZ0JBQWdCO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMscUVBQXFFLENBQUMsQ0FBQztTQUM1RztJQUNMLENBQUM7SUF0QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRTtJQUhILFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQi9CO0lBQUQsa0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQndDLEVBQUUsQ0FBQyxTQUFTLEdBMEJwRDtrQkExQm9CLFdBQVc7QUE0QmhDLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuaW1wb3J0IGdhbWVDb25maWcsIHtQbGF5YWJsZUFkVHlwZX0gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvd25sb2FkQnRuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLCB7c2NhbGU6IDEuMn0pLFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDEsIHtzY2FsZTogMX0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBjYWxsYmFjaygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+S6hlwiKVxuICAgICAgICAvL210Z+aJk+W8gOS4i+aWuei/meihjFxuICAgICAgICBpZiAoZ2FtZUNvbmZpZy5nZXRQbGF5YWJsZUFkVHlwZSA9PT0gUGxheWFibGVBZFR5cGUuTXRnKSB7XG4gICAgICAgICAgICB3aW5kb3cuaW5zdGFsbCYmd2luZG93Lmluc3RhbGwoKTtcbiAgICAgICAgfWVsc2UgaWYgKGdhbWVDb25maWcuZ2V0UGxheWFibGVBZFR5cGUgPT09IFBsYXlhYmxlQWRUeXBlLkFwcExvdmluKSB7XG4gICAgICAgICAgICAvL2FwcGxvdmlu5omT5byA5LiL5pa56L+Z6KGMXG4gICAgICAgICAgICB3aW5kb3cubXJhaWQgJiYgd2luZG93Lm1yYWlkLm9wZW4oJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20ud2lsZC5jb3dib3kuc2xvdHMnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdXBkYXRlIChkdCkge31cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/boomScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cafc38D1O5O7psk2wCczTKk', 'boomScript');
// script/boomScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var boomScript = /** @class */ (function (_super) {
    __extends(boomScript, _super);
    function boomScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.smokeParticle = null;
        _this.fogParticle = null;
        _this.lightNode = null;
        _this.spreadRing = null;
        _this.innerRing = null;
        _this.outerRing = null;
        _this.Halo = null;
        _this.indexLabel = null;
        _this.targetRadius = null;
        _this.index = null;
        _this.rate = null;
        _this.time = 0;
        return _this;
        // update (dt) {}
    }
    boomScript.prototype.onDestroy = function () {
        // console.log(`boomScript onDestroy`); 
    };
    boomScript.prototype.onLoad = function () {
        var rate = 1.0;
        for (var i = 0; i < this.index; i++) {
            rate *= 0.9;
        }
        this.rate = rate;
        this.initData();
    };
    boomScript.prototype.start = function () {
        var _this = this;
        var scale = this.targetRadius * this.rate / 80.0;
        this.time = 0.65 * scale;
        this.spreadRing.scale = 0;
        this.lightNode.scale = 2.0 * this.rate * this.targetRadius / 278;
        cc.tween(this.lightNode)
            .delay(0.08)
            .to(0.02, { scale: 4.5 * this.rate * this.targetRadius / 278 })
            .call(function () {
            _this.smokeParticle.resetSystem();
        })
            .parallel(cc.tween().to(this.time * 0.5, { scale: 3.0 * this.rate * this.targetRadius / 278 }), cc.tween().call(function () {
            cc.tween(_this.spreadRing).to(_this.time * 0.5, { scale: 1.0 }).to(0.01, { opacity: 0 }).start();
            cc.tween(_this.Halo).to(_this.time * 0.5, { opacity: 0 }).start();
        }))
            .call(function () {
            cc.tween(_this.innerRing).to(_this.time * 0.3, { scale: 0.5, opacity: 0 }).start();
            cc.tween(_this.outerRing).to(_this.time * 0.6, { scale: 2, opacity: 0 }).start();
        })
            .delay(1.0)
            .call(function () {
            _this.node.destroy();
        })
            .start();
        cc.tween(this.indexLabel.node)
            .to(0.1, { scale: 1.5, opacity: 255 })
            .to(0.35, { scale: 0.6 })
            .to(0.35, { scale: 1.3 })
            .by(0.4, { scale: -1, opacity: -255, position: cc.v3(0, 50, 0) })
            .start();
        this.fogParticle.resetSystem();
    };
    boomScript.prototype.initData = function () {
        //         this.light03.width =  this.targetRadius;
        //         this.light03.height =  this.targetRadius;
        // 
        //         this.light04.width = this.targetRadius;
        //         this.light04.height = this.targetRadius; 
        this.smokeParticle.startSize = this.targetRadius / 2;
        this.smokeParticle.startSizeVar = this.targetRadius / 4;
        this.smokeParticle.endSize = this.targetRadius / 6;
        this.smokeParticle.endSizeVar = this.targetRadius / 12;
        this.smokeParticle.startRadius = this.targetRadius / 4;
        this.smokeParticle.startRadiusVar = this.targetRadius / 20;
        this.smokeParticle.endRadius = this.targetRadius * 2.5 * this.rate;
        this.smokeParticle.endRadiusVar = this.targetRadius / 100;
        // this.smokeParticle.life = this.time * 0.5;
        // this.smokeParticle.lifeVar = this.time * 0.1;
        // this.fogParticle.duration = 0.4 * this.rate;
        this.fogParticle.startRadius = this.targetRadius * 1.8 * this.rate;
        this.fogParticle.startRadiusVar = 20;
        this.fogParticle.endRadius = this.targetRadius * 3.0 * this.rate + this.targetRadius;
        this.fogParticle.endRadiusVar = this.targetRadius;
        this.indexLabel.string = "<color=#FFDB00><outline color=#FF8000 width=1>" + (this.index + 1) + "</outline></color>";
        this.indexLabel.node.setPosition(cc.v2(this.targetRadius / 2, this.targetRadius / 4));
    };
    __decorate([
        property(cc.ParticleSystem)
    ], boomScript.prototype, "smokeParticle", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], boomScript.prototype, "fogParticle", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "lightNode", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "spreadRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "innerRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "outerRing", void 0);
    __decorate([
        property(cc.Node)
    ], boomScript.prototype, "Halo", void 0);
    __decorate([
        property(cc.RichText)
    ], boomScript.prototype, "indexLabel", void 0);
    boomScript = __decorate([
        ccclass
    ], boomScript);
    return boomScript;
}(cc.Component));
exports.default = boomScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYm9vbVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTRIQztRQXpIRyxtQkFBYSxHQUFzQixJQUFJLENBQUM7UUFHeEMsaUJBQVcsR0FBc0IsSUFBSSxDQUFDO1FBR3RDLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBVSxJQUFJLENBQUM7UUFDM0IsV0FBSyxHQUFVLElBQUksQ0FBQztRQUVaLFVBQUksR0FBVSxJQUFJLENBQUM7UUFFM0IsVUFBSSxHQUFVLENBQUMsQ0FBQzs7UUE0RmhCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0ZhLDhCQUFTLEdBQW5CO1FBQ0ksd0NBQXdDO0lBQzVDLENBQUM7SUFDRCwyQkFBTSxHQUFOO1FBRUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLEdBQUcsQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQUEsaUJBd0NDO1FBdENHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBRTtRQUMvRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLEVBQUUsQ0FBQyxJQUFJLEVBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDLFlBQVksR0FBQyxHQUFHLEVBQUMsQ0FBQzthQUN6RCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQzthQUNELFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxZQUFZLEdBQUMsR0FBRyxFQUFDLENBQUMsRUFDOUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUcsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzRixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUcsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FDTDthQUNBLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDN0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoRixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtRQUVSLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDN0IsRUFBRSxDQUFDLEdBQUcsRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUcsT0FBTyxFQUFDLEdBQUcsRUFBQyxDQUFDO2FBQ25DLEVBQUUsQ0FBQyxJQUFJLEVBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLENBQUM7YUFDdEIsRUFBRSxDQUFDLElBQUksRUFBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQzthQUN0QixFQUFFLENBQUMsR0FBRyxFQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFHLE9BQU8sRUFBQyxDQUFDLEdBQUcsRUFBRyxRQUFRLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDL0QsS0FBSyxFQUFFLENBQUE7UUFFUixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRW5DLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBRUosbURBQW1EO1FBQ25ELG9EQUFvRDtRQUNwRCxHQUFHO1FBQ0gsa0RBQWtEO1FBQ2xELG9EQUFvRDtRQUU1QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQztRQUVyRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUMsR0FBRyxDQUFDO1FBQ3hELDZDQUE2QztRQUM3QyxnREFBZ0Q7UUFFaEQsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUUsR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNwRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRWxELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLG9EQUFpRCxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsd0JBQW9CLENBQUE7UUFDMUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLEVBQUcsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZGLENBQUM7SUFySEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQztxREFDWTtJQUd4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO21EQUNVO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tEQUNRO0lBeEJiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0SDlCO0lBQUQsaUJBQUM7Q0E1SEQsQUE0SEMsQ0E1SHVDLEVBQUUsQ0FBQyxTQUFTLEdBNEhuRDtrQkE1SG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib29tU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBzbW9rZVBhcnRpY2xlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXG4gICAgZm9nUGFydGljbGU6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDsgXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaWdodE5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzcHJlYWRSaW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGlubmVyUmluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvdXRlclJpbmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgSGFsbzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgaW5kZXhMYWJlbDpjYy5SaWNoVGV4dCA9IG51bGw7IFxuXG4gICAgdGFyZ2V0UmFkaXVzOm51bWJlciA9IG51bGw7ICBcbiAgICBpbmRleDpudW1iZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByYXRlOm51bWJlciA9IG51bGw7XG5cbiAgICB0aW1lOm51bWJlciA9IDA7XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgYm9vbVNjcmlwdCBvbkRlc3Ryb3lgKTsgXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCByYXRlID0gMS4wO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kZXg7IGkrKykge1xuICAgICAgICAgICAgcmF0ZSAqPSAwLjk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYXRlID0gcmF0ZTtcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpOyBcbiAgICB9XG5cbiAgICBzdGFydCgpIHsgXG4gICAgICAgIFxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnRhcmdldFJhZGl1cyAqIHRoaXMucmF0ZSAvIDgwLjA7XG4gICAgICAgIHRoaXMudGltZSA9IDAuNjUgKiBzY2FsZTsgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNwcmVhZFJpbmcuc2NhbGUgPSAwO1xuICAgICAgXG4gICAgICAgIHRoaXMubGlnaHROb2RlLnNjYWxlID0gMi4wICogdGhpcy5yYXRlICp0aGlzLnRhcmdldFJhZGl1cy8yNzggO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxpZ2h0Tm9kZSlcbiAgICAgICAgLmRlbGF5KDAuMDgpXG4gICAgICAgIC50bygwLjAyICwge3NjYWxlOjQuNSAqIHRoaXMucmF0ZSAqdGhpcy50YXJnZXRSYWRpdXMvMjc4fSkgXG4gICAgICAgIC5jYWxsKCgpPT4geyBcbiAgICAgICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xuICAgICAgICB9KVxuICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMudGltZSAqIDAuNSAse3NjYWxlOjMuMCAqIHRoaXMucmF0ZSAqdGhpcy50YXJnZXRSYWRpdXMvMjc4fSksICBcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuY2FsbCgoKT0+IHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwcmVhZFJpbmcpLnRvKHRoaXMudGltZSAqIDAuNSAsIHtzY2FsZToxLjB9KS50bygwLjAxICwge29wYWNpdHk6MH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5IYWxvKS50byh0aGlzLnRpbWUgKiAwLjUgLCB7b3BhY2l0eTowIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmlubmVyUmluZykudG8odGhpcy50aW1lICogMC4zICwge3NjYWxlOjAuNSwgb3BhY2l0eTowfSkuc3RhcnQoKVxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vdXRlclJpbmcpLnRvKHRoaXMudGltZSAqIDAuNiAsIHtzY2FsZToyICwgb3BhY2l0eTowfSkuc3RhcnQoKVxuICAgICAgICB9KVxuICAgICAgICAuZGVsYXkoMS4wKVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCkgXG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5pbmRleExhYmVsLm5vZGUpIFxuICAgICAgICAudG8oMC4xICwge3NjYWxlOjEuNSAsIG9wYWNpdHk6MjU1fSlcbiAgICAgICAgLnRvKDAuMzUgLCB7c2NhbGU6MC42fSlcbiAgICAgICAgLnRvKDAuMzUgLCB7c2NhbGU6MS4zfSlcbiAgICAgICAgLmJ5KDAuNCAsIHtzY2FsZTotMSAsIG9wYWNpdHk6LTI1NSAsIHBvc2l0aW9uOmNjLnYzKDAgLCA1MCAsMCl9KSBcbiAgICAgICAgLnN0YXJ0KClcbiAgICAgICBcbiAgICAgICAgdGhpcy5mb2dQYXJ0aWNsZS5yZXNldFN5c3RlbSgpOyBcblxuICAgIH1cblxuICAgIGluaXREYXRhKCkgeyBcbiAgICAgICAgXG4vLyAgICAgICAgIHRoaXMubGlnaHQwMy53aWR0aCA9ICB0aGlzLnRhcmdldFJhZGl1cztcbi8vICAgICAgICAgdGhpcy5saWdodDAzLmhlaWdodCA9ICB0aGlzLnRhcmdldFJhZGl1cztcbi8vIFxuLy8gICAgICAgICB0aGlzLmxpZ2h0MDQud2lkdGggPSB0aGlzLnRhcmdldFJhZGl1cztcbi8vICAgICAgICAgdGhpcy5saWdodDA0LmhlaWdodCA9IHRoaXMudGFyZ2V0UmFkaXVzOyBcblxuICAgICAgICB0aGlzLnNtb2tlUGFydGljbGUuc3RhcnRTaXplID0gdGhpcy50YXJnZXRSYWRpdXMvMjtcbiAgICAgICAgdGhpcy5zbW9rZVBhcnRpY2xlLnN0YXJ0U2l6ZVZhciA9IHRoaXMudGFyZ2V0UmFkaXVzLzQ7XG5cbiAgICAgICAgdGhpcy5zbW9rZVBhcnRpY2xlLmVuZFNpemUgPSB0aGlzLnRhcmdldFJhZGl1cy82O1xuICAgICAgICB0aGlzLnNtb2tlUGFydGljbGUuZW5kU2l6ZVZhciA9IHRoaXMudGFyZ2V0UmFkaXVzLzEyO1xuXG4gICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5zdGFydFJhZGl1cyA9IHRoaXMudGFyZ2V0UmFkaXVzLzQ7XG4gICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5zdGFydFJhZGl1c1ZhciA9IHRoaXMudGFyZ2V0UmFkaXVzLzIwO1xuXG4gICAgICAgIHRoaXMuc21va2VQYXJ0aWNsZS5lbmRSYWRpdXMgPSB0aGlzLnRhcmdldFJhZGl1cyAqIDIuNSAqdGhpcy5yYXRlO1xuICAgICAgICB0aGlzLnNtb2tlUGFydGljbGUuZW5kUmFkaXVzVmFyID0gdGhpcy50YXJnZXRSYWRpdXMvMTAwO1xuICAgICAgICAvLyB0aGlzLnNtb2tlUGFydGljbGUubGlmZSA9IHRoaXMudGltZSAqIDAuNTtcbiAgICAgICAgLy8gdGhpcy5zbW9rZVBhcnRpY2xlLmxpZmVWYXIgPSB0aGlzLnRpbWUgKiAwLjE7XG5cbiAgICAgICAgLy8gdGhpcy5mb2dQYXJ0aWNsZS5kdXJhdGlvbiA9IDAuNCAqIHRoaXMucmF0ZTtcbiAgICAgICAgdGhpcy5mb2dQYXJ0aWNsZS5zdGFydFJhZGl1cyA9IHRoaXMudGFyZ2V0UmFkaXVzICoxLjggKnRoaXMucmF0ZTtcbiAgICAgICAgdGhpcy5mb2dQYXJ0aWNsZS5zdGFydFJhZGl1c1ZhciA9IDIwO1xuXG4gICAgICAgIHRoaXMuZm9nUGFydGljbGUuZW5kUmFkaXVzID0gdGhpcy50YXJnZXRSYWRpdXMgKiAzLjAgKnRoaXMucmF0ZSArIHRoaXMudGFyZ2V0UmFkaXVzO1xuICAgICAgICB0aGlzLmZvZ1BhcnRpY2xlLmVuZFJhZGl1c1ZhciA9IHRoaXMudGFyZ2V0UmFkaXVzOyBcblxuICAgICAgICB0aGlzLmluZGV4TGFiZWwuc3RyaW5nID0gYDxjb2xvcj0jRkZEQjAwPjxvdXRsaW5lIGNvbG9yPSNGRjgwMDAgd2lkdGg9MT4ke3RoaXMuaW5kZXgrMX08L291dGxpbmU+PC9jb2xvcj5gXG4gICAgICAgIHRoaXMuaW5kZXhMYWJlbC5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKHRoaXMudGFyZ2V0UmFkaXVzLzIgICx0aGlzLnRhcmdldFJhZGl1cy80KSk7XG5cbiAgICB9XG5cbiAgIFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/topBubbleBgScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1164asFIMJJTKZAsldebGdK', 'topBubbleBgScript');
// script/topBubbleBgScript.ts

// import aduioTools, { engineType } from "./aduioTools";
// import BubbleAnimationScript from "./BubbleAnimationScript";
// import localDataManager from "./localDataManager";
// import TargetqiuScript from "./TargetScript/TargetqiuScript";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class topBubbleBgScript extends cc.Component {
//     @property(cc.Label)
//     compositeLabel: cc.Label = null;
//     private _targetNode: cc.Node = null;
//     set targetNode(targetNode: cc.Node) {
//         this._targetNode = targetNode;
//     }
//     get targetNode() {
//         return this._targetNode;
//     }
//     // onLoad () {}
//     start() {
//         let sCount = localDataManager.shareManager().getSyntheticCount();
//         this.compositeLabel.string = `x${sCount}`
//     }
//     SyntheticUltimate() {
//         let sCount = localDataManager.shareManager().getSyntheticCount();
//         localDataManager.shareManager().setSyntheticCount(sCount + 1);
//         setTimeout(() => {
//             this.compositeLabel.string = `x${sCount + 1}`
//         }, 3.4);
//     }
//     // update (dt) {}
//     mountQiuAnimation() {
//         let wpos = this.targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
//         let thisPos = this.node.convertToNodeSpaceAR(wpos);
//         this.targetNode.setPosition(thisPos);
//         this.targetNode.parent = this.node;
//         cc.resources.load(`prefab/txBubbleAnimation`, cc.Prefab, (err, res) => {
//             if (res) {
//                 let aniNode = cc.instantiate(res as cc.Prefab);
//                 aniNode.scale = 0.7;
//                 aniNode.getComponent(BubbleAnimationScript).callBack = () => {
//                     let deps = cc.loader.getDependsRecursively(res);
//                     cc.loader.release(deps);
//                     res.decRef();
//                 };
//                 this.node.addChild(aniNode);
//                 aduioTools.playSimpleAduioEngine(engineType.endTurn);
//             }
//         })
//     }
//     directMountqiu(level) {
//         cc.resources.load("prefab/TargetqiuPrefab", cc.Prefab, (err, res) => {
//             if (res) {
//                 let targetQiu = cc.instantiate(res as cc.Prefab);
//                 targetQiu.getComponent(TargetqiuScript).loadDataFixSize(level)
//                 let scale = 115.0 / 150;
//                 targetQiu.scale = scale;
//                 targetQiu.parent = this.node;
//                 this.targetNode = targetQiu;
//             }
//         })
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9wQnViYmxlQmdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXlEO0FBQ3pELCtEQUErRDtBQUMvRCxxREFBcUQ7QUFDckQsZ0VBQWdFO0FBRWhFLCtDQUErQztBQUUvQyxXQUFXO0FBQ1gsZ0VBQWdFO0FBRWhFLDBCQUEwQjtBQUMxQix1Q0FBdUM7QUFFdkMsMkNBQTJDO0FBQzNDLDRDQUE0QztBQUM1Qyx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSLHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLHNCQUFzQjtBQUV0QixnQkFBZ0I7QUFDaEIsNEVBQTRFO0FBQzVFLG9EQUFvRDtBQUNwRCxRQUFRO0FBRVIsNEJBQTRCO0FBQzVCLDRFQUE0RTtBQUM1RSx5RUFBeUU7QUFDekUsNkJBQTZCO0FBQzdCLDREQUE0RDtBQUM1RCxtQkFBbUI7QUFDbkIsUUFBUTtBQUVSLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIseUVBQXlFO0FBQ3pFLDhEQUE4RDtBQUM5RCxnREFBZ0Q7QUFDaEQsOENBQThDO0FBRTlDLG1GQUFtRjtBQUNuRix5QkFBeUI7QUFFekIsa0VBQWtFO0FBQ2xFLHVDQUF1QztBQUN2QyxpRkFBaUY7QUFDakYsdUVBQXVFO0FBQ3ZFLCtDQUErQztBQUMvQyxvQ0FBb0M7QUFDcEMscUJBQXFCO0FBQ3JCLCtDQUErQztBQUMvQyx3RUFBd0U7QUFDeEUsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixRQUFRO0FBRVIsOEJBQThCO0FBQzlCLGlGQUFpRjtBQUNqRix5QkFBeUI7QUFDekIsb0VBQW9FO0FBQ3BFLGlGQUFpRjtBQUNqRiwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLGdEQUFnRDtBQUNoRCwrQ0FBK0M7QUFDL0MsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi9hZHVpb1Rvb2xzXCI7XG4vLyBpbXBvcnQgQnViYmxlQW5pbWF0aW9uU2NyaXB0IGZyb20gXCIuL0J1YmJsZUFuaW1hdGlvblNjcmlwdFwiO1xuLy8gaW1wb3J0IGxvY2FsRGF0YU1hbmFnZXIgZnJvbSBcIi4vbG9jYWxEYXRhTWFuYWdlclwiO1xuLy8gaW1wb3J0IFRhcmdldHFpdVNjcmlwdCBmcm9tIFwiLi9UYXJnZXRTY3JpcHQvVGFyZ2V0cWl1U2NyaXB0XCI7XG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyB0b3BCdWJibGVCZ1NjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4vLyAgICAgY29tcG9zaXRlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuLy8gICAgIHByaXZhdGUgX3RhcmdldE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuLy8gICAgIHNldCB0YXJnZXROb2RlKHRhcmdldE5vZGU6IGNjLk5vZGUpIHtcbi8vICAgICAgICAgdGhpcy5fdGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGU7XG4vLyAgICAgfVxuLy8gICAgIGdldCB0YXJnZXROb2RlKCkge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0Tm9kZTtcbi8vICAgICB9XG4vLyAgICAgLy8gb25Mb2FkICgpIHt9XG5cbi8vICAgICBzdGFydCgpIHtcbi8vICAgICAgICAgbGV0IHNDb3VudCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U3ludGhldGljQ291bnQoKTtcbi8vICAgICAgICAgdGhpcy5jb21wb3NpdGVMYWJlbC5zdHJpbmcgPSBgeCR7c0NvdW50fWBcbi8vICAgICB9XG5cbi8vICAgICBTeW50aGV0aWNVbHRpbWF0ZSgpIHtcbi8vICAgICAgICAgbGV0IHNDb3VudCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZ2V0U3ludGhldGljQ291bnQoKTtcbi8vICAgICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRTeW50aGV0aWNDb3VudChzQ291bnQgKyAxKTtcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLmNvbXBvc2l0ZUxhYmVsLnN0cmluZyA9IGB4JHtzQ291bnQgKyAxfWBcbi8vICAgICAgICAgfSwgMy40KTtcbi8vICAgICB9XG5cbi8vICAgICAvLyB1cGRhdGUgKGR0KSB7fVxuLy8gICAgIG1vdW50UWl1QW5pbWF0aW9uKCkge1xuLy8gICAgICAgICBsZXQgd3BvcyA9IHRoaXMudGFyZ2V0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICBsZXQgdGhpc1BvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3cG9zKTtcbi8vICAgICAgICAgdGhpcy50YXJnZXROb2RlLnNldFBvc2l0aW9uKHRoaXNQb3MpO1xuLy8gICAgICAgICB0aGlzLnRhcmdldE5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4vLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGBwcmVmYWIvdHhCdWJibGVBbmltYXRpb25gLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHJlcykge1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IGFuaU5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgY2MuUHJlZmFiKTtcbi8vICAgICAgICAgICAgICAgICBhbmlOb2RlLnNjYWxlID0gMC43O1xuLy8gICAgICAgICAgICAgICAgIGFuaU5vZGUuZ2V0Q29tcG9uZW50KEJ1YmJsZUFuaW1hdGlvblNjcmlwdCkuY2FsbEJhY2sgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCBkZXBzID0gY2MubG9hZGVyLmdldERlcGVuZHNSZWN1cnNpdmVseShyZXMpO1xuLy8gICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZShkZXBzKTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzLmRlY1JlZigpO1xuLy8gICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGFuaU5vZGUpO1xuLy8gICAgICAgICAgICAgICAgIGFkdWlvVG9vbHMucGxheVNpbXBsZUFkdWlvRW5naW5lKGVuZ2luZVR5cGUuZW5kVHVybik7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyAgICAgZGlyZWN0TW91bnRxaXUobGV2ZWwpIHtcbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvVGFyZ2V0cWl1UHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAocmVzKSB7XG4vLyAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFFpdSA9IGNjLmluc3RhbnRpYXRlKHJlcyBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgIHRhcmdldFFpdS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5sb2FkRGF0YUZpeFNpemUobGV2ZWwpXG4vLyAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gMTE1LjAgLyAxNTA7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1LnNjYWxlID0gc2NhbGU7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1LnBhcmVudCA9IHRoaXMubm9kZTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXRRaXU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/TrayScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e332eM7NLxAmbBG4x5suy50', 'TrayScript');
// script/TrayScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TrayScript = /** @class */ (function (_super) {
    __extends(TrayScript, _super);
    function TrayScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.birdNode = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    TrayScript.prototype.start = function () {
        cc.tween(this.birdNode)
            .repeatForever(cc.tween().sequence(cc.tween().parallel(cc.tween().to(1.2, { scaleX: 1.06, scaleY: 0.95 }), cc.tween().by(1.2, { position: cc.v2(0, -5) })), cc.tween().parallel(cc.tween().to(1.2, { scaleX: 0.95, scaleY: 1.05 }), cc.tween().by(1.2, { position: cc.v2(0, 5) }))))
            .start();
    };
    __decorate([
        property(cc.Node)
    ], TrayScript.prototype, "birdNode", void 0);
    TrayScript = __decorate([
        ccclass
    ], TrayScript);
    return TrayScript;
}(cc.Component));
exports.default = TrayScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVHJheVNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXlCQztRQXRCRyxjQUFRLEdBQVksSUFBSSxDQUFDOztRQXFCekIsaUJBQWlCO0lBQ3JCLENBQUM7SUFwQkcsZUFBZTtJQUVmLDBCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQ2YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDZixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQ2xELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNqRCxFQUNELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQ2YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUNsRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2hELENBQ0osQ0FDSjthQUNBLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQUhSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5QjlCO0lBQUQsaUJBQUM7Q0F6QkQsQUF5QkMsQ0F6QnVDLEVBQUUsQ0FBQyxTQUFTLEdBeUJuRDtrQkF6Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF5U2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYmlyZE5vZGUpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnBhcmFsbGVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLjIsIHsgc2NhbGVYOiAxLjA2LCBzY2FsZVk6IDAuOTUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDEuMiwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTUpIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDEuMiwgeyBzY2FsZVg6IDAuOTUsIHNjYWxlWTogMS4wNSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMS4yLCB7IHBvc2l0aW9uOiBjYy52MigwLCA1KSB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/localDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10b30Fk0/VLVZB/59yPzTwz', 'localDataManager');
// script/localDataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ISNEWER = "ISNEWER";
var PayGuider = "PayGuider";
var QIUINFO = "QIUINFO";
var TARGETLEVEL = "TARGETLEVEL";
var GUIDESHOW = "GUIDESHOW";
var DMSWICTH = "DMSWICTH";
var MUSICBG = "MUSICBG";
var MUSICEFFECT = "MUSICEFFECT";
var SYNTHETICCOUNT = "SYNTHETICCOUNT";
var PASSCOUNT = "PASSCOUNT";
var SCORECOUNT = "SCORECOUNT";
var MAXSCORECOUNT = "MAXSCORECOUNT";
var localDataManager = /** @class */ (function () {
    function localDataManager() {
    }
    localDataManager.shareManager = function () {
        if (this._Manager == null) {
            this._Manager = new localDataManager();
        }
        return this._Manager;
    };
    localDataManager.prototype.getIsNewer = function () {
        var qInfo = cc.sys.localStorage.getItem(ISNEWER);
        if (qInfo != null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.setIsNewer = function () {
        cc.sys.localStorage.setItem(ISNEWER, "isNewer");
    };
    localDataManager.prototype.isShowPayGuider = function () {
        var qInfo = cc.sys.localStorage.getItem(ISNEWER);
        if (qInfo != null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.getIsPayGuider = function () {
        var qInfo = cc.sys.localStorage.getItem(PayGuider);
        console.log("getIsPayGuider", qInfo);
        if (qInfo != null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.setIsPayGuider = function () {
        cc.sys.localStorage.setItem(PayGuider, "isGuiderPay");
    };
    localDataManager.prototype.getQiuInfo = function () {
        var qInfo = cc.sys.localStorage.getItem(QIUINFO);
        if (qInfo != null) {
            return qInfo;
        }
        return "";
    };
    localDataManager.prototype.setQiuInfo = function (qInfo) {
        // console.log(`setQiuInfo ${qInfo}`);
        if (typeof qInfo == "string" && qInfo.length > 0) {
            cc.sys.localStorage.setItem(QIUINFO, qInfo);
        }
        else {
            cc.sys.localStorage.removeItem(QIUINFO);
        }
    };
    localDataManager.prototype.getMaxScoreCount = function () {
        var mCount = cc.sys.localStorage.getItem(MAXSCORECOUNT);
        if (mCount != null) {
            return Number(mCount);
        }
        return 0;
    };
    localDataManager.prototype.setMaxScoreCount = function (mCount) {
        cc.sys.localStorage.setItem(MAXSCORECOUNT, String(mCount));
    };
    localDataManager.prototype.getScoreCount = function () {
        var sCount = cc.sys.localStorage.getItem(SCORECOUNT);
        if (sCount != null) {
            return Number(sCount);
        }
        return 0;
    };
    localDataManager.prototype.setScoreCount = function (sCount) {
        cc.sys.localStorage.setItem(SCORECOUNT, String(sCount));
    };
    localDataManager.prototype.getPassCount = function () {
        var pCount = cc.sys.localStorage.getItem(PASSCOUNT);
        if (pCount != null) {
            return Number(pCount);
        }
        return 0;
    };
    localDataManager.prototype.setPassCount = function (pCount) {
        cc.sys.localStorage.setItem(PASSCOUNT, String(pCount));
    };
    localDataManager.prototype.getSyntheticCount = function () {
        var sCount = cc.sys.localStorage.getItem(SYNTHETICCOUNT);
        if (sCount != null) {
            return Number(sCount);
        }
        return 0;
    };
    localDataManager.prototype.setSyntheticCount = function (sCount) {
        cc.sys.localStorage.setItem(SYNTHETICCOUNT, String(sCount));
    };
    localDataManager.prototype.musicBgSwitch = function () {
        var mb = cc.sys.localStorage.getItem(MUSICBG);
        if (mb == null) {
            return true;
        }
        return false;
    };
    localDataManager.prototype.setMusicBg = function (mb) {
        if (mb) {
            cc.sys.localStorage.removeItem(MUSICBG);
        }
        else {
            cc.sys.localStorage.setItem(MUSICBG, String(mb));
        }
    };
    localDataManager.prototype.dmSwitch = function () {
        var dm = cc.sys.localStorage.getItem(DMSWICTH);
        if (dm == null) {
            return true;
        }
        return false;
    };
    localDataManager.prototype.setDMSwicth = function (dm) {
        if (dm) {
            cc.sys.localStorage.removeItem(DMSWICTH);
        }
        else {
            cc.sys.localStorage.setItem(DMSWICTH, String(dm));
        }
    };
    localDataManager.prototype.guideShow = function () {
        var gs = cc.sys.localStorage.getItem(GUIDESHOW);
        if (gs == null) {
            return false;
        }
        return true;
    };
    localDataManager.prototype.setGuideShow = function () {
        cc.sys.localStorage.setItem(GUIDESHOW, "1");
    };
    localDataManager.prototype.getTargetLevel = function () {
        var targetLevel = cc.sys.localStorage.getItem(TARGETLEVEL);
        if (targetLevel != null) {
            return Number(targetLevel);
        }
        return 4;
    };
    localDataManager.prototype.setTargetLevel = function (tLvel) {
        cc.sys.localStorage.setItem(TARGETLEVEL, String(tLvel));
    };
    localDataManager.prototype.musicEfficSwitch = function () {
        var me = cc.sys.localStorage.getItem(MUSICEFFECT);
        if (me == null) {
            return true;
        }
        return false;
    };
    localDataManager.prototype.setMusicEffect = function (me) {
        if (me) {
            cc.sys.localStorage.removeItem(MUSICEFFECT);
        }
        else {
            cc.sys.localStorage.setItem(MUSICEFFECT, String(me));
        }
    };
    localDataManager._Manager = null;
    return localDataManager;
}());
exports.default = localDataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9jYWxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQTtBQUN6QixJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUE7QUFFN0IsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFBO0FBRXpCLElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQTtBQUNqQyxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUE7QUFDN0IsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFBO0FBQzNCLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQTtBQUN6QixJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUE7QUFFakMsSUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUE7QUFFdkMsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFBO0FBQzdCLElBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQTtBQUUvQixJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUE7QUFFckM7SUFXSTtJQUVBLENBQUM7SUFUYSw2QkFBWSxHQUExQjtRQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUtELHFDQUFVLEdBQVY7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FB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LENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBRyxFQUFFLEVBQUU7WUFDSCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7YUFBSTtZQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBdExjLHlCQUFRLEdBQUcsSUFBSSxDQUFDO0lBdUxuQyx1QkFBQztDQXpMRCxBQXlMQyxJQUFBO2tCQXpMb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSVNORVdFUiA9IFwiSVNORVdFUlwiXG5jb25zdCBQYXlHdWlkZXIgPSBcIlBheUd1aWRlclwiXG5cbmNvbnN0IFFJVUlORk8gPSBcIlFJVUlORk9cIlxuXG5jb25zdCBUQVJHRVRMRVZFTCA9IFwiVEFSR0VUTEVWRUxcIlxuY29uc3QgR1VJREVTSE9XID0gXCJHVUlERVNIT1dcIlxuY29uc3QgRE1TV0lDVEggPSBcIkRNU1dJQ1RIXCJcbmNvbnN0IE1VU0lDQkcgPSBcIk1VU0lDQkdcIlxuY29uc3QgTVVTSUNFRkZFQ1QgPSBcIk1VU0lDRUZGRUNUXCJcblxuY29uc3QgU1lOVEhFVElDQ09VTlQgPSBcIlNZTlRIRVRJQ0NPVU5UXCJcbiBcbmNvbnN0IFBBU1NDT1VOVCA9IFwiUEFTU0NPVU5UXCJcbmNvbnN0IFNDT1JFQ09VTlQgPSBcIlNDT1JFQ09VTlRcIlxuXG5jb25zdCBNQVhTQ09SRUNPVU5UID0gXCJNQVhTQ09SRUNPVU5UXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9jYWxEYXRhTWFuYWdlciAge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX01hbmFnZXIgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBzaGFyZU1hbmFnZXIoKTpsb2NhbERhdGFNYW5hZ2VyIHtcbiAgICAgICAgaWYodGhpcy5fTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9NYW5hZ2VyID0gbmV3IGxvY2FsRGF0YU1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fTWFuYWdlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIGdldElzTmV3ZXIoKTpib29sZWFuIHtcbiAgICAgICAgbGV0IHFJbmZvID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKElTTkVXRVIpO1xuICAgICAgICBpZiAocUluZm8gIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldElzTmV3ZXIoKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJU05FV0VSLCBcImlzTmV3ZXJcIik7XG4gICAgfVxuXG4gICAgaXNTaG93UGF5R3VpZGVyKCk6Ym9vbGVhbiB7XG4gICAgICAgIGxldCBxSW5mbyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShJU05FV0VSKTtcbiAgICAgICAgaWYgKHFJbmZvICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRJc1BheUd1aWRlcigpIHtcbiAgICAgICAgbGV0IHFJbmZvID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBheUd1aWRlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0SXNQYXlHdWlkZXJcIixxSW5mbylcbiAgICAgICAgaWYgKHFJbmZvICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRJc1BheUd1aWRlcigpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFBheUd1aWRlciwgXCJpc0d1aWRlclBheVwiKTtcbiAgICB9XG5cbiAgICBnZXRRaXVJbmZvKCk6c3RyaW5nIHtcbiAgICAgICAgbGV0IHFJbmZvID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFFJVUlORk8pO1xuICAgICAgICBpZiAocUluZm8gIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHFJbmZvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgYDtcbiAgICB9XG5cbiAgICBzZXRRaXVJbmZvKHFJbmZvOnN0cmluZykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2V0UWl1SW5mbyAke3FJbmZvfWApO1xuICAgICAgICBcbiAgICAgICAgaWYodHlwZW9mIHFJbmZvID09IFwic3RyaW5nXCIgJiYgcUluZm8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFFJVUlORk8sIHFJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFFJVUlORk8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWF4U2NvcmVDb3VudCgpOm51bWJlciB7XG4gICAgICAgIGxldCBtQ291bnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oTUFYU0NPUkVDT1VOVCk7XG4gICAgICAgIGlmIChtQ291bnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihtQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHNldE1heFNjb3JlQ291bnQobUNvdW50Om51bWJlcikge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oTUFYU0NPUkVDT1VOVCwgU3RyaW5nKG1Db3VudCkpO1xuICAgIH1cblxuICAgIGdldFNjb3JlQ291bnQoKTpudW1iZXIge1xuICAgICAgICBsZXQgc0NvdW50ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNDT1JFQ09VTlQpO1xuICAgICAgICBpZiAoc0NvdW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc0NvdW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBzZXRTY29yZUNvdW50KHNDb3VudDpudW1iZXIpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFNDT1JFQ09VTlQsIFN0cmluZyhzQ291bnQpKTtcbiAgICB9IFxuXG4gICAgZ2V0UGFzc0NvdW50KCk6bnVtYmVyIHtcbiAgICAgICAgbGV0IHBDb3VudCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQQVNTQ09VTlQpO1xuICAgICAgICBpZiAocENvdW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIocENvdW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBzZXRQYXNzQ291bnQocENvdW50Om51bWJlcikge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oUEFTU0NPVU5ULCBTdHJpbmcocENvdW50KSk7XG4gICAgfVxuXG4gICAgZ2V0U3ludGhldGljQ291bnQoKTpudW1iZXIge1xuICAgICAgICBsZXQgc0NvdW50ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNZTlRIRVRJQ0NPVU5UKTtcbiAgICAgICAgaWYgKHNDb3VudCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHNDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgc2V0U3ludGhldGljQ291bnQoc0NvdW50Om51bWJlcikge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1lOVEhFVElDQ09VTlQsIFN0cmluZyhzQ291bnQpKTtcbiAgICB9XG5cbiAgICBtdXNpY0JnU3dpdGNoKCkge1xuICAgICAgICBsZXQgbWIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oTVVTSUNCRyk7XG4gICAgICAgIGlmIChtYiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TXVzaWNCZyhtYjpib29sZWFuKSB7XG4gICAgICAgIGlmKG1iKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oTVVTSUNCRyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKE1VU0lDQkcsIFN0cmluZyhtYikpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGRtU3dpdGNoKCl7XG4gICAgICAgIGxldCBkbSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShETVNXSUNUSCk7XG4gICAgICAgIGlmIChkbSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0RE1Td2ljdGgoZG06Ym9vbGVhbikge1xuICAgICAgICBpZihkbSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKERNU1dJQ1RIKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oRE1TV0lDVEgsIFN0cmluZyhkbSkpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGd1aWRlU2hvdygpe1xuICAgICAgICBsZXQgZ3MgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oR1VJREVTSE9XKTtcbiAgICAgICAgaWYgKGdzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRHdWlkZVNob3coKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShHVUlERVNIT1csIFwiMVwiKTtcbiAgICB9XG5cbiAgICBnZXRUYXJnZXRMZXZlbCgpOm51bWJlciB7XG4gICAgICAgIGxldCB0YXJnZXRMZXZlbCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShUQVJHRVRMRVZFTCk7XG4gICAgICAgIGlmKHRhcmdldExldmVsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodGFyZ2V0TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA0O1xuICAgIH1cblxuICAgIHNldFRhcmdldExldmVsKHRMdmVsOm51bWJlcikge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oVEFSR0VUTEVWRUwsIFN0cmluZyh0THZlbCkpO1xuICAgIH1cblxuICAgIG11c2ljRWZmaWNTd2l0Y2goKSB7XG4gICAgICAgIGxldCBtZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShNVVNJQ0VGRkVDVCk7XG4gICAgICAgIGlmIChtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TXVzaWNFZmZlY3QobWU6Ym9vbGVhbikge1xuICAgICAgICBpZihtZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKE1VU0lDRUZGRUNUKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oTVVTSUNFRkZFQ1QsIFN0cmluZyhtZSkpO1xuICAgICAgICB9ICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tireSteakScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c8dbZIzWNKeInaAvTQsrjH', 'tireSteakScript');
// script/tireSteakScript.ts

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
var gameConfig_1 = require("./gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tireSteakScript = /** @class */ (function (_super) {
    __extends(tireSteakScript, _super);
    function tireSteakScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tireSteakNode = null;
        _this.particleNode = null;
        _this.spriteNode = null;
        _this.targetNode = null;
        _this.leftNode = null;
        _this.score = 0;
        _this.redbag = null;
        return _this;
    }
    tireSteakScript.prototype.onDestroy = function () {
    };
    tireSteakScript.prototype.onLoad = function () {
        var _this = this;
        this.targetNode = cc.find("Canvas/gameNode/gameLayer/UpRewardNode/bg3/moneyID/label");
        cc.resources.load("prefab/redbagPrefab", cc.Prefab, function (err, res) {
            if (res) {
                _this.redbag = cc.instantiate(res);
                _this.node.addChild(_this.redbag);
                _this.redbag.opacity = 0;
            }
        });
    };
    tireSteakScript.prototype.start = function () {
    };
    tireSteakScript.prototype.action = function () {
        var _this = this;
        var targetNode;
        targetNode = this.targetNode;
        var tartgetPos = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos1 = this.node.convertToNodeSpaceAR(tartgetPos);
        var pos = cc.v2(pos1.x + targetNode.width / 2, pos1.y);
        var MotionStreakComponent = this.tireSteakNode.getComponent(cc.MotionStreak);
        this.spriteNode.opacity = 255;
        MotionStreakComponent.stroke = 34;
        cc.tween(this.node)
            .parallel(cc.tween()
            .call(function () {
            _this.redbag.opacity = 255;
        })
            .delay(0.65)
            .call(function () {
            // let particleNode = cc.instantiate(this.particleNode);
            // particleNode.getComponent(cc.ParticleSystem).playOnLoad = true;
            // particleNode.getComponent(cc.ParticleSystem).autoRemoveOnFinish = true;
            // this.node.addChild(particleNode);
        }), cc.tween().bezierBy(1.0, cc.v2(pos.x / 4, 500), cc.v2(pos.x * 3 / 4, 500), pos)
            .call(function () {
            cc.tween(_this.spriteNode).to(0.5, { opacity: 0 }).start();
            _this.redbag.opacity = 0;
            // let particleNode = cc.instantiate(this.particleNode);
            // particleNode.getComponent(cc.ParticleSystem).playOnLoad = true;
            // particleNode.getComponent(cc.ParticleSystem).autoRemoveOnFinish = true;
            // this.node.addChild(particleNode);
            var dic = {};
            dic['Rp'] = 1000000;
            dic['R$'] = 350;
            dic['₩'] = 88000;
            var addUnit = (dic[gameConfig_1.default.getUnifyCurrency()] || 66) / 10;
            var oldReward = 0;
            cc.tween(targetNode)
                .repeat(9, cc.tween()
                .call(function () {
                oldReward = oldReward + addUnit;
                targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + oldReward.toFixed(2);
            })
                .to(0.06, { scale: 1.12 })
                .to(0.04, { scale: 1.0 })).call(function () {
                targetNode.getComponent(cc.Label).string = gameConfig_1.default.getUnifyCurrency() + (addUnit * 10).toFixed(2);
            })
                .start();
        })
            .delay(1.0)
            .call(function () {
            cc.resources.load("prefab/BigWinNode", cc.Prefab, function (err, res) {
                var prefab = cc.instantiate(res);
                cc.find("Canvas/gameNode").addChild(prefab);
            });
            _this.node.destroy();
            // window.gameEnd&&window.gameEnd();
        }))
            .start();
    };
    __decorate([
        property(cc.Node)
    ], tireSteakScript.prototype, "tireSteakNode", void 0);
    __decorate([
        property(cc.Node)
    ], tireSteakScript.prototype, "particleNode", void 0);
    __decorate([
        property(cc.Node)
    ], tireSteakScript.prototype, "spriteNode", void 0);
    tireSteakScript = __decorate([
        ccclass
    ], tireSteakScript);
    return tireSteakScript;
}(cc.Component));
exports.default = tireSteakScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdGlyZVN0ZWFrU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFzQztBQUdoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTBHQztRQXZHRyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVcsSUFBSSxDQUFBO1FBRXZCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFFakIsWUFBTSxHQUFXLElBQUksQ0FBQTs7SUF5RnpCLENBQUM7SUF0RkcsbUNBQVMsR0FBVDtJQUVBLENBQUM7SUFDRCxnQ0FBTSxHQUFOO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDekQsSUFBSSxHQUFHLEVBQUM7Z0JBQ0osS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQTJCLENBQUMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7YUFDMUI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdD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QVMsR0EwR3hEO2tCQTFHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsZXZlbEJhclNjcmlwdCBmcm9tIFwiLi9sZXZlbEJhclNjcmlwdFwiO1xuaW1wb3J0IGdhbWVDb25maWcgZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IFRhcmdldHFpdVNjcmlwdCBmcm9tIFwiLi9UYXJnZXRTY3JpcHQvVGFyZ2V0cWl1U2NyaXB0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aXJlU3RlYWtTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlyZVN0ZWFrTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYXJ0aWNsZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3ByaXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICB0YXJnZXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGxlZnROb2RlOmNjLk5vZGUgPSBudWxsXG5cbiAgICBzY29yZTpudW1iZXIgPSAwO1xuXG4gICAgcmVkYmFnOmNjLk5vZGUgPSBudWxsXG5cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gY2MuZmluZChcIkNhbnZhcy9nYW1lTm9kZS9nYW1lTGF5ZXIvVXBSZXdhcmROb2RlL2JnMy9tb25leUlEL2xhYmVsXCIpO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYi9yZWRiYWdQcmVmYWJcIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVkYmFnID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIHVua25vd24gYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5yZWRiYWcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVkYmFnLm9wYWNpdHkgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBhY3Rpb24oKSB7XG4gICAgICAgIGxldCB0YXJnZXROb2RlXG4gICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldE5vZGVcbiAgICAgICAgbGV0IHRhcnRnZXRQb3MgPSB0YXJnZXROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGxldCBwb3MxID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcnRnZXRQb3MpO1xuICAgICAgICBsZXQgcG9zID0gY2MudjIocG9zMS54ICsgdGFyZ2V0Tm9kZS53aWR0aCAvIDIsIHBvczEueSk7XG4gICAgICAgIGxldCBNb3Rpb25TdHJlYWtDb21wb25lbnQgPSB0aGlzLnRpcmVTdGVha05vZGUuZ2V0Q29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgICAgIHRoaXMuc3ByaXRlTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBNb3Rpb25TdHJlYWtDb21wb25lbnQuc3Ryb2tlID0gMzQ7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5wYXJhbGxlbChcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkYmFnLm9wYWNpdHkgPSAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC42NSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHBhcnRpY2xlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFydGljbGVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnRpY2xlTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnBsYXlPbkxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVOb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuYXV0b1JlbW92ZU9uRmluaXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChwYXJ0aWNsZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJlemllckJ5KDEuMCwgY2MudjIocG9zLnggLyA0LCA1MDApLCBjYy52Mihwb3MueCAqIDMgLyA0LCA1MDApLCBwb3MpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3ByaXRlTm9kZSkudG8oMC41LCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGJhZy5vcGFjaXR5ID0gMFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcGFydGljbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYXJ0aWNsZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljbGVOb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkucGxheU9uTG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNsZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5hdXRvUmVtb3ZlT25GaW5pc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKHBhcnRpY2xlTm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGljOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGljWydScCddID0gMTAwMDAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY1snUiQnXSA9IDM1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY1sn4oKpJ10gPSA4ODAwMFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZFVuaXQgPSAoZGljW2dhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpXSB8fCA2NikgLyAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRSZXdhcmQgPSAwXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRhcmdldE5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBlYXQoOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFJld2FyZCA9IG9sZFJld2FyZCArIGFkZFVuaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBnYW1lQ29uZmlnLmdldFVuaWZ5Q3VycmVuY3koKSArIG9sZFJld2FyZC50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDYsIHtzY2FsZTogMS4xMn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDQsIHtzY2FsZTogMS4wfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpICsgKGFkZFVuaXQqMTApLnRvRml4ZWQoMil9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMS4wKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgcHJlZmFiL0JpZ1dpbk5vZGVgLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVOb2RlXCIpLmFkZENoaWxkKHByZWZhYilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cuZ2FtZUVuZCYmd2luZG93LmdhbWVFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BigWinNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1256/cwMJFx4ig41ZJKszc', 'BigWinNode');
// script/BigWinNode.ts

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
var gameConfig_1 = require("./gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BigWinNode = /** @class */ (function (_super) {
    __extends(BigWinNode, _super);
    function BigWinNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.download = null;
        _this.cashLabel = null;
        _this.cashImage = null;
        return _this;
    }
    BigWinNode.prototype.onLoad = function () {
        var _a = gameConfig_1.default.getWord('cashOut'), string = _a.string, fontSize = _a.fontSize;
        this.download.string = string;
        this.download.fontSize = fontSize;
        // let addUnit = gameConfig.getUnityMoneyNumber(300.00);
        // this.cashLabel.string =  gameConfig.getUnifyCurrency() + addUnit.toFixed(2);
    };
    BigWinNode.prototype.start = function () {
        var addUnit = gameConfig_1.default.getUnityMoneyNumber(300.00);
        this.runNumberTween(0, addUnit, 1.0);
    };
    BigWinNode.prototype.runNumberTween = function (from, to, duration) {
        var _this = this;
        var obj = { value: from };
        cc.tween(obj)
            .to(duration, { value: to }, {
            onUpdate: function (target) {
                // 精确到两位小数
                _this.cashLabel.string = gameConfig_1.default.getUnifyCurrency() + target.value.toFixed(0);
                setTimeout(function () {
                    _this.cashImage.setPosition(cc.v2(90 - _this.cashLabel.node.width / 2 - 100, _this.cashImage.getPosition().y));
                }, 0);
            }
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], BigWinNode.prototype, "download", void 0);
    __decorate([
        property(cc.Label)
    ], BigWinNode.prototype, "cashLabel", void 0);
    __decorate([
        property(cc.Node)
    ], BigWinNode.prototype, "cashImage", void 0);
    BigWinNode = __decorate([
        ccclass
    ], BigWinNode);
    return BigWinNode;
}(cc.Component));
exports.default = BigWinNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmlnV2luTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUY7QUFDbkYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzQ0M7UUFwQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBOEI3QixDQUFDO0lBN0JHLDJCQUFNLEdBQU47UUFDVSxJQUFBLEtBQXFCLG9CQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFqRCxNQUFNLFlBQUEsRUFBRSxRQUFRLGNBQWlDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQyx3REFBd0Q7UUFDeEQsK0VBQStFO0lBRW5GLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBRUksSUFBSSxPQUFPLEdBQUcsb0JBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLG1DQUFjLEdBQXJCLFVBQXNCLElBQVksRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFBaEUsaUJBYUM7UUFaRyxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNSLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDekIsUUFBUSxFQUFFLFVBQUMsTUFBVztnQkFDbEIsVUFBVTtnQkFDVixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBSSxvQkFBVSxDQUFDLGdCQUFnQixFQUFFLEdBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLFVBQVUsQ0FBQztvQkFDUCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUM7U0FDSixDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQVJSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FzQzlCO0lBQUQsaUJBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q3VDLEVBQUUsQ0FBQyxTQUFTLEdBc0NuRDtrQkF0Q29CLFVBQVU7QUF3Qy9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lQ29uZmlnLCB7Q291bnRyeSwgSnVpY2VJdGVtLCBKdWljZUl0ZW1UeXBlLCBMYW5ndWFnZVR5cGV9IGZyb20gXCIuL2dhbWVDb25maWdcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlnV2luTm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGRvd25sb2FkOmNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBjYXNoTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FzaEltYWdlOmNjLk5vZGUgPSBudWxsO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY29uc3Qge3N0cmluZywgZm9udFNpemV9ID0gZ2FtZUNvbmZpZy5nZXRXb3JkKCdjYXNoT3V0JylcbiAgICAgICAgdGhpcy5kb3dubG9hZC5zdHJpbmcgPSBzdHJpbmc7XG4gICAgICAgIHRoaXMuZG93bmxvYWQuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgLy8gbGV0IGFkZFVuaXQgPSBnYW1lQ29uZmlnLmdldFVuaXR5TW9uZXlOdW1iZXIoMzAwLjAwKTtcbiAgICAgICAgLy8gdGhpcy5jYXNoTGFiZWwuc3RyaW5nID0gIGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpICsgYWRkVW5pdC50b0ZpeGVkKDIpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICBsZXQgYWRkVW5pdCA9IGdhbWVDb25maWcuZ2V0VW5pdHlNb25leU51bWJlcigzMDAuMDApO1xuICAgICAgICB0aGlzLnJ1bk51bWJlclR3ZWVuKDAsYWRkVW5pdCwxLjApO1xuICAgIH1cblxuICAgIHB1YmxpYyBydW5OdW1iZXJUd2Vlbihmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG9iaiA9IHsgdmFsdWU6IGZyb20gfTtcbiAgICAgICAgY2MudHdlZW4ob2JqKVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHZhbHVlOiB0byB9LCB7XG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICh0YXJnZXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDnsr7noa7liLDkuKTkvY3lsI/mlbBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNoTGFiZWwuc3RyaW5nID0gIGdhbWVDb25maWcuZ2V0VW5pZnlDdXJyZW5jeSgpK3RhcmdldC52YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzaEltYWdlLnNldFBvc2l0aW9uKGNjLnYyKDkwLXRoaXMuY2FzaExhYmVsLm5vZGUud2lkdGgvMi0xMDAsIHRoaXMuY2FzaEltYWdlLmdldFBvc2l0aW9uKCkueSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxufVxuXG4vLyB1cGRhdGUgKGR0KSB7fVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/FinalRandom/FinalRandom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95fa7g4q+tOHIZkQaMMyFdB', 'FinalRandom');
// script/FinalRandom/FinalRandom.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalRandom = void 0;
var Point_1 = require("./Point");
var FinalRandom = /** @class */ (function () {
    /**
     * 创建一个随机数生成器
     */
    function FinalRandom(seed) {
        this.seed = seed;
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
    }
    Object.defineProperty(FinalRandom.prototype, "value", {
        /**
         * 返回一个随机数，在0.0～1.0之间
         */
        get: function () {
            return this.range(0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FinalRandom.prototype, "insideUnitCircle", {
        /**
         * 返回半径为1的圆内的一个随机点
         */
        get: function () {
            var randomAngle = this.range(0, 360);
            var randomDis = this.range(0, 1);
            var randomX = randomDis * Math.cos(randomAngle * Math.PI / 180);
            var randomY = randomDis * Math.sin(randomAngle * Math.PI / 180);
            return new Point_1.Point(randomX, randomY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FinalRandom.prototype, "onUnitCircle", {
        /**
         * 返回半径为1的圆边的一个随机点
         */
        get: function () {
            var randomAngle = this.range(0, 360);
            var randomX = Math.cos(randomAngle * Math.PI / 180);
            var randomY = Math.sin(randomAngle * Math.PI / 180);
            return new Point_1.Point(randomX, randomY);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 返回一个在min和max之间的随机浮点数
     */
    FinalRandom.prototype.range = function (min, max) {
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
        max = max || 1;
        min = min || 0;
        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min);
    };
    Object.defineProperty(FinalRandom, "value", {
        /**
         * 返回一个随机数，在0.0～1.0之间
         */
        get: function () {
            return this.range(0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FinalRandom, "insideUnitCircle", {
        /**
         * 返回半径为1的圆内的一个随机点
         */
        get: function () {
            var randomAngle = this.range(0, 360);
            var randomDis = this.range(0, 1);
            var randomX = randomDis * Math.cos(randomAngle * Math.PI / 180);
            var randomY = randomDis * Math.sin(randomAngle * Math.PI / 180);
            return new Point_1.Point(randomX, randomY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FinalRandom, "onUnitCircle", {
        /**
         * 返回半径为1的圆边的一个随机点
         */
        get: function () {
            var randomAngle = this.range(0, 360);
            var randomX = Math.cos(randomAngle * Math.PI / 180);
            var randomY = Math.sin(randomAngle * Math.PI / 180);
            return new Point_1.Point(randomX, randomY);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 返回一个在min和max之间的随机浮点数
     */
    FinalRandom.range = function (min, max) {
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
        max = max || 1;
        min = min || 0;
        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min);
    };
    /**
     * 返回一个在[0,max)之间的整数
     * @param max
     */
    FinalRandom.RandInt = function (max) {
        return Math.floor(FinalRandom.range(0, max));
    };
    /**
     * 返回一个在[min,max)之间的整数
     * @param min
     * @param max
     */
    FinalRandom.RandIntBetween = function (min, max) {
        return Math.floor(FinalRandom.range(min, max));
    };
    /**
     * 返回一个在[0，max)之间的浮点数
     * @param max 最大数
     */
    FinalRandom.RandFloat = function (max) {
        return FinalRandom.range(0, max);
    };
    /**
     * 返回一个在[min,max)之间的浮点数
     * @param min
     * @param max
     */
    FinalRandom.RandFloatBetween = function (min, max) {
        return FinalRandom.range(min, max);
    };
    return FinalRandom;
}());
exports.FinalRandom = FinalRandom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRmluYWxSYW5kb20vRmluYWxSYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWdDO0FBSWhDO0lBRUk7O09BRUc7SUFDSCxxQkFBbUIsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBUUQsc0JBQVksOEJBQUs7UUFIakI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBWSx5Q0FBZ0I7UUFINUI7O1dBRUc7YUFDSDtZQUNJLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksU0FBUyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksT0FBTyxHQUFXLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hFLElBQUksT0FBTyxHQUFXLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sSUFBSSxhQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBSUQsc0JBQVkscUNBQVk7UUFIeEI7O1dBRUc7YUFD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cnQgeyBQb2ludCB9IGZyb20gXCIuL1BvaW50XCI7XG5cbiBcblxuZXhwb3J0IGNsYXNzIEZpbmFsUmFuZG9tIHtcblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuS4gOS4qumaj+acuuaVsOeUn+aIkOWZqFxuICAgICAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZWVkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWVkID0gc2VlZDtcbiAgICAgICAgaWYgKCF0aGlzLnNlZWQgJiYgdGhpcy5zZWVkICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rueUqOS6jumaj+acuuaVsOeUn+aIkOWZqOeahOenjeWtkO+8jOWmguaenOS4jeiuvue9ruWImeWunumZheaYr+WPluW9k+WJjeaXtumXtOavq+enkuaVsFxuICAgICAqL1xuICAgIHByaXZhdGUgc2VlZDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIOi/lOWbnuS4gOS4qumaj+acuuaVsO+8jOWcqDAuMO+9njEuMOS5i+mXtFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDAsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDov5Tlm57ljYrlvoTkuLox55qE5ZyG5YaF55qE5LiA5Liq6ZqP5py654K5XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgaW5zaWRlVW5pdENpcmNsZSgpOiBQb2ludCB7XG4gICAgICAgIHZhciByYW5kb21BbmdsZTogbnVtYmVyID0gdGhpcy5yYW5nZSgwLCAzNjApO1xuICAgICAgICB2YXIgcmFuZG9tRGlzOiBudW1iZXIgPSB0aGlzLnJhbmdlKDAsIDEpO1xuICAgICAgICB2YXIgcmFuZG9tWDogbnVtYmVyID0gcmFuZG9tRGlzICogTWF0aC5jb3MocmFuZG9tQW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdmFyIHJhbmRvbVk6IG51bWJlciA9IHJhbmRvbURpcyAqIE1hdGguc2luKHJhbmRvbUFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi/lOWbnuWNiuW+hOS4ujHnmoTlnIbovrnnmoTkuIDkuKrpmo/mnLrngrlcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBvblVuaXRDaXJjbGUoKTogUG9pbnQge1xuICAgICAgICB2YXIgcmFuZG9tQW5nbGU6IG51bWJlciA9IHRoaXMucmFuZ2UoMCwgMzYwKTtcbiAgICAgICAgdmFyIHJhbmRvbVg6IG51bWJlciA9IE1hdGguY29zKHJhbmRvbUFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHZhciByYW5kb21ZOiBudW1iZXIgPSBNYXRoLnNpbihyYW5kb21BbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuIDkuKrlnKhtaW7lkoxtYXjkuYvpl7TnmoTpmo/mnLrmta7ngrnmlbBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJhbmdlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICghdGhpcy5zZWVkICYmIHRoaXMuc2VlZCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBtYXggPSBtYXggfHwgMTtcbiAgICAgICAgbWluID0gbWluIHx8IDA7XG4gICAgICAgIHRoaXMuc2VlZCA9ICh0aGlzLnNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgICAgICB2YXIgcm5kID0gdGhpcy5zZWVkIC8gMjMzMjgwLjA7XG4gICAgICAgIHJldHVybiBtaW4gKyBybmQgKiAobWF4IC0gbWluKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u55So5LqO6ZqP5py65pWw55Sf5oiQ5Zmo55qE56eN5a2Q77yM5aaC5p6c5LiN6K6+572u5YiZ5a6e6ZmF5piv5Y+W5b2T5YmN5pe26Ze05q+r56eS5pWwXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2VlZDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIOi/lOWbnuS4gOS4qumaj+acuuaVsO+8jOWcqDAuMO+9njEuMOS5i+mXtFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZSgwLCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+U5Zue5Y2K5b6E5Li6MeeahOWchuWGheeahOS4gOS4qumaj+acuueCuVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGdldCBpbnNpZGVVbml0Q2lyY2xlKCk6IFBvaW50IHtcbiAgICAgICAgdmFyIHJhbmRvbUFuZ2xlOiBudW1iZXIgPSB0aGlzLnJhbmdlKDAsIDM2MCk7XG4gICAgICAgIHZhciByYW5kb21EaXM6IG51bWJlciA9IHRoaXMucmFuZ2UoMCwgMSk7XG4gICAgICAgIHZhciByYW5kb21YOiBudW1iZXIgPSByYW5kb21EaXMgKiBNYXRoLmNvcyhyYW5kb21BbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB2YXIgcmFuZG9tWTogbnVtYmVyID0gcmFuZG9tRGlzICogTWF0aC5zaW4ocmFuZG9tQW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChyYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+U5Zue5Y2K5b6E5Li6MeeahOWchui+ueeahOS4gOS4qumaj+acuueCuVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGdldCBvblVuaXRDaXJjbGUoKTogUG9pbnQge1xuICAgICAgICB2YXIgcmFuZG9tQW5nbGU6IG51bWJlciA9IHRoaXMucmFuZ2UoMCwgMzYwKTtcbiAgICAgICAgdmFyIHJhbmRvbVg6IG51bWJlciA9IE1hdGguY29zKHJhbmRvbUFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHZhciByYW5kb21ZOiBudW1iZXIgPSBNYXRoLnNpbihyYW5kb21BbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuIDkuKrlnKhtaW7lkoxtYXjkuYvpl7TnmoTpmo/mnLrmta7ngrnmlbBcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyByYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuc2VlZCAmJiB0aGlzLnNlZWQgIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWVkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgbWF4ID0gbWF4IHx8IDE7XG4gICAgICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgICAgICB0aGlzLnNlZWQgPSAodGhpcy5zZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgICAgdmFyIHJuZCA9IHRoaXMuc2VlZCAvIDIzMzI4MC4wO1xuICAgICAgICByZXR1cm4gbWluICsgcm5kICogKG1heCAtIG1pbik7XG4gICAgfVxuXG5cblxuXG4gICAgXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq5ZyoWzAsbWF4KeS5i+mXtOeahOaVtOaVsFxuICAgICAqIEBwYXJhbSBtYXggXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBSYW5kSW50KG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoRmluYWxSYW5kb20ucmFuZ2UoMCwgbWF4KSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuIDkuKrlnKhbbWluLG1heCnkuYvpl7TnmoTmlbTmlbBcbiAgICAgKiBAcGFyYW0gbWluIFxuICAgICAqIEBwYXJhbSBtYXggXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBSYW5kSW50QmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoRmluYWxSYW5kb20ucmFuZ2UobWluLCBtYXgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuIDkuKrlnKhbMO+8jG1heCnkuYvpl7TnmoTmta7ngrnmlbBcbiAgICAgKiBAcGFyYW0gbWF4IOacgOWkp+aVsFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUmFuZEZsb2F0KG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIEZpbmFsUmFuZG9tLnJhbmdlKDAsIG1heCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq5ZyoW21pbixtYXgp5LmL6Ze055qE5rWu54K55pWwXG4gICAgICogQHBhcmFtIG1pbiBcbiAgICAgKiBAcGFyYW0gbWF4IFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUmFuZEZsb2F0QmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gRmluYWxSYW5kb20ucmFuZ2UobWluLCBtYXgpO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utiltools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb0ddiMEuFLMKiDB433F1do', 'utiltools');
// script/utiltools.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utiltools = /** @class */ (function () {
    function utiltools() {
    }
    utiltools.getRandom = function (m1, m2) {
        var min = Math.min(m1, m2);
        var max = Math.max(m1, m2);
        return min + Math.floor((Math.random() * (max - min)));
    };
    return utiltools;
}());
exports.default = utiltools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHRvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVlBLENBQUM7SUFWVSxtQkFBUyxHQUFoQixVQUFpQixFQUFFLEVBQUcsRUFBRTtRQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRyxFQUFFLENBQUMsQ0FBQztRQUM3QixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBTUosZ0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIHV0aWx0b29scyAge1xuXG4gICAgc3RhdGljIGdldFJhbmRvbShtMSAsIG0yKSB7IFxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4obTEgLCBtMik7XG4gICAgICAgIGxldCBtYXggPSBNYXRoLm1heChtMSAsIG0yKTtcbiAgICAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoobWF4IC0gbWluKSkpXG4gICB9XG5cblxuXG4gICBcbiAgIFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MoneyAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc6e6gFH2hG2IwLV87M0Mnw', 'MoneyAnimation');
// script/MoneyAnimation.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
function randomMinus1To1() {
    return Math.random() * 2 - 1;
}
var MoneyAnimation = /** @class */ (function (_super) {
    __extends(MoneyAnimation, _super);
    function MoneyAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moneyPrefab = null;
        _this.emitCount = 8; // 发射数量
        _this.speed = 300; // 速度（像素/秒）
        _this.rotateSpeed = 360; // 旋转速度（度/秒）
        return _this;
    }
    MoneyAnimation.prototype.onLoad = function () {
        // 确保moneyPrefab已设置
        if (!this.moneyPrefab) {
            cc.error("Money prefab is not set!");
            return;
        }
        this.emitMoney();
    };
    /**
     * 调用该函数触发飞钱动画
     */
    MoneyAnimation.prototype.emitMoney = function () {
        var center = cc.v2(0, 0); // 本节点为中心（相对当前节点坐标）
        var radius = 200; // 飞行半径
        var _loop_1 = function (i) {
            // 每个物体的发射角
            var angle = (2 * Math.PI / this_1.emitCount) * i + randomMinus1To1() * 0.1;
            var direction = cc.v2(Math.cos(angle), Math.sin(angle));
            var dest = center.add(direction.mul(radius));
            // 实例化money对象
            var moneyNode = cc.instantiate(this_1.moneyPrefab);
            moneyNode.parent = this_1.node;
            moneyNode.setPosition(center);
            moneyNode.setScale(0.7);
            var distance = center.sub(dest).mag();
            var duration = distance / this_1.speed;
            // 旋转目标
            var finalAngle = this_1.rotateSpeed * duration;
            // 用 cc.tween 添加飞行和旋转动画（2.2.1支持cc.tween）
            cc.tween(moneyNode)
                .to(duration, {
                position: cc.v3(dest.x, dest.y, 0),
                angle: finalAngle
            }, { easing: 'sineInOut' })
                .call(function () {
                moneyNode.destroy();
            })
                .start();
        };
        var this_1 = this;
        for (var i = 0; i < this.emitCount; ++i) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], MoneyAnimation.prototype, "moneyPrefab", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "emitCount", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "speed", void 0);
    __decorate([
        property
    ], MoneyAnimation.prototype, "rotateSpeed", void 0);
    MoneyAnimation = __decorate([
        ccclass
    ], MoneyAnimation);
    return MoneyAnimation;
}(cc.Component));
exports.default = MoneyAnimation;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTW9uZXlBbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsU0FBUyxlQUFlO0lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUdEO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBMkRDO1FBeERHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBRyxPQUFPO1FBR2hDLFdBQUssR0FBVyxHQUFHLENBQUMsQ0FBSyxXQUFXO1FBR3BDLGlCQUFXLEdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWTs7SUErQzNDLENBQUM7SUE3Q0csK0JBQU0sR0FBTjtRQUNJLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGtDQUFTLEdBQWhCO1FBQ0ksSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7UUFDL0MsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQVMsT0FBTztnQ0FFMUIsQ0FBQztZQUNOLFdBQVc7WUFDWCxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUMzRSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRS9DLGFBQWE7WUFDYixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssV0FBVyxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFLLElBQUksQ0FBQztZQUM3QixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsT0FBSyxLQUFLLENBQUM7WUFFckMsT0FBTztZQUNQLElBQUksVUFBVSxHQUFHLE9BQUssV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUM3Qyx3Q0FBd0M7WUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7aUJBQ2QsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDVixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLEVBQUUsVUFBVTthQUNwQixFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUMxQixJQUFJLENBQUM7Z0JBQ0YsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLEVBQUUsQ0FBQzs7O1FBMUJqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7b0JBQTlCLENBQUM7U0EyQlQ7SUFDTCxDQUFDO0lBdkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1U7SUFHOUI7UUFEQyxRQUFRO3FEQUNhO0lBR3RCO1FBREMsUUFBUTtpREFDVztJQUdwQjtRQURDLFFBQVE7dURBQ2lCO0lBWlQsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJEbEM7SUFBRCxxQkFBQztDQTNERCxBQTJEQyxDQTNEMkMsRUFBRSxDQUFDLFNBQVMsR0EyRHZEO2tCQTNEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuZnVuY3Rpb24gcmFuZG9tTWludXMxVG8xKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbmV5QW5pbWF0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbW9uZXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICBlbWl0Q291bnQ6IG51bWJlciA9IDg7ICAgLy8g5Y+R5bCE5pWw6YePXG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMzAwOyAgICAgLy8g6YCf5bqm77yI5YOP57SgL+enku+8iVxuXG4gICAgQHByb3BlcnR5XG4gICAgcm90YXRlU3BlZWQ6IG51bWJlciA9IDM2MDsgLy8g5peL6L2s6YCf5bqm77yI5bqmL+enku+8iVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDnoa7kv51tb25leVByZWZhYuW3suiuvue9rlxuICAgICAgICBpZiAoIXRoaXMubW9uZXlQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiTW9uZXkgcHJlZmFiIGlzIG5vdCBzZXQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdE1vbmV5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6LCD55So6K+l5Ye95pWw6Kem5Y+R6aOe6ZKx5Yqo55S7XG4gICAgICovXG4gICAgcHVibGljIGVtaXRNb25leSgpIHtcbiAgICAgICAgY29uc3QgY2VudGVyID0gY2MudjIoMCwgMCk7IC8vIOacrOiKgueCueS4uuS4reW/g++8iOebuOWvueW9k+WJjeiKgueCueWdkOagh++8iVxuICAgICAgICBjb25zdCByYWRpdXMgPSAyMDA7ICAgICAgICAgLy8g6aOe6KGM5Y2K5b6EXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVtaXRDb3VudDsgKytpKSB7XG4gICAgICAgICAgICAvLyDmr4/kuKrniankvZPnmoTlj5HlsITop5JcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJIC8gdGhpcy5lbWl0Q291bnQpICogaSArIHJhbmRvbU1pbnVzMVRvMSgpICogMC4xO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gY2MudjIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgY29uc3QgZGVzdCA9IGNlbnRlci5hZGQoZGlyZWN0aW9uLm11bChyYWRpdXMpKTtcblxuICAgICAgICAgICAgLy8g5a6e5L6L5YyWbW9uZXnlr7nosaFcbiAgICAgICAgICAgIGxldCBtb25leU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1vbmV5UHJlZmFiKTtcbiAgICAgICAgICAgIG1vbmV5Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBtb25leU5vZGUuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgICAgIG1vbmV5Tm9kZS5zZXRTY2FsZSgwLjcpO1xuXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBjZW50ZXIuc3ViKGRlc3QpLm1hZygpO1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyB0aGlzLnNwZWVkO1xuXG4gICAgICAgICAgICAvLyDml4vovaznm67moIdcbiAgICAgICAgICAgIGxldCBmaW5hbEFuZ2xlID0gdGhpcy5yb3RhdGVTcGVlZCAqIGR1cmF0aW9uO1xuICAgICAgICAgICAgLy8g55SoIGNjLnR3ZWVuIOa3u+WKoOmjnuihjOWSjOaXi+i9rOWKqOeUu++8iDIuMi4x5pSv5oyBY2MudHdlZW7vvIlcbiAgICAgICAgICAgIGNjLnR3ZWVuKG1vbmV5Tm9kZSlcbiAgICAgICAgICAgICAgICAudG8oZHVyYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKGRlc3QueCxkZXN0LnksMCksXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiBmaW5hbEFuZ2xlXG4gICAgICAgICAgICAgICAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb25leU5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4040a0iaJCLoZzaUiRggmH', 'gameConfig');
// script/gameConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuiceItem = exports.Country = exports.LanguageType = exports.PlayableAdType = void 0;
var localDataManager_1 = require("./localDataManager");
var JsbSdkScript_1 = require("./PlatformInteraction/JsbSdkScript");
var PlayableAdType;
(function (PlayableAdType) {
    PlayableAdType["AppLovin"] = "AppLovin";
    PlayableAdType["Mtg"] = "Mtg";
})(PlayableAdType = exports.PlayableAdType || (exports.PlayableAdType = {}));
var LanguageType;
(function (LanguageType) {
    LanguageType["English"] = "English";
    /**印尼语 */
    LanguageType["IN"] = "IN";
    /**葡萄牙 */
    LanguageType["PT"] = "PT";
    /** 韩语 */
    LanguageType["KO"] = "KO";
    /** 菲律宾语 */
    LanguageType["FIL"] = "FIL";
    /** 越南语 */
    LanguageType["VN"] = "VN";
    /** 印地语 */
    LanguageType["HI"] = "HI";
    /** 俄语 */
    LanguageType["RU"] = "RU";
})(LanguageType = exports.LanguageType || (exports.LanguageType = {}));
var Country;
(function (Country) {
    /**印尼 */
    Country["ID"] = "id";
    /**巴西 */
    Country["BR"] = "br";
    /**巴基斯坦 */
    Country["PK"] = "pk";
    /**英语*/
    Country["EN"] = "en";
    /**韩国 */
    Country["KR"] = "kr";
    /**俄罗斯 */
    Country["RU"] = "ru";
    /**菲律宾 */
    Country["PH"] = "ph";
    /**越南 */
    Country["VN"] = "vn";
    /**印度 */
    Country["IN"] = "in";
})(Country = exports.Country || (exports.Country = {}));
var MoneyParam = /** @class */ (function () {
    function MoneyParam() {
    }
    MoneyParam.EN = ["money", "redbagfly"]; //多张，单张
    MoneyParam.PT = ["moneypt", "redbagflypt"]; //多张，单张
    MoneyParam.ID = ["moneyID", "redbagflyID"]; //多张，单张
    MoneyParam.PK = ["moneyPK", "redbagflyPK"]; //多张，单张
    MoneyParam.KR = ["moneyKR", "redbagflyKR"]; //多张，单张 
    return MoneyParam;
}());
var gameConfig = /** @class */ (function () {
    function gameConfig() {
    }
    gameConfig.setConfig = function () {
        this.IS_GAME_MUSICBG = localDataManager_1.default.shareManager().musicBgSwitch();
        this.IS_GAME_MUSICEFFECT = localDataManager_1.default.shareManager().musicEfficSwitch();
        this.dmSwitch = localDataManager_1.default.shareManager().dmSwitch();
        this.isShowGuide = localDataManager_1.default.shareManager().guideShow();
        this.targetLevel = localDataManager_1.default.shareManager().getTargetLevel();
        this.isNewer = localDataManager_1.default.shareManager().getIsNewer();
        var jsb = JsbSdkScript_1.default.Instance;
        window["JstSDK"] = jsb;
        if (gameConfig.isShowGuide == false) {
            localDataManager_1.default.shareManager().setScoreCount(150);
        }
        var commonParm = JsbSdkScript_1.default.getCommonParm();
        if (typeof commonParm === "string") {
            commonParm = JSON.parse(commonParm);
            console.log("看看android 给的配置", commonParm);
        }
        this.commonParm = commonParm;
        this.isWhiteBag = JsbSdkScript_1.default.requestIsWhiteBao();
        // LocalAssetsManager.loadCommonAssets();
    };
    gameConfig.saveNewer = function () {
        this.isNewer = false;
        localDataManager_1.default.shareManager().setIsNewer();
    };
    gameConfig.setMoneySp = function (money, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (cc.isValid(money)) {
            var moneytype_1;
            var country = this.getCountry;
            if (country == "br") {
                moneytype_1 = ["moneypt", "redbagflypt"][index];
            }
            else if (country == "id") {
                moneytype_1 = ["moneyID", "redbagflyID"][index];
            }
            else if (country == "pk") {
                moneytype_1 = ["moneyPK", "redbagflyPK"][index];
            }
            else if (country == "kr") {
                moneytype_1 = ["moneyKR", "redbagflyKR"][index];
            }
            else {
                moneytype_1 = ["money", "redbagfly"][index];
            }
            if (moneytype_1 == undefined)
                return;
            if (this.moneyCache[moneytype_1]) {
                money.spriteFrame = this.moneyCache[moneytype_1];
            }
            else {
                var respath = "img/SceneImage/" + moneytype_1;
                if (index == 1) {
                    respath = "img/rewardImg/" + moneytype_1;
                }
                cc.resources.load(respath, cc.SpriteFrame, function (err, asset) {
                    if (asset) {
                        _this.moneyCache[moneytype_1] = asset;
                        if (cc.isValid(money))
                            money.spriteFrame = asset;
                    }
                });
            }
        }
    };
    gameConfig.getWord = function (type, parameter1, parameter2) {
        var Language = {
            English: {
                guide: {
                    string: "<color=#FFFFFF>Tap to Start</color>",
                    fontSize: 40,
                },
                download: "Download",
                cashOut: {
                    string: "Cash Out",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Cash Out",
                    fontSize: 32,
                },
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            KO: {
                guide: {
                    string: "<color=#FFFFFF>\uC2DC\uC791\uD558\uB824\uBA74 \uD0ED\uD558\uC138\uC694</color>",
                    fontSize: 40,
                },
                cashOut: {
                    string: "현금 인출",
                    fontSize: 80,
                },
                download: "다운로드",
                cashOutTop: {
                    string: "현금 인출",
                    fontSize: 32,
                },
                //tipLbl: "최종 결과는 보장되지 않으며, 받을 수 있는 금액은 앱 또는 웹사이트에 게시된 규칙에 따릅니다.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            IN: {
                guide: {
                    string: "<color=#FFFFFF>tap untuk dimulai</color>",
                    fontSize: 40,
                },
                download: "Unduh",
                cashOut: {
                    string: "Tarik Tunai",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Tarik Tunai",
                    fontSize: 30,
                },
                // tipLbl: "Hasil akhir tidak dijamin, jumlah yang dapat Anda peroleh tergantung pada aturan yang diterbitkan di APLIKASI atau situs web.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            PT: {
                guide: {
                    string: "<color=#FFFFFF>toque para iniciar</color>",
                    fontSize: 40,
                },
                download: "Transferir",
                cashOut: {
                    string: "Sacar",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Sacar",
                    fontSize: 32,
                },
                // tipLbl: "O resultado final não é garantido, o valor que você pode obter está sujeito às regras publicadas no APP ou site.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            FIL: {
                guide: {
                    string: "<color=#FFFFFF>Tap para simulan</color>",
                    fontSize: 40,
                },
                download: "I-download",
                cashOut: {
                    string: "Cash Out",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Cash Out",
                    fontSize: 32,
                },
                // tipLbl: "Hindi garantisado ang pinal na resulta, at ang halagang makukuha mo ay nakaayon sa mga patakarang inilathala sa APP o website.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            VN: {
                guide: {
                    string: "<color=#FFFFFF>Nh\u1EA5n \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u</color>",
                    fontSize: 40,
                },
                download: "Tải xuống",
                cashOut: {
                    string: "Rút tiền",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "Rút tiền",
                    fontSize: 32,
                },
                // tipLbl: "Kết quả cuối cùng không được đảm bảo, số tiền bạn có thể nhận được phụ thuộc vào các quy tắc được công bố trên ỨNG DỤNG hoặc trang web.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            HI: {
                guide: {
                    string: "<color=#FFFFFF>\u0936\u0941\u0930\u0942 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902</color>",
                    fontSize: 40,
                },
                download: "डाउनलोड करें",
                cashOut: {
                    string: "कैश आउट",
                    fontSize: 80,
                },
                cashOutTop: {
                    string: "कैश आउट",
                    fontSize: 32,
                },
                // tipLbl: "अंतिम परिणाम की गारंटी नहीं है, आप जितनी राशि प्राप्त कर सकते हैं, वह APP या वेबसाइट पर प्रकाशित नियमों पर निर्भर करती है।",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            },
            RU: {
                guide: {
                    string: "<color=#FFFFFF>\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C</color>",
                    fontSize: 40,
                },
                download: "Скачать",
                cashOut: {
                    string: "Вывод средств",
                    fontSize: 60,
                },
                cashOutTop: {
                    string: "Вывод средств",
                    fontSize: 21,
                },
                // tipLbl: "Окончательный результат не гарантируется. Сумма, которую вы можете получить, зависит от правил, опубликованных в приложении или на сайте.",
                tipLbl: "The final result is not guaranted, the amount you can obtain is subject to the rules published in the APP or web page.",
            }
        };
        var language = this.localLanguage;
        console.log("getWord: type", type, language);
        try {
            return Language[language][type];
        }
        catch (_a) {
            console.warn("报错了", language, type);
            return {};
        }
    };
    gameConfig.getUnityMoneyNumber = function (reward, isExchangeRate) {
        if (isExchangeRate === void 0) { isExchangeRate = 0; }
        if (!this.isNumber(reward)) {
            return 0;
        }
        else {
            var money = this.toFix(reward);
            if (isExchangeRate == 0) {
                money = this.toFix((Number(reward) * this.getUnifyExchangeRate()));
            }
            return Number(money);
        }
    };
    gameConfig.getUnifyExchangeRate = function () {
        var country = this.getCountry;
        var exchangeRate = 1;
        if (country == Country.ID) {
            exchangeRate = 15168;
        }
        else if (country == Country.BR) {
            exchangeRate = 5.14;
        }
        else if (country == Country.PK) {
            exchangeRate = 275;
        }
        else if (country == Country.KR) {
            exchangeRate = 1290;
        }
        else if (country == Country.RU) {
            exchangeRate = 100;
        }
        else if (country == Country.PH) {
            exchangeRate = 56;
        }
        else if (country == Country.VN) {
            exchangeRate = 24000;
        }
        else if (country == Country.IN) {
            exchangeRate = 82;
        }
        else if (country == Country.EN) {
            exchangeRate = 1;
        }
        return exchangeRate;
    };
    gameConfig.getUnifyGuidePay = function (index) {
        var country = this.getCountry;
        var moneytype;
        if (country == Country.BR) {
            moneytype = ["ic_pagBank", "br_pix"][index];
        }
        else if (country == Country.ID) {
            moneytype = ["ic_dana", "id_ovo"][index];
        }
        else if (country == Country.PK) {
            moneytype = ["ic_paisa", "ic_jazz"][index];
        }
        else if (country == Country.KR) {
            moneytype = ["ic_kakaopay", "ic_jazz"][index];
        }
        else if (country == Country.RU) {
            moneytype = ["ic_webmoney", "ic_tinkoff"][index];
        }
        else if (country == Country.PH) {
            moneytype = ["ic_gcash", "ic_paymaya"][index];
        }
        else if (country == Country.VN) {
            moneytype = ["ic_momo", "ic_zalopay"][index];
        }
        else if (country == Country.IN) {
            moneytype = ["ic_paytm", "ic_phonepe"][index];
        }
        else {
            moneytype = ["ic_paypal", "ic_amazon"][index];
        }
        return moneytype;
    };
    gameConfig.getRedbag = function (index) {
        var country = this.getCountry;
        var moneytype;
        if (country == Country.ID) {
            moneytype = MoneyParam.ID[index];
        }
        else if (country == Country.PK) {
            moneytype = MoneyParam.PK[index];
        }
        else if (country == Country.BR) {
            moneytype = MoneyParam.PT[index];
        }
        else if (country == Country.KR) {
            moneytype = MoneyParam.KR[index];
        }
        else {
            moneytype = MoneyParam.EN[index];
        }
        return moneytype;
    };
    gameConfig.isNumber = function (value) {
        return !Number.isNaN(Number(value));
    };
    gameConfig.getUnifyMoney = function (reward, isExchangeRate) {
        if (!this.isNumber(reward)) {
            return 0;
        }
        else {
            var money = this.toFix(reward);
            if (isExchangeRate == 0) {
                money = this.toFix((Number(reward) * this.getUnifyExchangeRate()));
            }
            var country = this.getCountry;
            if (money > 1000) {
                if (country == Country.ID) {
                    money = this.toFix(money / 1000) + "k";
                }
            }
            return money;
        }
    };
    gameConfig.toFix = function (reward) {
        return Number(reward).toFixed(2);
    };
    gameConfig.getUnifyCurrency = function () {
        var country = this.getCountry;
        var currency = "$";
        if (country == Country.ID) {
            currency = "Rp";
        }
        else if (country == Country.BR) {
            currency = "R$";
        }
        else if (country == Country.PK) {
            currency = "P.Rs";
        }
        else if (country == Country.KR) {
            currency = "₩";
        }
        else if (country == Country.RU) {
            currency = "₽";
        }
        else if (country == Country.PH) {
            currency = "₱";
        }
        else if (country == Country.VN) {
            currency = "₫";
        }
        else if (country == Country.IN) {
            currency = "₹";
        }
        return currency;
    };
    Object.defineProperty(gameConfig, "getCountry", {
        get: function () {
            return Country.IN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(gameConfig, "getPlayableAdType", {
        get: function () {
            return PlayableAdType.Mtg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(gameConfig, "localLanguage", {
        get: function () {
            var country = this.getCountry;
            var language = LanguageType.English;
            if (country == Country.ID) {
                language = LanguageType.IN;
            }
            else if (country == Country.BR) {
                language = LanguageType.PT;
            }
            else if (country == Country.PK) {
                language = LanguageType.PT;
            }
            else if (country == Country.KR) {
                language = LanguageType.KO;
            }
            else if (country == Country.RU) {
                language = LanguageType.RU;
            }
            else if (country == Country.PH) {
                language = LanguageType.FIL;
            }
            else if (country == Country.VN) {
                language = LanguageType.VN;
            }
            else if (country == Country.IN) {
                language = LanguageType.HI;
            }
            return language;
        },
        enumerable: false,
        configurable: true
    });
    gameConfig.changeMusicbg = function () {
        this.IS_GAME_MUSICBG = !this.IS_GAME_MUSICBG;
        localDataManager_1.default.shareManager().setMusicBg(this.IS_GAME_MUSICBG);
    };
    gameConfig.changeEffect = function () {
        this.IS_GAME_MUSICEFFECT = !this.IS_GAME_MUSICEFFECT;
        localDataManager_1.default.shareManager().setMusicEffect(this.IS_GAME_MUSICEFFECT);
    };
    gameConfig.changeDmSwitch = function () {
        this.dmSwitch = !this.dmSwitch;
        localDataManager_1.default.shareManager().setDMSwicth(this.dmSwitch);
    };
    gameConfig.setGuideShow = function () {
        localDataManager_1.default.shareManager().setGuideShow();
    };
    gameConfig.setTargetLevel = function (level) {
        this.targetLevel = level;
        localDataManager_1.default.shareManager().setTargetLevel(level);
    };
    gameConfig.IS_GAME_MUSICBG = true; //是否开启背景音乐
    gameConfig.IS_GAME_MUSICEFFECT = true; //是否开启音效果  
    gameConfig.dmSwitch = true;
    gameConfig.isWhiteBag = true;
    gameConfig.isShowGuide = false;
    gameConfig.isNewer = true;
    gameConfig.isAnti = false;
    gameConfig.targetLevel = 0;
    gameConfig.commonParm = null;
    gameConfig.moneyCache = {};
    return gameConfig;
}());
exports.default = gameConfig;
exports.JuiceItem = cc.Class({
    name: 'JuiceItem',
    properties: {
        particle: cc.SpriteFrame,
        circle: cc.SpriteFrame,
        slash: cc.SpriteFrame,
    }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsbUVBQThEO0FBRTlELElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN2Qix1Q0FBcUIsQ0FBQTtJQUNyQiw2QkFBVyxDQUFBO0FBQ2QsQ0FBQyxFQUhXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBR3pCO0FBRUQsSUFBWSxZQWdCWDtBQWhCRCxXQUFZLFlBQVk7SUFDckIsbUNBQW9CLENBQUE7SUFDcEIsU0FBUztJQUNULHlCQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1QseUJBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCx5QkFBUyxDQUFBO0lBQ1QsV0FBVztJQUNYLDJCQUFXLENBQUE7SUFDWCxVQUFVO0lBQ1YseUJBQVMsQ0FBQTtJQUNULFVBQVU7SUFDVix5QkFBUyxDQUFBO0lBQ1QsU0FBUztJQUNULHlCQUFTLENBQUE7QUFDWixDQUFDLEVBaEJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBZ0J2QjtBQUVELElBQVksT0FtQlg7QUFuQkQsV0FBWSxPQUFPO0lBQ2hCLFFBQVE7SUFDUixvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxVQUFVO0lBQ1Ysb0JBQVMsQ0FBQTtJQUNULE9BQU87SUFDUCxvQkFBUyxDQUFBO0lBQ1QsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxTQUFTO0lBQ1Qsb0JBQVMsQ0FBQTtJQUNULFNBQVM7SUFDVCxvQkFBUSxDQUFBO0lBQ1IsUUFBUTtJQUNSLG9CQUFTLENBQUE7SUFDVCxRQUFRO0lBQ1Isb0JBQVMsQ0FBQTtBQUNaLENBQUMsRUFuQlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBbUJsQjtBQUVEO0lBQUE7SUFNQSxDQUFDO0lBTFMsYUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFBLENB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S0FBWTtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QiwwQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXBhTSwwQkFBZSxHQUFHLElBQUksQ0FBQyxDQUFFLFVBQVU7SUFDbkMsOEJBQW1CLEdBQUcsSUFBSSxDQUFDLENBQUMsV0FBVztJQUN2QyxtQkFBUSxHQUFHLElBQUksQ0FBQztJQUNoQixxQkFBVSxHQUFHLElBQUksQ0FBQztJQUVsQixzQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVwQixrQkFBTyxHQUFXLElBQUksQ0FBQztJQUV2QixpQkFBTSxHQUFXLEtBQUssQ0FBQztJQUV2QixzQkFBVyxHQUFHLENBQUMsQ0FBQztJQUVoQixxQkFBVSxHQUFHLElBQUksQ0FBQztJQWlDVixxQkFBVSxHQUFHLEVBQUUsQ0FBQztJQXVYbEMsaUJBQUM7Q0F2YUQsQUF1YUMsSUFBQTtrQkF2YW9CLFVBQVU7QUF5YWxCLFFBQUEsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDL0IsSUFBSSxFQUFFLFdBQVc7SUFDakIsVUFBVSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUUsQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVztRQUN0QixLQUFLLEVBQUUsRUFBRSxDQUFDLFdBQVc7S0FDeEI7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYWxBc3NldHNNYW5hZ2VyIGZyb20gXCIuL0xvY2FsQXNzZXRzTWFuYWdlclwiO1xuaW1wb3J0IGxvY2FsRGF0YU1hbmFnZXIgZnJvbSBcIi4vbG9jYWxEYXRhTWFuYWdlclwiO1xuaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi9QbGF0Zm9ybUludGVyYWN0aW9uL0pzYlNka1NjcmlwdFwiO1xuXG5leHBvcnQgZW51bSBQbGF5YWJsZUFkVHlwZSB7XG4gICBBcHBMb3ZpbiA9IFwiQXBwTG92aW5cIixcbiAgIE10ZyA9IFwiTXRnXCIsXG59XG5cbmV4cG9ydCBlbnVtIExhbmd1YWdlVHlwZSB7XG4gICBFbmdsaXNoICA9IFwiRW5nbGlzaFwiLFxuICAgLyoq5Y2w5bC86K+tICovXG4gICBJTiA9IFwiSU5cIixcbiAgIC8qKuiRoeiQhOeJmSAqL1xuICAgUFQgPSBcIlBUXCIsXG4gICAvKiog6Z+p6K+tICovXG4gICBLTyA9IFwiS09cIixcbiAgIC8qKiDoj7Llvovlrr7or60gKi9cbiAgIEZJTCA9IFwiRklMXCIsXG4gICAvKiog6LaK5Y2X6K+tICovXG4gICBWTiA9IFwiVk5cIixcbiAgIC8qKiDljbDlnLDor60gKi9cbiAgIEhJID0gXCJISVwiLFxuICAgLyoqIOS/hOivrSAqL1xuICAgUlUgPSBcIlJVXCIsXG59XG5cbmV4cG9ydCBlbnVtIENvdW50cnl7XG4gICAvKirljbDlsLwgKi9cbiAgIElEID0gXCJpZFwiLFxuICAgLyoq5be06KW/ICovXG4gICBCUiA9IFwiYnJcIixcbiAgIC8qKuW3tOWfuuaWr+WdpiAqL1xuICAgUEsgPSBcInBrXCIsXG4gICAvKiroi7Hor60qL1xuICAgRU4gPSBcImVuXCIsXG4gICAvKirpn6nlm70gKi9cbiAgIEtSID0gXCJrclwiLFxuICAgLyoq5L+E572X5pavICovXG4gICBSVSA9IFwicnVcIixcbiAgIC8qKuiPsuW+i+WuviAqL1xuICAgUEg9IFwicGhcIixcbiAgIC8qKui2iuWNlyAqL1xuICAgVk4gPSBcInZuXCIsICAgXG4gICAvKirljbDluqYgKi9cbiAgIElOID0gXCJpblwiLFxufVxuXG5jbGFzcyBNb25leVBhcmFtIHtcbiAgIHN0YXRpYyBFTiA9IFtcIm1vbmV5XCIsIFwicmVkYmFnZmx5XCJdIC8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgUFQgPSBbXCJtb25leXB0XCIsIFwicmVkYmFnZmx5cHRcIl0vL+WkmuW8oO+8jOWNleW8oFxuICAgc3RhdGljIElEID0gW1wibW9uZXlJRFwiLCBcInJlZGJhZ2ZseUlEXCJdLy/lpJrlvKDvvIzljZXlvKBcbiAgIHN0YXRpYyBQSyA9IFtcIm1vbmV5UEtcIiwgXCJyZWRiYWdmbHlQS1wiXS8v5aSa5byg77yM5Y2V5bygXG4gICBzdGF0aWMgS1IgPSBbXCJtb25leUtSXCIsIFwicmVkYmFnZmx5S1JcIl0vL+WkmuW8oO+8jOWNleW8oCBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZUNvbmZpZyB7XG5cbiAgIHN0YXRpYyBJU19HQU1FX01VU0lDQkcgPSB0cnVlOyAgLy/mmK/lkKblvIDlkK/og4zmma/pn7PkuZBcbiAgIHN0YXRpYyBJU19HQU1FX01VU0lDRUZGRUNUID0gdHJ1ZTsgLy/mmK/lkKblvIDlkK/pn7PmlYjmnpwgIFxuICAgc3RhdGljIGRtU3dpdGNoID0gdHJ1ZTtcbiAgIHN0YXRpYyBpc1doaXRlQmFnID0gdHJ1ZTtcblxuICAgc3RhdGljIGlzU2hvd0d1aWRlID0gZmFsc2U7XG5cbiAgIHN0YXRpYyBpc05ld2VyOmJvb2xlYW4gPSB0cnVlO1xuXG4gICBzdGF0aWMgaXNBbnRpOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgc3RhdGljIHRhcmdldExldmVsID0gMDtcblxuICAgc3RhdGljIGNvbW1vblBhcm0gPSBudWxsO1xuXG5cbiAgIHN0YXRpYyBzZXRDb25maWcoKSB7IFxuICAgICAgdGhpcy5JU19HQU1FX01VU0lDQkcgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLm11c2ljQmdTd2l0Y2goKTtcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkubXVzaWNFZmZpY1N3aXRjaCgpO1xuICAgICAgdGhpcy5kbVN3aXRjaCA9IGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuZG1Td2l0Y2goKTtcbiAgICAgIHRoaXMuaXNTaG93R3VpZGUgPSBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLmd1aWRlU2hvdygpOyBcbiAgICAgIHRoaXMudGFyZ2V0TGV2ZWwgPSAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5nZXRUYXJnZXRMZXZlbCgpOyBcblxuICAgICAgdGhpcy5pc05ld2VyID0gbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5nZXRJc05ld2VyKCk7XG5cbiAgICAgIGxldCBqc2IgPSAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlO1xuICAgICAgd2luZG93W1wiSnN0U0RLXCJdID0ganNiOyAgXG4gICAgICBcbiAgICAgIGlmIChnYW1lQ29uZmlnLmlzU2hvd0d1aWRlID09IGZhbHNlKSB7XG4gICAgICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldFNjb3JlQ291bnQoMTUwKTtcbiAgICAgIH1cbiAgICAgIGxldCBjb21tb25QYXJtID0gSnNiU2RrU2NyaXB0LmdldENvbW1vblBhcm0oKTtcbiAgICAgIGlmICh0eXBlb2YgY29tbW9uUGFybSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgY29tbW9uUGFybSA9IEpTT04ucGFyc2UoY29tbW9uUGFybSlcbiAgICAgICAgIGNvbnNvbGUubG9nKFwi55yL55yLYW5kcm9pZCDnu5nnmoTphY3nva5cIixjb21tb25QYXJtKVxuICAgICAgfVxuICAgICAgdGhpcy5jb21tb25QYXJtID0gY29tbW9uUGFybTtcbiAgICAgIHRoaXMuaXNXaGl0ZUJhZyA9IEpzYlNka1NjcmlwdC5yZXF1ZXN0SXNXaGl0ZUJhbygpXG4gICAgICAvLyBMb2NhbEFzc2V0c01hbmFnZXIubG9hZENvbW1vbkFzc2V0cygpO1xuICAgfVxuXG4gICBzdGF0aWMgc2F2ZU5ld2VyKCl7XG4gICAgICB0aGlzLmlzTmV3ZXIgPSBmYWxzZTtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0SXNOZXdlcigpO1xuICAgfVxuXG4gICBwcml2YXRlIHN0YXRpYyBtb25leUNhY2hlID0ge307XG4gICBzdGF0aWMgc2V0TW9uZXlTcChtb25leTpjYy5TcHJpdGUsaW5kZXg6IG51bWJlciA9IDApe1xuICAgICAgaWYgKGNjLmlzVmFsaWQobW9uZXkpKXtcbiAgICAgICAgIGxldCBtb25leXR5cGU7XG4gICAgICAgICBsZXQgY291bnRyeSA9IHRoaXMuZ2V0Q291bnRyeVxuICAgICAgICAgaWYoY291bnRyeSA9PSBcImJyXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlwdFwiLFwicmVkYmFnZmx5cHRcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcImlkXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlJRFwiLFwicmVkYmFnZmx5SURcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcInBrXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlQS1wiLFwicmVkYmFnZmx5UEtcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBcImtyXCIpe1xuICAgICAgICAgICAgbW9uZXl0eXBlID0gW1wibW9uZXlLUlwiLFwicmVkYmFnZmx5S1JcIl1baW5kZXhdO1xuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBbXCJtb25leVwiLFwicmVkYmFnZmx5XCJdW2luZGV4XTtcbiAgICAgICAgIH1cbiAgICAgICAgIGlmIChtb25leXR5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgIGlmICh0aGlzLm1vbmV5Q2FjaGVbbW9uZXl0eXBlXSl7XG4gICAgICAgICAgICBtb25leS5zcHJpdGVGcmFtZSA9IHRoaXMubW9uZXlDYWNoZVttb25leXR5cGVdO1xuICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgcmVzcGF0aCA9IFwiaW1nL1NjZW5lSW1hZ2UvXCIgKyBtb25leXR5cGVcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAxKXtcbiAgICAgICAgICAgICAgIHJlc3BhdGggPSBcImltZy9yZXdhcmRJbWcvXCIgKyBtb25leXR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHJlc3BhdGgsY2MuU3ByaXRlRnJhbWUsKGVycixhc3NldCk9PntcbiAgICAgICAgICAgICAgIGlmIChhc3NldCl7XG4gICAgICAgICAgICAgICAgICB0aGlzLm1vbmV5Q2FjaGVbbW9uZXl0eXBlXSA9IGFzc2V0XG4gICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChtb25leSkpIG1vbmV5LnNwcml0ZUZyYW1lID0gYXNzZXQ7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0V29yZCh0eXBlLCBwYXJhbWV0ZXIxPywgcGFyYW1ldGVyMj8pIHtcbiAgICAgIGxldCBMYW5ndWFnZSA9IHtcbiAgICAgICAgIEVuZ2xpc2g6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+VGFwIHRvIFN0YXJ0PC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiRG93bmxvYWRcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIkNhc2ggT3V0XCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiQ2FzaCBPdXRcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIEtPOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPuyLnOyeke2VmOugpOuptCDtg63tlZjshLjsmpQ8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi7ZiE6riIIOyduOy2nFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwi64uk7Jq066Gc65OcXCIsXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLtmITquIgg7J247LacXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy90aXBMYmw6IFwi7LWc7KKFIOqysOqzvOuKlCDrs7TsnqXrkJjsp4Ag7JWK7Jy866mwLCDrsJvsnYQg7IiYIOyeiOuKlCDquIjslaHsnYAg7JWxIOuYkOuKlCDsm7nsgqzsnbTtirjsl5Ag6rKM7Iuc65CcIOq3nOy5meyXkCDrlLDrpoXri4jri6QuXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIElOOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPnRhcCB1bnR1ayBkaW11bGFpPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVW5kdWhcIixcbiAgICAgICAgICAgIGNhc2hPdXQ6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIlRhcmlrIFR1bmFpXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiVGFyaWsgVHVuYWlcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB0aXBMYmw6IFwiSGFzaWwgYWtoaXIgdGlkYWsgZGlqYW1pbiwganVtbGFoIHlhbmcgZGFwYXQgQW5kYSBwZXJvbGVoIHRlcmdhbnR1bmcgcGFkYSBhdHVyYW4geWFuZyBkaXRlcmJpdGthbiBkaSBBUExJS0FTSSBhdGF1IHNpdHVzIHdlYi5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgUFQ6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+dG9xdWUgcGFyYSBpbmljaWFyPC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVHJhbnNmZXJpclwiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiU2FjYXJcIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJTYWNhclwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCJPIHJlc3VsdGFkbyBmaW5hbCBuw6NvIMOpIGdhcmFudGlkbywgbyB2YWxvciBxdWUgdm9jw6ogcG9kZSBvYnRlciBlc3TDoSBzdWplaXRvIMOgcyByZWdyYXMgcHVibGljYWRhcyBubyBBUFAgb3Ugc2l0ZS5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgRklMOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPlRhcCBwYXJhIHNpbXVsYW48L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCJJLWRvd25sb2FkXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJDYXNoIE91dFwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhc2hPdXRUb3A6e1xuICAgICAgICAgICAgICAgc3RyaW5nOiBcIkNhc2ggT3V0XCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGlwTGJsOiBcIkhpbmRpIGdhcmFudGlzYWRvIGFuZyBwaW5hbCBuYSByZXN1bHRhLCBhdCBhbmcgaGFsYWdhbmcgbWFrdWt1aGEgbW8gYXkgbmFrYWF5b24gc2EgbWdhIHBhdGFrYXJhbmcgaW5pbGF0aGFsYSBzYSBBUFAgbyB3ZWJzaXRlLlwiLFxuICAgICAgICAgICAgdGlwTGJsOiBcIlRoZSBmaW5hbCByZXN1bHQgaXMgbm90IGd1YXJhbnRlZCwgdGhlIGFtb3VudCB5b3UgY2FuIG9idGFpbiBpcyBzdWJqZWN0IHRvIHRoZSBydWxlcyBwdWJsaXNoZWQgaW4gdGhlIEFQUCBvciB3ZWIgcGFnZS5cIixcbiAgICAgICAgIH0sXG4gICAgICAgICBWTjoge1xuICAgICAgICAgICAgZ3VpZGU6ICB7XG4gICAgICAgICAgICAgICBzdHJpbmc6IGA8Y29sb3I9I0ZGRkZGRj5OaOG6pW4gxJHhu4MgYuG6r3QgxJHhuqd1PC9jb2xvcj5gLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkOlwiVOG6o2kgeHXhu5FuZ1wiLFxuICAgICAgICAgICAgY2FzaE91dDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwiUsO6dCB0aeG7gW5cIixcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA4MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXNoT3V0VG9wOntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCJSw7p0IHRp4buBblwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCJL4bq/dCBxdeG6oyBjdeG7kWkgY8O5bmcga2jDtG5nIMSRxrDhu6NjIMSR4bqjbSBi4bqjbywgc+G7kSB0aeG7gW4gYuG6oW4gY8OzIHRo4buDIG5o4bqtbiDEkcaw4bujYyBwaOG7pSB0aHXhu5ljIHbDoG8gY8OhYyBxdXkgdOG6r2MgxJHGsOG7o2MgY8O0bmcgYuG7kSB0csOqbiDhu6hORyBE4bukTkcgaG/hurdjIHRyYW5nIHdlYi5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9LFxuICAgICAgICAgSEk6IHtcbiAgICAgICAgICAgIGd1aWRlOiAge1xuICAgICAgICAgICAgICAgc3RyaW5nOiBgPGNvbG9yPSNGRkZGRkY+4KS24KWB4KSw4KWCIOCkleCksOCkqOClhyDgpJXgpYcg4KSy4KS/4KSPIOCkn+CliOCkqiDgpJXgpLDgpYfgpII8L2NvbG9yPmAsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bmxvYWQ6XCLgpKHgpL7gpIngpKjgpLLgpYvgpKEg4KSV4KSw4KWH4KSCXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLgpJXgpYjgpLYg4KSG4KSJ4KSfXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi4KSV4KWI4KS2IOCkhuCkieCkn1wiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCLgpIXgpILgpKTgpL/gpK4g4KSq4KSw4KS/4KSj4KS+4KSuIOCkleClgCDgpJfgpL7gpLDgpILgpJ/gpYAg4KSo4KS54KWA4KSCIOCkueCliCwg4KSG4KSqIOCknOCkv+CkpOCkqOClgCDgpLDgpL7gpLbgpL8g4KSq4KWN4KSw4KS+4KSq4KWN4KSkIOCkleCksCDgpLjgpJXgpKTgpYcg4KS54KWI4KSCLCDgpLXgpLkgQVBQIOCkr+CkviDgpLXgpYfgpKzgpLjgpL7gpIfgpJ8g4KSq4KSwIOCkquCljeCksOCkleCkvuCktuCkv+CkpCDgpKjgpL/gpK/gpK7gpYvgpIIg4KSq4KSwIOCkqOCkv+CksOCljeCkreCksCDgpJXgpLDgpKTgpYAg4KS54KWI4KWkXCIsXG4gICAgICAgICAgICB0aXBMYmw6IFwiVGhlIGZpbmFsIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVkLCB0aGUgYW1vdW50IHlvdSBjYW4gb2J0YWluIGlzIHN1YmplY3QgdG8gdGhlIHJ1bGVzIHB1Ymxpc2hlZCBpbiB0aGUgQVBQIG9yIHdlYiBwYWdlLlwiLFxuICAgICAgICAgfSxcbiAgICAgICAgIFJVOiB7XG4gICAgICAgICAgICBndWlkZTogIHtcbiAgICAgICAgICAgICAgIHN0cmluZzogYDxjb2xvcj0jRkZGRkZGPtCd0LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINC90LDRh9Cw0YLRjDwvY29sb3I+YCxcbiAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3dubG9hZDpcItCh0LrQsNGH0LDRgtGMXCIsXG4gICAgICAgICAgICBjYXNoT3V0OntcbiAgICAgICAgICAgICAgIHN0cmluZzogXCLQktGL0LLQvtC0INGB0YDQtdC00YHRgtCyXCIsXG4gICAgICAgICAgICAgICBmb250U2l6ZTogNjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FzaE91dFRvcDp7XG4gICAgICAgICAgICAgICBzdHJpbmc6IFwi0JLRi9Cy0L7QtCDRgdGA0LXQtNGB0YLQslwiLFxuICAgICAgICAgICAgICAgZm9udFNpemU6IDIxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHRpcExibDogXCLQntC60L7QvdGH0LDRgtC10LvRjNC90YvQuSDRgNC10LfRg9C70YzRgtCw0YIg0L3QtSDQs9Cw0YDQsNC90YLQuNGA0YPQtdGC0YHRjy4g0KHRg9C80LzQsCwg0LrQvtGC0L7RgNGD0Y4g0LLRiyDQvNC+0LbQtdGC0LUg0L/QvtC70YPRh9C40YLRjCwg0LfQsNCy0LjRgdC40YIg0L7RgiDQv9GA0LDQstC40LssINC+0L/Rg9Cx0LvQuNC60L7QstCw0L3QvdGL0YUg0LIg0L/RgNC40LvQvtC20LXQvdC40Lgg0LjQu9C4INC90LAg0YHQsNC50YLQtS5cIixcbiAgICAgICAgICAgIHRpcExibDogXCJUaGUgZmluYWwgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWQsIHRoZSBhbW91bnQgeW91IGNhbiBvYnRhaW4gaXMgc3ViamVjdCB0byB0aGUgcnVsZXMgcHVibGlzaGVkIGluIHRoZSBBUFAgb3Igd2ViIHBhZ2UuXCIsXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH1cbiAgICAgIGxldCBsYW5ndWFnZSA9IHRoaXMubG9jYWxMYW5ndWFnZTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0V29yZDogdHlwZVwiLCB0eXBlICxsYW5ndWFnZSApXG4gICAgICB0cnl7XG4gICAgICAgICByZXR1cm4gTGFuZ3VhZ2VbbGFuZ3VhZ2VdW3R5cGVdO1xuICAgICAgfWNhdGNoe1xuICAgICAgICAgY29uc29sZS53YXJuKFwi5oql6ZSZ5LqGXCIsbGFuZ3VhZ2UsIHR5cGUpXG4gICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXRpYyBnZXRVbml0eU1vbmV5TnVtYmVyKHJld2FyZCwgaXNFeGNoYW5nZVJhdGUgPSAwKSBcbiAgIHtcbiAgICAgIGlmICghdGhpcy5pc051bWJlcihyZXdhcmQpKSB7XG4gICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBsZXQgbW9uZXk6YW55ID0gdGhpcy50b0ZpeChyZXdhcmQpO1xuICAgICAgICAgaWYgKGlzRXhjaGFuZ2VSYXRlID09IDApIHtcbiAgICAgICAgICAgIG1vbmV5ID0gdGhpcy50b0ZpeCgoTnVtYmVyKHJld2FyZCkgKiB0aGlzLmdldFVuaWZ5RXhjaGFuZ2VSYXRlKCkpKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBOdW1iZXIobW9uZXkpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlFeGNoYW5nZVJhdGUoKXtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICBcdGxldCBleGNoYW5nZVJhdGUgPSAxO1xuICAgXHRpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgXHQgICAgIGV4Y2hhbmdlUmF0ZSA9IDE1MTY4O1xuICAgXHR9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuQlIpe1xuICAgXHQgIGV4Y2hhbmdlUmF0ZSA9IDUuMTQ7XG4gICBcdH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICBcdCAgZXhjaGFuZ2VSYXRlID0yNzU7XG4gICBcdH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBleGNoYW5nZVJhdGUgPSAxMjkwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gMTAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUEgpe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gNTY7XG4gICAgICAgICB9ICBcbiAgICAgIGVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlZOKXtcbiAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZSA9IDI0MDAwO1xuICAgICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgICAgZXhjaGFuZ2VSYXRlID0gODI7XG4gICAgICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5FTil7XG4gICAgICAgICAgICBleGNoYW5nZVJhdGUgPSAxOyBcbiAgICAgIH1cbiAgIFx0cmV0dXJuIGV4Y2hhbmdlUmF0ZTtcbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5R3VpZGVQYXkoaW5kZXgpe1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnk7XG4gICAgICBsZXQgbW9uZXl0eXBlO1xuICAgICAgaWYoY291bnRyeSA9PSBDb3VudHJ5LkJSKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BhZ0JhbmtcIixcImJyX3BpeFwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfZGFuYVwiLFwiaWRfb3ZvXCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19wYWlzYVwiLFwiaWNfamF6elwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuS1Ipe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfa2FrYW9wYXlcIixcImljX2phenpcIl1baW5kZXhdO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlJVKXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3dlYm1vbmV5XCIsXCJpY190aW5rb2ZmXCJdW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSCl7XG4gICAgICAgICBtb25leXR5cGUgPSBbXCJpY19nY2FzaFwiLFwiaWNfcGF5bWF5YVwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuVk4pe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfbW9tb1wiLFwiaWNfemFsb3BheVwiXVtpbmRleF07XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgbW9uZXl0eXBlID0gW1wiaWNfcGF5dG1cIixcImljX3Bob25lcGVcIl1baW5kZXhdO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgIG1vbmV5dHlwZSA9IFtcImljX3BheXBhbFwiLFwiaWNfYW1hem9uXCJdW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb25leXR5cGVcbiAgIH1cblxuICAgc3RhdGljIGdldFJlZGJhZyhpbmRleCkge1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnk7XG4gICAgICBsZXQgbW9uZXl0eXBlO1xuICAgICAgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5JRCkge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5JRFtpbmRleF07XG4gICAgICB9IGVsc2UgaWYgKGNvdW50cnkgPT0gQ291bnRyeS5QSykge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5QS1tpbmRleF07XG4gICAgICB9ZWxzZSBpZiAoY291bnRyeSA9PSBDb3VudHJ5LkJSKSB7XG4gICAgICAgICAgICBtb25leXR5cGUgPSBNb25leVBhcmFtLlBUW2luZGV4XTtcbiAgICAgIH1lbHNlIGlmIChjb3VudHJ5ID09IENvdW50cnkuS1IpIHtcbiAgICAgICAgIG1vbmV5dHlwZSA9IE1vbmV5UGFyYW0uS1JbaW5kZXhdO1xuICAgICAgfWVsc2Uge1xuICAgICAgICAgbW9uZXl0eXBlID0gTW9uZXlQYXJhbS5FTltpbmRleF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9uZXl0eXBlXG4gICB9XG5cbiAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSlcbiAgIH1cblxuICAgc3RhdGljIGdldFVuaWZ5TW9uZXkocmV3YXJkLGlzRXhjaGFuZ2VSYXRlKXtcbiAgICAgIGlmICghdGhpcy5pc051bWJlcihyZXdhcmQpKXtcbiAgICAgICAgIHJldHVybiAwIDtcbiAgICAgIH1lbHNle1xuICAgICAgICAgbGV0IG1vbmV5OmFueSA9ICB0aGlzLnRvRml4KHJld2FyZCk7XG4gICAgICAgICBpZihpc0V4Y2hhbmdlUmF0ZSA9PSAwKXtcbiAgICAgICAgICAgIG1vbmV5ID10aGlzLnRvRml4KChOdW1iZXIocmV3YXJkKSp0aGlzLmdldFVuaWZ5RXhjaGFuZ2VSYXRlKCkpKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICAgICAgICBpZihtb25leT4gMTAwMCl7XG4gICAgICAgICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICAgICAgICAgbW9uZXkgPSAgdGhpcy50b0ZpeChtb25leS8xMDAwKStcImtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBtb25leTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdGljIHRvRml4KHJld2FyZCl7XG5cdCAgIHJldHVybiAgTnVtYmVyKHJld2FyZCkudG9GaXhlZCgyKVxuICAgfVxuXG4gICBzdGF0aWMgZ2V0VW5pZnlDdXJyZW5jeSgpe1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzLmdldENvdW50cnlcbiAgICAgIGxldCBjdXJyZW5jeSA9IFwiJFwiXG4gICAgICBpZihjb3VudHJ5ID09IENvdW50cnkuSUQpe1xuICAgICAgICBjdXJyZW5jeSA9IFwiUnBcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5CUil7XG4gICAgICAgIGN1cnJlbmN5ID0gXCJSJFwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBLKXtcbiAgICAgICAgY3VycmVuY3kgPSBcIlAuUnNcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oKpXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuUlUpe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCvVwiO1xuICAgICAgfWVsc2UgaWYoY291bnRyeSA9PSBDb3VudHJ5LlBIKXtcbiAgICAgICAgIGN1cnJlbmN5ID0gXCLigrFcIjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5WTil7XG4gICAgICAgICBjdXJyZW5jeSA9IFwi4oKrXCI7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgY3VycmVuY3kgPSBcIuKCuVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbmN5O1xuICAgfVxuXG5cbiAgIHN0YXRpYyBnZXQgZ2V0Q291bnRyeSgpe1xuICAgICAgcmV0dXJuIENvdW50cnkuSU47XG4gICB9XG5cbiAgIHN0YXRpYyBnZXQgZ2V0UGxheWFibGVBZFR5cGUoKXtcbiAgICAgIHJldHVybiBQbGF5YWJsZUFkVHlwZS5NdGc7XG4gICB9XG5cbiAgIHN0YXRpYyBnZXQgbG9jYWxMYW5ndWFnZSgpIHtcbiAgICAgIGxldCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5XG4gICAgICBsZXQgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuRW5nbGlzaDtcbiAgICAgIGlmKGNvdW50cnkgPT0gQ291bnRyeS5JRCl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5JTjtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5CUil7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5QVDtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSyl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5QVDtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5LUil7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5LTztcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5SVSl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5SVTtcbiAgICAgIH1lbHNlIGlmKGNvdW50cnkgPT0gQ291bnRyeS5QSCl7XG4gICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5GSUw7XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuVk4pe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuVk47XG4gICAgICB9ZWxzZSBpZihjb3VudHJ5ID09IENvdW50cnkuSU4pe1xuICAgICAgICAgbGFuZ3VhZ2UgPSBMYW5ndWFnZVR5cGUuSEk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gICB9XG5cblxuICAgc3RhdGljIGNoYW5nZU11c2ljYmcoKXtcbiAgICAgIHRoaXMuSVNfR0FNRV9NVVNJQ0JHID0gIXRoaXMuSVNfR0FNRV9NVVNJQ0JHO1xuICAgICAgbG9jYWxEYXRhTWFuYWdlci5zaGFyZU1hbmFnZXIoKS5zZXRNdXNpY0JnKHRoaXMuSVNfR0FNRV9NVVNJQ0JHKTtcbiAgIH1cblxuICAgc3RhdGljIGNoYW5nZUVmZmVjdCgpe1xuICAgICAgdGhpcy5JU19HQU1FX01VU0lDRUZGRUNUID0gIXRoaXMuSVNfR0FNRV9NVVNJQ0VGRkVDVDtcbiAgICAgIGxvY2FsRGF0YU1hbmFnZXIuc2hhcmVNYW5hZ2VyKCkuc2V0TXVzaWNFZmZlY3QodGhpcy5JU19HQU1FX01VU0lDRUZGRUNUKTtcbiAgIH1cblxuICAgc3RhdGljIGNoYW5nZURtU3dpdGNoKCl7XG4gICAgICB0aGlzLmRtU3dpdGNoID0gIXRoaXMuZG1Td2l0Y2g7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldERNU3dpY3RoKHRoaXMuZG1Td2l0Y2gpO1xuICAgfVxuXG4gICBzdGF0aWMgc2V0R3VpZGVTaG93KCl7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldEd1aWRlU2hvdygpO1xuICAgfVxuXG4gICBzdGF0aWMgc2V0VGFyZ2V0TGV2ZWwobGV2ZWw6bnVtYmVyKSB7XG4gICAgICB0aGlzLnRhcmdldExldmVsID0gbGV2ZWw7XG4gICAgICBsb2NhbERhdGFNYW5hZ2VyLnNoYXJlTWFuYWdlcigpLnNldFRhcmdldExldmVsKGxldmVsKTtcbiAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEp1aWNlSXRlbSA9IGNjLkNsYXNzKHtcbiAgIG5hbWU6ICdKdWljZUl0ZW0nLFxuICAgcHJvcGVydGllczoge1xuICAgICAgIHBhcnRpY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICBjaXJjbGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgIHNsYXNoOiBjYy5TcHJpdGVGcmFtZSxcbiAgIH1cbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEp1aWNlSXRlbVR5cGV7XG4gICBwYXJ0aWNsZTogY2MuU3ByaXRlRnJhbWVcbiAgIGNpcmNsZTogY2MuU3ByaXRlRnJhbWVcbiAgIHNsYXNoOiBjYy5TcHJpdGVGcmFtZVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/Juice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b84d3Ao+g9HMoEcFPLEq/0V', 'Juice');
// script/qiuScript/Juice.ts

// import { ResMgr } from "../utils/ResMgr";
// const {ccclass, property} = cc._decorator;
// function RandomInteger(e:number, t:number) {
//     return Math.floor(Math.random() * (t - e) + e)
// }
// //负责水果合成时的爆汁动画效果
// @ccclass
// export default class Juice extends cc.Component {
//     static prefabPath = "prefab/Juice";
//     @property(cc.SpriteFrame)
//     particle:cc.SpriteFrame=null;
//     @property(cc.SpriteFrame)
//     circle:cc.SpriteFrame=null;
//     @property(cc.SpriteFrame)
//     slash:cc.SpriteFrame=null;
//     static async showJuice(data:any, worldPos: cc.Vec2|cc.Vec3, width: number,bomb?:boolean) {
//         try {
//             let prefab = await ResMgr.loadResourcesAsset(Juice.prefabPath, cc.Prefab);
//             let node:any = cc.instantiate(prefab);    
//             let parent = cc.find("Canvas");
//             if(!parent) return;
//             parent.addChild(node);
//             node.getComponent(Juice).showAnim(data, worldPos, width, bomb);
//         } catch (error) {
//             cc.warn(error)
//         }
//     }
//     // 合并时的动画效果
//     showAnim(data:any, worldPos: cc.Vec2|cc.Vec3, width: number, bomb?:boolean) {
//         this.particle = data.particle;
//         this.circle = data.circle;
//         this.slash = data.slash;
//         // 果粒
//         for (let i = 0; i < 20; ++i) {
//             const node = new cc.Node('Sprite');
//             const sp = node.addComponent(cc.Sprite);
//             sp.spriteFrame = this.particle;
//             node.parent = this.node;
//             const a = 359 * Math.random(),
//             i = 60 * Math.random() + width / 2,
//             l = cc.v3(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
//             node.scale = .5 * Math.random() + width / 100;
//             const p = .5 * Math.random();
//             let nodePos = node.parent.convertToNodeSpaceAR(worldPos);
//             node.setPosition(nodePos);
//             cc.tween(node)
//             .parallel(
//                 cc.tween(node).by(p,{position:l}),
//                 cc.scaleTo(p + .5, .3),
//                 cc.rotateBy(p + .5, RandomInteger(-360, 360))
//             )
//             .to(0.1,{opacity:0})
//             .call(()=>{
//                 node.active = false;
//             })
//             .start()
//         }
//         if(bomb) return;//爆炸 不执行下面的效果
//         // 水珠
//         for (let f = 0; f < 20; f++) {
//             const node = new cc.Node('Sprite');
//             const sp = node.addComponent(cc.Sprite);
//             sp.spriteFrame = this.circle;
//             node.parent = this.node;
//             let a = 359 * Math.random(), 
//             i = 60 * Math.random() + width / 2,
//             l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
//             node.scale = .5 * Math.random() + width / 100;
//             let p = .5 * Math.random();
//             let nodePos = node.parent.convertToNodeSpaceAR(worldPos);
//             node.setPosition(nodePos);
//             cc.tween(node)
//             .parallel(
//                 cc.moveBy(p, l), 
//                 cc.scaleTo(p + .5, .3)
//             )
//             .then(cc.fadeOut(.1))
//             .call(()=>{node.active = false})
//             .start()
//         }
//         // 果汁
//         const node = new cc.Node('Sprite');
//         const sp = node.addComponent(cc.Sprite);
//         sp.spriteFrame = this.slash;
//         node.parent = this.node;
//         let nodePos = node.parent.convertToNodeSpaceAR(worldPos);
//         node.setPosition(nodePos);
//         node.scale = 0;
//         node.angle = RandomInteger(0, 360);
//         cc.tween(node)
//         .parallel(
//             cc.scaleTo(.2, width / 150), 
//             cc.fadeOut(1)
//         )
//         .call(()=>{node.active = false})
//         .start();
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L0p1aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0QztBQUU1Qyw2Q0FBNkM7QUFDN0MsK0NBQStDO0FBQy9DLHFEQUFxRDtBQUNyRCxJQUFJO0FBR0osbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxvREFBb0Q7QUFFcEQsMENBQTBDO0FBRTFDLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFFcEMsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUVsQyxnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBRWpDLGlHQUFpRztBQUNqRyxnQkFBZ0I7QUFDaEIseUZBQXlGO0FBQ3pGLHlEQUF5RDtBQUN6RCw4Q0FBOEM7QUFDOUMsa0NBQWtDO0FBQ2xDLHFDQUFxQztBQUNyQyw4RUFBOEU7QUFDOUUsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3QixZQUFZO0FBQ1osUUFBUTtBQUVSLGtCQUFrQjtBQUNsQixvRkFBb0Y7QUFDcEYseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsZ0JBQWdCO0FBQ2hCLHlDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQsdURBQXVEO0FBRXZELDhDQUE4QztBQUM5Qyx1Q0FBdUM7QUFFdkMsNkNBQTZDO0FBQzdDLGtEQUFrRDtBQUNsRCwyRkFBMkY7QUFFM0YsNkRBQTZEO0FBQzdELDRDQUE0QztBQUU1Qyx3RUFBd0U7QUFDeEUseUNBQXlDO0FBRXpDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIscURBQXFEO0FBQ3JELDBDQUEwQztBQUMxQyxnRUFBZ0U7QUFDaEUsZ0JBQWdCO0FBQ2hCLG1DQUFtQztBQUNuQywwQkFBMEI7QUFDMUIsdUNBQXVDO0FBQ3ZDLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsWUFBWTtBQUNaLHdDQUF3QztBQUN4QyxnQkFBZ0I7QUFDaEIseUNBQXlDO0FBQ3pDLGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFFdkQsNENBQTRDO0FBQzVDLHVDQUF1QztBQUV2Qyw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBQ2xELDJGQUEyRjtBQUUzRiw2REFBNkQ7QUFDN0QsMENBQTBDO0FBRTFDLHdFQUF3RTtBQUN4RSx5Q0FBeUM7QUFFekMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixvQ0FBb0M7QUFDcEMseUNBQXlDO0FBQ3pDLGdCQUFnQjtBQUNoQixvQ0FBb0M7QUFDcEMsK0NBQStDO0FBQy9DLHVCQUF1QjtBQUN2QixZQUFZO0FBRVosZ0JBQWdCO0FBQ2hCLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFFbkQsdUNBQXVDO0FBQ3ZDLG1DQUFtQztBQUVuQyxvRUFBb0U7QUFDcEUscUNBQXFDO0FBQ3JDLDBCQUEwQjtBQUMxQiw4Q0FBOEM7QUFFOUMseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQiw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLFlBQVk7QUFDWiwyQ0FBMkM7QUFDM0Msb0JBQW9CO0FBQ3BCLFFBQVE7QUFFUixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgUmVzTWdyIH0gZnJvbSBcIi4uL3V0aWxzL1Jlc01nclwiO1xuXG4vLyBjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbi8vIGZ1bmN0aW9uIFJhbmRvbUludGVnZXIoZTpudW1iZXIsIHQ6bnVtYmVyKSB7XG4vLyAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0IC0gZSkgKyBlKVxuLy8gfVxuXG5cbi8vIC8v6LSf6LSj5rC05p6c5ZCI5oiQ5pe255qE54iG5rGB5Yqo55S75pWI5p6cXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVpY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgc3RhdGljIHByZWZhYlBhdGggPSBcInByZWZhYi9KdWljZVwiO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuLy8gICAgIHBhcnRpY2xlOmNjLlNwcml0ZUZyYW1lPW51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4vLyAgICAgY2lyY2xlOmNjLlNwcml0ZUZyYW1lPW51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4vLyAgICAgc2xhc2g6Y2MuU3ByaXRlRnJhbWU9bnVsbDtcblxuLy8gICAgIHN0YXRpYyBhc3luYyBzaG93SnVpY2UoZGF0YTphbnksIHdvcmxkUG9zOiBjYy5WZWMyfGNjLlZlYzMsIHdpZHRoOiBudW1iZXIsYm9tYj86Ym9vbGVhbikge1xuLy8gICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgbGV0IHByZWZhYiA9IGF3YWl0IFJlc01nci5sb2FkUmVzb3VyY2VzQXNzZXQoSnVpY2UucHJlZmFiUGF0aCwgY2MuUHJlZmFiKTtcbi8vICAgICAgICAgICAgIGxldCBub2RlOmFueSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7ICAgIFxuLy8gICAgICAgICAgICAgbGV0IHBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4vLyAgICAgICAgICAgICBpZighcGFyZW50KSByZXR1cm47XG4vLyAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4vLyAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChKdWljZSkuc2hvd0FuaW0oZGF0YSwgd29ybGRQb3MsIHdpZHRoLCBib21iKTtcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNjLndhcm4oZXJyb3IpXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyDlkIjlubbml7bnmoTliqjnlLvmlYjmnpxcbi8vICAgICBzaG93QW5pbShkYXRhOmFueSwgd29ybGRQb3M6IGNjLlZlYzJ8Y2MuVmVjMywgd2lkdGg6IG51bWJlciwgYm9tYj86Ym9vbGVhbikge1xuLy8gICAgICAgICB0aGlzLnBhcnRpY2xlID0gZGF0YS5wYXJ0aWNsZTtcbi8vICAgICAgICAgdGhpcy5jaXJjbGUgPSBkYXRhLmNpcmNsZTtcbi8vICAgICAgICAgdGhpcy5zbGFzaCA9IGRhdGEuc2xhc2g7XG4vLyAgICAgICAgIC8vIOaenOeyklxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyArK2kpIHtcbi8vICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4vLyAgICAgICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbi8vICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5wYXJ0aWNsZTtcbi8vICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4vLyAgICAgICAgICAgICBjb25zdCBhID0gMzU5ICogTWF0aC5yYW5kb20oKSxcbi8vICAgICAgICAgICAgIGkgPSA2MCAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDIsXG4vLyAgICAgICAgICAgICBsID0gY2MudjMoTWF0aC5zaW4oYSAqIE1hdGguUEkgLyAxODApICogaSwgTWF0aC5jb3MoYSAqIE1hdGguUEkgLyAxODApICogaSk7XG5cbi8vICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAuNSAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDEwMDtcbi8vICAgICAgICAgICAgIGNvbnN0IHAgPSAuNSAqIE1hdGgucmFuZG9tKCk7XG5cbi8vICAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuLy8gICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihub2RlUG9zKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcbi8vICAgICAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKS5ieShwLHtwb3NpdGlvbjpsfSksXG4vLyAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhwICsgLjUsIC4zKSxcbi8vICAgICAgICAgICAgICAgICBjYy5yb3RhdGVCeShwICsgLjUsIFJhbmRvbUludGVnZXIoLTM2MCwgMzYwKSlcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgIC50bygwLjEse29wYWNpdHk6MH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKT0+e1xuLy8gICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLnN0YXJ0KClcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZihib21iKSByZXR1cm47Ly/niIbngrgg5LiN5omn6KGM5LiL6Z2i55qE5pWI5p6cXG4vLyAgICAgICAgIC8vIOawtOePoFxuLy8gICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IDIwOyBmKyspIHtcbi8vICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4vLyAgICAgICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbi8vICAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5jaXJjbGU7XG4vLyAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuLy8gICAgICAgICAgICAgbGV0IGEgPSAzNTkgKiBNYXRoLnJhbmRvbSgpLCBcbi8vICAgICAgICAgICAgIGkgPSA2MCAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDIsXG4vLyAgICAgICAgICAgICBsID0gY2MudjIoTWF0aC5zaW4oYSAqIE1hdGguUEkgLyAxODApICogaSwgTWF0aC5jb3MoYSAqIE1hdGguUEkgLyAxODApICogaSk7XG5cbi8vICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAuNSAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDEwMDtcbi8vICAgICAgICAgICAgIGxldCBwID0gLjUgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbi8vICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZVBvcyk7XG5cbi8vICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4vLyAgICAgICAgICAgICAucGFyYWxsZWwoXG4vLyAgICAgICAgICAgICAgICAgY2MubW92ZUJ5KHAsIGwpLCBcbi8vICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKHAgKyAuNSwgLjMpXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICAudGhlbihjYy5mYWRlT3V0KC4xKSlcbi8vICAgICAgICAgICAgIC5jYWxsKCgpPT57bm9kZS5hY3RpdmUgPSBmYWxzZX0pXG4vLyAgICAgICAgICAgICAuc3RhcnQoKVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLy8g5p6c5rGBXG4vLyAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4vLyAgICAgICAgIGNvbnN0IHNwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcblxuLy8gICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMuc2xhc2g7XG4vLyAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICBcbi8vICAgICAgICAgbGV0IG5vZGVQb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4vLyAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZVBvcyk7XG4vLyAgICAgICAgIG5vZGUuc2NhbGUgPSAwO1xuLy8gICAgICAgICBub2RlLmFuZ2xlID0gUmFuZG9tSW50ZWdlcigwLCAzNjApO1xuXG4vLyAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4vLyAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIHdpZHRoIC8gMTUwKSwgXG4vLyAgICAgICAgICAgICBjYy5mYWRlT3V0KDEpXG4vLyAgICAgICAgIClcbi8vICAgICAgICAgLmNhbGwoKCk9Pntub2RlLmFjdGl2ZSA9IGZhbHNlfSlcbi8vICAgICAgICAgLnN0YXJ0KCk7XG4vLyAgICAgfVxuXG4vLyB9Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/qiuItsOwnScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cf020D4PhPz79+E2fizocw', 'qiuItsOwnScript');
// script/qiuScript/qiuItsOwnScript.ts

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
var GameManager_1 = require("./GameManager");
var qiuCollisionScript_1 = require("./qiuCollisionScript");
var qiuMoveScript_1 = require("./qiuMoveScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var qiuItsOwnScript = /** @class */ (function (_super) {
    __extends(qiuItsOwnScript, _super);
    function qiuItsOwnScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.garyMaterial = null;
        _this.destroyBoom = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    qiuItsOwnScript.prototype.start = function () {
    };
    qiuItsOwnScript.prototype.init = function (info) {
        console.log("init", info);
        this.node.getComponent(qiuCollisionScript_1.default).initData(info.index);
        this.node.setPosition(info.pos);
        if (info.rigidBodyType == cc.RigidBodyType.Dynamic) {
            this.node.getComponent(qiuMoveScript_1.default).isCollsion = true;
            this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
            this.node.getComponent(cc.RigidBody).linearVelocity = info.speed;
            this.node.getComponent(cc.RigidBody).awakeOnLoad = true;
        }
        else {
            GameManager_1.default.Instance.targetQiu = this.node;
            GameManager_1.default.Instance.tempQiu = this.node;
        }
    };
    qiuItsOwnScript.prototype.selfDestroy = function (callBack) {
        var _this = this;
        this.node.getChildByName("qiu").getComponent(cc.Sprite).setMaterial(0, this.garyMaterial);
        this.node.getChildByName("txt").getComponent(cc.Sprite).setMaterial(0, this.garyMaterial);
        var boomNode = cc.instantiate(this.destroyBoom);
        boomNode.getComponent(cc.ParticleSystem).startSize = this.node.width * 3.0 / 4;
        boomNode.getComponent(cc.ParticleSystem).endSize = this.node.width * 1.0 / 16;
        boomNode.getComponent(cc.ParticleSystem).endRadius = this.node.width * 0.8;
        boomNode.getComponent(cc.ParticleSystem).endRadiusVar = this.node.width * 0.8 * 0.1;
        boomNode.setPosition(this.node.position);
        this.node.parent.addChild(boomNode);
        this.node.getComponent(cc.PhysicsCircleCollider).radius = 0;
        this.node.getComponent(cc.PhysicsCircleCollider).apply();
        cc.tween(this.node)
            .parallel(cc.tween().to(0.25, { scale: 0 }), cc.tween().delay(0.1).call(function () {
            if (callBack) {
                callBack();
            }
        }))
            .call(function () {
            _this.node.destroy();
        })
            .start();
    };
    __decorate([
        property(cc.Material)
    ], qiuItsOwnScript.prototype, "garyMaterial", void 0);
    __decorate([
        property(cc.Prefab)
    ], qiuItsOwnScript.prototype, "destroyBoom", void 0);
    qiuItsOwnScript = __decorate([
        ccclass
    ], qiuItsOwnScript);
    return qiuItsOwnScript;
}(cc.Component));
exports.default = qiuItsOwnScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L3FpdUl0c093blNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMsMkRBQW1FO0FBQ25FLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW9FQztRQWhFRyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFJakMsaUJBQVcsR0FBYyxJQUFJLENBQUM7O1FBMkQ5QixpQkFBaUI7SUFDckIsQ0FBQztJQTFERyxlQUFlO0lBRWYsK0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBYTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDRCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNEO2FBQ0k7WUFDRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksUUFBUTtRQUFwQixpQkFnQ0M7UUEvQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFGLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRS9FLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBRTlFLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFM0UsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFcEYsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLFFBQVEsQ0FDTCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNqQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLFFBQVEsRUFBRTtnQkFDVixRQUFRLEVBQUUsQ0FBQzthQUNkO1FBQ0wsQ0FBQyxDQUFDLENBQ0w7YUFDQSxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5REFDVztJQUlqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNVO0lBUmIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW9FbkM7SUFBRCxzQkFBQztDQXBFRCxBQW9FQyxDQXBFNEMsRUFBRSxDQUFDLFNBQVMsR0FvRXhEO2tCQXBFb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHFpdUNvbGxpc2lvblNjcmlwdCwgeyBRaXVJbmZvIH0gZnJvbSBcIi4vcWl1Q29sbGlzaW9uU2NyaXB0XCI7XG5pbXBvcnQgcWl1TW92ZVNjcmlwdCBmcm9tIFwiLi9xaXVNb3ZlU2NyaXB0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBxaXVJdHNPd25TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXG4gICAgZ2FyeU1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZGVzdHJveUJvb206IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdChpbmZvOiBRaXVJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdFwiLGluZm8pO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkuaW5pdERhdGEoaW5mby5pbmRleCk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihpbmZvLnBvcylcblxuICAgICAgICBpZiAoaW5mby5yaWdpZEJvZHlUeXBlID09IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChxaXVNb3ZlU2NyaXB0KS5pc0NvbGxzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gaW5mby5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5hd2FrZU9uTG9hZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS50YXJnZXRRaXUgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS50ZW1wUWl1ID0gdGhpcy5ub2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZkRlc3Ryb3koY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicWl1XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ2FyeU1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldE1hdGVyaWFsKDAsIHRoaXMuZ2FyeU1hdGVyaWFsKTtcblxuICAgICAgICBsZXQgYm9vbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRlc3Ryb3lCb29tKTtcblxuICAgICAgICBib29tTm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0U2l6ZSA9IHRoaXMubm9kZS53aWR0aCAqIDMuMCAvIDQ7XG5cbiAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRTaXplID0gdGhpcy5ub2RlLndpZHRoICogMS4wIC8gMTY7XG5cbiAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRSYWRpdXMgPSB0aGlzLm5vZGUud2lkdGggKiAwLjg7XG5cbiAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRSYWRpdXNWYXIgPSB0aGlzLm5vZGUud2lkdGggKiAwLjggKiAwLjE7XG5cbiAgICAgICAgYm9vbU5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChib29tTm9kZSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5hcHBseSgpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjI1LCB7IHNjYWxlOiAwIH0pLFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuZGVsYXkoMC4xKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/TargetScript/TargetCompleteScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7429wYD/VH/68quVRrmg6A', 'TargetCompleteScript');
// script/TargetScript/TargetCompleteScript.ts

// import aduioTools, { engineType } from "../aduioTools";
// import GameManager from "../qiuScript/GameManager";
// import topBubbleBgScript from "../topBubbleBgScript";
// import TargetqiuScript from "./TargetqiuScript";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class TargetCompleteScript extends cc.Component {
//     callBack: Function = null;
//     // onLoad () {}
//     start() {
//     }
//     // update (dt) {}
//     completeTarget(startPoint, tartgetNumber) {
//         let targetNode = cc.find("headNode/UI_top_bubble_bg_01", GameManager.Instance.displayNode);
//         let node = targetNode.getComponent(topBubbleBgScript).targetNode;
//         if (tartgetNumber == 10) {
//             targetNode.getComponent(topBubbleBgScript).SyntheticUltimate();
//         }
//         let post = node.convertToWorldSpaceAR(cc.v2(0, 0));
//         let targetPos = this.node.convertToNodeSpaceAR(post);
//         let tpos = cc.v3(targetPos.x, targetPos.y, 0);
//         let pos = this.node.convertToNodeSpaceAR(startPoint);
//         cc.resources.load("prefab/TargetqiuPrefab", cc.Prefab, (err, res) => {
//             if (res) {
//                 let targetQiuNode = cc.instantiate(res as cc.Prefab);
//                 targetQiuNode.getComponent(TargetqiuScript).numberCount = tartgetNumber;
//                 targetQiuNode.setPosition(pos);
//                 targetQiuNode.setScale(0.0);
//                 this.node.addChild(targetQiuNode);
//                 cc.tween(targetQiuNode)
//                     .to(0.2, { scale: 0.75 })
//                     .delay(0.2)
//                     .parallel(
//                         cc.tween()
//                             .delay(0.3)
//                             .call(() => {
//                                 aduioTools.playSimpleAduioEngine(engineType.finish_target);
//                             }),
//                         cc.tween().to(0.7, { position: cc.v3(0, 0, 0) })
//                     )
//                     .to(0.5, { scale: 0.2 })
//                     .parallel(
//                         cc.tween().to(0.4, { scale: 1.0 }),
//                         cc.tween().call(() => {
//                             this.getComponent(cc.Animation).play();
//                         })
//                     )
//                     .delay(0.7)
//                     .parallel(
//                         cc.tween()
//                             .call(() => {
//                                 cc.tween(node)
//                                     .to(0.7, { opacity: 100 })
//                                     .call(() => {
//                                         node.destroy();
//                                         targetNode.getComponent(topBubbleBgScript).targetNode = targetQiuNode;
//                                         GameManager.Instance.createOneQiu();
//                                     })
//                                     .start()
//                             }),
//                         cc.tween().to(0.7, { position: cc.v3(tpos.x, tpos.y, 0), scale: 150.0 / targetQiuNode.getComponent(TargetqiuScript).qiuSize })
//                     )
//                     .call(() => {
//                         let wpos = targetQiuNode.convertToWorldSpaceAR(cc.v2(0, 0));
//                         let pos = targetNode.convertToNodeSpaceAR(wpos)
//                         targetQiuNode.removeFromParent();
//                         targetQiuNode.setPosition(pos)
//                         targetNode.addChild(targetQiuNode)
//                         targetQiuNode.getComponent(TargetqiuScript).movieCompleteScaleAnim();
//                         cc.tween(targetNode)
//                             .delay(0.3)
//                             .to(0.3, { scale: 1.15 })
//                             .to(0.18, { scale: 1.0 })
//                             .start()
//                         this.node.destroy();
//                         if (this.callBack) {
//                             this.callBack();
//                         }
//                     })
//                     .start()
//             }
//         })  
//     } 
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVGFyZ2V0U2NyaXB0L1RhcmdldENvbXBsZXRlU2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUVuRCwrQ0FBK0M7QUFFL0MsV0FBVztBQUNYLG1FQUFtRTtBQUluRSxpQ0FBaUM7QUFFakMsc0JBQXNCO0FBRXRCLGdCQUFnQjtBQUVoQixRQUFRO0FBQ1Isd0JBQXdCO0FBRXhCLGtEQUFrRDtBQUNsRCxzR0FBc0c7QUFFdEcsNEVBQTRFO0FBRTVFLHFDQUFxQztBQUNyQyw4RUFBOEU7QUFDOUUsWUFBWTtBQUVaLDhEQUE4RDtBQUM5RCxnRUFBZ0U7QUFDaEUseURBQXlEO0FBQ3pELGdFQUFnRTtBQUVoRSxpRkFBaUY7QUFDakYseUJBQXlCO0FBQ3pCLHdFQUF3RTtBQUN4RSwyRkFBMkY7QUFDM0Ysa0RBQWtEO0FBQ2xELCtDQUErQztBQUMvQyxxREFBcUQ7QUFFckQsMENBQTBDO0FBQzFDLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQywwQ0FBMEM7QUFDMUMsNENBQTRDO0FBQzVDLDhGQUE4RjtBQUM5RixrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBQzNFLHdCQUF3QjtBQUN4QiwrQ0FBK0M7QUFDL0MsaUNBQWlDO0FBQ2pDLDhEQUE4RDtBQUM5RCxrREFBa0Q7QUFDbEQsc0VBQXNFO0FBQ3RFLDZCQUE2QjtBQUM3Qix3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsNENBQTRDO0FBQzVDLGlEQUFpRDtBQUNqRCxpRUFBaUU7QUFDakUsb0RBQW9EO0FBQ3BELDBEQUEwRDtBQUMxRCxpSEFBaUg7QUFDakgsK0VBQStFO0FBQy9FLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHlKQUF5SjtBQUN6Six3QkFBd0I7QUFDeEIsb0NBQW9DO0FBRXBDLHVGQUF1RjtBQUN2RiwwRUFBMEU7QUFDMUUsNERBQTREO0FBQzVELHlEQUF5RDtBQUN6RCw2REFBNkQ7QUFDN0QsZ0dBQWdHO0FBRWhHLCtDQUErQztBQUMvQywwQ0FBMEM7QUFDMUMsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUN4RCx1Q0FBdUM7QUFFdkMsK0NBQStDO0FBRS9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFFL0IsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixTQUFTO0FBQ1QsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhZHVpb1Rvb2xzLCB7IGVuZ2luZVR5cGUgfSBmcm9tIFwiLi4vYWR1aW9Ub29sc1wiO1xuLy8gaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9xaXVTY3JpcHQvR2FtZU1hbmFnZXJcIjtcbi8vIGltcG9ydCB0b3BCdWJibGVCZ1NjcmlwdCBmcm9tIFwiLi4vdG9wQnViYmxlQmdTY3JpcHRcIjtcbi8vIGltcG9ydCBUYXJnZXRxaXVTY3JpcHQgZnJvbSBcIi4vVGFyZ2V0cWl1U2NyaXB0XCI7XG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXRDb21wbGV0ZVNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4vLyAgICAgY2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcblxuLy8gICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4vLyAgICAgc3RhcnQoKSB7XG5cbi8vICAgICB9XG4vLyAgICAgLy8gdXBkYXRlIChkdCkge31cblxuLy8gICAgIGNvbXBsZXRlVGFyZ2V0KHN0YXJ0UG9pbnQsIHRhcnRnZXROdW1iZXIpIHtcbi8vICAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBjYy5maW5kKFwiaGVhZE5vZGUvVUlfdG9wX2J1YmJsZV9iZ18wMVwiLCBHYW1lTWFuYWdlci5JbnN0YW5jZS5kaXNwbGF5Tm9kZSk7XG5cbi8vICAgICAgICAgbGV0IG5vZGUgPSB0YXJnZXROb2RlLmdldENvbXBvbmVudCh0b3BCdWJibGVCZ1NjcmlwdCkudGFyZ2V0Tm9kZTtcblxuLy8gICAgICAgICBpZiAodGFydGdldE51bWJlciA9PSAxMCkge1xuLy8gICAgICAgICAgICAgdGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQodG9wQnViYmxlQmdTY3JpcHQpLlN5bnRoZXRpY1VsdGltYXRlKCk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgcG9zdCA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbi8vICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3N0KTtcbi8vICAgICAgICAgbGV0IHRwb3MgPSBjYy52Myh0YXJnZXRQb3MueCwgdGFyZ2V0UG9zLnksIDApO1xuLy8gICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHN0YXJ0UG9pbnQpO1xuXG4vLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL1RhcmdldHFpdVByZWZhYlwiLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHJlcykge1xuLy8gICAgICAgICAgICAgICAgIGxldCB0YXJnZXRRaXVOb2RlID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1Tm9kZS5nZXRDb21wb25lbnQoVGFyZ2V0cWl1U2NyaXB0KS5udW1iZXJDb3VudCA9IHRhcnRnZXROdW1iZXI7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1Tm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuLy8gICAgICAgICAgICAgICAgIHRhcmdldFFpdU5vZGUuc2V0U2NhbGUoMC4wKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGFyZ2V0UWl1Tm9kZSk7XG5cbi8vICAgICAgICAgICAgICAgICBjYy50d2Vlbih0YXJnZXRRaXVOb2RlKVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAwLjc1IH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjIpXG4vLyAgICAgICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR1aW9Ub29scy5wbGF5U2ltcGxlQWR1aW9FbmdpbmUoZW5naW5lVHlwZS5maW5pc2hfdGFyZ2V0KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC43LCB7IHBvc2l0aW9uOiBjYy52MygwLCAwLCAwKSB9KVxuLy8gICAgICAgICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMiB9KVxuLy8gICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBzY2FsZTogMS4wIH0pLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNylcbi8vICAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjcsIHsgb3BhY2l0eTogMTAwIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5nZXRDb21wb25lbnQodG9wQnViYmxlQmdTY3JpcHQpLnRhcmdldE5vZGUgPSB0YXJnZXRRaXVOb2RlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlLmNyZWF0ZU9uZVFpdSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNywgeyBwb3NpdGlvbjogY2MudjModHBvcy54LCB0cG9zLnksIDApLCBzY2FsZTogMTUwLjAgLyB0YXJnZXRRaXVOb2RlLmdldENvbXBvbmVudChUYXJnZXRxaXVTY3JpcHQpLnFpdVNpemUgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3cG9zID0gdGFyZ2V0UWl1Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRhcmdldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod3Bvcylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFFpdU5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UWl1Tm9kZS5zZXRQb3NpdGlvbihwb3MpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkKHRhcmdldFFpdU5vZGUpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRRaXVOb2RlLmdldENvbXBvbmVudChUYXJnZXRxaXVTY3JpcHQpLm1vdmllQ29tcGxldGVTY2FsZUFuaW0oKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGFyZ2V0Tm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuMTUgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xOCwgeyBzY2FsZTogMS4wIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEJhY2spIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSkgIFxuLy8gICAgIH0gXG4vLyB9XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/qiuMoveScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6265aNK3hNCmqugWkYsm5rP', 'qiuMoveScript');
// script/qiuScript/qiuMoveScript.ts

// import aduioTools, { engineType } from "../aduioTools";
// import utiltools from "../utiltools";
// import GameManager from "./GameManager";
// import qiuCollisionScript from "./qiuCollisionScript";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class qiuMoveScript extends cc.Component {
//     @property(cc.Node)
//     lightyNode: cc.Node = null; 
//     private _isCollsion: boolean = false;
//     set isCollsion(isCollsion: boolean) {
//         this._isCollsion = isCollsion;
//         if (isCollsion) {
//             // this.lightyNode.scaleX = 0.0;
//             this.lightyNode.active = false;
//             this.destroy();
//         }
//     }
//     get isCollsion() {
//         return this._isCollsion;
//     }
//     _isDown: boolean = false;
//     set isDown(isDonw: boolean) {
//         this._isDown = isDonw;
//         if (isDonw) {
//             this.lightyNode.angle = 90;
//             this.lightyNode.scaleX = 0.0;
//             this.node.getComponent(cc.Graphics).destroy();
//             aduioTools.playSimpleAduioEngine(engineType.fire);
//             // cc.resources.load("prefab/rewardAnim", cc.Prefab , (err , res)=> {
//             //     if(res) {
//             //         let rewardAnim = cc.instantiate(res as cc.Prefab);  
//             //         GameManager.Instance.displayNode.addChild(rewardAnim); 
//             //     }
//             // })
//         }
//     }
//     get isDown() {
//         return this._isDown;
//     }
//     lastpos: cc.Vec3 = null;
//     lightYMaxScaleX: number = 1.0;
//     UpdataTime = 0;
//     checkRayTime = 0;
//     nodeY:number = 0;
//     birdNode:cc.Node = null;
//     floatingValue = 0;
//     startRayline = false;
//     onDestroy() {
//     }
//     onLoad() {
//     }
//     start() {
//         this.node.addComponent(cc.Graphics);
//         this.nodeY = this.node.getPosition().y;
//         this.birdNode = cc.find("Canvas/gameNode/gameLayer/TrayNode/birdTray");
//         this.floatingValue = 3 + this.getComponent(qiuCollisionScript).index * 0.15;
//     }
//     update(dt) {
//         if(!this.isDown) {
//             this.node.y = this.nodeY + this.birdNode.getPosition().y * this.floatingValue;
//         }
//         this.checkRayTime += dt;
//         let nowPos: cc.Vec3 = this.node.position;
//         if (this.lastpos == null) {
//             this.lastpos = nowPos;
//             return
//         }
//         this.UpdataTime += dt;
//         if (this.UpdataTime < 0.1) {
//             return
//         }
//         let distance = 0;
//         let lightyNodeWidth = 0;
//         let aniTime = 0.1;
//         if (this.isDown == false) {
//             distance = nowPos.x - this.lastpos.x;
//             if (distance > 0) {
//                 this.lightyNode.angle = 180;
//             }
//             else if (distance < 0) {
//                 this.lightyNode.angle = 0;
//             }
//             if (Math.abs(distance) < 100) {
//                 distance = 0;
//             }
//             let speed = distance / this.UpdataTime;
//             lightyNodeWidth = Math.abs(speed) * 1.0 / 2000;
//             // console.log(speed + "");
//         } else {
//             distance = nowPos.y - this.lastpos.y;
//             let speed = distance / this.UpdataTime;
//             lightyNodeWidth = Math.abs(speed) * 1.0 / 500;
//             // console.log(`this.lightyNode2 ${this.lightyNode}`);
//         }
//         cc.tween(this.lightyNode)
//             .to(aniTime, { scaleX: Math.min(lightyNodeWidth, this.lightYMaxScaleX) })
//             .start()
//         this.lastpos = nowPos;
//         this.UpdataTime = 0;
//     }
//     raylineCheck() {
//         if(this.startRayline == false) {
//             return;
//         }
//         if (this.checkRayTime < 0.1) {
//             return
//         }
//         this.checkRayTime = 0;
//         let pos = this.node.getPosition();
//         let worldPoint = this.node.convertToWorldSpaceAR(cc.v2(0,0))
//         let array = cc.director.getPhysicsManager().rayCast(worldPoint, cc.v2(worldPoint.x , worldPoint.y - 2000), cc.RayCastType.Closest);
//         // console.log(`pos -- ${pos}`);
//         // let array = cc.director.getPhysicsManager().rayCast(cc.v2(pos.x + cc.winSize.width / 2, pos.y - this.node.height / 2), cc.v2(pos.x + cc.winSize.width / 2, pos.y - this.node.height / 2 - 10 - 2000), cc.RayCastType.Closest);
//         if (array != null && array.length > 0) { 
//             let iterator =  array[0]; 
//             let g = this.getComponent(cc.Graphics);
//             g.clear(); 
//             let point = this.node.convertToNodeSpaceAR(iterator.point);
//             this.drawLineOfDashes(g, cc.v2(0, -this.node.height / 2 - 10), cc.v2(0,  point.y + 10), '#dcdcdc', true, 10, 20);
//         } 
//         // }    
//     }
//     drawLineOfDashes(g: cc.Graphics, from: cc.Vec2, to: cc.Vec2, color: string = '#ffffff', stroke: boolean = true, length: number = 10, interval: number = 10): void {
//         if (g) {
//             //以 from：cc.v2(100, -100), to: cc.v2(500, -500) 为例
//             // let off = to.sub(from);//向量减法 值为cc.v2(400, -400)
//             // // console.log('向量减法', off)
//             // let dir = off.normalize();//向量归一化法  值为cc.v2(0.707。。。, -0.707。。。)
//             // // console.log('向量归一化法', dir)
//             // let dis = off.mag();//返回该向量的长度  值为 565.685424949238
//             // // console.log('向量的长度', dis)
//             // let delta = dir.mul(length + interval);// 缩放向量，并返回新结果 值为cc.v2(21.213。。。, -21.213。。。)
//             // // console.log('缩放向量', delta)
//             // let delta1 = dir.mul(length);   //值为cc.v2(14.142。。。, -14.142。。。)
//             // // console.log('缩放向量', delta1)
//             // let offset = 0;
//             // let mn = 3;
//             // if (mn > interval) {
//             //     offset = mn - interval
//             // }
//             // let n = Math.floor(dis / (length + interval));
//             // g.lineWidth = 5;//线宽
//             // g.strokeColor.fromHEX(color);//颜色
//             // if (offset) {
//             //     n--;
//             //     g.moveTo(from.x, from.y);
//             //     let start0 = from.add(cc.v2(dir.x * offset, dir.y * offset));
//             //     g.circle(start0.x, start0.y, 2);
//             // }
//             // from = from.add(cc.v2(dir.x * mn, dir.y * mn))
//             // for (let i = 0; i < n; ++i) {
//             //     let start = from.add(delta.mul(i));
//             //     g.moveTo(start.x, start.y);
//             //     let end = start.add(delta1);
//             //     g.circle(end.x, end.y, 2);
//             // }
//             // let start1 = from.add(delta.mul(n));
//             // g.moveTo(start1.x, start1.y);
//             // if (length < dis - (length + interval) * n - mn) {
//             //     let end = start1.add(delta1);
//             //     g.circle(end.x, end.y, 2);
//             // } else {
//             //     g.circle(to.x, to.y, 2);
//             // }
//             // if (stroke) g.stroke();
//             let startPos = from;
//             let endPos = to;
//             let line = endPos.sub(startPos);
//             let lineLenth = line.mag();
//             let unitLenth = 20;
//             let increment = line.normalize().mul(unitLenth);
//             let drawLine = true;
//             let pos = startPos.clone();
//             // g.strokeColor = cc.Color.WHITE;
//             g.lineWidth = 5;//线宽
//             g.strokeColor.fromHEX(color);//颜色
//             for (; lineLenth > unitLenth; lineLenth -= unitLenth) {
//                 if (drawLine) {
//                     g.moveTo(pos.x, pos.y);
//                     pos.addSelf(increment);
//                     g.circle(pos.x, pos.y,2);
//                     g.stroke();
//                 } else {
//                     pos.addSelf(increment);
//                 }
//                 drawLine = !drawLine;
//             }
//             //最后一段
//             if (drawLine) {
//                 g.moveTo(pos.x, pos.y);
//                 g.circle(endPos.x, endPos.y,2);
//                 g.stroke();
//             }
//         }
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L3FpdU1vdmVTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQTBEO0FBQzFELHdDQUF3QztBQUN4QywyQ0FBMkM7QUFDM0MseURBQXlEO0FBRXpELCtDQUErQztBQUUvQyxXQUFXO0FBQ1gsNERBQTREO0FBRzVELHlCQUF5QjtBQUN6QixtQ0FBbUM7QUFFbkMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUU1Qyx5Q0FBeUM7QUFDekMsNEJBQTRCO0FBRTVCLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUMsOEJBQThCO0FBQzlCLFlBQVk7QUFDWixRQUFRO0FBRVIseUJBQXlCO0FBRXpCLG1DQUFtQztBQUNuQyxRQUFRO0FBRVIsZ0NBQWdDO0FBQ2hDLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakMsd0JBQXdCO0FBQ3hCLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUMsNkRBQTZEO0FBRTdELGlFQUFpRTtBQUNqRSxvRkFBb0Y7QUFDcEYsK0JBQStCO0FBQy9CLDhFQUE4RTtBQUM5RSxpRkFBaUY7QUFDakYsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osUUFBUTtBQUNSLHFCQUFxQjtBQUNyQiwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLCtCQUErQjtBQUUvQixxQ0FBcUM7QUFFckMsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUd4Qix3QkFBd0I7QUFDeEIsK0JBQStCO0FBRS9CLHlCQUF5QjtBQUV6Qiw0QkFBNEI7QUFFNUIsb0JBQW9CO0FBRXBCLFFBQVE7QUFDUixpQkFBaUI7QUFFakIsUUFBUTtBQUVSLGdCQUFnQjtBQUNoQiwrQ0FBK0M7QUFDL0Msa0RBQWtEO0FBQ2xELGtGQUFrRjtBQUNsRix1RkFBdUY7QUFDdkYsUUFBUTtBQUVSLG1CQUFtQjtBQUVuQiw2QkFBNkI7QUFDN0IsNkZBQTZGO0FBQzdGLFlBQVk7QUFFWixtQ0FBbUM7QUFDbkMsb0RBQW9EO0FBQ3BELHNDQUFzQztBQUN0QyxxQ0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixpQ0FBaUM7QUFDakMsdUNBQXVDO0FBQ3ZDLHFCQUFxQjtBQUNyQixZQUFZO0FBRVosNEJBQTRCO0FBQzVCLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLG9EQUFvRDtBQUNwRCxrQ0FBa0M7QUFDbEMsK0NBQStDO0FBQy9DLGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLGdCQUFnQjtBQUNoQiw4Q0FBOEM7QUFDOUMsZ0NBQWdDO0FBQ2hDLGdCQUFnQjtBQUVoQixzREFBc0Q7QUFDdEQsOERBQThEO0FBQzlELDBDQUEwQztBQUMxQyxtQkFBbUI7QUFFbkIsb0RBQW9EO0FBQ3BELHNEQUFzRDtBQUN0RCw2REFBNkQ7QUFDN0QscUVBQXFFO0FBQ3JFLFlBQVk7QUFHWixvQ0FBb0M7QUFDcEMsd0ZBQXdGO0FBQ3hGLHVCQUF1QjtBQUV2QixpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CLFFBQVE7QUFFUix1QkFBdUI7QUFFdkIsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1oseUNBQXlDO0FBQ3pDLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDLDZDQUE2QztBQUU3Qyx1RUFBdUU7QUFDdkUsOElBQThJO0FBRTlJLDJDQUEyQztBQUMzQyw0T0FBNE87QUFDNU8sb0RBQW9EO0FBQ3BELHlDQUF5QztBQUN6QyxzREFBc0Q7QUFDdEQsMEJBQTBCO0FBQzFCLDBFQUEwRTtBQUMxRSxnSUFBZ0k7QUFDaEksYUFBYTtBQUViLG1CQUFtQjtBQUNuQixRQUFRO0FBRVIsMEtBQTBLO0FBQzFLLG1CQUFtQjtBQUNuQixpRUFBaUU7QUFDakUsa0VBQWtFO0FBQ2xFLDZDQUE2QztBQUM3QyxrRkFBa0Y7QUFDbEYsK0NBQStDO0FBQy9DLHFFQUFxRTtBQUNyRSw4Q0FBOEM7QUFDOUMsc0dBQXNHO0FBQ3RHLCtDQUErQztBQUMvQyxrRkFBa0Y7QUFDbEYsZ0RBQWdEO0FBQ2hELGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsZ0VBQWdFO0FBQ2hFLHNDQUFzQztBQUN0QyxtREFBbUQ7QUFDbkQsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQiwrQ0FBK0M7QUFDL0MsbUZBQW1GO0FBQ25GLHNEQUFzRDtBQUN0RCxtQkFBbUI7QUFDbkIsZ0VBQWdFO0FBQ2hFLCtDQUErQztBQUMvQyx5REFBeUQ7QUFDekQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCxnREFBZ0Q7QUFDaEQsbUJBQW1CO0FBQ25CLHNEQUFzRDtBQUN0RCwrQ0FBK0M7QUFDL0Msb0VBQW9FO0FBQ3BFLG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFDaEQsMEJBQTBCO0FBQzFCLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIseUNBQXlDO0FBRXpDLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsK0NBQStDO0FBQy9DLDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFDbEMsK0RBQStEO0FBQy9ELG1DQUFtQztBQUNuQywwQ0FBMEM7QUFDMUMsaURBQWlEO0FBQ2pELG1DQUFtQztBQUNuQyxnREFBZ0Q7QUFFaEQsc0VBQXNFO0FBQ3RFLGtDQUFrQztBQUNsQyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxvQkFBb0I7QUFDcEIsd0NBQXdDO0FBQ3hDLGdCQUFnQjtBQUVoQixxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLDBDQUEwQztBQUMxQyxrREFBa0Q7QUFDbEQsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYWR1aW9Ub29scywgeyBlbmdpbmVUeXBlIH0gZnJvbSBcIi4uL2FkdWlvVG9vbHNcIjtcbi8vIGltcG9ydCB1dGlsdG9vbHMgZnJvbSBcIi4uL3V0aWx0b29sc1wiO1xuLy8gaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgcWl1Q29sbGlzaW9uU2NyaXB0IGZyb20gXCIuL3FpdUNvbGxpc2lvblNjcmlwdFwiO1xuXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgcWl1TW92ZVNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIGxpZ2h0eU5vZGU6IGNjLk5vZGUgPSBudWxsOyBcblxuLy8gICAgIHByaXZhdGUgX2lzQ29sbHNpb246IGJvb2xlYW4gPSBmYWxzZTtcbi8vICAgICBzZXQgaXNDb2xsc2lvbihpc0NvbGxzaW9uOiBib29sZWFuKSB7XG5cbi8vICAgICAgICAgdGhpcy5faXNDb2xsc2lvbiA9IGlzQ29sbHNpb247XG4vLyAgICAgICAgIGlmIChpc0NvbGxzaW9uKSB7XG5cbi8vICAgICAgICAgICAgIC8vIHRoaXMubGlnaHR5Tm9kZS5zY2FsZVggPSAwLjA7XG4vLyAgICAgICAgICAgICB0aGlzLmxpZ2h0eU5vZGUuYWN0aXZlID0gZmFsc2U7XG4vLyAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGdldCBpc0NvbGxzaW9uKCkge1xuXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9pc0NvbGxzaW9uO1xuLy8gICAgIH1cblxuLy8gICAgIF9pc0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcbi8vICAgICBzZXQgaXNEb3duKGlzRG9udzogYm9vbGVhbikge1xuLy8gICAgICAgICB0aGlzLl9pc0Rvd24gPSBpc0Rvbnc7XG4vLyAgICAgICAgIGlmIChpc0RvbncpIHtcbi8vICAgICAgICAgICAgIHRoaXMubGlnaHR5Tm9kZS5hbmdsZSA9IDkwO1xuLy8gICAgICAgICAgICAgdGhpcy5saWdodHlOb2RlLnNjYWxlWCA9IDAuMDtcbi8vICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpLmRlc3Ryb3koKTtcblxuLy8gICAgICAgICAgICAgYWR1aW9Ub29scy5wbGF5U2ltcGxlQWR1aW9FbmdpbmUoZW5naW5lVHlwZS5maXJlKTtcbi8vICAgICAgICAgICAgIC8vIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3Jld2FyZEFuaW1cIiwgY2MuUHJlZmFiICwgKGVyciAsIHJlcyk9PiB7XG4vLyAgICAgICAgICAgICAvLyAgICAgaWYocmVzKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgICAgIGxldCByZXdhcmRBbmltID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7ICBcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuZGlzcGxheU5vZGUuYWRkQ2hpbGQocmV3YXJkQW5pbSk7IFxuLy8gICAgICAgICAgICAgLy8gICAgIH1cbi8vICAgICAgICAgICAgIC8vIH0pXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgZ2V0IGlzRG93bigpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRG93bjtcbi8vICAgICB9XG4vLyAgICAgbGFzdHBvczogY2MuVmVjMyA9IG51bGw7XG5cbi8vICAgICBsaWdodFlNYXhTY2FsZVg6IG51bWJlciA9IDEuMDtcblxuLy8gICAgIFVwZGF0YVRpbWUgPSAwO1xuLy8gICAgIGNoZWNrUmF5VGltZSA9IDA7XG5cblxuLy8gICAgIG5vZGVZOm51bWJlciA9IDA7XG4vLyAgICAgYmlyZE5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICBmbG9hdGluZ1ZhbHVlID0gMDtcblxuLy8gICAgIHN0YXJ0UmF5bGluZSA9IGZhbHNlO1xuXG4vLyAgICAgb25EZXN0cm95KCkge1xuXG4vLyAgICAgfVxuLy8gICAgIG9uTG9hZCgpIHtcblxuLy8gICAgIH1cblxuLy8gICAgIHN0YXJ0KCkge1xuLy8gICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbi8vICAgICAgICAgdGhpcy5ub2RlWSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnk7XG4vLyAgICAgICAgIHRoaXMuYmlyZE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL2dhbWVOb2RlL2dhbWVMYXllci9UcmF5Tm9kZS9iaXJkVHJheVwiKTtcbi8vICAgICAgICAgdGhpcy5mbG9hdGluZ1ZhbHVlID0gMyArIHRoaXMuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkuaW5kZXggKiAwLjE1O1xuLy8gICAgIH1cblxuLy8gICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBcbi8vICAgICAgICAgaWYoIXRoaXMuaXNEb3duKSB7XG4vLyAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMubm9kZVkgKyB0aGlzLmJpcmROb2RlLmdldFBvc2l0aW9uKCkueSAqIHRoaXMuZmxvYXRpbmdWYWx1ZTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHRoaXMuY2hlY2tSYXlUaW1lICs9IGR0O1xuLy8gICAgICAgICBsZXQgbm93UG9zOiBjYy5WZWMzID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuLy8gICAgICAgICBpZiAodGhpcy5sYXN0cG9zID09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHRoaXMubGFzdHBvcyA9IG5vd1Bvcztcbi8vICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuVXBkYXRhVGltZSArPSBkdDtcbi8vICAgICAgICAgaWYgKHRoaXMuVXBkYXRhVGltZSA8IDAuMSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgZGlzdGFuY2UgPSAwO1xuLy8gICAgICAgICBsZXQgbGlnaHR5Tm9kZVdpZHRoID0gMDtcbi8vICAgICAgICAgbGV0IGFuaVRpbWUgPSAwLjE7XG4vLyAgICAgICAgIGlmICh0aGlzLmlzRG93biA9PSBmYWxzZSkge1xuLy8gICAgICAgICAgICAgZGlzdGFuY2UgPSBub3dQb3MueCAtIHRoaXMubGFzdHBvcy54O1xuLy8gICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gMCkge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMubGlnaHR5Tm9kZS5hbmdsZSA9IDE4MDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGVsc2UgaWYgKGRpc3RhbmNlIDwgMCkge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMubGlnaHR5Tm9kZS5hbmdsZSA9IDA7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2UpIDwgMTAwKSB7XG4vLyAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSAwO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBsZXQgc3BlZWQgPSBkaXN0YW5jZSAvIHRoaXMuVXBkYXRhVGltZTtcbi8vICAgICAgICAgICAgIGxpZ2h0eU5vZGVXaWR0aCA9IE1hdGguYWJzKHNwZWVkKSAqIDEuMCAvIDIwMDA7XG4vLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGVlZCArIFwiXCIpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuXG4vLyAgICAgICAgICAgICBkaXN0YW5jZSA9IG5vd1Bvcy55IC0gdGhpcy5sYXN0cG9zLnk7XG4vLyAgICAgICAgICAgICBsZXQgc3BlZWQgPSBkaXN0YW5jZSAvIHRoaXMuVXBkYXRhVGltZTtcbi8vICAgICAgICAgICAgIGxpZ2h0eU5vZGVXaWR0aCA9IE1hdGguYWJzKHNwZWVkKSAqIDEuMCAvIDUwMDtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzLmxpZ2h0eU5vZGUyICR7dGhpcy5saWdodHlOb2RlfWApO1xuLy8gICAgICAgICB9XG5cblxuLy8gICAgICAgICBjYy50d2Vlbih0aGlzLmxpZ2h0eU5vZGUpXG4vLyAgICAgICAgICAgICAudG8oYW5pVGltZSwgeyBzY2FsZVg6IE1hdGgubWluKGxpZ2h0eU5vZGVXaWR0aCwgdGhpcy5saWdodFlNYXhTY2FsZVgpIH0pXG4vLyAgICAgICAgICAgICAuc3RhcnQoKVxuXG4vLyAgICAgICAgIHRoaXMubGFzdHBvcyA9IG5vd1Bvcztcbi8vICAgICAgICAgdGhpcy5VcGRhdGFUaW1lID0gMDtcbi8vICAgICB9XG5cbi8vICAgICByYXlsaW5lQ2hlY2soKSB7XG5cbi8vICAgICAgICAgaWYodGhpcy5zdGFydFJheWxpbmUgPT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAodGhpcy5jaGVja1JheVRpbWUgPCAwLjEpIHtcbi8vICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuY2hlY2tSYXlUaW1lID0gMDtcbi8vICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuXG4vLyAgICAgICAgIGxldCB3b3JsZFBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKVxuLy8gICAgICAgICBsZXQgYXJyYXkgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLnJheUNhc3Qod29ybGRQb2ludCwgY2MudjIod29ybGRQb2ludC54ICwgd29ybGRQb2ludC55IC0gMjAwMCksIGNjLlJheUNhc3RUeXBlLkNsb3Nlc3QpO1xuXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBwb3MgLS0gJHtwb3N9YCk7XG4vLyAgICAgICAgIC8vIGxldCBhcnJheSA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkucmF5Q2FzdChjYy52Mihwb3MueCArIGNjLndpblNpemUud2lkdGggLyAyLCBwb3MueSAtIHRoaXMubm9kZS5oZWlnaHQgLyAyKSwgY2MudjIocG9zLnggKyBjYy53aW5TaXplLndpZHRoIC8gMiwgcG9zLnkgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIDEwIC0gMjAwMCksIGNjLlJheUNhc3RUeXBlLkNsb3Nlc3QpO1xuLy8gICAgICAgICBpZiAoYXJyYXkgIT0gbnVsbCAmJiBhcnJheS5sZW5ndGggPiAwKSB7IFxuLy8gICAgICAgICAgICAgbGV0IGl0ZXJhdG9yID0gIGFycmF5WzBdOyBcbi8vICAgICAgICAgICAgIGxldCBnID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuLy8gICAgICAgICAgICAgZy5jbGVhcigpOyBcbi8vICAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpdGVyYXRvci5wb2ludCk7XG4vLyAgICAgICAgICAgICB0aGlzLmRyYXdMaW5lT2ZEYXNoZXMoZywgY2MudjIoMCwgLXRoaXMubm9kZS5oZWlnaHQgLyAyIC0gMTApLCBjYy52MigwLCAgcG9pbnQueSArIDEwKSwgJyNkY2RjZGMnLCB0cnVlLCAxMCwgMjApO1xuLy8gICAgICAgICB9IFxuXG4vLyAgICAgICAgIC8vIH0gICAgXG4vLyAgICAgfVxuXG4vLyAgICAgZHJhd0xpbmVPZkRhc2hlcyhnOiBjYy5HcmFwaGljcywgZnJvbTogY2MuVmVjMiwgdG86IGNjLlZlYzIsIGNvbG9yOiBzdHJpbmcgPSAnI2ZmZmZmZicsIHN0cm9rZTogYm9vbGVhbiA9IHRydWUsIGxlbmd0aDogbnVtYmVyID0gMTAsIGludGVydmFsOiBudW1iZXIgPSAxMCk6IHZvaWQge1xuLy8gICAgICAgICBpZiAoZykge1xuLy8gICAgICAgICAgICAgLy/ku6UgZnJvbe+8mmNjLnYyKDEwMCwgLTEwMCksIHRvOiBjYy52Mig1MDAsIC01MDApIOS4uuS+i1xuLy8gICAgICAgICAgICAgLy8gbGV0IG9mZiA9IHRvLnN1Yihmcm9tKTsvL+WQkemHj+WHj+azlSDlgLzkuLpjYy52Mig0MDAsIC00MDApXG4vLyAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygn5ZCR6YeP5YeP5rOVJywgb2ZmKVxuLy8gICAgICAgICAgICAgLy8gbGV0IGRpciA9IG9mZi5ub3JtYWxpemUoKTsvL+WQkemHj+W9kuS4gOWMluazlSAg5YC85Li6Y2MudjIoMC43MDfjgILjgILjgIIsIC0wLjcwN+OAguOAguOAgilcbi8vICAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCflkJHph4/lvZLkuIDljJbms5UnLCBkaXIpXG4vLyAgICAgICAgICAgICAvLyBsZXQgZGlzID0gb2ZmLm1hZygpOy8v6L+U5Zue6K+l5ZCR6YeP55qE6ZW/5bqmICDlgLzkuLogNTY1LjY4NTQyNDk0OTIzOFxuLy8gICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ+WQkemHj+eahOmVv+W6picsIGRpcylcbi8vICAgICAgICAgICAgIC8vIGxldCBkZWx0YSA9IGRpci5tdWwobGVuZ3RoICsgaW50ZXJ2YWwpOy8vIOe8qeaUvuWQkemHj++8jOW5tui/lOWbnuaWsOe7k+aenCDlgLzkuLpjYy52MigyMS4yMTPjgILjgILjgIIsIC0yMS4yMTPjgILjgILjgIIpXG4vLyAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygn57yp5pS+5ZCR6YePJywgZGVsdGEpXG4vLyAgICAgICAgICAgICAvLyBsZXQgZGVsdGExID0gZGlyLm11bChsZW5ndGgpOyAgIC8v5YC85Li6Y2MudjIoMTQuMTQy44CC44CC44CCLCAtMTQuMTQy44CC44CC44CCKVxuLy8gICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ+e8qeaUvuWQkemHjycsIGRlbHRhMSlcbi8vICAgICAgICAgICAgIC8vIGxldCBvZmZzZXQgPSAwO1xuLy8gICAgICAgICAgICAgLy8gbGV0IG1uID0gMztcbi8vICAgICAgICAgICAgIC8vIGlmIChtbiA+IGludGVydmFsKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgb2Zmc2V0ID0gbW4gLSBpbnRlcnZhbFxuLy8gICAgICAgICAgICAgLy8gfVxuLy8gICAgICAgICAgICAgLy8gbGV0IG4gPSBNYXRoLmZsb29yKGRpcyAvIChsZW5ndGggKyBpbnRlcnZhbCkpO1xuLy8gICAgICAgICAgICAgLy8gZy5saW5lV2lkdGggPSA1Oy8v57q/5a69XG4vLyAgICAgICAgICAgICAvLyBnLnN0cm9rZUNvbG9yLmZyb21IRVgoY29sb3IpOy8v6aKc6ImyXG4vLyAgICAgICAgICAgICAvLyBpZiAob2Zmc2V0KSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgbi0tO1xuLy8gICAgICAgICAgICAgLy8gICAgIGcubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcbi8vICAgICAgICAgICAgIC8vICAgICBsZXQgc3RhcnQwID0gZnJvbS5hZGQoY2MudjIoZGlyLnggKiBvZmZzZXQsIGRpci55ICogb2Zmc2V0KSk7XG4vLyAgICAgICAgICAgICAvLyAgICAgZy5jaXJjbGUoc3RhcnQwLngsIHN0YXJ0MC55LCAyKTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgICAgIC8vIGZyb20gPSBmcm9tLmFkZChjYy52MihkaXIueCAqIG1uLCBkaXIueSAqIG1uKSlcbi8vICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgbGV0IHN0YXJ0ID0gZnJvbS5hZGQoZGVsdGEubXVsKGkpKTtcbi8vICAgICAgICAgICAgIC8vICAgICBnLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcbi8vICAgICAgICAgICAgIC8vICAgICBsZXQgZW5kID0gc3RhcnQuYWRkKGRlbHRhMSk7XG4vLyAgICAgICAgICAgICAvLyAgICAgZy5jaXJjbGUoZW5kLngsIGVuZC55LCAyKTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgICAgIC8vIGxldCBzdGFydDEgPSBmcm9tLmFkZChkZWx0YS5tdWwobikpO1xuLy8gICAgICAgICAgICAgLy8gZy5tb3ZlVG8oc3RhcnQxLngsIHN0YXJ0MS55KTtcbi8vICAgICAgICAgICAgIC8vIGlmIChsZW5ndGggPCBkaXMgLSAobGVuZ3RoICsgaW50ZXJ2YWwpICogbiAtIG1uKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgbGV0IGVuZCA9IHN0YXJ0MS5hZGQoZGVsdGExKTtcbi8vICAgICAgICAgICAgIC8vICAgICBnLmNpcmNsZShlbmQueCwgZW5kLnksIDIpO1xuLy8gICAgICAgICAgICAgLy8gfSBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vICAgICBnLmNpcmNsZSh0by54LCB0by55LCAyKTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgICAgIC8vIGlmIChzdHJva2UpIGcuc3Ryb2tlKCk7XG5cbi8vICAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGZyb207XG4vLyAgICAgICAgICAgICBsZXQgZW5kUG9zID0gdG87XG4vLyAgICAgICAgICAgICBsZXQgbGluZSA9IGVuZFBvcy5zdWIoc3RhcnRQb3MpO1xuLy8gICAgICAgICAgICAgbGV0IGxpbmVMZW50aCA9IGxpbmUubWFnKCk7XG4vLyAgICAgICAgICAgICBsZXQgdW5pdExlbnRoID0gMjA7XG4vLyAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gbGluZS5ub3JtYWxpemUoKS5tdWwodW5pdExlbnRoKTtcbi8vICAgICAgICAgICAgIGxldCBkcmF3TGluZSA9IHRydWU7XG4vLyAgICAgICAgICAgICBsZXQgcG9zID0gc3RhcnRQb3MuY2xvbmUoKTtcbi8vICAgICAgICAgICAgIC8vIGcuc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbi8vICAgICAgICAgICAgIGcubGluZVdpZHRoID0gNTsvL+e6v+WuvVxuLy8gICAgICAgICAgICAgZy5zdHJva2VDb2xvci5mcm9tSEVYKGNvbG9yKTsvL+minOiJslxuXG4vLyAgICAgICAgICAgICBmb3IgKDsgbGluZUxlbnRoID4gdW5pdExlbnRoOyBsaW5lTGVudGggLT0gdW5pdExlbnRoKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGRyYXdMaW5lKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGcubW92ZVRvKHBvcy54LCBwb3MueSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHBvcy5hZGRTZWxmKGluY3JlbWVudCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGcuY2lyY2xlKHBvcy54LCBwb3MueSwyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZy5zdHJva2UoKTtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICBwb3MuYWRkU2VsZihpbmNyZW1lbnQpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBkcmF3TGluZSA9ICFkcmF3TGluZTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgLy/mnIDlkI7kuIDmrrVcbi8vICAgICAgICAgICAgIGlmIChkcmF3TGluZSkge1xuLy8gICAgICAgICAgICAgICAgIGcubW92ZVRvKHBvcy54LCBwb3MueSk7XG4vLyAgICAgICAgICAgICAgICAgZy5jaXJjbGUoZW5kUG9zLngsIGVuZFBvcy55LDIpO1xuLy8gICAgICAgICAgICAgICAgIGcuc3Ryb2tlKCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9778aiKqDhC84AtwHhQZOP5', 'GameManager');
// script/qiuScript/GameManager.ts

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
exports.GMZIndex = void 0;
var aduioTools_1 = require("../aduioTools");
var gameConfig_1 = require("../gameConfig");
var GuideScript_1 = require("../GuideScript");
var LocalAssetsManager_1 = require("../LocalAssetsManager");
var GMZIndex;
(function (GMZIndex) {
    GMZIndex[GMZIndex["rewardShow"] = 1] = "rewardShow";
    GMZIndex[GMZIndex["rewardAni"] = 2] = "rewardAni";
    GMZIndex[GMZIndex["finish_target"] = 3] = "finish_target";
    GMZIndex[GMZIndex["busTips"] = 4] = "busTips";
    GMZIndex[GMZIndex["gkPanel"] = 5] = "gkPanel";
})(GMZIndex = exports.GMZIndex || (exports.GMZIndex = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetQiu = null;
        _this.tempQiu = null;
        _this.trayBirdNode = null;
        _this.footNode = null;
        _this.scorePrefab = null;
        // @property(cc.Prefab)
        // qiuPrefab: cc.Prefab = null;
        _this.rewardAnimPrefab = null;
        _this.displayNode = null;
        // @property(cc.Label)
        // totalRewardlabel: cc.Label = null;
        _this.mergePerpetualCount = 0;
        _this.paTween = null;
        _this.isVibration = false;
        _this.qiuArray = [];
        _this.canvas = null;
        _this.tipLabel = null;
        _this.download = null;
        _this.spineNode = null;
        _this.spinebigwinNode = null;
        _this.spinBtn = null;
        _this.btnNode = null;
        _this.popup = null;
        _this.mergeCount = 0;
        _this.passCount = 0;
        _this.extraCount = 0;
        _this.isOver = false;
        _this.isClicked = false;
        _this.scoreNode = null;
        _this.bigwinNode = null;
        _this.isStopCounting = false; //网络请求或广告是停止计数
        _this._countingSwitch = true; //不是停止计数状态，还要操作碰撞了才能恢复计数，防止有连续合成的球自动计数
        return _this;
    }
    GameManager_1 = GameManager;
    Object.defineProperty(GameManager.prototype, "countingSwitch", {
        get: function () {
            return this._countingSwitch;
        },
        set: function (_countingSwitch) {
            this._countingSwitch = _countingSwitch;
        },
        enumerable: false,
        configurable: true
    });
    GameManager.prototype.onLoad = function () {
        if (GameManager_1.Instance != null) {
            GameManager_1.Instance.destroy();
        }
        gameConfig_1.default.setConfig();
        // console.log(`loading ---  start`);
        GameManager_1.Instance = this;
        cc.director.getPhysicsManager().enabled = true;
        if (cc.sys.os === cc.sys.OS_IOS) {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        }
        else {
            cc.director.getPhysicsManager().gravity = new cc.Vec2(0, -1700);
        }
        this.spineNode.active = false;
        cc.tween(this.spinBtn.node)
            .repeatForever(cc.tween().sequence(cc.tween().to(1, { scale: 1.2 }), cc.tween().to(1, { scale: 1 })))
            .start();
    };
    /**-----------------------------slots------------------------------------ */
    //spin按钮点击
    GameManager.prototype.onSpineClick = function () {
        var _this = this;
        if (this.isClicked) {
            return;
        }
        this.isClicked = true;
        this.spineNode.active = true;
        var anim = this.spineNode.getComponent(cc.Animation);
        anim.once(cc.Animation.EventType.FINISHED, function () {
            setTimeout(function () {
                _this.showTireSteak();
            }, 100);
        }, this);
        anim.play();
    };
    //展示赢钱动画
    GameManager.prototype.showTireSteak = function () {
        var _this = this;
        console.log("showTireSteak");
        if (!this.bigwinNode) {
            cc.resources.load("prefab/BigWinNode", cc.Prefab, function (err, res) {
                if (err) {
                    console.error("Error loading BigWinNode prefab:", err);
                    return;
                }
                console.log("loading BigWinNode prefab:success");
                _this.bigwinNode = cc.instantiate(res);
                cc.find("Canvas/gameNode").addChild(_this.bigwinNode);
                _this.bigwinNode.active = true;
                var anim = _this.bigwinNode.getComponent(cc.Animation);
                anim.once(cc.Animation.EventType.FINISHED, function () {
                    anim.play("bigwinidle");
                    if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.Mtg) {
                        //mtg打开下面这行
                        window.gameEnd && window.gameEnd();
                    }
                }, _this);
                // 先播idle
                anim.play("bigwin");
            });
        }
    };
    /**---------------------------------------------------------------------- */
    GameManager.prototype.start = function () {
        var _this = this;
        this.tipLabel.string = gameConfig_1.default.getWord("tipLbl");
        // this.download.string = gameConfig.getWord("download");
        cc.resources.load("prefab/GuidePrefab", cc.Prefab, function (err, res) {
            if (res) {
                var guideNode = cc.instantiate(res);
                _this.canvas.addChild(guideNode);
                guideNode.getComponent(GuideScript_1.default).callback = function () {
                    gameConfig_1.default.setGuideShow();
                    LocalAssetsManager_1.default.releasePrefab(res);
                    aduioTools_1.default.playBackgroundMusic();
                };
            }
        });
        if (gameConfig_1.default.getPlayableAdType === gameConfig_1.PlayableAdType.Mtg) {
            window.gameReady && window.gameReady();
        }
    };
    GameManager.prototype.showAddReward = function () {
        var rewardAnimNode = cc.instantiate(this.rewardAnimPrefab);
        this.node.addChild(rewardAnimNode, GMZIndex.rewardAni);
    };
    GameManager.prototype.gameSceneWillDisappear = function () {
        aduioTools_1.default.stopBackgroundMusic();
        this.pauseGame();
    };
    GameManager.prototype.pauseGame = function () {
        cc.director.pause();
        this.displayNode.pauseAllActions();
        aduioTools_1.default.pauseAllEffect();
    };
    GameManager.prototype.resumeGame = function () {
        cc.director.resume();
        this.displayNode.resumeAllActions();
        aduioTools_1.default.resuseAllEffect();
    };
    var GameManager_1;
    GameManager.Instance = null;
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "trayBirdNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "footNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "scorePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "rewardAnimPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "displayNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "canvas", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "download", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "spineNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "spinebigwinNode", void 0);
    __decorate([
        property(cc.Button)
    ], GameManager.prototype, "spinBtn", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "btnNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "popup", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "bigwinNode", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBcUQ7QUFDckQsNENBQWdHO0FBQ2hHLDhDQUF5QztBQUN6Qyw0REFBdUQ7QUFJdkQsSUFBWSxRQU1YO0FBTkQsV0FBWSxRQUFRO0lBQ2hCLG1EQUFjLENBQUE7SUFDZCxpREFBYSxDQUFBO0lBQ2IseURBQWlCLENBQUE7SUFDakIsNkNBQVcsQ0FBQTtJQUNYLDZDQUFXLENBQUE7QUFDZixDQUFDLEVBTlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFNbkI7QUFFSyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXVNQztRQW5NRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3Qix1QkFBdUI7UUFDdkIsK0JBQStCO1FBRy9CLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUduQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixzQkFBc0I7UUFDdEIscUNBQXFDO1FBRXJDLHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVEsR0FBbUIsRUFBRSxDQUFDO1FBSTlCLFlBQU0sR0FBVSxJQUFJLENBQUE7UUFHcEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFHekIs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REFDVTtJQWE1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0c7SUFXckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUztJQXBFVixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBdU0vQjtJQUFELGtCQUFDO0NBdk1ELEFBdU1DLENBdk13QyxFQUFFLENBQUMsU0FBUyxHQXVNcEQ7a0JBdk1vQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkdWlvVG9vbHMsIHtlbmdpbmVUeXBlfSBmcm9tIFwiLi4vYWR1aW9Ub29sc1wiO1xuaW1wb3J0IGdhbWVDb25maWcsIHtKdWljZUl0ZW0sIEp1aWNlSXRlbVR5cGUsIExhbmd1YWdlVHlwZSxQbGF5YWJsZUFkVHlwZX0gZnJvbSBcIi4uL2dhbWVDb25maWdcIjtcbmltcG9ydCBHdWlkZVNjcmlwdCBmcm9tIFwiLi4vR3VpZGVTY3JpcHRcIjtcbmltcG9ydCBMb2NhbEFzc2V0c01hbmFnZXIgZnJvbSBcIi4uL0xvY2FsQXNzZXRzTWFuYWdlclwiO1xuXG5cblxuZXhwb3J0IGVudW0gR01aSW5kZXgge1xuICAgIHJld2FyZFNob3cgPSAxLFxuICAgIHJld2FyZEFuaSA9IDIsXG4gICAgZmluaXNoX3RhcmdldCA9IDMsXG4gICAgYnVzVGlwcyA9IDQsXG4gICAgZ2tQYW5lbCA9IDUsXG59XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnR7XG5cbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBHYW1lTWFuYWdlciA9IG51bGw7XG5cbiAgICB0YXJnZXRRaXU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHRlbXBRaXU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdHJheUJpcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2NvcmVQcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gcWl1UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICByZXdhcmRBbmltUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGlzcGxheU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIC8vIHRvdGFsUmV3YXJkbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIG1lcmdlUGVycGV0dWFsQ291bnQgPSAwO1xuICAgIHBhVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuICAgIGlzVmlicmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gICAgcWl1QXJyYXk6IEFycmF5PGNjLk5vZGU+ID0gW107XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhbnZhczpjYy5Ob2RlID1udWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlwTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBkb3dubG9hZDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzcGluZU5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzcGluZWJpZ3dpbk5vZGU6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHNwaW5CdG46Y2MuQnV0dG9uID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Ob2RlOmNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXA6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBtZXJnZUNvdW50ID0gMDtcbiAgICBwYXNzQ291bnQgPSAwO1xuXG4gICAgZXh0cmFDb3VudCA9IDA7XG5cbiAgICBpc092ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpZ3dpbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBpc1N0b3BDb3VudGluZzogYm9vbGVhbiA9IGZhbHNlOyAvL+e9kee7nOivt+axguaIluW5v+WRiuaYr+WBnOatouiuoeaVsFxuICAgIF9jb3VudGluZ1N3aXRjaDogYm9vbGVhbiA9IHRydWU7ICAvL+S4jeaYr+WBnOatouiuoeaVsOeKtuaAge+8jOi/mOimgeaTjeS9nOeisOaSnuS6huaJjeiDveaBouWkjeiuoeaVsO+8jOmYsuatouaciei/nue7reWQiOaIkOeahOeQg+iHquWKqOiuoeaVsFxuICAgIHNldCBjb3VudGluZ1N3aXRjaChfY291bnRpbmdTd2l0Y2g6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fY291bnRpbmdTd2l0Y2ggPSBfY291bnRpbmdTd2l0Y2g7XG4gICAgfVxuXG4gICAgZ2V0IGNvdW50aW5nU3dpdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRpbmdTd2l0Y2g7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZUNvbmZpZy5zZXRDb25maWcoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgbG9hZGluZyAtLS0gIHN0YXJ0YCk7XG4gICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlID0gdGhpczsgICAgXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IG5ldyBjYy5WZWMyKDAsIC0xNzAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBuZXcgY2MuVmVjMigwLCAtMTcwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBuZXcgY2MuVmVjMigwLCAtMTcwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGluZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5CdG4ubm9kZSlcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMSwge3NjYWxlOiAxLjJ9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLCB7c2NhbGU6IDF9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuICAgIC8qKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2xvdHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8vc3BpbuaMiemSrueCueWHu1xuICAgIG9uU3BpbmVDbGljaygpe1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGluZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFuaW0gPSAgdGhpcy5zcGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGFuaW0ub25jZShjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXJlU3RlYWsoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7IFxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgYW5pbS5wbGF5KClcbiAgICB9XG4gICAgLy/lsZXnpLrotaLpkrHliqjnlLtcbiAgICBzaG93VGlyZVN0ZWFrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd1RpcmVTdGVha1wiKVxuXG4gICAgICAgIGlmICghdGhpcy5iaWd3aW5Ob2RlKSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChgcHJlZmFiL0JpZ1dpbk5vZGVgLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgQmlnV2luTm9kZSBwcmVmYWI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIEJpZ1dpbk5vZGUgcHJlZmFiOnN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWd3aW5Ob2RlID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lTm9kZVwiKS5hZGRDaGlsZCh0aGlzLmJpZ3dpbk5vZGUpXG4gICAgICAgICAgICAgICAgdGhpcy5iaWd3aW5Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmJpZ3dpbk5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgYW5pbS5vbmNlKGNjLkFuaW1hdGlvbi5FdmVudFR5cGUuRklOSVNIRUQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5wbGF5KFwiYmlnd2luaWRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVDb25maWcuZ2V0UGxheWFibGVBZFR5cGUgPT09IFBsYXlhYmxlQWRUeXBlLk10Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9tdGfmiZPlvIDkuIvpnaLov5nooYxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lRW5kJiZ3aW5kb3cuZ2FtZUVuZCgpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vIOWFiOaSrWlkbGVcbiAgICAgICAgICAgICAgICBhbmltLnBsYXkoXCJiaWd3aW5cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiBcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gZ2FtZUNvbmZpZy5nZXRXb3JkKFwidGlwTGJsXCIpO1xuICAgICAgICAvLyB0aGlzLmRvd25sb2FkLnN0cmluZyA9IGdhbWVDb25maWcuZ2V0V29yZChcImRvd25sb2FkXCIpO1xuICAgICAgICBcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvR3VpZGVQcmVmYWJcIiwgY2MuUHJlZmFiLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3VpZGVOb2RlID0gY2MuaW5zdGFudGlhdGUocmVzIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkQ2hpbGQoZ3VpZGVOb2RlKTtcbiAgICAgICAgICAgICAgICBndWlkZU5vZGUuZ2V0Q29tcG9uZW50KEd1aWRlU2NyaXB0KS5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbmZpZy5zZXRHdWlkZVNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxBc3NldHNNYW5hZ2VyLnJlbGVhc2VQcmVmYWIocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYWR1aW9Ub29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGdhbWVDb25maWcuZ2V0UGxheWFibGVBZFR5cGUgPT09IFBsYXlhYmxlQWRUeXBlLk10Zykge1xuICAgICAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93QWRkUmV3YXJkKCkge1xuICAgICAgICBsZXQgcmV3YXJkQW5pbU5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJld2FyZEFuaW1QcmVmYWIpO1xuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChyZXdhcmRBbmltTm9kZSwgR01aSW5kZXgucmV3YXJkQW5pKTtcblxuICAgIH1cblxuICAgIGdhbWVTY2VuZVdpbGxEaXNhcHBlYXIoKTogdm9pZCB7XG4gICAgICAgIGFkdWlvVG9vbHMuc3RvcEJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSgpXG4gICAgfVxuXG4gICAgcGF1c2VHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlOb2RlLnBhdXNlQWxsQWN0aW9ucygpO1xuICAgICAgICBhZHVpb1Rvb2xzLnBhdXNlQWxsRWZmZWN0KCk7XG4gICAgfVxuXG4gICAgcmVzdW1lR2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheU5vZGUucmVzdW1lQWxsQWN0aW9ucygpO1xuICAgICAgICBhZHVpb1Rvb2xzLnJlc3VzZUFsbEVmZmVjdCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BingoScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79d82012uFClZjxTc8BNoUJ', 'BingoScript');
// script/BingoScript.ts

// import aduioTools from "./aduioTools";
// import gameConfig from "./gameConfig";
// const {ccclass, property} = cc._decorator;
// @ccclass
// export default class BingoScript extends cc.Component {
//     @property(cc.Sprite)
//     bingoEn:cc.Sprite = null;
//     @property(cc.Sprite)
//     bingoCn:cc.Sprite = null;
//     @property(cc.Sprite)
//     lianjiSprite:cc.Sprite = null;
//     lianjiCount:number = 0;
//     // onLoad () {}
//     start () {
//         let bingoArray = ["txt_bingo_"  , "txt_bingocool_" , "txt_bingonice_", "txt_bingobang_" , "txt_supperbingo_"];
//         let lianjiArrat = ["txt_combo_two" ,"txt_combo_three" , "txt_combo_four" ,"txt_combo_five" ,"txt_combo_six" , "txt_combo_seven","txt_combo_eight"];
//         let bingCount = this.lianjiCount;
//         if(bingCount > 5) {
//             bingCount--;
//         }
//         if(bingCount > 6) {
//             bingCount--;
//         }
//         if(bingCount > 6) {
//             bingCount = 6;
//         }
//         let bingo = bingoArray[bingCount - 2]; 
//         let language = gameConfig.commonParm.language || 'Chinese'
//         if (language == "en" || language == "English"){
//             this.bingoCn.node.active = false;
//         }
//         cc.resources.load(`img/bingo/${bingo}cn` , cc.SpriteFrame , (err , res) => {
//             if(res){
//                 this.bingoCn.spriteFrame = res as cc.SpriteFrame;
//             }
//         })
//         cc.resources.load(`img/bingo/${bingo}en` , cc.SpriteFrame , (err , res) => {
//             if(res){
//                 this.bingoEn.spriteFrame = res as cc.SpriteFrame;
//             }
//         }) 
//         let lianCount = this.lianjiCount;
//         if(lianCount > 8){
//             lianCount = 8;
//         }  
//         let linaji = lianjiArrat[lianCount- 2]; 
//         cc.resources.load(`img/lianjiImg/${linaji}` , cc.SpriteFrame , (err , res) => {
//             if(res){
//                 this.lianjiSprite.spriteFrame = res as cc.SpriteFrame;
//             }
//         })
//         this.node.getComponent(cc.Animation).play();
//         aduioTools.playSimpleAduioEngine(bingCount - 2) 
//     }
//     // update (dt) {}
//     aniOver(){
//         this.node.destroy();
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmluZ29TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUd6Qyw2Q0FBNkM7QUFFN0MsV0FBVztBQUNYLDBEQUEwRDtBQUUxRCwyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBRWhDLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFFaEMsMkJBQTJCO0FBQzNCLHFDQUFxQztBQUVyQyw4QkFBOEI7QUFDOUIsc0JBQXNCO0FBRXRCLGlCQUFpQjtBQUNqQix5SEFBeUg7QUFFekgsOEpBQThKO0FBRzlKLDRDQUE0QztBQUM1Qyw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLFlBQVk7QUFFWiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLFlBQVk7QUFFWiw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLFlBQVk7QUFFWixrREFBa0Q7QUFFbEQscUVBQXFFO0FBQ3JFLDBEQUEwRDtBQUMxRCxnREFBZ0Q7QUFDaEQsWUFBWTtBQUdaLHVGQUF1RjtBQUN2Rix1QkFBdUI7QUFDdkIsb0VBQW9FO0FBQ3BFLGdCQUFnQjtBQUNoQixhQUFhO0FBRWIsdUZBQXVGO0FBQ3ZGLHVCQUF1QjtBQUN2QixvRUFBb0U7QUFDcEUsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFFZCw0Q0FBNEM7QUFDNUMsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsbURBQW1EO0FBQ25ELDBGQUEwRjtBQUMxRix1QkFBdUI7QUFDdkIseUVBQXlFO0FBQ3pFLGdCQUFnQjtBQUNoQixhQUFhO0FBRWIsdURBQXVEO0FBRXZELDJEQUEyRDtBQUUzRCxRQUFRO0FBRVIsd0JBQXdCO0FBRXhCLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYWR1aW9Ub29scyBmcm9tIFwiLi9hZHVpb1Rvb2xzXCI7XG4vLyBpbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XG5cbiBcbi8vIGNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZ29TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICBiaW5nb0VuOmNjLlNwcml0ZSA9IG51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuLy8gICAgIGJpbmdvQ246Y2MuU3ByaXRlID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4vLyAgICAgbGlhbmppU3ByaXRlOmNjLlNwcml0ZSA9IG51bGw7XG5cbi8vICAgICBsaWFuamlDb3VudDpudW1iZXIgPSAwO1xuLy8gICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4vLyAgICAgc3RhcnQgKCkge1xuLy8gICAgICAgICBsZXQgYmluZ29BcnJheSA9IFtcInR4dF9iaW5nb19cIiAgLCBcInR4dF9iaW5nb2Nvb2xfXCIgLCBcInR4dF9iaW5nb25pY2VfXCIsIFwidHh0X2JpbmdvYmFuZ19cIiAsIFwidHh0X3N1cHBlcmJpbmdvX1wiXTtcblxuLy8gICAgICAgICBsZXQgbGlhbmppQXJyYXQgPSBbXCJ0eHRfY29tYm9fdHdvXCIgLFwidHh0X2NvbWJvX3RocmVlXCIgLCBcInR4dF9jb21ib19mb3VyXCIgLFwidHh0X2NvbWJvX2ZpdmVcIiAsXCJ0eHRfY29tYm9fc2l4XCIgLCBcInR4dF9jb21ib19zZXZlblwiLFwidHh0X2NvbWJvX2VpZ2h0XCJdO1xuICAgICAgICBcblxuLy8gICAgICAgICBsZXQgYmluZ0NvdW50ID0gdGhpcy5saWFuamlDb3VudDtcbi8vICAgICAgICAgaWYoYmluZ0NvdW50ID4gNSkge1xuLy8gICAgICAgICAgICAgYmluZ0NvdW50LS07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBpZihiaW5nQ291bnQgPiA2KSB7XG4vLyAgICAgICAgICAgICBiaW5nQ291bnQtLTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGlmKGJpbmdDb3VudCA+IDYpIHtcbi8vICAgICAgICAgICAgIGJpbmdDb3VudCA9IDY7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgYmluZ28gPSBiaW5nb0FycmF5W2JpbmdDb3VudCAtIDJdOyBcbiAgICAgICAgXG4vLyAgICAgICAgIGxldCBsYW5ndWFnZSA9IGdhbWVDb25maWcuY29tbW9uUGFybS5sYW5ndWFnZSB8fCAnQ2hpbmVzZSdcbi8vICAgICAgICAgaWYgKGxhbmd1YWdlID09IFwiZW5cIiB8fCBsYW5ndWFnZSA9PSBcIkVuZ2xpc2hcIil7XG4vLyAgICAgICAgICAgICB0aGlzLmJpbmdvQ24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYGltZy9iaW5nby8ke2JpbmdvfWNuYCAsIGNjLlNwcml0ZUZyYW1lICwgKGVyciAsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYocmVzKXtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmJpbmdvQ24uc3ByaXRlRnJhbWUgPSByZXMgYXMgY2MuU3ByaXRlRnJhbWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYGltZy9iaW5nby8ke2JpbmdvfWVuYCAsIGNjLlNwcml0ZUZyYW1lICwgKGVyciAsIHJlcykgPT4ge1xuLy8gICAgICAgICAgICAgaWYocmVzKXtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmJpbmdvRW4uc3ByaXRlRnJhbWUgPSByZXMgYXMgY2MuU3ByaXRlRnJhbWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pIFxuXG4vLyAgICAgICAgIGxldCBsaWFuQ291bnQgPSB0aGlzLmxpYW5qaUNvdW50O1xuLy8gICAgICAgICBpZihsaWFuQ291bnQgPiA4KXtcbi8vICAgICAgICAgICAgIGxpYW5Db3VudCA9IDg7XG4vLyAgICAgICAgIH0gIFxuLy8gICAgICAgICBsZXQgbGluYWppID0gbGlhbmppQXJyYXRbbGlhbkNvdW50LSAyXTsgXG4vLyAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGBpbWcvbGlhbmppSW1nLyR7bGluYWppfWAgLCBjYy5TcHJpdGVGcmFtZSAsIChlcnIgLCByZXMpID0+IHtcbi8vICAgICAgICAgICAgIGlmKHJlcyl7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5saWFuamlTcHJpdGUuc3ByaXRlRnJhbWUgPSByZXMgYXMgY2MuU3ByaXRlRnJhbWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICAgIFxuLy8gICAgICAgICBhZHVpb1Rvb2xzLnBsYXlTaW1wbGVBZHVpb0VuZ2luZShiaW5nQ291bnQgLSAyKSBcbiAgICAgICAgXG4vLyAgICAgfVxuXG4vLyAgICAgLy8gdXBkYXRlIChkdCkge31cblxuLy8gICAgIGFuaU92ZXIoKXtcbi8vICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbi8vICAgICB9XG4vLyB9XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/redbagFly.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cd4cSsdbJIAI8F/Gt1Kg54', 'redbagFly');
// script/redbagFly.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var redbagFly = /** @class */ (function (_super) {
    __extends(redbagFly, _super);
    function redbagFly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        return _this;
        // async changeSprite() {
        //     let pay1sp = gameConfig.getRedbag(1);
        //     let sp: any = ResMgr.loadResourcesAsset("img/rewardImg/" + pay1sp, cc.SpriteFrame)
        //     return sp;
        // }
        // update (dt) {}
    }
    redbagFly.prototype.start = function () {
        // this.changeSprite().then(r => {
        //     // console.log("changeSpritethen")
        //     this.sprite.spriteFrame = r
        // })
    };
    __decorate([
        property(cc.Sprite)
    ], redbagFly.prototype, "sprite", void 0);
    redbagFly = __decorate([
        ccclass
    ], redbagFly);
    return redbagFly;
}(cc.Component));
exports.default = redbagFly;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcmVkYmFnRmx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0JDO1FBakJHLFlBQU0sR0FBYyxJQUFJLENBQUM7O1FBU3pCLHlCQUF5QjtRQUV6Qiw0Q0FBNEM7UUFDNUMseUZBQXlGO1FBQ3pGLGlCQUFpQjtRQUNqQixJQUFJO1FBRUosaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyx5QkFBSyxHQUFMO1FBQ0ksa0NBQWtDO1FBQ2xDLHlDQUF5QztRQUN6QyxrQ0FBa0M7UUFDbEMsS0FBSztJQUNULENBQUM7SUFQRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBSFIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9CN0I7SUFBRCxnQkFBQztDQXBCRCxBQW9CQyxDQXBCc0MsRUFBRSxDQUFDLFNBQVMsR0FvQmxEO2tCQXBCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XG5pbXBvcnQge1Jlc01ncn0gZnJvbSBcIi4vdXRpbHMvUmVzTWdyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWRiYWdGbHkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VTcHJpdGUoKS50aGVuKHIgPT4ge1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJjaGFuZ2VTcHJpdGV0aGVuXCIpXG4gICAgICAgIC8vICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHJcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICAvLyBhc3luYyBjaGFuZ2VTcHJpdGUoKSB7XG5cbiAgICAvLyAgICAgbGV0IHBheTFzcCA9IGdhbWVDb25maWcuZ2V0UmVkYmFnKDEpO1xuICAgIC8vICAgICBsZXQgc3A6IGFueSA9IFJlc01nci5sb2FkUmVzb3VyY2VzQXNzZXQoXCJpbWcvcmV3YXJkSW1nL1wiICsgcGF5MXNwLCBjYy5TcHJpdGVGcmFtZSlcbiAgICAvLyAgICAgcmV0dXJuIHNwO1xuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/qiuScript/qiuCollisionScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afce9p0/DFAIY3Z4UMTYQVw', 'qiuCollisionScript');
// script/qiuScript/qiuCollisionScript.ts

// import boomScript from "../boomScript"; 
// import JsbSdkScript from "../PlatformInteraction/JsbSdkScript";
// import tireSteakScript from "../tireSteakScript";
// import GameManager from "./GameManager";
// import qiuMoveScript from "./qiuMoveScript";
// const { ccclass, property } = cc._decorator;
// export type QiuInfo = {
//     index: number,
//     pos: cc.Vec2,
//     speed: cc.Vec2
//     rigidBodyType: cc.RigidBodyType
// }
// @ccclass
// export default class qiuCollisionScript extends cc.Component {
//     @property(cc.Prefab)
//     sparkPrefab: cc.Prefab = null;
//     @property(cc.Sprite)
//     qiuSprite: cc.Sprite = null;
//     @property(cc.Sprite)
//     txtSprite: cc.Sprite = null;
//     @property([cc.SpriteFrame])
//     qiuSpriteFrameArray: Array<cc.SpriteFrame> = [];
//     @property([cc.SpriteFrame])
//     txtSpriteFrameArray: Array<cc.SpriteFrame> = [];
//     @property(cc.Prefab)
//     scorePrefab: cc.Prefab = null;
//     @property(cc.Prefab)
//     mergeBoomPrefab:cc.Prefab = null;
//     targetNode:cc.Node = null
//     leftNode:cc.Node = null
//     redbag:cc.Node = null
//     scoreNode: cc.Node = null;
//     perpetualAttackCount = 0;
//     get qiuInfo(): QiuInfo {
//         let rType = this.node.getComponent(cc.RigidBody).type;
//         let velocity = cc.v2(0, 0)
//         if (rType == cc.RigidBodyType.Dynamic) {
//             velocity = this.node.getComponent(cc.RigidBody).linearVelocity
//         }
//         let info: QiuInfo = {
//             index: this.index,
//             pos: this.node.getPosition(),
//             speed: velocity,
//             rigidBodyType: rType
//         }
//         return info
//     }
//     private _isDeath: boolean = false;
//     set isDeath(isDeath: boolean) {
//         this._isDeath = isDeath;
//         if (isDeath) {
//             this.node.getComponent(cc.PhysicsCircleCollider).radius = 0;
//             this.node.getComponent(cc.PhysicsCircleCollider).apply();
//         }
//     }
//     get isDeath() {
//         return this._isDeath;
//     }
//     tween: cc.Tween = null;
//     paTween: cc.Tween = null;
//     scaleTween: cc.Tween = null;
//     isspark = false;
//     collisionTime: number = 0;
//     collisionPoint: cc.Vec2 = null;
//     gameOver() {
//         this._isDeath = true; 
//     }
//     private _index: number;
//     public get index() {
//         return this._index;
//     }
//     public set index(index: number) {
//         this._index = index;
//         if (index > 10) {
//             return
//         }
//         this.qiuSprite.spriteFrame = this.qiuSpriteFrameArray[index];
//         this.txtSprite.spriteFrame = this.txtSpriteFrameArray[index];
//         let moiveScript = this.getComponent(qiuMoveScript);
//         if (cc.isValid(moiveScript, true)) {
//             moiveScript.lightyNode.height = this.qiuSprite.node.height;
//             moiveScript.lightyNode.width = 214 * this.qiuSprite.node.height * 1.0 / 83;
//         }
//         this.node.width = this.qiuSprite.node.width;
//         this.node.height = this.qiuSprite.node.height;
//     }
//     levelUp() {
//         let oriWidth = this.node.width;
//         this.index++;
//         if (this.index == 9){
//             JsbSdkScript.buryPoint("debug_1024_done","")
//         }else if(this.index == 10){
//             JsbSdkScript.buryPoint("debug_2048_done","")
//         }
//         let width = this.node.width;
//         this.node.scale = oriWidth * 1.0 / width;
//         this.getComponent(cc.PhysicsCircleCollider).radius = oriWidth / 2 - 1;
//         this.getComponent(cc.PhysicsCircleCollider).apply();
//         if (cc.isValid(this.scaleTween, true)) {
//             this.scaleTween.stop();
//         }
//         this.scaleTween = cc.tween(this.node)
//             .parallel(
//                 cc.tween().delay(0.1)
//                     .call(() => {
//                         this.getComponent(cc.PhysicsCircleCollider).radius = width / 2 - 1;
//                         this.getComponent(cc.PhysicsCircleCollider).apply();
//                         this.isDeath = false;
//                     }),
//                 cc.tween(this.node)
//                     .to(0.15, { scale: 1.15 })
//                     .to(0.3, { scale: 1.0 })
//             )
//             // .to(0.18, { scale: 1})
//             .start()
//         let qiuNode = this.node.getChildByName("qiu");
//         let qiuZindex = qiuNode.zIndex;
//         let txtNode = this.node.getChildByName("txt");
//         if (cc.isValid(this.tween, true)) {
//             this.tween.stop();
//         }
//         txtNode.zIndex = qiuNode.zIndex + 1;
//         txtNode.setPosition(cc.v2(0, 0));
//         txtNode.scale = 1.0;
//         let rate = 1.0;
//         for (let i = 0; i < this.index; i++) {
//             rate *= 0.9;
//         }
//         let scale = this.node.width * rate / 80.0;
//         this.tween = cc.tween(txtNode)
//             .delay(0.1)
//             .to(0.15 * scale, { position: cc.v3(this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex - 1;
//             })
//             .to(0.2 * scale, { position: cc.v3(-this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex + 1;
//             })
//             .to(0.1 * scale, { position: cc.v3(0, 0, 0), scaleX: 1.0, scaleY: 1.0, skewY: 0 })
//             .to(0.1 * scale, { position: cc.v3(this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex - 1;
//             })
//             .to(0.2 * scale, { position: cc.v3(-this.node.width / 2, 0, 0), scaleX: 0.0, scaleY: 0.7 })
//             .call(() => {
//                 txtNode.zIndex = qiuZindex + 1;
//             })
//             .to(0.1 * scale, { position: cc.v3(0, 0, 0), scaleX: 1.0, scaleY: 1.0 })
//             .start()
//     }
//     initData(index) {
//         // this.currentIndex = index;
//         this.index = index;
//         this.getComponent(cc.PhysicsCircleCollider).radius = this.node.height / 2 - 1;
//         this.getComponent(cc.PhysicsCircleCollider).apply();
//     }
//     // protected onDestroy(): void {
//     //     console.log(`qiuCollisionScript onDestroy`);
//     // }
//     onLoad () {
//         this.targetNode = cc.find("Canvas/gameNode/gameLayer/UpRewardNode/moneyID/label");
//         this.leftNode = cc.find("Canvas/leftNode/label");
//     }
//     start() {
//     }
//     // update (dt) {}
//     onBeginContact(contact: cc.PhysicsContact, selfConllider, otherCollider) {
//         if (otherCollider.node.group == "floor" || otherCollider.node.group == "qiuqiu") {
//             // if(cc.isValid(GameManager.Instance.tempQiu,true) && cc.isValid(this.node , true) ) {
//             //     // if(GameManager.Instance.tempQiu.name != null && this.node.name != null) {
//             //         if( GameManager.Instance.tempQiu.name === this.node.name) {  
//             //             GameManager.Instance.tempQiu = null; 
//             //         }
//             //     // }
//             // }
//             let com1: qiuMoveScript = selfConllider.getComponent(qiuMoveScript);
//             if (cc.isValid(com1, true)) {
//                 com1.isCollsion = true;
//                 GameManager.Instance.resetCounting();  
//             }
//             // let com2: qiuMoveScript = otherCollider.getComponent(qiuMoveScript);
//             // if (cc.isValid(com2, true)) {
//             //     com2.isCollsion = true;
//             // }
//         }
//         if (selfConllider.node.group == "qiuqiu" && otherCollider.node.group == "qiuqiu") { 
//             if(GameManager.Instance.isOver) {
//                 return
//             }
//             if (cc.isValid(GameManager.Instance.targetQiu, true)) {
//                 if (GameManager.Instance.targetQiu == selfConllider.node) {
//                     if (GameManager.Instance.targetQiu.getComponent(cc.RigidBody).type == cc.RigidBodyType.Static) {
//                         GameManager.Instance.gameOver()
//                         return
//                     } 
//                 }
//             }
//             if (selfConllider.node.y < otherCollider.node.y) {
//                 return
//             }
//             let selfIndex = this.index;
//             let otherCollisionScript: qiuCollisionScript = otherCollider.getComponent(qiuCollisionScript);
//             let otherIndex = otherCollisionScript.index;
//             let selfDeath = this.isDeath;
//             let otherDeath = otherCollisionScript.isDeath;
//             // 融合
//             if (!selfDeath && !otherDeath && selfIndex == otherIndex) {
//                 if (this.index >= 10) {
//                     return
//                 }
//                 otherCollisionScript.isDeath = true;
//                 this.getComponent(qiuCollisionScript).isDeath = true;
//                 let pos1 = this.node.getPosition();
//                 let pos2 = otherCollider.node.getPosition();
//                 let pos = cc.v3(pos1.x + (pos2.x - pos1.x) * 9 / 10, pos1.y + (pos2.y - pos1.y) * 9 / 10, 0);
//                 // let pos = cc.v3(pos2.x ,  pos2.y , 0); 
//                         // let boomNode = cc.instantiate(this.mergeBoomPrefab);
//                         // boomNode.getComponent(boomScript).targetRadius = this.node.width;
//                         // boomNode.getComponent(boomScript).index = this.index;
//                         // boomNode.setPosition(pos);
//                         // this.node.parent.addChild(boomNode);
//                 this.playBoomAnimation(pos);
//                 cc.resources.load("prefab/redbagPrefab", cc.Prefab, (err, res) => {
//                     if (res){
//                         this.redbag = cc.instantiate(res as unknown as cc.Prefab);
//                         this.redbag.setPosition(this.node.getPosition())
//                         cc.find("Canvas").addChild(this.redbag);
//                         let targetNode
//                         if (cc.view.getFrameSize().width > cc.view.getFrameSize().height){
//                             targetNode = this.leftNode
//                         }else{
//                             targetNode = this.targetNode
//                         }
//                         let tartgetPos = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
//                         let pos1 = this.redbag.convertToNodeSpaceAR(tartgetPos);
//                         let pos = cc.v2(pos1.x + targetNode.width / 2, pos1.y);
//                         cc.tween(this.redbag)
//                             .bezierBy(1.0, cc.v2(pos.x / 4, 500), cc.v2(pos.x * 3 / 4, 500), pos)
//                             .to(0.1, { opacity: 0 })
//                             .start()
//                     }
//                 })
//                 if (cc.isValid(this.scoreNode, true) && cc.isValid(otherCollisionScript.scoreNode, true)) {
//                     this.scoreNode.getComponent(tireSteakScript).score += otherCollisionScript.scoreNode.getComponent(tireSteakScript).score;
//                     otherCollisionScript.scoreNode.destroy()
//                 }
//                 else if (cc.isValid(this.scoreNode, true) == false) {
//                     if (cc.isValid(otherCollisionScript.scoreNode, true)) {
//                         this.scoreNode = otherCollisionScript.scoreNode;
//                     }
//                     else {
//                         this.scoreNode = cc.instantiate(this.scorePrefab);
//                         GameManager.Instance.displayNode.addChild(this.scoreNode);
//                     }
//                 }
//                 this.scoreNode.getComponent(tireSteakScript).score += (this.index + 1);
//                 this.scoreNode.setPosition(pos2);
//                 GameManager.Instance.synthesizeQiu(this.index + 1, pos, otherCollider.node, this.node);
//                 let otherPaCount = otherCollider.getComponent(qiuCollisionScript).perpetualAttackCount;
//                 let selfPaCount = selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount;
//                 let maxCount = Math.max(otherPaCount, selfPaCount)
//                 selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount = maxCount + 1;
//                 if (cc.isValid(this.paTween, true)) {
//                     this.paTween.stop();
//                 }
//                 this.paTween = cc.tween(selfConllider.node)
//                     .delay(0.7)
//                     .call(() => {
//                         let selfPaCount = selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount; 
//                         selfConllider.getComponent(qiuCollisionScript).perpetualAttackCount = 0;
//                         if (cc.isValid(this.scoreNode, true)) {
//                             this.scoreNode.getComponent(tireSteakScript).action();
//                             this.scoreNode = null;
//                         }
//                     })
//                     .start();
//                 let time = 0.1;
//                 for (let i = 0; i < this.index; i++) {
//                     time *= 1.1;
//                 }
//                 // console.log(`merget time ${this.index} | ${time}`);
//                 cc.tween(otherCollider.node)
//                     .to(time, { position: pos, scale: 0 })
//                     .call(() => {
//                         otherCollider.node.destroy();
//                     })
//                     .start();
//                 cc.tween(this.node)
//                     .to(time, { position: pos })
//                     .call(() => {
//                         if (cc.isValid(selfConllider.node, true) && this.index == otherIndex) {
//                             this.levelUp();
//                         }
//                     })
//                     .start();
//             }
//             else if (selfIndex != otherIndex) {
//                 this.isspark = true;
//             }
//         }
//     }
//     playBoomAnimation(pos)
//     {
//         let boomNode = cc.instantiate(this.mergeBoomPrefab);
//         boomNode.getComponent(boomScript).targetRadius = this.node.width;
//         boomNode.getComponent(boomScript).index = this.index;
//         boomNode.setPosition(pos);
//         this.node.parent.addChild(boomNode);
//     }
//     onEndContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider): void {
//         if (selfCollider.node.group == "qiuqiu" && otherCollider.node.group == "qiuqiu") {
//             if (selfCollider.node.y < otherCollider.node.y) {
//                 return
//             }
//             if (this.isspark) {
//                 this.isspark = false;
//             }
//         }
//     }
//     onPostSolve(contact: cc.PhysicsContact, selfConllider, otherCollider) {
//         if (selfConllider.node.group == "qiuqiu" && otherCollider.node.group == "qiuqiu") {
//             if (selfConllider.node.y < otherCollider.node.y) {
//                 return;
//             }
//             if (!this.isspark) {
//                 return;
//             }
//             let selfIndex = this.index;
//             let otherIndex = otherCollider.getComponent(qiuCollisionScript).index;
//             if (selfIndex != otherIndex) {
//                 let manifoldPoints: Array<cc.ManifoldPoint> = contact.getManifold().points;
//                 if (manifoldPoints != null && manifoldPoints.length > 0) {
//                     let manifoldPoint = manifoldPoints[0];
//                     if (Math.abs(manifoldPoint.normalImpulse) >= 8000 || (Math.abs(manifoldPoint.tangentImpulse) >= 8000)) {
//                         // if ((Math.pow(manifoldPoint.normalImpulse , 2) + Math.pow(manifoldPoint.tangentImpulse , 2)) > 500000000) {
//                         // console.log(`onPostSolve ${selfIndex} | ${otherIndex}`);
//                         let worldPoints = contact.getWorldManifold().points;
//                         if (worldPoints != null && worldPoints.length > 0) {
//                             let nowTime = (new Date()).getTime();
//                             if (this.collisionTime > 0 && Math.abs(this.collisionTime - nowTime) < 2000) {
//                                 return
//                             }
//                             let point = worldPoints[0];
//                             let point1 = this.node.parent.convertToNodeSpaceAR(point);
//                             // console.log(`worldPoints ${point1}`);
//                             if (!(this.collisionPoint && Math.abs(this.collisionPoint.x - point1.x) < 20 && Math.abs(this.collisionPoint.y - point1.y) < 20)) {
//                                 // console.log(`worldPoints ${point1}  | ${nowTime}  |  ${this.collisionTime} | ${Math.pow(manifoldPoint.normalImpulse, 2) + Math.pow(manifoldPoint.tangentImpulse, 2)}`);
//                                 let sparkNode = cc.instantiate(this.sparkPrefab);
//                                 sparkNode.setPosition(point1);
//                                 this.node.parent.addChild(sparkNode);
//                             }
//                             this.collisionPoint = point1;
//                             this.collisionTime = nowTime;
//                         }
//                         // console.log(`manifoldPoint: ${manifoldPoint.normalImpulse} | ${manifoldPoint.tangentImpulse}`);
//                     }
//                 }
//             }
//         }
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcWl1U2NyaXB0L3FpdUNvbGxpc2lvblNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0Msa0VBQWtFO0FBQ2xFLG9EQUFvRDtBQUNwRCwyQ0FBMkM7QUFDM0MsK0NBQStDO0FBRS9DLCtDQUErQztBQUUvQywwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsc0NBQXNDO0FBQ3RDLElBQUk7QUFFSixXQUFXO0FBQ1gsaUVBQWlFO0FBRWpFLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFFckMsMkJBQTJCO0FBQzNCLG1DQUFtQztBQUVuQywyQkFBMkI7QUFDM0IsbUNBQW1DO0FBRW5DLGtDQUFrQztBQUNsQyx1REFBdUQ7QUFFdkQsa0NBQWtDO0FBQ2xDLHVEQUF1RDtBQUV2RCwyQkFBMkI7QUFDM0IscUNBQXFDO0FBRXJDLDJCQUEyQjtBQUMzQix3Q0FBd0M7QUFFeEMsZ0NBQWdDO0FBRWhDLDhCQUE4QjtBQUU5Qiw0QkFBNEI7QUFHNUIsaUNBQWlDO0FBRWpDLGdDQUFnQztBQUVoQywrQkFBK0I7QUFDL0IsaUVBQWlFO0FBQ2pFLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsNkVBQTZFO0FBQzdFLFlBQVk7QUFFWixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLDRDQUE0QztBQUM1QywrQkFBK0I7QUFDL0IsbUNBQW1DO0FBQ25DLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsUUFBUTtBQUVSLHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUN6QiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBQ3hFLFlBQVk7QUFDWixRQUFRO0FBRVIsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyxRQUFRO0FBR1IsOEJBQThCO0FBRTlCLGdDQUFnQztBQUVoQyxtQ0FBbUM7QUFFbkMsdUJBQXVCO0FBRXZCLGlD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LHlGQUF5RjtBQUd6Rix1RUFBdUU7QUFDdkUsa0tBQWtLO0FBQ2xLLDZNQUE2TTtBQUU3TSxvRkFBb0Y7QUFDcEYsaUVBQWlFO0FBQ2pFLHdFQUF3RTtBQUN4RSxnQ0FBZ0M7QUFDaEMsNERBQTREO0FBQzVELDREQUE0RDtBQUU1RCw0QkFBNEI7QUFDNUIsNkhBQTZIO0FBQzdILHdCQUF3QjtBQUN4QixvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBib29tU2NyaXB0IGZyb20gXCIuLi9ib29tU2NyaXB0XCI7IFxuLy8gaW1wb3J0IEpzYlNka1NjcmlwdCBmcm9tIFwiLi4vUGxhdGZvcm1JbnRlcmFjdGlvbi9Kc2JTZGtTY3JpcHRcIjtcbi8vIGltcG9ydCB0aXJlU3RlYWtTY3JpcHQgZnJvbSBcIi4uL3RpcmVTdGVha1NjcmlwdFwiO1xuLy8gaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgcWl1TW92ZVNjcmlwdCBmcm9tIFwiLi9xaXVNb3ZlU2NyaXB0XCI7XG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIGV4cG9ydCB0eXBlIFFpdUluZm8gPSB7XG4vLyAgICAgaW5kZXg6IG51bWJlcixcbi8vICAgICBwb3M6IGNjLlZlYzIsXG4vLyAgICAgc3BlZWQ6IGNjLlZlYzJcbi8vICAgICByaWdpZEJvZHlUeXBlOiBjYy5SaWdpZEJvZHlUeXBlXG4vLyB9XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBxaXVDb2xsaXNpb25TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlByZWZhYilcbi8vICAgICBzcGFya1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4vLyAgICAgcWl1U3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbi8vICAgICB0eHRTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbi8vICAgICBxaXVTcHJpdGVGcmFtZUFycmF5OiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBbXTtcblxuLy8gICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuLy8gICAgIHR4dFNwcml0ZUZyYW1lQXJyYXk6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IFtdO1xuXG4vLyAgICAgQHByb3BlcnR5KGNjLlByZWZhYilcbi8vICAgICBzY29yZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4vLyAgICAgbWVyZ2VCb29tUHJlZmFiOmNjLlByZWZhYiA9IG51bGw7XG5cbi8vICAgICB0YXJnZXROb2RlOmNjLk5vZGUgPSBudWxsXG5cbi8vICAgICBsZWZ0Tm9kZTpjYy5Ob2RlID0gbnVsbFxuXG4vLyAgICAgcmVkYmFnOmNjLk5vZGUgPSBudWxsXG5cblxuLy8gICAgIHNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICBwZXJwZXR1YWxBdHRhY2tDb3VudCA9IDA7XG5cbi8vICAgICBnZXQgcWl1SW5mbygpOiBRaXVJbmZvIHtcbi8vICAgICAgICAgbGV0IHJUeXBlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGU7XG4vLyAgICAgICAgIGxldCB2ZWxvY2l0eSA9IGNjLnYyKDAsIDApXG4vLyAgICAgICAgIGlmIChyVHlwZSA9PSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWMpIHtcbi8vICAgICAgICAgICAgIHZlbG9jaXR5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBsZXQgaW5mbzogUWl1SW5mbyA9IHtcbi8vICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuLy8gICAgICAgICAgICAgcG9zOiB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSxcbi8vICAgICAgICAgICAgIHNwZWVkOiB2ZWxvY2l0eSxcbi8vICAgICAgICAgICAgIHJpZ2lkQm9keVR5cGU6IHJUeXBlXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGluZm9cbi8vICAgICB9XG5cbi8vICAgICBwcml2YXRlIF9pc0RlYXRoOiBib29sZWFuID0gZmFsc2U7XG4vLyAgICAgc2V0IGlzRGVhdGgoaXNEZWF0aDogYm9vbGVhbikge1xuLy8gICAgICAgICB0aGlzLl9pc0RlYXRoID0gaXNEZWF0aDtcbi8vICAgICAgICAgaWYgKGlzRGVhdGgpIHtcbi8vICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSAwO1xuLy8gICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLmFwcGx5KCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBnZXQgaXNEZWF0aCgpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVhdGg7XG4vLyAgICAgfVxuXG4gICAgXG4vLyAgICAgdHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuLy8gICAgIHBhVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuLy8gICAgIHNjYWxlVHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcblxuLy8gICAgIGlzc3BhcmsgPSBmYWxzZTtcblxuLy8gICAgIGNvbGxpc2lvblRpbWU6IG51bWJlciA9IDA7XG4vLyAgICAgY29sbGlzaW9uUG9pbnQ6IGNjLlZlYzIgPSBudWxsO1xuXG5cbi8vICAgICBnYW1lT3ZlcigpIHtcbi8vICAgICAgICAgdGhpcy5faXNEZWF0aCA9IHRydWU7IFxuLy8gICAgIH1cblxuLy8gICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG4vLyAgICAgcHVibGljIGdldCBpbmRleCgpIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuLy8gICAgIH1cblxuLy8gICAgIHB1YmxpYyBzZXQgaW5kZXgoaW5kZXg6IG51bWJlcikge1xuLy8gICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuLy8gICAgICAgICBpZiAoaW5kZXggPiAxMCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICB0aGlzLnFpdVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucWl1U3ByaXRlRnJhbWVBcnJheVtpbmRleF07XG4vLyAgICAgICAgIHRoaXMudHh0U3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy50eHRTcHJpdGVGcmFtZUFycmF5W2luZGV4XTtcblxuLy8gICAgICAgICBsZXQgbW9pdmVTY3JpcHQgPSB0aGlzLmdldENvbXBvbmVudChxaXVNb3ZlU2NyaXB0KTtcbi8vICAgICAgICAgaWYgKGNjLmlzVmFsaWQobW9pdmVTY3JpcHQsIHRydWUpKSB7XG4vLyAgICAgICAgICAgICBtb2l2ZVNjcmlwdC5saWdodHlOb2RlLmhlaWdodCA9IHRoaXMucWl1U3ByaXRlLm5vZGUuaGVpZ2h0O1xuLy8gICAgICAgICAgICAgbW9pdmVTY3JpcHQubGlnaHR5Tm9kZS53aWR0aCA9IDIxNCAqIHRoaXMucWl1U3ByaXRlLm5vZGUuaGVpZ2h0ICogMS4wIC8gODM7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICB0aGlzLm5vZGUud2lkdGggPSB0aGlzLnFpdVNwcml0ZS5ub2RlLndpZHRoO1xuLy8gICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5xaXVTcHJpdGUubm9kZS5oZWlnaHQ7XG4vLyAgICAgfVxuXG4vLyAgICAgbGV2ZWxVcCgpIHtcbi8vICAgICAgICAgbGV0IG9yaVdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuXG4vLyAgICAgICAgIHRoaXMuaW5kZXgrKztcbi8vICAgICAgICAgaWYgKHRoaXMuaW5kZXggPT0gOSl7XG4vLyAgICAgICAgICAgICBKc2JTZGtTY3JpcHQuYnVyeVBvaW50KFwiZGVidWdfMTAyNF9kb25lXCIsXCJcIilcbi8vICAgICAgICAgfWVsc2UgaWYodGhpcy5pbmRleCA9PSAxMCl7XG4vLyAgICAgICAgICAgICBKc2JTZGtTY3JpcHQuYnVyeVBvaW50KFwiZGVidWdfMjA0OF9kb25lXCIsXCJcIilcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGxldCB3aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcblxuLy8gICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSBvcmlXaWR0aCAqIDEuMCAvIHdpZHRoO1xuLy8gICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IG9yaVdpZHRoIC8gMiAtIDE7XG4vLyAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcikuYXBwbHkoKTtcblxuLy8gICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnNjYWxlVHdlZW4sIHRydWUpKSB7XG4vLyAgICAgICAgICAgICB0aGlzLnNjYWxlVHdlZW4uc3RvcCgpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuc2NhbGVUd2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSlcbi8vICAgICAgICAgICAgIC5wYXJhbGxlbChcbi8vICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmRlbGF5KDAuMSlcbi8vICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSB3aWR0aCAvIDIgLSAxO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5hcHBseSgpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGVhdGggPSBmYWxzZTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSksXG4vLyAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4xNSwgeyBzY2FsZTogMS4xNSB9KVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxLjAgfSlcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgIC8vIC50bygwLjE4LCB7IHNjYWxlOiAxfSlcbi8vICAgICAgICAgICAgIC5zdGFydCgpXG5cbi8vICAgICAgICAgbGV0IHFpdU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaXVcIik7XG4vLyAgICAgICAgIGxldCBxaXVaaW5kZXggPSBxaXVOb2RlLnpJbmRleDtcbi8vICAgICAgICAgbGV0IHR4dE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIik7XG5cbi8vICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy50d2VlbiwgdHJ1ZSkpIHtcbi8vICAgICAgICAgICAgIHRoaXMudHdlZW4uc3RvcCgpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdHh0Tm9kZS56SW5kZXggPSBxaXVOb2RlLnpJbmRleCArIDE7XG4vLyAgICAgICAgIHR4dE5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICB0eHROb2RlLnNjYWxlID0gMS4wO1xuXG4vLyAgICAgICAgIGxldCByYXRlID0gMS4wO1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kZXg7IGkrKykge1xuLy8gICAgICAgICAgICAgcmF0ZSAqPSAwLjk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5ub2RlLndpZHRoICogcmF0ZSAvIDgwLjA7XG5cbi8vICAgICAgICAgdGhpcy50d2VlbiA9IGNjLnR3ZWVuKHR4dE5vZGUpXG4vLyAgICAgICAgICAgICAuZGVsYXkoMC4xKVxuLy8gICAgICAgICAgICAgLnRvKDAuMTUgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLndpZHRoIC8gMiwgMCwgMCksIHNjYWxlWDogMC4wLCBzY2FsZVk6IDAuNyB9KVxuLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHR4dE5vZGUuekluZGV4ID0gcWl1WmluZGV4IC0gMTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yICogc2NhbGUsIHsgcG9zaXRpb246IGNjLnYzKC10aGlzLm5vZGUud2lkdGggLyAyLCAwLCAwKSwgc2NhbGVYOiAwLjAsIHNjYWxlWTogMC43IH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdHh0Tm9kZS56SW5kZXggPSBxaXVaaW5kZXggKyAxO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC50bygwLjEgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIHNjYWxlWDogMS4wLCBzY2FsZVk6IDEuMCwgc2tld1k6IDAgfSlcbi8vICAgICAgICAgICAgIC50bygwLjEgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjModGhpcy5ub2RlLndpZHRoIC8gMiwgMCwgMCksIHNjYWxlWDogMC4wLCBzY2FsZVk6IDAuNyB9KVxuLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHR4dE5vZGUuekluZGV4ID0gcWl1WmluZGV4IC0gMTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAudG8oMC4yICogc2NhbGUsIHsgcG9zaXRpb246IGNjLnYzKC10aGlzLm5vZGUud2lkdGggLyAyLCAwLCAwKSwgc2NhbGVYOiAwLjAsIHNjYWxlWTogMC43IH0pXG4vLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdHh0Tm9kZS56SW5kZXggPSBxaXVaaW5kZXggKyAxO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC50bygwLjEgKiBzY2FsZSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIHNjYWxlWDogMS4wLCBzY2FsZVk6IDEuMCB9KVxuLy8gICAgICAgICAgICAgLnN0YXJ0KClcbi8vICAgICB9XG5cbi8vICAgICBpbml0RGF0YShpbmRleCkge1xuLy8gICAgICAgICAvLyB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuLy8gICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cbi8vICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSB0aGlzLm5vZGUuaGVpZ2h0IC8gMiAtIDE7XG4vLyAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcikuYXBwbHkoKTtcbi8vICAgICB9XG5cbi8vICAgICAvLyBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhgcWl1Q29sbGlzaW9uU2NyaXB0IG9uRGVzdHJveWApO1xuXG4vLyAgICAgLy8gfVxuLy8gICAgIG9uTG9hZCAoKSB7XG4vLyAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZU5vZGUvZ2FtZUxheWVyL1VwUmV3YXJkTm9kZS9tb25leUlEL2xhYmVsXCIpO1xuLy8gICAgICAgICB0aGlzLmxlZnROb2RlID0gY2MuZmluZChcIkNhbnZhcy9sZWZ0Tm9kZS9sYWJlbFwiKTtcbi8vICAgICB9XG5cbi8vICAgICBzdGFydCgpIHtcblxuLy8gICAgIH1cblxuLy8gICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbi8vICAgICBvbkJlZ2luQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbmxsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuXG4vLyAgICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUuZ3JvdXAgPT0gXCJmbG9vclwiIHx8IG90aGVyQ29sbGlkZXIubm9kZS5ncm91cCA9PSBcInFpdXFpdVwiKSB7XG4gICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gaWYoY2MuaXNWYWxpZChHYW1lTWFuYWdlci5JbnN0YW5jZS50ZW1wUWl1LHRydWUpICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlICwgdHJ1ZSkgKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gaWYoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGVtcFFpdS5uYW1lICE9IG51bGwgJiYgdGhpcy5ub2RlLm5hbWUgIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgLy8gICAgICAgICBpZiggR2FtZU1hbmFnZXIuSW5zdGFuY2UudGVtcFFpdS5uYW1lID09PSB0aGlzLm5vZGUubmFtZSkgeyAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UudGVtcFFpdSA9IG51bGw7IFxuLy8gICAgICAgICAgICAgLy8gICAgICAgICB9XG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gfVxuLy8gICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG5cbi8vICAgICAgICAgICAgIGxldCBjb20xOiBxaXVNb3ZlU2NyaXB0ID0gc2VsZkNvbmxsaWRlci5nZXRDb21wb25lbnQocWl1TW92ZVNjcmlwdCk7XG4vLyAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChjb20xLCB0cnVlKSkge1xuLy8gICAgICAgICAgICAgICAgIGNvbTEuaXNDb2xsc2lvbiA9IHRydWU7XG4vLyAgICAgICAgICAgICAgICAgR2FtZU1hbmFnZXIuSW5zdGFuY2UucmVzZXRDb3VudGluZygpOyAgXG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIC8vIGxldCBjb20yOiBxaXVNb3ZlU2NyaXB0ID0gb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQocWl1TW92ZVNjcmlwdCk7XG4vLyAgICAgICAgICAgICAvLyBpZiAoY2MuaXNWYWxpZChjb20yLCB0cnVlKSkge1xuLy8gICAgICAgICAgICAgLy8gICAgIGNvbTIuaXNDb2xsc2lvbiA9IHRydWU7XG4vLyAgICAgICAgICAgICAvLyB9XG5cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoc2VsZkNvbmxsaWRlci5ub2RlLmdyb3VwID09IFwicWl1cWl1XCIgJiYgb3RoZXJDb2xsaWRlci5ub2RlLmdyb3VwID09IFwicWl1cWl1XCIpIHsgXG4vLyAgICAgICAgICAgICBpZihHYW1lTWFuYWdlci5JbnN0YW5jZS5pc092ZXIpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKEdhbWVNYW5hZ2VyLkluc3RhbmNlLnRhcmdldFFpdSwgdHJ1ZSkpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1ID09IHNlbGZDb25sbGlkZXIubm9kZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZU1hbmFnZXIuSW5zdGFuY2UudGFyZ2V0UWl1LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGUgPT0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWMpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlLmdhbWVPdmVyKClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICAgICAgICAgICAgICB9IFxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgaWYgKHNlbGZDb25sbGlkZXIubm9kZS55IDwgb3RoZXJDb2xsaWRlci5ub2RlLnkpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgbGV0IHNlbGZJbmRleCA9IHRoaXMuaW5kZXg7XG4vLyAgICAgICAgICAgICBsZXQgb3RoZXJDb2xsaXNpb25TY3JpcHQ6IHFpdUNvbGxpc2lvblNjcmlwdCA9IG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCk7XG4vLyAgICAgICAgICAgICBsZXQgb3RoZXJJbmRleCA9IG90aGVyQ29sbGlzaW9uU2NyaXB0LmluZGV4O1xuXG4vLyAgICAgICAgICAgICBsZXQgc2VsZkRlYXRoID0gdGhpcy5pc0RlYXRoO1xuLy8gICAgICAgICAgICAgbGV0IG90aGVyRGVhdGggPSBvdGhlckNvbGxpc2lvblNjcmlwdC5pc0RlYXRoO1xuXG4vLyAgICAgICAgICAgICAvLyDono3lkIhcbi8vICAgICAgICAgICAgIGlmICghc2VsZkRlYXRoICYmICFvdGhlckRlYXRoICYmIHNlbGZJbmRleCA9PSBvdGhlckluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gMTApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIG90aGVyQ29sbGlzaW9uU2NyaXB0LmlzRGVhdGggPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkuaXNEZWF0aCA9IHRydWU7XG5cbi8vICAgICAgICAgICAgICAgICBsZXQgcG9zMSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xuLy8gICAgICAgICAgICAgICAgIGxldCBwb3MyID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKCk7XG4vLyAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYzKHBvczEueCArIChwb3MyLnggLSBwb3MxLngpICogOSAvIDEwLCBwb3MxLnkgKyAocG9zMi55IC0gcG9zMS55KSAqIDkgLyAxMCwgMCk7XG4vLyAgICAgICAgICAgICAgICAgLy8gbGV0IHBvcyA9IGNjLnYzKHBvczIueCAsICBwb3MyLnkgLCAwKTsgXG4gICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGJvb21Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5tZXJnZUJvb21QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGJvb21TY3JpcHQpLnRhcmdldFJhZGl1cyA9IHRoaXMubm9kZS53aWR0aDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvb21Ob2RlLmdldENvbXBvbmVudChib29tU2NyaXB0KS5pbmRleCA9IHRoaXMuaW5kZXg7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvb21Ob2RlLnNldFBvc2l0aW9uKHBvcyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJvb21Ob2RlKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnBsYXlCb29tQW5pbWF0aW9uKHBvcyk7XG4vLyAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWIvcmVkYmFnUHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcmVzKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRiYWcgPSBjYy5pbnN0YW50aWF0ZShyZXMgYXMgdW5rbm93biBhcyBjYy5QcmVmYWIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRiYWcuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKHRoaXMucmVkYmFnKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldE5vZGVcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMubGVmdE5vZGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLnRhcmdldE5vZGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJ0Z2V0UG9zID0gdGFyZ2V0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvczEgPSB0aGlzLnJlZGJhZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJ0Z2V0UG9zKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mihwb3MxLnggKyB0YXJnZXROb2RlLndpZHRoIC8gMiwgcG9zMS55KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucmVkYmFnKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iZXppZXJCeSgxLjAsIGNjLnYyKHBvcy54IC8gNCwgNTAwKSwgY2MudjIocG9zLnggKiAzIC8gNCwgNTAwKSwgcG9zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG5cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG5cbi8vICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnNjb3JlTm9kZSwgdHJ1ZSkgJiYgY2MuaXNWYWxpZChvdGhlckNvbGxpc2lvblNjcmlwdC5zY29yZU5vZGUsIHRydWUpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudCh0aXJlU3RlYWtTY3JpcHQpLnNjb3JlICs9IG90aGVyQ29sbGlzaW9uU2NyaXB0LnNjb3JlTm9kZS5nZXRDb21wb25lbnQodGlyZVN0ZWFrU2NyaXB0KS5zY29yZTtcbi8vICAgICAgICAgICAgICAgICAgICAgb3RoZXJDb2xsaXNpb25TY3JpcHQuc2NvcmVOb2RlLmRlc3Ryb3koKVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYy5pc1ZhbGlkKHRoaXMuc2NvcmVOb2RlLCB0cnVlKSA9PSBmYWxzZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChvdGhlckNvbGxpc2lvblNjcmlwdC5zY29yZU5vZGUsIHRydWUpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZSA9IG90aGVyQ29sbGlzaW9uU2NyaXB0LnNjb3JlTm9kZTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZVByZWZhYik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lTWFuYWdlci5JbnN0YW5jZS5kaXNwbGF5Tm9kZS5hZGRDaGlsZCh0aGlzLnNjb3JlTm9kZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zY29yZU5vZGUuZ2V0Q29tcG9uZW50KHRpcmVTdGVha1NjcmlwdCkuc2NvcmUgKz0gKHRoaXMuaW5kZXggKyAxKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZS5zZXRQb3NpdGlvbihwb3MyKTtcblxuLy8gICAgICAgICAgICAgICAgIEdhbWVNYW5hZ2VyLkluc3RhbmNlLnN5bnRoZXNpemVRaXUodGhpcy5pbmRleCArIDEsIHBvcywgb3RoZXJDb2xsaWRlci5ub2RlLCB0aGlzLm5vZGUpO1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IG90aGVyUGFDb3VudCA9IG90aGVyQ29sbGlkZXIuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkucGVycGV0dWFsQXR0YWNrQ291bnQ7XG5cbi8vICAgICAgICAgICAgICAgICBsZXQgc2VsZlBhQ291bnQgPSBzZWxmQ29ubGxpZGVyLmdldENvbXBvbmVudChxaXVDb2xsaXNpb25TY3JpcHQpLnBlcnBldHVhbEF0dGFja0NvdW50O1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IG1heENvdW50ID0gTWF0aC5tYXgob3RoZXJQYUNvdW50LCBzZWxmUGFDb3VudClcbi8vICAgICAgICAgICAgICAgICBzZWxmQ29ubGxpZGVyLmdldENvbXBvbmVudChxaXVDb2xsaXNpb25TY3JpcHQpLnBlcnBldHVhbEF0dGFja0NvdW50ID0gbWF4Q291bnQgKyAxO1xuXG5cbi8vICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnBhVHdlZW4sIHRydWUpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFUd2Vlbi5zdG9wKCk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIHRoaXMucGFUd2VlbiA9IGNjLnR3ZWVuKHNlbGZDb25sbGlkZXIubm9kZSlcbi8vICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNylcbi8vICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGZQYUNvdW50ID0gc2VsZkNvbmxsaWRlci5nZXRDb21wb25lbnQocWl1Q29sbGlzaW9uU2NyaXB0KS5wZXJwZXR1YWxBdHRhY2tDb3VudDsgXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGZDb25sbGlkZXIuZ2V0Q29tcG9uZW50KHFpdUNvbGxpc2lvblNjcmlwdCkucGVycGV0dWFsQXR0YWNrQ291bnQgPSAwO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnNjb3JlTm9kZSwgdHJ1ZSkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZS5nZXRDb21wb25lbnQodGlyZVN0ZWFrU2NyaXB0KS5hY3Rpb24oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTm9kZSA9IG51bGw7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuXG5cbi8vICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IDAuMTtcbi8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kZXg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgICAgICB0aW1lICo9IDEuMTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG1lcmdldCB0aW1lICR7dGhpcy5pbmRleH0gfCAke3RpbWV9YCk7XG5cbi8vICAgICAgICAgICAgICAgICBjYy50d2VlbihvdGhlckNvbGxpZGVyLm5vZGUpXG4vLyAgICAgICAgICAgICAgICAgICAgIC50byh0aW1lLCB7IHBvc2l0aW9uOiBwb3MsIHNjYWxlOiAwIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5kZXN0cm95KCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuLy8gICAgICAgICAgICAgICAgICAgICAudG8odGltZSwgeyBwb3NpdGlvbjogcG9zIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHNlbGZDb25sbGlkZXIubm9kZSwgdHJ1ZSkgJiYgdGhpcy5pbmRleCA9PSBvdGhlckluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbFVwKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZWxzZSBpZiAoc2VsZkluZGV4ICE9IG90aGVySW5kZXgpIHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmlzc3BhcmsgPSB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHBsYXlCb29tQW5pbWF0aW9uKHBvcylcbi8vICAgICB7XG4vLyAgICAgICAgIGxldCBib29tTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWVyZ2VCb29tUHJlZmFiKTtcbi8vICAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGJvb21TY3JpcHQpLnRhcmdldFJhZGl1cyA9IHRoaXMubm9kZS53aWR0aDtcbi8vICAgICAgICAgYm9vbU5vZGUuZ2V0Q29tcG9uZW50KGJvb21TY3JpcHQpLmluZGV4ID0gdGhpcy5pbmRleDtcbi8vICAgICAgICAgYm9vbU5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbi8vICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChib29tTm9kZSk7XG4vLyAgICAgfVxuLy8gICAgIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcik6IHZvaWQge1xuLy8gICAgICAgICBpZiAoc2VsZkNvbGxpZGVyLm5vZGUuZ3JvdXAgPT0gXCJxaXVxaXVcIiAmJiBvdGhlckNvbGxpZGVyLm5vZGUuZ3JvdXAgPT0gXCJxaXVxaXVcIikge1xuLy8gICAgICAgICAgICAgaWYgKHNlbGZDb2xsaWRlci5ub2RlLnkgPCBvdGhlckNvbGxpZGVyLm5vZGUueSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVyblxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaWYgKHRoaXMuaXNzcGFyaykge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuaXNzcGFyayA9IGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgb25Qb3N0U29sdmUoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb25sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbi8vICAgICAgICAgaWYgKHNlbGZDb25sbGlkZXIubm9kZS5ncm91cCA9PSBcInFpdXFpdVwiICYmIG90aGVyQ29sbGlkZXIubm9kZS5ncm91cCA9PSBcInFpdXFpdVwiKSB7XG4vLyAgICAgICAgICAgICBpZiAoc2VsZkNvbmxsaWRlci5ub2RlLnkgPCBvdGhlckNvbGxpZGVyLm5vZGUueSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgaWYgKCF0aGlzLmlzc3BhcmspIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBsZXQgc2VsZkluZGV4ID0gdGhpcy5pbmRleDtcbi8vICAgICAgICAgICAgIGxldCBvdGhlckluZGV4ID0gb3RoZXJDb2xsaWRlci5nZXRDb21wb25lbnQocWl1Q29sbGlzaW9uU2NyaXB0KS5pbmRleDtcbi8vICAgICAgICAgICAgIGlmIChzZWxmSW5kZXggIT0gb3RoZXJJbmRleCkge1xuXG4vLyAgICAgICAgICAgICAgICAgbGV0IG1hbmlmb2xkUG9pbnRzOiBBcnJheTxjYy5NYW5pZm9sZFBvaW50PiA9IGNvbnRhY3QuZ2V0TWFuaWZvbGQoKS5wb2ludHM7XG4vLyAgICAgICAgICAgICAgICAgaWYgKG1hbmlmb2xkUG9pbnRzICE9IG51bGwgJiYgbWFuaWZvbGRQb2ludHMubGVuZ3RoID4gMCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgbWFuaWZvbGRQb2ludCA9IG1hbmlmb2xkUG9pbnRzWzBdO1xuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKG1hbmlmb2xkUG9pbnQubm9ybWFsSW1wdWxzZSkgPj0gODAwMCB8fCAoTWF0aC5hYnMobWFuaWZvbGRQb2ludC50YW5nZW50SW1wdWxzZSkgPj0gODAwMCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICgoTWF0aC5wb3cobWFuaWZvbGRQb2ludC5ub3JtYWxJbXB1bHNlICwgMikgKyBNYXRoLnBvdyhtYW5pZm9sZFBvaW50LnRhbmdlbnRJbXB1bHNlICwgMikpID4gNTAwMDAwMDAwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb25Qb3N0U29sdmUgJHtzZWxmSW5kZXh9IHwgJHtvdGhlckluZGV4fWApO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd29ybGRQb2ludHMgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5wb2ludHM7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod29ybGRQb2ludHMgIT0gbnVsbCAmJiB3b3JsZFBvaW50cy5sZW5ndGggPiAwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vd1RpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpc2lvblRpbWUgPiAwICYmIE1hdGguYWJzKHRoaXMuY29sbGlzaW9uVGltZSAtIG5vd1RpbWUpIDwgMjAwMCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gd29ybGRQb2ludHNbMF07XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50MSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9pbnQpO1xuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgd29ybGRQb2ludHMgJHtwb2ludDF9YCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5jb2xsaXNpb25Qb2ludCAmJiBNYXRoLmFicyh0aGlzLmNvbGxpc2lvblBvaW50LnggLSBwb2ludDEueCkgPCAyMCAmJiBNYXRoLmFicyh0aGlzLmNvbGxpc2lvblBvaW50LnkgLSBwb2ludDEueSkgPCAyMCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHdvcmxkUG9pbnRzICR7cG9pbnQxfSAgfCAke25vd1RpbWV9ICB8ICAke3RoaXMuY29sbGlzaW9uVGltZX0gfCAke01hdGgucG93KG1hbmlmb2xkUG9pbnQubm9ybWFsSW1wdWxzZSwgMikgKyBNYXRoLnBvdyhtYW5pZm9sZFBvaW50LnRhbmdlbnRJbXB1bHNlLCAyKX1gKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhcmtOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcGFya1ByZWZhYik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXJrTm9kZS5zZXRQb3NpdGlvbihwb2ludDEpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHNwYXJrTm9kZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uUG9pbnQgPSBwb2ludDE7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25UaW1lID0gbm93VGltZTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG1hbmlmb2xkUG9pbnQ6ICR7bWFuaWZvbGRQb2ludC5ub3JtYWxJbXB1bHNlfSB8ICR7bWFuaWZvbGRQb2ludC50YW5nZW50SW1wdWxzZX1gKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PlatformInteraction/JsbSdkScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41ed2FE4o5It5I9A+CA81Ou', 'JsbSdkScript');
// script/PlatformInteraction/JsbSdkScript.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OC_RV_JSC_CLASS = "OCCBridge";
// const ANDROID_PATH = "com.taoni.android.answer.ui.activity.MainActivity"   
// const ANDROID_PATH = "org/cocos2dx/javascript/AppActivity" 
var ANDROID_PATH = "com.android.game.MainActivity";
var JsbSdkScript = /** @class */ (function () {
    function JsbSdkScript() {
        this.passRewardlistener = null;
        this.sceneListener = null;
        this.delegate = null;
        this.delegate = {
            getEveryRewardAmountCallBack: function (reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.getEveryRewardAmountCallBack != null) {
                    // console.log(`reportPassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.getEveryRewardAmountCallBack(reward);
                }
            },
            showVideoCallBack: function (reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.showVideoCallBack != null) {
                    // console.log(`receivePassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.showVideoCallBack(reward);
                }
            },
            gameSceneDisapear: function () {
                if (JsbSdkScript.Instance.sceneListener != null && JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear != null && undefined != JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear) {
                    JsbSdkScript.Instance.sceneListener.gameSceneWillDisappear();
                }
            },
            gameSceneOnResume: function () {
                if (JsbSdkScript.Instance.sceneListener != null && JsbSdkScript.Instance.sceneListener.gameSceneOnResume != null && undefined != JsbSdkScript.Instance.sceneListener.gameSceneOnResume) {
                    JsbSdkScript.Instance.sceneListener.gameSceneOnResume();
                }
            },
            getMergeRewardAmountCallBack: function (reward) {
                if (JsbSdkScript.Instance.passRewardlistener != null
                    && JsbSdkScript.Instance.passRewardlistener.getMergeRewardAmountCallBack != null) {
                    // console.log(`receivePassRewardCallBack ${reward}`);
                    JsbSdkScript.Instance.passRewardlistener.getMergeRewardAmountCallBack(reward);
                }
            },
        };
    }
    Object.defineProperty(JsbSdkScript, "Instance", {
        get: function () {
            if (JsbSdkScript._instance == null) {
                JsbSdkScript._instance = new JsbSdkScript();
            }
            return JsbSdkScript._instance;
        },
        enumerable: false,
        configurable: true
    });
    JsbSdkScript.getMergeReward = function () {
        // if (gameConfig.isWhiteBag) return;
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "getMergeReward", "()V");
        // }
    };
    JsbSdkScript.requestIsWhiteBao = function () {
        // let isWhiteBao;
        // if (cc.sys.os === cc.sys.OS_ANDROID) { 
        //     isWhiteBao = jsb.reflection.callStaticMethod(ANDROID_PATH, "requestIsWhiteBao", "()Z");
        // }
        // return isWhiteBao? isWhiteBao : false;;
        return false;
    };
    JsbSdkScript.getCommonParm = function () {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     return jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getCommonParm:");
        // }
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "getCommonParm", "()Ljava/lang/String;");
        // }
        // else {
        return {
            language: 'English',
            numberOfIntervals: 6
        };
        // }
    };
    JsbSdkScript.getTotalReward = function () {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     let totalReward = jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getTotalReward");
        //     return totalReward;
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     let totalReward = jsb.reflection.callStaticMethod(ANDROID_PATH, "getTotalReward", "()Ljava/lang/String;");
        //     if(totalReward != null && typeof totalReward == "string") {
        //         return totalReward;
        //     }  
        // }
        return "10";
    };
    JsbSdkScript.getMaxValueReward = function () {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     let totalReward = jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getTotalReward");
        //     return totalReward;
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     let totalReward = jsb.reflection.callStaticMethod(ANDROID_PATH, "getmaxValueReward", "()I");
        //     if(totalReward != null && typeof totalReward == "number") {
        //         return totalReward;
        //     }  
        // }
        return 10;
    };
    JsbSdkScript.getEveryRewardAmount = function () {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "getEveryRewardAmount:");
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) { 
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "getEveryRewardAmount", "()V");
        // }
        // else{
        //     setTimeout(() => {
        //         let model = {
        //             reward:"10.00",
        //             isnewplayer : 1,
        //         }
        //         let modelJson = JSON.stringify(model);
        //         JsbSdkScript.Instance.delegate.getEveryRewardAmountCallBack(modelJson);
        //     }, 0.2);
        // }
    };
    /**0视频广告 1插屏广告 2宝箱视频广告*/
    JsbSdkScript.showVideo = function (type) {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "showVideo:andIsHC:", `${type}`);
        // }
        // else if (cc.sys.os === cc.sys.OS_ANDROID) { 
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "showVideo", "(I)V", type);
        // }
        // else{
        //     setTimeout(() => {
        //         let model:ReceviceRPResultModel = {
        //             amount: "1.00",
        //         }
        //         let modelJson = JSON.stringify(model);
        //         JsbSdkScript.Instance.delegate.showVideoCallBack(modelJson);
        //     }, 0.2);
        // }
    };
    JsbSdkScript.showWithdraw = function () {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "showWithdraw:");
        // }
        //  if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "showWithdraw", "()V");
        // }
    };
    JsbSdkScript.buryPoint = function (eventname, jsondata) {
        //    if (cc.sys.os === cc.sys.OS_ANDROID) {
        //         jsb.reflection.callStaticMethod(ANDROID_PATH, "buryPoint", "(Ljava/lang/String;Ljava/lang/String;)V",eventname,jsondata);
        //     }
    };
    /**获取宝箱打开条件 */
    JsbSdkScript.getBaoXiaoCondition = function () {
        // let jsonstr = {isload: 1, freezetime: Date.now()}
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     try{
        //         let ret = jsb.reflection.callStaticMethod(ANDROID_PATH, "getBaoXiaoCondition", "()Ljava/lang/String;")
        //         jsonstr = JSON.parse(ret);
        //     }catch{
        //         console.warn("数据异常")
        //         jsonstr = {isload:0, freezetime: Date.now()+12332131231312}
        //     }
        // }
        // console.log("getBaoXiaoCondition",JSON.stringify(jsonstr))
        // return jsonstr
    };
    //  static getUserLevel() : number {
    // let getUserLevel
    // if (cc.sys.os === cc.sys.OS_ANDROID) {
    //     getUserLevel = jsb.reflection.callStaticMethod(ANDROID_PATH, "getMyLevel", "()I")
    // }
    // return getUserLevel ? getUserLevel : 4
    //  }
    JsbSdkScript.showBubble = function () {
        // if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "onBubbleClick", "()V");
        //  }
    };
    // static isNewPlayer() : number {
    // if (cc.sys.os === cc.sys.OS_ANDROID) {
    //     return jsb.reflection.callStaticMethod(ANDROID_PATH, "isNewPlayer", "()I");
    //  }
    //  }
    JsbSdkScript.playMergeAudio = function (index) {
        // if (cc.sys.os === cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(OC_RV_JSC_CLASS, "playMergeAudio:",`${index}`);
        // }
        // else if (cc.sys.os === cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(ANDROID_PATH, "playMergeAudio", "(Ljava/lang/String;)V",`${index}`);
        // }
    };
    JsbSdkScript.PrivacyPolicy = function () {
        //     if (cc.sys.os === cc.sys.OS_ANDROID) {
        //        jsb.reflection.callStaticMethod(ANDROID_PATH, "PrivacyPolicy", "()V");
        //    }
    };
    JsbSdkScript.TermsofUse = function () {
        //    if (cc.sys.os === cc.sys.OS_ANDROID) {
        //        jsb.reflection.callStaticMethod(ANDROID_PATH, "TermsofUse", "()V");
        //    }
    };
    JsbSdkScript._instance = null;
    return JsbSdkScript;
}());
exports.default = JsbSdkScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUGxhdGZvcm1JbnRlcmFjdGlvbi9Kc2JTZGtTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGVBQWUsR0FBRyxXQUFXLENBQUM7QUFFcEMsOEVBQThFO0FBQzlFLDhEQUE4RDtBQUM5RCxJQUFNLFlBQVksR0FBRywrQkFBK0IsQ0FBQTtBQUVwRDtJQWtCSTtRQWZBLHVCQUFrQixHQUF1QixJQUFJLENBQUM7UUFDOUMsa0JBQWEsR0FBcUIsSUFBSSxDQUFDO1FBRXZDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFhWixJQUFJLENBQUMsUUFBUSxHQUFHO1lBRVosNEJBQTRCLFlBQUMsTUFBTTtnQkFDL0IsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixJQUFJLElBQUk7dUJBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLElBQUksSUFBSSxFQUFFO29CQUNsRixxREFBcUQ7b0JBRXJELFlBQVksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pGO1lBQ0wsQ0FBQztZQUVELGlCQUFpQixZQUFDLE1BQU07Z0JBQ3BCLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJO3VCQUM3QyxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixJQUFJLElBQUksRUFBRTtvQkFFdkUsc0RBQXNEO29CQUN0RCxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN0RTtZQUNMLENBQUM7WUFFRCxpQkFBaUI7Z0JBQ2IsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRTtvQkFDOUwsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDaEU7WUFDTCxDQUFDO1lBRUQsaUJBQWlCO2dCQUNiLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLElBQUksSUFBSSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixJQUFJLElBQUksSUFBSSxTQUFTLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3BMLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7aUJBQzNEO1lBQ0wsQ0FBQztZQUVELDRCQUE0QixZQUFDLE1BQU07Z0JBRS9CLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJO3VCQUM3QyxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixJQUFJLElBQUksRUFBRTtvQkFFbEYsc0RBQXNEO29CQUN0RCxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNqRjtZQUNMLENBQUM7U0FDSixDQUFBO0lBQ0wsQ0FBQztJQW5ERCxzQkFBa0Isd0JBQVE7YUFBMUI7WUFDSSxJQUFHLFlBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFDO2dCQUM5QixZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7YUFDL0M7WUFFRCxPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUErQ00sMkJBQWMsR0FBckI7UUFDSSxxQ0FBcUM7UUFDckMseUNBQXlDO1FBQ3pDLDhFQUE4RTtRQUM5RSxJQUFJO0lBQ1IsQ0FBQztJQUVNLDhCQUFpQixHQUF4QjtRQUNJLGtCQUFrQjtRQUNsQiwwQ0FBMEM7UUFDMUMsOEZBQThGO1FBQzlGLElBQUk7UUFDSiwwQ0FBMEM7UUFDMUMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLDBCQUFhLEdBQXBCO1FBQ0kscUNBQXFDO1FBQ3JDLGlGQUFpRjtRQUNqRixJQUFJO1FBQ0oseUNBQXlDO1FBQ3pDLHFHQUFxRztRQUNyRyxJQUFJO1FBQ0osU0FBUztRQUNMLE9BQU87WUFDSCxRQUFRLEVBQUUsU0FBUztZQUNuQixpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZCLENBQUE7UUFDTCxJQUFJO0lBQ1IsQ0FBQztJQUVNLDJCQUFjLEdBQXJCO1FBQ0kscUNBQXFDO1FBQ3JDLDRGQUE0RjtRQUM1RiwwQkFBMEI7UUFDMUIsSUFBSTtRQUNKLDBDQUEwQztRQUMxQyxpSEFBaUg7UUFDakgsa0VBQWtFO1FBQ2xFLDhCQUE4QjtRQUM5QixVQUFVO1FBQ1YsSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSw4QkFBaUIsR0FBeEI7UUFDSSxxQ0FBcUM7UUFDckMsNEZBQTRGO1FBQzVGLDBCQUEwQjtRQUMxQixJQUFJO1FBQ0osMENBQTBDO1FBQzFDLG1HQUFtRztRQUNuRyxrRUFBa0U7UUFDbEUsOEJBQThCO1FBQzlCLFVBQVU7UUFDVixJQUFJO1FBQ0osT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU0saUNBQW9CLEdBQTNCO1FBQ0kscUNBQXFDO1FBQ3JDLGlGQUFpRjtRQUNqRixJQUFJO1FBQ0osMkNBQTJDO1FBQzNDLG9GQUFvRjtRQUNwRixJQUFJO1FBQ0osUUFBUTtRQUNSLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQixZQUFZO1FBQ1osaURBQWlEO1FBQ2pELGtGQUFrRjtRQUNsRixlQUFlO1FBQ2YsSUFBSTtJQUNSLENBQUM7SUFDRCx3QkFBd0I7SUFDakIsc0JBQVMsR0FBaEIsVUFBaUIsSUFBVztRQUN4QixxQ0FBcUM7UUFDckMseUZBQXlGO1FBQ3pGLElBQUk7UUFDSiwrQ0FBK0M7UUFDL0MsZ0ZBQWdGO1FBQ2hGLElBQUk7UUFDSixRQUFRO1FBQ1IseUJBQXlCO1FBQ3pCLDhDQUE4QztRQUM5Qyw4QkFBOEI7UUFDOUIsWUFBWTtRQUVaLGlEQUFpRDtRQUNqRCx1RUFBdUU7UUFDdkUsZUFBZTtRQUNmLElBQUk7SUFDUixDQUFDO0lBRU0seUJBQVksR0FBbkI7UUFDSSxxQ0FBcUM7UUFDckMseUVBQXlFO1FBQ3pFLElBQUk7UUFDSiwwQ0FBMEM7UUFDMUMsNEVBQTRFO1FBQzVFLElBQUk7SUFDUixDQUFDO0lBRU0sc0JBQVMsR0FBaEIsVUFBaUIsU0FBa0IsRUFBQyxRQUFpQjtRQUNyRCw0Q0FBNEM7UUFDNUMsb0lBQW9JO1FBQ3BJLFFBQVE7SUFDUixDQUFDO0lBRUEsY0FBYztJQUNQLGdDQUFtQixHQUExQjtRQUNHLG9EQUFvRDtRQUNwRCx5Q0FBeUM7UUFDekMsV0FBVztRQUNYLGlIQUFpSDtRQUNqSCxxQ0FBcUM7UUFDckMsY0FBYztRQUNkLCtCQUErQjtRQUMvQixzRUFBc0U7UUFDdEUsUUFBUTtRQUNSLElBQUk7UUFDSiw2REFBNkQ7UUFDN0QsaUJBQWlCO0lBQ3BCLENBQUM7SUFFRixvQ0FBb0M7SUFDaEMsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6Qyx3RkFBd0Y7SUFDeEYsSUFBSTtJQUNKLHlDQUF5QztJQUM3QyxLQUFLO0lBRUcsdUJBQVUsR0FBakI7UUFDRyx5Q0FBeUM7UUFDekMsb0ZBQW9GO1FBQ3BGLEtBQUs7SUFDUixDQUFDO0lBRUYsa0NBQWtDO0lBQzlCLHlDQUF5QztJQUN6QyxrRkFBa0Y7SUFDbEYsS0FBSztJQUNULEtBQUs7SUFFRSwyQkFBYyxHQUFyQixVQUFzQixLQUFLO1FBQ3ZCLHFDQUFxQztRQUNyQyxzRkFBc0Y7UUFDdEYsSUFBSTtRQUNKLDhDQUE4QztRQUM5QywyR0FBMkc7UUFDM0csSUFBSTtJQUNSLENBQUM7SUFFTSwwQkFBYSxHQUFwQjtRQUNBLDZDQUE2QztRQUM3QyxnRkFBZ0Y7UUFDaEYsT0FBTztJQUNSLENBQUM7SUFFTSx1QkFBVSxHQUFqQjtRQUNDLDRDQUE0QztRQUM1Qyw2RUFBNkU7UUFDN0UsT0FBTztJQUNSLENBQUM7SUE3TmUsc0JBQVMsR0FBZ0IsSUFBSSxDQUFBO0lBOE5oRCxtQkFBQztDQXZPRCxBQXVPQyxJQUFBO2tCQXZPb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnYW1lQ29uZmlnIGZyb20gXCIuLi9nYW1lQ29uZmlnXCI7XG5pbXBvcnQge1JlY2V2aWNlUlBSZXN1bHRNb2RlbCwgU2luZ2xlUlBDb25maWdNb2RlbH0gZnJvbSBcIi4uL01vZGVsL0RhdGFNb2RlbFwiO1xuaW1wb3J0IHtnYW1lU2NlbmVEZWxlZ2F0ZSwgUGFzc1Jld2FyZERlbGVnYXRlfSBmcm9tIFwiLi9QSURlbGVnYXRlXCI7XG5cbmNvbnN0IE9DX1JWX0pTQ19DTEFTUyA9IFwiT0NDQnJpZGdlXCI7XG5cbi8vIGNvbnN0IEFORFJPSURfUEFUSCA9IFwiY29tLnRhb25pLmFuZHJvaWQuYW5zd2VyLnVpLmFjdGl2aXR5Lk1haW5BY3Rpdml0eVwiICAgXG4vLyBjb25zdCBBTkRST0lEX1BBVEggPSBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIgXG5jb25zdCBBTkRST0lEX1BBVEggPSBcImNvbS5hbmRyb2lkLmdhbWUuTWFpbkFjdGl2aXR5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNiU2RrU2NyaXB0ICB7XG5cblxuICAgIHBhc3NSZXdhcmRsaXN0ZW5lcjogUGFzc1Jld2FyZERlbGVnYXRlID0gbnVsbDtcbiAgICBzY2VuZUxpc3RlbmVyOmdhbWVTY2VuZURlbGVnYXRlID0gbnVsbDtcblxuICAgIGRlbGVnYXRlID0gbnVsbDtcbiAgICBcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpKc2JTZGtTY3JpcHQgPSBudWxsXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTpKc2JTZGtTY3JpcHQgIHtcbiAgICAgICAgaWYoSnNiU2RrU2NyaXB0Ll9pbnN0YW5jZSA9PSBudWxsKXtcbiAgICAgICAgICAgIEpzYlNka1NjcmlwdC5faW5zdGFuY2UgPSBuZXcgSnNiU2RrU2NyaXB0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSnNiU2RrU2NyaXB0Ll9pbnN0YW5jZTtcbiAgICB9ICBcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcblxuICAgICAgICAgICAgZ2V0RXZlcnlSZXdhcmRBbW91bnRDYWxsQmFjayhyZXdhcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnBhc3NSZXdhcmRsaXN0ZW5lciAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICYmIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5wYXNzUmV3YXJkbGlzdGVuZXIuZ2V0RXZlcnlSZXdhcmRBbW91bnRDYWxsQmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGByZXBvcnRQYXNzUmV3YXJkQ2FsbEJhY2sgJHtyZXdhcmR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnBhc3NSZXdhcmRsaXN0ZW5lci5nZXRFdmVyeVJld2FyZEFtb3VudENhbGxCYWNrKHJld2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2hvd1ZpZGVvQ2FsbEJhY2socmV3YXJkKSB7XG4gICAgICAgICAgICAgICAgaWYgKEpzYlNka1NjcmlwdC5JbnN0YW5jZS5wYXNzUmV3YXJkbGlzdGVuZXIgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAmJiBKc2JTZGtTY3JpcHQuSW5zdGFuY2UucGFzc1Jld2FyZGxpc3RlbmVyLnNob3dWaWRlb0NhbGxCYWNrICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgcmVjZWl2ZVBhc3NSZXdhcmRDYWxsQmFjayAke3Jld2FyZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnBhc3NSZXdhcmRsaXN0ZW5lci5zaG93VmlkZW9DYWxsQmFjayhyZXdhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdhbWVTY2VuZURpc2FwZWFyKCl7XG4gICAgICAgICAgICAgICAgaWYgKEpzYlNka1NjcmlwdC5JbnN0YW5jZS5zY2VuZUxpc3RlbmVyICE9IG51bGwgJiYgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnNjZW5lTGlzdGVuZXIuZ2FtZVNjZW5lV2lsbERpc2FwcGVhciAhPSBudWxsICYmIHVuZGVmaW5lZCAhPSBKc2JTZGtTY3JpcHQuSW5zdGFuY2Uuc2NlbmVMaXN0ZW5lci5nYW1lU2NlbmVXaWxsRGlzYXBwZWFyKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnNjZW5lTGlzdGVuZXIuZ2FtZVNjZW5lV2lsbERpc2FwcGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXG4gICAgICAgICAgICBnYW1lU2NlbmVPblJlc3VtZSgpe1xuICAgICAgICAgICAgICAgIGlmIChKc2JTZGtTY3JpcHQuSW5zdGFuY2Uuc2NlbmVMaXN0ZW5lciAhPSBudWxsICYmIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5zY2VuZUxpc3RlbmVyLmdhbWVTY2VuZU9uUmVzdW1lICE9IG51bGwgJiYgdW5kZWZpbmVkICE9IEpzYlNka1NjcmlwdC5JbnN0YW5jZS5zY2VuZUxpc3RlbmVyLmdhbWVTY2VuZU9uUmVzdW1lKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgSnNiU2RrU2NyaXB0Lkluc3RhbmNlLnNjZW5lTGlzdGVuZXIuZ2FtZVNjZW5lT25SZXN1bWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRNZXJnZVJld2FyZEFtb3VudENhbGxCYWNrKHJld2FyZCkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKEpzYlNka1NjcmlwdC5JbnN0YW5jZS5wYXNzUmV3YXJkbGlzdGVuZXIgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAmJiBKc2JTZGtTY3JpcHQuSW5zdGFuY2UucGFzc1Jld2FyZGxpc3RlbmVyLmdldE1lcmdlUmV3YXJkQW1vdW50Q2FsbEJhY2sgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGByZWNlaXZlUGFzc1Jld2FyZENhbGxCYWNrICR7cmV3YXJkfWApO1xuICAgICAgICAgICAgICAgICAgICBKc2JTZGtTY3JpcHQuSW5zdGFuY2UucGFzc1Jld2FyZGxpc3RlbmVyLmdldE1lcmdlUmV3YXJkQW1vdW50Q2FsbEJhY2socmV3YXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1lcmdlUmV3YXJkKCl7XG4gICAgICAgIC8vIGlmIChnYW1lQ29uZmlnLmlzV2hpdGVCYWcpIHJldHVybjtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgLy8gICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoQU5EUk9JRF9QQVRILCBcImdldE1lcmdlUmV3YXJkXCIsIFwiKClWXCIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlcXVlc3RJc1doaXRlQmFvKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIGxldCBpc1doaXRlQmFvO1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkgeyBcbiAgICAgICAgLy8gICAgIGlzV2hpdGVCYW8gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJyZXF1ZXN0SXNXaGl0ZUJhb1wiLCBcIigpWlwiKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gaXNXaGl0ZUJhbz8gaXNXaGl0ZUJhbyA6IGZhbHNlOztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDb21tb25QYXJtKCkge1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19SVl9KU0NfQ0xBU1MsIFwiZ2V0Q29tbW9uUGFybTpcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRDb21tb25QYXJtXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnRW5nbGlzaCcsXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZJbnRlcnZhbHM6IDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAgXG4gICAgc3RhdGljIGdldFRvdGFsUmV3YXJkKCk6c3RyaW5nIHtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAvLyAgICAgbGV0IHRvdGFsUmV3YXJkID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19SVl9KU0NfQ0xBU1MsIFwiZ2V0VG90YWxSZXdhcmRcIik7XG4gICAgICAgIC8vICAgICByZXR1cm4gdG90YWxSZXdhcmQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBsZXQgdG90YWxSZXdhcmQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRUb3RhbFJld2FyZFwiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICAvLyAgICAgaWYodG90YWxSZXdhcmQgIT0gbnVsbCAmJiB0eXBlb2YgdG90YWxSZXdhcmQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0b3RhbFJld2FyZDtcbiAgICAgICAgLy8gICAgIH0gIFxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBcIjEwXCI7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1heFZhbHVlUmV3YXJkKCk6bnVtYmVyIHtcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAvLyAgICAgbGV0IHRvdGFsUmV3YXJkID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19SVl9KU0NfQ0xBU1MsIFwiZ2V0VG90YWxSZXdhcmRcIik7XG4gICAgICAgIC8vICAgICByZXR1cm4gdG90YWxSZXdhcmQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBsZXQgdG90YWxSZXdhcmQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRtYXhWYWx1ZVJld2FyZFwiLCBcIigpSVwiKTtcbiAgICAgICAgLy8gICAgIGlmKHRvdGFsUmV3YXJkICE9IG51bGwgJiYgdHlwZW9mIHRvdGFsUmV3YXJkID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdG90YWxSZXdhcmQ7XG4gICAgICAgIC8vICAgICB9ICBcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEV2ZXJ5UmV3YXJkQW1vdW50KCkge1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1JWX0pTQ19DTEFTUywgXCJnZXRFdmVyeVJld2FyZEFtb3VudDpcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7IFxuICAgICAgICAvLyAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChBTkRST0lEX1BBVEgsIFwiZ2V0RXZlcnlSZXdhcmRBbW91bnRcIiwgXCIoKVZcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGxldCBtb2RlbCA9IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV3YXJkOlwiMTAuMDBcIixcbiAgICAgICAgLy8gICAgICAgICAgICAgaXNuZXdwbGF5ZXIgOiAxLFxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBsZXQgbW9kZWxKc29uID0gSlNPTi5zdHJpbmdpZnkobW9kZWwpO1xuICAgICAgICAvLyAgICAgICAgIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5kZWxlZ2F0ZS5nZXRFdmVyeVJld2FyZEFtb3VudENhbGxCYWNrKG1vZGVsSnNvbik7XG4gICAgICAgIC8vICAgICB9LCAwLjIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8qKjDop4bpopHlub/lkYogMeaPkuWxj+W5v+WRiiAy5a6d566x6KeG6aKR5bm/5ZGKKi9cbiAgICBzdGF0aWMgc2hvd1ZpZGVvKHR5cGU6bnVtYmVyKSB7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgLy8gICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfUlZfSlNDX0NMQVNTLCBcInNob3dWaWRlbzphbmRJc0hDOlwiLCBgJHt0eXBlfWApO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHsgXG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJzaG93VmlkZW9cIiwgXCIoSSlWXCIsIHR5cGUpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2V7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgbW9kZWw6UmVjZXZpY2VSUFJlc3VsdE1vZGVsID0ge1xuICAgICAgICAvLyAgICAgICAgICAgICBhbW91bnQ6IFwiMS4wMFwiLFxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gICAgICAgICBsZXQgbW9kZWxKc29uID0gSlNPTi5zdHJpbmdpZnkobW9kZWwpO1xuICAgICAgICAvLyAgICAgICAgIEpzYlNka1NjcmlwdC5JbnN0YW5jZS5kZWxlZ2F0ZS5zaG93VmlkZW9DYWxsQmFjayhtb2RlbEpzb24pO1xuICAgICAgICAvLyAgICAgfSwgMC4yKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93V2l0aGRyYXcoKSB7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgLy8gICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfUlZfSlNDX0NMQVNTLCBcInNob3dXaXRoZHJhdzpcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJzaG93V2l0aGRyYXdcIiwgXCIoKVZcIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYnVyeVBvaW50KGV2ZW50bmFtZSA6IHN0cmluZyxqc29uZGF0YSA6IHN0cmluZykge1xuICAgIC8vICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgLy8gICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJidXJ5UG9pbnRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIixldmVudG5hbWUsanNvbmRhdGEpO1xuICAgIC8vICAgICB9XG4gICAgfVxuXG4gICAgIC8qKuiOt+WPluWuneeuseaJk+W8gOadoeS7tiAqL1xuICAgICBzdGF0aWMgZ2V0QmFvWGlhb0NvbmRpdGlvbigpIHtcbiAgICAgICAgLy8gbGV0IGpzb25zdHIgPSB7aXNsb2FkOiAxLCBmcmVlemV0aW1lOiBEYXRlLm5vdygpfVxuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAvLyAgICAgdHJ5e1xuICAgICAgICAvLyAgICAgICAgIGxldCByZXQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRCYW9YaWFvQ29uZGl0aW9uXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIilcbiAgICAgICAgLy8gICAgICAgICBqc29uc3RyID0gSlNPTi5wYXJzZShyZXQpO1xuICAgICAgICAvLyAgICAgfWNhdGNoe1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUud2FybihcIuaVsOaNruW8guW4uFwiKVxuICAgICAgICAvLyAgICAgICAgIGpzb25zdHIgPSB7aXNsb2FkOjAsIGZyZWV6ZXRpbWU6IERhdGUubm93KCkrMTIzMzIxMzEyMzEzMTJ9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRCYW9YaWFvQ29uZGl0aW9uXCIsSlNPTi5zdHJpbmdpZnkoanNvbnN0cikpXG4gICAgICAgIC8vIHJldHVybiBqc29uc3RyXG4gICAgIH1cblxuICAgIC8vICBzdGF0aWMgZ2V0VXNlckxldmVsKCkgOiBudW1iZXIge1xuICAgICAgICAvLyBsZXQgZ2V0VXNlckxldmVsXG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBnZXRVc2VyTGV2ZWwgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJnZXRNeUxldmVsXCIsIFwiKClJXCIpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGdldFVzZXJMZXZlbCA/IGdldFVzZXJMZXZlbCA6IDRcbiAgICAvLyAgfVxuXG4gICAgIHN0YXRpYyBzaG93QnViYmxlKCl7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChBTkRST0lEX1BBVEgsIFwib25CdWJibGVDbGlja1wiLCBcIigpVlwiKTtcbiAgICAgICAgLy8gIH1cbiAgICAgfVxuICAgICBcbiAgICAvLyBzdGF0aWMgaXNOZXdQbGF5ZXIoKSA6IG51bWJlciB7XG4gICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChBTkRST0lEX1BBVEgsIFwiaXNOZXdQbGF5ZXJcIiwgXCIoKUlcIik7XG4gICAgICAgIC8vICB9XG4gICAgLy8gIH1cblxuICAgIHN0YXRpYyBwbGF5TWVyZ2VBdWRpbyhpbmRleCkge1xuICAgICAgICAvLyBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1JWX0pTQ19DTEFTUywgXCJwbGF5TWVyZ2VBdWRpbzpcIixgJHtpbmRleH1gKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJwbGF5TWVyZ2VBdWRpb1wiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLGAke2luZGV4fWApO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc3RhdGljIFByaXZhY3lQb2xpY3koKSB7XG4gICAgLy8gICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgLy8gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoQU5EUk9JRF9QQVRILCBcIlByaXZhY3lQb2xpY3lcIiwgXCIoKVZcIik7XG4gICAgLy8gICAgfVxuICAgfVxuXG4gICBzdGF0aWMgVGVybXNvZlVzZSgpIHtcbiAgICAvLyAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgIC8vICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfUEFUSCwgXCJUZXJtc29mVXNlXCIsIFwiKClWXCIpO1xuICAgIC8vICAgIH1cbiAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/rewardScript/rewardAnimScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95d307sAchJQrtFQRLBUCLa', 'rewardAnimScript');
// script/rewardScript/rewardAnimScript.ts

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
var gameConfig_1 = require("../gameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardAnimScript = /** @class */ (function (_super) {
    __extends(rewardAnimScript, _super);
    function rewardAnimScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.rpArray = [];
        _this.targetNode = null;
        _this.Ani = null;
        _this.targetPos = null;
        return _this;
    }
    rewardAnimScript.prototype.onLoad = function () {
        for (var i = 0; i < this.content.childrenCount; i++) {
            var sp = this.content.children[i].getComponent(cc.Sprite);
            gameConfig_1.default.setMoneySp(sp, 1);
        }
    };
    rewardAnimScript.prototype.start = function () {
        // this.movieToTarget();
    };
    __decorate([
        property(cc.Node)
    ], rewardAnimScript.prototype, "content", void 0);
    __decorate([
        property([cc.Node])
    ], rewardAnimScript.prototype, "rpArray", void 0);
    __decorate([
        property(cc.Node)
    ], rewardAnimScript.prototype, "targetNode", void 0);
    __decorate([
        property(cc.Animation)
    ], rewardAnimScript.prototype, "Ani", void 0);
    rewardAnimScript = __decorate([
        ccclass
    ], rewardAnimScript);
    return rewardAnimScript;
}(cc.Component));
exports.default = rewardAnimScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcmV3YXJkU2NyaXB0L3Jld2FyZEFuaW1TY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQXVDO0FBR2pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBOEJDO1FBM0JHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFtQixFQUFFLENBQUM7UUFHN0IsZ0JBQVUsR0FBVSxJQUFJLENBQUE7UUFHeEIsU0FBRyxHQUFnQixJQUFJLENBQUE7UUFDdkIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFpQjlCLENBQUM7SUFmRyxpQ0FBTSxHQUFOO1FBRUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDekQsb0JBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzlCO0lBR0wsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDSSx3QkFBd0I7SUFDNUIsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDQTtJQVpOLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBOEJwQztJQUFELHVCQUFDO0NBOUJELEFBOEJDLENBOUI2QyxFQUFFLENBQUMsU0FBUyxHQThCekQ7a0JBOUJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWR1aW9Ub29scywge2VuZ2luZVR5cGV9IGZyb20gXCIuLi9hZHVpb1Rvb2xzXCI7XG5pbXBvcnQgZ2FtZUNvbmZpZyBmcm9tIFwiLi4vZ2FtZUNvbmZpZ1wiO1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9xaXVTY3JpcHQvR2FtZU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJld2FyZEFuaW1TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIFxuICAgIGNvbnRlbnQ6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIHJwQXJyYXk6IEFycmF5PGNjLk5vZGU+ID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YXJnZXROb2RlOmNjLk5vZGU9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gICAgQW5pOmNjLkFuaW1hdGlvbiA9IG51bGxcbiAgICB0YXJnZXRQb3M6IGNjLlZlYzIgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwO2k8dGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7aSsrKXtcbiAgICAgICAgICAgIGxldCBzcCA9IHRoaXMuY29udGVudC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICAgICAgZ2FtZUNvbmZpZy5zZXRNb25leVNwKHNwLDEpXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMubW92aWVUb1RhcmdldCgpO1xuICAgIH1cblxuICAgIFxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
