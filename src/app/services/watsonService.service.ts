import {Injectable} from '@angular/core';


@Injectable()
export class WatsonService {
  ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
  tone_analyzer = new ToneAnalyzerV3({
    username: '••••••••••••••••••••••••••••••••••••',
    password: '••••••••••••',
    version_date: '2017-09-21',
    headers: {
      'X-Watson-Learning-Opt-Out': 'true'
    }
  });
  params = {
    'tone_input': require('tone.json'),
    'content_type': 'application/json'
  };
  postWatson() {
  }
}
