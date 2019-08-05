import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import questions from "./questions.json";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
