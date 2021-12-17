// <!-- COMP229 - Fall 2021 - - Sec 09
// Group - 13
// WEbExpert -->

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey.model';

const PROTOCOL = "https";
const PORT = 5000;
const API_PATH = "api/surveys";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  baseUrl: string;

  constructor(private http: HttpClient) {
      this.baseUrl = `https://comp229-sec9-group13-webexpert.herokuapp.com/${API_PATH}`;
      //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/${API_PATH}`;
   }

  getAll(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.baseUrl}/list`);
  }

  get(id: any): Observable<Survey> {
    return this.http.get(`${this.baseUrl}/details/${id}`);
  }

  create(data: any, path: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${path}`, data);
  }

  update(data: any, path: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${path}`, data);
  }

  delete(data: any, path: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${path}`, data);
  }
}
