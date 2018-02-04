import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Reqbody, Watson } from '../models/watson';
import 'rxjs/Rx';

@Injectable()
export class WatsonService {

  private readonly watson_url = 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21';
  reqbody: Reqbody = {
    text: ''
  };

  constructor( private http: HttpClient ) {  }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'authorization': 'Basic ZGNmN2ZlYzQtMTkwMi00NTZhLTk0ZjMtODEwODIzODlkM2M1OjJ6RmhpVFkxQnlhMQ=='
    })
  };

  postWatson(body: string): Observable<any> {
    this.reqbody.text = body;
    return this.http.post(this.watson_url, this.reqbody, this.httpOptions)
      .map(res => {
        return res;
      });
  }
}
