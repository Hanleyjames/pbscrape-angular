import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Keyword} from '../_models/keywords';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {
  data: any;
  readonly ROOT_URL: 'https://localhost:44313/api/PBScrape';
  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }
  changeMessage(message: object) {
    this.messageSource.next(message);
    console.log("Message changed");
  }
  getAllData() {
    return this.http.get(this.ROOT_URL);
  }
}
