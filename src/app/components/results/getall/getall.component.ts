import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {KeywordsService} from '../../../_services/keywords.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  keywords: Object;

  constructor(private http: HttpClient,
              private data: KeywordsService) { }

  ngOnInit() {
    this.data.getAllData().subscribe(data => {
      this.keywords = data;
      console.log(this.keywords);
    })
  }

}
