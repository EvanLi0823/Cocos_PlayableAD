
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