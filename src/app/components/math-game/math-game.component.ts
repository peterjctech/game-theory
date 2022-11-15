import { Component, OnInit } from "@angular/core";
import { MathGameService } from "services";
@Component({
    selector: "app-math-game",
    templateUrl: "./math-game.component.html",
    styleUrls: ["./math-game.component.scss"],
})
export class MathGameComponent implements OnInit {
    level: number = 1;
    score: number = 0;
    questionsAnswered: number = 0;
    finalScore: number | null = null;
    timeLeft: number = 300;
    input: string = "";
    isStarted: boolean = false;
    equation: { directions: string; problem: string; solution: string; difficulty: string } = {
        directions: "",
        problem: "",
        solution: "",
        difficulty: "",
    };

    handleChange = (input: string) => {
        this.input = input;
        if (this.input === this.equation.solution) {
            setTimeout(() => {
                this.questionsAnswered++;
                this.input = "";
                this.score += this.level;
                this.level = Math.min(Math.floor(this.questionsAnswered / 10) + 1, 10);
                this.getNewEquation();
            }, 100);
        }
    };
    startGame: () => void = () => {
        this.isStarted = true;
        this.input = "";
        this.finalScore = null;
        this.getNewEquation();

        const timer = setInterval(() => {
            if (this.timeLeft <= 0) {
                clearInterval(timer);
                this.resetState();
                this.finalScore = this.score;
            }
            this.timeLeft--;
        }, 1000);
    };
    getNewEquation: () => void = () => {
        this.equation = this.mathService.getMathProblem(this.level);
    };

    resetState: () => void = () => {
        this.equation = { directions: "", problem: "", solution: "", difficulty: "" };
        this.input = "";
        this.isStarted = false;
        this.timeLeft = 300;
        this.finalScore = null;
        this.score = 0;
        this.level = 0;
        this.questionsAnswered = 0;
    };

    constructor(private mathService: MathGameService) {}

    ngOnInit(): void {}
}
