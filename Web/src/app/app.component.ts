import { Component } from '@angular/core';
import { WatsonService } from './services/watsonService.service';
import { Watson } from './models/watson';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input = '';
  watson: Observable<Watson>;
  watsonObject: Watson;

  constructor( private watsonService: WatsonService ) { }

  postWatson(body: string) {
    this.watson = this.watsonService.postWatson(body);
    this.watson.subscribe(res => this.watsonObject = Object.assign({}, res));
  }

  onClickSubmit() {
    this.postWatson(this.input);
  }
}
