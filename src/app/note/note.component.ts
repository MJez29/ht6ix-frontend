import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from '../api.service';
import { NoteResponse } from './note';

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

  public get isNew() {
    return this.activatedRoute.snapshot.data.note.isNew;
  }

  public get id() {
    return this.activatedRoute.snapshot.data.note._id;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
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
    if (this.isNew) {
      this.apiService.createNote(this.formGroup.get('note').value, moment().toISOString())
        .subscribe(({ message: { _id: id } }: NoteResponse) => {
          this.router.navigate(['/notes', id]);
        });
    } else {
      this.apiService.updateNote(this.id, this.formGroup.get('note').value)
        .subscribe();
    }
  }
}
