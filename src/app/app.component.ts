import { Component } from "@angular/core";
import { DataopeatorService } from "./dataopeator.service";
//import questions from "./questions.json";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataopeatorService]
})
export class AppComponent {
  constructor(private dataopeatorService: DataopeatorService) {}
  arrlength = this.dataopeatorService.getQuestionsLength();
  errr = false;
  images: string[];
  texts: string[];
  title: string = "myFirstAngularApp";
  gen(num: number): void {
    let err = this.dataopeatorService.getError(num);
    this.errr = err;
    let newarr = this.dataopeatorService.generateRandomArray(num);
    let result = this.dataopeatorService.divideArray(newarr);
    this.images = result.images;
    this.texts = result.texts;
  }
}
