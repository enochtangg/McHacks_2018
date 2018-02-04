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

    //
    // highest_tone = 0;
    // highest_tone_obj;
    // arr_length = watson['tones'].length();
    // highest_tone = watson['tones'][0]['score'];
    // highest_tone_obj = watson['tones'][0];
    //
    //
    // for (i = 0; i < arr_length; i++){
    //   if (watson['tones'][i]['score']; > highest_tone){
    //     highest_tone_obj = watson['tones'][i];
    //   }
    // }
    //
    // url="https://open.spotify.com/embed/user/amanmathur03/playlist/6y6fzFv02yWpiUtkJRLWSg";


}
