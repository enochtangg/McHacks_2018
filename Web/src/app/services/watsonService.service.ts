import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WatsonService {

  private readonly watson_url = 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21';
  private readonly username = 'dcf7fec4-1902-456a-94f3-81082389d3c5';
  private readonly password = '2zFhiTY1Bya1';

  constructor( private http: HttpClient ) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':  'application/json',
      'authorization': 'Basic ZGNmN2ZlYzQtMTkwMi00NTZhLTk0ZjMtODEwODIzODlkM2M1OjJ6RmhpVFkxQnlhMQ=='
    })
  };

  postWatson(body): Observable<any> {
    return this.http.post(this.watson_url, body, this.httpOptions)
      .map(res => console.log(res));
  }
}
