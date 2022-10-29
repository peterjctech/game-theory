export const mathConfig: any = {
    1: {
        difficulty: "Simple",
        types: ["add", "subtract", "percent"],
        ranges: { add: [1, 20], subtract: [1, 20], percent: [20, 50] },
    },
    2: {
        difficulty: "Novice",
        types: ["add", "subtract", "multiply", "divide", "percent"],
        ranges: {
            add: [1, 50],
            subtract: [1, 50],
            multiply: [
                [1, 10],
                [1, 10],
            ],
            divide: [
                [1, 10],
                [1, 10],
            ],
            percent: [20, 50],
        },
    },
    3: {
        difficulty: "Very Easy",
        types: ["add", "subtract", "multiply", "divide", "percent", "square", "root"],
        ranges: {
            add: [1, 100],
            subtract: [1, 100],
            multiply: [
                [2, 12],
                [2, 12],
            ],
            divide: [
                [2, 12],
                [2, 12],
            ],
            percent: [2, 10],
            square: [2, 5],
            root: [2, 5],
        },
    },
    4: {
        difficulty: "Easy",
        types: ["add", "subtract", "multiply", "divide", "percent", "square", "root"],
        ranges: {
            add: [50, 100],
            subtract: [50, 100],
            multiply: [
                [2, 12],
                [2, 20],
            ],
            divide: [
                [2, 12],
                [2, 20],
            ],
            percent: [4, 5, 10],
            square: [3, 10],
            root: [3, 10],
        },
    },
    5: {
        difficulty: "Moderately Easy",
        types: ["add", "subtract", "multiply", "divide", "percent", "square", "root", "cube"],
        ranges: {
            add: [100, 500],
            subtract: [100, 500],
            multiply: [
                [2, 12],
                [11, 100],
            ],
            divide: [
                [2, 12],
                [11, 100],
            ],
            percent: [3, 5, 8, 12],
            square: [11, 12],
            root: [11, 12],
            cube: [2, 6],
        },
    },
    6: {
        difficulty: "Medium",
        types: ["add", "subtract", "multiply", "divide", "percent", "square", "root", "cube"],
        ranges: {
            add: [100, 1000],
            subtract: [100, 1000],
            multiply: [
                [11, 20],
                [11, 100],
            ],
            divide: [
                [11, 20],
                [11, 100],
            ],
            percent: [6, 8, 9, 11, 12],
            square: [13, 16],
            root: [13, 16],
            cube: [6, 10],
        },
    },
    7: {
        difficulty: "Moderately Difficult",
        types: ["add", "subtract", "multiply", "divide", "percent", "square", "root", "cube"],
        ranges: {
            add: [400, 1000],
            subtract: [400, 1000],
            multiply: [
                [11, 100],
                [11, 100],
            ],
            divide: [
                [11, 100],
                [11, 100],
            ],
            percent: [6, 9, 11, 12],
            square: [13, 20],
            root: [13, 20],
            cube: [11, 12],
        },
    },
    8: {
        difficulty: "Difficult",
        types: ["add", "subtract", "multiply", "divide", "percent", "dates", "square", "root", "cube"],
        ranges: {
            add: [800, 2000],
            subtract: [800, 2000],
            multiply: [
                [20, 100],
                [50, 200],
            ],
            divide: [
                [20, 100],
                [50, 200],
            ],
            percent: [6, 7, 9, 11, 14],
            dates: [2000, 2022],
            square: [13, 30],
            root: [13, 30],
            cube: [12, 13],
        },
    },
    9: {
        difficulty: "Very Difficult",
        types: ["add", "subtract", "multiply", "divide", "percent", "dates", "square", "root", "cube"],
        ranges: {
            add: [1000, 5000],
            subtract: [1000, 5000],
            multiply: [
                [20, 100],
                [100, 1000],
            ],
            divide: [
                [20, 100],
                [100, 1000],
            ],
            percent: [7, 14, 15, 16],
            dates: [1900, 2050],
            square: [13, 50],
            root: [13, 50],
            cube: [13, 14],
        },
    },
    10: {
        difficulty: "Advanced",
        types: ["add", "subtract", "multiply", "divide", "percent", "dates", "square", "root", "cube"],
        ranges: {
            add: [1000, 10000],
            subtract: [1000, 10000],
            multiply: [
                [100, 1000],
                [100, 1000],
            ],
            divide: [
                [100, 1000],
                [100, 1000],
            ],
            percent: [13, 17, 18, 19],
            dates: [0, 3000],
            square: [20, 100],
            root: [20, 100],
            cube: [14, 15],
        },
    },
};
