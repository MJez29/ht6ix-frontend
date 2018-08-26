import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public formGroup = new FormGroup({
    note: new FormControl('', [Validators.required])
  });

  public get date() {
    return moment(this.activatedRoute.snapshot.data.note.date).format('MMM Do, YYYY');
  }

  public get canEdit() {
    return this.activatedRoute.snapshot.data.note.canEdit;
  }

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.formGroup = new FormGroup({
      note: new FormControl({
        value: this.activatedRoute.snapshot.data.note.body || '',
        disabled: !this.canEdit
      }, [Validators.required])
    });
  }

  ngOnInit() {
  }

  public save() {

  }
}
