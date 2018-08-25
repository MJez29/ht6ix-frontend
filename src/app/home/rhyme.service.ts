import { Injectable } from "@angular/core";
import { HomeComponent } from "./home.component";

@Injectable()
export class RhymeService {
  public hi = 'hi';

  private readonly rhymes: string[] = [
    "Everything will be okay",
    "Keeps your troubles away"
  ];

  public getRhyme() {
    return this.rhymes[(Math.random() * this.rhymes.length) | 0];
  }
}
