export class JsHelper {

    public static getRandomInt(min: number = 0, max: number): number {
        const minNum: number = Math.ceil(min);
        const maxNum: number = Math.floor(max);
        return Math.floor((Math.random() * (max - min)) + min);
    }

    public static isNumber(value: any): boolean {
        const x = +value;
        return x.toString() === value && !Number.isNaN(x);
    }

}
