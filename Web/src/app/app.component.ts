import { Component } from '@angular/core';
import { WatsonService } from './services/watsonService.service';
import { Watson, Reqbody, DbReq } from './models/watson';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AngularFireDatabase } from 'angularfire2/database';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';

  hidden = false;
  watson: Observable<Watson>;
  watsonObject: Watson;
  input = '';

  textObservable: Observable<any>;
  dbText: DbReq = {
    text: []
  };

  constructor( private watsonService: WatsonService, private db: AngularFireDatabase ) { }

  input = '';
  watson: Observable<Watson>;
  watsonObject: Watson;
  mobile = false;
  url = '';
  tone_id = '';
  
  anger = 'https://open.spotify.com/embed/user/enochtaangg/playlist/3MXfQQtHqCXx676Zmtvmqn'
  analytical = 'https://open.spotify.com/embed/user/enochtaangg/playlist/1qqCvNVL9kyNUOgM5phoR3'
    confident = 'https://open.spotify.com/embed/user/enochtaangg/playlist/5ZOH0oqGX72Eg7pl7KfRYG'
    sad = 'https://open.spotify.com/embed/user/enochtaangg/playlist/4mz1T5PXo77pTUeRcq5wgX'
    fear = 'https://open.spotify.com/embed/user/enochtaangg/playlist/1K8xqqgy4usxM61aFQHqX0'
    joy = 'https://open.spotify.com/embed/user/enochtaangg/playlist/4ENsvFFoXRKO5F4c3v1k7F'

  constructor( private watsonService: WatsonService, public sanitizer: DomSanitizer ) { }


  postWatson(body: string) {
    this.watson = this.watsonService.postWatson(body);
  this.watson.subscribe(res => this.watsonObject = Object.assign({}, res));


      setTimeout(() => console.log(this.watsonObject.document_tone.tones[0].tone_name), 1000)

      setTimeout(() => {if (this.watsonObject.document_tone.tones[0].tone_id == 'sadness') {
         this.url = this.sad;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'anger') {
         this.url = this.anger;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'analytical') {
         this.url = this.analytical;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'confident') {
         this.url = this.confident;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'fear') {
         this.url = this.fear;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'joy') {
         this.url = this.joy;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'tentative') {
         this.url = this.analytical;
       } else {
         this.url = this.joy
       }}, 1000);



    }




  onClickSubmit() {
   this.input === '' ? this.getFromDb() : this.postWatson(this.input);
  }


  toggleWebApp() {
    this.hidden = !this.hidden;
  }

  getFromDb() {
    this.textObservable = this.db.list('/').valueChanges();
    this.textObservable.subscribe(res => this.dbText.text = Object.assign(res));
    setTimeout(() => console.log(this.dbText.text[0]), 1000);
    setTimeout(() => this.postWatson(this.dbText.text[0]), 1000);
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

  toggleMobileApp(){
    this.mobile = !this.mobile;
  }

}
