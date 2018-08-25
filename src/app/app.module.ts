import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NotePreviewComponent } from './notes/note-preview/note-preview.component';
import { NoteComponent } from './notes/note/note.component';
import { HeaderComponent } from './header/header.component';
import { AuthDialogComponent } from './header/auth-dialog/auth-dialog.component';
import { ReactiveFormsModule, ControlContainer } from '@angular/forms';
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';

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
    HttpClientModule
  ],
  entryComponents: [
    AuthDialogComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
