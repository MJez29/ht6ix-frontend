import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";
import { NoteResponse, Note } from "./note";
import { map } from "rxjs/operators";

@Injectable()
export class NoteResolver implements Resolve<Note> {
  constructor(
    private apiService: ApiService
  ) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Note> {
    return this.apiService.getNote(route.params.id)
      .pipe(
        map((res) => res.message)
      );
  }
}
