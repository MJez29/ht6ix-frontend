import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RhymeService } from './rhyme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RhymeService]
})
export class HomeComponent {

  constructor(
    private rhymeService: RhymeService
  ) { }

  public getRyhme() {
    return this.rhymeService.getRhyme();
  }

}
