import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

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
  public set date(d: string) {
    this.formattedDate = moment(d).format('MMM Do, YYYY');
  }

  public formattedDate: string;

  @Input()
  public canEdit: string;

  constructor() { }

  ngOnInit() {
  }

  public getIcon() {
    return this.canEdit ? 'create' : 'remove_red_eye';
  }
}
