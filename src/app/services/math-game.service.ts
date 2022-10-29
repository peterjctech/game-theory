import * as dayjs from "dayjs";
import * as advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import { Injectable } from "@angular/core";
import { mathConfig, randomInteger } from "utils";

@Injectable({
    providedIn: "root",
})
export class MathGameService {
    constructor() {}

    generateProblem: any = {
        add: (range: [number, number]) => {
            const nums = [randomInteger(range), randomInteger(range)];
            return {
                directions: "Add",
                problem: `${nums[0]} + ${nums[1]}`,
                solution: `${nums[0] + nums[1]}`,
            };
        },
        subtract: (range: [number, number]) => {
            const nums = [randomInteger(range), randomInteger(range)];
            return {
                directions: "Subtract",
                problem: `${nums[0] + nums[1]} - ${nums[0]}`,
                solution: `${nums[1]}`,
            };
        },
        multiply: (ranges: [[number, number], [number, number]]) => {
            const nums = [randomInteger(ranges[0]), randomInteger(ranges[1])];
            return {
                directions: "Multiply",
                problem: `${nums[0]} x ${nums[1]}`,
                solution: `${nums[0] * nums[1]}`,
            };
        },
        divide: (ranges: [[number, number], [number, number]]) => {
            const nums = [randomInteger(ranges[0]), randomInteger(ranges[1])];
            return {
                directions: "Divide",
                problem: `${nums[0] * nums[1]} ÷ ${nums[0]}`,
                solution: `${nums[1]}`,
            };
        },
        percent: (nums: number[]) => {
            const base = nums[Math.floor(Math.random() * nums.length)];
            const numerator = randomInteger([1, base - 1]);
            return {
                directions: "Convert the fraction to a percent. Round to the nearest percent.",
                problem: `${numerator} / ${base}`,
                solution: Math.round((numerator / base) * 100).toString(),
            };
        },
        dates: (yearRange: [number, number]) => {
            const timestamp1 = dayjs().year(yearRange[0]).startOf("year").unix();
            const timestamp2 = dayjs().year(yearRange[1]).endOf("year").unix();
            const timestamp = randomInteger([timestamp1, timestamp2]);
            const date = dayjs.unix(timestamp);

            return {
                directions: "Find the day of the week for the following date:",
                problem: date.format("Do MMMM, YYYY"),
                solution: date.format("dddd"),
            };
        },
        square: (range: [number, number]) => {
            const num = randomInteger(range);
            return {
                directions: "Find the square of the following number:",
                problem: `Square of ${num}`,
                solution: (num * num).toString(),
            };
        },
        cube: (range: [number, number]) => {
            const num = randomInteger(range);
            return {
                directions: "Find the cube of the following number:",
                problem: `Cube of ${num}`,
                solution: (num * num * num).toString(),
            };
        },
        root: (range: [number, number]) => {
            const num = randomInteger(range);
            return {
                directions: "Find the square root of the following number:",
                problem: `Square root of ${num * num}`,
                solution: num.toString(),
            };
        },
    };

    getMathProblem = (level: number) => {
        const obj = mathConfig[level];
        const type = obj.types[Math.floor(Math.random() * obj.types.length)];
        const problem = this.generateProblem[type](obj.ranges[type]);
        return { ...problem, difficulty: obj.difficulty };
    };
}
