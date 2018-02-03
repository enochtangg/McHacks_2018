import { Component } from '@angular/core';
import { WatsonService } from './services/watsonService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input: string = '';

  constructor( watsonService: WatsonService ) { }

  postWatson(body: strig) {
    this.watsonService.postWatson()
  }

  onClickSubmit() {

  }
}
