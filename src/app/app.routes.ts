import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from "./notes/notes.component";
import { NoteComponent } from "./notes/note/note.component";
import { AuthGuardService } from "./auth-guard.service";
import { NotesResolver } from "./notes/notes.resolver";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'notes',
    canActivate: [AuthGuardService],
    resolve: {
      notes: NotesResolver
    },
    component: NotesComponent,
  }, {
    path: 'notes/:id',
    canActivate: [AuthGuardService],
    component: NoteComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];

export { routes };
