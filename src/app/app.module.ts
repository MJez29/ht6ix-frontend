import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NotePreviewComponent } from './notes/note-preview/note-preview.component';
import { NoteComponent } from './notes/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    NotePreviewComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
