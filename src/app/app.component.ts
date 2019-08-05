import { Component } from "@angular/core";
import questions from "./questions.json";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  questions = questions;
  arrlength: number = questions.length;
  title: string = "myFirstAngularApp";
  images = [];
  texts = [];
  errr = false;
  gen(num: number) {
    this.images = [];
    this.texts = [];
    let newarr = [];
    let regURL = new RegExp(/^https?:\/\//i);
    this.errr = false;

    if (num > this.questions.length || num < 0) {
      this.errr = true;
      throw new Error("error");
    }
    if (num == questions.length) {
      newarr = this.questions;
    }
    while (newarr.length < num) {
      newarr = this.questions.reduce((acc, task) => {
        const shouldPush: boolean = !!Math.round(Math.random());
        return shouldPush && acc.length < num ? [...acc, task] : acc;
      }, []);
    }
    newarr.forEach(e => {
      if (regURL.test(e)) {
        this.images.push(e);
      } else this.texts.push(e);
    });
  }
}
