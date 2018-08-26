import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from "./notes/notes.component";
import { NoteComponent } from "./note/note.component";
import { AuthGuardService } from "./auth-guard.service";
import { NotesResolver } from "./notes/notes.resolver";
import * as moment from "moment";
import { NoteResolver } from "./note/note.resolver";

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
    path: 'notes/new',
    component: NoteComponent,
    data: {
      note: {
        canEdit: true,
        date: moment().toISOString(),
        body: '',
        isNew: true
      }
    }
  }, {
    path: 'notes/:id',
    canActivate: [AuthGuardService],
    component: NoteComponent,
    resolve: {
      note: NoteResolver
    }
  }, {
    path: '**',
    redirectTo: ''
  }
];

export { routes };
