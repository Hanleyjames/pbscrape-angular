import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Keyword} from '../_models/keywords';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  readonly ROOT_URL: 'https://localhost:44313/api/PBScrape';
  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(ROOT_URL);
  }
}
