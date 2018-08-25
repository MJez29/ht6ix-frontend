import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from "./notes/notes.component";
import { NoteComponent } from "./notes/note/note.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'notes',
    component: NotesComponent,
  }, {
    path: 'notes/:id',
    component: NoteComponent
  }
];

export { routes };
