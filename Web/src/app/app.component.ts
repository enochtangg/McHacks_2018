import { Component } from '@angular/core';
import { WatsonService } from './services/watsonService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input = '';

  constructor( private watsonService: WatsonService ) { }

  postWatson(body: string) {
    this.watsonService.postWatson(body).subscribe(res => console.log(res));
  }

  onClickSubmit() {
    this.postWatson(this.input);
  }
}
