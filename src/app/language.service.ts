import { Injectable } from '@angular/core';
import { Language } from 'src/typings/Language';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient: HttpClient) { }

  addLanguage(language: Language) {
    return this.httpClient.post('http://localhost:3000/languages', language);
  }
}
