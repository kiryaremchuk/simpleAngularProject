import { Injectable } from "@angular/core";
import questions from "./questions.json";
@Injectable({
  providedIn: "root"
})
export class DataopeatorService {
  constructor() {}
  questions: string[] = questions;
  // errr = false;
  getQuestionsLength() {
    const arrlength: number = questions.length;
    return arrlength;
  }
  getError(num: number) {
    let errr: boolean;
    const arrlength: number = questions.length;
    if (num > arrlength || num < 0) {
      return (errr = true);
    }
  }
  generateRandomArray(num: number): string[] {
    let newarr = [];
    if (num == questions.length) {
      newarr = this.questions;
    }
    if (num <= questions.length) {
      while (newarr.length < num) {
        newarr = this.questions.reduce((acc, task) => {
          const shouldPush: boolean = !!Math.round(Math.random());
          return shouldPush && acc.length < num ? [...acc, task] : acc;
        }, []);
      }
      return newarr;
    } else throw new Error("error");
  }
  divideArray(arr: string[]) {
    let arrays = {
      images: [],
      texts: []
    };
    let regURL = new RegExp(/^https?:\/\//i);
    arr.forEach(e => {
      if (regURL.test(e)) {
        arrays.images.push(e);
      } else arrays.texts.push(e);
    });
    return arrays;
  }
}
