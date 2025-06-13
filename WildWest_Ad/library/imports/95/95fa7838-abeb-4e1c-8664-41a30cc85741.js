"use strict";
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