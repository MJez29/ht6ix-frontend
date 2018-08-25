import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit {

  @Input()
  public id: string;

  @Input()
  public preview: string;

  @Input()
  public date: string;

  constructor() { }

  ngOnInit() {
  }

}
