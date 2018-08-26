import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Notes } from './notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  public get notes(): Notes {
    return this.activatedRoute.snapshot.data.notes;
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }  

  public canCreateNewNote() {
    return this.notes.filter(note => note.canEdit).length === 0;
  }

}
