import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Notes } from "./notes";
import { ApiService } from "../api.service";

@Injectable()
export class NotesResolver implements Resolve<Notes> {
  constructor(
    private apiService: ApiService
  ) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Notes> {
    return this.apiService.getNotes();
  }
}
