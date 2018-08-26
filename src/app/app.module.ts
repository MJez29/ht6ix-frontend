import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NotePreviewComponent } from './notes/note-preview/note-preview.component';
import { NoteComponent } from './note/note.component';
import { HeaderComponent } from './header/header.component';
import { AuthDialogComponent } from './header/auth-dialog/auth-dialog.component';
import { ReactiveFormsModule, ControlContainer } from '@angular/forms';
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { NotesResolver } from './notes/notes.resolver';
import { NoteResolver } from './note/note.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    NotePreviewComponent,
    NoteComponent,
    HeaderComponent,
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  entryComponents: [
    AuthDialogComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    NotesResolver,
    NoteResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
