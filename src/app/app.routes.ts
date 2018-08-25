import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from "./notes/notes.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'notes',
    component: NotesComponent
  }
];

export { routes };
