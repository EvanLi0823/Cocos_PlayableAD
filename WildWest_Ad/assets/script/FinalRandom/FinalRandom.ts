import { Point } from "./Point";

 

export class FinalRandom {

    /**
     * 创建一个随机数生成器
     */
    public constructor(seed: number) {
        this.seed = seed;
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
    }
    /**
     * 设置用于随机数生成器的种子，如果不设置则实际是取当前时间毫秒数
     */
    private seed: number;
    /**
     * 返回一个随机数，在0.0～1.0之间
     */
    private get value(): number {
        return this.range(0, 1);
    }
    /**
     * 返回半径为1的圆内的一个随机点
     */
    private get insideUnitCircle(): Point {
        var randomAngle: number = this.range(0, 360);
        var randomDis: number = this.range(0, 1);
        var randomX: number = randomDis * Math.cos(randomAngle * Math.PI / 180);
        var randomY: number = randomDis * Math.sin(randomAngle * Math.PI / 180);
        return new Point(randomX, randomY);
    }
    /**
     * 返回半径为1的圆边的一个随机点
     */
    private get onUnitCircle(): Point {
        var randomAngle: number = this.range(0, 360);
        var randomX: number = Math.cos(randomAngle * Math.PI / 180);
        var randomY: number = Math.sin(randomAngle * Math.PI / 180);
        return new Point(randomX, randomY);
    }
    /**
     * 返回一个在min和max之间的随机浮点数
     */
    private range(min: number, max: number): number {
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
        max = max || 1;
        min = min || 0;
        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min);
    }
    /**
     * 设置用于随机数生成器的种子，如果不设置则实际是取当前时间毫秒数
     */
    private static seed: number;
    /**
     * 返回一个随机数，在0.0～1.0之间
     */
    private static get value(): number {
        return this.range(0, 1);
    }
    /**
     * 返回半径为1的圆内的一个随机点
     */
    private static get insideUnitCircle(): Point {
        var randomAngle: number = this.range(0, 360);
        var randomDis: number = this.range(0, 1);
        var randomX: number = randomDis * Math.cos(randomAngle * Math.PI / 180);
        var randomY: number = randomDis * Math.sin(randomAngle * Math.PI / 180);
        return new Point(randomX, randomY);
    }
    /**
     * 返回半径为1的圆边的一个随机点
     */
    private static get onUnitCircle(): Point {
        var randomAngle: number = this.range(0, 360);
        var randomX: number = Math.cos(randomAngle * Math.PI / 180);
        var randomY: number = Math.sin(randomAngle * Math.PI / 180);
        return new Point(randomX, randomY);
    }
    /**
     * 返回一个在min和max之间的随机浮点数
     */
    private static range(min: number, max: number): number {
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
        max = max || 1;
        min = min || 0;
        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min);
    }




    
    /**
     * 返回一个在[0,max)之间的整数
     * @param max 
     */
    public static RandInt(max: number): number {
        return Math.floor(FinalRandom.range(0, max));
    }


    /**
     * 返回一个在[min,max)之间的整数
     * @param min 
     * @param max 
     */
    public static RandIntBetween(min: number, max: number) {
        return Math.floor(FinalRandom.range(min, max));
    }

    /**
     * 返回一个在[0，max)之间的浮点数
     * @param max 最大数
     */
    public static RandFloat(max: number): number {
        return FinalRandom.range(0, max);
    }

    /**
     * 返回一个在[min,max)之间的浮点数
     * @param min 
     * @param max 
     */
    public static RandFloatBetween(min: number, max: number): number {
        return FinalRandom.range(min, max);
    }

}
