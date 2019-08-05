import { Injectable } from "@angular/core";
import questions from "./questions.json";
@Injectable({
  providedIn: "root"
})
export class DataopeatorService {
  constructor() {}
  private questions: string[] = questions;
}
